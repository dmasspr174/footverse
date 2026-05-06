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
          className="w-24 h-24 text-slate-300 mb-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
        <h2 className="text-2xl font-bold text-slate-700 mb-2">
          Your cart is empty
        </h2>
        <p className="text-slate-500 max-w-sm mb-6">
          Looks like you haven't added anything to your cart yet. Discover your
          next favorite pair!
        </p>
        <a
          href="/product"
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors font-medium"
        >
          Explore Products
        </a>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Your Cart</h1>
        <p className="text-gray-700">
          Review the items in your cart before checkout.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {cartProducts.map((img) => {
          const price = (img.id % 200) + 50;
          return (
            <div
              key={img.id}
              className="flex flex-col border border-gray-100 rounded-lg shadow-sm overflow-hidden bg-white hover:shadow-md transition-shadow"
            >
              <div className="relative">
                <img
                  src={img.webformatURL}
                  alt={img.tags}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <p className="text-gray-700 text-sm mb-6 font-medium line-clamp-2">
                  {img.tags
                    .split(", ")
                    .map((tag) => tag.charAt(0).toUpperCase() + tag.slice(1))
                    .join(", ")}
                </p>
                <div className="mt-auto flex justify-between items-center">
                  <span className="text-blue-600 font-bold text-xl">
                    ${price}
                  </span>
                  <button
                    onClick={() => toggleCart(img)}
                    className="bg-slate-200 hover:bg-slate-300 text-slate-800 px-4 py-2 rounded text-sm transition-colors cursor-pointer"
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
      <div className="mt-8 p-6 bg-slate-50 border border-gray-100 rounded-lg">
        <h2 className="text-xl font-bold mb-4 text-slate-800">Order Summary</h2>

        {/* Rincian item dan harganya (Isi dari total price) */}
        <div className="space-y-3 mb-6">
          {cartProducts.map((img) => {
            const price = (img.id % 200) + 50;
            const name = img.tags.split(", ")[0];
            const formattedName = name.charAt(0).toUpperCase() + name.slice(1);

            return (
              <div key={img.id} className="flex justify-between text-slate-600">
                <span>
                  {formattedName}{" "}
                  <span className="text-sm text-slate-400">(ID: {img.id})</span>
                </span>
                <span className="font-medium">${price}</span>
              </div>
            );
          })}
        </div>

        <div className="border-t border-gray-200 pt-6 flex justify-between items-center">
          <span className="text-blue-600 font-bold text-2xl">
            Total: ${totalPrice}
          </span>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors cursor-pointer">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
