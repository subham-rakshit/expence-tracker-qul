import React from "react";
import { Navigate } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { GET_AUTHENTICATED_USER } from "../graphql/queries/user.query";

const AuthRoute = ({ children }) => {
  const { loading, error, data } = useQuery(GET_AUTHENTICATED_USER);

  if (loading || error) return null;

  return data?.authUser ? <Navigate to="/" /> : children;
};

export default AuthRoute;
