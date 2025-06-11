import React from "react";
import { Navigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";

const ProtectedRoute = ({ children }) => {
  const auth = secureLocalStorage.getItem("auth");

  if (!auth) return <Navigate to="/login" />;

  return children;
};

export default ProtectedRoute;
