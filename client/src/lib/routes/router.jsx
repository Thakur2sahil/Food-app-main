import { Routes, Route, Navigate } from 'react-router-dom'; // No need to import Router here
import UserNavber from "../../component/Navbar/UserNavbar/UserNavber";
import Login from "../../component/authComponent/Login";
import Signup from "../../component/authComponent/Signup";
import AllProduct from '../../component/AdminPanel/AllProduct';
import NewProduct from '../../component/AdminPanel/NewProduct';
import AdminDashBoard from '../../component/AdminPanel/AdminDashBoard';

const AppRouter = () => {
  return (
    <Routes>
      {/* Define your route paths properly */}
      <Route path="/navbar" element={<UserNavber />} />
      <Route path="/admin" element={<AdminDashBoard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/allproduct" element={<AllProduct />} />
      <Route path="/newproduct" element={<NewProduct />} />
      
      {/* Handle a fallback route if needed */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRouter;
