import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const FriendOrFoeSection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-4">
          <Icon name="Users" size={20} />
          <span className="font-semibold">Контроль доступа</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Система «Свой–чужой»
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          Технология работает в комплексе с распознаванием лиц и RFID-метками. Позволяет мгновенно реагировать 
          на несанкционированное появление, а также вести статистику посещений.
        </p>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
              <Icon name="Check" size={18} className="text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Автоматическая идентификация</h4>
              <p className="text-sm text-muted-foreground">
                Система распознаёт «своих» по лицу или RFID-метке (карточка, браслет, брелок). 
                При обнаружении знакомого лица или метки доступ предоставляется автоматически — без необходимости вводить код или звонить.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
              <Icon name="Check" size={18} className="text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Тревожные оповещения</h4>
              <p className="text-sm text-muted-foreground">
                Если система обнаруживает постороннего человека или попытку входа без авторизации, владелец 
                немедленно получает push-уведомление с фото и видео. Можно настроить автоматическую звуковую сирену.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
              <Icon name="Check" size={18} className="text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Учёт рабочего времени</h4>
              <p className="text-sm text-muted-foreground">
                Автоматическая фиксация времени прихода и ухода сотрудников. Система формирует отчёты по каждому человеку: 
                когда пришёл, когда ушёл, сколько времени провёл на объекте. Удобно для расчёта зарплаты и контроля дисциплины.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
              <Icon name="Check" size={18} className="text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Статистика посещений</h4>
              <p className="text-sm text-muted-foreground">
                Анализируйте частоту визитов, время присутствия, популярные часы. Для офисов — контроль загруженности переговорных, 
                для магазинов — данные о потоке покупателей, для охраняемых территорий — журнал доступа с фото каждого входа.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <Card className="overflow-hidden shadow-2xl">
          <CardContent className="p-0">
            <div className="aspect-video bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
              <Icon name="Users" size={120} className="text-white/20" />
            </div>
          </CardContent>
        </Card>
        <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 border-2 border-green-200">
          <div className="flex items-center gap-3">
            <Icon name="ShieldCheck" size={24} className="text-green-600" />
            <div>
              <div className="text-sm font-semibold">Доступ разрешён</div>
              <div className="text-xs text-muted-foreground">Сотрудник #145</div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border-2 border-red-200">
          <div className="flex items-center gap-3">
            <Icon name="AlertTriangle" size={24} className="text-red-600" />
            <div>
              <div className="text-sm font-semibold">Посторонний!</div>
              <div className="text-xs text-muted-foreground">Лицо не распознано</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendOrFoeSection;
