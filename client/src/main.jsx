import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter here
import AppRouter from "./lib/routes/router";
import { Myprovider } from "./lib/context/AuthContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Myprovider>
      <BrowserRouter> {/* Wrap AppRouter with BrowserRouter */}
        <AppRouter />
      </BrowserRouter>
    </Myprovider>
  </StrictMode>
);
