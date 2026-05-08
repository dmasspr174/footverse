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
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import esensial1 from "../assets/3.jpg";
import esensial2 from "../assets/4.jpg";
import esensial3 from "../assets/1.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Home() {
  const { toggleCart, isInCart } = useCart();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getImages("shoes", 12).then((data) => {
      setProducts(data);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    });
  }, []);

  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="container mx-auto px-4 md:px-0 py-8 md:py-4"
      >
        <HeroCarousel />
      </motion.div>
      {/* Esenesial Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="container flex flex-col gap-6 mx-auto px-4 py-8"
      >
        <div className="text-start">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#111] mb-3 font-sans leading-none">
            ESSENTIAL KICKS
          </h2>
          <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed max-w-2xl font-medium">
            Elevate your everyday rotation with our handpicked essentials.
            Designed for ultimate comfort and undeniable street appeal.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 w-full min-h-[300px] md:min-h-[400px]">
          <div className="relative rounded-3xl overflow-hidden flex-1 h-full group">
            <img
              src={esensial1}
              alt="Sneakers"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-white text-3xl font-serif mb-4 drop-shadow-md">
                Sneakers
              </h3>
              <button className="bg-white text-black px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-gray-100 transition-colors shadow-sm">
                View all sneakers
              </button>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden flex-1 h-full group">
            <img
              src={esensial2}
              alt="Sneakers"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-white text-3xl font-serif mb-4 drop-shadow-md">
                Sneakers
              </h3>
              <button className="bg-white text-black px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-gray-100 transition-colors shadow-sm">
                View all sneakers
              </button>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden flex-1 h-full group">
            <img
              src={esensial3}
              alt="Sneakers"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-white text-3xl font-serif mb-4 drop-shadow-md">
                Sneakers
              </h3>
              <button className="bg-white text-black px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-gray-100 transition-colors shadow-sm">
                View all sneakers
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Products Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="container mx-auto px-4 py-8"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 border-b pb-4 gap-4">
          <div className="text-start">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#111] mb-3 font-sans leading-none">
              BEST SELLERS
            </h2>
            <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed max-w-2xl font-medium">
              Our most coveted silhouettes, chosen by the culture. Don’t sleep
              on these top-rated favorites.
            </p>
          </div>
          <Link
            to="/product"
            className="text-blue-600 hover:text-blue-800 mt-2 font-medium flex items-center gap-1 transition-colors whitespace-nowrap pb-1"
          >
            <p className="font-sans text-sm ">Show more</p>{" "}
            <span className="text-md leading-none">&rarr;</span>
          </Link>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: false,
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
                        <div className="aspect-[4/4] rounded-xl overflow-hidden">
                          <img
                            src={product.webformatURL}
                            alt={product.tags}
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
                          <span className="text-2xl font-bold text-blue-500">
                            ${product.likes}
                          </span>
                          <button
                            onClick={() => toggleCart(product)}
                            className={`bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm transition-colors cursor-pointer`}
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
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="container mx-auto px-4 py-8"
      >
        <FeaturedGrid />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="relative container mx-auto px-4 py-8"
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Header Section (Left on Desktop) */}
          <div className="lg:w-1/3 text-start">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#111] mb-6 font-sans leading-[1.1]">
              WHY SHOP WITH US?
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed font-medium">
              We've got you covered with hassle-free shopping, top-tier service,
              and guarantees that keep you confident in every purchase.
            </p>
          </div>
          {/* Features Grid (Right on Desktop) */}
          <div className="lg:w-2/3 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-8 sm:gap-y-12">
            {/* Feature 1 */}
            <div className="flex flex-col text-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-200 flex items-center justify-center mb-4 sm:mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.622v5.245a2.25 2.25 0 0 1-2.25 2.25h-2.25m-6.75-2.25h1m2.25 0h1m2.25 0h1"
                  />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-sans tracking-tight mb-2 sm:mb-3">
                Free Delivery
              </h3>
              <p className="text-gray-500 text-[13px] sm:text-[15px] leading-relaxed">
                Get your streetwear fast and free, with no extra shipping costs
                on all orders.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col text-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-200 flex items-center justify-center mb-4 sm:mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V5.903c0-.754-.726-1.294-1.453-1.096a59.769 59.769 0 0 1-15.797 2.101c-.727.198-1.453-.342-1.453-1.096V17.654c0 .754.726 1.294 1.453 1.096ZM12 15.75a3.75 3.75 0 1 1 0-7.5 3.75 3.75 0 0 1 0 7.5Z"
                  />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-sans tracking-tight mb-2 sm:mb-3">
                100% Secure Payment
              </h3>
              <p className="text-gray-500 text-[13px] sm:text-[15px] leading-relaxed">
                Shop with confidence using encrypted, safe, and trusted payment
                methods.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col text-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-200 flex items-center justify-center mb-4 sm:mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                  />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-sans tracking-tight mb-2 sm:mb-3">
                30 Days Return
              </h3>
              <p className="text-gray-500 text-[13px] sm:text-[15px] leading-relaxed">
                Not the perfect fit? No worries. Return or exchange hassle-free
                within 30 days.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col text-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-200 flex items-center justify-center mb-4 sm:mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                  />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-sans tracking-tight mb-2 sm:mb-3">
                24/7 Support
              </h3>
              <p className="text-gray-500 text-[13px] sm:text-[15px] leading-relaxed">
                Got questions? Our team is here for you anytime, anywhere.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
