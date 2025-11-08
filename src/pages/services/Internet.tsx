import { useSEO } from '@/hooks/useSEO';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Icon from '@/components/ui/icon';
import InternetHeader from '@/components/internet/InternetHeader';
import InternetHero from '@/components/internet/InternetHero';
import InternetAdvantages from '@/components/internet/InternetAdvantages';
import InternetTechnology from '@/components/internet/InternetTechnology';
import InternetTariffs from '@/components/internet/InternetTariffs';
import InternetExamples from '@/components/internet/InternetExamples';
import InternetCTA from '@/components/internet/InternetCTA';
import Footer from '@/components/home/Footer';

const Internet = () => {
  useSEO({
    title: 'Беспроводной интернет в МО от 1490₽ | NetConnect',
    description: 'Подключение беспроводного интернета для частного дома и дачи в Московской области. Скорость до 250 Мбит/с, установка за 1-3 дня без закапывания кабеля. Тарифы от 1490 рублей в месяц.',
    keywords: 'беспроводной интернет, интернет московская область, радиоканал интернет, подключить интернет мо, провайдер подмосковье, интернет без проводов, быстрый интернет',
    canonical: 'https://mosoblconnect.ru/services/internet',
    ogTitle: 'Беспроводной интернет в Московской области от 1490₽',
    ogDescription: 'Быстрое подключение беспроводного интернета. Скорость до 250 Мбит/с, без проводов. Тарифы от 1490₽/мес.',
    ogImage: 'https://cdn.mosoblconnect.ru/files/0b95440d-0b84-41b8-8404-418760cb07a4.jpg',
    ogImageAlt: 'Беспроводной интернет NetConnect в Московской области'
  });

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Беспроводной интернет для дома",
      "description": "Подключение беспроводного интернета для частного дома и дачи в Московской области. Скорость до 250 Мбит/с без закапывания кабеля.",
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
        "lowPrice": "1490",
        "highPrice": "3990",
        "priceCurrency": "RUB",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "1490",
          "priceCurrency": "RUB",
          "unitText": "MONTH"
        }
      },
      "serviceType": "Беспроводной интернет",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "156"
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
          "name": "Беспроводной интернет",
          "item": "https://mosoblconnect.ru/services/internet"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <InternetHeader />
      <InternetHero />
      <InternetAdvantages />
      <InternetTechnology />
      <InternetTariffs />
      <InternetExamples />
      
      {/* CTAs Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Signal Boost CTA */}
          <div className="bg-gradient-to-br from-orange-50 via-yellow-50 to-transparent border border-orange-200 rounded-2xl p-6 md:p-8">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-100 rounded-full mb-4">
              <Icon name="Radio" size={28} className="text-orange-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Слабый сигнал?</h2>
            <p className="text-muted-foreground mb-5">
              Антенны, репитеры и роутеры для стабильного соединения. Усиление до 250 Мбит/с.
            </p>
            <Link 
              to="/signal-boost"
              className="inline-flex items-center px-5 py-2.5 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg"
            >
              <Icon name="Signal" size={18} className="mr-2" />
              Решения для усиления
            </Link>
          </div>

          {/* Bonding CTA */}
          <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-transparent border-2 border-amber-400 rounded-2xl p-6 md:p-8">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-amber-100 rounded-full mb-4">
              <Icon name="Network" size={28} className="text-amber-600" />
            </div>
            <div className="flex items-center gap-2 mb-3">
              <h2 className="text-2xl md:text-3xl font-bold">Нужна сверхскорость?</h2>
              <span className="px-2 py-1 bg-amber-500 text-white text-xs font-bold rounded">БИЗНЕС</span>
            </div>
            <p className="text-muted-foreground mb-5">
              Bonding — объединение каналов до 1 Гбит/с. Отказоустойчивость и балансировка нагрузки.
            </p>
            <Link 
              to="/business/bonding"
              className="inline-flex items-center px-5 py-2.5 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg"
            >
              <Icon name="Zap" size={18} className="mr-2" />
              Узнать о Bonding
            </Link>
          </div>
        </div>
      </div>

      <InternetCTA />
      <Footer />
    </div>
  );
};

export default Internet;