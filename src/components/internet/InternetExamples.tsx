import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const InternetExamples = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-accent/5 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Примеры подключения интернета</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Реальные проекты подключения беспроводного интернета в частных домах и на дачах Московской области
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <img 
                  src="https://cdn.poehali.dev/files/648b0a23-c36e-412a-af45-8f16220c67e5.png" 
                  alt="Установка MIMO антенны на частном доме" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-success text-white border-0">До 250 Мбит/с</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Коттедж в Одинцовском районе</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start space-x-2">
                    <Icon name="MapPin" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Поселок Барвиха</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Icon name="Antenna" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">MIMO-антенна 4G/5G установлена на крыше</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Icon name="Zap" size={16} className="text-success mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Скорость: 220 Мбит/с стабильно</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Icon name="Clock" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Время подключения: 1 день</span>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm italic text-muted-foreground">
                    "Оптоволокно не было доступно, но благодаря профессиональной установке антенны получили интернет быстрее проводного"
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <img 
                  src="https://cdn.poehali.dev/files/167a8eb4-3e8a-4755-a9a9-c85560b118f3.png" 
                  alt="Настройка роутера в частном доме" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-secondary text-white border-0">До 200 Мбит/с</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Частный дом в Истринском районе</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start space-x-2">
                    <Icon name="MapPin" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Город Истра</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Icon name="Router" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">LTE роутер с кастомной прошивкой</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Icon name="Zap" size={16} className="text-success mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Скорость: 180 Мбит/с</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Icon name="Wifi" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Wi-Fi 6 по всему дому</span>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm italic text-muted-foreground">
                    "Работаю удаленно, онлайн-встречи идут без задержек. Дети смотрят YouTube в 4K одновременно"
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <img 
                  src="https://cdn.poehali.dev/files/c2990d17-9e72-4ce6-8df4-fb7ee481d9b1.png" 
                  alt="Интернет на даче" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-white border-0">До 150 Мбит/с</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Дача в Рузском районе</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start space-x-2">
                    <Icon name="MapPin" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">СНТ "Лесная поляна"</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Icon name="Antenna" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Внешняя направленная антенна на фасаде</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Icon name="Zap" size={16} className="text-success mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Скорость: 120-150 Мбит/с</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Icon name="DollarSign" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Тариф: Старт, 1490₽/мес</span>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm italic text-muted-foreground">
                    "Приезжаем на выходные — интернет всегда работает. Видеозвонки с внуками без проблем"
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Подключим интернет в вашем доме</h3>
                <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
                  Каждый объект уникален. Наши инженеры проведут выезд, оценят уровень сигнала, 
                  подберут оптимальное оборудование и установят интернет с гарантией качества.
                </p>
                <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                      <Icon name="Search" size={24} className="text-primary" />
                    </div>
                    <h4 className="font-semibold text-sm mb-1">Анализ местности</h4>
                    <p className="text-xs text-muted-foreground">Выезд инженера</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mb-2">
                      <Icon name="Settings" size={24} className="text-success" />
                    </div>
                    <h4 className="font-semibold text-sm mb-1">Подбор решения</h4>
                    <p className="text-xs text-muted-foreground">Оптимальная конфигурация</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-2">
                      <Icon name="Wrench" size={24} className="text-secondary" />
                    </div>
                    <h4 className="font-semibold text-sm mb-1">Установка</h4>
                    <p className="text-xs text-muted-foreground">За 1-3 дня</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                      <Icon name="CheckCircle" size={24} className="text-primary" />
                    </div>
                    <h4 className="font-semibold text-sm mb-1">Поддержка</h4>
                    <p className="text-xs text-muted-foreground">Гарантия 12 месяцев</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InternetExamples;
