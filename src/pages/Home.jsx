import HeroCarousel from "@/components/HeroSection";
import FeaturedGrid from "@/components/FeatureSection";
import EsensialSection from "@/components/EsensialSection";
import TrustBadges from "@/components/TrustBadges";
import BestsellerSection from "@/components/BestsellerSection";
function Home() {
  return (
    <div className="bg-surface-white font-sans overflow-x-hidden">
      {/* Hero Section - Static Import for LCP Performance */}
      <div className="section-container md:px-0 py-xl md:py-sm min-h-[500px] md:min-h-[750px]">
        <HeroCarousel />
      </div>

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
    </div>
  );
}

export default Home;
