import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const SurveillanceExamples = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-accent/5 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Примеры установки видеонаблюдения</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Реальные проекты систем видеонаблюдения в частных домах и на дачах Московской области
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <img 
                  src="https://cdn.poehali.dev/files/0b448bcd-e51b-47eb-92ad-a7d51be237a6.png" 
                  alt="Видеонаблюдение в коттедже" 
                  loading="lazy"
                  width="640"
                  height="360"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-success text-white border-0">4K качество</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Коттедж в Одинцовском районе</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start space-x-2">
                    <Icon name="MapPin" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">КП "Новая Рига"</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Icon name="Video" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">8 IP камер 4K по периметру дома</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Icon name="HardDrive" size={16} className="text-success mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">NVR регистратор на 30 дней записи</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Icon name="Smartphone" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Мобильное приложение для удаленного доступа</span>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm italic text-muted-foreground">
                    "Теперь вижу все, что происходит на участке, даже когда в городе. Картинка четкая, ночью все видно отлично"
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <img 
                  src="https://cdn.poehali.dev/files/c0507610-bf80-4943-a2cd-f4b2fd8e2294.png" 
                  alt="Камеры на даче" 
                  loading="lazy"
                  width="640"
                  height="360"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-secondary text-white border-0">Full HD</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Дача в Истринском районе</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start space-x-2">
                    <Icon name="MapPin" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">СНТ "Подмосковье"</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Icon name="Video" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">4 IP камеры Full HD на калитке и входе</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Icon name="Moon" size={16} className="text-success mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Ночная съемка до 30 метров</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Icon name="Bell" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Push-уведомления при движении</span>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm italic text-muted-foreground">
                    "Приезжаем раз в неделю, камеры помогают следить чтобы все было в порядке. Сразу видим если кто-то заходил"
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <img 
                  src="https://cdn.poehali.dev/files/5acc45ef-cca8-4d38-bd8b-c51a3d147548.png" 
                  alt="Система мониторинга дома" 
                  loading="lazy"
                  width="640"
                  height="360"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-white border-0">Премиум</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Загородный дом в Подольском районе</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start space-x-2">
                    <Icon name="MapPin" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Поселок "Зеленая роща"</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Icon name="Video" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">12 камер 4K + PTZ камера у въезда</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Icon name="Cloud" size={16} className="text-success mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Облачное хранение + локальный NVR</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Icon name="Gauge" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Интеллектуальная аналитика движения</span>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm italic text-muted-foreground">
                    "Полностью контролируем всю территорию. Система интегрирована с охранной сигнализацией и умным домом"
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Установим видеонаблюдение под ваши задачи</h3>
                <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
                  Мы разработаем индивидуальную схему размещения камер с учетом особенностей вашего объекта. 
                  Бесплатный выезд инженера, профессиональный монтаж и гарантия на систему.
                </p>
                <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <h4 className="font-semibold text-sm mb-1">Выезд специалиста</h4>
                    <p className="text-xs text-muted-foreground">Бесплатно</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mb-2">
                      <Icon name="FileText" size={24} className="text-success" />
                    </div>
                    <h4 className="font-semibold text-sm mb-1">Проект системы</h4>
                    <p className="text-xs text-muted-foreground">Схема камер</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-2">
                      <Icon name="Wrench" size={24} className="text-secondary" />
                    </div>
                    <h4 className="font-semibold text-sm mb-1">Установка</h4>
                    <p className="text-xs text-muted-foreground">За 1-2 дня</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                      <Icon name="Shield" size={24} className="text-primary" />
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
};

export default SurveillanceExamples;