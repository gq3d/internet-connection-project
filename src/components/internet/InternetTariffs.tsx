import { Card, CardContent } from '@/components/ui/card';
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
    name: 'Комфорт',
    speed: '200 Мбит/с',
    price: '1990',
    description: 'Высокая скорость для стриминга 4K, онлайн игр, работы из дома и подключения множества устройств.',
    features: ['Безлимитный трафик', 'Wi-Fi роутер 802.11ax', 'Приоритетная поддержка', 'Статический IP']
  },
  {
    name: 'Максимум',
    speed: '250 Мбит/с',
    price: '2590',
    description: 'Максимальная скорость для больших семей, офисов и всех задач одновременно.',
    features: ['Безлимитный трафик', 'Профессиональное оборудование', 'VIP поддержка', 'Статический IP', 'Резервный канал']
  }
];

const InternetTariffs = () => {
  return (
    <section className="py-16 bg-accent/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Тарифы интернета</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tariffs.map((tariff, index) => (
            <Card key={index} className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 ${
              index === 1 ? 'ring-2 ring-primary scale-105' : ''
            }`}>
              {index === 1 && (
                <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                  Популярный
                </div>
              )}
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{tariff.name}</h3>
                  <div className="text-4xl font-bold text-primary mb-2">
                    от {tariff.price} ₽<span className="text-lg font-normal text-muted-foreground">/мес</span>
                  </div>
                  <div className="text-lg font-semibold text-secondary">{tariff.speed}</div>
                </div>
                
                <p className="text-muted-foreground text-sm mb-6">{tariff.description}</p>
                
                <ul className="space-y-3 mb-8">
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
      </div>
    </section>
  );
};

export default InternetTariffs;
