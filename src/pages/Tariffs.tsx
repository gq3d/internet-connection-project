import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import TariffsSection from '@/components/home/TariffsSection';

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
        <link rel="canonical" href="https://mosoblconnect.ru/tariffs" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Тарифы NetConnect - от 1490₽ за 100 Мбит/с" />
        <meta property="og:description" content="Безлимитный интернет для дома и дачи. 3 тарифа: 100, 150, 240 Мбит/с. Спутниковый интернет для удалённых объектов" />
        <meta property="og:url" content="https://mosoblconnect.ru/tariffs" />
        <meta property="og:image" content="https://cdn.mosoblconnect.ru/files/0b95440d-0b84-41b8-8404-418760cb07a4.jpg" />
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
                <p className="text-xl text-muted-foreground">
                  Выберите оптимальный тариф для вашего дома или дачи
                </p>
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