import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useSEO } from '@/hooks/useSEO';

const CellularBooster = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useSEO({
    title: 'Усиление сотовой связи в МО - от 18 000₽ | NetConnect',
    description: 'Усиление сотовой связи в Московской области. Репитеры GSM, 3G, 4G, 5G. Усиление сигнала всех операторов. Установка и настройка. ☎ +7 (901) 500-00-78',
    keywords: 'усиление сотовой связи, репитер gsm, усилитель сигнала, 4g репитер, 5g усилитель, усиление связи на даче',
    canonical: 'https://mosoblconnect.ru/services/cellular-booster',
    ogTitle: 'Усиление сотовой связи в Московской области',
    ogDescription: 'Репитеры GSM, 3G, 4G, 5G. Усиление сигнала всех операторов на доме и даче. Комплекты от 18 000₽.',
    ogImage: 'https://cdn.mosoblconnect.ru/files/0b95440d-0b84-41b8-8404-418760cb07a4.jpg'
  });

  const boosters = [
    {
      icon: 'Signal',
      title: 'Репитер GSM 900/1800',
      description: 'Усиление сигнала для голосовой связи всех операторов',
      gain: '+65 дБ',
      price: 'от 18 000 ₽',
      features: ['Поддержка всех операторов', 'Автоматическая настройка', 'ЖК дисплей', 'Защита от перегрузки']
    },
    {
      icon: 'Wifi',
      title: 'Репитер 3G/4G',
      description: 'Усиление интернета и мобильных данных',
      gain: '+70 дБ',
      price: 'от 25 000 ₽',
      features: ['Поддержка LTE', 'Высокая скорость передачи', 'Умное управление мощностью', 'Компактный размер']
    },
    {
      icon: 'Antenna',
      title: 'Репитер 5G',
      description: 'Усиление сигнала мобильной связи нового поколения',
      gain: '+75 дБ',
      price: 'от 45 000 ₽',
      features: ['Поддержка 5G NR', 'Сверхвысокие скорости', 'Низкие задержки', 'Футуристичный дизайн']
    },
    {
      icon: 'Building',
      title: 'Промышленный репитер',
      description: 'Мощные системы для больших зданий и сооружений',
      gain: '+80 дБ',
      price: 'от 85 000 ₽',
      features: ['Высокая мощность', 'Многополосная поддержка', 'Распределенная система', 'Мониторинг 24/7']
    }
  ];

  const operators = [
    { name: 'МТС', bands: ['900', '1800', '2100'] },
    { name: 'Билайн', bands: ['900', '1800', '2600'] },
    { name: 'МегаФон', bands: ['900', '1800', '2100'] },
    { name: 'Теле2', bands: ['1800', '2600'] },
    { name: 'Yota', bands: ['2600'] }
  ];

  const advantages = [
    {
      icon: 'TrendingUp',
      title: 'Усиление сигнала до 1000 раз',
      description: 'Значительное улучшение качества связи'
    },
    {
      icon: 'Battery',
      title: 'Экономия заряда батареи',
      description: 'Телефон работает дольше при сильном сигнале'
    },
    {
      icon: 'Zap',
      title: 'Увеличение скорости интернета',
      description: 'Быстрая загрузка и стабильное соединение'
    },
    {
      icon: 'Users',
      title: 'Поддержка множества устройств',
      description: 'Одновременная работа с несколькими телефонами'
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
              <Icon name="Signal" size={32} className="text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Усиление сотовой связи
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Репитеры и усилители сигнала для стабильной мобильной связи всех операторов
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2 bg-success/10 text-success border-success/20">
                <Icon name="Signal" size={16} className="mr-2" />
                Все операторы
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-success/10 text-success border-success/20">
                <Icon name="Zap" size={16} className="mr-2" />
                До 1000x усиление
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-success/10 text-success border-success/20">
                <Icon name="Settings" size={16} className="mr-2" />
                Простая установка
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Boosters */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Типы репитеров сотовой связи</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {boosters.map((booster, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                      <Icon name={booster.icon} size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold">{booster.title}</h3>
                        <span className="text-lg font-bold text-primary">{booster.price}</span>
                      </div>
                      <p className="text-muted-foreground mb-3">{booster.description}</p>
                      <div className="flex gap-4 mb-4 text-sm">
                        <div className="flex items-center text-secondary font-medium">
                          <Icon name="TrendingUp" size={16} className="mr-1" />
                          {booster.gain}
                        </div>
                      </div>
                      <ul className="space-y-1">
                        {booster.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm">
                            <Icon name="Check" size={16} className="text-success mr-2 flex-shrink-0" />
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

      {/* Operators Support */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Поддержка всех операторов</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-6">
              {operators.map((operator, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-3 text-primary">{operator.name}</h3>
                    <div className="space-y-1">
                      {operator.bands.map((band, bandIndex) => (
                        <div key={bandIndex} className="text-sm bg-secondary/10 rounded px-2 py-1">
                          {band} МГц
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-8">
              Наши репитеры поддерживают все частотные диапазоны российских операторов сотовой связи
            </p>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Преимущества усиления сигнала</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <Icon name={advantage.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{advantage.title}</h3>
                  <p className="text-sm text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Как проходит установка</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full mb-4 text-xl font-bold">1</div>
                <h3 className="font-semibold mb-2">Измерение сигнала</h3>
                <p className="text-sm text-muted-foreground">Анализ уровня сигнала и выбор оптимального места установки</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full mb-4 text-xl font-bold">2</div>
                <h3 className="font-semibold mb-2">Подбор оборудования</h3>
                <p className="text-sm text-muted-foreground">Выбор репитера под ваших операторов и площадь покрытия</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full mb-4 text-xl font-bold">3</div>
                <h3 className="font-semibold mb-2">Монтаж системы</h3>
                <p className="text-sm text-muted-foreground">Установка антенн, репитера и внутренней антенной системы</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full mb-4 text-xl font-bold">4</div>
                <h3 className="font-semibold mb-2">Настройка и тестирование</h3>
                <p className="text-sm text-muted-foreground">Оптимизация системы и проверка качества сигнала</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Signs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Признаки слабого сигнала</h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Если вы сталкиваетесь с этими проблемами, вам нужен репитер сотовой связи
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="PhoneOff" size={20} className="text-destructive" />
                  <span>Частые обрывы звонков</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="WifiOff" size={20} className="text-destructive" />
                  <span>Медленный мобильный интернет</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MessageSquareX" size={20} className="text-destructive" />
                  <span>SMS не доходят или приходят с задержкой</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="BatteryLow" size={20} className="text-destructive" />
                  <span>Быстрая разрядка батареи телефона</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Volume2" size={20} className="text-destructive" />
                  <span>Плохое качество звука при разговоре</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Signal" size={20} className="text-destructive" />
                  <span>Показывает 1-2 деления сигнала</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Smartphone" size={20} className="text-destructive" />
                  <span>Телефон ищет сеть</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Download" size={20} className="text-destructive" />
                  <span>Долгая загрузка страниц и приложений</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Устали от плохой связи?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Закажите бесплатное обследование и получите предложение по усилению сотовой связи
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
              © 2024 NetConnect. Усиление сотовой связи в Московской области
            </div>
          </div>
        </div>
      </footer>
      <WhatsAppButton />
    </div>
  );
};

export default CellularBooster;