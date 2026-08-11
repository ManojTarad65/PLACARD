import SwitchgearHero from "@/components/switchgear/SwitchgearHero";
import SwitchgearSpecs from "@/components/switchgear/SwitchgearSpecs";
import SwitchgearProductsGrid from "@/components/switchgear/SwitchgearProductsGrid";

export default function SwitchgearPage() {
  return (
    <div className="theme-switchgear min-h-screen flex flex-col font-body-md bg-background text-on-surface antialiased pt-20">
      <main className="flex-grow">
        <SwitchgearHero />
        <SwitchgearSpecs />
        <SwitchgearProductsGrid />
      </main>
    </div>
  );
}
