import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

export default function AustraliaEsim() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const internetTariffs = [
    {
      data: '1 ГБ',
      days: 7,
      speed: 'до 4G',
      calls: '528 ₽',
      sms: '7 дней',
      price: 1056,
      oldPrice: 1188
    },
    {
      data: '2 ГБ',
      days: 15,
      speed: 'до 4G',
      calls: '991 ₽',
      sms: '15 дней',
      price: 1982,
      oldPrice: 2230
    },
    {
      data: '3 ГБ',
      days: 30,
      speed: 'до 4G',
      calls: '1 243 ₽',
      sms: '30 дней',
      price: 2486,
      oldPrice: 2796
    },
    {
      data: '5 ГБ',
      days: 30,
      speed: 'до 4G',
      calls: '2 028 ₽',
      sms: '30 дней',
      price: 4056,
      oldPrice: 4563
    },
    {
      data: '10 ГБ',
      days: 30,
      speed: 'до 4G',
      calls: '3 624 ₽',
      sms: '30 дней',
      price: 7248,
      oldPrice: 8154
    },
    {
      data: '20 ГБ',
      days: 30,
      speed: 'до 4G',
      calls: '6 660 ₽',
      sms: '30 дней',
      price: 13320,
      oldPrice: 14985
    },
    {
      data: '50 ГБ',
      days: 30,
      speed: 'до 4G',
      calls: '16 620 ₽',
      sms: '30 дней',
      price: 33000,
      oldPrice: 37125
    }
  ];

  const unlimitedTariffs = [
    {
      data: '∞ ГБ',
      days: 1,
      speed: 'до 4G',
      calls: '900 ₽',
      sms: '1 день',
      price: 1800,
      oldPrice: 2025
    },
    {
      data: '∞ ГБ',
      days: 3,
      speed: 'до 4G',
      calls: '1 891 ₽',
      sms: '3 дня',
      price: 3782,
      oldPrice: 4254
    },
    {
      data: '∞ ГБ',
      days: 5,
      speed: 'до 4G',
      calls: '3 002 ₽',
      sms: '5 дней',
      price: 6004,
      oldPrice: 6754
    },
    {
      data: '∞ ГБ',
      days: 7,
      speed: 'до 4G',
      calls: '4 360 ₽',
      sms: '7 дней',
      price: 8720,
      oldPrice: 9810
    },
    {
      data: '∞ ГБ',
      days: 10,
      speed: 'до 4G',
      calls: '5 870 ₽',
      sms: '10 дней',
      price: 11740,
      oldPrice: 13207
    },
    {
      data: '∞ ГБ',
      days: 15,
      speed: 'до 4G',
      calls: '8 700 ₽',
      sms: '15 дней',
      price: 17400,
      oldPrice: 19575
    },
    {
      data: '∞ ГБ',
      days: 30,
      speed: 'до 4G',
      calls: '17 400 ₽',
      sms: '30 дней',
      price: 34800,
      oldPrice: 39150
    }
  ];

  return (
    <>
      <Helmet>
        <title>eSIM для Австралии и Океании - Интернет в 15 странах | NetConnect</title>
        <meta name="description" content="Купить eSIM для Австралии и Океании. Тарифы от 1056₽, безлимитный интернет в 15 странах. Активация за 5 минут." />
        <link rel="canonical" href="https://mosoblconnect.ru/esim/australia" />
        <meta property="og:title" content="eSIM для Австралии и Океании - Интернет в 15 странах | NetConnect" />
        <meta property="og:description" content="Купить eSIM для Австралии и Океании. Тарифы от 1056₽, безлимитный интернет." />
        <meta property="og:url" content="https://mosoblconnect.ru/esim/australia" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <div className="pt-20">
          <div className="bg-gradient-to-br from-success/10 via-primary/10 to-secondary/10 py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <Link 
                  to="/esim" 
                  className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6 group"
                >
                  <Icon name="ArrowLeft" size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                  <span>Назад к eSIM</span>
                </Link>
                
                <div className="text-center">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-gradient-to-r from-success to-primary p-4 rounded-2xl shadow-lg">
                      <Icon name="Waves" size={40} className="text-white" />
                    </div>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-success via-primary to-secondary bg-clip-text text-transparent leading-tight">
                    eSIM для Австралии и Океании
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                    Интернет без границ в 15 странах Австралии и Океании
                  </p>
                  
                  <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
                    <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border">
                      <Icon name="Waves" size={20} className="text-success" />
                      <span className="font-semibold">15 стран</span>
                    </div>
                    <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border">
                      <Icon name="Zap" size={20} className="text-primary" />
                      <span className="font-semibold">Активация 5 минут</span>
                    </div>
                    <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border">
                      <Icon name="Shield" size={20} className="text-secondary" />
                      <span className="font-semibold">Без роуминга</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 py-16">
            <div className="max-w-7xl mx-auto">
              
              <div className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Купить сим в Австралии и Океании для интернета
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Выберите подходящий тариф с интернетом
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {internetTariffs.map((tariff, index) => (
                    <div 
                      key={index}
                      className="bg-card border-2 border-border rounded-xl p-6 hover:border-success hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="text-center mb-6">
                        <div className="text-4xl font-bold text-foreground mb-2">
                          {tariff.data}
                        </div>
                        <div className="text-muted-foreground">
                          {tariff.days} дн.
                        </div>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground text-sm">Цена:</span>
                          <span className="font-semibold text-sm">{tariff.calls}</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground text-sm">Интернет:</span>
                          <span className="font-semibold text-sm">{tariff.speed}</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground text-sm">Срок действия:</span>
                          <span className="font-semibold text-sm">{tariff.sms}</span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                          <span className="text-muted-foreground text-sm">Подключение:</span>
                          <span className="font-semibold text-sm text-success">ДА</span>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground line-through mb-1">
                          {tariff.oldPrice.toLocaleString('ru-RU')} ₽
                        </div>
                        <div className="text-3xl font-bold text-success">
                          {tariff.price.toLocaleString('ru-RU')} ₽
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Купить безлимитный интернет в Австралии и Океании
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Безлимитный интернет без ограничений
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {unlimitedTariffs.map((tariff, index) => (
                    <div 
                      key={index}
                      className="bg-gradient-to-br from-success/5 to-primary/5 border-2 border-success/30 rounded-xl p-6 hover:border-success hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 bg-success text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                        БЕЗЛИМИТ
                      </div>
                      
                      <div className="text-center mb-6 mt-4">
                        <div className="text-4xl font-bold text-success mb-2">
                          {tariff.data}
                        </div>
                        <div className="text-muted-foreground">
                          {tariff.days} дн.
                        </div>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground text-sm">Цена:</span>
                          <span className="font-semibold text-sm">{tariff.calls}</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground text-sm">Интернет:</span>
                          <span className="font-semibold text-sm">{tariff.speed}</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground text-sm">Срок действия:</span>
                          <span className="font-semibold text-sm">{tariff.sms}</span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                          <span className="text-muted-foreground text-sm">Подключение:</span>
                          <span className="font-semibold text-sm text-success">ДА</span>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground line-through mb-1">
                          {tariff.oldPrice.toLocaleString('ru-RU')} ₽
                        </div>
                        <div className="text-3xl font-bold text-success">
                          {tariff.price.toLocaleString('ru-RU')} ₽
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-success via-primary to-secondary text-white rounded-2xl p-10 text-center shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
                      <Icon name="CheckCircle" size={48} className="text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    Путешествуйте по Австралии и Океании без ограничений!
                  </h3>
                  
                  <p className="text-xl mb-8 opacity-90">
                    15 стран Австралии и Океании с одной eSIM-картой
                  </p>
                  
                  <div className="mt-8">
                    <Link to="/esim">
                      <Button 
                        size="lg"
                        className="bg-white text-success hover:bg-white/90 font-bold"
                      >
                        Посмотреть все регионы
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}