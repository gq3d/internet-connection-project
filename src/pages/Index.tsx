import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSEO } from '@/hooks/useSEO';
import Header from '@/components/home/Header';
import HeroSection from '@/components/home/HeroSection';
import ServicesCallToAction from '@/components/home/ServicesCallToAction';
import ConnectionSchema from '@/components/home/ConnectionSchema';
import AboutSection from '@/components/home/AboutSection';
import ContactsSection from '@/components/home/ContactsSection';
import Footer from '@/components/home/Footer';

const Index = () => {
  const location = useLocation();

  useSEO({
    canonical: 'https://mosoblconnect.ru/'
  });

  useEffect(() => {
    document.title = 'NetConnect - Беспроводной интернет в Московской области | Спутниковый интернет до 250 Мбит/с';
  }, []);

  useEffect(() => {
    // Handle scroll to section from navigation state
    if (location.state?.scrollTo) {
      const scrollToSection = (anchorId: string, retries = 0) => {
        const section = document.getElementById(anchorId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        } else if (retries < 20) {
          // Retry up to 20 times (2 seconds total)
          setTimeout(() => scrollToSection(anchorId, retries + 1), 100);
        }
      };
      // Start after a short delay to ensure page is rendered
      setTimeout(() => scrollToSection(location.state.scrollTo), 200);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesCallToAction />
      <ConnectionSchema />
      <AboutSection />
      <ContactsSection />
      <Footer />
    </div>
  );
};

export default Index;