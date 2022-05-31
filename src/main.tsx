import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { App } from "./App";
import { AppThemeProvider } from "./shared/contexts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <AppThemeProvider>
        <App />
      </AppThemeProvider>
    </Router>
  </React.StrictMode>
);
