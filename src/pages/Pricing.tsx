import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import PricingSection from '@/components/home/PricingSection';
import EngineerPricingSection from '@/components/home/EngineerPricingSection';

export default function Pricing() {
  useEffect(() => {
    document.title = 'Стоимость подключения и услуг NetConnect - Прайс-лист';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Стоимость подключения и услуг NetConnect - Прайс-лист</title>
        <meta name="description" content="Стоимость подключения беспроводного интернета NetConnect. Цены на оборудование, установку и дополнительные услуги инженера." />
        <link rel="canonical" href="https://netconnect.ru/pricing" />
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
