import { jwtDecode } from "jwt-decode";
import * as React from "react";
import { Navigate } from "react-router";

function ProtectedRoute({ requiredRole, children }) {
  const token = localStorage.getItem('token');
  
  let userRole = null; // Default to null to avoid undefined error
  
  if (token) {
    try {
      const decoded = jwtDecode(token); // Decode only if token is present
      userRole = decoded.role; // Extract the role
      console.log(decoded);
    } catch (error) {
      console.error('Token decoding error:', error);
      // Handle error if decoding fails
    }
  }

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (requiredRole && userRole !== requiredRole) {
    console.log("user", userRole);
    // console.log("requiredRole",requiredRole);
    
    return <Navigate to="/notauthorized" />;
  }

  return children;
}

export default ProtectedRoute;
