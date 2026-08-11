import AboutHero from "@/components/about/AboutHero";
import MissionVision from "@/components/about/MissionVision";
import ManufacturingCapability from "@/components/about/ManufacturingCapability";
import CertificationsStrip from "@/components/about/CertificationsStrip";
import LeadershipMessage from "@/components/about/LeadershipMessage";


export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col font-body-md antialiased bg-black selection:bg-primary selection:text-white">
      <main className="flex-grow">
        <AboutHero />
        <MissionVision />
        <ManufacturingCapability />
        <CertificationsStrip />
        <LeadershipMessage />
      </main>
      
    </div>
  );
}
