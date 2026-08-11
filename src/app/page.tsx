import HeroSection from "@/components/HeroSection";
import TrustIntroductionSection from "@/components/TrustIntroductionSection";
import ProductSolutionsSection from "@/components/ProductSolutionsSection";

import EngineeringCapabilitiesSection from "@/components/EngineeringCapabilitiesSection";
import ProductCategoriesSection from "@/components/ProductCategoriesSection";
import OtherProductsSection from "@/components/OtherProductsSection";
import PerformanceMetricsSection from "@/components/PerformanceMetricsSection";
import CallToActionSection from "@/components/CallToActionSection";

export default function Home() {
  return (
    <>
      <main className="flex-grow flex flex-col pt-0 overflow-x-clip bg-background">
        <HeroSection />
        <ProductCategoriesSection />
        <ProductSolutionsSection />
        <TrustIntroductionSection />
        <PerformanceMetricsSection />
        <EngineeringCapabilitiesSection />
        <OtherProductsSection />
        <CallToActionSection />
      </main>
    </>
  );
}
