import { createBrowserRouter } from "react-router-dom";
import Login from "../../component/authComponent/Login";
import Signup from "../../component/authComponent/Signup";
import UserNavber from "../../component/Navbar/UserNavber";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/nav",
    element: <UserNavber />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);
export default router;
