import { Box, Text, Image, Button, Flex, Alert, AlertIcon } from "@chakra-ui/react";
import BasketContext from "../../contexts/BasketContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Basket() {

  const { items, removeToBasket } = useContext(BasketContext);

  const total = items.reduce((acc, current) => acc + current.price, 0);

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
          )
        }
      </Box>
    </Flex>


  )
};

export default Basket;