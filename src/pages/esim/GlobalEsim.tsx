import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import GlobalEsimHero from '@/components/esim/GlobalEsimHero';
import TariffCard from '@/components/esim/TariffCard';
import WhyChooseSection from '@/components/esim/WhyChooseSection';
import CountryCoverageInfo from '@/components/esim/CountryCoverageInfo';

export default function GlobalEsim() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const globalTariffs = [
    {
      data: '1 ГБ',
      days: 7,
      speed: 'до 4G',
      calls: '∞ мин',
      sms: '∞ SMS',
      price: 2980,
      oldPrice: 3356
    },
    {
      data: '2 ГБ',
      days: 15,
      speed: 'до 4G',
      calls: '∞ мин',
      sms: '∞ SMS',
      price: 4740,
      oldPrice: 5328
    },
    {
      data: '3 ГБ',
      days: 30,
      speed: 'до 4G',
      calls: '∞ мин',
      sms: '∞ SMS',
      price: 6600,
      oldPrice: 7392
    },
    {
      data: '5 ГБ',
      days: 30,
      speed: 'до 4G',
      calls: '∞ мин',
      sms: '∞ SMS',
      price: 9800,
      oldPrice: 10956
    },
    {
      data: '10 ГБ',
      days: 30,
      speed: 'до 4G',
      calls: '∞ мин',
      sms: '∞ SMS',
      price: 15000,
      oldPrice: 16728
    },
    {
      data: '20 ГБ',
      days: 30,
      speed: 'до 4G',
      calls: '∞ мин',
      sms: '∞ SMS',
      price: 25000,
      oldPrice: 27864
    }
  ];

  const unlimitedTariffs = [
    {
      data: '∞ ГБ',
      days: 1,
      speed: 'до 4G',
      calls: '∞ мин',
      sms: '∞ SMS',
      price: 2800,
      oldPrice: 3132
    },
    {
      data: '∞ ГБ',
      days: 3,
      speed: 'до 4G',
      calls: '∞ мин',
      sms: '∞ SMS',
      price: 4620,
      oldPrice: 5160
    },
    {
      data: '∞ ГБ',
      days: 7,
      speed: 'до 4G',
      calls: '∞ мин',
      sms: '∞ SMS',
      price: 8840,
      oldPrice: 9828
    },
    {
      data: '∞ ГБ',
      days: 10,
      speed: 'до 4G',
      calls: '∞ мин',
      sms: '∞ SMS',
      price: 11400,
      oldPrice: 12648
    }
  ];

  const callsSmsTariffs = [
    {
      data: '35 ГБ',
      days: 30,
      speed: 'до 4G',
      calls: '∞ минут',
      sms: 'входящие',
      price: 7600,
      oldPrice: 8488,
      operator: 'O2'
    },
    {
      data: '25 ГБ',
      days: 30,
      speed: 'до 4G',
      calls: '∞ минут',
      sms: 'входящие',
      price: 10388,
      oldPrice: 11600,
      operator: 'Vodafone'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Глобальные eSIM для интернета - 106 стран | NetConnect</title>
        <meta name="description" content="Купить глобальные eSIM для путешествий по всему миру. Тарифы от 2980₽, безлимитный интернет, звонки и SMS в 106 странах. Активация за 5 минут." />
        <link rel="canonical" href="https://mosoblconnect.ru/esim/global" />
        <meta property="og:title" content="Глобальные eSIM для интернета - 106 стран | NetConnect" />
        <meta property="og:description" content="Купить глобальные eSIM для путешествий по всему миру. Тарифы от 2980₽, безлимитный интернет, звонки и SMS в 106 странах." />
        <meta property="og:url" content="https://mosoblconnect.ru/esim/global" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <div className="pt-20">
          <GlobalEsimHero />

          <div className="container mx-auto px-4 py-16">
            <div className="max-w-7xl mx-auto">
              
              <div className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Купить сим в глобальном регионе для интернета
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Выберите подходящий тариф с интернетом для путешествий
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {globalTariffs.map((tariff, index) => (
                    <TariffCard key={index} tariff={tariff} variant="default" />
                  ))}
                </div>
              </div>

              <div className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Купить безлимитный интернет в глобальном регионе
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Безлимитный интернет без ограничений
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {unlimitedTariffs.map((tariff, index) => (
                    <TariffCard key={index} tariff={tariff} variant="unlimited" />
                  ))}
                </div>
              </div>

              <div className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Купить сим в глобальном регионе для звонков, SMS и интернета
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Полный пакет связи: звонки, SMS и интернет
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                  {callsSmsTariffs.map((tariff, index) => (
                    <TariffCard key={index} tariff={tariff} variant="fullService" />
                  ))}
                </div>
              </div>

              <WhyChooseSection />

              <CountryCoverageInfo />

            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}