import { fetchOrder } from "../../../api";
import { useQuery } from "react-query";
import { Text, Table, Thead, Tbody, Tr, Th, Td, TableContainer, Button } from '@chakra-ui/react';
import { Link } from "react-router-dom";

function Orders() {
  const { isLoading, isError, error, data } = useQuery("admin:orders", fetchOrder);

  if (isLoading) {
    return <div>Loading...</div>
  };

  if (isError) {
    return <div>Error: {error.message}</div>
  }

  console.log(data)

  return (
    <>
      <Text fontSize="2xl" p="5">Orders</Text>

      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>User</Th>
              <Th>Address</Th>
              <Th isNumeric>Items</Th>
            </Tr>
          </Thead>
          <Tbody>

            {data.map(item => (
              <Tr>
                <Td>{item.user.email}</Td>
                <Td>{item.adress}</Td>
                <Td isNumeric>
                  <Link to={`/admin/orders/${item._id}`}>
                    <Button colorScheme="green" >{item.items.length}</Button>
                  </Link>
                </Td>
              </Tr>
            ))}

          </Tbody>
        </Table>
      </TableContainer>
    </>

  )
};

export default Orders;