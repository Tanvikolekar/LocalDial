import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  const token = localStorage.getItem("token");

  // ✅ Strict check
  const isAuthenticated =
    token && token !== "undefined" && token !== "null" && token !== "";

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;