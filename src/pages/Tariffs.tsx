import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import TariffsSection from '@/components/home/TariffsSection';
import UnblockedServicesBadge from '@/components/UnblockedServicesBadge';
import Icon from '@/components/ui/icon';

export default function Tariffs() {
  useEffect(() => {
    document.title = 'Тарифы NetConnect - от 1490₽ за 100 Мбит/с | Bonding до 1 Гбит/с | Безлимитный интернет МО';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Тарифы NetConnect - от 1490₽ за 100 Мбит/с | Bonding до 1 Гбит/с | Безлимитный интернет МО</title>
        <meta name="description" content="Тарифы NetConnect: Старт 100 Мбит/с - 1490₽, Продвинутый 150 Мбит/с - 1990₽, Премиум 240 Мбит/с - 2590₽. Bonding до 1 Гбит/с для бизнеса. Безлимитный беспроводной интернет для дома и дачи в Московской области. ☎️ +7 (901) 500-00-78" />
        <meta name="keywords" content="тарифы интернет московская область, цены на интернет мо, безлимитный интернет подмосковье, спутниковый интернет тарифы, беспроводной интернет цена, интернет на даче тарифы, интернет в частный дом цена, 4g lte интернет тарифы, интернет 100 мбит цена, интернет 240 мбит цена, bonding каналов цена, объединение интернет каналов, интернет 1 гбит для бизнеса" />
        <link rel="canonical" href="https://mosoblconnect.ru/tariffs" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Тарифы NetConnect - от 1490₽ за 100 Мбит/с | Bonding до 1 Гбит/с" />
        <meta property="og:description" content="Безлимитный интернет для дома и дачи. 3 тарифа: 100, 150, 240 Мбит/с. Bonding до 1 Гбит/с для бизнеса" />
        <meta property="og:url" content="https://mosoblconnect.ru/tariffs" />
        <meta property="og:image" content="https://cdn.mosoblconnect.ru/files/0b95440d-0b84-41b8-8404-418760cb07a4.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Тарифы на интернет NetConnect",
            "description": "Тарифные планы беспроводного интернета для Московской области",
            "itemListElement": [
              {
                "@type": "Offer",
                "position": 1,
                "name": "Старт",
                "description": "Базовый тариф для комфортного интернета",
                "price": "1490",
                "priceCurrency": "RUB",
                "priceValidUntil": "2025-12-31",
                "availability": "https://schema.org/InStock",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Интернет Старт 100 Мбит/с",
                  "provider": {
                    "@type": "Organization",
                    "name": "NetConnect",
                    "telephone": "+7-901-500-00-78",
                    "areaServed": "Московская область"
                  },
                  "category": "Интернет-провайдер",
                  "offers": {
                    "@type": "Offer",
                    "price": "1490",
                    "priceCurrency": "RUB"
                  }
                }
              },
              {
                "@type": "Offer",
                "position": 2,
                "name": "Продвинутый",
                "description": "Оптимальный тариф для семьи",
                "price": "1990",
                "priceCurrency": "RUB",
                "priceValidUntil": "2025-12-31",
                "availability": "https://schema.org/InStock",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Интернет Продвинутый 150 Мбит/с",
                  "provider": {
                    "@type": "Organization",
                    "name": "NetConnect",
                    "telephone": "+7-901-500-00-78",
                    "areaServed": "Московская область"
                  },
                  "category": "Интернет-провайдер",
                  "offers": {
                    "@type": "Offer",
                    "price": "1990",
                    "priceCurrency": "RUB"
                  }
                }
              },
              {
                "@type": "Offer",
                "position": 3,
                "name": "Премиум",
                "description": "Максимальная скорость для требовательных пользователей",
                "price": "2590",
                "priceCurrency": "RUB",
                "priceValidUntil": "2025-12-31",
                "availability": "https://schema.org/InStock",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Интернет Премиум 240 Мбит/с",
                  "provider": {
                    "@type": "Organization",
                    "name": "NetConnect",
                    "telephone": "+7-901-500-00-78",
                    "areaServed": "Московская область"
                  },
                  "category": "Интернет-провайдер",
                  "offers": {
                    "@type": "Offer",
                    "price": "2590",
                    "priceCurrency": "RUB"
                  }
                }
              }
            ]
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <div className="pt-20">
          <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-success/10 py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Тарифные планы NetConnect
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Выберите оптимальный тариф для вашего дома или дачи
                </p>
                <div className="flex justify-center">
                  <UnblockedServicesBadge />
                </div>
              </div>
            </div>
          </div>

          <TariffsSection />
          
          {/* Bonding CTA */}
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 border-2 border-amber-400 rounded-2xl p-8 md:p-12 shadow-xl">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/20 rounded-full mb-6">
                    <Icon name="Network" size={32} className="text-amber-600" />
                  </div>
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <h2 className="text-3xl md:text-4xl font-bold">Бизнес-решения</h2>
                    <span className="px-3 py-1 bg-amber-500 text-white text-sm font-bold rounded-full">PREMIUM</span>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Необходим интернет со скоростью выше 250 Мбит/с? Технология <strong>Bonding</strong> объединяет 
                    несколько каналов в один поток до 1 Гбит/с с отказоустойчивостью и балансировкой нагрузки.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                    <div className="flex items-center gap-2 text-amber-700">
                      <Icon name="Zap" size={20} />
                      <span className="font-semibold">До 1 Гбит/с</span>
                    </div>
                    <div className="flex items-center gap-2 text-amber-700">
                      <Icon name="ShieldCheck" size={20} />
                      <span className="font-semibold">Резервирование</span>
                    </div>
                    <div className="flex items-center gap-2 text-amber-700">
                      <Icon name="Briefcase" size={20} />
                      <span className="font-semibold">Для бизнеса</span>
                    </div>
                  </div>
                  <Link 
                    to="/business/bonding"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl hover:from-amber-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 font-bold text-lg shadow-xl"
                  >
                    <Icon name="Network" size={22} className="mr-2" />
                    Узнать о технологии Bonding
                    <Icon name="ArrowRight" size={22} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}