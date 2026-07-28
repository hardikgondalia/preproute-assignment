import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../../utils/appUtils";

const AuthGuard = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
};

export default AuthGuard;