import { Box, Text, Image, Grid } from "@chakra-ui/react";
import { fetchOrder } from "../../../api";
import { useQuery } from "react-query";
import { useParams, Link } from "react-router-dom";

function OrdersDetail() {
  const { isLoading, isError, data } = useQuery("admin: Order Detail", fetchOrder);
  const { order_id } = useParams();
  //console.log("order_id", order_id)

  if (isLoading) {
    return <div>Loading...</div>
  };

  if (isError) {
    return <div>Error</div>
  };

  const details = data.find(item => item._id === order_id)

  return (
    <Box pl="10">
      <Text fontSize="2xl" color="Highlight">Orders Detail</Text>

      {
        details.items.map(item => (

          <Grid key={item._id} templateColumns='repeat(3, 1fr)' gap={10} mt="10">
            <Link to={`/product/${item._id}`}>
              <Text color="blue.300" fontSize="lg" display="flex" alignItems="center">{item.title}</Text>
            </Link>
            <Image src={item.photos[0]} htmlWidth="200" borderRadius="10" alt="product" />
            <Text display="flex" alignItems="center">{item.price} TL</Text>
          </Grid>

        ))
      }


    </Box>
  )
}

export default OrdersDetail;