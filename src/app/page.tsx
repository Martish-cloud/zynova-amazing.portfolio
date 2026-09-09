import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import FounderMessage from "@/components/FounderMessage";
import AboutShowcase from "@/components/AboutShowcase";
import ServicesGallery from "@/components/ServicesGallery";
import Playbook from "@/components/Playbook";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen flex flex-col items-center">
      <Header />
      <Hero />
      <StatsBar />
      <FounderMessage />
      <ServicesGallery />
      <Playbook />
      <AboutShowcase />
      <Footer />
    </main>
  );
}
