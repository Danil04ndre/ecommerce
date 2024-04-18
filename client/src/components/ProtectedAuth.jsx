import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedAuth= () => {
  const { isAuth } = useSelector((state) => state.user);

  if (isAuth) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default ProtectedAuth;
