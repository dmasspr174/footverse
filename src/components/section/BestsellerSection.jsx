import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { getImages } from "../../api";
import { useCart } from "../../components/CartContext";
import { Skeleton } from "@/components/ui/skeleton";

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
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function BestsellerSection() {
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
    <motion.div
      className="section-container py-xl md:py-2xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.div
        className="flex flex-col md:flex-row justify-between items-start md:items-end gap-md mb-xl"
        variants={itemVariants}
      >
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
      </motion.div>

      <motion.div variants={itemVariants}>
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
                          <h3 className="text-lg  mb-4 line-clamp-2 capitalize">
                            {product.tags}
                          </h3>
                        </div>
                        <div className="flex items-center justify-between gap-4 mt-auto">
                          <span className="text-2xl font-semibold text-gray-800">
                            ${product.likes}
                          </span>
                          <button
                            onClick={() => toggleCart(product)}
                            className={`font-semibold py-sm rounded-xl  px-4 transition-colors ${
                              isInCart(product.id)
                                ? "bg-brand-accent text-text-contrast border-transparent"
                                : "bg-transparent hover:bg-brand-accent text-text-main hover:text-text-contrast border-[0.5px] hover:border-transparent"
                            }`}
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
      </motion.div>
    </motion.div>
  );
}

export default BestsellerSection;
