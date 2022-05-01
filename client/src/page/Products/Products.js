import Card from "../../components/Card/Card";
import React from "react";
import { Box, Button, Flex, Grid } from '@chakra-ui/react';
import { useInfiniteQuery } from 'react-query'
import { fetchProductList } from "../../api"

function Products() {

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status } = useInfiniteQuery('products', fetchProductList, {
      getNextPageParam: (lastPage, pages) => {
        console.log("lastPage", lastPage)
        console.log("pages", pages)

        const morePageExist = lastPage?.length === 12;

        if (!morePageExist) {
          return;
        }

        return pages.length + 1;
      }
    })

  console.log("data", data)

  if (status === "loading") return 'Loading...';

  if (status === "error") return 'An error has occurred: ' + error.message;

  return (
    <>
      <Grid templateColumns='repeat(3, 1fr)' gap={10}>
        {
          data.pages.map((page, index) => (
            <React.Fragment key={index}>
              {
                page.map(item => (
                  <Box key={item._id}>
                    <Card item={item} />
                  </Box>
                ))
              }
            </React.Fragment>
          ))
        }
      </Grid>
      <Flex mt="10" justifyContent="center">
        <Button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
          isLoading={isFetchingNextPage}
        >
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
              ? 'Load More'
              : 'Nothing more to load'}
        </Button>
      </Flex>
    </>
  )
};

export default Products;