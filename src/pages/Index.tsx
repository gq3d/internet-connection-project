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
    description: 'Высокоскоростной беспроводной и спутниковый интернет NetConnect до 250 Мбит/с в Московской области. Bonding до 1 Гбит/с для бизнеса. 169+ населённых пунктов: города, деревни, посёлки, КП, СНТ. Подключение за 1 день. ☎️ +7 (901) 500-00-78',
    keywords: 'интернет московская область, беспроводной интернет мо, спутниковый интернет подмосковье, интернет в деревне мо, интернет в коттеджном посёлке, интернет на даче, интернет в снт, быстрый интернет мо, подключить интернет деревня, bonding каналов, объединение интернет каналов, интернет для бизнеса 1 гбит',
    ogTitle: 'NetConnect - Беспроводной интернет в МО | Города, деревни, посёлки',
    ogDescription: 'Высокоскоростной интернет до 250 Мбит/с в 169+ населённых пунктах Московской области. Bonding до 1 Гбит/с для бизнеса. Города, деревни, КП, СНТ.',
    ogImage: 'https://cdn.mosoblconnect.ru/files/0b95440d-0b84-41b8-8404-418760cb07a4.jpg',
    canonical: 'https://mosoblconnect.ru/',
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://mosoblconnect.ru/#organization",
          "name": "NetConnect",
          "url": "https://mosoblconnect.ru/",
          "logo": {
            "@type": "ImageObject",
            "url": "https://cdn.mosoblconnect.ru/files/0b95440d-0b84-41b8-8404-418760cb07a4.jpg"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+7-901-500-00-78",
            "contactType": "customer service",
            "areaServed": "RU",
            "availableLanguage": "Russian"
          },
          "sameAs": [
            "https://wa.me/79015000078"
          ]
        },
        {
          "@type": "WebSite",
          "@id": "https://mosoblconnect.ru/#website",
          "url": "https://mosoblconnect.ru/",
          "name": "NetConnect - Беспроводной интернет в Московской области",
          "publisher": {
            "@id": "https://mosoblconnect.ru/#organization"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://mosoblconnect.ru/?search={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        },
        {
          "@type": "Service",
          "@id": "https://mosoblconnect.ru/#service",
          "serviceType": "Internet Service Provider",
          "name": "Беспроводной и спутниковый интернет",
          "description": "Высокоскоростной интернет до 250 Мбит/с в 169+ населённых пунктах Московской области",
          "provider": {
            "@id": "https://mosoblconnect.ru/#organization"
          },
          "areaServed": {
            "@type": "State",
            "name": "Московская область"
          },
          "offers": {
            "@type": "Offer",
            "priceCurrency": "RUB",
            "price": "500",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": "500",
              "priceCurrency": "RUB",
              "unitText": "месяц"
            }
          }
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://mosoblconnect.ru/#breadcrumb",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Главная",
              "item": "https://mosoblconnect.ru/"
            }
          ]
        }
      ]
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