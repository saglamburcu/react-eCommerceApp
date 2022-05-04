import AuthContext from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { useContext } from "react";

function Protected({ children }) {
  const { user } = useContext(AuthContext);

  return (
    user.role === "admin" ? children : <Navigate to="/" />
  )
};

export default Protected;