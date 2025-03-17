import * as React from "react";
import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router";

function ProtectedRoute({ requiredRole, children }) {
  const { user } = useAuth();
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/notauthorized" />;
  }

  return children;
}

export default ProtectedRoute;
