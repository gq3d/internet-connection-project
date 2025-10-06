import { useEffect } from 'react';
import Header from '@/components/home/Header';
import HeroSection from '@/components/home/HeroSection';
import ServicesCallToAction from '@/components/home/ServicesCallToAction';
import ConnectionSchema from '@/components/home/ConnectionSchema';
import AboutSection from '@/components/home/AboutSection';
import ContactsSection from '@/components/home/ContactsSection';
import Footer from '@/components/home/Footer';
import SitemapNotifier from '@/components/admin/SitemapNotifier';

const Index = () => {
  useEffect(() => {
    document.title = 'NetConnect - Беспроводной интернет в Московской области | Спутниковый интернет до 250 Мбит/с';
  }, []);

  // Показываем SitemapNotifier только в режиме разработки или при добавлении ?admin=true
  const showAdmin = import.meta.env.DEV || new URLSearchParams(window.location.search).get('admin') === 'true';

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesCallToAction />
      <ConnectionSchema />
      <AboutSection />
      <ContactsSection />
      <Footer />
      {showAdmin && <SitemapNotifier />}
    </div>
  );
};

export default Index;