import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { createRoot } from "react-dom/client";
import AppRouter from "./AppRouter";
import { GlobalContextProvider } from "./components/Context/GlobalContext";

const container = document.getElementById("root");

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <Router>
        <CssBaseline />
        <AppRouter />
      </Router>
    </GlobalContextProvider>
  </React.StrictMode>
);
