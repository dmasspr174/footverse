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

export default function Cart() {
  const { cartProducts, toggleCart } = useCart();

  const totalPrice = cartProducts.reduce((acc, img) => {
    return acc + ((img.id % 200) + 50);
  }, 0);

  if (cartProducts.length === 0) {
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
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
        <h2 className="text-2xl font-bold text-text-main mb-xs">
          Your cart is empty
        </h2>
        <p className="text-text-muted max-w-sm mb-lg">
          Looks like you haven't added anything to your cart yet. Discover your
          next favorite pair!
        </p>
        <a
          href="/product"
          className="btn-primary font-semibold rounded-full px-lg py-sm bg-brand-accent hover:bg-white hover:text-black  border-black border-[0.5px]"
        >
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
        <h1 className="text-3xl font-bold mb-xs text-text-main">Your Cart</h1>
        <p className="text-text-body">
          Review the items in your cart before checkout.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {cartProducts.map((img) => {
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
                      aria-label={`Remove ${img.tags} from shopping cart`}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Order Summary Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-xl p-lg bg-surface-gray border border-surface-gray rounded-card-md"
      >
        <h2 className="text-xl font-bold mb-lg text-text-main">
          Order Summary
        </h2>

        <div className="space-y-3 mb-6">
          <AnimatePresence>
            {cartProducts.map((img) => {
              const price = (img.id % 200) + 50;
              const name = img.tags.split(", ")[0];
              const formattedName =
                name.charAt(0).toUpperCase() + name.slice(1);

              return (
                <motion.div
                  key={img.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="flex justify-between text-text-body"
                >
                  <span>
                    {formattedName}{" "}
                    <span className="text-sm text-text-muted">
                      (ID: {img.id})
                    </span>
                  </span>
                  <span className="font-medium">${price}</span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <div className="border-t border-surface-muted pt-lg flex justify-between items-center">
          <motion.span
            key={totalPrice}
            initial={{ scale: 1.1, color: "#2563eb" }}
            animate={{ scale: 1, color: "var(--brand-primary)" }}
            className="text-brand-primary font-bold text-2xl"
          >
            Total: ${totalPrice}
          </motion.span>
          <button className="btn-primary font-semibold rounded-full px-lg py-sm bg-brand-accent hover:bg-white hover:text-black  border-black border-[0.5px]">
            Checkout
          </button>
        </div>
      </motion.div>
    </div>
  );
}
