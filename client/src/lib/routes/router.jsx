import { Routes, Route, Navigate } from 'react-router-dom'; // No need to import Router here
import UserNavber from "../../component/Navbar/UserNavbar/UserNavber";
import Login from "../../component/authComponent/Login";
import Signup from "../../component/authComponent/Signup";
import AllProduct from '../../component/AdminPanel/AllProduct';
import NewProduct from '../../component/AdminPanel/NewProduct';
import AdminDashBoard from '../../component/AdminPanel/AdminDashBoard';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import { useAuth } from '../context/AuthContext';
import UpdateProduct from '../../component/AdminPanel/UpdateProduct';
import NotAuthorized from '../NotAuthorized/NotAuthorized';
import NotFound from '../NotFound/NotFOund';
import UserLayout from '../../component/UserPanel/UserLayout';
import About from '../../component/UserPanel/About';
import { jwtDecode } from 'jwt-decode';

const AppRouter = () => {
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

  return (
    <Routes>

        <Route path="/signup" element={!token ? <Signup /> : <Navigate to={userRole === 'admin' ? '/adminhome' : '/navbar'} />} />
          <Route path="/login" element={!token ? <Login /> : <Navigate to={userRole === 'admin' ? '/adminhome' : '/navbar'} />} />
      
      {/* Admin routes*/}
       <Route path="/adminhome" element={<ProtectedRoute requiredRole="admin"><AdminDashBoard><NewProduct /></AdminDashBoard></ProtectedRoute>} />
       <Route path="/all-product" element={<ProtectedRoute requiredRole="admin"><AdminDashBoard><AllProduct /></AdminDashBoard></ProtectedRoute>} />
       <Route path="/update-product" element={<ProtectedRoute requiredRole="admin"><AdminDashBoard><UpdateProduct /></AdminDashBoard></ProtectedRoute>} />

      {/* User routes */}
      <Route path="/navbar" element={<UserNavber />} />
      <Route path="/about" element={<ProtectedRoute requiredRole="user"><UserLayout><About /></UserLayout></ProtectedRoute>} />
      
      {/* Handle a fallback route if needed */}
      <Route path="/notauthorized" element={<NotAuthorized/>} />
          <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
