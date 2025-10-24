import { Link } from 'react-router-dom';
import { useSEO } from '@/hooks/useSEO';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import SurveillanceHeader from '@/components/surveillance/SurveillanceHeader';
import Footer from '@/components/home/Footer';

const AccessControl = () => {
  useSEO({
    title: 'Контроль доступа и СКУД в МО от 40000₽ | NetConnect',
    description: 'Установка систем контроля и управления доступом. Электронные замки, карты доступа, биометрия. Звоните: +7 (901) 500-00-78',
    canonical: 'https://wiline.ru/services/access-control',
    ogTitle: 'СКУД и контроль доступа в МО от 40000₽',
    ogDescription: 'Профессиональная установка систем контроля доступа. Электронные замки, домофоны, биометрические сканеры, журнал событий.',
    ogImage: 'https://cdn.wiline.ru/files/access-control.jpg',
    ogImageAlt: 'Контроль доступа NetConnect',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Установка систем контроля доступа',
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
        'name': 'Контроль доступа',
        'price': '40000',
        'priceCurrency': 'RUB'
      }
    }
  });

  const systems = [
    {
      icon: 'CreditCard',
      title: 'Карты и брелоки',
      description: 'Бесконтактные RFID карты доступа и брелоки для быстрой идентификации',
      features: ['Карты Mifare', 'Брелоки RFID', 'До 10 000 пользователей', 'Защита от копирования']
    },
    {
      icon: 'Fingerprint',
      title: 'Биометрия',
      description: 'Сканеры отпечатков пальцев и распознавание лица для максимальной безопасности',
      features: ['Сканер отпечатков', 'Распознавание лица', 'Защита от подделки', 'База до 5000 пользователей']
    },
    {
      icon: 'Smartphone',
      title: 'Мобильный доступ',
      description: 'Управление доступом через мобильное приложение и удаленное открытие',
      features: ['Приложение iOS/Android', 'QR-коды', 'Временные пропуска', 'Push-уведомления']
    },
    {
      icon: 'Lock',
      title: 'Электронные замки',
      description: 'Электромагнитные и электромеханические замки для любых дверей',
      features: ['Магнитные замки до 500 кг', 'Электромеханические защелки', 'Автодоводчики', 'Резервное питание']
    },
    {
      icon: 'Video',
      title: 'Домофоны и видеосвязь',
      description: 'IP-домофоны с видеосвязью и записью всех обращений',
      features: ['HD видео', 'Двусторонняя связь', 'Запись обращений', 'Удаленное открытие']
    },
    {
      icon: 'FileText',
      title: 'Журнал событий',
      description: 'Детальный учет всех входов и выходов с фото и видеофиксацией',
      features: ['История проходов', 'Отчеты и аналитика', 'Экспорт данных', 'Уведомления о нарушениях']
    }
  ];

  const packages = [
    {
      name: 'Офис',
      price: 'от 40 000',
      features: [
        'Контроллер на 2 двери',
        '20 карт доступа',
        'Электромагнитный замок',
        'Считыватель RFID',
        'Программное обеспечение',
        'Установка и настройка',
        'Гарантия 2 года'
      ]
    },
    {
      name: 'Бизнес',
      price: 'от 85 000',
      features: [
        'Контроллер на 4 двери',
        '50 карт доступа',
        'Биометрический сканер',
        'IP-домофон',
        'Турникет или шлюз',
        'Интеграция с видеонаблюдением',
        'Облачное хранение данных',
        'Мобильное приложение',
        'Гарантия 3 года'
      ],
      popular: true
    },
    {
      name: 'Корпоративный',
      price: 'от 200 000',
      features: [
        'Контроллеры на 8+ дверей',
        '200+ карт доступа',
        'Биометрия (лицо + отпечатки)',
        'Несколько турникетов',
        'Интеграция с 1С, HR системами',
        'Фотоидентификация',
        'Посетительский режим',
        'Шлюзы безопасности',
        'Техподдержка 24/7',
        'Гарантия 5 лет'
      ]
    }
  ];

  const benefits = [
    {
      icon: 'Shield',
      title: 'Безопасность',
      description: 'Только авторизованные лица получают доступ на территорию',
      link: null
    },
    {
      icon: 'Clock',
      title: 'Учет рабочего времени',
      description: 'Автоматическая фиксация прихода и ухода сотрудников',
      link: null
    },
    {
      icon: 'Users',
      title: 'Управление доступом',
      description: 'Гибкое назначение прав доступа для разных групп пользователей',
      link: null
    },
    {
      icon: 'BarChart',
      title: 'Аналитика',
      description: 'Отчеты по посещаемости, опозданиям и нарушениям',
      link: '/services/surveillance/smart-analytics'
    },
    {
      icon: 'Wifi',
      title: 'Удаленный доступ',
      description: 'Управление системой из любой точки мира через интернет',
      link: null
    },
    {
      icon: 'History',
      title: 'История событий',
      description: 'Полный журнал всех проходов с возможностью поиска',
      link: null
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SurveillanceHeader />
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Контроль доступа и СКУД в Московской области
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Современные системы контроля и управления доступом для офисов, складов и производств. 
              Электронные замки, биометрия, учет рабочего времени.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a href="tel:+79015000078">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить сейчас
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">Все услуги</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Типы систем контроля доступа</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            От простых электронных замков до комплексных биометрических систем
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {systems.map((system, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <Icon name={system.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{system.title}</h3>
                  <p className="text-muted-foreground mb-4">{system.description}</p>
                  <ul className="space-y-2">
                    {system.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <Icon name="Check" size={16} className="text-success mr-2 flex-shrink-0" />
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

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Преимущества СКУД</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Контроль доступа обеспечивает безопасность и помогает в управлении персоналом
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => {
              const CardWrapper = benefit.link ? Link : 'div';
              const cardProps = benefit.link ? { to: benefit.link } : {};
              
              return (
                <CardWrapper key={index} {...cardProps} className={benefit.link ? 'block' : ''}>
                  <Card className={benefit.link ? 'hover:shadow-xl hover:scale-105 transition-all cursor-pointer' : ''}>
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                        <Icon name={benefit.icon} size={32} className="text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                      {benefit.link && (
                        <div className="mt-4 text-primary text-sm font-medium flex items-center justify-center gap-1">
                          Подробнее <Icon name="ArrowRight" size={16} />
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </CardWrapper>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Пакеты контроля доступа</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Готовые решения для бизнеса любого масштаба
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

      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Готовы установить систему контроля доступа?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Закажите бесплатный выезд инженера для оценки объекта и расчета стоимости.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a href="tel:+79015000078">
                  <Icon name="Phone" size={20} className="mr-2" />
                  +7 (901) 500-00-78
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services/security">Все системы безопасности</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AccessControl;