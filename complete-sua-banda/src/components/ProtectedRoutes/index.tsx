import { Navigate, Outlet } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";
import { Loading } from "../Loading";

export const ProtectedRoutes = () => {
  const { user, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  return user ? <Outlet /> : <Navigate to="/" replace />;
};
