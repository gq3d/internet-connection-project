import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Internet = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tariffs = [
    {
      name: 'Старт',
      speed: '100 Мбит/с',
      price: '1490',
      description: 'Оптимальный вариант для серфинга, мессенджеров, социальных сетей и просмотра видео в HD.',
      features: ['Безлимитный трафик', 'Wi-Fi роутер 802.11ac', 'Техподдержка']
    },
    {
      name: 'Комфорт',
      speed: '200 Мбит/с',
      price: '1990',
      description: 'Высокая скорость для стриминга 4K, онлайн игр, работы из дома и подключения множества устройств.',
      features: ['Безлимитный трафик', 'Wi-Fi роутер 802.11ax', 'Приоритетная поддержка', 'Статический IP']
    },
    {
      name: 'Максимум',
      speed: '250 Мбит/с',
      price: '2590',
      description: 'Максимальная скорость для больших семей, офисов и всех задач одновременно.',
      features: ['Безлимитный трафик', 'Профессиональное оборудование', 'VIP поддержка', 'Статический IP', 'Резервный канал']
    }
  ];

  const advantages = [
    {
      icon: 'Zap',
      title: 'Высокая скорость',
      description: 'До 250 Мбит/с через беспроводные каналы'
    },
    {
      icon: 'Signal',
      title: 'Стабильное соединение',
      description: '99.9% времени безотказной работы'
    },
    {
      icon: 'Shield',
      title: 'Защищённое подключение',
      description: 'Шифрование трафика и защита от помех'
    },
    {
      icon: 'Clock',
      title: 'Быстрое подключение',
      description: 'Установка за 1-3 дня без прокладки кабелей'
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
              <Icon name="Wifi" size={32} className="text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Интернет-подключение
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Беспроводной интернет до 250 Мбит/с через современные беспроводные технологии в Московской области
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2 bg-success/10 text-success border-success/20">
                <Icon name="Zap" size={16} className="mr-2" />
                До 250 Мбит/с
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-success/10 text-success border-success/20">
                <Icon name="Shield" size={16} className="mr-2" />
                99.9% надежность
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-success/10 text-success border-success/20">
                <Icon name="Clock" size={16} className="mr-2" />
                Подключение за 1-3 дня
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Преимущества нашего интернета</h2>
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

      {/* Tariffs */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Тарифы интернета</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tariffs.map((tariff, index) => (
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
                    <h3 className="text-2xl font-bold mb-2">{tariff.name}</h3>
                    <div className="text-4xl font-bold text-primary mb-2">
                      {tariff.price} ₽<span className="text-lg font-normal text-muted-foreground">/мес</span>
                    </div>
                    <div className="text-lg font-semibold text-secondary">{tariff.speed}</div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-6">{tariff.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {tariff.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <Icon name="Check" size={16} className="text-success mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full" size="lg" variant={index === 1 ? 'default' : 'outline'}>
                    Подключить тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Готовы подключиться к интернету?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Оставьте заявку и наши специалисты свяжутся с вами для подключения
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Icon name="Phone" size={20} className="mr-2" />
                Оставить заявку
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Консультация
              </Button>
            </div>
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
              © 2024 NetConnect. Беспроводной интернет в Московской области
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Internet;