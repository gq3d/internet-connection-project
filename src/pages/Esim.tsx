import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import EsimSection from '@/components/home/EsimSection';

export default function Esim() {
  useEffect(() => {
    document.title = 'Туристические eSIM NetConnect - Интернет без границ за 5 минут';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Туристические eSIM NetConnect - Интернет без границ за 5 минут</title>
        <meta name="description" content="Туристические eSIM от NetConnect для путешествий по всему миру. Мгновенная активация, поддержка 200+ стран, без роуминга и физических SIM-карт." />
        <link rel="canonical" href="https://wiline.ru/esim" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <div className="pt-20">
          <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-success/10 py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Туристические eSIM от NetConnect
                </h1>
                <p className="text-xl text-muted-foreground">
                  Интернет без границ в 200+ странах мира. Подключение за 5 минут
                </p>
              </div>
            </div>
          </div>

          <EsimSection />
        </div>

        <Footer />
      </div>
    </>
  );
}