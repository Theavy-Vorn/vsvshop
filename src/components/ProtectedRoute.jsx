// ProtectedRoute.js
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";

const ProtectedRoute = ({ children }) => {
  // Get auth data from secure storage
  const auth = secureLocalStorage.getItem("auth");

  // Use location to redirect back after login
  const location = useLocation();

  // If user is not logged in, redirect to login and save current path
  if (!auth) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // If logged in, allow access
  return children;
};

export default ProtectedRoute;
