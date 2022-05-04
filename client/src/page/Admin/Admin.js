import { Link, Outlet } from "react-router-dom";
import "./styles.css";

function Admin() {
  return (
    <>
      <nav>
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
            <Link to="/admin/products">
              Products
            </Link>
          </li>
        </ul>

        <Outlet />
      </nav>
    </>
  )
};

export default Admin;