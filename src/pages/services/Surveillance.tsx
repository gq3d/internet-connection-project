import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Surveillance = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const cameraTypes = [
    {
      icon: 'Video',
      title: 'IP камеры Full HD',
      description: 'Цифровые камеры высокого разрешения для четкой картинки',
      specs: '1920x1080, PoE питание, ночное видение до 30м',
      price: 'от 8 000 ₽'
    },
    {
      icon: 'Eye',
      title: '4K камеры',
      description: 'Камеры сверхвысокого разрешения для максимальной детализации',
      specs: '3840x2160, Smart детекция, ночное видение до 50м',
      price: 'от 15 000 ₽'
    },
    {
      icon: 'Scan',
      title: 'PTZ камеры',
      description: 'Поворотные камеры с зумом для контроля больших территорий',
      specs: 'Поворот 360°, 20x зум, автоследование объектов',
      price: 'от 35 000 ₽'
    },
    {
      icon: 'Gauge',
      title: 'Тепловизионные камеры',
      description: 'Камеры тепловидения для периметровой охраны',
      specs: 'Детекция в полной темноте, дальность до 500м',
      price: 'от 85 000 ₽'
    }
  ];

  const packages = [
    {
      name: 'Домашнее видеонаблюдение',
      cameras: '4 камеры',
      price: '45 000',
      description: 'Базовый комплект для частного дома или дачи',
      features: ['4 IP камеры Full HD', 'Регистратор 4 канала', 'HDD 1TB', 'Кабели и крепления', 'Мобильное приложение', 'Установка и настройка']
    },
    {
      name: 'Офисная безопасность',
      cameras: '8 камер',
      price: '85 000',
      description: 'Профессиональная система для офисов и магазинов',
      features: ['8 камер 4K', 'NVR регистратор', 'HDD 4TB', 'Детекция лиц', 'Облачное хранение', 'Удаленный мониторинг', 'Техподдержка']
    },
    {
      name: 'Корпоративная система',
      cameras: '16+ камер',
      price: 'от 180 000',
      description: 'Комплексное решение для крупных объектов',
      features: ['16+ камер с аналитикой', 'Серверное оборудование', 'Резервирование данных', 'Интеграция с СКУД', 'Центр мониторинга', 'SLA поддержка']
    }
  ];

  const features = [
    {
      icon: 'Smartphone',
      title: 'Мобильное приложение',
      description: 'Просмотр камер в реальном времени с телефона'
    },
    {
      icon: 'Cloud',
      title: 'Облачное хранение',
      description: 'Автоматическое резервное копирование записей'
    },
    {
      icon: 'Brain',
      title: 'Умная аналитика',
      description: 'Детекция лиц, номеров, подсчет посетителей'
    },
    {
      icon: 'Bell',
      title: 'Push-уведомления',
      description: 'Мгновенные оповещения о событиях'
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
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/#services" className="text-sm font-medium hover:text-success transition-colors">Услуги</a>
              <a href="/#tariffs" className="text-sm font-medium hover:text-success transition-colors">Тарифы</a>
              <a href="/#pricing" className="text-sm font-medium hover:text-success transition-colors">Стоимость</a>
              <a href="/#esim" className="text-sm font-medium hover:text-success transition-colors">eSIM</a>
              <a href="/#coverage" className="text-sm font-medium hover:text-success transition-colors">Покрытие</a>
              <a href="/#about" className="text-sm font-medium hover:text-success transition-colors">О компании</a>
              <a href="/#contacts" className="text-sm font-medium hover:text-success transition-colors">Контакты</a>
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
              <Icon name="Video" size={32} className="text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Видеонаблюдение
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Системы видеонаблюдения с HD/4K качеством, удаленным доступом и облачным хранением
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2 bg-success/10 text-success border-success/20">
                <Icon name="Video" size={16} className="mr-2" />
                4K качество
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-success/10 text-success border-success/20">
                <Icon name="Cloud" size={16} className="mr-2" />
                Облачное хранение
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-success/10 text-success border-success/20">
                <Icon name="Smartphone" size={16} className="mr-2" />
                Мобильный доступ
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Camera Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Типы камер видеонаблюдения</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {cameraTypes.map((camera, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                      <Icon name={camera.icon} size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold">{camera.title}</h3>
                        <span className="text-lg font-bold text-primary">{camera.price}</span>
                      </div>
                      <p className="text-muted-foreground mb-3">{camera.description}</p>
                      <p className="text-sm text-secondary font-medium">{camera.specs}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Возможности системы</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <Icon name={feature.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Готовые комплекты видеонаблюдения</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 ${
                index === 1 ? 'ring-2 ring-primary scale-105' : ''
              }`}>
                {index === 1 && (
                  <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                    Хит продаж
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <div className="text-4xl font-bold text-primary mb-2">
                      от {pkg.price} ₽<span className="text-lg font-normal text-muted-foreground">*</span>
                    </div>
                    <div className="text-lg font-semibold text-secondary">{pkg.cameras}</div>
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
          <p className="text-center text-sm text-muted-foreground mt-8">* Цена указана с установкой под ключ</p>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Этапы установки видеонаблюдения</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full mb-4 text-xl font-bold">1</div>
                <h3 className="font-semibold mb-2">Обследование объекта</h3>
                <p className="text-sm text-muted-foreground">Выезд инженера для оценки и составления схемы размещения камер</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full mb-4 text-xl font-bold">2</div>
                <h3 className="font-semibold mb-2">Подбор оборудования</h3>
                <p className="text-sm text-muted-foreground">Выбор камер и регистратора под ваши задачи и бюджет</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full mb-4 text-xl font-bold">3</div>
                <h3 className="font-semibold mb-2">Монтаж системы</h3>
                <p className="text-sm text-muted-foreground">Установка камер, прокладка кабелей и подключение оборудования</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full mb-4 text-xl font-bold">4</div>
                <h3 className="font-semibold mb-2">Настройка и обучение</h3>
                <p className="text-sm text-muted-foreground">Конфигурация системы и обучение работе с приложением</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Установите видеонаблюдение прямо сейчас</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Получите бесплатный выезд специалиста и расчет стоимости системы видеонаблюдения
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
              © 2024 NetConnect. Видеонаблюдение в Московской области
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Surveillance;