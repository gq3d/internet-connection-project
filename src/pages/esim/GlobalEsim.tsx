import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

export default function GlobalEsim() {
  const [showAllCountries, setShowAllCountries] = useState(false);
  
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
        <title>Глобальные eSIM для интернета - 106 стран | NetConnect</title>
        <meta name="description" content="Купить глобальные eSIM для путешествий по всему миру. Тарифы от 2980₽, безлимитный интернет, звонки и SMS в 106 странах. Активация за 5 минут." />
        <link rel="canonical" href="https://mosoblconnect.ru/esim/global" />
        <meta property="og:title" content="Глобальные eSIM для интернета - 106 стран | NetConnect" />
        <meta property="og:description" content="Купить глобальные eSIM для путешествий по всему миру. Тарифы от 2980₽, безлимитный интернет, звонки и SMS в 106 странах." />
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
                      <span className="font-semibold">106 стран</span>
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
                      <div className="absolute top-0 right-0 bg-primary/10 text-primary px-3 py-1 text-xs font-bold rounded-bl-lg">
                        Безлимит
                      </div>
                      <div className="text-center mb-6">
                        <div className="text-5xl font-bold text-foreground mb-2">
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
                
                <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
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
                    Полный список из 106 стран с указанием операторов и поддерживаемых технологий связи
                  </p>
                </div>

                <div className="bg-card rounded-2xl border-2 border-border overflow-hidden">
                  <button
                    onClick={() => setShowAllCountries(!showAllCountries)}
                    className="w-full p-6 flex items-center justify-between hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Icon name="Globe" size={24} className="text-primary" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold">Список всех 106 стран</h3>
                        <p className="text-sm text-muted-foreground">
                          {showAllCountries ? "Скрыть подробную информацию" : "Показать операторов и технологии связи"}
                        </p>
                      </div>
                    </div>
                    <Icon 
                      name={showAllCountries ? "ChevronUp" : "ChevronDown"} 
                      size={28} 
                      className="text-primary transition-transform"
                    />
                  </button>

                  {showAllCountries && (
                    <div className="p-6 pt-0 border-t border-border">
                      <div className="bg-muted/30 rounded-xl p-6 max-h-[600px] overflow-y-auto">
                        <div className="space-y-3 text-sm leading-relaxed">
                          
                          <div>
                            <p className="font-semibold mb-1">🌐 Aland Islands (Аландские острова)</p>
                            <p className="text-muted-foreground">Aalands Telekommunikation Ab: 2G, 3G, 4G, 5G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇦🇱 Albania (Албания)</p>
                            <p className="text-muted-foreground">ALBtelecom sh.a.: 2G, 3G, 4G</p>
                            <p className="text-muted-foreground">Vodafone - Albania: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇦🇩 Andorra (Андорра)</p>
                            <p className="text-muted-foreground">Andorra Telecom, S.A.U.: 2G, 3G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇦🇷 Argentina (Аргентина)</p>
                            <p className="text-muted-foreground">Telefonica Moviles Argentina S.A.: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇦🇺 Australia (Австралия)</p>
                            <p className="text-muted-foreground">SingTel Optus Pty Limited: 3G, 4G, 5G</p>
                            <p className="text-muted-foreground">Telstra Corporation Limited: 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇦🇹 Austria (Австрия)</p>
                            <p className="text-muted-foreground">Hutchison Drei Austria GmbH: 3G, 4G, 5G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇧🇪 Belgium (Бельгия)</p>
                            <p className="text-muted-foreground">Telenet Group BVBA/SPRL: 2G, 3G, 4G, 5G</p>
                            <p className="text-muted-foreground">ORANGE Belgium nv/SA: 2G, 3G, 4G, 5G</p>
                            <p className="text-muted-foreground">Proximus PLC: 2G, 3G, 4G, 5G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇧🇴 Bolivia (Боливия)</p>
                            <p className="text-muted-foreground">Telefonica Celular de Bolivia S.A.: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇧🇦 Bosnia Herzegovina (Босния и Герцеговина)</p>
                            <p className="text-muted-foreground">BH Telecom JSC Sarajevo: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇧🇷 Brazil (Бразилия)</p>
                            <p className="text-muted-foreground">Vivo S.A.: 2G, 3G, 4G, 5G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇧🇬 Bulgaria (Болгария)</p>
                            <p className="text-muted-foreground">A1 Bulgaria EAD: 2G, 3G</p>
                            <p className="text-muted-foreground">Telenor Bulgaria EAD: 2G, 3G, 4G</p>
                            <p className="text-muted-foreground">Bulgarian Telecommunications Company EAD: 2G, 3G, 4G, 5G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇨🇲 Cameroon (Камерун)</p>
                            <p className="text-muted-foreground">MTN: 2G, 3G, 4G</p>
                            <p className="text-muted-foreground">Orange Cameroun SA: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇨🇦 Canada (Канада)</p>
                            <p className="text-muted-foreground">Rogers Communications Canada Inc.: 2G, 3G, 4G, 5G</p>
                            <p className="text-muted-foreground">TELUS Communications Inc.: 2G, 3G, 4G, 5G</p>
                            <p className="text-muted-foreground">Bell Mobility: 2G, 3G, 4G, 5G</p>
                            <p className="text-muted-foreground">SaskTel Mobility: 2G, 3G, 4G, 5G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇨🇱 Chile (Чили)</p>
                            <p className="text-muted-foreground">Telefonica Movil de Chile S.A.: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇨🇳 China (Китай)</p>
                            <p className="text-muted-foreground">China Mobile Limited: 2G, 3G, 4G, 5G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇨🇴 Colombia (Колумбия)</p>
                            <p className="text-muted-foreground">Colombia Telecomunicaciones S.A. ESP: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇨🇷 Costa Rica (Коста-Рика)</p>
                            <p className="text-muted-foreground">Millicom: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇭🇷 Croatia (Хорватия)</p>
                            <p className="text-muted-foreground">A1 Hrvatska d.o.o: 2G, 3G, 4G, 5G</p>
                            <p className="text-muted-foreground">Tele2 d.o.o za telekomunikacijske usluge: 2G, 3G, 4G, 5G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇨🇾 Cyprus (Кипр)</p>
                            <p className="text-muted-foreground">MTN Cyprus Limited: 2G, 3G, 4G, 5G</p>
                            <p className="text-muted-foreground">PrimeTel PLC: 2G, 4G</p>
                            <p className="text-muted-foreground">Cyprus Telecommunications Authority: 2G, 3G, 4G, 5G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇨🇿 Czech (Чехия)</p>
                            <p className="text-muted-foreground">O2 Czech Republic a.s.: 2G, 4G, 5G</p>
                            <p className="text-muted-foreground">Vodafone Czech Republic a.s.: 2G, 4G, 5G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇩🇰 Denmark (Дания)</p>
                            <p className="text-muted-foreground">HI3G Denmark ApS: 3G, 4G, 5G</p>
                            <p className="text-muted-foreground">Telia Denmark: 2G, 3G, 4G, 5G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇪🇨 Ecuador (Эквадор)</p>
                            <p className="text-muted-foreground">Otecel Sociedad Anonima: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇪🇬 Egypt (Египет)</p>
                            <p className="text-muted-foreground">Etisalat - Misr: 2G, 3G, 4G</p>
                            <p className="text-muted-foreground">Orange Egypt: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇸🇻 El Salvador (Сальвадор)</p>
                            <p className="text-muted-foreground">Telefonica Moviles El Salvador, S.A de C.V.: 2G, 3G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇪🇪 Estonia (Эстония)</p>
                            <p className="text-muted-foreground">Telia Eesti AS: 2G, 3G, 4G, 5G</p>
                            <p className="text-muted-foreground">Tele2 Eesti Aktsiaselts: 2G, 3G, 4G</p>
                            <p className="text-muted-foreground">Elisa Eesti AS: 2G, 4G, 5G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇫🇮 Finland (Финляндия)</p>
                            <p className="text-muted-foreground">Elisa Corporation: 2G, 3G, 4G, 5G</p>
                            <p className="text-muted-foreground">Telia Finland Oyj: 2G, 3G, 4G, 5G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇫🇷 France (Франция)</p>
                            <p className="text-muted-foreground">Bouygues Telecom: 2G, 3G, 4G, 5G</p>
                            <p className="text-muted-foreground">Societe Francaise du Radiotelephone S.A.: 2G, 3G, 4G, 5G</p>
                            <p className="text-muted-foreground">Orange: 2G, 3G, 4G, 5G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇩🇪 Germany (Германия)</p>
                            <p className="text-muted-foreground">Telefonica Germany GmbH & Co. OHG: 2G, 4G, 5G</p>
                            <p className="text-muted-foreground">Vodafone GmbH: 2G, 4G, 5G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇬🇮 Gibraltar (Гибралтар)</p>
                            <p className="text-muted-foreground">Gibtelecom Limited: 2G, 3G, 4G, 5G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇬🇷 Greece (Греция)</p>
                            <p className="text-muted-foreground">Vodafone-Panafon Hellenic Telecommunications Company S.A.: 2G, 4G, 5G</p>
                            <p className="text-muted-foreground">Wind Hellas Telecommunications S.A.: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇬🇺 Guam (Гуам)</p>
                            <p className="text-muted-foreground">PTI Pacifica Inc.: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇬🇹 Guatemala (Гватемала)</p>
                            <p className="text-muted-foreground">Telecomunicaciones de Guatemala, S.A. (TELGUA): 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇬🇬 Guernsey (Гернси)</p>
                            <p className="text-muted-foreground">JT (Jersey) Limited: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇬🇾 Guyana (Гайана)</p>
                            <p className="text-muted-foreground">Digicel Guyana: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇭🇰 Hong Kong (Гонконг)</p>
                            <p className="text-muted-foreground">Hong Kong Telecommunications (HKT) Limited: 2G, 3G, 4G, 5G</p>
                            <p className="text-muted-foreground">Hutchison Telecommunications Hong Kong Holdings Limited: 3G, 4G, 5G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇭🇺 Hungary (Венгрия)</p>
                            <p className="text-muted-foreground">Vodafone Hungary Mobile Telecommunications Company Limited: 2G, 3G, 4G</p>
                            <p className="text-muted-foreground">Telenor Magyarorszag Zartkoruen Mukodo Reszvenytarsasag: 2G, 3G, 4G, 5G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇮🇸 Iceland (Исландия)</p>
                            <p className="text-muted-foreground">Siminn h.f.: 2G, 3G, 4G, 5G</p>
                            <p className="text-muted-foreground">Vodafone: 2G, 3G, 4G, 5G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇮🇳 India (Индия)</p>
                            <p className="text-muted-foreground">Vodafone Idea Limited: 2G, 4G</p>
                            <p className="text-muted-foreground">Bharti Airtel Limited: 2G, 4G, 5G</p>
                            <p className="text-muted-foreground">Reliance Jio Infocomm Limited: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇮🇩 Indonesia (Индонезия)</p>
                            <p className="text-muted-foreground">PT. Hutchison 3 Indonesia: 2G, 4G, 5G</p>
                            <p className="text-muted-foreground">PT Indosat Tbk: 2G, 4G</p>
                            <p className="text-muted-foreground">PT Telekomunikasi Selular: 2G, 4G, 5G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇮🇶 Iraq (Ирак)</p>
                            <p className="text-muted-foreground">Atheer Telecommunications Iraq Limited: 2G, 3G, 4G</p>
                            <p className="text-muted-foreground">Korek Telecom Company: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇮🇪 Ireland (Ирландия)</p>
                            <p className="text-muted-foreground">Vodafone Ireland Limited: 2G, 3G, 4G, 5G</p>
                            <p className="text-muted-foreground">Three Ireland (Hutchison) Limited: 3G, 4G, 5G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇮🇲 Isle of Man (Остров Мэн)</p>
                            <p className="text-muted-foreground">Manx Telecom Limited: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇮🇱 Palestine/Israel (Израиль)</p>
                            <p className="text-muted-foreground">Hot Mobile Ltd.: 3G, 4G, 5G</p>
                            <p className="text-muted-foreground">Partner Communications Company Ltd.: 2G, 3G, 4G</p>
                            <p className="text-muted-foreground">Pelephone Communication Ltd.: 2G, 3G, 4G, 5G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇮🇹 Italy (Италия)</p>
                            <p className="text-muted-foreground">ILIAD Italia S.p.A.: 3G, 4G</p>
                            <p className="text-muted-foreground">Vodafone Italia S.p.A: 2G, 4G, 5G</p>
                            <p className="text-muted-foreground">WINDTRE: 2G, 3G, 4G, 5G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇯🇵 Japan (Япония)</p>
                            <p className="text-muted-foreground">NTT Docomo, Inc.: 3G, 4G, 5G</p>
                            <p className="text-muted-foreground">KDDI Corporation: 4G, 5G</p>
                            <p className="text-muted-foreground">Softbank: 4G, 5G</p>
                            <p className="text-muted-foreground">Rakuten Mobile: 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇯🇪 Jersey (Джерси)</p>
                            <p className="text-muted-foreground">JT (Jersey) Limited: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇯🇴 Jordan (Иордания)</p>
                            <p className="text-muted-foreground">Umniah Mobile Company: 2G, 3G, 4G</p>
                            <p className="text-muted-foreground">Zain Jordan: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇰🇿 Kazakhstan (Казахстан)</p>
                            <p className="text-muted-foreground">Mobile Telecom-Service LLP: 2G, 3G, 4G</p>
                            <p className="text-muted-foreground">KaR-Tel LLP: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇰🇪 Kenya (Кения)</p>
                            <p className="text-muted-foreground">Airtel Networks Kenya Limited: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇰🇼 Kuwait (Кувейт)</p>
                            <p className="text-muted-foreground">Viva: 2G, 3G, 4G, 5G</p>
                            <p className="text-muted-foreground">Mobile Telecommunications Company: 2G, 3G, 4G, 5G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇱🇻 Latvia (Латвия)</p>
                            <p className="text-muted-foreground">Latvijas Mobilais Telefons: 2G, 3G, 4G, 5G</p>
                            <p className="text-muted-foreground">Tele2 SIA: 2G, 3G, 4G, 5G</p>
                            <p className="text-muted-foreground">SIA Bite Mobile: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇱🇮 Liechtenstein (Лихтенштейн)</p>
                            <p className="text-muted-foreground">Telecom Liechtenstein AG: 2G, 3G, 4G</p>
                            <p className="text-muted-foreground">Salt (Liechtenstein) AG: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇱🇹 Lithuania (Литва)</p>
                            <p className="text-muted-foreground">Telia Lietuva AB: 2G, 4G, 5G</p>
                            <p className="text-muted-foreground">Bite Lithuania: 2G, 3G, 4G</p>
                            <p className="text-muted-foreground">UAB Tele2: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇱🇺 Luxembourg (Люксембург)</p>
                            <p className="text-muted-foreground">Proximus Luxembourg S.A.: 2G, 3G, 4G, 5G</p>
                            <p className="text-muted-foreground">POST Luxembourg: 2G, 4G, 5G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇲🇴 Macau (Макао)</p>
                            <p className="text-muted-foreground">Hutchison Telephone (Macau) Company Limited: 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇲🇬 Madagascar (Мадагаскар)</p>
                            <p className="text-muted-foreground">Airtel Madagascar SA: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇲🇾 Malaysia (Малайзия)</p>
                            <p className="text-muted-foreground">Maxis Communications Berhad: 2G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇲🇹 Malta (Мальта)</p>
                            <p className="text-muted-foreground">GO p.l.c.: 2G, 3G, 4G, 5G</p>
                            <p className="text-muted-foreground">Vodafone Malta Limited: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇲🇺 Mauritius (Маврикий)</p>
                            <p className="text-muted-foreground">Cellplus Mobile Communications Ltd.: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇲🇽 Mexico (Мексика)</p>
                            <p className="text-muted-foreground">Pegaso PCS, S.A. de C.V.: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇲🇩 Moldova (Молдова)</p>
                            <p className="text-muted-foreground">Moldtelecom S.A: 2G, 3G, 4G</p>
                            <p className="text-muted-foreground">Orange Moldova S.A.: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇲🇪 Montenegro (Черногория)</p>
                            <p className="text-muted-foreground">One: 2G, 3G, 4G, 5G</p>
                            <p className="text-muted-foreground">MTEL d.o.o. Podgorica: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇲🇦 Morocco (Марокко)</p>
                            <p className="text-muted-foreground">Orange Maroc: 2G, 3G, 4G</p>
                            <p className="text-muted-foreground">Itissalat Al-Maghrib S.A.: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇳🇱 Netherlands (Нидерланды)</p>
                            <p className="text-muted-foreground">KPN B.V.: 2G, 4G, 5G</p>
                            <p className="text-muted-foreground">Vodafone Libertel B.V.: 2G, 4G, 5G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇳🇿 New Zealand (Новая Зеландия)</p>
                            <p className="text-muted-foreground">One New Zealand: 2G, 3G, 4G, 5G</p>
                            <p className="text-muted-foreground">Spark New Zealand: 2G, 3G, 4G, 5G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇳🇮 Nicaragua (Никарагуа)</p>
                            <p className="text-muted-foreground">Millicom: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇳🇬 Nigeria (Нигерия)</p>
                            <p className="text-muted-foreground">Airtel Networks Limited: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇲🇰 North Macedonia (Северная Македония)</p>
                            <p className="text-muted-foreground">one.Vip DOOEL Skopje: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇳🇴 Norway (Норвегия)</p>
                            <p className="text-muted-foreground">Telia Norge AS: 2G, 4G, 5G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇴🇲 Oman (Оман)</p>
                            <p className="text-muted-foreground">Omani Qatari Telecommunication Company SAOG: 2G, 3G, 4G, 5G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇵🇰 Pakistan (Пакистан)</p>
                            <p className="text-muted-foreground">Jazz: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇵🇦 Panama (Панама)</p>
                            <p className="text-muted-foreground">Tigo Panamá: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇵🇾 Paraguay (Парагвай)</p>
                            <p className="text-muted-foreground">Telefonica Celular Del Paraguay S.A. (Telecel S.A.): 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇵🇪 Peru (Перу)</p>
                            <p className="text-muted-foreground">Telefonica Moviles S.A.C.: 2G, 3G, 4G</p>
                            <p className="text-muted-foreground">Entel Peru: 2G, 3G, 4G, 5G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇵🇱 Poland (Польша)</p>
                            <p className="text-muted-foreground">Orange Polska S.A.: 2G, 3G, 4G, 5G</p>
                            <p className="text-muted-foreground">P4 Sp. z o.o.: 2G, 3G, 4G, 5G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇵🇹 Portugal (Португалия)</p>
                            <p className="text-muted-foreground">NOS Comunicacoes, S.A.: 2G, 3G, 4G, 5G</p>
                            <p className="text-muted-foreground">MEO - Servicos de Comunicacoes e Multimedia SA: 2G, 3G, 4G, 5G</p>
                            <p className="text-muted-foreground">Vodafone Portugal: 2G, 3G, 4G, 5G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇶🇦 Qatar (Катар)</p>
                            <p className="text-muted-foreground">Ooredoo QSC: 2G, 3G, 4G, 5G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇷🇪 Reunion (Реюньон)</p>
                            <p className="text-muted-foreground">Orange Reunion: 2G, 3G, 4G</p>
                            <p className="text-muted-foreground">SRR: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇷🇴 Romania (Румыния)</p>
                            <p className="text-muted-foreground">S.C. Orange Romania S.A.: 2G, 3G, 4G, 5G</p>
                            <p className="text-muted-foreground">S.C. RCS & RDS S.A.: 2G, 4G, 5G</p>
                            <p className="text-muted-foreground">Vodafone Romania: 2G, 3G, 4G, 5G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇷🇺 Russia (Россия)</p>
                            <p className="text-muted-foreground">MegaFon PJSC: 2G, 3G, 4G</p>
                            <p className="text-muted-foreground">Beeline: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇸🇦 Saudi Arabia (Саудовская Аравия)</p>
                            <p className="text-muted-foreground">Etihad Etisalat Company: 2G, 3G, 4G, 5G</p>
                            <p className="text-muted-foreground">MTC Saudi Arabia (Zain): 2G, 3G, 4G, 5G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇷🇸 Serbia (Сербия)</p>
                            <p className="text-muted-foreground">Yettel Serbia: 2G, 3G, 4G</p>
                            <p className="text-muted-foreground">Telekom Srbija a.d.: 2G, 3G</p>
                            <p className="text-muted-foreground">Vip mobile d.o.o.: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇸🇨 Seychelles (Сейшелы)</p>
                            <p className="text-muted-foreground">Airtel (Seychelles) Limited: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇸🇬 Singapore (Сингапур)</p>
                            <p className="text-muted-foreground">StarHub Mobile Pte Ltd: 3G, 4G, 5G</p>
                            <p className="text-muted-foreground">SingTel Mobile Singapore Pte. Ltd.: 3G, 4G, 5G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇸🇰 Slovakia (Словакия)</p>
                            <p className="text-muted-foreground">Orange Slovensko, a.s.: 2G, 3G, 4G, 5G</p>
                            <p className="text-muted-foreground">O2 Slovakia, s.r.o.: 2G, 3G, 4G, 5G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇸🇮 Slovenia (Словения)</p>
                            <p className="text-muted-foreground">Telekom Slovenije d.d.: 2G, 4G, 5G</p>
                            <p className="text-muted-foreground">Telemach d.o.o.: 2G, 3G, 4G, 5G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇿🇦 South Africa (Южная Африка)</p>
                            <p className="text-muted-foreground">Mobile Telephone Networks (Pty) Ltd.: 2G, 3G, 4G, 5G</p>
                            <p className="text-muted-foreground">Vodacom Group (Pty) Ltd.: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇰🇷 South Korea (Южная Корея)</p>
                            <p className="text-muted-foreground">SK Telecom: 3G, 4G, 5G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇪🇸 Spain (Испания)</p>
                            <p className="text-muted-foreground">Telefonica Moviles Espana S.A.: 2G, 3G, 4G, 5G</p>
                            <p className="text-muted-foreground">Orange Spain: 2G, 3G, 4G, 5G</p>
                            <p className="text-muted-foreground">Vodafone Espana, S.A.U.: 2G, 3G, 4G, 5G</p>
                            <p className="text-muted-foreground">Xfera Moviles, S.A.: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇱🇰 Sri Lanka (Шри-Ланка)</p>
                            <p className="text-muted-foreground">Mobitel (Pvt) Ltd: 2G, 3G, 4G</p>
                            <p className="text-muted-foreground">Dialog Axiata PLC: 2G, 3G, 4G</p>
                            <p className="text-muted-foreground">Hutch Sri Lanka: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇸🇪 Sweden (Швеция)</p>
                            <p className="text-muted-foreground">Tele2 AB: 2G, 3G, 4G, 5G</p>
                            <p className="text-muted-foreground">Telia Company AB: 2G, 3G, 4G, 5G</p>
                            <p className="text-muted-foreground">Hi3G Access AB: 3G, 4G, 5G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇨🇭 Switzerland (Швейцария)</p>
                            <p className="text-muted-foreground">Sunrise LLC: 2G, 3G, 4G, 5G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇹🇼 Taiwan (Тайвань)</p>
                            <p className="text-muted-foreground">Taiwan Mobile Co.Ltd: 3G, 4G, 5G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇹🇿 Tanzania (Танзания)</p>
                            <p className="text-muted-foreground">Airtel Tanzania Limited: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇹🇭 Thailand (Таиланд)</p>
                            <p className="text-muted-foreground">Advanced Wireless Network Company Limited: 2G, 3G, 4G, 5G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇹🇳 Tunisia (Тунис)</p>
                            <p className="text-muted-foreground">Ooredoo Tunisie SA: 2G, 3G, 4G</p>
                            <p className="text-muted-foreground">Orange Tunisie, SA: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇹🇷 Turkey (Турция)</p>
                            <p className="text-muted-foreground">Avea Iletisim Hizmetleri A.S.: 2G, 3G, 4G, 5G</p>
                            <p className="text-muted-foreground">Turkcell Iletisim Hizmetleri A.S.: 2G, 3G, 4G, 5G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇺🇬 Uganda (Уганда)</p>
                            <p className="text-muted-foreground">Airtel Uganda Limited: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇺🇦 Ukraine (Украина)</p>
                            <p className="text-muted-foreground">lifecell LLC: 2G, 3G, 4G</p>
                            <p className="text-muted-foreground">Kyivstar, Private Joint Stock Company: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇦🇪 United Arab Emirates (ОАЭ)</p>
                            <p className="text-muted-foreground">Du: 2G, 3G, 4G, 5G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇬🇧 United Kingdom (Великобритания)</p>
                            <p className="text-muted-foreground">Hutchison 3G UK Limited: 3G, 4G, 5G</p>
                            <p className="text-muted-foreground">Vodafone Ltd: 2G, 3G, 4G, 5G</p>
                            <p className="text-muted-foreground">Telefonica UK Limited: 2G, 3G, 4G, 5G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇺🇸 United States (США)</p>
                            <p className="text-muted-foreground">AT&T Mobility: 4G, 5G</p>
                            <p className="text-muted-foreground">T-Mobile: 2G, 4G, 5G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇺🇾 Uruguay (Уругвай)</p>
                            <p className="text-muted-foreground">Telefonica Moviles Del Uruguay S.A.: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇺🇿 Uzbekistan (Узбекистан)</p>
                            <p className="text-muted-foreground">Unitel LLC: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇻🇳 Vietnam (Вьетнам)</p>
                            <p className="text-muted-foreground">Vietnamobile Telecommunications Joint Stock Company: 2G, 3G, 4G</p>
                            <p className="text-muted-foreground">MOBIFONE CORPORATION: 2G, 3G, 4G</p>
                          </div>

                          <div>
                            <p className="font-semibold mb-1">🇿🇲 Zambia (Замбия)</p>
                            <p className="text-muted-foreground">MTN (Zambia) Ltd: 2G, 3G</p>
                            <p className="text-muted-foreground">Airtel Networks Zambia Plc.: 2G, 3G, 4G</p>
                          </div>

                        </div>
                      </div>
                    </div>
                  )}
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
