import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ProjectModalProvider } from "./context/projectModalContext.jsx";
import { ThemeProvider } from "./context/themeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <ProjectModalProvider>
        <App />
      </ProjectModalProvider>
    </ThemeProvider>
  </React.StrictMode>
);
