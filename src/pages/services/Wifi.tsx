import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import WhatsAppButton from '@/components/WhatsAppButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import { useSEO } from '@/hooks/useSEO';

const Wifi = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useSEO({
    title: 'Wi-Fi оборудование для дома в МО - от 4500₽ | NetConnect',
    description: 'Продажа и установка Wi-Fi оборудования в Московской области. Роутеры, mesh-систеCcы, точки доступа. Покрытие всего дома. Цены от 4500₽. ☎ +7 (901) 500-00-78',
    keywords: 'wifi оборудование, роутер, mesh система, wifi для дома, точка доступа, усилитель wifi, wifi роутер',
    canonical: 'https://mosoblconnect.ru/services/wifi',
    ogTitle: 'Wi-Fi оборудование для дома в Московской области',
    ogDescription: 'Профессиональное Wi-Fi оборудование. Mesh-системы, роутеры, точки доступа. Покрытие всего дома. От 4500₽.',
    ogImage: 'https://cdn.mosoblconnect.ru/files/0b95440d-0b84-41b8-8404-418760cb07a4.jpg'
  });

  const services = [
    {
      icon: 'Router',
      title: 'Установка Wi-Fi сетей',
      description: 'Профессиональная установка и настройка беспроводных сетей любой сложности',
      features: ['Выбор оптимального оборудования', 'Настройка безопасности WPA3', 'Оптимизация покрытия', 'Гарантия на работы']
    },
    {
      icon: 'Signal',
      title: 'Усиление сигнала',
      description: 'Расширение зоны покрытия Wi-Fi с помощью репитеров и mesh-систем',
      features: ['Анализ покрытия', 'Установка усилителей', 'Настройка mesh-сети', 'Устранение мертвых зон']
    },
    {
      icon: 'Wifi',
      title: 'Роуминг между точками',
      description: 'Бесшовное переключение между точками доступа при перемещении',
      features: ['Настройка роуминга', 'Единая сеть', 'Автоматическое переключение', 'Стабильное соединение']
    },
    {
      icon: 'Settings',
      title: 'Настройка и диагностика',
      description: 'Полная настройка параметров сети и устранение проблем с подключением',
      features: ['Диагностика проблем', 'Оптимизация каналов', 'Настройка QoS', 'Мониторинг сети']
    }
  ];

  const equipment = [
    {
      type: 'Домашние роутеры',
      models: ['TP-Link Archer AX73', 'ASUS AX6000', 'Xiaomi AX6000'],
      price: 'от 8 000 ₽',
      description: 'Wi-Fi 6 роутеры для квартир и домов до 200 м²'
    },
    {
      type: 'Mesh-системы', 
      models: ['TP-Link Deco X60', 'ASUS ZenWiFi AX6600', 'Xiaomi Mesh System'],
      price: 'от 15 000 ₽',
      description: 'Бесшовное покрытие для больших домов и офисов'
    },
    {
      type: 'Профессиональные точки',
      models: ['Ubiquiti UniFi', 'Mikrotik cAP', 'Aruba Instant On'],
      price: 'от 12 000 ₽',
      description: 'Корпоративное оборудование для офисов и предприятий'
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

      <Breadcrumbs items={[
        { label: 'Услуги', href: '/#services' },
        { label: 'Wi-Fi оборудование' }
      ]} />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Icon name="Router" size={32} className="text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Wi-Fi оборудование
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Установка и настройка Wi-Fi сетей, усиление сигнала и создание бесшовного покрытия
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2 bg-success/10 text-success border-success/20">
                <Icon name="Wifi" size={16} className="mr-2" />
                Wi-Fi 6 технология
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-success/10 text-success border-success/20">
                <Icon name="Shield" size={16} className="mr-2" />
                WPA3 защита
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-success/10 text-success border-success/20">
                <Icon name="Settings" size={16} className="mr-2" />
                Профессиональная установка
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши Wi-Fi услуги</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                      <Icon name={service.icon} size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
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

      {/* Equipment */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Рекомендуемое оборудование</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {equipment.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.type}</h3>
                  <div className="text-2xl font-bold text-primary mb-2">{item.price}</div>
                  <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium">Популярные модели:</h4>
                    <ul className="space-y-1">
                      {item.models.map((model, modelIndex) => (
                        <li key={modelIndex} className="text-sm text-muted-foreground">• {model}</li>
                      ))}
                    </ul>
                  </div>

                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Как мы работаем</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full mb-4 text-xl font-bold">1</div>
                <h3 className="font-semibold mb-2">Консультация</h3>
                <p className="text-sm text-muted-foreground">Выезд специалиста для оценки объекта и составления плана</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full mb-4 text-xl font-bold">2</div>
                <h3 className="font-semibold mb-2">Планирование</h3>
                <p className="text-sm text-muted-foreground">Разработка схемы сети и выбор оптимального оборудования</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full mb-4 text-xl font-bold">3</div>
                <h3 className="font-semibold mb-2">Установка</h3>
                <p className="text-sm text-muted-foreground">Монтаж оборудования и прокладка кабельной инфраструктуры</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full mb-4 text-xl font-bold">4</div>
                <h3 className="font-semibold mb-2">Настройка</h3>
                <p className="text-sm text-muted-foreground">Конфигурация сети, тестирование и обучение пользователей</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Нужна помощь с Wi-Fi?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Закажите выезд специалиста для бесплатной консультации и составления плана Wi-Fi сети
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
              © 2024 NetConnect. Wi-Fi оборудование в Московской области
            </div>
          </div>
        </div>
      </footer>
      <WhatsAppButton />
    </div>
  );
};

export default Wifi;