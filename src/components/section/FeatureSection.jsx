import React from "react";
import { ArrowUpRight } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function FeaturedGrid() {
  return (
    <motion.div
      className="max-w-[1400px] mx-auto font-sans"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.div className="text-start mb-xl" variants={itemVariants}>
        <h2 className="heading-primary mb-sm">NEW DROPS</h2>
        <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed max-w-2xl font-medium">
          Stand out with our latest collection—bold designs, premium fabrics,
          and street-ready fits. Once they’re gone, they’re gone. Don’t miss
          out!
        </p>
      </motion.div>

      <div className="flex flex-col gap-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Large Card */}
          <motion.div
            className="relative rounded-card-lg overflow-hidden aspect-[4/5] md:aspect-auto h-full group"
            variants={itemVariants}
          >
            <img
              src="/assets/17.webp"
              alt="Sneakers Collection"
              loading="lazy"
              decoding="async"
              width="800"
              height="1000"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/60 via-surface-dark/0 to-surface-dark/0" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-white text-3xl font-serif mb-4 drop-shadow-md">
                Sneakers
              </h3>
              <button className="btn-white">View all sneakers</button>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="flex flex-col gap-md">
            {/* Top Right */}
            <motion.div
              className="relative rounded-card-lg overflow-hidden flex-1 aspect-video md:aspect-auto group min-h-[250px] md:min-h-0"
              variants={itemVariants}
            >
              <img
                src="/assets/14.webp"
                alt="New Arrivals"
                loading="lazy"
                decoding="async"
                width="800"
                height="450"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/40 via-surface-dark/0 to-surface-dark/0" />
              <div className="absolute top-8 left-8">
                <h3 className="text-white text-3xl font-serif mb-4 drop-shadow-md">
                  Sneakers
                </h3>
                <button className="bg-white text-black px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-gray-100 transition-colors shadow-sm">
                  View all sneakers
                </button>
              </div>
            </motion.div>

            {/* Bottom Right */}
            <motion.div
              className="relative rounded-card-lg overflow-hidden flex-1 aspect-video md:aspect-auto group min-h-[250px] md:min-h-0"
              variants={itemVariants}
            >
              <img
                src="/assets/11.webp"
                alt="Streetwear Essentials"
                loading="lazy"
                decoding="async"
                width="800"
                height="450"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/40 via-surface-dark/0 to-surface-dark/0" />
              <div className="absolute top-8 left-8">
                <h3 className="text-white text-3xl font-serif mb-4 drop-shadow-md">
                  Sneakers
                </h3>
                <button className="bg-white text-black px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-gray-100 transition-colors shadow-sm">
                  View all sneakers
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Full Width Card */}
        <motion.div
          className="relative rounded-card-lg overflow-hidden h-[300px] md:h-[400px] group"
          variants={itemVariants}
        >
          <img
            src="/assets/18.webp"
            alt="Trending Styles"
            loading="lazy"
            decoding="async"
            width="1400"
            height="400"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
          <div className="absolute bottom-8 left-8">
            <h3 className="text-white text-3xl font-serif mb-4 drop-shadow-md">
              Trending Now
            </h3>
            <button className="btn-white flex items-center gap-xs">
              Explore Shop
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
