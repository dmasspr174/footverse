import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { LikesProvider } from "./components/LikesContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LikesProvider>
      <App />
    </LikesProvider>
  </StrictMode>,
);
