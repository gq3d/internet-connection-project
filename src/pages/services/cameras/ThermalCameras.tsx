import { Link } from 'react-router-dom';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useSEO } from '@/hooks/useSEO';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import SurveillanceHeader from '@/components/surveillance/SurveillanceHeader';
import UniversalFooter from '@/components/UniversalFooter';

const ThermalCameras = () => {
  useSEO({
    title: 'Тепловизионные камеры для видеонаблюдения в МО от 85000₽ | NetConnect',
    description: 'Установка тепловизионных камер для периметровой охраны. Детекция в полной темноте, дальность до 500м. Звоните: +7 (901) 500-00-78',
    canonical: 'https://mosoblconnect.ru/services/cameras/thermal-cameras',
    ogTitle: 'Тепловизионные камеры в Московской области',
    ogDescription: 'Камеры тепловидения для максимальной безопасности. Обнаружение в темноте, тумане, дыме. Дальность до 500 метров.',
    ogImage: 'https://cdn.poehali.dev/projects/d4f2c7e9-a091-4f1c-9e82-47f687864218/files/80ad8e27-16e2-4c66-855c-ef66ff4ee42f.jpg',
    ogImageAlt: 'Тепловизионные камеры NetConnect',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': 'Тепловизионные камеры видеонаблюдения',
      'description': 'Камеры тепловидения для периметровой охраны',
      'offers': {
        '@type': 'Offer',
        'price': '85000',
        'priceCurrency': 'RUB'
      }
    }
  });

  const advantages = [
    {
      icon: 'Eye',
      title: 'Видимость в темноте',
      description: 'Обнаружение объектов в полной темноте без какой-либо подсветки'
    },
    {
      icon: 'Cloud',
      title: 'Работа в тумане',
      description: 'Детекция объектов через туман, дым, пыль и дождь'
    },
    {
      icon: 'Maximize',
      title: 'Большая дальность',
      description: 'Обнаружение человека на расстоянии до 500 метров, транспорта — до 1500м'
    },
    {
      icon: 'AlertTriangle',
      title: 'Раннее обнаружение',
      description: 'Обнаружение нарушителя еще до приближения к объекту охраны'
    },
    {
      icon: 'Flame',
      title: 'Детекция пожаров',
      description: 'Обнаружение очагов возгорания и перегретых участков оборудования'
    },
    {
      icon: 'Shield',
      title: 'Минимум ложных тревог',
      description: 'Игнорирование бликов фар, теней, насекомых и мелких животных'
    }
  ];

  const applications = [
    {
      icon: 'Home',
      title: 'Периметровая охрана',
      description: 'Контроль ограждения, забора, границ территории днем и ночью'
    },
    {
      icon: 'Factory',
      title: 'Промышленные объекты',
      description: 'Нефтебазы, склады ГСМ, химические производства, энергообъекты'
    },
    {
      icon: 'TreeDeciduous',
      title: 'Лесные массивы',
      description: 'Обнаружение лесных пожаров на ранней стадии'
    },
    {
      icon: 'Ship',
      title: 'Порты и причалы',
      description: 'Контроль акваторий, береговой линии в условиях тумана'
    },
    {
      icon: 'Antenna',
      title: 'Критическая инфраструктура',
      description: 'Электростанции, подстанции, КПП особо важных объектов'
    },
    {
      icon: 'Tent',
      title: 'Военные объекты',
      description: 'Воинские части, полигоны, склады вооружения'
    }
  ];

  const types = [
    {
      name: 'Фиксированные тепловизоры',
      price: 'от 85 000 ₽',
      description: 'Стационарные камеры для контроля определенного направления',
      features: ['Разрешение 384x288', 'Дальность до 300м', 'Угол обзора 25°', 'Аналитика пересечения линии']
    },
    {
      name: 'PTZ тепловизоры',
      price: 'от 250 000 ₽',
      description: 'Поворотные тепловизоры с зумом для контроля больших территорий',
      features: ['Разрешение 640x512', 'Дальность до 1500м', 'Поворот 360°', 'Автотрекинг объектов'],
      popular: true
    },
    {
      name: 'Биспектральные камеры',
      price: 'от 180 000 ₽',
      description: 'Совмещенные тепловизор + обычная камера в одном корпусе',
      features: ['Термо 384x288 + 2 Мп видео', 'Дальность до 500м', 'Цветная идентификация', 'Двойная аналитика']
    }
  ];

  const specifications = [
    {
      param: 'Разрешение матрицы',
      value: 'От 160x120 до 1280x1024 пикселей'
    },
    {
      param: 'Температурная чувствительность',
      value: '< 50 мК (0.05°C)'
    },
    {
      param: 'Спектральный диапазон',
      value: '8-14 мкм (длинноволновой ИК)'
    },
    {
      param: 'Дальность обнаружения человека',
      value: 'До 500 метров'
    },
    {
      param: 'Дальность обнаружения транспорта',
      value: 'До 1500 метров'
    },
    {
      param: 'Диапазон температур',
      value: 'От -40°C до +550°C'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SurveillanceHeader />
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <Icon name="Gauge" size={16} className="mr-2" />
              Специальное оборудование
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Тепловизионные камеры видеонаблюдения
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Камеры тепловидения для периметровой охраны и контроля критических объектов. 
              Детекция в полной темноте, тумане и дыме на расстоянии до 500 метров.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a href="tel:+79015000078">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить сейчас
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services/surveillance">Все камеры</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Преимущества тепловизоров</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Почему тепловизионные камеры незаменимы для периметровой охраны
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <Icon name={adv.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{adv.title}</h3>
                  <p className="text-muted-foreground">{adv.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Типы тепловизионных камер</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Решения для различных задач охраны
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {types.map((type, index) => (
              <Card key={index} className={type.popular ? 'border-primary shadow-lg scale-105' : ''}>
                <CardContent className="p-8">
                  {type.popular && (
                    <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      Универсальный
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2">{type.name}</h3>
                  <div className="text-2xl font-bold text-primary mb-3">
                    {type.price}
                  </div>
                  <p className="text-muted-foreground mb-6">{type.description}</p>
                  <ul className="space-y-3 mb-6">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Icon name="Check" size={20} className="text-success mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={type.popular ? 'default' : 'outline'} asChild>
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
          <h2 className="text-3xl font-bold text-center mb-4">Области применения</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Где тепловизионные камеры обеспечивают максимальную эффективность
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <Icon name={app.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{app.title}</h3>
                  <p className="text-muted-foreground text-sm">{app.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Технические характеристики</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Основные параметры тепловизионных камер
          </p>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="space-y-4">
                  {specifications.map((spec, index) => (
                    <div key={index} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                      <span className="font-medium">{spec.param}</span>
                      <span className="text-primary font-semibold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Нужна консультация по тепловизорам?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Наши специалисты помогут подобрать оптимальное решение для вашего объекта и рассчитают стоимость.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a href="tel:+79015000078">
                  <Icon name="Phone" size={20} className="mr-2" />
                  +7 (901) 500-00-78
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services/surveillance">Видеонаблюдение</Link>
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

export default ThermalCameras;