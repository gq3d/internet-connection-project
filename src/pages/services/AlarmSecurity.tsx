import { Link } from 'react-router-dom';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useSEO } from '@/hooks/useSEO';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import SurveillanceHeader from '@/components/surveillance/SurveillanceHeader';
import UniversalFooter from '@/components/UniversalFooter';

const AlarmSecurity = () => {
  useSEO({
    title: 'Охранная сигнализация в МО от 35000₽ | NetConnect',
    description: 'Установка охранной сигнализации под ключ. Датчики движения, пультовая охрана, SMS уведомления. Звоните: +7 (901) 500-00-78',
    canonical: 'https://mosoblconnect.ru/services/alarm-security',
    ogTitle: 'Охранная сигнализация в МО от 35000₽',
    ogDescription: 'Профессиональная установка охранной сигнализации. Датчики движения и открытия, пультовая охрана, мобильные уведомления.',
    ogImage: 'https://cdn.mosoblconnect.ru/files/security-alarm.jpg',
    ogImageAlt: 'Охранная сигнализация NetConnect',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Установка охранной сигнализации',
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
        'name': 'Охранная сигнализация',
        'price': '35000',
        'priceCurrency': 'RUB'
      }
    }
  });

  const packages = [
    {
      name: 'Базовая',
      price: '35 000',
      features: [
        '4 датчика движения',
        '4 датчика открытия',
        'Контрольная панель',
        'Сирена 120 дБ',
        'SMS уведомления',
        'Гарантия 2 года'
      ]
    },
    {
      name: 'Оптимальная',
      price: '55 000',
      features: [
        '8 датчиков движения',
        '6 датчиков открытия',
        'Контрольная панель',
        'Внутренняя и внешняя сирена',
        'Пультовая охрана',
        'Мобильное приложение',
        'Гарантия 3 года'
      ],
      popular: true
    },
    {
      name: 'Премиум',
      price: '95 000',
      features: [
        '12 датчиков движения',
        '10 датчиков открытия',
        'Датчики разбития стекла',
        'Датчики затопления',
        'Контрольная панель с GSM',
        'Пультовая охрана 24/7',
        'Выезд группы реагирования',
        'Интеграция с видеонаблюдением',
        'Гарантия 5 лет'
      ]
    }
  ];

  const features = [
    {
      icon: 'Activity',
      title: 'Датчики движения',
      description: 'Инфракрасные датчики с защитой от ложных срабатываний на животных'
    },
    {
      icon: 'DoorOpen',
      title: 'Датчики открытия',
      description: 'Магнитные контакты для дверей и окон с контролем целостности проводов'
    },
    {
      icon: 'Bell',
      title: 'Звуковая сирена',
      description: 'Мощная сирена до 120 дБ для отпугивания злоумышленников'
    },
    {
      icon: 'Smartphone',
      title: 'Мобильные уведомления',
      description: 'Моментальные SMS и push-уведомления о срабатывании датчиков'
    },
    {
      icon: 'Shield',
      title: 'Пультовая охрана',
      description: 'Подключение к пульту охраны с выездом группы реагирования'
    },
    {
      icon: 'Radio',
      title: 'GSM модуль',
      description: 'Связь через мобильную сеть при обрыве проводной связи'
    }
  ];

  const process = [
    {
      icon: 'Phone',
      title: 'Консультация',
      description: 'Звоните нам, обсуждаем ваши требования к безопасности'
    },
    {
      icon: 'Home',
      title: 'Выезд специалиста',
      description: 'Инженер осматривает объект и составляет план установки'
    },
    {
      icon: 'FileText',
      title: 'Договор',
      description: 'Подписываем договор с фиксированной стоимостью работ'
    },
    {
      icon: 'Wrench',
      title: 'Установка',
      description: 'Монтаж оборудования и настройка системы за 1 день'
    },
    {
      icon: 'Settings',
      title: 'Настройка',
      description: 'Программирование сценариев, подключение к пульту охраны'
    },
    {
      icon: 'CheckCircle',
      title: 'Обучение',
      description: 'Показываем как пользоваться системой и выдаем документы'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SurveillanceHeader />
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Охранная сигнализация в Московской области
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Защитите свой дом или офис от проникновения. Профессиональная установка под ключ с подключением к пульту охраны.
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
          <h2 className="text-3xl font-bold text-center mb-4">Что входит в охранную сигнализацию</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Комплексная система защиты с различными типами датчиков и круглосуточным мониторингом
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <Icon name={feature.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Пакеты охранной сигнализации</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Готовые комплекты для квартир, домов и коммерческих объектов
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
                        <span>{feature}</span>
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
          <h2 className="text-3xl font-bold text-center mb-12">Как проходит установка</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <Card>
                  <CardContent className="p-6">
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                      <Icon name={step.icon} size={24} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Готовы установить охранную сигнализацию?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Защитите свой дом или бизнес уже сегодня. Звоните для консультации и расчета стоимости.
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

      <UniversalFooter />
      <WhatsAppButton />
    </div>
  );
};

export default AlarmSecurity;