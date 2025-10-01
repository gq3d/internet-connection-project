import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import { generateCitySlug } from '@/utils/citySlug';

const Index = () => {
  const [address, setAddress] = useState('');
  const [checkingCoverage, setCheckingCoverage] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.title = 'NetConnect - Беспроводной интернет в Московской области | Спутниковый интернет до 250 Мбит/с';
  }, []);

  const handleCoverageCheck = () => {
    setCheckingCoverage(true);
    setTimeout(() => {
      setCheckingCoverage(false);
    }, 2000);
  };

  const services = [
    {
      icon: 'Wifi',
      title: 'Интернет-подключение',
      description: 'Беспроводной интернет до 250 Мбит/с через беспроводные технологии',
      features: ['До 250 Мбит/с', 'Стабильное соединение', '24/7 поддержка'],
      url: '/services/internet'
    },
    {
      icon: 'Satellite',
      title: 'Спутниковый интернет',
      description: 'Надежное покрытие в отдаленных районах Московской области',
      features: ['Покрытие 99%', 'Низкая задержка', 'Защита от помех'],
      url: '/services/satellite'
    },
    {
      icon: 'Router',
      title: 'Wi-Fi оборудование',
      description: 'Установка и настройка Wi-Fi сетей, усиление сигнала',
      features: ['Профессиональная установка', 'Настройка роуминга', 'Усиление сигнала'],
      url: '/services/wifi'
    },
    {
      icon: 'Video',
      title: 'Видеонаблюдение',
      description: 'Системы безопасности с удаленным доступом и записью',
      features: ['HD качество', 'Облачное хранение', 'Мобильное приложение'],
      url: '/services/surveillance'
    },
    {
      icon: 'Shield',
      title: 'Системы охраны',
      description: 'Автоматизированные системы безопасности и контроля доступа',
      features: ['Датчики движения', 'Контроль доступа', 'Уведомления в реальном времени'],
      url: '/services/security'
    },
    {
      icon: 'Signal',
      title: 'Усиление сотовой связи',
      description: 'Репитеры и усилители сигнала для стабильной мобильной связи',
      features: ['Все операторы', 'Увеличение зоны покрытия', 'Простая установка'],
      url: '/services/cellular-booster'
    }
  ];

  const tariffs = [
    {
      name: 'Старт',
      speed: '100 Мбит/с',
      price: '1490',
      description: 'Оптимальный вариант для серфинга, мессенджеров, социальных сетей и просмотра видео в HD.',
      features: ['Безлимитный трафик', 'Wi-Fi роутер 802.11ac', 'Техподдержка']
    },
    {
      name: 'Продвинутый',
      speed: '150 Мбит/с',
      price: '1990',
      description: 'Для активного использования интернета: потоковое видео в Full HD, онлайн-игры, работа из дома.',
      features: ['Безлимитный трафик', 'Wi-Fi роутер в подарок', 'Приоритетная поддержка', 'Статический IP']
    },
    {
      name: 'Премиум',
      speed: '240 Мбит/с',
      price: '2590',
      description: 'Высокая скорость для больших потоков данных: 4K видео, видеоконференции, стриминг, умный дом и все устройства одновременно.',
      features: ['Безлимитный трафик', 'Профессиональное оборудование', 'VIP поддержка', 'Статический IP', 'Резервный канал']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Satellite" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-primary">NetConnect</span>
            </div>
            
            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-sm font-medium hover:text-success transition-colors">Услуги</a>
              <a href="#tariffs" className="text-sm font-medium hover:text-success transition-colors">Тарифы</a>
              <a href="#pricing" className="text-sm font-medium hover:text-success transition-colors">Стоимость</a>
              <a href="#esim" className="text-sm font-medium hover:text-success transition-colors">eSIM</a>
              <a href="#coverage" className="text-sm font-medium hover:text-success transition-colors">Покрытие</a>
              <a href="#about" className="text-sm font-medium hover:text-success transition-colors">О компании</a>
              <a href="#contacts" className="text-sm font-medium hover:text-success transition-colors">Контакты</a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label="Меню"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-border">
              <div className="space-y-4">
                <a 
                  href="#services" 
                  className="block py-2 text-sm font-medium hover:text-success transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Услуги
                </a>
                <a 
                  href="#tariffs" 
                  className="block py-2 text-sm font-medium hover:text-success transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Тарифы
                </a>
                <a 
                  href="#pricing" 
                  className="block py-2 text-sm font-medium hover:text-success transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Стоимость
                </a>
                <a 
                  href="#esim" 
                  className="block py-2 text-sm font-medium hover:text-success transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  eSIM
                </a>
                <a 
                  href="#coverage" 
                  className="block py-2 text-sm font-medium hover:text-success transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Покрытие
                </a>
                <a 
                  href="#about" 
                  className="block py-2 text-sm font-medium hover:text-success transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  О компании
                </a>
                <a 
                  href="#contacts" 
                  className="block py-2 text-sm font-medium hover:text-success transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Контакты
                </a>
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center space-x-2 text-success font-semibold">
                    <Icon name="Phone" size={16} />
                    <a href="tel:+79015000078" className="hover:underline">+7 (901) 500-00-78</a>
                  </div>
                  <div className="flex items-center space-x-2 text-success font-semibold mt-2">
                    <Icon name="Phone" size={16} />
                    <a href="tel:+79015000087" className="hover:underline">+7 (901) 500-00-87</a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Беспроводной интернет в Московской области
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Подключение к сети интернет для частных лиц и бизнеса через беспроводные каналы связи, включая спутниковый интернет
            </p>
            


            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2 bg-success/10 text-success border-success/20">
                <Icon name="Zap" size={16} className="mr-2" />
                До 250 Мбит/с
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-success/10 text-success border-success/20">
                <Icon name="Shield" size={16} className="mr-2" />
                99% надежность
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-success/10 text-success border-success/20">
                <Icon name="Clock" size={16} className="mr-2" />
                24/7 поддержка
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр телекоммуникационных услуг для дома и бизнеса
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service, index) => (
              <Link key={index} to={service.url}>
                <Card className="hover:shadow-lg transition-all duration-300 animate-scale-in cursor-pointer hover:scale-105">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name={service.icon} size={24} className="text-success" />
                    </div>
                    <CardTitle as="h3" className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <Icon name="Check" size={16} className="text-success mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex items-center text-primary font-medium">
                      <span>Подробнее</span>
                      <Icon name="ArrowRight" size={16} className="ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* How it works schema */}
          <div className="bg-gradient-to-r from-primary/5 to-success/5 rounded-xl p-8">
            <div className="text-center mb-8">
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Узнайте больше о технологии загородного 4G LTE интернета
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://cdn.poehali.dev/files/2997c079-7b43-4318-aa5d-443368a2d830.png" 
                alt="Схема подключения 4G LTE интернета: сигнал от базовой станции оператора через антенну к встроенному LTE-модему и Wi-Fi роутеру для обеспечения интернетом всех устройств" 
                className="max-w-full h-auto rounded-lg shadow-lg border"
                loading="lazy"
                width="800"
                height="400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tariffs Section */}
      <section id="tariffs" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Тарифная политика NetConnect</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {tariffs.map((tariff, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${index === 1 ? 'border-primary shadow-lg scale-105' : ''}`}>
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="px-4 py-1">Популярный</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle as="h3" className="text-2xl">{tariff.name}</CardTitle>
                  <div className="py-4">
                    <div className="text-4xl font-bold text-primary">{tariff.price}</div>
                    <div className="text-sm text-muted-foreground">₽/месяц</div>
                  </div>
                  <div className="flex items-center justify-center mb-4">
                    <Icon name={tariff.name === 'Премиум' ? 'Zap' : 'Wifi'} size={24} className="text-success mr-2" />
                    <span className="font-semibold">до {tariff.speed}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {tariff.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tariff.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <Icon name="Check" size={16} className="text-success mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-left text-muted-foreground space-y-4">
            <p>
              В компании NetConnect тарифы на интернет-подключение разрабатываются с учетом разнообразия условий подключения в различных районах Московской области и ближайших регионов, включая частные дома и дачи. Все представленные тарифные планы носят примерный характер, поскольку доступ к услугам различных операторов может отличаться, и реальные параметры скорости или стоимости могут немного варьироваться в зависимости от места подключения.
            </p>
            <div className="bg-gradient-to-r from-primary/10 to-success/10 border-l-4 border-primary rounded-r-lg p-6 my-6">
              <p className="text-lg font-medium leading-relaxed">
                ⭐ <strong>Особое внимание мы уделяем спутниковому интернету</strong>, который является критически важным для подключения интернет на даче, в загородных домах и удалённых объектах, где традиционные сети недоступны или нестабильны. Тарифы на спутниковый интернет подбираются индивидуально под конкретные задачи клиента, исходя из особенностей его объекта и требований к надежности соединения.
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Примеры индивидуальных задач для спутникового интернета:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Icon name="Camera" size={16} className="text-success mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Системы видеонаблюдения и охраны объектов</strong> — круглосуточная передача данных без перебоев, чтобы обеспечить постоянный контроль и оперативное реагирование.</span>
                </li>
                <li className="flex items-start">
                  <Icon name="AlertTriangle" size={16} className="text-success mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Системы пожаротушения и датчики безопасности</strong> — бесперебойная передача сигналов датчиков, предотвращение ложных срабатываний и своевременное уведомление служб экстренной помощи.</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Shield" size={16} className="text-success mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Датчики проникновения и умный дом</strong> — надежное соединение для автоматизации процессов и удаленного управления системами безопасности.</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Building" size={16} className="text-success mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Критически важные корпоративные задачи</strong> — резервное подключение для обеспечения работы офисов, филиалов и удаленных объектов в условиях перебоев связи.</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-success/10 to-secondary/10 border-l-4 border-success rounded-r-lg p-6 my-6">
              <p className="text-lg font-medium leading-relaxed">
                🛡️ <strong>Благодаря резервному подключению через спутниковый интернет</strong>, наши клиенты получают защиту от глушения и перебоев сигнала, что обеспечивает постоянную онлайн-связь и стабильный поток данных даже в экстремальных условиях.
              </p>
            </div>
            <p>
              Таким образом, тарифы NetConnect позволяют клиентам гибко выбирать оптимальное решение для подключения интернет на даче, подключения интернет в Подмосковье и подключения интернет в Московской области, сочетая скорость, надежность и стоимость в зависимости от конкретного расположения объекта и его потребностей. Наш подход обеспечивает максимальную стабильность работы интернета, вне зависимости от условий и задач, которые стоят перед пользователем.
            </p>
          </div>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section id="coverage" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Карта покрытия интернета в Московской области</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Мы предоставляем доступ к беспроводному и высокоскоростному доступу к интернет в различных районах Московской области, включая крупные города, пригороды, дачи и удалённые населённые пункты.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="bg-card border rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center">Основные регионы и города <span className="text-muted-foreground text-lg">(список минимальный, для примера)</span></h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
                {[
                  'Москва', 'Подольск', 'Красногорск', 'Химки', 'Мытищи', 'Люберцы',
                  'Домодедово', 'Сергиев Посад', 'Коломна', 'Пушкино', 'Зеленоград', 'Щёлково',
                  'Видное', 'Дубна', 'Истра', 'Орехово-Зуево', 'Клин', 'Фрязино',
                  'Лобня', 'Ногинск', 'Реутов', 'Красноармейск', 'Дмитров', 'Серпухов',
                  'Егорьевск', 'Лыткарино', 'Солнечногорск', 'Жуковский', 'Старая Купавна',
                  'Бронницы', 'Чехов', 'Кашира'
                ].map((city) => (
                  <a
                    key={city}
                    href={`/city/${generateCitySlug(city)}`}
                    className="bg-accent/30 rounded-lg p-3 border hover:bg-accent/50 transition-colors group"
                  >
                    <div className="flex items-center justify-center">
                      <Icon name="MapPin" size={16} className="text-success mr-2" />
                      <span className="font-medium group-hover:text-primary transition-colors">{city}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-muted/50 border rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <Icon name="Info" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    <strong>Обратите внимание:</strong> полную карту покрытия мы не публикуем, так как в разных районах существуют различные тарифные зоны, а также разный уровень приема связи и сигналов, который может незначительно отличаться от места к месту.
                  </p>
                  <p>
                    На самом деле, покрытие осуществляется по всей территории Московской области, поэтому даже на самой удаленной даче или на удаленном складе связь работает.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary/10 border-2 border-primary/20 rounded-lg p-8">
              <div className="text-center">
                <Icon name="Phone" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Получите персональную консультацию</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Для получения подробной информации о качестве и скорости работы сети конкретно на вашем объекте, рекомендуем обратиться по телефону. Наши специалисты в индивидуальном режиме предоставят развернутую консультацию и помогут подобрать оптимальный тариф.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                  <div className="bg-card border rounded-lg p-4 flex items-center space-x-3">
                    <Icon name="Phone" size={24} className="text-success" />
                    <div className="text-left">
                      <div className="font-semibold text-lg">+7 (901) 500-00-78</div>
                      <div className="text-sm text-muted-foreground">Основная линия</div>
                    </div>
                  </div>
                  <div className="bg-card border rounded-lg p-4 flex items-center space-x-3">
                    <Icon name="Phone" size={24} className="text-success" />
                    <div className="text-left">
                      <div className="font-semibold text-lg">+7 (901) 500-00-87</div>
                      <div className="text-sm text-muted-foreground">Дополнительная линия</div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">Консультации и подключение • 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Стоимость подключения</h2>
              <p className="text-xl text-muted-foreground">
                Профессиональные решения для надежного интернета
              </p>
            </div>
            
            <div className="bg-card border rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-6">
                    <Icon name="Package" size={32} className="text-primary mr-4" />
                    <h3 className="text-2xl font-bold">В пакет оборудования входит:</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Icon name="Wifi" size={20} className="text-success mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Wi-Fi роутер нового поколения с:</h4>
                        <ul className="text-muted-foreground space-y-2 ml-4">
                          <li>• системой расширенной безопасности пользователя (защита от внешних угроз и несанкционированного доступа)</li>
                          <li>• возможностью подключения дополнительных опций (например, усилителей сигнала, IPTV, резервных каналов связи)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center mb-6">
                    <Icon name="Banknote" size={32} className="text-success mr-4" />
                    <h3 className="text-2xl font-bold">От 16 800 рублей</h3>
                  </div>
                  
                  <div className="bg-success/10 border border-success/20 rounded-lg p-6 mb-6">
                    <h4 className="font-semibold text-success mb-3">Стоимость минимального пакета подключения начинается от 16 800 рублей.</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold mb-3">Мы гарантируем:</h4>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Icon name="CheckCircle" size={16} className="text-success mr-3" />
                        <span>профессиональную установку и настройку</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="CheckCircle" size={16} className="text-success mr-3" />
                        <span>подбор оптимального тарифа под ваши нужды</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="CheckCircle" size={16} className="text-success mr-3" />
                        <span>консультационную и техническую поддержку после подключения</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border-t pt-6 mt-8">
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                  <div className="flex items-start">
                    <Icon name="Phone" size={24} className="text-primary mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Свяжитесь с нами, и мы подготовим для вас персональное решение по организации интернета на вашем объекте.</h4>
                      <p className="text-muted-foreground">Наши специалисты проведут бесплатную консультацию и предложат оптимальный вариант подключения.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Link to Equipment Page */}
              <div className="mt-8">
                <a 
                  href="/equipment"
                  className="block bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 border-2 border-blue-200 hover:border-blue-400 rounded-xl p-8 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon name="Router" size={32} className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-blue-900 mb-2">Примеры устанавливаемого оборудования</h4>
                        <p className="text-blue-700">Посмотрите антенны, роутеры и другое оборудование, которое мы используем</p>
                      </div>
                    </div>
                    <Icon name="ChevronRight" size={32} className="text-blue-500 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineer Services Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Прайс-лист на услуги инженера
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Полный перечень инженерных работ и их стоимость. Качественное подключение и настройка оборудования.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Стандартные работы */}
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                  <CardTitle className="text-xl flex items-center gap-3">
                    <span className="bg-white text-blue-600 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    Стандартные работы
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-0">
                    <div className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Выезд инженера на объект, диагностика сети, замер сигнала</span>
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800 font-semibold">2000 ₽</Badge>
                      </div>
                    </div>
                    <div className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Установка кронштейна для антенны MIMO на фасаде здания</span>
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800 font-semibold">2000 ₽</Badge>
                      </div>
                    </div>
                    <div className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Подключение и настройка антенны MIMO</span>
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800 font-semibold">2500 ₽</Badge>
                      </div>
                    </div>
                    <div className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Подключение и настройка wi-fi роутера</span>
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800 font-semibold">1500 ₽</Badge>
                      </div>
                    </div>
                    <div className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Прокладка кабеля</span>
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800 font-semibold">150 ₽/м</Badge>
                      </div>
                    </div>
                    <div className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Сверление отверстия для вывода кабеля в оконной раме</span>
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800 font-semibold">500 ₽</Badge>
                      </div>
                    </div>
                    <div className="p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Сверление отверстия для вывода кабеля в стене</span>
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800 font-semibold">1000 ₽</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Дополнительные работы */}
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
                  <CardTitle className="text-xl flex items-center gap-3">
                    <span className="bg-white text-indigo-600 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    Дополнительные работы
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-0">
                    <div className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Высотные работы</span>
                        <Badge variant="secondary" className="bg-indigo-100 text-indigo-800 font-semibold">от 1500 ₽</Badge>
                      </div>
                    </div>
                    <div className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Настройка "бесшовного" соединения (несколько роутеров в одну сеть)</span>
                        <Badge variant="secondary" className="bg-indigo-100 text-indigo-800 font-semibold">от 10000 ₽</Badge>
                      </div>
                    </div>
                    <div className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Обжим сетевого кабеля</span>
                        <Badge variant="secondary" className="bg-indigo-100 text-indigo-800 font-semibold">100 ₽/шт.</Badge>
                      </div>
                    </div>
                    <div className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Настройка оборудования клиента</span>
                        <Badge variant="secondary" className="bg-indigo-100 text-indigo-800 font-semibold">5000 ₽</Badge>
                      </div>
                    </div>
                    <div className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Установка спутниковой антенны</span>
                        <Badge variant="secondary" className="bg-indigo-100 text-indigo-800 font-semibold">8000 ₽</Badge>
                      </div>
                    </div>
                    <div className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Установка антенного усилителя мобильной связи</span>
                        <Badge variant="secondary" className="bg-indigo-100 text-indigo-800 font-semibold">6000 ₽</Badge>
                      </div>
                    </div>
                    <div className="p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Прокладка высокочастотного кабеля</span>
                        <Badge variant="secondary" className="bg-indigo-100 text-indigo-800 font-semibold">500 ₽/м</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Дополнительная информация */}
            <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-amber-800 mb-3">Важная информация</h3>
              <ul className="text-amber-700 space-y-2">
                <li>• Все цены указаны с учетом работы инженера</li>
                <li>• Стоимость материалов оплачивается отдельно</li>
                <li>• Точную стоимость работ уточняйте при заказе</li>
                <li>• Гарантия на выполненные работы — 12 месяцев</li>
              </ul>
            </div>


          </div>
        </div>
      </section>

      {/* eSIM Section */}
      <section id="esim" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Туристические eSIM — интернет без границ за 5 минут</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Компания NetConnect предлагает туристические eSIM, которые можно подключить всего за 5 минут на любой телефон с поддержкой eSIM. Забудьте про физические SIM-карты, роуминг и ограничения операторов — оставайтесь на связи в любой точке мира.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold mb-8">Что мы предлагаем:</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Icon name="MapPin" size={24} className="text-primary mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Региональные eSIM</h4>
                      <p className="text-muted-foreground">для конкретных стран или частей мира (например, только Европа или только Азия).</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Icon name="Globe" size={24} className="text-primary mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Международные eSIM</h4>
                      <p className="text-muted-foreground">работают в нескольких странах одновременно, идеально для путешествий по нескольким странам или по всей планете.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Icon name="Earth" size={24} className="text-primary mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Глобальные eSIM</h4>
                      <p className="text-muted-foreground">единая карта для всех стран мира, без смены SIM.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-card border rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Преимущества наших туристических eSIM:</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Icon name="Clock" size={20} className="text-success mr-3 flex-shrink-0" />
                    <span><strong>Мгновенная активация</strong> — подключение за 5 минут.</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Icon name="Smartphone" size={20} className="text-success mr-3 flex-shrink-0" />
                    <span><strong>Поддержка всех современных устройств:</strong> смартфоны, планшеты, модемы, роутеры.</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Icon name="DollarSign" size={20} className="text-success mr-3 flex-shrink-0" />
                    <span><strong>Гибкие тарифы</strong> — оплачиваете только нужный трафик.</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Icon name="Wifi" size={20} className="text-success mr-3 flex-shrink-0" />
                    <span><strong>Надёжная связь</strong> и высокая скорость интернета.</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-primary to-success text-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">С туристическими eSIM от NetConnect вы всегда на связи</h3>
              <p className="text-lg mb-6 opacity-90">в командировке, путешествии или отпуске по всему миру.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <span className="text-2xl">📲</span>
                <span className="text-xl font-semibold">Подключайтесь прямо сейчас и наслаждайтесь интернетом без границ!</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">О компании NetConnect</h2>
            <div className="text-lg text-muted-foreground mb-8 leading-relaxed space-y-4 text-left">
              <p>
                NetConnect — это ваш надежный партнер в мире современных телекоммуникаций. Мы предоставляем быстрый, стабильный и безопасный интернет для жителей Московской области и ближайших регионов, обеспечивая удобное подключение как для частных пользователей, так и для бизнеса любого масштаба.
              </p>
              <p>
                Мы используем передовые беспроводные технологии и спутниковый интернет, чтобы гарантировать доступ к сети даже в труднодоступных районах. Благодаря инновационным решениям наши клиенты получают высокую скорость соединения и непрерывный доступ к интернету, независимо от погодных условий или технических ограничений локальных сетей.
              </p>
              <p>
                Особое преимущество NetConnect — эффективная защита от глушения интернет-сигнала. Мы внедряем резервное подключение через спутниковый интернет, что обеспечивает постоянную онлайн-связь даже при попытках блокировки сигнала или перебоях в локальных сетях.
              </p>
              <p>
                С NetConnect вы получаете не просто интернет, а современное, надежное и адаптированное под ваши потребности решение связи, позволяющее работать, учиться и развлекаться без ограничений.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-success mb-2">5+</div>
                <div className="text-muted-foreground">лет на рынке</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success mb-2">1500+</div>
                <div className="text-muted-foreground">довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success mb-2">99%</div>
                <div className="text-muted-foreground">время безотказной работы</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами для подключения или консультации
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <Icon name="Phone" size={32} className="text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-4">Телефон</h3>
              <div className="space-y-3">
                <div className="space-y-2">
                  <p className="text-muted-foreground">+7 (901) 500-00-78</p>
                  <a 
                    href="https://wa.me/79015000078" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1 bg-green-500 text-white text-sm rounded-md hover:bg-green-600 transition-colors"
                  >
                    <Icon name="MessageCircle" size={16} className="mr-1" />
                    WhatsApp
                  </a>
                </div>
                <div className="space-y-2">
                  <p className="text-muted-foreground">+7 (901) 500-00-87</p>
                  <a 
                    href="https://wa.me/79015000087" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1 bg-green-500 text-white text-sm rounded-md hover:bg-green-600 transition-colors"
                  >
                    <Icon name="MessageCircle" size={16} className="mr-1" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Icon name="Mail" size={32} className="text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-4">Email</h3>
              <p className="text-muted-foreground">info@mosoblconnect.ru</p>
            </div>
            
            <div className="text-center">
              <Icon name="MapPin" size={32} className="text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-4">Адрес</h3>
              <p className="text-muted-foreground">Москва, Партийный пер., дом 1</p>
            </div>
            
            <div className="text-center">
              <Icon name="Clock" size={32} className="text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-4">Режим работы</h3>
              <p className="text-muted-foreground">24/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Satellite" size={24} className="text-primary" />
              <span className="text-lg font-semibold">NetConnect</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2015 NetConnect. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
      
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/79015000078" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110"
          title="Написать в WhatsApp"
        >
          <Icon name="MessageCircle" size={24} />
        </a>
      </div>
    </div>
  );
};

export default Index;