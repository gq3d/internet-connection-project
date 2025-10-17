import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

export default function NorthAmericaEsim() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const internetTariffs = [
    {
      data: '1 ГБ',
      days: 7,
      speed: 'до 4G',
      calls: '544 ₽',
      sms: '7 дней',
      price: 1088,
      oldPrice: 1224
    },
    {
      data: '2 ГБ',
      days: 15,
      speed: 'до 4G',
      calls: '968 ₽',
      sms: '15 дней',
      price: 1936,
      oldPrice: 2176
    },
    {
      data: '3 ГБ',
      days: 30,
      speed: 'до 4G',
      calls: '1 270 ₽',
      sms: '30 дней',
      price: 2540,
      oldPrice: 2856
    },
    {
      data: '5 ГБ',
      days: 30,
      speed: 'до 4G',
      calls: '2 174 ₽',
      sms: '30 дней',
      price: 4348,
      oldPrice: 4896
    },
    {
      data: '10 ГБ',
      days: 30,
      speed: 'до 4G',
      calls: '3 894 ₽',
      sms: '30 дней',
      price: 7788,
      oldPrice: 8762
    },
    {
      data: '20 ГБ',
      days: 30,
      speed: 'до 4G',
      calls: '7 330 ₽',
      sms: '30 дней',
      price: 14660,
      oldPrice: 16490
    },
    {
      data: '50 ГБ',
      days: 30,
      speed: 'до 4G',
      calls: '17 330 ₽',
      sms: '30 дней',
      price: 34660,
      oldPrice: 38992
    }
  ];

  const unlimitedTariffs = [
    {
      data: '∞ ГБ',
      days: 1,
      speed: 'до 4G',
      calls: '660 ₽',
      sms: '1 день',
      price: 1320,
      oldPrice: 1485
    },
    {
      data: '∞ ГБ',
      days: 3,
      speed: 'до 4G',
      calls: '1 837 ₽',
      sms: '3 дня',
      price: 3674,
      oldPrice: 4133
    },
    {
      data: '∞ ГБ',
      days: 5,
      speed: 'до 4G',
      calls: '2 960 ₽',
      sms: '5 дней',
      price: 5920,
      oldPrice: 6660
    },
    {
      data: '∞ ГБ',
      days: 7,
      speed: 'до 4G',
      calls: '4 260 ₽',
      sms: '7 дней',
      price: 8520,
      oldPrice: 9585
    },
    {
      data: '∞ ГБ',
      days: 10,
      speed: 'до 4G',
      calls: '5 500 ₽',
      sms: '10 дней',
      price: 11000,
      oldPrice: 12375
    },
    {
      data: '∞ ГБ',
      days: 15,
      speed: 'до 4G',
      calls: '8 200 ₽',
      sms: '15 дней',
      price: 16400,
      oldPrice: 18450
    },
    {
      data: '∞ ГБ',
      days: 30,
      speed: 'до 4G',
      calls: '15 800 ₽',
      sms: '30 дней',
      price: 31600,
      oldPrice: 35550
    }
  ];

  return (
    <>
      <Helmet>
        <title>eSIM для Северной Америки - Интернет в 3 странах | NetConnect</title>
        <meta name="description" content="Купить eSIM для Северной Америки. Тарифы от 1088₽, безлимитный интернет в США, Канаде, Мексике. Активация за 5 минут." />
        <link rel="canonical" href="https://wiline.ru/esim/north-america" />
        <meta property="og:title" content="eSIM для Северной Америки - Интернет в 3 странах | NetConnect" />
        <meta property="og:description" content="Купить eSIM для Северной Америки. Тарифы от 1088₽, безлимитный интернет." />
        <meta property="og:url" content="https://wiline.ru/esim/north-america" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <div className="pt-20">
          <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-success/10 py-16">
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
                    <div className="bg-gradient-to-r from-primary to-secondary p-4 rounded-2xl shadow-lg">
                      <Icon name="Building2" size={40} className="text-white" />
                    </div>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-success bg-clip-text text-transparent leading-tight">
                    eSIM для Северной Америки
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                    Интернет без границ в США, Канаде и Мексике
                  </p>
                  
                  <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
                    <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border">
                      <Icon name="Building2" size={20} className="text-primary" />
                      <span className="font-semibold">3 страны</span>
                    </div>
                    <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border">
                      <Icon name="Zap" size={20} className="text-secondary" />
                      <span className="font-semibold">Активация 5 минут</span>
                    </div>
                    <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border">
                      <Icon name="Shield" size={20} className="text-success" />
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
                    Купить сим в Северной Америке для интернета
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Выберите подходящий тариф с интернетом
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {internetTariffs.map((tariff, index) => (
                    <div 
                      key={index}
                      className="bg-card border-2 border-border rounded-xl p-6 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
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
                        <div className="text-3xl font-bold text-primary">
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
                    Купить безлимитный интернет в Северной Америке
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Безлимитный интернет без ограничений
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {unlimitedTariffs.map((tariff, index) => (
                    <div 
                      key={index}
                      className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/30 rounded-xl p-6 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                        БЕЗЛИМИТ
                      </div>
                      
                      <div className="text-center mb-6 mt-4">
                        <div className="text-4xl font-bold text-primary mb-2">
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
                        <div className="text-3xl font-bold text-primary">
                          {tariff.price.toLocaleString('ru-RU')} ₽
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary via-secondary to-success text-white rounded-2xl p-10 text-center shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
                      <Icon name="CheckCircle" size={48} className="text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    Путешествуйте по Северной Америке без ограничений!
                  </h3>
                  
                  <p className="text-xl mb-8 opacity-90">
                    США, Канада и Мексика с одной eSIM-картой
                  </p>
                  
                  <div className="mt-8">
                    <Link to="/esim">
                      <Button 
                        size="lg"
                        className="bg-white text-primary hover:bg-white/90 font-bold"
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