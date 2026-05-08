import { useEffect, useState } from "react";
import { getProducts } from "../api";
import { useLikes } from "../components/LikesContext";
import { useCart } from "../components/CartContext";
import { Skeleton } from "../components/ui/skeleton";

function Product() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const { toggleLike, isLiked } = useLikes();
  const { toggleCart, isInCart } = useCart();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await getProducts(query + " shoes");
      setImages(data);
      setIsLoading(false);
    };
    fetchData();
  }, [query]);

  return (
    <div className="section-container py-xl md:py-2xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold font-serif mb-xs text-text-main">Our Collection</h1>
        <p className="text-text-body">
          Discover the latest styles designed for comfort, performance, and
          everyday wear.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap items-center  gap-2 overflow-x-auto w-full">
        {["Sports", "Women", "Men", "Kids"].map((item) => (
          <button
            key={item}
            onClick={() => setQuery(item)}
            className={`font-semibold py-sm px-10 border rounded transition-colors ${
              query === item
                ? "bg-brand-accent text-text-contrast border-transparent"
                : "bg-transparent hover:bg-brand-accent text-brand-primary hover:text-text-contrast border-brand-primary hover:border-transparent"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
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
          : images.map((img) => {
              const price = (img.id % 200) + 50;
              return (
                <div
                  key={img.id}
                  className="flex flex-col border border-surface-gray rounded-card-md shadow-sm overflow-hidden bg-surface-white hover:shadow-md transition-shadow"
                >
                  <div className="relative">
                    <div className="aspect-square overflow-hidden bg-surface-muted">
                      <img
                        src={img.webformatURL}
                        alt={img.tags}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover"
                      />
                    </div>
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
                        .map(
                          (tag) => tag.charAt(0).toUpperCase() + tag.slice(1),
                        )
                        .join(", ")}
                    </p>
                    <div className="mt-auto flex justify-between items-center">
                      <span className="text-brand-primary font-bold text-xl">
                        ${price}
                      </span>
                      <button
                        onClick={() => toggleCart(img)}
                        className={`${
                          isInCart(img.id)
                            ? "bg-surface-muted text-text-body hover:bg-surface-gray"
                            : "btn-primary"
                        } px-md py-sm`}
                      >
                        {isInCart(img.id) ? "Remove" : "Add to Cart"}
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
