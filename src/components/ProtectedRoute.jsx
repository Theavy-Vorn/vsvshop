import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const auth = useSelector((state) => state.authReducer.auth);
  const location = useLocation();

  // Debug log
  console.log("🔐 ProtectedRoute auth:", auth);

  if (!auth || !auth.token || !auth.user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
