import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import { Text, Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Profile() {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = async () => {
    logout()
  }

  return (
    <Box m="10">
      <Text fontSize="22">Profile</Text>
      {JSON.stringify(user)}

      <br /><br />

      <Button onClick={handleLogout}>
        <Link to="/">
          Logout
        </Link>
      </Button>
    </Box>
  )
}

export default Profile;