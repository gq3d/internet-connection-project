import { Link } from 'react-router-dom';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useSEO } from '@/hooks/useSEO';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import SurveillanceHeader from '@/components/surveillance/SurveillanceHeader';
import UniversalFooter from '@/components/UniversalFooter';

const WifiInstallation = () => {
  useSEO({
    title: 'Установка Wi-Fi сетей в МО от 5000₽ | NetConnect',
    description: 'Профессиональная установка и настройка Wi-Fi сетей любой сложности. Выбор оборудования, настройка безопасности WPA3. Звоните: +7 (901) 500-00-78',
    canonical: 'https://mosoblconnect.ru/services/wifi-installation',
    ogTitle: 'Установка Wi-Fi сетей в Московской области от 5000₽',
    ogDescription: 'Профессиональная установка беспроводных сетей. Выбор оптимального оборудования, настройка безопасности, оптимизация покрытия.',
    ogImage: 'https://cdn.mosoblconnect.ru/files/wifi-installation.jpg',
    ogImageAlt: 'Установка Wi-Fi сетей NetConnect',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Установка Wi-Fi сетей',
      'provider': {
        '@type': 'Organization',
        'name': 'NetConnect',
        'telephone': '+79015000078',
        'address': {
          '@type': 'PostalAddress',
          'addressRegion': 'Московская область',
          'addressCountry': 'RU'
        }
      },
      'areaServed': 'Московская область',
      'offers': {
        '@type': 'Offer',
        'name': 'Установка Wi-Fi сети',
        'price': '5000',
        'priceCurrency': 'RUB'
      }
    }
  });

  const packages = [
    {
      name: 'Базовая установка',
      price: 'от 5 000',
      features: [
        'Настройка роутера',
        'Подключение к интернету',
        'Настройка Wi-Fi сети',
        'Базовая защита WPA2',
        'Консультация по использованию'
      ]
    },
    {
      name: 'Оптимальная',
      price: 'от 12 000',
      features: [
        'Установка роутера Wi-Fi 6',
        'Оптимизация покрытия',
        'Настройка безопасности WPA3',
        'Разделение гостевой сети',
        'Настройка родительского контроля',
        'Оптимизация каналов',
        'Гарантия 1 год'
      ],
      popular: true
    },
    {
      name: 'Профессиональная',
      price: 'от 25 000',
      features: [
        'Проектирование сети',
        'Профессиональное оборудование',
        'Несколько точек доступа',
        'Настройка роуминга',
        'Управление через контроллер',
        'VLAN и сегментация сети',
        'Мониторинг и аналитика',
        'Техподдержка 24/7',
        'Гарантия 3 года'
      ]
    }
  ];

  const services = [
    {
      icon: 'Search',
      title: 'Диагностика и планирование',
      description: 'Анализируем помещение, составляем план размещения оборудования для оптимального покрытия'
    },
    {
      icon: 'ShoppingCart',
      title: 'Подбор оборудования',
      description: 'Выбираем роутеры и точки доступа под ваши задачи и бюджет'
    },
    {
      icon: 'Wrench',
      title: 'Монтаж и настройка',
      description: 'Устанавливаем оборудование, прокладываем кабели, настраиваем все параметры'
    },
    {
      icon: 'Shield',
      title: 'Безопасность',
      description: 'Настраиваем надежную защиту: WPA3 шифрование, скрытие SSID, фильтрация MAC'
    },
    {
      icon: 'Gauge',
      title: 'Оптимизация',
      description: 'Выбираем свободные каналы, настраиваем мощность передатчиков'
    },
    {
      icon: 'GraduationCap',
      title: 'Обучение',
      description: 'Показываем как пользоваться сетью, настраивать устройства, решать проблемы'
    }
  ];

  const advantages = [
    {
      icon: 'Award',
      title: 'Опыт 10+ лет',
      description: 'Установили более 5000 Wi-Fi сетей в Подмосковье'
    },
    {
      icon: 'Clock',
      title: 'Быстрая установка',
      description: 'Выезжаем в день обращения, настраиваем за 1-3 часа'
    },
    {
      icon: 'DollarSign',
      title: 'Честные цены',
      description: 'Фиксированная стоимость без скрытых платежей'
    },
    {
      icon: 'Headphones',
      title: 'Техподдержка',
      description: 'Помогаем решить любые проблемы с сетью'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SurveillanceHeader />
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Установка Wi-Fi сетей в Московской области
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Профессиональная установка и настройка беспроводных сетей для дома и офиса. 
              Подбор оборудования, оптимизация покрытия, настройка безопасности.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a href="tel:+79015000078">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить сейчас
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services/wifi">Все Wi-Fi услуги</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Что входит в установку</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Полный цикл работ от анализа помещения до обучения пользователей
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <Icon name={service.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Пакеты установки Wi-Fi</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Выберите подходящий вариант для вашего дома или офиса
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className={pkg.popular ? 'border-primary shadow-lg scale-105' : ''}>
                <CardContent className="p-8">
                  {pkg.popular && (
                    <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      Популярный
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-6">
                    {pkg.price} ₽
                  </div>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Icon name="Check" size={20} className="text-success mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={pkg.popular ? 'default' : 'outline'} asChild>
                    <a href="tel:+79015000078">Заказать</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {advantages.map((adv, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <Icon name={adv.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{adv.title}</h3>
                  <p className="text-muted-foreground text-sm">{adv.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Готовы установить Wi-Fi сеть?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Закажите бесплатный выезд специалиста для оценки объекта и расчета стоимости.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a href="tel:+79015000078">
                  <Icon name="Phone" size={20} className="mr-2" />
                  +7 (901) 500-00-78
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services/wifi">Все Wi-Fi услуги</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <UniversalFooter />
      <WhatsAppButton />
    </div>
  );
};

export default WifiInstallation;