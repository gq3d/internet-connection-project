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
          <div className="text-center mb-8">
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Узнайте больше о технологии загородного 4G LTE интернета
            </p>
          </div>
          <div className="flex justify-center">
            <img 
              src="https://cdn.poehali.dev/files/2997c079-7b43-4318-aa5d-443368a2d830.png" 
              alt="Схема подключения 4G LTE интернета: сигнал от базовой станции оператора через антенну к встроенному LTE-модему и Wi-Fi роутеру для обеспечения интернетом всех устройств" 
              className="max-w-full h-auto rounded-lg shadow-lg border"
              loading="lazy"
              width="800"
              height="400"
            />
          </div>
        </div>
      </div>
    </section>
  );
}