import { Link } from 'react-router-dom';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useSEO } from '@/hooks/useSEO';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import SurveillanceHeader from '@/components/surveillance/SurveillanceHeader';
import UniversalFooter from '@/components/UniversalFooter';

const WifiDiagnostics = () => {
  useSEO({
    title: 'Диагностика и настройка Wi-Fi в МО от 3000₽ | NetConnect',
    description: 'Профессиональная диагностика проблем Wi-Fi, настройка параметров, оптимизация каналов, настройка QoS. Звоните: +7 (901) 500-00-78',
    canonical: 'https://mosoblconnect.ru/services/wifi-diagnostics',
    ogTitle: 'Диагностика и настройка Wi-Fi в Московской области',
    ogDescription: 'Диагностика проблем с Wi-Fi сетью, оптимизация каналов, настройка QoS, устранение помех, мониторинг сети.',
    ogImage: 'https://cdn.mosoblconnect.ru/files/wifi-diagnostics.jpg',
    ogImageAlt: 'Диагностика Wi-Fi NetConnect',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Диагностика и настройка Wi-Fi',
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
        'name': 'Диагностика Wi-Fi',
        'price': '3000',
        'priceCurrency': 'RUB'
      }
    }
  });

  const problems = [
    {
      icon: 'TrendingDown',
      title: 'Низкая скорость',
      causes: ['Перегруженный канал', 'Помехи от соседей', 'Устаревший стандарт Wi-Fi'],
      solution: 'Анализируем спектр, выбираем свободный канал, обновляем оборудование'
    },
    {
      icon: 'WifiOff',
      title: 'Обрывы связи',
      causes: ['Перегрев роутера', 'Конфликт IP адресов', 'Проблемы с прошивкой'],
      solution: 'Проверяем температуру, исправляем настройки DHCP, обновляем ПО'
    },
    {
      icon: 'Users',
      title: 'Много устройств',
      causes: ['Недостаточная мощность роутера', 'Нет приоритизации трафика'],
      solution: 'Настраиваем QoS для приоритетных устройств, рекомендуем обновление'
    },
    {
      icon: 'Signal',
      title: 'Слабый сигнал',
      causes: ['Неправильное размещение', 'Препятствия (стены, металл)', 'Низкая мощность'],
      solution: 'Перемещаем роутер, меняем канал, настраиваем мощность передатчика'
    }
  ];

  const services = [
    {
      icon: 'Search',
      title: 'Анализ сети',
      description: 'Сканируем все Wi-Fi сети в радиусе, измеряем уровень сигнала, выявляем помехи',
      price: 'от 3 000 ₽'
    },
    {
      icon: 'Settings',
      title: 'Оптимизация настроек',
      description: 'Выбираем оптимальный канал, настраиваем мощность, ширину канала',
      price: 'от 4 000 ₽'
    },
    {
      icon: 'Gauge',
      title: 'Настройка QoS',
      description: 'Приоритизируем важный трафик: видеозвонки, игры, стриминг',
      price: 'от 5 000 ₽'
    },
    {
      icon: 'Activity',
      title: 'Мониторинг сети',
      description: 'Устанавливаем систему мониторинга для контроля производительности',
      price: 'от 8 000 ₽'
    }
  ];

  const diagnosticTools = [
    {
      name: 'Анализатор спектра',
      description: 'Профессиональное оборудование для измерения уровня сигнала и поиска помех'
    },
    {
      name: 'Heat Map',
      description: 'Составляем карту покрытия с точными значениями сигнала в каждой точке'
    },
    {
      name: 'Speed Test',
      description: 'Проверяем реальную скорость Wi-Fi в разных точках помещения'
    },
    {
      name: 'Channel Scanner',
      description: 'Сканируем все доступные каналы и находим наименее загруженные'
    }
  ];

  const optimizations = [
    {
      icon: 'Radio',
      title: 'Выбор канала',
      description: 'Переключаем на свободный канал с минимальными помехами от соседских сетей'
    },
    {
      icon: 'Maximize',
      title: 'Ширина канала',
      description: 'Настраиваем оптимальную ширину: 20/40/80/160 MHz в зависимости от условий'
    },
    {
      icon: 'Zap',
      title: 'Мощность передатчика',
      description: 'Регулируем мощность для баланса между покрытием и помехами'
    },
    {
      icon: 'Shield',
      title: 'Безопасность',
      description: 'Включаем WPA3, скрываем SSID, настраиваем фильтрацию MAC-адресов'
    },
    {
      icon: 'Layers',
      title: 'Band Steering',
      description: 'Автоматически направляем совместимые устройства на 5 GHz'
    },
    {
      icon: 'Target',
      title: 'Airtime Fairness',
      description: 'Предотвращаем замедление сети из-за медленных устройств'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SurveillanceHeader />
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Диагностика и настройка Wi-Fi в Московской области
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Профессиональная диагностика проблем с Wi-Fi сетью и оптимизация всех параметров 
              для максимальной скорости и стабильности соединения.
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
          <h2 className="text-3xl font-bold text-center mb-4">Типичные проблемы и решения</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Диагностируем и устраняем любые проблемы с Wi-Fi
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {problems.map((problem, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-destructive/10 rounded-full flex-shrink-0">
                      <Icon name={problem.icon} size={24} className="text-destructive" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
                      <p className="text-sm font-medium text-muted-foreground mb-2">Возможные причины:</p>
                      <ul className="space-y-1 mb-3">
                        {problem.causes.map((cause, causeIndex) => (
                          <li key={causeIndex} className="text-sm text-muted-foreground flex items-start">
                            <span className="mr-2">•</span>
                            {cause}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2 bg-success/5 p-3 rounded-lg">
                    <Icon name="CheckCircle" size={18} className="text-success mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-success mb-1">Наше решение:</p>
                      <p className="text-sm text-muted-foreground">{problem.solution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Комплексная диагностика и настройка Wi-Fi сети
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <Icon name={service.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                  <p className="text-lg font-bold text-primary">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Инструменты диагностики</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Используем профессиональное оборудование для точного анализа
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {diagnosticTools.map((tool, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <Icon name="Tool" size={32} className="text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">{tool.name}</h3>
                  <p className="text-sm text-muted-foreground">{tool.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Параметры оптимизации</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Настраиваем все параметры для максимальной производительности
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {optimizations.map((opt, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <Icon name={opt.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{opt.title}</h3>
                  <p className="text-sm text-muted-foreground">{opt.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Проблемы с Wi-Fi?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Закажите профессиональную диагностику и настройку сети для стабильной работы интернета.
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

export default WifiDiagnostics;
