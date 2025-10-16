import { useParams, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '@/components/Breadcrumbs';
import { useSEO } from '@/hooks/useSEO';
import { cityData } from '@/data/cityData';
import { trackCityVisit } from '@/utils/metrika';
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
  
  // Normalize slug: convert Cyrillic to Latin for canonical URLs
  const translitMap: { [key: string]: string } = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e',
    'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm',
    'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
    'ф': 'f', 'х': 'h', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'sch',
    'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya'
  };
  
  const normalizedSlug = citySlug ? citySlug.toLowerCase()
    .split('')
    .map(char => translitMap[char] || char)
    .join('')
    .replace(/[^a-zA-Z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '') : null;
  
  const city = normalizedSlug ? cityData[normalizedSlug] : null;
  const [isServicesVisible, setIsServicesVisible] = useState(false);
  
  const shouldRedirect = citySlug && normalizedSlug && citySlug !== normalizedSlug;

  // CRITICAL: Set canonical BEFORE redirect to prevent index.html canonical from staying
  // For Cyrillic URLs: set noindex to tell search engines not to index them
  useSEO({
    title: city ? `Интернет в ${city.name} от 1490₽/мес — подключение за 1-3 дня | NetConnect` : '',
    description: city ? `Беспроводной интернет в ${city.name} и окрестностях: скорость до 250 Мбит/с, установка за 1-3 дня. Подключаем частные дома, дачи, коттеджные посёлки и СНТ. ${city.district}. Бесплатный выезд инженера. Звоните: +7 (901) 500-00-78` : '',
    keywords: city ? `интернет ${city.name}, беспроводной интернет ${city.name}, подключение интернета ${city.name}, интернет на даче ${city.name}, интернет в коттедже ${city.name}, провайдер ${city.name}, ${city.district} интернет, wifi ${city.name}` : '',
    canonical: normalizedSlug ? `https://mosoblconnect.ru/city/${normalizedSlug}` : '',
    ogTitle: city ? `Беспроводной интернет в ${city.name} от 1490₽/мес` : '',
    ogDescription: city ? `Подключаем интернет до 250 Мбит/с за 1-3 дня в ${city.name}. Покрытие частных домов, дач, коттеджных посёлков и СНТ. Бесплатная установка оборудования.` : '',
    ogImage: 'https://cdn.mosoblconnect.ru/files/0b95440d-0b84-41b8-8404-418760cb07a4.jpg',
    ogImageAlt: city ? `Подключение беспроводного интернета NetConnect в ${city.name}` : '',
    noindex: shouldRedirect // Tell search engines: don't index Cyrillic URLs
  });
  
  // Redirect Cyrillic URLs to canonical Latin URLs AFTER setting canonical
  if (shouldRedirect) {
    return <Navigate to={`/city/${normalizedSlug}`} replace />;
  }

  useEffect(() => {
    if (city && normalizedSlug) {
      trackCityVisit(city.name, normalizedSlug);
    }
  }, [city, normalizedSlug]);

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
        {/* Note: robots meta is set by useSEO hook - don't override it here */}
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": `NetConnect`,
            "alternateName": `NetConnect - Беспроводной интернет в ${city.name}`,
            "description": `Подключение беспроводного интернета в ${city.name}, ${city.district}. Обслуживаем частные дома, дачи, коттеджные посёлки и СНТ. Скорость до 250 Мбит/с, установка за 1-3 дня.`,
            "image": "https://cdn.mosoblconnect.ru/files/0b95440d-0b84-41b8-8404-418760cb07a4.jpg",
            "url": `https://mosoblconnect.ru/city/${normalizedSlug}`,
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
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Главная",
                "item": "https://mosoblconnect.ru"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Покрытие",
                "item": "https://mosoblconnect.ru/coverage"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": city.name,
                "item": `https://mosoblconnect.ru/city/${normalizedSlug}`
              }
            ]
          })}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": `Как быстро можно подключить интернет в ${city.name}?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `Подключение беспроводного интернета в ${city.name} занимает от 1 до 3 дней. После заявки наш инженер выезжает на объект, устанавливает оборудование и настраивает подключение.`
                }
              },
              {
                "@type": "Question",
                "name": `Какая скорость интернета доступна в ${city.name}?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `В ${city.name} доступны тарифы со скоростью от 30 до 250 Мбит/с. Конкретная скорость зависит от выбранного тарифа и технических возможностей в вашем районе.`
                }
              },
              {
                "@type": "Question",
                "name": `Сколько стоит интернет в ${city.name}?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `Стоимость интернета в ${city.name} начинается от 1490₽ в месяц за тариф Стартовый (30 Мбит/с). Оптимальный тариф (100 Мбит/с) — 1990₽, Максимальный (250 Мбит/с) — 2590₽.`
                }
              },
              {
                "@type": "Question",
                "name": `Работает ли интернет на дачах в ${city.name}?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `Да, беспроводной интернет работает на дачах, в СНТ и коттеджных посёлках ${city.name}. Мы специализируемся на подключении интернета в загородных домах.`
                }
              }
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