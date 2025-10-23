import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const MotionDetectionSection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="order-2 md:order-1 relative">
        <Card className="overflow-hidden shadow-2xl">
          <CardContent className="p-0">
            <div className="aspect-video bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center">
              <Icon name="Activity" size={120} className="text-white/20" />
            </div>
          </CardContent>
        </Card>
        <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border-2 border-indigo-200">
          <div className="flex items-center gap-3">
            <Icon name="Bell" size={24} className="text-orange-600" />
            <div>
              <div className="text-sm font-semibold">Движение обнаружено</div>
              <div className="text-xs text-muted-foreground">Входная зона, 14:23</div>
            </div>
          </div>
        </div>
      </div>
      <div className="order-1 md:order-2">
        <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full mb-4">
          <Icon name="Activity" size={20} />
          <span className="font-semibold">Экономия ресурсов</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Видеонаблюдение с датчиками движения
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          Камеры активируются только при появлении движения, экономя память и повышая информативность записей. 
          Больше не нужно просматривать часы пустого видео — система сохраняет только важные моменты.
        </p>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
              <Icon name="Check" size={18} className="text-indigo-600" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Контроль присутствия</h4>
              <p className="text-sm text-muted-foreground">
                Мониторинг активности людей в помещениях и на территории. Получайте уведомления о появлении 
                движения в заданных зонах в определённое время (например, в офисе ночью или на складе в выходные).
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
              <Icon name="Check" size={18} className="text-indigo-600" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Анализ времени нахождения</h4>
              <p className="text-sm text-muted-foreground">
                Система отслеживает, сколько времени люди проводят в определённых зонах. Полезно для контроля 
                рабочего времени, анализа потока посетителей в магазине или выявления «узких мест» на производстве.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
              <Icon name="Check" size={18} className="text-indigo-600" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Интеграция с СКУД</h4>
              <p className="text-sm text-muted-foreground">
                Камера фиксирует факт входа и автоматически открывает или блокирует проход в зависимости от прав доступа. 
                При попытке несанкционированного входа система сохраняет видео и отправляет тревожное уведомление.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
              <Icon name="Check" size={18} className="text-indigo-600" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Экономия места на диске</h4>
              <p className="text-sm text-muted-foreground">
                Запись только по движению сокращает объём сохраняемого видео в 10-20 раз. Вместо терабайтов пустого 
                видео вы получаете компактный архив с реальными событиями, который легко хранить и быстро просматривать.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotionDetectionSection;
