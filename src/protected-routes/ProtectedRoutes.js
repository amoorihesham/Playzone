import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem("user") !== null) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

export default ProtectedRoutes;
