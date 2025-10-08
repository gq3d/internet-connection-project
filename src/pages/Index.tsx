import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/home/Header';
import HeroSection from '@/components/home/HeroSection';
import ServicesCallToAction from '@/components/home/ServicesCallToAction';
import ConnectionSchema from '@/components/home/ConnectionSchema';
import AboutSection from '@/components/home/AboutSection';
import ContactsSection from '@/components/home/ContactsSection';
import Footer from '@/components/home/Footer';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = 'NetConnect - Беспроводной интернет в Московской области | Спутниковый интернет до 250 Мбит/с';
  }, []);

  useEffect(() => {
    // Handle scroll to section from navigation state
    if (location.state?.scrollTo) {
      const scrollToSection = (anchorId: string, retries = 0) => {
        const section = document.getElementById(anchorId);
        if (section) {
          setTimeout(() => {
            section.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        } else if (retries < 10) {
          setTimeout(() => scrollToSection(anchorId, retries + 1), 100);
        }
      };
      scrollToSection(location.state.scrollTo);
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