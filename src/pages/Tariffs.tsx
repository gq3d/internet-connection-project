import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import TariffsSection from '@/components/home/TariffsSection';
import UnblockedServicesBadge from '@/components/UnblockedServicesBadge';

export default function Tariffs() {
  useEffect(() => {
    document.title = 'Тарифы NetConnect - от 1490₽ за 100 Мбит/с | Безлимитный интернет МО';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Тарифы NetConnect - от 1490₽ за 100 Мбит/с | Безлимитный интернет МО</title>
        <meta name="description" content="Тарифы NetConnect: Старт 100 Мбит/с - 1490₽, Продвинутый 150 Мбит/с - 1990₽, Премиум 240 Мбит/с - 2590₽. Безлимитный беспроводной интернет для дома и дачи в Московской области. Спутниковый интернет для удалённых объектов. ☎️ +7 (901) 500-00-78" />
        <meta name="keywords" content="тарифы интернет московская область, цены на интернет мо, безлимитный интернет подмосковье, спутниковый интернет тарифы, беспроводной интернет цена, интернет на даче тарифы, интернет в частный дом цена, 4g lte интернет тарифы, интернет 100 мбит цена, интернет 240 мбит цена" />
        <link rel="canonical" href="https://wiline.ru/tariffs" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Тарифы NetConnect - от 1490₽ за 100 Мбит/с" />
        <meta property="og:description" content="Безлимитный интернет для дома и дачи. 3 тарифа: 100, 150, 240 Мбит/с. Спутниковый интернет для удалённых объектов" />
        <meta property="og:url" content="https://wiline.ru/tariffs" />
        <meta property="og:image" content="https://cdn.wiline.ru/files/0b95440d-0b84-41b8-8404-418760cb07a4.jpg" />
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
        </div>

        <Footer />
      </div>
    </>
  );
}