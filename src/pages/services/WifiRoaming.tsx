import { Link } from 'react-router-dom';
import { useSEO } from '@/hooks/useSEO';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import SurveillanceHeader from '@/components/surveillance/SurveillanceHeader';
import Footer from '@/components/home/Footer';

const WifiRoaming = () => {
  useSEO({
    title: 'Бесшовный Wi-Fi роуминг в МО от 15000₽ | NetConnect',
    description: 'Настройка бесшовного переключения между точками доступа. Единая сеть без обрывов при перемещении. Звоните: +7 (901) 500-00-78',
    canonical: 'https://wiline.ru/services/wifi-roaming',
    ogTitle: 'Бесшовный Wi-Fi роуминг в Московской области',
    ogDescription: 'Настройка роуминга между точками доступа. Автоматическое переключение, единая сеть, стабильное соединение без обрывов.',
    ogImage: 'https://cdn.wiline.ru/files/wifi-roaming.jpg',
    ogImageAlt: 'Бесшовный Wi-Fi роуминг NetConnect',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Настройка Wi-Fi роуминга',
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
        'name': 'Wi-Fi роуминг',
        'price': '15000',
        'priceCurrency': 'RUB'
      }
    }
  });

  const benefits = [
    {
      icon: 'Zap',
      title: 'Мгновенное переключение',
      description: 'Устройства автоматически переключаются на ближайшую точку доступа за доли секунды'
    },
    {
      icon: 'Wifi',
      title: 'Единая сеть',
      description: 'Один SSID для всех точек доступа — не нужно вручную переключаться между сетями'
    },
    {
      icon: 'Video',
      title: 'Без обрывов',
      description: 'Видеозвонки, стримы и загрузки не прерываются при перемещении по дому'
    },
    {
      icon: 'Smartphone',
      title: 'Совместимость',
      description: 'Работает со всеми современными смартфонами, планшетами и ноутбуками'
    },
    {
      icon: 'Signal',
      title: 'Оптимальный сигнал',
      description: 'Система автоматически выбирает точку с лучшим сигналом'
    },
    {
      icon: 'Gauge',
      title: 'Стабильная скорость',
      description: 'Высокая скорость интернета во всех точках покрытия'
    }
  ];

  const technologies = [
    {
      name: '802.11k/v/r',
      description: 'Стандарты быстрого роуминга для корпоративных сетей',
      features: ['Информация о соседних точках', 'Предварительная аутентификация', 'Fast BSS Transition', 'Поддержка enterprise устройств']
    },
    {
      name: 'Mesh Wi-Fi',
      description: 'Автоматическая самоорганизующаяся сеть',
      features: ['Plug & Play установка', 'Автоматическая настройка', 'Единое управление', 'Подходит для дома'],
      popular: true
    },
    {
      name: 'Контроллер + AP',
      description: 'Профессиональная централизованная система',
      features: ['Точный контроль роуминга', 'Балансировка нагрузки', 'Продвинутая аналитика', 'Для офисов и отелей']
    }
  ];

  const useCases = [
    {
      icon: 'Home',
      title: 'Многоэтажный дом',
      description: 'Свободно перемещайтесь между этажами без потери соединения во время видеозвонков'
    },
    {
      icon: 'Building',
      title: 'Офисное здание',
      description: 'Сотрудники перемещаются между кабинетами без обрывов VPN и корпоративных приложений'
    },
    {
      icon: 'Hotel',
      title: 'Гостиница',
      description: 'Гости получают бесшовный Wi-Fi во всех зонах: номера, холлы, рестораны'
    },
    {
      icon: 'Warehouse',
      title: 'Склад/производство',
      description: 'Мобильные терминалы и планшеты работают без перебоев при перемещении персонала'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SurveillanceHeader />
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Бесшовный Wi-Fi роуминг в Московской области
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Настраиваем автоматическое переключение между точками доступа без обрывов соединения. 
              Единая сеть для комфортной работы и развлечений в любой точке дома или офиса.
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
          <h2 className="text-3xl font-bold text-center mb-4">Преимущества бесшовного роуминга</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Почему стоит настроить роуминг между точками доступа
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <Icon name={benefit.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Технологии роуминга</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Выбираем подходящее решение для ваших задач
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {technologies.map((tech, index) => (
              <Card key={index} className={tech.popular ? 'border-primary shadow-lg scale-105' : ''}>
                <CardContent className="p-8">
                  {tech.popular && (
                    <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      Для дома
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{tech.name}</h3>
                  <p className="text-muted-foreground mb-6">{tech.description}</p>
                  <ul className="space-y-3">
                    {tech.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Icon name="Check" size={20} className="text-success mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Где нужен Wi-Fi роуминг</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Примеры использования бесшовных сетей
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
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-center">Как мы настраиваем роуминг</h2>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-primary text-primary-foreground rounded-full flex-shrink-0 font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Анализ инфраструктуры</h3>
                      <p className="text-sm text-muted-foreground">Проверяем существующее оборудование на поддержку роуминга</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-primary text-primary-foreground rounded-full flex-shrink-0 font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Выбор технологии</h3>
                      <p className="text-sm text-muted-foreground">Mesh, контроллер или стандарты 802.11k/v/r</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-primary text-primary-foreground rounded-full flex-shrink-0 font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Настройка точек</h3>
                      <p className="text-sm text-muted-foreground">Конфигурируем все точки доступа для бесшовной работы</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-primary text-primary-foreground rounded-full flex-shrink-0 font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Тестирование</h3>
                      <p className="text-sm text-muted-foreground">Проверяем переключение в реальных условиях</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Хотите настроить бесшовный роуминг?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Закажите консультацию специалиста для оценки вашей сети и подбора оптимального решения.
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

      <Footer />
    </div>
  );
};

export default WifiRoaming;