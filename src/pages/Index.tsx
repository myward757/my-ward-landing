import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import EventsSection from "@/components/EventsSection";
import MediaSection from "@/components/MediaSection";
import LaunchEventSection from "@/components/LaunchEventSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowToUseSection from "@/components/HowToUseSection";
import VisionSection from "@/components/VisionSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-[4.5rem]">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <EventsSection />
        <MediaSection />
        <LaunchEventSection />
        <BenefitsSection />
        <HowToUseSection />
        <VisionSection />
        <DownloadSection />
        <Footer />
        <ChatBot />
      </main>
    </div>
  );
};

export default Index;
