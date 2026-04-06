/*
 * DESIGN: Trattoria Napolitaine Contemporaine
 * Page principale — assemblage de toutes les sections
 * Palette: rouge tomate, crème chaud, noir charbon, vert basilic
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import ServicesSection from "@/components/ServicesSection";
import ReviewsSection from "@/components/ReviewsSection";
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <ServicesSection />
      <ReviewsSection />
      <InfoSection />
      <Footer />
    </div>
  );
}
