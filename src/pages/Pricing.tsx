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
        <link rel="canonical" href="https://mosoblconnect.ru/pricing" />
        
        <!-- Open Graph -->
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Стоимость подключения интернета - от 16 800₽" />
        <meta property="og:description" content="Пакет подключения: оборудование + установка + настройка. Прозрачные цены на все услуги" />
        <meta property="og:url" content="https://mosoblconnect.ru/pricing" />
        <meta property="og:image" content="https://cdn.mosoblconnect.ru/files/0b95440d-0b84-41b8-8404-418760cb07a4.jpg" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <div className="pt-20">
          <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-success/10 py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Стоимость подключения и услуг
                </h1>
                <p className="text-xl text-muted-foreground">
                  Прозрачные цены на оборудование, установку и дополнительные работы
                </p>
              </div>
            </div>
          </div>

          <PricingSection />
          <EngineerPricingSection />
        </div>

        <Footer />
      </div>
    </>
  );
}