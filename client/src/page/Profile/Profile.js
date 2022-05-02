import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import { Text, Box } from "@chakra-ui/react";

function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <Box m="10">
      <Text fontSize="22">Profile</Text>
      {JSON.stringify(user)}
    </Box>
  )
}

export default Profile;