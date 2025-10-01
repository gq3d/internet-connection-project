import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const tariffs = [
  {
    name: 'Старт',
    speed: '100 Мбит/с',
    price: '1490',
    description: 'Оптимальный вариант для серфинга, мессенджеров, социальных сетей и просмотра видео в HD.',
    features: ['Безлимитный трафик', 'Wi-Fi роутер 802.11ac', 'Техподдержка']
  },
  {
    name: 'Продвинутый',
    speed: '150 Мбит/с',
    price: '1990',
    description: 'Для активного использования интернета: потоковое видео в Full HD, онлайн-игры, работа из дома.',
    features: ['Безлимитный трафик', 'Wi-Fi роутер в подарок', 'Приоритетная поддержка', 'Статический IP']
  },
  {
    name: 'Премиум',
    speed: '240 Мбит/с',
    price: '2590',
    description: 'Высокая скорость для больших потоков данных: 4K видео, видеоконференции, стриминг, умный дом и все устройства одновременно.',
    features: ['Безлимитный трафик', 'Профессиональное оборудование', 'VIP поддержка', 'Статический IP', 'Резервный канал']
  }
];

export default function TariffsSection() {
  return (
    <section id="tariffs" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Тарифная политика NetConnect</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {tariffs.map((tariff, index) => (
            <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${index === 1 ? 'border-primary shadow-lg scale-105' : ''}`}>
              {index === 1 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="px-4 py-1">Популярный</Badge>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle as="h3" className="text-2xl">{tariff.name}</CardTitle>
                <div className="py-4">
                  <div className="text-4xl font-bold text-primary">от {tariff.price}</div>
                  <div className="text-sm text-muted-foreground">₽/месяц</div>
                </div>
                <div className="flex items-center justify-center mb-4">
                  <Icon name={tariff.name === 'Премиум' ? 'Zap' : 'Wifi'} size={24} className="text-success mr-2" />
                  <span className="font-semibold">до {tariff.speed}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {tariff.description}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {tariff.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <Icon name="Check" size={16} className="text-success mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-left text-muted-foreground space-y-4">
          <p>
            В компании NetConnect тарифы на интернет-подключение разрабатываются с учетом разнообразия условий подключения в различных районах Московской области и ближайших регионов, включая частные дома и дачи. Все представленные тарифные планы носят примерный характер, поскольку доступ к услугам различных операторов может отличаться, и реальные параметры скорости или стоимости могут немного варьироваться в зависимости от места подключения.
          </p>
          <div className="bg-gradient-to-r from-primary/10 to-success/10 border-l-4 border-primary rounded-r-lg p-6 my-6">
            <p className="text-lg font-medium leading-relaxed">
              ⭐ <strong>Особое внимание мы уделяем спутниковому интернету</strong>, который является критически важным для подключения интернет на даче, в загородных домах и удалённых объектах, где традиционные сети недоступны или нестабильны. Тарифы на спутниковый интернет подбираются индивидуально под конкретные задачи клиента, исходя из особенностей его объекта и требований к надежности соединения.
            </p>
          </div>
          <div className="bg-card border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Примеры индивидуальных задач для спутникового интернета:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Icon name="Camera" size={16} className="text-success mr-3 mt-1 flex-shrink-0" />
                <span><strong>Системы видеонаблюдения и охраны объектов</strong> — круглосуточная передача данных без перебоев, чтобы обеспечить постоянный контроль и оперативное реагирование.</span>
              </li>
              <li className="flex items-start">
                <Icon name="AlertTriangle" size={16} className="text-success mr-3 mt-1 flex-shrink-0" />
                <span><strong>Системы пожаротушения и датчики безопасности</strong> — бесперебойная передача сигналов датчиков, предотвращение ложных срабатываний и своевременное уведомление служб экстренной помощи.</span>
              </li>
              <li className="flex items-start">
                <Icon name="Shield" size={16} className="text-success mr-3 mt-1 flex-shrink-0" />
                <span><strong>Датчики проникновения и умный дом</strong> — надежное соединение для автоматизации процессов и удаленного управления системами безопасности.</span>
              </li>
              <li className="flex items-start">
                <Icon name="Building" size={16} className="text-success mr-3 mt-1 flex-shrink-0" />
                <span><strong>Критически важные корпоративные задачи</strong> — резервное подключение для обеспечения работы офисов, филиалов и удаленных объектов в условиях перебоев связи.</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-r from-success/10 to-secondary/10 border-l-4 border-success rounded-r-lg p-6 my-6">
            <p className="text-lg font-medium leading-relaxed">
              🛡️ <strong>Благодаря резервному подключению через спутниковый интернет</strong>, наши клиенты получают защиту от глушения и перебоев сигнала, что обеспечивает постоянную онлайн-связь и стабильный поток данных даже в экстремальных условиях.
            </p>
          </div>
          <p>
            Таким образом, тарифы NetConnect позволяют клиентам гибко выбирать оптимальное решение для подключения интернет на даче, подключения интернет в Подмосковье и подключения интернет в Московской области, сочетая скорость, надежность и стоимость в зависимости от конкретного расположения объекта и его потребностей. Наш подход обеспечивает максимальную стабильность работы интернета, вне зависимости от условий и задач, которые стоят перед пользователем.
          </p>
        </div>
      </div>
    </section>
  );
}