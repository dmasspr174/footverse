/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect, useContext } from "react";

const LikesContext = createContext();

export const useLikes = () => useContext(LikesContext);

export const LikesProvider = ({ children }) => {
  const [likedProducts, setLikedProducts] = useState(() => {
    const saved = localStorage.getItem("likedProducts");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("likedProducts", JSON.stringify(likedProducts));
  }, [likedProducts]);

  const toggleLike = (product) => {
    setLikedProducts((prev) => {
      const isExist = prev.find((item) => item.id === product.id);
      if (isExist) {
        return prev.filter((item) => item.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  const isLiked = (productId) => {
    return likedProducts.some((item) => item.id === productId);
  };

  return (
    <LikesContext.Provider value={{ likedProducts, toggleLike, isLiked }}>
      {children}
    </LikesContext.Provider>
  );
};
