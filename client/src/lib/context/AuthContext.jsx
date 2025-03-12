import axios from "axios";
import * as React from "react";
import { toast } from "react-toastify";

export const contextapi = React.createContext();

export const Myprovider = ({ children }) => {
  const [data, setData] = React.useState({});
  const token = localStorage.getItem('token')
  const isLogged = localStorage.getItem("islogged");

  React.useEffect(() => {
    if (token) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/api/context/auth`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          if (response.data) {
            setData(response.data.data);
          }
        } catch (error) {
          if (
            error.response.data.error === "Session expired Please Login again"
          ) {
            toast.error("Session expired. Please login again.");
            localStorage.clear();
            setTimeout(() => {
              window.location.href = "/navbar";
            }, 2000);
          } else {
            toast.error("An error occurred. Please try again later.");
          }
        }
      };

      fetchData();
    }
  }, [token]);
  return (
    <contextapi.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </contextapi.Provider>
  );
};
