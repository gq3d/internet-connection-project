import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const engineerServices = [
  {
    icon: 'Wrench',
    title: 'Стандартные работы',
    color: 'from-blue-600 to-blue-700',
    items: [
      { name: 'Выезд инженера, диагностика сети, замер сигнала', price: 'от 2000 ₽' },
      { name: 'Установка кронштейна для антенны MIMO', price: 'от 2000 ₽' },
      { name: 'Подключение и настройка антенны MIMO', price: 'от 2500 ₽' },
      { name: 'Подключение и настройка Wi-Fi роутера', price: 'от 1500 ₽' },
      { name: 'Прокладка кабеля', price: 'от 150 ₽/м' },
      { name: 'Сверление отверстия в оконной раме', price: 'от 500 ₽' },
      { name: 'Сверление отверстия в стене', price: 'от 1000 ₽' }
    ]
  },
  {
    icon: 'Settings',
    title: 'Пусконаладочные работы',
    color: 'from-indigo-600 to-indigo-700',
    items: [
      { name: 'Проверка и настройка сетевого оборудования', price: 'от 3500 ₽' },
      { name: 'Тестирование стабильности соединения', price: 'от 1500 ₽' },
      { name: 'Настройка резервных каналов связи (4G/5G + провод)', price: 'от 4500 ₽' },
      { name: 'Оптимизация Wi-Fi покрытия, настройка Mesh-сети', price: 'от 5500 ₽' },
      { name: 'Проверка и настройка камер видеонаблюдения', price: 'от 4000 ₽' },
      { name: 'Настройка видеорегистратора, удалённого доступа', price: 'от 2500 ₽' },
      { name: 'Проверка охранных и пожарных датчиков', price: 'от 3000 ₽' },
      { name: 'Настройка сигнализаций и уведомлений', price: 'от 4500 ₽' },
      { name: 'Установка и настройка программного обеспечения', price: 'от 1500 ₽' },
      { name: 'Настройка удалённого доступа и прошивок', price: 'от 3000 ₽' }
    ]
  },
  {
    icon: 'Radio',
    title: 'Усиление связи',
    color: 'from-purple-600 to-purple-700',
    items: [
      { name: 'Замер уровня сигнала и диагностика покрытия', price: 'от 2000 ₽' },
      { name: 'Монтаж внешней антенны MIMO / LTE', price: 'от 3000 ₽' },
      { name: 'Настройка и установка репитера', price: 'от 6000 ₽' },
      { name: 'Прокладка высокочастотного кабеля', price: 'от 500 ₽/м' },
      { name: 'Настройка усилителя под оператора', price: 'от 1500 ₽' }
    ]
  },
  {
    icon: 'Video',
    title: 'Видеонаблюдение',
    color: 'from-cyan-600 to-cyan-700',
    items: [
      { name: 'Подбор и проектирование системы', price: 'бесплатно (при заказе установки)' },
      { name: 'Монтаж IP-камер', price: 'от 2000 ₽/шт.' },
      { name: 'Монтаж аналоговых камер', price: 'от 1500 ₽/шт.' },
      { name: 'Прокладка кабеля (витая пара, коаксиал, питание)', price: 'от 200 ₽/м' },
      { name: 'Настройка удалённого просмотра с телефона', price: 'от 1500 ₽' }
    ]
  },
  {
    icon: 'Bell',
    title: 'Охранные и пожарные системы',
    color: 'from-red-600 to-red-700',
    items: [
      { name: 'Проектирование схемы размещения датчиков', price: 'от 2500 ₽' },
      { name: 'Установка датчиков движения, открытия, дыма', price: 'от 1000 ₽/шт.' },
      { name: 'Монтаж и настройка GSM-сигнализации', price: 'от 6000 ₽' },
      { name: 'Подключение сирен, блоков питания, АКБ', price: 'от 1500 ₽' },
      { name: 'Настройка мобильных уведомлений', price: 'от 2000 ₽' }
    ]
  },
  {
    icon: 'Monitor',
    title: 'Настройка клиентских устройств',
    color: 'from-green-600 to-green-700',
    items: [
      { name: 'Настройка Smart TV, IPTV, медиаприставок', price: 'от 2000 ₽' },
      { name: 'Установка антивируса, браузера, офисных пакетов', price: 'от 1500 ₽/устройство' },
      { name: 'Настройка VPN, RDP, TeamViewer', price: 'от 2500 ₽' },
      { name: 'Настройка Wi-Fi-принтеров, NAS, IP-телефонии', price: 'от 3000 ₽' },
      { name: 'Оптимизация Windows / macOS', price: 'от 2500 ₽' }
    ]
  },
  {
    icon: 'HardHat',
    title: 'Прочие работы',
    color: 'from-orange-600 to-orange-700',
    items: [
      { name: 'Высотные работы', price: 'от 2000 ₽' },
      { name: 'Сложная трассировка кабеля (через перекрытия, чердак, подвал)', price: 'от 600 ₽/м' },
      { name: 'Монтаж оборудования в стойку / щит / шкаф', price: 'от 2000 ₽' },
      { name: 'Консультация инженера на объекте (без монтажа)', price: 'от 2500 ₽' }
    ]
  }
];

export default function EngineerPricingSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-primary to-secondary p-3 rounded-2xl shadow-lg">
                <Icon name="Briefcase" size={32} className="text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              💼 Прайс на инженерные работы
            </h2>
            <div className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-primary via-secondary to-primary rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Полный перечень услуг и стоимость работ. От базовой установки до комплексных инженерных решений.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {engineerServices.map((service, index) => (
              <Card 
                key={index} 
                className="shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary/20 hover:-translate-y-1"
              >
                <CardHeader className={`bg-gradient-to-r ${service.color} text-white rounded-t-lg`}>
                  <CardTitle className="text-lg flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                      <Icon name={service.icon as any} size={20} className="text-white" />
                    </div>
                    <span className="leading-tight">{service.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-0">
                    {service.items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex} 
                        className={`p-4 hover:bg-gray-50 transition-colors ${
                          itemIndex !== service.items.length - 1 ? 'border-b border-gray-200' : ''
                        }`}
                      >
                        <div className="flex flex-col gap-2">
                          <span className="text-sm text-gray-700 leading-snug">{item.name}</span>
                          <Badge 
                            variant="secondary" 
                            className="bg-primary/10 text-primary font-semibold w-fit"
                          >
                            {item.price}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-amber-100 p-2 rounded-lg">
                <Icon name="Info" size={24} className="text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-amber-800">Важная информация</h3>
            </div>
            <ul className="text-amber-700 space-y-3 text-base">
              <li className="flex items-start gap-3">
                <Icon name="Check" size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
                <span>Все цены указаны с учетом работы инженера</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
                <span>Стоимость материалов и оборудования оплачивается отдельно</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
                <span>Точная стоимость работ определяется после выезда специалиста на объект</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
                <span>Гарантия на выполненные работы — 12 месяцев</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
                <span>Консультация по подбору оборудования — бесплатно</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
