import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import hero1 from "../assets/10.jpg";
import hero2 from "../assets/9.jpg";
import hero3 from "../assets/8.jpg";
import hero4 from "../assets/7.jpg";

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
    <div className="relative w-full h-[60vh] md:min-h-[750px] min-h-[500px] bg-black rounded-3xl overflow-hidden font-sans">
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
            className={`w-full h-full object-cover object-center transition-transform duration-[10000ms] ease-out ${
              index === currentIndex ? "scale-105" : "scale-100"
            }`}
          />
          {/* Gradient Overlay agar teks lebih mudah dibaca */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </div>
      ))}

      {/* Main Content (Teks & Tombol) */}
      <div className="relative z-10 h-full flex flex-col justify-center px-10 md:px-20 lg:px-32 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6 transition-all duration-700 transform translate-y-0">
          {SLIDES[currentIndex].title}
        </h1>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-10 max-w-lg">
          {SLIDES[currentIndex].description}
        </p>

        {/* Tombol CTA */}
        <div>
          <button className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-medium text-sm hover:bg-gray-200 transition-colors">
            <span className="bg-black text-white p-1 rounded-full">
              <ArrowRight size={16} strokeWidth={3} />
            </span>
            Shop now
          </button>
        </div>
      </div>

      {/* Custom Bottom Pagination */}
      <div className="absolute bottom-0 left-0 w-full z-20 px-10 md:px-20 lg:px-32 pb-10">
        <div className="flex gap-4 md:gap-8 w-full border-t border-gray-500/30">
          {SLIDES.map((slide, index) => (
            <div
              key={slide.id}
              onClick={() => setCurrentIndex(index)}
              className="relative flex-1 pt-6 cursor-pointer group"
            >
              {/* Garis indikator aktif */}
              <div
                className={`absolute top-[-1px] left-0 h-[2px] bg-white ${
                  index === currentIndex
                    ? "w-full transition-all duration-[5000ms] ease-linear"
                    : "w-0 transition-all duration-500 ease-in-out group-hover:w-1/2"
                }`}
              />

              {/* Teks Pagination */}
              <div
                className={`transition-colors duration-300 ${index === currentIndex ? "text-white" : "text-gray-500 group-hover:text-gray-300"}`}
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
