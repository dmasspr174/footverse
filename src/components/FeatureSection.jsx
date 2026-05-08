import React from "react";
import { ArrowUpRight } from "lucide-react";
import feature1 from "../assets/17.jpg";
import feature2 from "../assets/14.jpg";
import feature3 from "../assets/11.jpg";
import feature4 from "../assets/18.jpg";

export default function FeaturedGrid() {
  return (
    <div className="max-w-[1400px] mx-auto font-sans">
      <div className="text-start mb-xl">
        <h2 className="heading-primary mb-sm">NEW DROPS</h2>
        <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed max-w-2xl font-medium">
          Stand out with our latest collection—bold designs, premium fabrics,
          and street-ready fits. Once they’re gone, they’re gone. Don’t miss
          out!
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Large Card */}
          <div className="relative rounded-card-lg overflow-hidden aspect-[4/5] md:aspect-auto h-full group">
            <img
              src={feature1}
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
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-md">
            {/* Top Right */}
            <div className="relative rounded-card-lg overflow-hidden flex-1 aspect-video md:aspect-auto group min-h-[250px] md:min-h-0">
              <img
                src={feature2}
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
            </div>

            {/* Bottom Right */}
            <div className="relative rounded-card-lg overflow-hidden flex-1 aspect-video md:aspect-auto group min-h-[250px] md:min-h-0">
              <img
                src={feature3}
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
            </div>
          </div>
        </div>

        {/* Bottom Full Width Card */}
        <div className="relative rounded-card-lg overflow-hidden h-[300px] md:h-[400px] group">
          <img
            src={feature4}
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
        </div>
      </div>
    </div>
  );
}
