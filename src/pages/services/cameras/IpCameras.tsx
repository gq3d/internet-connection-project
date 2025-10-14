import { Link } from 'react-router-dom';
import { useSEO } from '@/hooks/useSEO';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import SurveillanceHeader from '@/components/surveillance/SurveillanceHeader';
import Breadcrumbs from '@/components/Breadcrumbs';
import Footer from '@/components/home/Footer';

const IpCameras = () => {
  useSEO({
    title: 'IP камеры Full HD в МО от 8000₽ | NetConnect',
    description: 'Установка IP камер Full HD 1920x1080. PoE питание, ночное видение до 30м, удаленный доступ. Звоните: +7 (901) 500-00-78',
    keywords: 'ip камеры, ip камеры установка, видеонаблюдение московская область, камеры full hd, poe камеры, цифровые камеры, камеры видеонаблюдения цена',
    canonical: 'https://mosoblconnect.ru/services/cameras/ip-cameras',
    ogTitle: 'IP камеры Full HD в Московской области от 8000₽',
    ogDescription: 'Цифровые IP камеры высокого разрешения. PoE питание, детекция движения, мобильное приложение, облачное хранение.',
    ogImage: 'https://cdn.poehali.dev/projects/d4f2c7e9-a091-4f1c-9e82-47f687864218/files/7bf1427f-7dfd-4c77-a162-8c3203ad7d1b.jpg',
    ogImageAlt: 'IP камеры Full HD NetConnect',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': 'IP камеры видеонаблюдения Full HD',
      'description': 'Цифровые IP камеры 1920x1080 с PoE питанием',
      'offers': {
        '@type': 'Offer',
        'price': '8000',
        'priceCurrency': 'RUB'
      }
    }
  });

  const advantages = [
    {
      icon: 'Wifi',
      title: 'Сетевое подключение',
      description: 'Подключение по Ethernet с PoE питанием — один кабель для данных и электричества'
    },
    {
      icon: 'Hd',
      title: 'Качество Full HD',
      description: 'Разрешение 1920x1080 пикселей для четкого изображения и распознавания лиц'
    },
    {
      icon: 'Moon',
      title: 'Ночное видение',
      description: 'ИК подсветка до 30 метров для съемки в полной темноте'
    },
    {
      icon: 'Smartphone',
      title: 'Удаленный доступ',
      description: 'Просмотр видео с любого устройства через мобильное приложение или браузер'
    },
    {
      icon: 'BellRing',
      title: 'Детекция движения',
      description: 'Умное определение движения с уведомлениями на смартфон'
    },
    {
      icon: 'Cloud',
      title: 'Облачное хранение',
      description: 'Запись видео в облако или на сетевой видеорегистратор (NVR)'
    }
  ];

  const models = [
    {
      name: 'Hikvision DS-2CD2043G2',
      price: 'от 8 500 ₽',
      features: ['4 Мп разрешение', 'H.265+ кодек', 'ИК до 30м', 'PoE', 'IP67 защита', 'MicroSD до 256 ГБ']
    },
    {
      name: 'Dahua IPC-HFW2431S',
      price: 'от 9 200 ₽',
      features: ['4 Мп разрешение', 'Starlight технология', 'ИК до 40м', 'PoE', 'WDR 120 дБ', 'Детекция лиц'],
      popular: true
    },
    {
      name: 'Uniview IPC2124SR3',
      price: 'от 7 800 ₽',
      features: ['4 Мп разрешение', 'Smart детекция', 'ИК до 30м', 'PoE', 'IP67 защита', 'ONVIF']
    }
  ];

  const useCases = [
    {
      icon: 'Home',
      title: 'Частные дома',
      description: 'Контроль территории, входных групп, парковки'
    },
    {
      icon: 'Store',
      title: 'Магазины',
      description: 'Наблюдение за торговым залом, кассами, складами'
    },
    {
      icon: 'Building',
      title: 'Офисы',
      description: 'Безопасность периметра, входов, парковок'
    },
    {
      icon: 'Warehouse',
      title: 'Склады',
      description: 'Контроль погрузки, разгрузки, складских помещений'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SurveillanceHeader />
      <Breadcrumbs items={[
        { label: 'Услуги', href: '/services' },
        { label: 'Видеонаблюдение', href: '/services/surveillance' },
        { label: 'IP камеры Full HD' }
      ]} />
      
      <section className="pt-8 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <Icon name="Video" size={16} className="mr-2" />
              Популярный выбор
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              IP камеры Full HD для видеонаблюдения
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Цифровые камеры высокого разрешения 1920x1080 с PoE питанием и ночным видением. 
              Идеальное решение для дома, офиса, магазина или склада.
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
          <h2 className="text-3xl font-bold text-center mb-4">Преимущества IP камер</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Почему IP камеры Full HD — оптимальный выбор для видеонаблюдения
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
          <h2 className="text-3xl font-bold text-center mb-4">Популярные модели</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Рекомендуемые IP камеры с лучшим соотношением цена/качество
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {models.map((model, index) => (
              <Card key={index} className={model.popular ? 'border-primary shadow-lg scale-105' : ''}>
                <CardContent className="p-8">
                  {model.popular && (
                    <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      Лидер продаж
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

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Где используются</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            IP камеры Full HD подходят для любых объектов
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

      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Готовы установить IP камеры?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Закажите бесплатную консультацию и расчет стоимости системы видеонаблюдения.
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

      <Footer />
    </div>
  );
};

export default IpCameras;