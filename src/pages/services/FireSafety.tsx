import { Link } from 'react-router-dom';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useSEO } from '@/hooks/useSEO';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import UniversalFooter from '@/components/UniversalFooter';

const FireSafety = () => {
  useSEO({
    title: 'Пожарная безопасность и сигнализация в МО от 30000₽ | NetConnect',
    description: 'Установка пожарной сигнализации и систем оповещения. Датчики дыма, температуры, интеграция с МЧС. Звоните: +7 (901) 500-00-78',
    canonical: 'https://mosoblconnect.ru/services/fire-safety',
    ogTitle: 'Пожарная сигнализация в МО от 30000₽',
    ogDescription: 'Профессиональная установка систем пожарной безопасности. Датчики дыма и температуры, звуковое оповещение, подключение к МЧС.',
    ogImage: 'https://cdn.mosoblconnect.ru/files/fire-safety.jpg',
    ogImageAlt: 'Пожарная безопасность NetConnect',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Установка систем пожарной безопасности',
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
        'name': 'Пожарная сигнализация',
        'price': '30000',
        'priceCurrency': 'RUB'
      }
    }
  });

  const systems = [
    {
      icon: 'Flame',
      title: 'Дымовые датчики',
      description: 'Оптические датчики дыма для раннего обнаружения возгорания',
      features: ['Оптические сенсоры', 'Чувствительность 0.05-0.2 дБ/м', 'Радиус действия до 85 м²', 'Защита от пыли']
    },
    {
      icon: 'Thermometer',
      title: 'Тепловые датчики',
      description: 'Датчики повышения температуры для помещений с запыленностью',
      features: ['Порог срабатывания 54-72°C', 'Скорость реакции 5-10°C/мин', 'Для кухонь и производств', 'IP54 защита']
    },
    {
      icon: 'Waves',
      title: 'Комбинированные',
      description: 'Датчики с контролем дыма и температуры для максимальной надежности',
      features: ['Дым + температура', 'Двойной контроль', 'Меньше ложных срабатываний', 'Самодиагностика']
    },
    {
      icon: 'Bell',
      title: 'Звуковое оповещение',
      description: 'Мощные сирены и световые табло для эвакуации людей',
      features: ['Сирены 85-120 дБ', 'Световые указатели', 'Табло "ВЫХОД"', 'Автономное питание']
    },
    {
      icon: 'Radio',
      title: 'Интеграция с МЧС',
      description: 'Автоматическая передача сигнала тревоги в пожарную службу',
      features: ['GSM модуль', 'Прямая линия с МЧС', 'Протокол Sur-Guard', 'Резервный канал']
    },
    {
      icon: 'Droplet',
      title: 'Автоматическое пожаротушение',
      description: 'Системы порошкового или газового пожаротушения',
      features: ['Порошковые модули', 'Газовое тушение', 'Спринклеры', 'Автозапуск']
    }
  ];

  const packages = [
    {
      name: 'Квартира',
      price: '30 000',
      features: [
        '4 дымовых датчика',
        '2 тепловых датчика',
        'Контрольная панель',
        'Звуковая сирена 85 дБ',
        'Автономное питание',
        'Сертификат МЧС',
        'Гарантия 2 года'
      ]
    },
    {
      name: 'Дом/Офис',
      price: '65 000',
      features: [
        '8 дымовых датчиков',
        '4 тепловых датчика',
        '2 ручных извещателя',
        'Контрольная панель',
        'Звуковые и световые сирены',
        'GSM модуль',
        'Уведомления на телефон',
        'Сертификат МЧС',
        'Гарантия 3 года'
      ],
      popular: true
    },
    {
      name: 'Предприятие',
      price: 'от 150 000',
      features: [
        '20+ датчиков дыма и температуры',
        'Ручные извещатели',
        'Система звукового оповещения',
        'Световые табло "ВЫХОД"',
        'Интеграция с МЧС',
        'Модули пожаротушения',
        'Система дымоудаления',
        'Журнал событий',
        'Техобслуживание',
        'Гарантия 5 лет'
      ]
    }
  ];

  const requirements = [
    {
      icon: 'Building',
      title: 'Жилые дома и квартиры',
      description: 'Обязательна установка датчиков в домах выше 28 метров и квартирах от 300 м²'
    },
    {
      icon: 'Store',
      title: 'Коммерческие объекты',
      description: 'Магазины, офисы, кафе, отели — требуется сертифицированная система'
    },
    {
      icon: 'Factory',
      title: 'Производства и склады',
      description: 'Промышленные объекты с повышенной пожарной опасностью'
    },
    {
      icon: 'School',
      title: 'Социальные учреждения',
      description: 'Детские сады, школы, больницы — строгие требования МЧС'
    }
  ];

  const process = [
    {
      icon: 'Clipboard',
      title: 'Обследование объекта',
      description: 'Инженер оценивает площадь, назначение помещений, пожарную нагрузку'
    },
    {
      icon: 'FileText',
      title: 'Проектирование',
      description: 'Разработка проекта системы в соответствии с СНиП и НПБ'
    },
    {
      icon: 'CheckSquare',
      title: 'Согласование',
      description: 'Согласование проекта в органах пожарного надзора'
    },
    {
      icon: 'Wrench',
      title: 'Монтаж',
      description: 'Установка датчиков, сирен, прокладка кабелей, подключение'
    },
    {
      icon: 'Settings',
      title: 'Пуско-наладка',
      description: 'Настройка оборудования, проверка всех датчиков и шлейфов'
    },
    {
      icon: 'Award',
      title: 'Сдача в МЧС',
      description: 'Оформление документов и получение разрешения на эксплуатацию'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Пожарная безопасность и сигнализация в Московской области
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Проектирование, монтаж и обслуживание систем пожарной сигнализации. 
              Соответствие требованиям МЧС, сертификация, техподдержка.
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
          <h2 className="text-3xl font-bold text-center mb-4">Компоненты пожарной сигнализации</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Современное оборудование для обнаружения и тушения пожаров
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
          <h2 className="text-3xl font-bold text-center mb-4">Кому обязательна пожарная сигнализация</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Требования законодательства для различных типов объектов
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {requirements.map((req, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <Icon name={req.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{req.title}</h3>
                  <p className="text-muted-foreground text-sm">{req.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Пакеты пожарной безопасности</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Готовые решения с сертификацией МЧС
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

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Этапы внедрения системы</h2>
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
            <h2 className="text-3xl font-bold mb-6">Защитите свой объект от пожара</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Получите консультацию специалиста и расчет стоимости пожарной сигнализации для вашего объекта.
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

export default FireSafety;
