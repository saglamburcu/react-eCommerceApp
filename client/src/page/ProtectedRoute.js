import AuthContext from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { useContext } from "react";

function ProtectedRoute({ children }) {
  const { loggedIn } = useContext(AuthContext);

  return (
    loggedIn ? children : <Navigate to="/" />
  )
};

export default ProtectedRoute;