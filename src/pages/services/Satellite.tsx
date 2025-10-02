import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useSEO } from '@/hooks/useSEO';

const Satellite = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useSEO({
    title: 'Спутниковый интернет Starlink в МО - от 3990₽/мес | NetConnect',
    description: 'Подключение спутникового интернета Starlink и классического спутникового интернета в Московской области. Скорость до 220 Мбит/с, 99.9% покрытие. ☎ +7 (901) 500-00-78',
    keywords: 'спутниковый интернет, starlink, старлинк, интернет через спутник, интернет в любой точке, спутниковый интернет московская область',
    canonical: 'https://mosoblconnect.ru/services/satellite',
    ogTitle: 'Спутниковый интернет Starlink в Московской области',
    ogDescription: 'Starlink и классический спутниковый интернет. Скорость до 220 Мбит/с, покрытие 99.9%. Тарифы от 3990₽/мес.',
    ogImage: 'https://cdn.mosoblconnect.ru/files/0b95440d-0b84-41b8-8404-418760cb07a4.jpg'
  });

  const advantages = [
    {
      icon: 'Globe',
      title: 'Покрытие 99%',
      description: 'Доступ к интернету в самых отдаленных районах области'
    },
    {
      icon: 'Zap',
      title: 'Низкая задержка',
      description: 'Современные спутники с минимальным пингом'
    },
    {
      icon: 'Shield',
      title: 'Защита от помех',
      description: 'Стабильное соединение в любых погодных условиях'
    },
    {
      icon: 'Settings',
      title: 'Простая установка',
      description: 'Профессиональная установка антенны за один день'
    }
  ];

  const packages = [
    {
      name: 'Спутник Старт',
      speed: '25 Мбит/с',
      traffic: '50 ГБ',
      price: '1890',
      description: 'Базовый пакет для интернет-серфинга и социальных сетей',
      features: ['50 ГБ трафика', 'Безлимит ночью (01:00-07:00)', 'Антенна в комплекте', 'Поддержка 24/7']
    },
    {
      name: 'Спутник Комфорт',
      speed: '50 Мбит/с', 
      traffic: '150 ГБ',
      price: '2890',
      description: 'Оптимальный выбор для семьи: видео, работа, развлечения',
      features: ['150 ГБ трафика', 'Безлимит ночью', 'Профессиональная антенна', 'Приоритетная поддержка', 'Резерв трафика']
    },
    {
      name: 'Спутник Безлимит',
      speed: '100 Мбит/с',
      traffic: 'Безлимит',
      price: '4290',
      description: 'Безлимитный интернет для офисов и требовательных пользователей',
      features: ['Безлимитный трафик', 'Максимальная скорость', 'VIP поддержка', 'Коммерческое оборудование', 'SLA 99.5%']
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
              <Icon name="Satellite" size={32} className="text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Спутниковый интернет
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Надежное покрытие в отдаленных районах Московской области через современные спутниковые технологии
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2 bg-success/10 text-success border-success/20">
                <Icon name="Globe" size={16} className="mr-2" />
                Покрытие 99%
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-success/10 text-success border-success/20">
                <Icon name="Zap" size={16} className="mr-2" />
                До 100 Мбит/с
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-success/10 text-success border-success/20">
                <Icon name="Shield" size={16} className="mr-2" />
                Защита от помех
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Преимущества спутникового интернета</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <Icon name={advantage.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{advantage.title}</h3>
                  <p className="text-muted-foreground text-sm">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Пакеты спутникового интернета</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 ${
                index === 1 ? 'ring-2 ring-primary scale-105' : ''
              }`}>
                {index === 1 && (
                  <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                    Оптимальный
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <div className="text-4xl font-bold text-primary mb-2">
                      от {pkg.price} ₽<span className="text-lg font-normal text-muted-foreground">/мес</span>
                    </div>
                    <div className="text-lg font-semibold text-secondary">{pkg.speed}</div>
                    <div className="text-md text-muted-foreground">{pkg.traffic}</div>
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
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Как работает спутниковый интернет</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Современные технологии</h3>
                <p className="text-muted-foreground mb-6">
                  Мы используем спутники нового поколения на низких орбитах, что значительно снижает задержку 
                  и увеличивает скорость передачи данных. Это делает спутниковый интернет пригодным для 
                  видеозвонков, онлайн-игр и потокового видео.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="Satellite" size={20} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">LEO-спутники</h4>
                      <p className="text-sm text-muted-foreground">Низкие орбиты для минимальной задержки</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Wifi" size={20} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Широкополосный доступ</h4>
                      <p className="text-sm text-muted-foreground">Высокие скорости до 100 Мбит/с</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Shield" size={20} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Надежность</h4>
                      <p className="text-sm text-muted-foreground">Работа в любых погодных условиях</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 text-center">
                <Icon name="Satellite" size={80} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Профессиональная установка</h3>
                <p className="text-muted-foreground">
                  Наши специалисты установят и настроят спутниковую антенну, обеспечив оптимальный прием сигнала
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Examples Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Примеры установки</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Профессиональная установка спутниковых антенн в частных домах и коттеджах Московской области
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Example 1: Gazprom Installation */}
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img 
                    src="https://cdn.poehali.dev/files/28745a89-08ff-47fb-bc74-ce917505fc77.png" 
                    alt="Установка спутникового интернета Газпром" 
                    className="w-full h-64 object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-success/90 text-white">
                    Профессиональная установка
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Дом в лесной зоне</h3>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Icon name="CheckCircle" size={16} className="text-success mr-2" />
                      <span>Спутниковая антенна Газпром</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="CheckCircle" size={16} className="text-success mr-2" />
                      <span>Скорость до 50 Мбит/с</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="CheckCircle" size={16} className="text-success mr-2" />
                      <span>Установка на опоре</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Надежное подключение в отдаленном районе с использованием профессионального оборудования
                  </p>
                </CardContent>
              </Card>

              {/* Example 2: Cottage Installation */}
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img 
                    src="https://cdn.poehali.dev/files/83a1b0e9-db7d-452a-8c86-d23a6aab4f87.png" 
                    alt="Установка спутникового интернета на коттедже" 
                    className="w-full h-64 object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary/90 text-white">
                    Фасадный монтаж
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Загородный коттедж</h3>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Icon name="CheckCircle" size={16} className="text-success mr-2" />
                      <span>Монтаж на стену дома</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="CheckCircle" size={16} className="text-success mr-2" />
                      <span>Оптимальный угол установки</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="CheckCircle" size={16} className="text-success mr-2" />
                      <span>Скорость до 100 Мбит/с</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Установка на деревянном доме с учетом ландшафта и оптимального направления на спутник
                  </p>
                </CardContent>
              </Card>

              {/* Example 3: Roof Installation */}
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img 
                    src="https://cdn.poehali.dev/files/0fca8872-0b4f-4613-ae6c-f9c2727b5a67.png" 
                    alt="Установка спутникового интернета на крыше" 
                    className="w-full h-64 object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-secondary/90 text-white">
                    Кровельная установка
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Частный дом</h3>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Icon name="CheckCircle" size={16} className="text-success mr-2" />
                      <span>Монтаж на крыше</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="CheckCircle" size={16} className="text-success mr-2" />
                      <span>Максимальный уровень сигнала</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="CheckCircle" size={16} className="text-success mr-2" />
                      <span>Защита от препятствий</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Кровельная установка обеспечивает лучший обзор неба и стабильный прием сигнала в любое время
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                <CardContent className="p-8">
                  <Icon name="Wrench" size={48} className="text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-3">Профессиональная установка под ключ</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Наши специалисты выполнят установку спутниковой антенны с учетом особенностей вашего участка, 
                    настроят оборудование и проверят качество сигнала
                  </p>
                  <div className="flex flex-wrap justify-center gap-6 text-sm">
                    <div className="flex items-center">
                      <Icon name="Check" size={18} className="text-success mr-2" />
                      <span>Выезд в день заявки</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Check" size={18} className="text-success mr-2" />
                      <span>Гарантия 2 года</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Check" size={18} className="text-success mr-2" />
                      <span>Настройка оборудования</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Подключите спутниковый интернет уже сегодня</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Получите доступ к высокоскоростному интернету даже в самых отдаленных районах
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
              © 2024 NetConnect. Спутниковый интернет в Московской области
            </div>
          </div>
        </div>
      </footer>
      <WhatsAppButton />
    </div>
  );
};

export default Satellite;