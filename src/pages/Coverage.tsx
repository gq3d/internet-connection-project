import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import CoverageSection from '@/components/home/CoverageSection';
import Icon from '@/components/ui/icon';

export default function Coverage() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <title>Покрытие интернета NetConnect в МО | 169+ населённых пунктов, деревень, КП</title>
        <meta name="description" content="Покрытие беспроводного и спутникового интернета NetConnect - 99% Московской области. 169+ населённых пунктов: города, деревни, посёлки, коттеджные посёлки, СНТ. Удобный поиск по карте. Интернет в Подольске, Химках, Видном и др. ☎️ +7 (901) 500-00-78" />
        <meta name="keywords" content="покрытие интернета московская область, карта покрытия интернета мо, интернет в деревне московская область, интернет в коттеджном посёлке, интернет в снт, интернет на даче подмосковье, поиск покрытия интернета, зоны покрытия мо, интернет в посёлке, проверить покрытие интернета деревня, тест скорости интернета" />
        <link rel="canonical" href="https://mosoblconnect.ru/coverage" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Покрытие интернета NetConnect - 169+ населённых пунктов МО" />
        <meta property="og:description" content="Интернет доступен в городах, деревнях, посёлках, КП, СНТ и дачах Московской области. 169+ населённых пунктов в базе. Удобный поиск." />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Слабый сигнал в вашем доме?</h2>
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