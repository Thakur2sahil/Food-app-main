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

const AppRouter = () => {
  const { user , token } = useAuth();
    const userRole = user.role
    
  return (
    <Routes>

        <Route path="/signup" element={!token ? <Signup /> : <Navigate to={userRole === 'admin' ? '/adminhome' : '/navbar'} />} />
          <Route path="/login" element={!token ? <Login /> : <Navigate to={userRole === 'admin' ? '/adminhome' : '/navbar'} />} />
      
      {/* Define your route paths properly */}
       <Route path="/adminhome" element={<ProtectedRoute requiredRole="admin"><AdminDashBoard><NewProduct /></AdminDashBoard></ProtectedRoute>} />
       <Route path="/all-product" element={<ProtectedRoute requiredRole="admin"><AdminDashBoard><AllProduct /></AdminDashBoard></ProtectedRoute>} />
       <Route path="/update-product" element={<ProtectedRoute requiredRole="admin"><AdminDashBoard><UpdateProduct /></AdminDashBoard></ProtectedRoute>} />

      <Route path="/navbar" element={<UserNavber />} />
      {/* <Route path="/admin" element={<AdminDashBoard />} /> */}
      {/* <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} /> */}
      {/* <Route path="/allproduct" element={<AllProduct />} />
      <Route path="/newproduct" element={<NewProduct />} /> */}
      
      {/* Handle a fallback route if needed */}
      {/* <Route path="*" element={<Navigate to="/login" />} /> */}
    </Routes>
  );
};

export default AppRouter;
