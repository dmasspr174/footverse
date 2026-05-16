import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import hero1 from "../../assets/6.jpg";
import hero2 from "../../assets/9.jpg";
import hero3 from "../../assets/15.jpg";
import hero4 from "../../assets/7.jpg";

const SLIDES = [
  {
    id: "01",
    label: "Community-Driven Culture",
    title: "STREET CULTURE",
    description:
      "Embracing the raw energy of the streets through innovative designs and unapologetic aesthetics.",
    image: hero1,
  },
  {
    id: "02",
    label: "Future-Ready Fashion",
    title: "FUTURE-READY FASHION",
    description:
      "From oversized silhouettes to innovative materials, we push the boundaries of modern streetwear while staying true to the culture.",
    image: hero2,
  },
  {
    id: "03",
    label: "Art Meets Attitude",
    title: "ART MEETS ATTITUDE",
    description:
      "Express yourself with wearable art pieces designed for those who dare to stand out.",
    image: hero3,
  },
  {
    id: "04",
    label: "Built for the Streets",
    title: "URBAN ESSENTIALS",
    description:
      "Durable, comfortable, and styled for the daily grind of city life.",
    image: hero4,
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[60vh] md:min-h-[750px] min-h-[500px] bg-surface-dark rounded-card-lg overflow-hidden font-sans">
      {/* Background Images & Overlay */}
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "low"}
            decoding="async"
            width="1920"
            height="1080"
            className={`w-full h-full object-cover object-center transition-transform duration-[10000ms] ease-out ${
              index === currentIndex ? "scale-105" : "scale-100"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-dark/60 via-surface-dark/30 to-transparent" />
        </div>
      ))}

      {/* Main Content (Teks & Tombol) */}
      <div className="relative z-10 h-full flex flex-col justify-center px-10 md:px-20 lg:px-32 max-w-4xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-5xl md:text-8xl font-extrabold text-text-contrast leading-[1.1] tracking-tight mb-lg">
              {SLIDES[currentIndex].title}
            </h1>
            <p className="text-surface-gray text-sm md:text-lg leading-relaxed mb-xl max-w-xl">
              {SLIDES[currentIndex].description}
            </p>

            {/* Tombol CTA */}
            <div>
              <button className="flex items-center gap-sm bg-surface-white text-surface-dark px-lg py-4 rounded-full font-bold text-sm hover:bg-brand-accent hover:text-text-contrast transition-all hover:scale-105 active:scale-95 shadow-lg">
                <span className="bg-surface-dark text-text-contrast p-xs rounded-full ">
                  <ArrowRight size={18} strokeWidth={3} />
                </span>
                Shop now
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Custom Bottom Pagination */}
      <div className="absolute bottom-0 left-0 w-full z-20 px-10 md:px-20 lg:px-32 pb-10">
        <div className="flex gap-md md:gap-xl w-full border-t border-text-muted/30">
          {SLIDES.map((slide, index) => (
            <div
              key={slide.id}
              onClick={() => setCurrentIndex(index)}
              className="relative flex-1 pt-6 cursor-pointer group"
            >
              <div className="absolute top-[-1px] left-0 w-full h-[2px] bg-surface-white/20" />
              <div
                className={`absolute top-[-1px] left-0 h-[2px] bg-surface-white origin-left transition-transform ${
                  index === currentIndex
                    ? "scale-x-100 duration-[5000ms] ease-linear"
                    : "scale-x-0 duration-500 ease-in-out group-hover:scale-x-50"
                }`}
              />

              <div
                className={`transition-colors duration-300 ${
                  index === currentIndex
                    ? "text-text-contrast"
                    : "text-text-muted group-hover:text-surface-gray"
                }`}
              >
                <span className="text-xs font-bold mb-1">{slide.id}</span>
                <span className="text-xs hidden md:block font-medium truncate">
                  {slide.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
