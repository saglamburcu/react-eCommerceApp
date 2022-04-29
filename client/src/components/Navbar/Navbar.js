import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { Button } from '@chakra-ui/react'

function Navbar() {
  return (
    <div className={styles.nav}>
      <div className={styles.left}>
        <div className="logo">
          <Link to="/">E-COMMERCE</Link>
        </div>
        <ul className={styles.menu}>
          <li>
            <Link to="/">PRODUCT</Link>
          </li>
        </ul>
      </div>
      <div className={styles.rigth}>
        <Link to="/signin">
          <Button colorScheme='pink'>Login</Button>
        </Link>
        <Link to="/signup">
          <Button colorScheme='pink'>Register</Button>
        </Link>
      </div>
    </div>
  )
};

export default Navbar;

