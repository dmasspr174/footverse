import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { getProductsByQuery } from "../api";
import { useCart } from "../components/CartContext";
import { Skeleton } from "../components/ui/skeleton";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Search() {
  const { toggleCart, isInCart } = useCart();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const query = location.state?.query || "";

  useEffect(() => {
    const fetchData = async () => {
      if (query) {
        setIsLoading(true);
        const data = await getProductsByQuery(query);
        setProducts(data);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      } else {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query]);

  return (
    <div className="section-container py-xl md:py-0">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold font-sans text-text-main mb-xl"
      >
        Search Results for "{query}"
      </motion.h1>

      <motion.div
        key={query}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
      >
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col border border-gray-100 rounded-lg shadow-sm overflow-hidden bg-white"
              >
                <Skeleton className="w-full h-64 rounded-none" />
                <div className="p-5 flex flex-col flex-grow">
                  <div className="space-y-2 mb-6">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                  <div className="mt-auto flex justify-between items-center">
                    <Skeleton className="h-6 w-1/4" />
                    <Skeleton className="h-8 w-1/3 rounded-lg" />
                  </div>
                </div>
              </div>
            ))
          : products.map((product) => {
              const price = (product.id % 200) + 50;
              return (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="flex flex-col border border-surface-gray rounded-card-md shadow-sm overflow-hidden bg-surface-white hover:shadow-md transition-shadow"
                >
                  <img
                    src={product.webformatURL}
                    alt={product.tags}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-5 flex flex-col flex-grow">
                    <p className="text-text-body text-sm mb-lg font-medium line-clamp-2">
                      {product.tags
                        ?.split(", ")
                        .map(
                          (tag) => tag.charAt(0).toUpperCase() + tag.slice(1),
                        )
                        .join(", ")}
                    </p>
                    <div className="mt-auto flex items-center justify-between gap-4">
                      <span className="text-2xl font-semibold text-gray-800">
                        ${price}
                      </span>
                      <button
                        onClick={() => toggleCart(product)}
                        className={`font-semibold py-sm rounded-xl  px-4 transition-colors ${
                          isInCart(product.id)
                            ? "bg-brand-accent text-text-contrast border-transparent"
                            : "bg-transparent hover:bg-brand-accent text-text-main hover:text-text-contrast border-[0.5px] hover:border-transparent"
                        }`}
                        aria-label={`Add ${product.tags} to shopping cart`}
                      >
                        {isInCart(product.id) ? "Remove" : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
      </motion.div>
    </div>
  );
}

export default Search;
