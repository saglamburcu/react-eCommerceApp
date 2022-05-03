import { Box, Text, Image, Button, Flex, Alert, AlertIcon, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Textarea, FormControl, FormLabel } from "@chakra-ui/react";
import BasketContext from "../../contexts/BasketContext";
import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { postOrder } from "../../api";

function Basket() {

  const { items, removeToBasket, emptyBasket } = useContext(BasketContext);

  const total = items.reduce((acc, current) => acc + current.price, 0);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef();
  const finalRef = useRef();

  const [address, setAddress] = useState([]);

  const handleSubmit = async () => {
    const itemsIDs = items.map(item => item._id);

    const input = {
      items: JSON.stringify(itemsIDs),
      address
    }

    const response = await postOrder(input);
    //console.log(response)

    emptyBasket();
    onClose();

  }

  return (
    <Flex justifyContent="center" >
      <Box p="10">

        {
          items.length < 1 && (
            <Alert status='warning' width="full">
              <AlertIcon />
              You have not any items in your basket.
            </Alert>
          )
        }

        {
          items.length > 0 && (
            <Box>
              <ul>
                {
                  items.map(item => (

                    <li style={{ marginBottom: "50px" }}>
                      <Link to={`/product/${item._id}`}>
                        <Text textAlign="center" color="palevioletred" fontSize={18} fontWeight="medium" mb={5}>{item.title}</Text>
                        <Image borderRadius={10} src={item.photos[0]} htmlWidth="300" alt="item" />
                      </Link>

                      <Text textAlign="center" fontWeight="semibold">{item.price} TL</Text>

                      <Flex justifyContent="center" mt="5">
                        <Button colorScheme="pink" onClick={() => removeToBasket(item)}>
                          Remove from basket
                        </Button>
                      </Flex>
                    </li>
                  ))
                }

                <Flex justifyContent="center">
                  <Box fontWeight="extrabold" fontSize="20" color="goldenrod">
                    Total: {total} TL
                  </Box>
                </Flex>
              </ul>


              <Box display="flex" justifyContent="center" mt="10"  >
                <Button colorScheme="green" onClick={onOpen}>Order</Button>
              </Box>

              <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Create your account</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <FormControl>
                      <FormLabel>Adress</FormLabel>
                      <Textarea ref={initialRef} placeholder='Adress' value={address} onChange={(e) => setAddress(e.target.value)} />
                    </FormControl>
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={handleSubmit}>
                      Save
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Box>
          )
        }
      </Box>
    </Flex >
  )
};

export default Basket;