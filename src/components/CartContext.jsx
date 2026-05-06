/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect, useContext } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState(() => {
    const saved = localStorage.getItem("cartProducts");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }, [cartProducts]);

  const toggleCart = (product) => {
    setCartProducts((prev) => {
      const isExist = prev.find((item) => item.id === product.id);
      if (isExist) {
        return prev.filter((item) => item.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  const isInCart = (productId) => {
    return cartProducts.some((item) => item.id === productId);
  };

  return (
    <CartContext.Provider value={{ cartProducts, toggleCart, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};
