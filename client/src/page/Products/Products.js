import Card from "../../components/Card/Card";
import { Grid, GridItem } from '@chakra-ui/react';

function Products() {
  return (
    <>
      <Grid templateColumns='repeat(3, 1fr)' gap={10}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Grid>
    </>
  )
};

export default Products;