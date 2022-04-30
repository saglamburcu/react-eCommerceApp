import Card from "../../components/Card/Card";
import { Grid } from '@chakra-ui/react';
import { useQuery } from "react-query";
import { fetchProductList } from "../../api"

function Products() {

  const { isLoading, error, data } = useQuery('products', fetchProductList)

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <>
      <Grid templateColumns='repeat(3, 1fr)' gap={10}>
        {
          data.map((item, index) => (
            <Card key={index} item={item} />
          ))
        }
      </Grid>
    </>
  )
};

export default Products;