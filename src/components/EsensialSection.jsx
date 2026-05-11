import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import esensial1 from "../assets/3.jpg";
import esensial2 from "../assets/4.jpg";
import esensial3 from "../assets/1.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

function EsensialSection() {
  return (
    <motion.div
      className="section-container py-xl md:py-2xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.div className="text-start mb-xl" variants={itemVariants}>
        <h2 className="heading-primary mb-sm">Essential Kicks</h2>
        <p className="text-text-muted text-sm md:text-[15px] leading-relaxed max-w-2xl font-medium">
          Designed for ultimate comfort and undeniable street appeal.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg md:gap-12 w-full min-h-[400px]">
        {[
          {
            img: esensial1,
            title: "Sneakers",
            alt: "Classic Urban Sneakers Collection",
          },
          {
            img: esensial2,
            title: "Sneakers",
            alt: "Performance Streetwear Shoes",
          },
          {
            img: esensial3,
            title: "Sneakers",
            alt: "Limited Edition Urban Footwear",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="relative rounded-3xl overflow-hidden aspect-[4/5] group bg-surface-gray"
            variants={itemVariants}
          >
            <img
              src={item.img}
              alt={item.alt}
              loading="eager"
              decoding="async"
              width="800"
              height="1000"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-white text-3xl font-serif mb-4 drop-shadow-md">
                {item.title}
              </h3>
              <button
                className="btn-white"
                aria-label={`View all ${item.title}`}
              >
                View all
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default EsensialSection;
