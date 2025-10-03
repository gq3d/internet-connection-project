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
        <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-success/5 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Как работает загородный 4G LTE интернет</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Простая и надёжная схема подключения для вашего дома
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Схема слева */}
              <div className="relative bg-card/80 backdrop-blur rounded-xl p-8 border-2 border-primary/20">
                {/* Домик */}
                <div className="relative">
                  {/* Крыша */}
                  <div className="w-0 h-0 mx-auto mb-2
                    border-l-[120px] border-l-transparent
                    border-b-[80px] border-b-foreground/10
                    border-r-[120px] border-r-transparent">
                  </div>
                  
                  {/* Стены дома */}
                  <div className="border-4 border-foreground/10 p-6 rounded-b-lg relative bg-card">
                    {/* Антенна снаружи */}
                    <div className="absolute -top-12 right-8 flex flex-col items-center">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/80 rounded-lg flex items-center justify-center shadow-xl border-2 border-white/20">
                          <Icon name="Antenna" size={24} className="text-white" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-success rounded-full"></div>
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-semibold whitespace-nowrap bg-secondary/10 px-2 py-1 rounded-md">①</span>
                      </div>
                    </div>

                    {/* Устройства внутри дома */}
                    <div className="grid grid-cols-2 gap-4">
                      {/* Роутер */}
                      <div className="flex flex-col items-center">
                        <div className="relative mb-2">
                          <div className="w-14 h-14 bg-gradient-to-br from-success to-success/80 rounded-lg flex items-center justify-center shadow-lg">
                            <Icon name="Wifi" size={28} className="text-white" />
                          </div>
                          {/* Волны Wi-Fi */}
                          <div className="absolute -top-1 -left-1 w-4 h-4">
                            <div className="absolute inset-0 border-2 border-success/40 rounded-full animate-ping"></div>
                          </div>
                          <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-semibold bg-success/10 px-2 py-1 rounded-md">②</span>
                        </div>
                        <p className="text-xs text-muted-foreground text-center">Роутер</p>
                      </div>

                      {/* Ноутбук */}
                      <div className="flex flex-col items-center">
                        <div className="relative mb-2">
                          <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg">
                            <Icon name="Laptop" size={28} className="text-white" />
                          </div>
                          <Icon name="Wifi" size={12} className="absolute -top-2 -right-2 text-success" />
                          <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-semibold bg-primary/10 px-2 py-1 rounded-md">③</span>
                        </div>
                        <p className="text-xs text-muted-foreground text-center">Ноутбук</p>
                      </div>

                      {/* Смартфон */}
                      <div className="flex flex-col items-center">
                        <div className="relative mb-2">
                          <div className="w-14 h-14 bg-gradient-to-br from-secondary to-secondary/80 rounded-lg flex items-center justify-center shadow-lg">
                            <Icon name="Smartphone" size={28} className="text-white" />
                          </div>
                          <Icon name="Wifi" size={12} className="absolute -top-2 -right-2 text-success" />
                          <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-semibold bg-secondary/10 px-2 py-1 rounded-md">④</span>
                        </div>
                        <p className="text-xs text-muted-foreground text-center">Смартфон</p>
                      </div>

                      {/* ТВ */}
                      <div className="flex flex-col items-center">
                        <div className="relative mb-2">
                          <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg">
                            <Icon name="Tv" size={28} className="text-white" />
                          </div>
                          <Icon name="Wifi" size={12} className="absolute -top-2 -right-2 text-success" />
                          <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-semibold bg-primary/10 px-2 py-1 rounded-md">⑤</span>
                        </div>
                        <p className="text-xs text-muted-foreground text-center">Smart TV</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Базовая станция справа */}
              <div className="relative flex flex-col items-center lg:items-start">
                {/* Стрелки сигнала */}
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-20">
                  <div className="flex gap-1">
                    <Icon name="MoveLeft" size={24} className="text-primary animate-pulse" style={{ animationDelay: '0ms' }} />
                    <Icon name="MoveLeft" size={24} className="text-primary animate-pulse" style={{ animationDelay: '200ms' }} />
                    <Icon name="MoveLeft" size={24} className="text-primary animate-pulse" style={{ animationDelay: '400ms' }} />
                  </div>
                </div>

                {/* Вышка */}
                <div className="relative">
                  {/* Волны сигнала */}
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 -z-10">
                    <div className="w-32 h-32 border-4 border-primary/20 rounded-full animate-ping"></div>
                  </div>
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 -z-10">
                    <div className="w-24 h-24 border-4 border-primary/30 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                  </div>
                  
                  {/* Антенна вышки */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20 relative z-10">
                      <Icon name="Radio" size={32} className="text-white" />
                    </div>
                    
                    {/* Мачта */}
                    <div className="w-1 h-32 bg-gradient-to-b from-foreground/30 to-foreground/10"></div>
                    <div className="w-8 h-1 bg-foreground/20 -translate-y-28"></div>
                    <div className="w-12 h-1 bg-foreground/20 -translate-y-20"></div>
                    <div className="w-16 h-1 bg-foreground/20 -translate-y-12"></div>
                    
                    {/* Основание */}
                    <div className="w-0 h-0 -mt-4
                      border-l-[40px] border-l-transparent
                      border-b-[60px] border-b-foreground/10
                      border-r-[40px] border-r-transparent">
                    </div>
                  </div>
                  
                  <p className="text-center mt-4 font-semibold">Базовая станция оператора</p>
                  <p className="text-sm text-muted-foreground text-center">4G/LTE сигнал</p>
                </div>
              </div>
            </div>

            {/* Преимущества */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-5 border border-primary/20 hover:shadow-lg transition-shadow">
                <div className="bg-primary p-3 rounded-lg flex-shrink-0">
                  <Icon name="Zap" size={24} className="text-white" />
                </div>
                <div>
                  <h5 className="font-bold mb-1 text-lg">Быстрая установка</h5>
                  <p className="text-sm text-muted-foreground">Подключение за 1 день</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-gradient-to-br from-success/10 to-success/5 rounded-xl p-5 border border-success/20 hover:shadow-lg transition-shadow">
                <div className="bg-success p-3 rounded-lg flex-shrink-0">
                  <Icon name="Signal" size={24} className="text-white" />
                </div>
                <div>
                  <h5 className="font-bold mb-1 text-lg">Стабильный сигнал</h5>
                  <p className="text-sm text-muted-foreground">До 250 Мбит/с</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl p-5 border border-secondary/20 hover:shadow-lg transition-shadow">
                <div className="bg-secondary p-3 rounded-lg flex-shrink-0">
                  <Icon name="Home" size={24} className="text-white" />
                </div>
                <div>
                  <h5 className="font-bold mb-1 text-lg">Для всего дома</h5>
                  <p className="text-sm text-muted-foreground">Покрытие по всей территории</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}