import { Box, Image, Badge, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import moment from "moment";
import { useContext } from "react";
import BasketContext from '../../contexts/BasketContext';

function Card({ item }) {

  const { items, addToBasket } = useContext(BasketContext);

  const findRemoveItem = items.find(basketItem => item._id === basketItem._id)

  return (
    <Box borderWidth='1px' overflow='hidden' m="6">
      <Link to={`/product/${item._id}`}>
        <Image src={item.photos} alt='product' borderRadius='xl' loading='lazy' />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px='2' colorScheme="pink">
              {moment(item.createdAt).format("DD/MM/YYYY")}
            </Badge>
          </Box>

          <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' isTruncated>
            {item.title}
          </Box>

          <Box>
            {item.price} TL
          </Box>
        </Box>
      </Link>

      <Button colorScheme={findRemoveItem ? "pink" : "green"} ml="6" onClick={() => addToBasket(item, findRemoveItem)}>
        {findRemoveItem ? "Remove from basket" : "Add to basket"}
      </Button>
    </Box>
  )
};

export default Card;