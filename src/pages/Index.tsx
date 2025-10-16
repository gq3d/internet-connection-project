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
    title: 'NetConnect - Беспроводной интернет в Московской области | Спутниковый интернет до 250 Мбит/с',
    canonical: 'https://mosoblconnect.ru/'
  });

  useEffect(() => {
    const scrollToSection = (anchorId: string, retries = 0) => {
      const section = document.getElementById(anchorId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      } else if (retries < 20) {
        // Retry up to 20 times (2 seconds total)
        setTimeout(() => scrollToSection(anchorId, retries + 1), 100);
      }
    };

    // Handle scroll to section from navigation state or hash
    const scrollTarget = location.state?.scrollTo || (location.hash ? location.hash.substring(1) : null);
    
    if (scrollTarget) {
      // Start after a short delay to ensure page is rendered
      setTimeout(() => scrollToSection(scrollTarget), 200);
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