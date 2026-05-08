import { useCart } from "../components/CartContext";

export default function Cart() {
  const { cartProducts, toggleCart } = useCart();

  const totalPrice = cartProducts.reduce((acc, img) => {
    return acc + ((img.id % 200) + 50);
  }, 0);

  if (cartProducts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
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
          className="btn-primary rounded-full px-lg py-sm"
        >
          Explore Products
        </a>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-xs text-text-main">Your Cart</h1>
        <p className="text-text-body">
          Review the items in your cart before checkout.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {cartProducts.map((img) => {
          const price = (img.id % 200) + 50;
          return (
            <div
              key={img.id}
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
                <div className="mt-auto flex justify-between items-center">
                  <span className="text-brand-primary font-bold text-xl">
                    ${price}
                  </span>
                  <button
                    onClick={() => toggleCart(img)}
                    className="bg-surface-muted hover:bg-surface-gray text-text-main px-md py-sm rounded text-sm transition-colors cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Order Summary Section */}
      <div className="mt-xl p-lg bg-surface-gray border border-surface-gray rounded-card-md">
        <h2 className="text-xl font-bold mb-lg text-text-main">Order Summary</h2>

        {/* Rincian item dan harganya (Isi dari total price) */}
        <div className="space-y-3 mb-6">
          {cartProducts.map((img) => {
            const price = (img.id % 200) + 50;
            const name = img.tags.split(", ")[0];
            const formattedName = name.charAt(0).toUpperCase() + name.slice(1);

            return (
              <div key={img.id} className="flex justify-between text-text-body">
                <span>
                  {formattedName}{" "}
                  <span className="text-sm text-text-muted">(ID: {img.id})</span>
                </span>
                <span className="font-medium">${price}</span>
              </div>
            );
          })}
        </div>

        <div className="border-t border-surface-muted pt-lg flex justify-between items-center">
          <span className="text-brand-primary font-bold text-2xl">
            Total: ${totalPrice}
          </span>
          <button className="btn-primary rounded-full px-xl py-lg">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
