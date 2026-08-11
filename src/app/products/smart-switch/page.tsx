import SmartSwitchHero from "@/components/smart-switch/SmartSwitchHero";
import TechnicalSpecsStrip from "@/components/smart-switch/TechnicalSpecsStrip";
import ProductSeriesGrid from "@/components/smart-switch/ProductSeriesGrid";

export default function SmartSwitchPage() {
  return (
    <div className="theme-smart-switch min-h-screen flex flex-col font-body-md bg-background text-on-surface antialiased pt-20">
      <main className="flex-grow">
        <SmartSwitchHero />
        <TechnicalSpecsStrip />
        <ProductSeriesGrid />
      </main>
    </div>
  );
}
