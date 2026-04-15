import { useEffect, useState } from "react";
import { getProducts } from "../api";
import { useLikes } from "../component/LikesContext";

function Product() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const { toggleLike, isLiked } = useLikes();
  useEffect(() => {
    getProducts(query + " shoes").then((data) => {
      setImages(data);
    });
  }, [query]);

  console.log("QUERY YANG DIKIRIM DARI PRODUCT.JSX:", query);
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Our Collection</h1>
        <p className="text-gray-700">
          Discover the latest styles designed for comfort, performance, and
          everyday wear.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap items-center gap-2 overflow-x-auto">
        {["Men", "Women", "Kids", "Sports"].map((item) => (
          <button
            key={item}
            onClick={() => setQuery(item)}
            className={`font-semibold py-1 px-10 border rounded transition-colors ${
              query === item
                ? "bg-blue-500 text-white border-transparent"
                : "bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white border-blue-500 hover:border-transparent"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {images.map((img) => {
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
                  <button
                    onClick={() => toggleLike(img)}
                    className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-white rounded-full shadow-sm transition-colors text-red-500 z-10 cursor-pointer"
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
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm transition-colors cursor-pointer">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
    </div>
  );
}
export default Product;
