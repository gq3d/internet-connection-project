import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import WhatsAppButton from '@/components/WhatsAppButton';
import UniversalFooter from '@/components/UniversalFooter';
import SurveillanceHeader from '@/components/surveillance/SurveillanceHeader';
import { useSEO } from '@/hooks/useSEO';

const Wifi = () => {

  useSEO({
    title: 'Wi-Fi оборудование для дома в МО от 8000₽ | NetConnect',
    description: 'Продажа и установка Wi-Fi оборудования в Московской области: роутеры, mesh-системы, точки доступа. Профессиональная настройка для полного покрытия дома без мертвых зон. Цены от 8000 рублей.',
    keywords: 'wi-fi оборудование, установка wifi, mesh системы, роутеры для дома, точки доступа, wifi московская область, усиление wifi сигнала, беспроводная сеть',
    canonical: 'https://mosoblconnect.ru/services/wifi',
    ogTitle: 'Wi-Fi оборудование для дома в МО от 8000₽',
    ogDescription: 'Профессиональное Wi-Fi оборудование: роутеры, mesh-системы, точки доступа. Покрытие всего дома без мертвых зон',
    ogImage: 'https://cdn.mosoblconnect.ru/files/0b95440d-0b84-41b8-8404-418760cb07a4.jpg',
    ogImageAlt: 'Wi-Fi оборудование NetConnect для дома в Московской области'
  });

  const services = [
    {
      icon: 'Router',
      title: 'Установка Wi-Fi сетей',
      description: 'Профессиональная установка и настройка беспроводных сетей любой сложности',
      features: ['Выбор оптимального оборудования', 'Настройка безопасности WPA3', 'Оптимизация покрытия', 'Гарантия на работы'],
      link: '/services/wifi-installation'
    },
    {
      icon: 'Signal',
      title: 'Усиление сигнала',
      description: 'Расширение зоны покрытия Wi-Fi с помощью репитеров и mesh-систем',
      features: ['Анализ покрытия', 'Установка усилителей', 'Настройка mesh-сети', 'Устранение мертвых зон'],
      link: '/services/wifi-signal-boost'
    },
    {
      icon: 'Wifi',
      title: 'Роуминг между точками',
      description: 'Бесшовное переключение между точками доступа при перемещении',
      features: ['Настройка роуминга', 'Единая сеть', 'Автоматическое переключение', 'Стабильное соединение'],
      link: '/services/wifi-roaming'
    },
    {
      icon: 'Settings',
      title: 'Настройка и диагностика',
      description: 'Полная настройка параметров сети и устранение проблем с подключением',
      features: ['Диагностика проблем', 'Оптимизация каналов', 'Настройка QoS', 'Мониторинг сети'],
      link: '/services/wifi-diagnostics'
    }
  ];

  const equipment = [
    {
      type: 'Домашние роутеры',
      models: ['TP-Link Archer AX73', 'ASUS AX6000', 'Xiaomi AX6000'],
      price: 'от 8 000 ₽',
      description: 'Wi-Fi 6 роутеры для квартир и домов до 200 м²'
    },
    {
      type: 'Mesh-системы', 
      models: ['TP-Link Deco X60', 'ASUS ZenWiFi AX6600', 'Xiaomi Mesh System'],
      price: 'от 15 000 ₽',
      description: 'Бесшовное покрытие для больших домов и офисов'
    },
    {
      type: 'Профессиональные точки',
      models: ['Ubiquiti UniFi', 'Mikrotik cAP', 'Aruba Instant On'],
      price: 'от 26 000 ₽',
      description: 'Корпоративное оборудование для офисов и предприятий'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SurveillanceHeader />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Icon name="Router" size={32} className="text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Wi-Fi оборудование
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Установка и настройка Wi-Fi сетей, усиление сигнала и создание бесшовного покрытия
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2 bg-success/10 text-success border-success/20">
                <Icon name="Wifi" size={16} className="mr-2" />
                Wi-Fi 6 технология
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-success/10 text-success border-success/20">
                <Icon name="Shield" size={16} className="mr-2" />
                WPA3 защита
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-success/10 text-success border-success/20">
                <Icon name="Settings" size={16} className="mr-2" />
                Профессиональная установка
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши Wi-Fi услуги</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.link}>
                <Card className="hover:shadow-xl hover:scale-[1.02] hover:border-primary/30 transition-all duration-300 cursor-pointer h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                        <Icon name={service.icon} size={24} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                        <p className="text-muted-foreground mb-4">{service.description}</p>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm">
                              <Icon name="Check" size={16} className="text-success mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Рекомендуемое оборудование</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {equipment.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.type}</h3>
                  <div className="text-2xl font-bold text-primary mb-2">{item.price}</div>
                  <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium">Популярные модели:</h4>
                    <ul className="space-y-1">
                      {item.models.map((model, modelIndex) => (
                        <li key={modelIndex} className="text-sm text-muted-foreground">• {model}</li>
                      ))}
                    </ul>
                  </div>

                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Как мы работаем</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full mb-4 text-xl font-bold">1</div>
                <h3 className="font-semibold mb-2">Консультация</h3>
                <p className="text-sm text-muted-foreground">Выезд специалиста для оценки объекта и составления плана</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full mb-4 text-xl font-bold">2</div>
                <h3 className="font-semibold mb-2">Планирование</h3>
                <p className="text-sm text-muted-foreground">Разработка схемы сети и выбор оптимального оборудования</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full mb-4 text-xl font-bold">3</div>
                <h3 className="font-semibold mb-2">Установка</h3>
                <p className="text-sm text-muted-foreground">Монтаж оборудования и прокладка кабельной инфраструктуры</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full mb-4 text-xl font-bold">4</div>
                <h3 className="font-semibold mb-2">Настройка</h3>
                <p className="text-sm text-muted-foreground">Конфигурация сети, тестирование и обучение пользователей</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Examples Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Примеры усиления Wi-Fi в загородных домах</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Профессиональная установка Wi-Fi оборудования для полного покрытия участка и дома
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Example 1: Outdoor TP-Link */}
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img 
                    src="https://cdn.poehali.dev/files/bdc92972-868c-4116-8dc6-32712c0b3ebe.png" 
                    alt="Уличная Wi-Fi точка доступа TP-Link" 
                    loading="lazy"
                    width="640"
                    height="360"
                    className="w-full h-64 object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-success/90 text-white">
                    Уличное оборудование
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Покрытие всего участка</h3>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Icon name="CheckCircle" size={16} className="text-success mr-2" />
                      <span>Уличная точка TP-Link</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="CheckCircle" size={16} className="text-success mr-2" />
                      <span>Радиус покрытия до 200м</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="CheckCircle" size={16} className="text-success mr-2" />
                      <span>Защита от влаги IP65</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Установка уличного Wi-Fi оборудования на фасаде для покрытия двора, сада и беседки
                  </p>
                </CardContent>
              </Card>

              {/* Example 2: Wall Mounted */}
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img 
                    src="https://cdn.poehali.dev/files/c0e2520c-f57b-445e-9706-7781bf7b230e.png" 
                    alt="Настенная Wi-Fi точка доступа" 
                    loading="lazy"
                    width="640"
                    height="360"
                    className="w-full h-64 object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary/90 text-white">
                    Mesh система
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Mesh сеть для дома</h3>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Icon name="CheckCircle" size={16} className="text-success mr-2" />
                      <span>Бесшовное покрытие</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="CheckCircle" size={16} className="text-success mr-2" />
                      <span>Настенный монтаж</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="CheckCircle" size={16} className="text-success mr-2" />
                      <span>Скорость до 1200 Мбит/с</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Компактная точка доступа на кирпичном фасаде обеспечивает стабильное покрытие всех комнат
                  </p>
                </CardContent>
              </Card>

              {/* Example 3: Indoor Setup */}
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img 
                    src="https://cdn.poehali.dev/files/dc28b1d8-f743-43c6-be30-d7bcca2650db.png" 
                    alt="Внутренняя установка Wi-Fi роутеров D-Link" 
                    loading="lazy"
                    width="640"
                    height="360"
                    className="w-full h-64 object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-secondary/90 text-white">
                    Профессиональное оборудование
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Центральная точка доступа</h3>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Icon name="CheckCircle" size={16} className="text-success mr-2" />
                      <span>Роутеры D-Link</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="CheckCircle" size={16} className="text-success mr-2" />
                      <span>Аккуратная прокладка кабелей</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="CheckCircle" size={16} className="text-success mr-2" />
                      <span>Настройка и тестирование</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Профессиональная установка нескольких роутеров в техническом помещении с настройкой единой сети
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                <CardContent className="p-8">
                  <Icon name="Radio" size={48} className="text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-3">Комплексные решения для загородных домов</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Проектируем и устанавливаем Wi-Fi сети любой сложности: от небольших коттеджей до больших усадеб 
                    с несколькими строениями. Гарантируем стабильное покрытие во всех зонах
                  </p>
                  <div className="flex flex-wrap justify-center gap-6 text-sm">
                    <div className="flex items-center">
                      <Icon name="Check" size={18} className="text-success mr-2" />
                      <span>Бесплатная диагностика</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Check" size={18} className="text-success mr-2" />
                      <span>Профессиональное оборудование</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Check" size={18} className="text-success mr-2" />
                      <span>Гарантия 2 года</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Link Section */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mt-12 mb-8">
              <Link 
                to="/reviews"
                className="group block"
              >
                <Card className="overflow-hidden border-0 shadow-lg bg-gradient-to-br from-primary via-primary/95 to-secondary hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                          <Icon name="Star" size={18} className="text-yellow-300" />
                          <span className="text-white text-sm font-medium">500+ довольных клиентов</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-white">
                          Узнайте, что говорят наши клиенты
                        </h3>
                      </div>
                      <div className="flex items-center gap-3 bg-white hover:bg-white/95 text-primary px-6 py-3 rounded-xl font-bold shadow-lg group-hover:shadow-xl transition-all">
                        <Icon name="MessageSquare" size={20} />
                        <span>Читать отзывы</span>
                        <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Нужна помощь с Wi-Fi?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Закажите выезд специалиста для бесплатной консультации и составления плана Wi-Fi сети
            </p>

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

      <UniversalFooter customCopyright="© 2015 NetConnect. Wi-Fi оборудование для дома и бизнеса в Московской области." />
      <WhatsAppButton />
    </div>
  );
};

export default Wifi;