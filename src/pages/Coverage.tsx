import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import CoverageSection from '@/components/home/CoverageSection';
import Icon from '@/components/ui/icon';

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

        {/* Signal Boost CTA */}
        <div className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-2xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Icon name="Radio" size={32} className="text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Слабый сигнал в вашей зоне?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Не переживайте! У нас есть профессиональные решения для усиления интернет-сигнала. 
                Антенны, репитеры и уличные роутеры помогут обеспечить стабильное соединение даже в труднодоступных местах.
              </p>
              <Link 
                to="/signal-boost"
                className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                <Icon name="Signal" size={20} className="mr-2" />
                Узнать о решениях для усиления
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}