import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getProductsByQuery } from "../api";

function Search() {
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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <h1 className="text-3xl font-bold mb-8">Search Results for "{query}"</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {isLoading ? (
          Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col border border-gray-100 rounded-lg shadow-sm overflow-hidden bg-white animate-pulse"
            >
              <div className="w-full h-64 bg-gray-200"></div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-6"></div>
                <div className="mt-auto flex justify-between items-center">
                  <div className="h-6 bg-gray-200 rounded w-1/4"></div>
                  <div className="h-8 bg-gray-200 rounded w-1/3"></div>
                </div>
              </div>
            </div>
          ))
        ) : (
          products.map((product) => {
          const price = (product.id % 200) + 50;
          return (
            <div
              key={product.id}
              className="flex flex-col border border-gray-100 rounded-lg shadow-sm overflow-hidden bg-white hover:shadow-md transition-shadow"
            >
              <img
                src={product.webformatURL}
                alt={product.tags}
                className="w-full h-64 object-cover"
              />
              <div className="p-5 flex flex-col flex-grow">
                <p className="text-gray-700 text-sm mb-6 font-medium line-clamp-2">
                  {/* Format tags to title case (e.g., "Shoes, Woman...") */}
                  {product.tags
                    ?.split(", ")
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
        }))}
      </div>
    </div>
  );
}

export default Search;
