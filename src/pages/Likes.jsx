import { useLikes } from "../components/LikesContext";
import { useCart } from "../components/CartContext";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

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

export default function Likes() {
  const { likedProducts, toggleLike, isLiked } = useLikes();
  const { toggleCart, isInCart } = useCart();

  if (likedProducts.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-24 h-24 text-surface-muted mb-lg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
        <h2 className="text-2xl font-bold text-text-main mb-xs">
          No liked products yet
        </h2>
        <p className="text-text-muted max-w-sm mb-lg">
          You haven't added any products to your likes collection yet. Start
          exploring and save your favorites!
        </p>
        <a href="/product" className="btn-primary rounded-full px-lg py-sm">
          Explore Products
        </a>
      </motion.div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold mb-xs text-text-main">Your Likes</h1>
        <p className="text-text-body">
          A collection of all the items you've loved.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {likedProducts.map((img) => {
            const price = (img.id % 200) + 50;
            return (
              <motion.div
                key={img.id}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="flex flex-col border border-surface-gray rounded-card-md shadow-sm overflow-hidden bg-surface-white hover:shadow-md transition-shadow"
              >
                <div className="relative">
                  <img
                    src={img.webformatURL}
                    alt={img.tags}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={() => toggleLike(img)}
                    className="absolute top-sm right-sm p-sm bg-surface-white/90 hover:bg-surface-white rounded-full shadow-sm transition-colors text-destructive z-10 cursor-pointer"
                  >
                    {isLiked(img.id) ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <p className="text-text-body text-sm mb-lg font-medium line-clamp-2">
                      {img.tags
                        .split(", ")
                        .map((tag) => tag.charAt(0).toUpperCase() + tag.slice(1))
                        .join(", ")}
                    </p>
                    <div className="mt-auto flex items-center justify-between gap-4">
                      <span className="text-2xl font-semibold text-gray-800">
                        ${price}
                      </span>
                      <button
                        onClick={() => toggleCart(img)}
                        className="btn-white border-[0.5px] px-4 py-2"
                        aria-label={`Add ${img.tags} to shopping cart`}
                      >
                        {isInCart(img.id) ? "Remove" : "Add to Cart"}
                      </button>
                    </div>
                  </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
