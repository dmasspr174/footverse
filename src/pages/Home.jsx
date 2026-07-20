import React, { lazy, Suspense } from "react";
import HeroCarousel from "@/components/section/HeroSection";
const FeaturedGrid = lazy(() => import("@/components/section/FeatureSection"));
const EsensialSection = lazy(() => import("@/components/section/EsensialSection"));
const TrustBadges = lazy(() => import("@/components/section/TrustBadgesSection"));
const BestsellerSection = lazy(() => import("@/components/section/BestsellerSection"));

function Home() {
  return (
    <div className="bg-surface-white font-sans overflow-x-hidden">
      {/* Hero Section - Static Import for LCP Performance */}
      <div className="section-container md:px-0 py-xl md:py-sm min-h-[500px] md:min-h-[750px]">
        <HeroCarousel />
      </div>

      <Suspense fallback={<div className="h-40 flex items-center justify-center text-text-muted">Loading content...</div>}>
        {/* Esenesial Section */}
        <EsensialSection />

        {/* Best Sellers Section */}
        <BestsellerSection />

        {/* Featured Grid Section */}
        <div className="container mx-auto px-4 py-8">
          <FeaturedGrid />
        </div>

        {/* Trust Badges */}
        <TrustBadges />
      </Suspense>
    </div>
  );
}

export default Home;
