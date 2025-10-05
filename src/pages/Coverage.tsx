import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import CoverageSection from '@/components/home/CoverageSection';

export default function Coverage() {
  useEffect(() => {
    document.title = 'Карта покрытия интернета NetConnect в Московской области';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Карта покрытия интернета NetConnect в Московской области</title>
        <meta name="description" content="Зоны покрытия беспроводного и спутникового интернета NetConnect в Московской области. Доступность интернета в городах, поселках и на дачах." />
        <link rel="canonical" href="https://netconnect.ru/coverage" />
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
