import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ElectronicPeepholeSection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="order-2 md:order-1 relative">
        <Card className="overflow-hidden shadow-2xl">
          <CardContent className="p-0">
            <div className="aspect-video bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center">
              <Icon name="Eye" size={120} className="text-white/20" />
            </div>
          </CardContent>
        </Card>
        <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-xl p-4 border-2 border-cyan-200">
          <div className="flex items-center gap-3">
            <Icon name="Smartphone" size={24} className="text-cyan-600" />
            <div>
              <div className="text-sm font-semibold">Просмотр онлайн</div>
              <div className="text-xs text-muted-foreground">iPhone 14 Pro</div>
            </div>
          </div>
        </div>
      </div>
      <div className="order-1 md:order-2">
        <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full mb-4">
          <Icon name="Eye" size={20} />
          <span className="font-semibold">Удалённый контроль</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Электронный глазок
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          Компактная камера для квартиры, офиса или дачи. Позволяет видеть, кто у двери, даже если вас нет дома — 
          изображение передаётся на смартфон. Есть запись по движению и ночной режим.
        </p>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
              <Icon name="Check" size={18} className="text-cyan-600" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Просмотр в реальном времени</h4>
              <p className="text-sm text-muted-foreground">
                Находясь в отпуске, на работе или в другом городе, вы всегда можете посмотреть, кто стоит у вашей двери. 
                Камера транслирует видео прямо на смартфон с минимальной задержкой (1-2 секунды). Качество Full HD позволяет 
                чётко разглядеть лица и детали.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
              <Icon name="Check" size={18} className="text-cyan-600" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Push-уведомления о посетителях</h4>
              <p className="text-sm text-muted-foreground">
                Как только кто-то подошёл к двери, вы получаете уведомление с фотографией на телефон. 
                Можно настроить чувствительность (чтобы не реагировало на соседей, проходящих мимо) и расписание 
                (например, отключить уведомления ночью).
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
              <Icon name="Check" size={18} className="text-cyan-600" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Запись по движению</h4>
              <p className="text-sm text-muted-foreground">
                Электронный глазок сохраняет видео только при обнаружении движения перед дверью. Архив хранится на карте памяти 
                или в облаке. Если произошло что-то подозрительное (попытка взлома, вандализм), запись автоматически сохранится 
                и будет доступна для просмотра или передачи в полицию.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
              <Icon name="Check" size={18} className="text-cyan-600" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Ночное видение</h4>
              <p className="text-sm text-muted-foreground">
                Инфракрасная подсветка обеспечивает чёткое изображение даже в полной темноте (до 10 метров). 
                Автоматическое переключение между дневным и ночным режимами — камера сама определяет уровень освещённости 
                и включает ИК-диоды при необходимости.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
              <Icon name="Check" size={18} className="text-cyan-600" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Двусторонняя связь</h4>
              <p className="text-sm text-muted-foreground">
                Встроенный микрофон и динамик позволяют общаться с посетителем прямо через приложение на смартфоне. 
                Например, попросить курьера оставить посылку у двери, предупредить консьержа или переговорить с гостями, 
                пока идёте к двери. Качество звука позволяет вести полноценный диалог.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
              <Icon name="Check" size={18} className="text-cyan-600" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Компактная установка</h4>
              <p className="text-sm text-muted-foreground">
                Камера монтируется вместо обычного глазка — не требуется прокладка дополнительных проводов или сверление стен. 
                Питание от аккумулятора (заряда хватает на 2-3 месяца) или от сети через USB. Установка занимает 15-20 минут, 
                не повреждает дверь и не требует специальных инструментов.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectronicPeepholeSection;
