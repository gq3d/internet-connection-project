import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const tariffs = [
  {
    name: 'Старт',
    speed: '100 Мбит/с',
    price: '1490',
    description: 'Оптимальный вариант для серфинга, мессенджеров, социальных сетей и просмотра видео в HD.',
    features: ['Безлимитный трафик', 'Wi-Fi роутер 802.11ac', 'Техподдержка 24/7'],
    icon: 'Wifi',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
    borderColor: 'border-blue-200'
  },
  {
    name: 'Продвинутый',
    speed: '150 Мбит/с',
    price: '1990',
    description: 'Для активного использования интернета: потоковое видео в Full HD, онлайн-игры, работа из дома.',
    features: ['Безлимитный трафик', 'Wi-Fi роутер 802.11ac', 'Приоритетная поддержка', 'Стабильный пинг'],
    icon: 'Zap',
    gradient: 'from-primary to-secondary',
    bgGradient: 'from-primary/5 to-secondary/5',
    borderColor: 'border-primary',
    popular: true
  },
  {
    name: 'Премиум',
    speed: '240 Мбит/с',
    price: '2590',
    description: 'Высокая скорость для больших потоков данных: 4K видео, видеоконференции, стриминг, умный дом.',
    features: ['Безлимитный трафик', 'Профессиональное оборудование', 'VIP поддержка', 'Максимальная скорость'],
    icon: 'Rocket',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50',
    borderColor: 'border-purple-200'
  }
];

const satelliteFeatures = [
  {
    icon: 'Camera',
    title: 'Видеонаблюдение и охрана',
    description: 'Круглосуточная передача данных без перебоев для постоянного контроля',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: 'AlertTriangle',
    title: 'Пожаротушение и безопасность',
    description: 'Бесперебойная передача сигналов датчиков и своевременное уведомление',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    icon: 'Shield',
    title: 'Датчики и умный дом',
    description: 'Надежное соединение для автоматизации и удаленного управления',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    icon: 'Building',
    title: 'Корпоративные задачи',
    description: 'Резервное подключение для офисов и удаленных объектов',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  }
];

export default function TariffsSection() {
  return (
    <section id="tariffs" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Icon name="Zap" size={20} className="text-primary mr-2" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Тарифы</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Выберите свой тариф</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Гибкие тарифные планы для любых задач — от серфинга до профессионального использования
          </p>
        </div>
        
        {/* Карточки тарифов */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20 pt-6">
          {tariffs.map((tariff, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-2xl transition-all duration-300 overflow-visible bg-white ${
                tariff.popular ? 'border-4 border-primary shadow-xl md:scale-105 md:-translate-y-4' : 'border-2 border-gray-200'
              }`}
            >
              {tariff.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="px-6 py-2 text-sm font-bold bg-gradient-to-r from-primary to-secondary text-white shadow-lg">
                    ⭐ Популярный
                  </Badge>
                </div>
              )}
              
              <div className={`pt-10 pb-6 text-center bg-gradient-to-br ${tariff.gradient}`}>
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                  <Icon name={tariff.icon} size={40} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-2 text-white">{tariff.name}</h3>
              </div>
              
              <CardHeader className="text-center pb-4 pt-6 bg-white">
                <div className="mb-4">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-sm text-gray-500">от</span>
                    <span className={`text-5xl font-bold bg-gradient-to-r ${tariff.gradient} bg-clip-text text-transparent`}>
                      {tariff.price}
                    </span>
                    <span className="text-sm text-gray-500">₽/мес</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 mb-4 px-4 py-2 bg-green-50 rounded-full mx-auto w-fit">
                  <Icon name="Wifi" size={20} className="text-green-600" />
                  <span className="font-bold text-green-600">до {tariff.speed}</span>
                </div>
                <CardDescription className="text-base leading-relaxed px-2 text-gray-600">
                  {tariff.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-6 pb-8 bg-white">
                <ul className="space-y-4 mb-6">
                  {tariff.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mr-3">
                        <Icon name="Check" size={16} className="text-green-600" />
                      </div>
                      <span className="text-sm leading-relaxed text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="tel:+79015000078"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tariff.popular 
                      ? 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:scale-105' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  Подключить
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Информация о тарифах */}
        <div className="max-w-5xl mx-auto space-y-8">
          <Card className="border-2 border-muted">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Info" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">О тарифах NetConnect</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    В компании NetConnect тарифы на интернет-подключение разрабатываются с учетом разнообразия условий подключения в различных районах Московской области и ближайших регионов, включая частные дома и дачи. Все представленные тарифные планы носят примерный характер, поскольку доступ к услугам различных операторов может отличаться, и реальные параметры скорости или стоимости могут немного варьироваться в зависимости от места подключения.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Спутниковый интернет */}
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg">
                  <Icon name="Satellite" size={32} className="text-white" />
                </div>
                <div>
                  <CardTitle className="text-3xl">Спутниковый интернет</CardTitle>
                  <CardDescription className="text-base mt-1">Решение для удалённых объектов и критически важных задач</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <Icon name="Star" size={24} className="text-amber-600 flex-shrink-0 mt-1" />
                  <p className="text-lg font-medium text-amber-900 leading-relaxed">
                    Особое внимание мы уделяем спутниковому интернету, который является критически важным для подключения в загородных домах и удалённых объектах, где традиционные сети недоступны или нестабильны. Тарифы подбираются индивидуально под конкретные задачи клиента.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-6">Примеры использования спутникового интернета:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {satelliteFeatures.map((feature, index) => (
                    <div 
                      key={index}
                      className={`p-5 rounded-xl border-2 hover:shadow-lg transition-all duration-300 ${feature.bgColor} border-${feature.color.replace('text-', '')}/20`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${feature.bgColor.replace('50', '100')}`}>
                          <Icon name={feature.icon} size={20} className={feature.color} />
                        </div>
                        <div>
                          <h5 className="font-bold mb-1">{feature.title}</h5>
                          <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-success/10 to-emerald-50 border-2 border-success/20 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <Icon name="ShieldCheck" size={24} className="text-success flex-shrink-0 mt-1" />
                  <p className="text-lg font-medium text-success leading-relaxed">
                    Благодаря резервному подключению через спутниковый интернет, наши клиенты получают защиту от глушения и перебоев сигнала, что обеспечивает постоянную онлайн-связь и стабильный поток данных даже в экстремальных условиях.
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Таким образом, тарифы NetConnect позволяют клиентам гибко выбирать оптимальное решение для подключения интернета на даче, в Подмосковье и Московской области, сочетая скорость, надежность и стоимость в зависимости от конкретного расположения объекта и его потребностей.
              </p>
            </CardContent>
          </Card>

          {/* CTA блок */}
          <Card className="border-2 border-primary/30 shadow-xl overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Icon name="Phone" size={32} className="text-white" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">Поможем выбрать тариф</h3>
                  <p className="text-muted-foreground">Свяжитесь с нами — подберём оптимальное решение для вашего объекта</p>
                </div>
                <div className="flex flex-col gap-3">
                  <a href="tel:+79015000078" className="flex items-center gap-2 px-6 py-3 bg-success hover:bg-success/90 text-white rounded-lg font-semibold transition-colors whitespace-nowrap">
                    <Icon name="Phone" size={20} />
                    <span>+7 (901) 500-00-78</span>
                  </a>
                  <a href="https://wa.me/79015000078" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-lg font-semibold transition-colors whitespace-nowrap">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}