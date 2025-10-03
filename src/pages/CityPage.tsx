import { useParams, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { useSEO } from '@/hooks/useSEO';
import { cityData } from '@/data/cityData';
import CityHeader from '@/components/city/CityHeader';
import CityHero from '@/components/city/CityHero';
import CityServicesSection from '@/components/city/CityServicesSection';
import CityAdditionalServices from '@/components/city/CityAdditionalServices';
import CityCTA from '@/components/city/CityCTA';
import CityWhatsAppButton from '@/components/city/CityWhatsAppButton';
import CityFooter from '@/components/city/CityFooter';

const CityPage = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const city = citySlug ? cityData[citySlug] : null;
  const [isServicesVisible, setIsServicesVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsServicesVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const servicesSection = document.getElementById('additional-services');
    if (servicesSection) {
      observer.observe(servicesSection);
    }

    return () => {
      if (servicesSection) {
        observer.unobserve(servicesSection);
      }
    };
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault();
    window.location.href = `/${anchor}`;
  };

  useSEO({
    title: city?.seoTitle || 'NetConnect',
    description: city?.description || '',
    keywords: `интернет ${city?.name}, беспроводной интернет ${city?.name}, подключение интернета ${city?.name}, интернет на даче ${city?.name}`,
    canonical: `https://mosoblconnect.ru/city/${citySlug}`,
    ogTitle: city?.seoTitle || '',
    ogDescription: city?.description || '',
    ogImage: 'https://cdn.mosoblconnect.ru/files/0b95440d-0b84-41b8-8404-418760cb07a4.jpg'
  });

  if (!city) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <CityHeader onAnchorClick={handleAnchorClick} />

      <Breadcrumbs items={[
        { label: 'Покрытие', href: '/#coverage' },
        { label: city.name }
      ]} />

      <CityHero cityName={city.name} />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <CityServicesSection cityName={city.name} />
          <CityAdditionalServices cityName={city.name} isVisible={isServicesVisible} />
          <CityCTA cityName={city.name} />
        </div>
      </section>

      <CityWhatsAppButton cityName={city.name} />
      <CityFooter cityName={city.name} />
    </div>
  );
};

export default CityPage;
