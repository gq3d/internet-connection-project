import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

export default function EuropeEsim() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const internetTariffs = [
    {
      data: '1 ГБ',
      days: 7,
      speed: 'до 4G',
      calls: '200 ₽',
      sms: '2 ГБ',
      price: 572,
      oldPrice: 644
    },
    {
      data: '2 ГБ',
      days: 15,
      speed: 'до 4G',
      calls: '420 ₽',
      sms: '2 ГБ',
      price: 878,
      oldPrice: 988
    },
    {
      data: '3 ГБ',
      days: 30,
      speed: 'до 4G',
      calls: '540 ₽',
      sms: '3 ГБ',
      price: 1096,
      oldPrice: 1232
    },
    {
      data: '5 ГБ',
      days: 30,
      speed: 'до 4G',
      calls: '840 ₽',
      sms: '5 ГБ',
      price: 1606,
      oldPrice: 1808
    },
    {
      data: '10 ГБ',
      days: 30,
      speed: 'до 4G',
      calls: '1620 ₽',
      sms: '10 ГБ',
      price: 2974,
      oldPrice: 3344
    },
    {
      data: '20 ГБ',
      days: 30,
      speed: 'до 4G',
      calls: '3200 ₽',
      sms: '20 ГБ',
      price: 5154,
      oldPrice: 5796
    },
    {
      data: '50 ГБ',
      days: 30,
      speed: 'до 4G',
      calls: '8000 ₽',
      sms: '50 ГБ',
      price: 18000,
      oldPrice: 20220
    }
  ];

  const unlimitedTariffs = [
    {
      data: '∞ ГБ',
      days: 1,
      speed: 'до 4G',
      calls: '350 ₽',
      sms: '7 дней',
      price: 700,
      oldPrice: 788
    },
    {
      data: '∞ ГБ',
      days: 3,
      speed: 'до 4G',
      calls: '790 ₽',
      sms: '3 дня',
      price: 1594,
      oldPrice: 1792
    },
    {
      data: '∞ ГБ',
      days: 5,
      speed: 'до 4G',
      calls: '1 262 ₽',
      sms: '5 дней',
      price: 2524,
      oldPrice: 2836
    },
    {
      data: '∞ ГБ',
      days: 7,
      speed: 'до 4G',
      calls: '1 685 ₽',
      sms: '7 дней',
      price: 3370,
      oldPrice: 3788
    },
    {
      data: '∞ ГБ',
      days: 10,
      speed: 'до 4G',
      calls: '2 412 ₽',
      sms: '∞ ГБ',
      price: 5776,
      oldPrice: 6492
    },
    {
      data: '∞ ГБ',
      days: 15,
      speed: 'до 4G',
      calls: '3 618 ₽',
      sms: '15 дней',
      price: 8200,
      oldPrice: 9216
    },
    {
      data: '∞ ГБ',
      days: 30,
      speed: 'до 4G',
      calls: '4 824 ₽',
      sms: '30 дней',
      price: 13200,
      oldPrice: 14832
    }
  ];

  const callsSmsTariffs = [
    {
      data: '3.5 ГБ',
      days: 30,
      speed: 'до 4G',
      calls: '335 ₽',
      sms: '35 ГБ',
      details: {
        internet: '∞ звонки',
        callsDuration: '30 дней',
        sms: '∞ SMS',
        countries: '30 дней'
      },
      price: 7720,
      oldPrice: 8676
    },
    {
      data: '2.5 ГБ',
      days: 30,
      speed: 'до 4G',
      calls: '3 200 ₽',
      sms: '25 ГБ',
      details: {
        internet: '∞ звонки',
        callsDuration: '30 дней',
        sms: '∞ SMS',
        countries: '30 дней'
      },
      price: 10400,
      oldPrice: 11688
    }
  ];

  return (
    <>
      <Helmet>
        <title>eSIM для Европы - Интернет в 45+ странах | NetConnect</title>
        <meta name="description" content="Купить eSIM для Европы. Тарифы от 572₽, безлимитный интернет, звонки и SMS в 45+ странах Европы. Активация за 5 минут." />
        <link rel="canonical" href="https://wiline.ru/esim/europe" />
        <meta property="og:title" content="eSIM для Европы - Интернет в 45+ странах | NetConnect" />
        <meta property="og:description" content="Купить eSIM для Европы. Тарифы от 572₽, безлимитный интернет в 45+ странах." />
        <meta property="og:url" content="https://wiline.ru/esim/europe" />
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
                      <Icon name="MapPin" size={40} className="text-white" />
                    </div>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-success bg-clip-text text-transparent leading-tight">
                    eSIM для Европы
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                    Интернет, звонки и SMS в 45+ странах Европы
                  </p>
                  
                  <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
                    <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border">
                      <Icon name="MapPin" size={20} className="text-primary" />
                      <span className="font-semibold">45+ стран</span>
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
                    Купить сим в Европе для интернета
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
                    Купить безлимитный интернет в Европе
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Безлимитный интернет без ограничений
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {unlimitedTariffs.map((tariff, index) => (
                    <div 
                      key={index}
                      className="bg-gradient-to-br from-primary/5 to-success/5 border-2 border-primary/30 rounded-xl p-6 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
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

              <div className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Купить сим в Европе для звонков, SMS и интернета
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Полный пакет связи: звонки, SMS и интернет
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {callsSmsTariffs.map((tariff, index) => (
                    <div 
                      key={index}
                      className="bg-gradient-to-br from-secondary/5 to-primary/5 border-2 border-secondary/30 rounded-xl p-8 hover:border-secondary hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="text-center mb-6">
                        <div className="text-5xl font-bold text-foreground mb-2">
                          {tariff.data}
                        </div>
                        <div className="text-muted-foreground text-lg">
                          {tariff.days} дн.
                        </div>
                      </div>
                      
                      <div className="space-y-4 mb-6">
                        <div className="flex items-center justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">Цена:</span>
                          <span className="font-semibold">{tariff.calls}</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">Интернет:</span>
                          <span className="font-semibold">{tariff.details.internet}</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">Звонки:</span>
                          <span className="font-semibold">{tariff.sms}</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">Срок действия:</span>
                          <span className="font-semibold">{tariff.details.callsDuration}</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">SMS:</span>
                          <span className="font-semibold">{tariff.details.sms}</span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                          <span className="text-muted-foreground">Подключение:</span>
                          <span className="font-semibold text-success">Установка</span>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground line-through mb-1">
                          {tariff.oldPrice.toLocaleString('ru-RU')} ₽
                        </div>
                        <div className="text-4xl font-bold text-secondary">
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
                    Путешествуйте по Европе без ограничений!
                  </h3>
                  
                  <p className="text-xl mb-8 opacity-90">
                    45+ стран Европы с одной eSIM-картой
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