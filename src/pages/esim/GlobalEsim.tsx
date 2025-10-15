import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

export default function GlobalEsim() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const globalTariffs = [
    {
      data: '1 ГБ',
      days: 7,
      speed: 'до 4G',
      calls: '∞ мин',
      sms: '∞ SMS',
      price: 2980,
      oldPrice: 3356
    },
    {
      data: '2 ГБ',
      days: 15,
      speed: 'до 4G',
      calls: '∞ мин',
      sms: '∞ SMS',
      price: 4740,
      oldPrice: 5328
    },
    {
      data: '3 ГБ',
      days: 30,
      speed: 'до 4G',
      calls: '∞ мин',
      sms: '∞ SMS',
      price: 6600,
      oldPrice: 7392
    },
    {
      data: '5 ГБ',
      days: 30,
      speed: 'до 4G',
      calls: '∞ мин',
      sms: '∞ SMS',
      price: 9800,
      oldPrice: 10956
    },
    {
      data: '10 ГБ',
      days: 30,
      speed: 'до 4G',
      calls: '∞ мин',
      sms: '∞ SMS',
      price: 15000,
      oldPrice: 16728
    },
    {
      data: '20 ГБ',
      days: 30,
      speed: 'до 4G',
      calls: '∞ мин',
      sms: '∞ SMS',
      price: 25000,
      oldPrice: 27864
    }
  ];

  const unlimitedTariffs = [
    {
      data: '∞ ГБ',
      days: 1,
      speed: 'до 4G',
      calls: '∞ мин',
      sms: '∞ SMS',
      price: 2800,
      oldPrice: 3132
    },
    {
      data: '∞ ГБ',
      days: 3,
      speed: 'до 4G',
      calls: '∞ мин',
      sms: '∞ SMS',
      price: 4620,
      oldPrice: 5160
    },
    {
      data: '∞ ГБ',
      days: 7,
      speed: 'до 4G',
      calls: '∞ мин',
      sms: '∞ SMS',
      price: 8840,
      oldPrice: 9828
    },
    {
      data: '∞ ГБ',
      days: 10,
      speed: 'до 4G',
      calls: '∞ мин',
      sms: '∞ SMS',
      price: 11400,
      oldPrice: 12648
    }
  ];

  const callsSmsTariffs = [
    {
      data: '3.5 ГБ',
      days: 30,
      speed: 'до 4G',
      calls: '∞ звонков',
      sms: '∞ SMS и интернета',
      price: 7200,
      oldPrice: 8040
    },
    {
      data: '2.5 ГБ',
      days: 30,
      speed: 'до 4G',
      calls: '∞ звонков',
      sms: '∞ SMS и интернета',
      price: 5600,
      oldPrice: 6264
    }
  ];

  return (
    <>
      <Helmet>
        <title>Глобальные eSIM для интернета - 200+ стран | NetConnect</title>
        <meta name="description" content="Купить глобальные eSIM для путешествий по всему миру. Тарифы от 2980₽, безлимитный интернет, звонки и SMS в 200+ странах. Активация за 5 минут." />
        <link rel="canonical" href="https://mosoblconnect.ru/esim/global" />
        <meta property="og:title" content="Глобальные eSIM для интернета - 200+ стран | NetConnect" />
        <meta property="og:description" content="Купить глобальные eSIM для путешествий по всему миру. Тарифы от 2980₽, безлимитный интернет, звонки и SMS в 200+ странах." />
        <meta property="og:url" content="https://mosoblconnect.ru/esim/global" />
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
                      <Icon name="Earth" size={40} className="text-white" />
                    </div>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-success via-primary to-secondary bg-clip-text text-transparent leading-tight">
                    Глобальные eSIM
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                    Единая карта для всех стран мира, без смены SIM
                  </p>
                  
                  <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
                    <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border">
                      <Icon name="Globe" size={20} className="text-success" />
                      <span className="font-semibold">200+ стран</span>
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
                    Купить сим в глобальном регионе для интернета
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Выберите подходящий тариф с интернетом для путешествий
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {globalTariffs.map((tariff, index) => (
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
                          <span className="text-muted-foreground">Скорость:</span>
                          <span className="font-semibold">{tariff.speed}</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">Звонки:</span>
                          <span className="font-semibold">{tariff.calls}</span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                          <span className="text-muted-foreground">SMS:</span>
                          <span className="font-semibold">{tariff.sms}</span>
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
                    Купить безлимитный интернет в глобальном регионе
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Безлимитный интернет без ограничений
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                          <span className="text-muted-foreground">Скорость:</span>
                          <span className="font-semibold">{tariff.speed}</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">Звонки:</span>
                          <span className="font-semibold">{tariff.calls}</span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                          <span className="text-muted-foreground">SMS:</span>
                          <span className="font-semibold">{tariff.sms}</span>
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
                    Купить сим в глобальном регионе для звонков, SMS и интернета
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
                          <span className="text-muted-foreground">Скорость:</span>
                          <span className="font-semibold">{tariff.speed}</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">Звонки:</span>
                          <span className="font-semibold">{tariff.calls}</span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                          <span className="text-muted-foreground">SMS:</span>
                          <span className="font-semibold">{tariff.sms}</span>
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
                    Почему выбирают наши глобальные eSIM?
                  </h3>
                  
                  <div className="grid md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <Icon name="Globe" size={32} className="text-white mb-3 mx-auto" />
                      <h4 className="font-bold text-xl mb-2">106 стран</h4>
                      <p className="text-white/90 text-sm">
                        Работает по всему миру без смены SIM-карты
                      </p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <Icon name="Zap" size={32} className="text-white mb-3 mx-auto" />
                      <h4 className="font-bold text-xl mb-2">Моментальная активация</h4>
                      <p className="text-white/90 text-sm">
                        Подключение за 5 минут, без визита в офис
                      </p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <Icon name="DollarSign" size={32} className="text-white mb-3 mx-auto" />
                      <h4 className="font-bold text-xl mb-2">Выгодные цены</h4>
                      <p className="text-white/90 text-sm">
                        Дешевле роуминга в 3-5 раз
                      </p>
                    </div>
                  </div>
                  
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

              <div className="mt-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Техническая информация о покрытии
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Подробный список из 106 стран с указанием операторов и поддерживаемых технологий связи
                  </p>
                </div>

                <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-success/5 rounded-2xl p-8 border-2 border-primary/20">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    
                    <div className="bg-card rounded-xl p-5 border border-border hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <Icon name="Globe" size={20} className="text-primary" />
                        </div>
                        <h3 className="font-bold text-lg">Aland Islands</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">Aalands Telekommunikation Ab</p>
                      <div className="flex gap-2 flex-wrap">
                        <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">2G</span>
                        <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">3G</span>
                        <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">4G</span>
                        <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">5G</span>
                      </div>
                    </div>

                    <div className="bg-card rounded-xl p-5 border border-border hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <Icon name="Globe" size={20} className="text-primary" />
                        </div>
                        <h3 className="font-bold text-lg">Albania (Албания)</h3>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">ALBtelecom sh.a.</p>
                          <div className="flex gap-2 flex-wrap">
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">2G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">3G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">4G</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">Vodafone - Albania</p>
                          <div className="flex gap-2 flex-wrap">
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">2G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">3G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">4G</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-card rounded-xl p-5 border border-border hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <Icon name="Globe" size={20} className="text-primary" />
                        </div>
                        <h3 className="font-bold text-lg">Andorra (Андорра)</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">Andorra Telecom, S.A.U.</p>
                      <div className="flex gap-2 flex-wrap">
                        <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">2G</span>
                        <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">3G</span>
                      </div>
                    </div>

                    <div className="bg-card rounded-xl p-5 border border-border hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <Icon name="Globe" size={20} className="text-primary" />
                        </div>
                        <h3 className="font-bold text-lg">Argentina (Аргентина)</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">Telefonica Moviles Argentina S.A.</p>
                      <div className="flex gap-2 flex-wrap">
                        <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">2G</span>
                        <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">3G</span>
                        <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">4G</span>
                      </div>
                    </div>

                    <div className="bg-card rounded-xl p-5 border border-border hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <Icon name="Globe" size={20} className="text-primary" />
                        </div>
                        <h3 className="font-bold text-lg">Australia (Австралия)</h3>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">SingTel Optus Pty Limited</p>
                          <div className="flex gap-2 flex-wrap">
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">3G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">4G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">5G</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">Telstra Corporation Limited</p>
                          <div className="flex gap-2 flex-wrap">
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">3G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">4G</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-card rounded-xl p-5 border border-border hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <Icon name="Globe" size={20} className="text-primary" />
                        </div>
                        <h3 className="font-bold text-lg">Austria (Австрия)</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">Hutchison Drei Austria GmbH</p>
                      <div className="flex gap-2 flex-wrap">
                        <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">3G</span>
                        <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">4G</span>
                        <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">5G</span>
                      </div>
                    </div>

                    <div className="bg-card rounded-xl p-5 border border-border hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <Icon name="Globe" size={20} className="text-primary" />
                        </div>
                        <h3 className="font-bold text-lg">Belgium (Бельгия)</h3>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">Telenet Group</p>
                          <div className="flex gap-2 flex-wrap">
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">2G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">3G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">4G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">5G</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">ORANGE Belgium</p>
                          <div className="flex gap-2 flex-wrap">
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">2G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">3G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">4G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">5G</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">Proximus PLC</p>
                          <div className="flex gap-2 flex-wrap">
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">2G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">3G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">4G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">5G</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-card rounded-xl p-5 border border-border hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <Icon name="Globe" size={20} className="text-primary" />
                        </div>
                        <h3 className="font-bold text-lg">Canada (Канада)</h3>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">Rogers Communications</p>
                          <div className="flex gap-2 flex-wrap">
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">2G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">3G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">4G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">5G</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">TELUS Communications</p>
                          <div className="flex gap-2 flex-wrap">
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">2G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">3G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">4G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">5G</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">Bell Mobility</p>
                          <div className="flex gap-2 flex-wrap">
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">2G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">3G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">4G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">5G</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-card rounded-xl p-5 border border-border hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <Icon name="Globe" size={20} className="text-primary" />
                        </div>
                        <h3 className="font-bold text-lg">China (Китай)</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">China Mobile Limited</p>
                      <div className="flex gap-2 flex-wrap">
                        <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">2G</span>
                        <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">3G</span>
                        <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">4G</span>
                        <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">5G</span>
                      </div>
                    </div>

                    <div className="bg-card rounded-xl p-5 border border-border hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <Icon name="Globe" size={20} className="text-primary" />
                        </div>
                        <h3 className="font-bold text-lg">France (Франция)</h3>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">Bouygues Telecom</p>
                          <div className="flex gap-2 flex-wrap">
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">2G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">3G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">4G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">5G</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">Orange</p>
                          <div className="flex gap-2 flex-wrap">
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">2G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">3G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">4G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">5G</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-card rounded-xl p-5 border border-border hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <Icon name="Globe" size={20} className="text-primary" />
                        </div>
                        <h3 className="font-bold text-lg">Germany (Германия)</h3>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">Telefonica Germany</p>
                          <div className="flex gap-2 flex-wrap">
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">2G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">4G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">5G</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">Vodafone GmbH</p>
                          <div className="flex gap-2 flex-wrap">
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">2G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">4G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">5G</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-card rounded-xl p-5 border border-border hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <Icon name="Globe" size={20} className="text-primary" />
                        </div>
                        <h3 className="font-bold text-lg">India (Индия)</h3>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">Bharti Airtel Limited</p>
                          <div className="flex gap-2 flex-wrap">
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">2G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">4G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">5G</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">Reliance Jio Infocomm</p>
                          <div className="flex gap-2 flex-wrap">
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">2G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">3G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">4G</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">Vodafone Idea Limited</p>
                          <div className="flex gap-2 flex-wrap">
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">2G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">4G</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-card rounded-xl p-5 border border-border hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <Icon name="Globe" size={20} className="text-primary" />
                        </div>
                        <h3 className="font-bold text-lg">Italy (Италия)</h3>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">ILIAD Italia</p>
                          <div className="flex gap-2 flex-wrap">
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">3G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">4G</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">Vodafone Italia</p>
                          <div className="flex gap-2 flex-wrap">
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">2G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">4G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">5G</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">WINDTRE</p>
                          <div className="flex gap-2 flex-wrap">
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">2G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">3G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">4G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">5G</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-card rounded-xl p-5 border border-border hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <Icon name="Globe" size={20} className="text-primary" />
                        </div>
                        <h3 className="font-bold text-lg">Japan (Япония)</h3>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">NTT Docomo</p>
                          <div className="flex gap-2 flex-wrap">
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">3G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">4G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">5G</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">KDDI Corporation</p>
                          <div className="flex gap-2 flex-wrap">
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">4G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">5G</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">Softbank</p>
                          <div className="flex gap-2 flex-wrap">
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">4G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">5G</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-card rounded-xl p-5 border border-border hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <Icon name="Globe" size={20} className="text-primary" />
                        </div>
                        <h3 className="font-bold text-lg">Russia (Россия)</h3>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">MegaFon PJSC</p>
                          <div className="flex gap-2 flex-wrap">
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">2G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">3G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">4G</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">Beeline</p>
                          <div className="flex gap-2 flex-wrap">
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">2G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">3G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">4G</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-card rounded-xl p-5 border border-border hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <Icon name="Globe" size={20} className="text-primary" />
                        </div>
                        <h3 className="font-bold text-lg">Singapore (Сингапур)</h3>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">StarHub Mobile</p>
                          <div className="flex gap-2 flex-wrap">
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">3G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">4G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">5G</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">SingTel Mobile</p>
                          <div className="flex gap-2 flex-wrap">
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">3G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">4G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">5G</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-card rounded-xl p-5 border border-border hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <Icon name="Globe" size={20} className="text-primary" />
                        </div>
                        <h3 className="font-bold text-lg">South Korea (Южная Корея)</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">SK Telecom</p>
                      <div className="flex gap-2 flex-wrap">
                        <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">3G</span>
                        <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">4G</span>
                        <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">5G</span>
                      </div>
                    </div>

                    <div className="bg-card rounded-xl p-5 border border-border hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <Icon name="Globe" size={20} className="text-primary" />
                        </div>
                        <h3 className="font-bold text-lg">Spain (Испания)</h3>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">Telefonica Moviles Espana</p>
                          <div className="flex gap-2 flex-wrap">
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">2G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">3G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">4G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">5G</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">Orange Spain</p>
                          <div className="flex gap-2 flex-wrap">
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">2G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">3G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">4G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">5G</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">Vodafone Espana</p>
                          <div className="flex gap-2 flex-wrap">
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">2G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">3G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">4G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">5G</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-card rounded-xl p-5 border border-border hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <Icon name="Globe" size={20} className="text-primary" />
                        </div>
                        <h3 className="font-bold text-lg">Thailand (Таиланд)</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">Advanced Wireless Network</p>
                      <div className="flex gap-2 flex-wrap">
                        <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">2G</span>
                        <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">3G</span>
                        <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">4G</span>
                        <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">5G</span>
                      </div>
                    </div>

                    <div className="bg-card rounded-xl p-5 border border-border hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <Icon name="Globe" size={20} className="text-primary" />
                        </div>
                        <h3 className="font-bold text-lg">Turkey (Турция)</h3>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">Avea Iletisim</p>
                          <div className="flex gap-2 flex-wrap">
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">2G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">3G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">4G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">5G</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">Turkcell Iletisim</p>
                          <div className="flex gap-2 flex-wrap">
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">2G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">3G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">4G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">5G</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-card rounded-xl p-5 border border-border hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <Icon name="Globe" size={20} className="text-primary" />
                        </div>
                        <h3 className="font-bold text-lg">United Kingdom (Великобритания)</h3>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">Hutchison 3G UK</p>
                          <div className="flex gap-2 flex-wrap">
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">3G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">4G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">5G</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">Vodafone Ltd</p>
                          <div className="flex gap-2 flex-wrap">
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">2G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">3G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">4G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">5G</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">Telefonica UK</p>
                          <div className="flex gap-2 flex-wrap">
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">2G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">3G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">4G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">5G</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-card rounded-xl p-5 border border-border hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <Icon name="Globe" size={20} className="text-primary" />
                        </div>
                        <h3 className="font-bold text-lg">United States (США)</h3>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">AT&T Mobility</p>
                          <div className="flex gap-2 flex-wrap">
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">4G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">5G</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">T-Mobile</p>
                          <div className="flex gap-2 flex-wrap">
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">2G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">4G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">5G</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-card rounded-xl p-5 border border-border hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <Icon name="Globe" size={20} className="text-primary" />
                        </div>
                        <h3 className="font-bold text-lg">Vietnam (Вьетнам)</h3>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">MOBIFONE CORPORATION</p>
                          <div className="flex gap-2 flex-wrap">
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">2G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">3G</span>
                            <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded">4G</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-full bg-gradient-to-r from-primary/10 via-secondary/10 to-success/10 rounded-xl p-6 border-2 border-primary/30 text-center">
                      <div className="flex items-center justify-center gap-3 mb-3">
                        <Icon name="Info" size={24} className="text-primary" />
                        <h3 className="font-bold text-lg">И ещё 82+ страны</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Полный список из 106 стран с поддержкой 2G, 3G, 4G и 5G сетей от ведущих операторов мира
                      </p>
                    </div>

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