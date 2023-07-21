import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { AppProvider } from "context/appContext.tsx";
import { ThemeProvider as ThemeContextProvider } from "context/themeContext";
import ToastProvider from "lib/toastProvider.tsx";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <AppProvider>
        <BrowserRouter>
          <CssBaseline />
          <App />
          <ToastProvider />
        </BrowserRouter>
      </AppProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
