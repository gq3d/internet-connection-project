import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export const CellularSigns = () => (
  <section className="py-16">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Признаки слабого сигнала</h2>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Если вы сталкиваетесь с этими проблемами, вам нужен репитер сотовой связи
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Icon name="PhoneOff" size={20} className="text-destructive" />
              <span>Частые обрывы звонков</span>
            </div>
            <div className="flex items-center space-x-3">
              <Icon name="WifiOff" size={20} className="text-destructive" />
              <span>Медленный мобильный интернет</span>
            </div>
            <div className="flex items-center space-x-3">
              <Icon name="MessageSquareX" size={20} className="text-destructive" />
              <span>SMS не доходят или приходят с задержкой</span>
            </div>
            <div className="flex items-center space-x-3">
              <Icon name="BatteryLow" size={20} className="text-destructive" />
              <span>Быстрая разрядка батареи телефона</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Icon name="Volume2" size={20} className="text-destructive" />
              <span>Плохое качество звука при разговоре</span>
            </div>
            <div className="flex items-center space-x-3">
              <Icon name="Signal" size={20} className="text-destructive" />
              <span>Показывает 1-2 деления сигнала</span>
            </div>
            <div className="flex items-center space-x-3">
              <Icon name="Smartphone" size={20} className="text-destructive" />
              <span>Телефон ищет сеть</span>
            </div>
            <div className="flex items-center space-x-3">
              <Icon name="Download" size={20} className="text-destructive" />
              <span>Долгая загрузка страниц и приложений</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const CellularExamples = () => (
  <section className="py-16">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Примеры установки усилителей связи</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Реальные проекты усиления сотовой связи в частных домах и на дачах Московской области
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/files/706b1606-ed73-49b6-bd63-834abadc8eeb.png" 
                alt="Усиление связи в коттедже" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 right-4">
                <Badge className="bg-success text-white border-0">+65 дБ</Badge>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3">Коттедж в Красногорском районе</h3>
              <div className="space-y-3 mb-4">
                <div className="flex items-start space-x-2">
                  <Icon name="MapPin" size={16} className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Деревня Ангелово</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Icon name="Antenna" size={16} className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Направленная антенна на крыше</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Icon name="Signal" size={16} className="text-success mt-1 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Репитер GSM 900/1800 + 4G LTE</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Icon name="Users" size={16} className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Покрытие всего дома 250 м²</span>
                </div>
              </div>
              <div className="pt-4 border-t">
                <p className="text-sm italic text-muted-foreground">
                  "Раньше связь ловила только у окна. Теперь полный сигнал во всех комнатах, включая подвал"
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/files/9fe4c1c3-d855-4aff-b72f-3371f7240d32.png" 
                alt="Репитер в доме" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 right-4">
                <Badge className="bg-secondary text-white border-0">+70 дБ</Badge>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3">Дом в Ленинском районе</h3>
              <div className="space-y-3 mb-4">
                <div className="flex items-start space-x-2">
                  <Icon name="MapPin" size={16} className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Поселок Сосенки</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Icon name="Wifi" size={16} className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Трехдиапазонный репитер 3G/4G/5G</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Icon name="Zap" size={16} className="text-success mt-1 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Скорость интернета выросла в 10 раз</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Icon name="Smartphone" size={16} className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Поддержка всех операторов</span>
                </div>
              </div>
              <div className="pt-4 border-t">
                <p className="text-sm italic text-muted-foreground">
                  "Работаю удаленно, видеозвонки теперь без обрывов. Дети спокойно играют онлайн"
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/files/1cecb8e5-4078-4ecf-8b44-2708423b7a79.png" 
                alt="Усилитель на даче" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 right-4">
                <Badge className="bg-primary text-white border-0">+60 дБ</Badge>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3">Дача в Можайском районе</h3>
              <div className="space-y-3 mb-4">
                <div className="flex items-start space-x-2">
                  <Icon name="MapPin" size={16} className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">СНТ "Лесное"</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Icon name="Antenna" size={16} className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Компактная антенна на фронтоне</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Icon name="Signal" size={16} className="text-success mt-1 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Репитер GSM для МТС и Билайн</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Icon name="Battery" size={16} className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Телефон разряжается в 2 раза медленнее</span>
                </div>
              </div>
              <div className="pt-4 border-t">
                <p className="text-sm italic text-muted-foreground">
                  "Наконец-то можно спокойно звонить с дачи. Раньше приходилось выходить на улицу"
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <CardContent className="p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Подберем оптимальное решение для вашего дома</h3>
              <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
                Проведем замеры уровня сигнала, определим лучшее расположение антенны и установим 
                репитер с гарантией качественной связи.
              </p>
              <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                    <Icon name="Activity" size={24} className="text-primary" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">Замер сигнала</h4>
                  <p className="text-xs text-muted-foreground">Бесплатно</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mb-2">
                    <Icon name="Settings" size={24} className="text-success" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">Подбор системы</h4>
                  <p className="text-xs text-muted-foreground">Под ваши нужды</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-2">
                    <Icon name="Wrench" size={24} className="text-secondary" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">Монтаж</h4>
                  <p className="text-xs text-muted-foreground">За 2-4 часа</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                    <Icon name="CheckCircle" size={24} className="text-primary" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">Гарантия</h4>
                  <p className="text-xs text-muted-foreground">24 месяца</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 mb-8">
          <Link 
            to="/reviews"
            className="group block"
          >
            <Card className="overflow-hidden border-0 shadow-lg bg-gradient-to-br from-primary via-primary/95 to-secondary hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                      <Icon name="Star" size={18} className="text-yellow-300" />
                      <span className="text-white text-sm font-medium">500+ довольных клиентов</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      Узнайте, что говорят наши клиенты
                    </h3>
                  </div>
                  <div className="flex items-center gap-3 bg-white hover:bg-white/95 text-primary px-6 py-3 rounded-xl font-bold shadow-lg group-hover:shadow-xl transition-all">
                    <Icon name="MessageSquare" size={20} />
                    <span>Читать отзывы</span>
                    <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <CardContent className="p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Подберем оптимальное решение для вашего дома</h3>
              <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
                Проведем замеры уровня сигнала, определим лучшее расположение антенны и установим 
                репитер с гарантией качественной связи.
              </p>
              <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                    <Icon name="Activity" size={24} className="text-primary" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">Замер сигнала</h4>
                  <p className="text-xs text-muted-foreground">Бесплатно</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mb-2">
                    <Icon name="Settings" size={24} className="text-success" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">Подбор системы</h4>
                  <p className="text-xs text-muted-foreground">Под ваши нужды</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-2">
                    <Icon name="Wrench" size={24} className="text-secondary" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">Монтаж</h4>
                  <p className="text-xs text-muted-foreground">За 2-4 часа</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                    <Icon name="CheckCircle" size={24} className="text-primary" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">Гарантия</h4>
                  <p className="text-xs text-muted-foreground">24 месяца</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);