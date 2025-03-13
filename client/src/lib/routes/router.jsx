import { Routes, Route } from "react-router-dom";
import Login from "../../component/authComponent/Login";
import Signup from "../../component/authComponent/Signup";
import UserNavber from "../../component/Navbar/UserNavbar/UserNavber";
import AdminSideBar from "../../component/Navbar/AdminNavbar/AdminSideBar";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Admin Routes (Protected) */}
      <Route path="/admin-dashboard"
        element={<ProtectedRoute requiredRole="admin"><AdminSideBar /></ProtectedRoute>}
      />

      {/* Navbar Routes */}
      <Route path="/navbar" element={<UserNavber />} />
      {/* <Route path="/sidenav" element={<AdminSideBar />} /> */}
    </Routes>
  );
};

export default AppRoutes;
