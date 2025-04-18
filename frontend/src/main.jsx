import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import GridBackground from "./components/ui/GrideBackground";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <GridBackground>
        <App />
      </GridBackground>
  </StrictMode>
);
