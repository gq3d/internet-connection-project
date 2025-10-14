import { useSEO } from '@/hooks/useSEO';
import { Helmet } from 'react-helmet-async';
import {
  CellularHeader,
  CellularHero,
  CellularBoosters,
  CellularOperators,
  CellularAdvantages,
  CellularProcess,
  CellularCTA,
  CellularFooter
} from '@/components/cellular/CellularBoosterComponents';
import { CellularSigns, CellularExamples } from '@/components/cellular/CellularAdditional';

const CellularBooster = () => {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Усиление сотовой связи",
      "description": "Усиление сотовой связи в Московской области. Репитеры GSM, 3G, 4G, 5G для всех операторов.",
      "provider": {
        "@type": "Organization",
        "name": "NetConnect",
        "telephone": "+7-901-500-00-78",
        "url": "https://mosoblconnect.ru"
      },
      "areaServed": {
        "@type": "State",
        "name": "Московская область"
      },
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "18000",
        "highPrice": "65000",
        "priceCurrency": "RUB"
      },
      "serviceType": "Усиление сотовой связи",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "93"
      }
    },
    {
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
          "name": "Услуги",
          "item": "https://mosoblconnect.ru/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Усиление сотовой связи",
          "item": "https://mosoblconnect.ru/services/cellular-booster"
        }
      ]
    }
  ];

  useSEO({
    title: 'Усиление сотовой связи в МО от 18000₽ | NetConnect',
    description: 'Усиление сотовой связи в Московской области: репитеры GSM, 3G, 4G, 5G для всех операторов. Усиление сигнала на даче, в частном доме и на участке. Профессиональная установка, комплекты от 18000 рублей.',
    canonical: 'https://mosoblconnect.ru/services/cellular-booster/',
    ogTitle: 'Усиление сотовой связи в МО от 18000₽',
    ogDescription: 'Репитеры GSM, 3G, 4G, 5G. Усиление сигнала всех операторов на доме и даче. Комплекты от 18 000₽.',
    ogImage: 'https://cdn.mosoblconnect.ru/files/0b95440d-0b84-41b8-8404-418760cb07a4.jpg',
    ogImageAlt: 'Усиление сотовой связи NetConnect в Московской области'
  });

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <CellularHeader />
      <CellularHero />
      <CellularBoosters />
      <CellularOperators />
      <CellularAdvantages />
      <CellularProcess />
      <CellularSigns />
      <CellularExamples />
      <CellularCTA />
      <CellularFooter />
    </div>
  );
};

export default CellularBooster;