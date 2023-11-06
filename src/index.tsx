import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CssBaseline } from "@mui/material";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline /> {/* Normalize the default browser styles */}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
