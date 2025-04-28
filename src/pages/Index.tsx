import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import MonumentsSection from "@/components/sections/MonumentsSection";
import WreathsSection from "@/components/sections/WreathsSection";
import BurialsSection from "@/components/sections/BurialsSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <MonumentsSection />
      <WreathsSection />
      <BurialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
