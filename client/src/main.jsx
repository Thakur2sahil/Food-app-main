import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./lib/routes/router";
import { Myprovider } from "./lib/context/AuthContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Myprovider>
      <RouterProvider router={router} />
    </Myprovider>
  </StrictMode>
);
