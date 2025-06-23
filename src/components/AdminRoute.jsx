import React from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";

const AdminRoute = () => {
  const auth = secureLocalStorage.getItem("auth");
  const location = useLocation();

  if (!auth || !auth.token || !auth.user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  if (auth.user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default AdminRoute;
