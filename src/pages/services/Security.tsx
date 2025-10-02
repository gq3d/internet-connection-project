import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useSEO } from '@/hooks/useSEO';

const Security = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useSEO({
    title: 'Охранные системы и сигнализация в Московской области | NetConnect',
    description: 'Установка охранных систем и сигнализации в Московской области. Проводные и беспроводные системы, GSM мониторинг, пультовая охрана. Комплекты от 25 000₽. ☎ +7 (901) 500-00-78',
    keywords: 'охранная сигнализация московская область, установка сигнализации, охранная система, gsm сигнализация, пультовая охрана, беспроводная сигнализация',
    canonical: 'https://mosoblconnect.ru/services/security',
    ogTitle: 'Охранные системы в Московской области - установка сигнализации',
    ogDescription: 'Профессиональная установка охранных систем. Беспроводная сигнализация, GSM мониторинг, пультовая охрана. Комплекты от 25 000₽.',
    ogImage: 'https://cdn.mosoblconnect.ru/files/0b95440d-0b84-41b8-8404-418760cb07a4.jpg'
  });

  const systems = [
    {
      icon: 'Video',
      title: 'Видеонаблюдение',
      description: 'HD камеры с записью, удаленным доступом и облачным хранением',
      features: ['Камеры Full HD/4K', 'Ночное видение', 'Детекция движения', 'Мобильное приложение', 'Облачное хранение']
    },
    {
      icon: 'Shield',
      title: 'Охранная сигнализация',
      description: 'Комплексная система безопасности с датчиками и пультовой охраной',
      features: ['Датчики движения', 'Датчики открытия', 'Сирена и световая индикация', 'SMS уведомления', 'Пультовая охрана']
    },
    {
      icon: 'Lock',
      title: 'Контроль доступа',
      description: 'Электронные замки, домофоны и системы идентификации',
      features: ['Электронные замки', 'Карты доступа/брелоки', 'Биометрия', 'Журнал событий', 'Удаленное управление']
    },
    {
      icon: 'Flame',
      title: 'Пожарная безопасность',
      description: 'Датчики дыма, температуры и автоматическое пожаротушение',
      features: ['Дымовые датчики', 'Тепловые датчики', 'Ручные извещатели', 'Звуковое оповещение', 'Интеграция с МЧС']
    }
  ];

  const packages = [
    {
      name: 'Базовая безопасность',
      price: '25 000',
      description: 'Минимальный комплект для защиты квартиры или небольшого дома',
      features: ['4 HD камеры', '2 датчика движения', 'Базовая сигнализация', 'Мобильное приложение', 'Установка и настройка']
    },
    {
      name: 'Комплексная защита',
      price: '65 000',
      description: 'Полная система безопасности для дома или офиса',
      features: ['8 камер 4K', 'Охранная сигнализация', 'Контроль доступа', 'Пожарные датчики', 'Облачное хранение', 'Техподдержка 24/7']
    },
    {
      name: 'Премиум система',
      price: '150 000',
      description: 'Профессиональная система для крупных объектов',
      features: ['16+ камер с аналитикой', 'Периметровая защита', 'Биометрический доступ', 'Интеграция с умным домом', 'Пультовая охрана', 'VIP поддержка']
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
              <a href="/" className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">NetConnect</a>
            </div>
            
            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-4">
              <a href="/#services" className="text-sm font-medium hover:text-success transition-colors">Услуги</a>
              <a href="/#tariffs" className="text-sm font-medium hover:text-success transition-colors">Тарифы</a>
              <a href="/#pricing" className="text-sm font-medium hover:text-success transition-colors">Стоимость</a>
              <a href="/#esim" className="text-sm font-medium hover:text-success transition-colors">eSIM</a>
              <a href="/#coverage" className="text-sm font-medium hover:text-success transition-colors">Покрытие</a>
              <a href="/#about" className="text-sm font-medium hover:text-success transition-colors">О компании</a>
              <a href="/#contacts" className="text-sm font-medium hover:text-success transition-colors">Контакты</a>
              <a 
                href="tel:+79015000078" 
                className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                <Icon name="Phone" size={16} className="mr-2" />
                +7 (901) 500-00-78
              </a>
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
                <a href="/#services" className="block py-2 text-sm font-medium hover:text-success transition-colors">Услуги</a>
                <a href="/#tariffs" className="block py-2 text-sm font-medium hover:text-success transition-colors">Тарифы</a>
                <a href="/#pricing" className="block py-2 text-sm font-medium hover:text-success transition-colors">Стоимость</a>
                <a href="/#esim" className="block py-2 text-sm font-medium hover:text-success transition-colors">eSIM</a>
                <a href="/#coverage" className="block py-2 text-sm font-medium hover:text-success transition-colors">Покрытие</a>
                <a href="/#about" className="block py-2 text-sm font-medium hover:text-success transition-colors">О компании</a>
                <a href="/#contacts" className="block py-2 text-sm font-medium hover:text-success transition-colors">Контакты</a>
                <a 
                  href="tel:+79015000078" 
                  className="block w-full mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium text-center"
                >
                  <Icon name="Phone" size={16} className="inline mr-2" />
                  +7 (901) 500-00-78
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Icon name="Shield" size={32} className="text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Системы безопасности
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Комплексная защита объектов: видеонаблюдение, охранные системы и контроль доступа
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2 bg-success/10 text-success border-success/20">
                <Icon name="Video" size={16} className="mr-2" />
                HD/4K камеры
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-success/10 text-success border-success/20">
                <Icon name="Shield" size={16} className="mr-2" />
                24/7 мониторинг
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-success/10 text-success border-success/20">
                <Icon name="Smartphone" size={16} className="mr-2" />
                Мобильное приложение
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Systems */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Системы безопасности</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {systems.map((system, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                      <Icon name={system.icon} size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">{system.title}</h3>
                      <p className="text-muted-foreground mb-4">{system.description}</p>
                      <ul className="space-y-2">
                        {system.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm">
                            <Icon name="Check" size={16} className="text-success mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Пакеты безопасности</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 ${
                index === 1 ? 'ring-2 ring-primary scale-105' : ''
              }`}>
                {index === 1 && (
                  <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                    Популярный
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <div className="text-4xl font-bold text-primary mb-2">
                      от {pkg.price} ₽<span className="text-lg font-normal text-muted-foreground">*</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-6">{pkg.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
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
          <p className="text-center text-sm text-muted-foreground mt-8">* Цена указана за базовый комплект без учета монтажа</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Преимущества наших систем</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Современные технологии</h3>
                <p className="text-muted-foreground mb-6">
                  Используем только проверенное оборудование ведущих мировых производителей. 
                  Все системы интегрируются между собой и управляются через единое приложение.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="Smartphone" size={20} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Мобильное управление</h4>
                      <p className="text-sm text-muted-foreground">Контроль системы с любой точки мира</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Cloud" size={20} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Облачное хранение</h4>
                      <p className="text-sm text-muted-foreground">Надежное хранение записей в облаке</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Bell" size={20} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Мгновенные уведомления</h4>
                      <p className="text-sm text-muted-foreground">SMS и push-уведомления о событиях</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 text-center">
                <Icon name="Shield" size={80} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Профессиональная установка</h3>
                <p className="text-muted-foreground mb-4">
                  Наши инженеры имеют сертификаты и многолетний опыт работы с системами безопасности
                </p>
                <div className="flex items-center justify-center space-x-4 text-sm">
                  <div className="flex items-center">
                    <Icon name="Award" size={16} className="text-success mr-1" />
                    <span>Сертифицированы</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Clock" size={16} className="text-success mr-1" />
                    <span>5+ лет опыта</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Armed Security Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Icon name="ShieldAlert" size={32} className="text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Вооружённая охрана премиум-класса
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Профессиональная защита частных домовладений и коттеджных посёлков в Московской области
              </p>
            </div>

            {/* Gallery */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="relative overflow-hidden rounded-xl shadow-lg group">
                <img 
                  src="/img/95a782e0-6509-497c-baf4-462b23cc7fe2.jpg" 
                  alt="Профессиональный охранник" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <p className="text-white font-semibold p-4">Лицензированные специалисты</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-lg group">
                <img 
                  src="/img/4fe3dca8-ba1d-4984-a307-0d994a66e08b.jpg" 
                  alt="Центр мониторинга" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <p className="text-white font-semibold p-4">Центр мониторинга 24/7</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-lg group">
                <img 
                  src="/img/f7b0d163-1f30-4e6a-9a6c-1f67cb6ff35b.jpg" 
                  alt="Охрана объектов" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <p className="text-white font-semibold p-4">Элитные объекты</p>
                </div>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Left Column - Services */}
              <div className="space-y-6">
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                        <Icon name="Users" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Охрана объектов недвижимости</h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <Icon name="Check" size={16} className="text-success mr-3 mt-0.5 flex-shrink-0" />
                            <span>Круглосуточная охрана частных домов и коттеджей</span>
                          </li>
                          <li className="flex items-start">
                            <Icon name="Check" size={16} className="text-success mr-3 mt-0.5 flex-shrink-0" />
                            <span>Патрулирование территории коттеджных поселков</span>
                          </li>
                          <li className="flex items-start">
                            <Icon name="Check" size={16} className="text-success mr-3 mt-0.5 flex-shrink-0" />
                            <span>Контроль периметра и въездных групп</span>
                          </li>
                          <li className="flex items-start">
                            <Icon name="Check" size={16} className="text-success mr-3 mt-0.5 flex-shrink-0" />
                            <span>Сопровождение массовых мероприятий</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-full flex-shrink-0">
                        <Icon name="UserCheck" size={24} className="text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Личная охрана VIP-класса</h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <Icon name="Check" size={16} className="text-success mr-3 mt-0.5 flex-shrink-0" />
                            <span>Персональная защита руководителей и VIP-персон</span>
                          </li>
                          <li className="flex items-start">
                            <Icon name="Check" size={16} className="text-success mr-3 mt-0.5 flex-shrink-0" />
                            <span>Сопровождение и обеспечение безопасности</span>
                          </li>
                          <li className="flex items-start">
                            <Icon name="Check" size={16} className="text-success mr-3 mt-0.5 flex-shrink-0" />
                            <span>Конфиденциальность гарантирована</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Features */}
              <div className="space-y-6">
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                        <Icon name="Shield" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Профессиональные охранники</h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <Icon name="Check" size={16} className="text-success mr-3 mt-0.5 flex-shrink-0" />
                            <span>Лицензированные специалисты с военным и правоохранительным опытом</span>
                          </li>
                          <li className="flex items-start">
                            <Icon name="Check" size={16} className="text-success mr-3 mt-0.5 flex-shrink-0" />
                            <span>Постоянная физическая и огневая подготовка</span>
                          </li>
                          <li className="flex items-start">
                            <Icon name="Check" size={16} className="text-success mr-3 mt-0.5 flex-shrink-0" />
                            <span>Разрешение на ношение и применение оружия</span>
                          </li>
                          <li className="flex items-start">
                            <Icon name="Check" size={16} className="text-success mr-3 mt-0.5 flex-shrink-0" />
                            <span>Строгий отбор и проверка СБ</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-success/10 rounded-full flex-shrink-0">
                        <Icon name="Radar" size={24} className="text-success" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Комплексный подход</h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <Icon name="Check" size={16} className="text-success mr-3 mt-0.5 flex-shrink-0" />
                            <span>Оценка рисков и разработка индивидуального плана безопасности</span>
                          </li>
                          <li className="flex items-start">
                            <Icon name="Check" size={16} className="text-success mr-3 mt-0.5 flex-shrink-0" />
                            <span>Интеграция с системами видеонаблюдения и сигнализации</span>
                          </li>
                          <li className="flex items-start">
                            <Icon name="Check" size={16} className="text-success mr-3 mt-0.5 flex-shrink-0" />
                            <span>Взаимодействие с правоохранительными органами</span>
                          </li>
                          <li className="flex items-start">
                            <Icon name="Check" size={16} className="text-success mr-3 mt-0.5 flex-shrink-0" />
                            <span>Гибкие графики охраны: постоянная, временная, событийная</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <Card className="hover:shadow-lg transition-all duration-300 border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                    <Icon name="Clock" size={28} className="text-primary" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">24/7</h4>
                  <p className="text-sm text-muted-foreground">Круглосуточная охрана без выходных</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all duration-300 border-success/20">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-success/10 rounded-full mb-4">
                    <Icon name="Award" size={28} className="text-success" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Лицензия</h4>
                  <p className="text-sm text-muted-foreground">Все необходимые разрешения и аккредитации</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all duration-300 border-secondary/20">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-secondary/10 rounded-full mb-4">
                    <Icon name="Zap" size={28} className="text-secondary" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Быстрая реакция</h4>
                  <p className="text-sm text-muted-foreground">Экстренное реагирование на угрозы</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all duration-300 border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                    <Icon name="Lock" size={28} className="text-primary" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Конфиденциальность</h4>
                  <p className="text-sm text-muted-foreground">NDA и полная защита данных</p>
                </CardContent>
              </Card>
            </div>

            {/* CTA */}
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Получите консультацию специалиста по безопасности</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Мы проведем анализ объекта, оценим риски и разработаем индивидуальный план защиты. 
                  Конфиденциальность гарантирована.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <div className="flex items-center space-x-2 text-success font-semibold text-lg">
                    <Icon name="Phone" size={20} />
                    <a href="tel:+79015000078" className="hover:underline">+7 (901) 500-00-78</a>
                  </div>
                  <div className="flex items-center space-x-2 text-success font-semibold text-lg">
                    <Icon name="Phone" size={20} />
                    <a href="tel:+79015000087" className="hover:underline">+7 (901) 500-00-87</a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Защитите свой объект уже сегодня</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Получите бесплатную консультацию по выбору системы безопасности для вашего объекта
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-success font-semibold">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={18} />
                <a href="tel:+79015000078" className="hover:underline">+7 (901) 500-00-78</a>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={18} />
                <a href="tel:+79015000087" className="hover:underline">+7 (901) 500-00-87</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/5 py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Satellite" size={24} className="text-primary" />
              <span className="text-lg font-semibold text-primary">NetConnect</span>
            </div>
            <div className="text-sm text-muted-foreground text-center md:text-right">
              © 2024 NetConnect. Системы безопасности в Московской области
            </div>
          </div>
        </div>
      </footer>
      <WhatsAppButton />
    </div>
  );
};

export default Security;
