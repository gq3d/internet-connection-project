import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import CoverageSection from '@/components/home/CoverageSection';

export default function Coverage() {
  useEffect(() => {
    document.title = 'Покрытие интернета NetConnect в МО | 99% территории Московской области';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Покрытие интернета NetConnect в МО | 99% территории Московской области</title>
        <meta name="description" content="Покрытие беспроводного и спутникового интернета NetConnect - 99% Московской области. Интернет в Подольске, Красногорске, Химках, Мытищах и других городах. Доступно на дачах и в СНТ. Проверьте скорость интернета. ☎️ +7 (901) 500-00-78" />
        <meta name="keywords" content="покрытие интернета московская область, карта покрытия интернета мо, зоны покрытия интернета, интернет в подмосковье, интернет на даче, интернет в снт, интернет в деревне, проверить покрытие интернета, тест скорости интернета" />
        <link rel="canonical" href="https://mosoblconnect.ru/coverage" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Покрытие интернета NetConnect - 99% МО" />
        <meta property="og:description" content="Интернет доступен в большинстве городов, поселков, СНТ и дач Московской области. Проверьте скорость" />
        <meta property="og:url" content="https://mosoblconnect.ru/coverage" />
        <meta property="og:image" content="https://cdn.mosoblconnect.ru/files/0b95440d-0b84-41b8-8404-418760cb07a4.jpg" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <div className="pt-20">
          <CoverageSection />
        </div>

        <Footer />
      </div>
    </>
  );
}