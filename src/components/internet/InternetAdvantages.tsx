import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const advantages = [
  {
    icon: 'Zap',
    title: 'Высокая скорость',
    description: 'До 250 Мбит/с через беспроводные каналы',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    icon: 'Signal',
    title: 'Стабильное соединение',
    description: '99.9% времени безотказной работы',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: 'Shield',
    title: 'Защищённое подключение',
    description: 'Шифрование трафика и защита от помех',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: 'Clock',
    title: 'Быстрое подключение',
    description: 'Установка за 1-3 дня без прокладки кабелей',
    gradient: 'from-purple-500 to-pink-500'
  }
];

const InternetAdvantages = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Преимущества нашего интернета
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Современные технологии для надежного и быстрого подключения
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {advantages.map((advantage, index) => (
            <Card 
              key={index} 
              className="group h-full border-2 border-transparent hover:border-primary/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-8 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${advantage.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon name={advantage.icon} size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternetAdvantages;