import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const authUser = true;
  return authUser ? children : <Navigate to="/login" />;
};

export default PublicRoute;
