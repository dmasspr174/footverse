import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { LikesProvider } from "./components/LikesContext.jsx";
import { CartProvider } from "./components/CartContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LikesProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </LikesProvider>
  </StrictMode>,
);
