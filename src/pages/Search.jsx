import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getProductsByQuery } from "../api";
import { Skeleton } from "../components/ui/skeleton";

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
    <div className="section-container py-xl md:py-2xl">
      <h1 className="text-3xl font-bold font-sans text-text-main mb-xl">Search Results for "{query}"</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {isLoading ? (
          Array.from({ length: 8 }).map((_, index) => (
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
        ) : (
          products.map((product) => {
          const price = (product.id % 200) + 50;
          return (
            <div
              key={product.id}
              className="flex flex-col border border-surface-gray rounded-card-md shadow-sm overflow-hidden bg-surface-white hover:shadow-md transition-shadow"
            >
              <img
                src={product.webformatURL}
                alt={product.tags}
                className="w-full h-64 object-cover"
              />
              <div className="p-5 flex flex-col flex-grow">
                <p className="text-text-body text-sm mb-lg font-medium line-clamp-2">
                  {/* Format tags to title case (e.g., "Shoes, Woman...") */}
                  {product.tags
                    ?.split(", ")
                    .map((tag) => tag.charAt(0).toUpperCase() + tag.slice(1))
                    .join(", ")}
                </p>
                <div className="mt-auto flex justify-between items-center">
                  <span className="text-brand-primary font-bold text-xl">
                    ${price}
                  </span>
                  <button className="btn-primary px-md py-sm">
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
