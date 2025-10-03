import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const advantages = [
  {
    icon: 'Zap',
    title: 'Высокая скорость',
    description: 'До 250 Мбит/с через беспроводные каналы'
  },
  {
    icon: 'Signal',
    title: 'Стабильное соединение',
    description: '99.9% времени безотказной работы'
  },
  {
    icon: 'Shield',
    title: 'Защищённое подключение',
    description: 'Шифрование трафика и защита от помех'
  },
  {
    icon: 'Clock',
    title: 'Быстрое подключение',
    description: 'Установка за 1-3 дня без прокладки кабелей'
  }
];

const InternetAdvantages = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Преимущества нашего интернета</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <Icon name={advantage.icon} size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{advantage.title}</h3>
                <p className="text-muted-foreground text-sm">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternetAdvantages;
