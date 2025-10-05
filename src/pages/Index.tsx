import { useEffect } from 'react';
import Header from '@/components/home/Header';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import ServicesCallToAction from '@/components/home/ServicesCallToAction';
import AboutSection from '@/components/home/AboutSection';
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
      <ServicesCallToAction />
      <AboutSection />
      <ContactsSection />
      <Footer />
    </div>
  );
};

export default Index;