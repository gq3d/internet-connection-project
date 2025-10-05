import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function SpeedTest() {
  return (
    <Card id="speed-test" className="p-6 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 border-2 border-primary/20 shadow-xl scroll-mt-24">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Icon name="Gauge" size={28} className="text-primary" />
          <h4 className="text-2xl font-bold">Проверка скорости интернета</h4>
        </div>
        <p className="text-sm text-muted-foreground">
          Измерьте скорость вашего текущего подключения
        </p>
      </div>

      <div className="flex justify-center">
        <iframe 
          src="https://2ip.ru/speed/" 
          height="700px" 
          width="100%" 
          className="max-w-[900px] border-0 rounded-lg"
          title="2ip.ru - тест скорости интернета"
        />
      </div>
    </Card>
  );
}