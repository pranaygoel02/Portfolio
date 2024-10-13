import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./context/themeContext.jsx";
import { CMDKProvider } from "./widgets/CMDK/cmdk.context.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
    <ThemeProvider>
      <CMDKProvider>
        <App />
      </CMDKProvider>
    </ThemeProvider>
    </Router>
  </React.StrictMode>
);
