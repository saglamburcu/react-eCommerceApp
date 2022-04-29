import { Box, Image, Badge, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Card() {
  return (
    <Box borderWidth='1px' overflow='hidden' m="6">
      <Link to="/#">
        <Image src='https://picsum.photos/id/237/300/300' alt='product' borderRadius='xl' />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px='2' colorScheme="pink">
              04/29/2022
            </Badge>
          </Box>

          <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' isTruncated>
            Macbook Pro
          </Box>

          <Box>
            20000 TL
          </Box>
        </Box>
      </Link>

      <Button colorScheme="pink" ml="6">
        Add to basket
      </Button>
    </Box>
  )
};

export default Card;