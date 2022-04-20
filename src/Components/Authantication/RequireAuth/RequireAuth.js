import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase.init";


const RequireAuth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);

  const location = useLocation();

  if (loading) {
    return <p>Loading</p>;
  }
  if (user) {
    return children;
  } else {
    return <Navigate to="/register" state={{ from: location }} replace />;
  }
};

export default RequireAuth;