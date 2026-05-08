import { useEffect, useState } from "react";
import { getImages } from "../api";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useCart } from "../components/CartContext";
import HeroCarousel from "@/components/HeroSection";
import FeaturedGrid from "@/components/FeatureSection";
import { Skeleton } from "@/components/ui/skeleton";
import esensial1 from "../assets/3.jpg";
import esensial2 from "../assets/4.jpg";
import esensial3 from "../assets/1.jpg";

function Home() {
  const { toggleCart, isInCart } = useCart();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await getImages("shoes", 12);
      setProducts(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-surface-white font-sans overflow-x-hidden">
      {/* Hero Section - Static Import for LCP Performance */}
      <div className="section-container md:px-0 py-xl md:py-sm min-h-[500px] md:min-h-[750px]">
        <HeroCarousel />
      </div>

      {/* Esenesial Section */}
      <div className="section-container py-xl md:py-2xl">
        <div className="text-start mb-xl">
          <h2 className="heading-primary mb-sm">Essential Kicks</h2>
          <p className="text-text-muted text-sm md:text-[15px] leading-relaxed max-w-2xl font-medium">
            Designed for ultimate comfort and undeniable street appeal.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg md:gap-12 w-full min-h-[400px]">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] group bg-surface-gray">
            <img
              src={esensial1}
              alt="Classic Urban Sneakers Collection"
              loading="eager"
              decoding="async"
              width="800"
              height="1000"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-white text-3xl font-serif mb-4 drop-shadow-md">
                Sneakers
              </h3>
              <button className="btn-white" aria-label="View all sneakers">
                View all
              </button>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] group bg-surface-gray">
            <img
              src={esensial2}
              alt="Performance Streetwear Shoes"
              loading="eager"
              decoding="async"
              width="800"
              height="1000"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-white text-3xl font-serif mb-4 drop-shadow-md">
                Sneakers
              </h3>
              <button className="btn-white" aria-label="View all sneakers">
                View all
              </button>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] group bg-surface-gray">
            <img
              src={esensial3}
              alt="Limited Edition Urban Footwear"
              loading="eager"
              decoding="async"
              width="800"
              height="1000"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-white text-3xl font-serif mb-4 drop-shadow-md">
                Sneakers
              </h3>
              <button className="btn-white" aria-label="View all sneakers">
                View all
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Best Sellers Section */}
      <div className="section-container py-xl md:py-2xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-md mb-xl">
          <div>
            <h2 className="heading-primary mb-sm">BEST SELLERS</h2>
            <p className="text-text-muted text-sm md:text-[15px] leading-relaxed max-w-xl font-medium">
              Explore the sneakers that everyone is talking about. Hand-picked
              styles that define modern street culture.
            </p>
          </div>
          <Link
            to="/product"
            className="text-brand-primary font-bold text-sm hover:underline"
            aria-label="Browse all best selling products"
          >
            Explore all products
          </Link>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="mb-4">
            {isLoading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-4 basis-full md:basis-1/2 lg:basis-1/3 "
                  >
                    <div className="bg-white rounded-lg overflow-hidden flex flex-col h-full">
                      <div className="relative w-full overflow-hidden">
                        <Skeleton className="aspect-square rounded-xl" />
                      </div>
                      <div className="flex flex-col justify-between p-4 flex-grow">
                        <div className="space-y-3">
                          <Skeleton className="h-6 w-3/4" />
                        </div>
                        <div className="flex items-center justify-between gap-4 mt-6">
                          <Skeleton className="h-8 w-1/4" />
                          <Skeleton className="h-10 w-1/3 rounded-lg" />
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))
              : products.map((product) => (
                  <CarouselItem
                    key={product.id}
                    className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                  >
                    <div className=" rounded-lg duration-300 overflow-hidden flex flex-col h-full">
                      <div className="relative w-full overflow-hidden ">
                        <div className="aspect-[4/4] rounded-xl overflow-hidden bg-surface-gray">
                          <img
                            src={product.webformatURL}
                            alt={product.tags}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col justify-between p-4 flex-grow">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-4 line-clamp-2 capitalize">
                            {product.tags}
                          </h3>
                        </div>
                        <div className="flex items-center justify-between gap-4 mt-auto">
                          <span className="text-2xl font-bold text-brand-accent">
                            ${product.likes}
                          </span>
                          <button
                            onClick={() => toggleCart(product)}
                            className="btn-primary px-4 py-2"
                            aria-label={`Add ${product.tags} to shopping cart`}
                          >
                            {isInCart(product.id) ? "Remove" : "Add to Cart"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Featured Grid Section */}
      <div className="container mx-auto px-4 py-8">
        <FeaturedGrid />
      </div>

      {/* Trust Badges */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Fast Delivery",
              desc: "Get your kicks delivered express to your doorstep.",
              icon: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.129-1.125V11.25c0-4.446-3.61-8.057-8.057-8.057h-3.321C6.437 3.193 3 6.63 3 10.82v3.43m18.25 4.5V11.25a1.125 1.125 0 00-1.125-1.125H16.875M3.375 14.25h17.25",
            },
            {
              title: "Secure Payment",
              desc: "Safe and encrypted transactions with our gateway.",
              icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6.119c-.035 1.05-.035 2.108 0 3.158a12.735 12.735 0 0014.154 11.592c1.05-.035 2.108-.035 3.158 0A11.959 11.959 0 0112 2.714Z",
            },
            {
              title: "30 Days Return",
              desc: "Hassle-free returns and exchanges within 30 days.",
              icon: "M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9",
            },
            {
              title: "24/7 Support",
              desc: "Our dedicated team is here for you anytime.",
              icon: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl"
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={item.icon}
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
