import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { App } from "./App";
import { LightTheme } from "./shared/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={LightTheme}>
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
