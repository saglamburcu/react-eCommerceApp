import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchProduct } from "../../api";
import { Box, Button, Badge, Container, Center } from "@chakra-ui/react";
import ImageGallery from 'react-image-gallery';
import moment from "moment";
import BasketContext from "../../contexts/BasketContext";
import { useContext } from "react";

function ProductDetail() {
  const { product_id } = useParams();
  const { addToBasket, items } = useContext(BasketContext);

  const { isLoading, error, data } = useQuery(["product", product_id], () => fetchProduct(product_id))

  if (isLoading) {
    return <div>Loading...</div>
  };

  if (error) {
    return <div>Error</div>
  };

  const images = data.photos.map((image) => ({ original: image }));
  const findBasketItem = items.find(item => item._id === product_id);

  return (
    <Container maxW='md' centerContent>
      <Box>
        <Center>
          <Box m="5" fontWeight='semibold' as='h4' lineHeight='tight'>
            {data.title}
          </Box>
        </Center>

        <Center>
          <Box mb="10" display="flex" alignItems="baseline">
            <Badge borderRadius="full" px='2' colorScheme="pink">
              {moment(data.createdAt).format("DD/MM/YYYY")}
            </Badge>
          </Box>
        </Center>

        <ImageGallery items={images} />

        <p>{data.description}</p>

        <Center>
          <Button spinnerPlacement="end" colorScheme={findBasketItem ? "pink" : "green"} m="5" onClick={() => addToBasket(data, findBasketItem)}>
            {findBasketItem ? "Remove from basket" : "Add to basket"}
          </Button>
        </Center>
      </Box>
    </Container>
  )
};

export default ProductDetail;