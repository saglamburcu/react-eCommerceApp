import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { Button } from '@chakra-ui/react';
import AuthContext from "../../contexts/AuthContext";
import { useContext } from "react";
import BasketContext from "../../contexts/BasketContext";

function Navbar() {
  const { loggedIn } = useContext(AuthContext);
  const { items } = useContext(BasketContext);

  return (
    <div className={styles.nav}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Link to="/">E-COMMERCE</Link>
        </div>
        <ul className={styles.menu}>
          <li>
            <Link to="/">PRODUCT</Link>
          </li>
        </ul>
      </div>

      <div className={styles.rigth}>
        {
          !loggedIn && <>
            <Link to="/signin">
              <Button colorScheme='pink'>Login</Button>
            </Link>
            <Link to="/signup">
              <Button colorScheme='pink'>Register</Button>
            </Link>
          </>
        }

        {
          loggedIn && (
            <>

              {items.length > 0 && (
                <Link to="/basket">
                  <Button color="pink">
                    Basket ({items.length})
                  </Button>
                </Link>
              )}

              <Link to="/profile">
                <Button color="black">Profile</Button>
              </Link>
            </>
          )


        }
      </div>
    </div>
  )
};

export default Navbar;

