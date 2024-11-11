import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // Check if the user is authenticated by looking for the 'user' key in local storage
  const isAuthenticated = localStorage.getItem("user") !== null;

  // If authenticated, render the child component; otherwise, redirect to the login page
  return isAuthenticated ? children : <Navigate to="/login-page" replace />;
};

export default ProtectedRoute;
