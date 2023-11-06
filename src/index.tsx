import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { CssBaseline } from "@mui/material";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");

const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <Router>
      <CssBaseline /> {/* Normalize the default browser styles */}
      <App />
    </Router>
  </React.StrictMode>
);
