import { useEffect } from 'react';
import Header from '@/components/home/Header';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import TariffsSection from '@/components/home/TariffsSection';
import CoverageSection from '@/components/home/CoverageSection';
import PricingSection from '@/components/home/PricingSection';
import EngineerPricingSection from '@/components/home/EngineerPricingSection';
import EsimSection from '@/components/home/EsimSection';
import AboutSection from '@/components/home/AboutSection';
import FAQSection from '@/components/home/FAQSection';
import ContactsSection from '@/components/home/ContactsSection';
import Footer from '@/components/home/Footer';

const Index = () => {
  useEffect(() => {
    document.title = 'NetConnect - Беспроводной интернет в Московской области | Спутниковый интернет до 250 Мбит/с';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <TariffsSection />
      <CoverageSection />
      <PricingSection />
      <EngineerPricingSection />
      <EsimSection />
      <AboutSection />
      <FAQSection />
      <ContactsSection />
      <Footer />
    </div>
  );
};

export default Index;