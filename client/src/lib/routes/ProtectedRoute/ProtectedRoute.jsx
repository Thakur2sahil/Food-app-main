import * as React from "react";
import { useAuth } from "../../context/AuthContext";

function ProtectedRoute({ requiredRole, children }) {
  const { user } = useAuth();

  if (!user || (requiredRole && user.role !== requiredRole)) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;
