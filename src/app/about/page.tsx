import AboutHero from "@/components/about/AboutHero";
import MissionVision from "@/components/about/MissionVision";
import ManufacturingCapability from "@/components/about/ManufacturingCapability";
import CertificationsStrip from "@/components/about/CertificationsStrip";
import LeadershipMessage from "@/components/about/LeadershipMessage";
import AboutFooter from "@/components/about/AboutFooter";

export default function AboutPage() {
  return (
    <div className="theme-about min-h-screen flex flex-col font-body-md bg-background text-on-surface antialiased">
      <main className="flex-grow pt-[80px]">
        <AboutHero />
        <MissionVision />
        <ManufacturingCapability />
        <CertificationsStrip />
        <LeadershipMessage />
      </main>
      <AboutFooter />
    </div>
  );
}
