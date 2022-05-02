import { Flex, Spinner } from "@chakra-ui/react";
import { createContext, useState } from "react";
import { useEffect } from "react";
import { fetchMe } from "../api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const me = await fetchMe();

        setLoggedIn(true);
        setUser(me);
        setLoading(false);
      } catch (e) {
        console.log(e)
        setLoading(false);
      }
    })();
  }, [])

  const login = (data) => {
    setLoggedIn(true);
    setUser(data.user);

    localStorage.setItem("access-token", data.accessToken);
    localStorage.setItem("refresh-token", data.refreshToken)
  };

  const logout = () => {
    setLoggedIn(false);
    setUser(null);

    localStorage.removeItem("access-token");
    localStorage.removeItem("refresh-token");
  };

  if (loading) {
    return (
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <Spinner thickness="4px" speed="0.65s" emptyColor="gray.2000" />
      </Flex>
    )
  }

  const values = {
    user,
    setUser,
    loggedIn,
    setLoggedIn,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )

}

export default AuthContext;