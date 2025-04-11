import { Routes, Route, Navigate } from 'react-router-dom'; 
import Login from "../../component/authComponent/Login";
import Signup from "../../component/authComponent/Signup";
import AllProduct from '../../Pages/Admin/AllProduct';
import NewProduct from '../../Pages/Admin/NewProduct';
import AdminDashBoard from '../../component/AdminPanel/AdminDashBoard';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import NotAuthorized from '../NotAuthorized/NotAuthorized';
import NotFound from '../NotFound/NotFOund';
import UserLayout from '../../component/UserPanel/UserLayout';
import About from '../../Pages/User/About';
import { jwtDecode } from 'jwt-decode';
import ProductCard from '../../component/UserPanel/ProductCard';
import Contact from '../../Pages/User/Contact';  
import ProductRating from '../../Pages/Admin/ProductRating';
import ProductUpdate from '../../Pages/Admin/ProductUpdate';
import ProductDelete from '../../Pages/Admin/ProductDelete';
import OrderRequest from '../../Pages/Admin/OrderRequest';
import UserRequest from '../../Pages/Admin/UserRequest';
import { useAuth } from '../context/AuthContext';
import ResetPassword from '../../Pages/Profile/ResetPassword';
import UserProfile from '../../Pages/Profile/UserProfile';
import DownloadPdf from '../../Pages/Admin/DownloadPdf';

const AppRouter = () => {
  const { token } = useAuth();
  // const token = localStorage.getItem('token') ||null;

  let userRole = null; // Default to null to avoid undefined error

  if (token) {
    try {
      const decoded = jwtDecode(token); // Decode only if token is present
      userRole = decoded.role; 
    } catch (error) {
      userRole=null
      console.error('Token decoding error:', error);
    }
  }

  return (
    <Routes>

        <Route path="/signup" element={!token  ? <Signup /> : <Navigate to={(userRole === 'admin' || userRole === 'superadmin' )? '/adminhome' : '/'} />} />
          <Route path="/login" element={!token ? <Login /> : <Navigate to={(userRole === 'admin' || userRole === 'superadmin') ? '/adminhome' : '/'} />} />
      
       {/* <Route path="/login" element={<AuthAuthorized ><Login/></AuthAuthorized>} /> */}
      
      {/* Admin routes*/}
       <Route path="/adminhome" element={<ProtectedRoute requiredRoles={["admin", "superadmin"]}><AdminDashBoard><NewProduct /></AdminDashBoard></ProtectedRoute>} />
       <Route path="/all-product" element={<ProtectedRoute requiredRoles={["admin", "superadmin"]}><AdminDashBoard><AllProduct /></AdminDashBoard></ProtectedRoute>} />
       <Route path="/update-product/:id" element={<ProtectedRoute requiredRoles={["admin", "superadmin"]}><AdminDashBoard><ProductUpdate /></AdminDashBoard></ProtectedRoute>} />
       <Route path="/delete-product/:id" element={<ProtectedRoute requiredRoles={["admin", "superadmin"]}><AdminDashBoard><ProductDelete /></AdminDashBoard></ProtectedRoute>} />
       <Route path="/rating/:id" element={<ProtectedRoute requiredRoles={["admin", "superadmin"]}><AdminDashBoard><ProductRating /></AdminDashBoard></ProtectedRoute>} />
       <Route path="/order-request" element={<ProtectedRoute requiredRoles={["admin", "superadmin"]}><AdminDashBoard><OrderRequest /></AdminDashBoard></ProtectedRoute>} />
       <Route path="/user-request" element={<ProtectedRoute requiredRoles={["admin", "superadmin"]}><AdminDashBoard><UserRequest /></AdminDashBoard></ProtectedRoute>} />
       <Route path="/download-pdf" element={<ProtectedRoute requiredRoles={["admin", "superadmin"]}><AdminDashBoard><DownloadPdf /></AdminDashBoard></ProtectedRoute>} />

      {/* User routes */}
      <Route path="/" element={<UserLayout><ProductCard /></UserLayout>} />
      <Route path="/about" element={<UserLayout><About /></UserLayout>} />
      <Route path="/contact" element={<UserLayout><Contact /></UserLayout>} />

      {/* Common route */}
       <Route path="/reset-password/:id" element={(userRole !== 'user' )? <AdminDashBoard><ResetPassword /></AdminDashBoard> : <UserLayout><ResetPassword /></UserLayout>} />
       <Route path="/update-profile/:id" element={ (userRole !== 'user' )? <AdminDashBoard><UserProfile /></AdminDashBoard> : <UserLayout><UserProfile /></UserLayout>} /> 
      {/* Handle a fallback route if needed */}
      <Route path="/notauthorized" element={<NotAuthorized/>} />
          <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
