import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function SpeedTest() {
  const speedTests = [
    {
      name: 'Speedtest by Ookla',
      url: 'https://www.speedtest.net/',
      icon: 'Zap',
      description: 'Самый популярный тест скорости в мире'
    },
    {
      name: 'Яндекс Интернетометр',
      url: 'https://yandex.ru/internet/',
      icon: 'Activity',
      description: 'Подробная информация о вашем подключении'
    },
    {
      name: 'Fast.com от Netflix',
      url: 'https://fast.com/',
      icon: 'TrendingUp',
      description: 'Быстрый тест скорости загрузки'
    }
  ];

  return (
    <Card id="speed-test" className="p-8 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 border-2 border-primary/20 shadow-xl scroll-mt-24">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Icon name="Gauge" size={32} className="text-primary" />
          <h4 className="text-3xl font-bold">Проверка скорости интернета</h4>
        </div>
        <p className="text-lg text-muted-foreground">
          Выберите сервис для измерения скорости вашего подключения
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {speedTests.map((test) => (
          <Card key={test.name} className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="p-4 bg-primary/10 rounded-full">
                <Icon name={test.icon as any} size={40} className="text-primary" />
              </div>
              <div>
                <h5 className="font-bold text-lg mb-2">{test.name}</h5>
                <p className="text-sm text-muted-foreground mb-4">{test.description}</p>
              </div>
              <Button 
                onClick={() => window.open(test.url, '_blank')}
                className="w-full"
              >
                <Icon name="ExternalLink" size={16} className="mr-2" />
                Запустить тест
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-8 p-4 bg-blue-50/50 rounded-lg border border-blue-200">
        <p className="text-sm text-center text-muted-foreground">
          <Icon name="Info" size={16} className="inline mr-1" />
          Для точных результатов закройте другие программы, использующие интернет
        </p>
      </div>
    </Card>
  );
}