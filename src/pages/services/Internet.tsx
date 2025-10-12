import WhatsAppButton from '@/components/WhatsAppButton';
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
import UniversalFooter from '@/components/UniversalFooter';

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

  const structuredData = {
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
  };

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
      
      {/* Signal Boost CTA */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-orange-50 via-yellow-50 to-transparent border border-orange-200 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
                  <Icon name="Radio" size={32} className="text-orange-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Слабый сигнал?</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Мы поможем усилить интернет-сигнал с помощью профессионального оборудования. 
                  Антенны, репитеры и роутеры для стабильного соединения.
                </p>
                <Link 
                  to="/signal-boost"
                  className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl"
                >
                  <Icon name="Signal" size={20} className="mr-2" />
                  Решения для усиления
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Check" size={20} className="text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Антенна + роутер</h3>
                        <p className="text-sm text-muted-foreground">До 250 Мбит/с при слабом сигнале</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Check" size={20} className="text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Репитер</h3>
                        <p className="text-sm text-muted-foreground">Бюджетное решение для дома</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Check" size={20} className="text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Уличный роутер</h3>
                        <p className="text-sm text-muted-foreground">Максимальная стабильность</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <InternetCTA />
      <UniversalFooter customCopyright="© 2015 NetConnect. Беспроводной интернет для дома и бизнеса в Московской области." />
      <WhatsAppButton />
    </div>
  );
};

export default Internet;