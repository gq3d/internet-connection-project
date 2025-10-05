import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import PricingSection from '@/components/home/PricingSection';

export default function Tariffs() {
  useEffect(() => {
    document.title = 'Тарифная политика NetConnect - Стоимость подключения и оборудования';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Тарифная политика NetConnect - Стоимость подключения и оборудования</title>
        <meta name="description" content="Тарифная политика NetConnect. Узнайте стоимость подключения беспроводного интернета, пакеты оборудования и дополнительные опции." />
        <link rel="canonical" href="https://netconnect.ru/tariffs" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <div className="pt-20">
          <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-success/10 py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Тарифная политика NetConnect
                </h1>
                <p className="text-xl text-muted-foreground">
                  Прозрачные цены на подключение и профессиональное оборудование
                </p>
              </div>
            </div>
          </div>

          <PricingSection />
        </div>

        <Footer />
      </div>
    </>
  );
}
