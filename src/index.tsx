import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { createRoot } from "react-dom/client";
import AppRouter from "./AppRouter";

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

function App() {
  return (
    <div>
      <AppRouter />
    </div>
  );
}

export default App;
