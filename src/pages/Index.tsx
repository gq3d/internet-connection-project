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
    title: 'NetConnect - Беспроводной интернет в МО | 169+ населённых пунктов, деревень, КП',
    description: 'Высокоскоростной беспроводной и спутниковый интернет NetConnect до 250 Мбит/с в Московской области. 169+ населённых пунктов: города, деревни, посёлки, КП, СНТ. Удобный поиск. Подключение за 1 день. ☎️ +7 (901) 500-00-78',
    keywords: 'интернет московская область, беспроводной интернет мо, спутниковый интернет подмосковье, интернет в деревне мо, интернет в коттеджном посёлке, интернет на даче, интернет в снт, быстрый интернет мо, подключить интернет деревня',
    ogTitle: 'NetConnect - Беспроводной интернет в МО | Города, деревни, посёлки',
    ogDescription: 'Высокоскоростной интернет до 250 Мбит/с в 169+ населённых пунктах Московской области. Города, деревни, КП, СНТ.',
    ogImage: 'https://cdn.mosoblconnect.ru/files/0b95440d-0b84-41b8-8404-418760cb07a4.jpg',
    canonical: 'https://mosoblconnect.ru/',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "NetConnect",
      "url": "https://mosoblconnect.ru/",
      "logo": "https://cdn.mosoblconnect.ru/files/0b95440d-0b84-41b8-8404-418760cb07a4.jpg",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+7-901-500-00-78",
        "contactType": "customer service"
      }
    }
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