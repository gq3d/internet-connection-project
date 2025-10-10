import { Link } from 'react-router-dom';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useSEO } from '@/hooks/useSEO';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import SurveillanceHeader from '@/components/surveillance/SurveillanceHeader';
import Breadcrumbs from '@/components/Breadcrumbs';
import UniversalFooter from '@/components/UniversalFooter';

const PtzCameras = () => {
  useSEO({
    title: 'PTZ камеры с зумом в МО от 35000₽ | NetConnect',
    description: 'Установка PTZ камер с поворотом 360° и 20x зумом. Автоследование объектов, патрулирование. Звоните: +7 (901) 500-00-78',
    keywords: 'ptz камеры, поворотные камеры, камеры с зумом, камеры с поворотом, автослежение, ptz установка, камеры 360 градусов',
    canonical: 'https://mosoblconnect.ru/services/cameras/ptz-cameras',
    ogTitle: 'PTZ камеры видеонаблюдения в Московской области',
    ogDescription: 'Поворотные камеры с зумом для контроля больших территорий. Поворот 360°, оптический зум, автотрекинг.',
    ogImage: 'https://cdn.poehali.dev/projects/d4f2c7e9-a091-4f1c-9e82-47f687864218/files/3027c2a4-0771-41a8-a6aa-ae281f79aacc.jpg',
    ogImageAlt: 'PTZ камеры с зумом NetConnect',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': 'PTZ камеры с поворотом и зумом',
      'description': 'Поворотные камеры для контроля больших территорий',
      'offers': {
        '@type': 'Offer',
        'price': '35000',
        'priceCurrency': 'RUB'
      }
    }
  });

  const features = [
    {
      icon: 'RotateCw',
      title: 'Поворот 360°',
      description: 'Горизонтальное вращение на полный круг и вертикальный наклон до 90°'
    },
    {
      icon: 'ZoomIn',
      title: 'Оптический зум',
      description: 'Увеличение от 5x до 40x без потери качества изображения'
    },
    {
      icon: 'Target',
      title: 'Автоследование',
      description: 'Автоматическое отслеживание движущихся объектов в зоне контроля'
    },
    {
      icon: 'MapPin',
      title: 'Пресеты позиций',
      description: 'Сохранение до 256 предустановленных точек для быстрого доступа'
    },
    {
      icon: 'Route',
      title: 'Патрулирование',
      description: 'Автоматический обход заданных зон по расписанию'
    },
    {
      icon: 'Moon',
      title: 'ИК подсветка',
      description: 'Инфракрасная подсветка до 150 метров для ночной съемки'
    }
  ];

  const advantages = [
    {
      title: 'Контроль больших территорий',
      description: 'Одна PTZ камера заменяет 4-6 обычных камер благодаря поворотному механизму и зуму',
      icon: 'Maximize2'
    },
    {
      title: 'Активная охрана',
      description: 'Оператор может управлять камерой в реальном времени для детального осмотра подозрительных объектов',
      icon: 'Gamepad2'
    },
    {
      title: 'Экономия на установке',
      description: 'Меньше камер = меньше кабелей, коммутаторов и точек монтажа',
      icon: 'DollarSign'
    },
    {
      title: 'Умная аналитика',
      description: 'Распознавание лиц, номеров, пересечение линий, подсчет людей',
      icon: 'Brain'
    }
  ];

  const useCases = [
    {
      icon: 'Store',
      title: 'Торговые центры',
      description: 'Наблюдение за большими залами, парковками, входными группами'
    },
    {
      icon: 'Warehouse',
      title: 'Складские комплексы',
      description: 'Контроль погрузки, разгрузки и больших складских площадей'
    },
    {
      icon: 'Building2',
      title: 'Периметр предприятий',
      description: 'Охрана территории, заборов, въездов и контрольно-пропускных пунктов'
    },
    {
      icon: 'Stadium',
      title: 'Стадионы и площади',
      description: 'Мониторинг массовых мероприятий и общественных пространств'
    }
  ];

  const models = [
    {
      name: 'Hikvision DS-2DE4A425IW',
      price: 'от 35 000 ₽',
      features: ['4 Мп', '25x оптический зум', 'Поворот 360°', 'ИК до 100м', 'Smart детекция', 'Автотрекинг']
    },
    {
      name: 'Dahua SD49425XB-HNR',
      price: 'от 42 500 ₽',
      features: ['4 Мп', '25x зум', 'Starlight', 'ИК до 150м', 'AI аналитика', 'Wipers (дворники)'],
      popular: true
    },
    {
      name: 'Uniview IPC6858SR-X38',
      price: 'от 68 000 ₽',
      features: ['8 Мп (4K)', '38x оптический зум', 'Поворот 360°', 'ИК до 200м', 'Face Recognition', 'ANPR']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SurveillanceHeader />
      <Breadcrumbs items={[
        { label: 'Услуги', href: '/services' },
        { label: 'Видеонаблюдение', href: '/services/surveillance' },
        { label: 'PTZ камеры' }
      ]} />
      
      <section className="pt-8 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <Icon name="Scan" size={16} className="mr-2" />
              Профессиональное оборудование
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              PTZ камеры с поворотом и зумом
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Поворотные камеры высокого разрешения с оптическим зумом до 40x для контроля больших территорий. 
              Автоследование объектов, патрулирование, детальный осмотр на расстоянии.
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
          <h2 className="text-3xl font-bold text-center mb-4">Возможности PTZ камер</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Технические характеристики поворотных камер
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
          <h2 className="text-3xl font-bold text-center mb-4">Преимущества PTZ</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Почему выбирают поворотные камеры
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {advantages.map((adv, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                      <Icon name={adv.icon} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{adv.title}</h3>
                      <p className="text-muted-foreground">{adv.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Где используются PTZ камеры</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Объекты, где PTZ камеры незаменимы
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {useCases.map((useCase, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <Icon name={useCase.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
                  <p className="text-muted-foreground text-sm">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Популярные модели</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Рекомендуемые PTZ камеры для профессионального использования
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {models.map((model, index) => (
              <Card key={index} className={model.popular ? 'border-primary shadow-lg scale-105' : ''}>
                <CardContent className="p-8">
                  {model.popular && (
                    <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      Рекомендуем
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2">{model.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-6">
                    {model.price}
                  </div>
                  <ul className="space-y-3 mb-6">
                    {model.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Icon name="Check" size={20} className="text-success mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={model.popular ? 'default' : 'outline'} asChild>
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
            <h2 className="text-3xl font-bold mb-6">Готовы установить PTZ камеры?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Получите профессиональную систему с поворотными камерами для полного контроля территории.
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

export default PtzCameras;