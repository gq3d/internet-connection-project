import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Wifi',
    title: 'Интернет-подключение',
    description: 'Беспроводной интернет до 250 Мбит/с через беспроводные технологии',
    features: ['До 250 Мбит/с', 'Стабильное соединение', '24/7 поддержка'],
    url: '/services/internet'
  },
  {
    icon: 'Video',
    title: 'Видеонаблюдение',
    description: 'Системы безопасности с удаленным доступом и записью',
    features: ['HD качество', 'Облачное хранение', 'Мобильное приложение'],
    url: '/services/surveillance'
  },
  {
    icon: 'Router',
    title: 'Wi-Fi оборудование',
    description: 'Установка и настройка Wi-Fi сетей, усиление сигнала',
    features: ['Профессиональная установка', 'Настройка роуминга', 'Усиление сигнала'],
    url: '/services/wifi'
  },
  {
    icon: 'Shield',
    title: 'Системы охраны',
    description: 'Комплексная безопасность: автоматизированные системы, физическая охрана домов и посёлков',
    features: ['Физическая охрана', 'Охрана посёлков', 'Системы контроля доступа'],
    url: '/services/security'
  },
  {
    icon: 'Satellite',
    title: 'Спутниковый интернет',
    description: 'Надежное покрытие в отдаленных районах Московской области',
    features: ['Покрытие 99%', 'Низкая задержка', 'Защита от помех'],
    url: '/services/satellite'
  },
  {
    icon: 'Signal',
    title: 'Усиление сотовой связи',
    description: 'Репитеры и усилители сигнала для стабильной мобильной связи',
    features: ['Все операторы', 'Увеличение зоны покрытия', 'Простая установка'],
    url: '/services/cellular-booster'
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Полный спектр телекоммуникационных и охранных услуг для дома и бизнеса
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <Link key={index} to={service.url}>
              <Card className="hover:shadow-lg transition-all duration-300 animate-scale-in cursor-pointer hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={24} className="text-success" />
                  </div>
                  <CardTitle as="h3" className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <Icon name="Check" size={16} className="text-success mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex items-center text-primary font-medium">
                    <span>Подробнее</span>
                    <Icon name="ArrowRight" size={16} className="ml-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* How it works schema */}
        <div className="bg-gradient-to-r from-primary/5 to-success/5 rounded-xl p-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-3">Как работает загородный 4G LTE интернет</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Простая и надёжная схема подключения для вашего дома
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
              {/* Базовая станция */}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="w-20 h-20 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                    <Icon name="Radio" size={40} className="text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-success rounded-full animate-ping"></div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-success rounded-full"></div>
                </div>
                <h4 className="font-semibold mb-2">Базовая станция</h4>
                <p className="text-sm text-muted-foreground">Оператор связи</p>
              </div>

              {/* Стрелка 1 */}
              <div className="flex justify-center items-center">
                <div className="hidden md:block">
                  <Icon name="ArrowRight" size={32} className="text-primary" />
                </div>
                <div className="md:hidden rotate-90">
                  <Icon name="ArrowDown" size={32} className="text-primary" />
                </div>
              </div>

              {/* Антенна на доме */}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="w-20 h-20 bg-secondary rounded-xl flex items-center justify-center shadow-lg">
                    <Icon name="Antenna" size={40} className="text-white" />
                  </div>
                </div>
                <h4 className="font-semibold mb-2">Антенна на доме</h4>
                <p className="text-sm text-muted-foreground">Приём сигнала LTE</p>
              </div>

              {/* Стрелка 2 */}
              <div className="flex justify-center items-center">
                <div className="hidden md:block">
                  <Icon name="ArrowRight" size={32} className="text-secondary" />
                </div>
                <div className="md:hidden rotate-90">
                  <Icon name="ArrowDown" size={32} className="text-secondary" />
                </div>
              </div>
            </div>

            {/* Вторая строка */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Роутер */}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="w-20 h-20 bg-success rounded-xl flex items-center justify-center shadow-lg">
                    <Icon name="Wifi" size={40} className="text-white" />
                  </div>
                </div>
                <h4 className="font-semibold mb-2">Домашний роутер</h4>
                <p className="text-sm text-muted-foreground">Раздача Wi-Fi</p>
              </div>

              {/* Устройства */}
              <div className="flex flex-col items-center text-center">
                <div className="flex gap-3 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-md">
                    <Icon name="Smartphone" size={28} className="text-white" />
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-success rounded-lg flex items-center justify-center shadow-md">
                    <Icon name="Laptop" size={28} className="text-white" />
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-success to-primary rounded-lg flex items-center justify-center shadow-md">
                    <Icon name="Tv" size={28} className="text-white" />
                  </div>
                </div>
                <h4 className="font-semibold mb-2">Ваши устройства</h4>
                <p className="text-sm text-muted-foreground">Смартфоны, ноутбуки, ТВ</p>
              </div>
            </div>

            {/* Стрелка от роутера к устройствам */}
            <div className="flex justify-center mt-4 md:mt-0">
              <Icon name="MoveDown" size={32} className="text-success md:hidden" />
            </div>
          </div>

          {/* Преимущества */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3 bg-card/50 rounded-lg p-4">
              <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                <Icon name="Zap" size={20} className="text-primary" />
              </div>
              <div>
                <h5 className="font-semibold mb-1">Быстрая установка</h5>
                <p className="text-sm text-muted-foreground">Подключение за 1 день</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-card/50 rounded-lg p-4">
              <div className="bg-success/10 p-2 rounded-lg flex-shrink-0">
                <Icon name="Shield" size={20} className="text-success" />
              </div>
              <div>
                <h5 className="font-semibold mb-1">Стабильный сигнал</h5>
                <p className="text-sm text-muted-foreground">До 250 Мбит/с</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-card/50 rounded-lg p-4">
              <div className="bg-secondary/10 p-2 rounded-lg flex-shrink-0">
                <Icon name="Home" size={20} className="text-secondary" />
              </div>
              <div>
                <h5 className="font-semibold mb-1">Для всего дома</h5>
                <p className="text-sm text-muted-foreground">Покрытие по всей территории</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}