import { Link } from 'react-router-dom';
import { useSEO } from '@/hooks/useSEO';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import SurveillanceHeader from '@/components/surveillance/SurveillanceHeader';
import Footer from '@/components/home/Footer';

const SmartAnalytics = () => {
  useSEO({
    title: 'Умная аналитика видеонаблюдения в МО | NetConnect',
    description: 'Распознавание лиц, детекция движения, система свой-чужой, электронный глазок. Видеоаналитика для максимальной безопасности. Звоните: +7 (901) 500-00-78',
    keywords: 'умная аналитика видеонаблюдение, распознавание лиц, детекция движения, электронный глазок, система свой чужой, видеоаналитика',
    canonical: 'https://wiline.ru/services/surveillance/smart-analytics',
    ogTitle: 'Умная аналитика и дополнительные функции видеонаблюдения',
    ogDescription: 'Современные системы видеонаблюдения с распознаванием лиц, детекцией движения и интеллектуальной аналитикой. Установка под ключ в Московской области.',
    ogImage: 'https://cdn.wiline.ru/files/0b95440d-0b84-41b8-8404-418760cb07a4.jpg',
    ogImageAlt: 'Умная аналитика видеонаблюдения NetConnect'
  });

  return (
    <div className="min-h-screen bg-background">
      <SurveillanceHeader />

      <section className="py-20 bg-gradient-to-br from-purple-50 via-indigo-50 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/services/surveillance"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <Icon name="ArrowLeft" size={20} />
              <span>Назад к видеонаблюдению</span>
            </Link>
            
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl mb-6 shadow-xl">
                <Icon name="Brain" size={40} className="text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Умная аналитика видеонаблюдения
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Современные камеры — это уже не просто «глаза» системы безопасности. Они видят, запоминают и анализируют. Мы предлагаем решения, которые работают на опережение.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <Badge className="px-4 py-2 bg-purple-100 text-purple-800 border-purple-200">
                <Icon name="ScanFace" size={16} className="mr-2" />
                Распознавание лиц
              </Badge>
              <Badge className="px-4 py-2 bg-indigo-100 text-indigo-800 border-indigo-200">
                <Icon name="Activity" size={16} className="mr-2" />
                Детекция движения
              </Badge>
              <Badge className="px-4 py-2 bg-blue-100 text-blue-800 border-blue-200">
                <Icon name="Users" size={16} className="mr-2" />
                Свой-чужой
              </Badge>
              <Badge className="px-4 py-2 bg-cyan-100 text-cyan-800 border-cyan-200">
                <Icon name="Eye" size={16} className="mr-2" />
                Электронный глазок
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            
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

          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Готовы внедрить умную аналитику?
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Мы подберём оптимальное решение для вашего объекта и установим систему под ключ
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
                      <Icon name="Calculator" size={24} className="text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Расчёт стоимости</h3>
                    <p className="text-sm text-muted-foreground">Бесплатный выезд для оценки объекта</p>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
                      <Icon name="Wrench" size={24} className="text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Установка под ключ</h3>
                    <p className="text-sm text-muted-foreground">Монтаж, настройка, обучение</p>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
                      <Icon name="Headphones" size={24} className="text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Техподдержка 24/7</h3>
                    <p className="text-sm text-muted-foreground">Помощь в любое время</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+79015000078"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all hover:scale-105"
                  >
                    <Icon name="Phone" size={24} />
                    +7 (901) 500-00-78
                  </a>
                  <a 
                    href="https://wa.me/79015000078"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all hover:scale-105"
                  >
                    <Icon name="MessageCircle" size={24} />
                    WhatsApp
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SmartAnalytics;
