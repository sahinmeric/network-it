import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createRoot } from "react-dom/client";
import AppRouter from "./components/router/AppRouter";
import { GlobalContextProvider } from "./components/Context/GlobalContext";
import theme from "./config/Theme";
import "./index.css";

const container = document.getElementById("root");

const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalContextProvider>
        <Router>
          <CssBaseline />
          <AppRouter />
        </Router>
      </GlobalContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
