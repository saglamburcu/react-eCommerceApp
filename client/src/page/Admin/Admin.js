import { Link, Outlet } from "react-router-dom";
import { Button, Flex } from "@chakra-ui/react";
import "./styles.css";

function Admin() {
  return (
    <>
      <nav>
        <Flex justifyContent="space-between" alignItems="center">
          <ul className="admin-menu">
            <li>
              <Link to="/admin">
                Home
              </Link>
            </li>

            <li>
              <Link to="/admin/orders">
                Orders
              </Link>
            </li>

            <li>
              <Link to="/admin/product">
                Products
              </Link>
            </li>
          </ul>

          <Link to="/admin/product/new" >
            <Button>
              New
            </Button>
          </Link>
        </Flex>

        <Outlet />
      </nav>
    </>
  )
};

export default Admin;