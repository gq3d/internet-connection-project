import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const FaceRecognitionSection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full mb-4">
          <Icon name="ScanFace" size={20} />
          <span className="font-semibold">Интеллектуальная система</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Распознавание лиц и отслеживание перемещения
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          Система автоматически определяет, кто находится в кадре, и отслеживает движение по территории. 
          Можно задать «свой-чужой» сценарий: знакомых пропускать, посторонних — фиксировать и уведомлять владельца.
        </p>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
              <Icon name="Check" size={18} className="text-purple-600" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">База знакомых лиц</h4>
              <p className="text-sm text-muted-foreground">
                Создайте базу сотрудников, членов семьи или постоянных посетителей. 
                Система автоматически распознает их при входе и не отправляет лишних уведомлений.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
              <Icon name="Check" size={18} className="text-purple-600" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Обнаружение посторонних</h4>
              <p className="text-sm text-muted-foreground">
                Незнакомое лицо автоматически фиксируется, фотография сохраняется, а владелец получает мгновенное уведомление 
                на смартфон с возможностью просмотра видео в реальном времени.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
              <Icon name="Check" size={18} className="text-purple-600" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Трекинг перемещений</h4>
              <p className="text-sm text-muted-foreground">
                Отслеживайте маршруты движения людей по территории, анализируйте время нахождения в разных зонах, 
                выявляйте подозрительное поведение (например, долгое нахождение возле входа или хранилища).
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <Card className="overflow-hidden shadow-2xl">
          <CardContent className="p-0">
            <div className="aspect-video bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
              <Icon name="ScanFace" size={120} className="text-white/20" />
            </div>
          </CardContent>
        </Card>
        <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border-2 border-purple-200">
          <div className="flex items-center gap-3">
            <Icon name="UserCheck" size={24} className="text-green-600" />
            <div>
              <div className="text-sm font-semibold">Распознано</div>
              <div className="text-xs text-muted-foreground">Иван Петров</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaceRecognitionSection;
