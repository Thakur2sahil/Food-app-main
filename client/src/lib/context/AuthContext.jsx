import axios from "axios";
import * as React from "react";
import { toast } from "react-toastify";

export const authContext = React.createContext();

export const useAuth = () => React.useContext(authContext);

export const Myprovider = ({ children }) => {
  const [user, setUser] = React.useState({});
   const [token, setToken] = React.useState(localStorage.getItem("token"));
  React.useEffect(() => {     
    if (token ) {
      console.log("hello");
      
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/api/context/auth`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          if (response.data) {
            // console.log(response.data.data);
            
            setUser(response.data.data);
          }
        } catch (error) {
          if (
            error.response.data.error === "Session expired Please Login again"
          ) {
            toast.error("Session expired. Please login again.");
            localStorage.clear();
            setTimeout(() => {
              window.location.href = "/login";
            }, 2000);
          } else {
            toast.error("An error occurred. Please try again later.");
          }
        }
      };

      fetchData();
    }
  }, []);
  return (
    <authContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken
      }}
    >
      {children}
    </authContext.Provider>
  );
};
