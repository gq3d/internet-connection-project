import { useParams, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
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
import CitySEOText from '@/components/city/CitySEOText';
import CityReviews from '@/components/city/CityReviews';

const CityPage = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const city = citySlug ? cityData[citySlug] : null;
  const [isServicesVisible, setIsServicesVisible] = useState(false);

  // SEO setup - always set canonical even if city is null (prevents index.html canonical from staying)
  useSEO({
    title: city ? `Интернет в ${city.name} от 1490₽/мес — подключение за 1-3 дня | NetConnect` : '',
    description: city ? `Беспроводной интернет в ${city.name} и окрестностях: скорость до 250 Мбит/с, установка за 1-3 дня. Подключаем частные дома, дачи, коттеджные посёлки и СНТ. ${city.district}. Бесплатный выезд инженера. Звоните: +7 (901) 500-00-78` : '',
    canonical: citySlug ? `https://mosoblconnect.ru/city/${encodeURIComponent(citySlug)}` : '',
    ogTitle: city ? `Беспроводной интернет в ${city.name} от 1490₽/мес` : '',
    ogDescription: city ? `Подключаем интернет до 250 Мбит/с за 1-3 дня в ${city.name}. Покрытие частных домов, дач, коттеджных посёлков и СНТ. Бесплатная установка оборудования.` : '',
    ogImage: 'https://cdn.mosoblconnect.ru/files/0b95440d-0b84-41b8-8404-418760cb07a4.jpg',
    ogImageAlt: city ? `Подключение беспроводного интернета NetConnect в ${city.name}` : ''
  });

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

  if (!city) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": `NetConnect`,
            "alternateName": `NetConnect - Беспроводной интернет в ${city.name}`,
            "description": `Подключение беспроводного интернета в ${city.name}, ${city.district}. Обслуживаем частные дома, дачи, коттеджные посёлки и СНТ. Скорость до 250 Мбит/с, установка за 1-3 дня.`,
            "image": "https://cdn.mosoblconnect.ru/files/0b95440d-0b84-41b8-8404-418760cb07a4.jpg",
            "url": `https://mosoblconnect.ru/city/${citySlug}`,
            "telephone": ["+7 (901) 500-00-78", "+7 (901) 500-00-87"],
            "priceRange": "1490₽ - 2590₽",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": city.name,
              "addressRegion": city.district,
              "addressCountry": "RU"
            },
            "geo": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "addressLocality": city.name,
                "addressRegion": city.district
              },
              "geoRadius": "50000"
            },
            "areaServed": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "addressLocality": city.name,
                "addressRegion": city.district
              },
              "geoRadius": "50000"
            },
            "openingHours": "Mo-Su 00:00-24:00",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Тарифы беспроводного интернета",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Стартовый тариф"
                  },
                  "price": "1490",
                  "priceCurrency": "RUB"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Оптимальный тариф"
                  },
                  "price": "1990",
                  "priceCurrency": "RUB"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Максимальный тариф"
                  },
                  "price": "2590",
                  "priceCurrency": "RUB"
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "1500",
              "bestRating": "5",
              "worstRating": "1"
            },
            "sameAs": [
              "https://t.me/+QgiLIa1gFRY4Y2Iy"
            ]
          })}
        </script>
      </Helmet>

      <CityHeader />

      <Breadcrumbs items={[
        { label: 'Покрытие', href: '/coverage' },
        { label: city.name }
      ]} />

      <CityHero cityName={city.name} district={city.district} />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <CityServicesSection cityName={city.name} />
          <CityAdditionalServices cityName={city.name} isVisible={isServicesVisible} />
          <CityCTA cityName={city.name} />
        </div>
      </section>

      <CitySEOText cityName={city.name} />

      <CityReviews cityName={city.name} />

      <CityWhatsAppButton cityName={city.name} />
      <CityFooter cityName={city.name} />
    </div>
  );
};

export default CityPage;