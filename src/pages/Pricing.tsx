import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import PricingSection from '@/components/home/PricingSection';
import EngineerPricingSection from '@/components/home/EngineerPricingSection';

export default function Pricing() {
  useEffect(() => {
    document.title = 'Стоимость подключения интернета NetConnect - от 16 800₽ | Цены на оборудование и установку';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Стоимость подключения интернета NetConnect - от 16 800₽ | Цены на оборудование и установку</title>
        <meta name="description" content="Стоимость подключения беспроводного интернета от 16 800₽. В пакет: Wi-Fi роутер, 4G LTE антенна, установка и настройка под ключ. Прайс на услуги инженера. Прозрачные цены без скрытых платежей. ☎️ +7 (901) 500-00-78" />
        <meta name="keywords" content="стоимость подключения интернета, цены на интернет мо, сколько стоит подключить интернет, цена установки интернета, прайс лист интернет, стоимость оборудования для интернета, цены на услуги инженера, установка антенны цена, настройка роутера цена, подключение интернета на даче цена" />
        <link rel="canonical" href="https://wiline.ru/pricing" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Стоимость подключения интернета - от 16 800₽" />
        <meta property="og:description" content="Пакет подключения: оборудование + установка + настройка. Прозрачные цены на все услуги" />
        <meta property="og:url" content="https://wiline.ru/pricing" />
        <meta property="og:image" content="https://cdn.wiline.ru/files/0b95440d-0b84-41b8-8404-418760cb07a4.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Подключение беспроводного интернета NetConnect",
            "description": "Полный пакет подключения: Wi-Fi роутер, 4G LTE антенна, установка и настройка под ключ",
            "brand": {
              "@type": "Organization",
              "name": "NetConnect",
              "telephone": "+7-901-500-00-78",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Московская область",
                "addressCountry": "RU"
              }
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "RUB",
              "lowPrice": "16800",
              "highPrice": "29800",
              "offerCount": "3",
              "availability": "https://schema.org/InStock",
              "priceValidUntil": "2025-12-31",
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Базовый пакет",
                  "price": "16800",
                  "priceCurrency": "RUB",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Базовый пакет подключения",
                    "description": "Wi-Fi роутер + 4G LTE антенна + установка"
                  }
                },
                {
                  "@type": "Offer",
                  "name": "Расширенный пакет",
                  "price": "22800",
                  "priceCurrency": "RUB",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Расширенный пакет подключения",
                    "description": "Wi-Fi роутер + Усиленная LTE антенна + установка"
                  }
                },
                {
                  "@type": "Offer",
                  "name": "Премиум пакет",
                  "price": "29800",
                  "priceCurrency": "RUB",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Премиум пакет подключения",
                    "description": "Профессиональное оборудование + установка на высоте"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <div className="pt-20">
          <PricingSection />
          <EngineerPricingSection />
        </div>

        <Footer />
      </div>
    </>
  );
}