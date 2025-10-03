import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const InternetTechnology = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Подключение интернета в частный дом и за городом</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Компания MosoblConnect предоставляет быстрый и стабильный интернет в частные дома, коттеджи и дачи 
              по всей Московской области. Мы подключаем интернет даже там, где крупные провайдеры отказываются, 
              благодаря современным LTE-решениям, инженерному подходу и индивидуальной настройке под каждого клиента.
            </p>
          </div>

          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                  <Icon name="Antenna" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">MIMO-антенна — максимум скорости даже при слабом сигнале 3G, 4G, 5G</h3>
                  <p className="text-muted-foreground">
                    Для подключения мы используем современные MIMO-антенны, которые работают сразу в нескольких потоках. 
                    Это увеличивает скорость и стабильность соединения даже при слабом сигнале. Правильная установка 
                    и настройка антенны гарантируют качественный интернет без обрывов.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                  <Icon name="Router" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Роутеры с поддержкой всех диапазонов LTE, 5G, 3G</h3>
                  <p className="text-muted-foreground">
                    Мы устанавливаем роутеры и модемы с поддержкой разных частотных диапазонов LTE, 5G, 3G. 
                    При подключении наши инженеры проводят сканирование сети, чтобы определить незагруженные частоты 
                    и проверить их пропускную способность. Благодаря этому интернет работает быстрее и стабильнее, 
                    чем при стандартном подключении.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                  <Icon name="Zap" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Ускорение с помощью сумматора</h3>
                  <p className="text-muted-foreground">
                    Для районов с сильной нагрузкой мы предлагаем технологию сумматора. Это решение позволяет объединить 
                    работу нескольких модемов и тарифов в одно соединение. В результате даже в час пик вы получаете 
                    высокую скорость и надёжность доступа в интернет.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                  <Icon name="Settings" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Доработанное оборудование и прошивки</h3>
                  <p className="text-muted-foreground">
                    Мы используем роутеры и модемы со своей доработанной прошивкой, основанной на оригинальном ПО производителя. 
                    Это расширяет возможности оборудования, повышает стабильность соединения и даёт нашим абонентам 
                    дополнительные функции, недоступные у стандартных решений.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                  <Icon name="Users" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Собственный инженерный отдел и поддержка любого уровня</h3>
                  <p className="text-muted-foreground mb-4">
                    У нас работает собственный инженерный отдел, который занимается подключением, модернизацией 
                    и техническим сопровождением.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <Icon name="Shield" size={20} className="text-success mt-1" />
                      <div>
                        <h4 className="font-semibold">Гарантия на оборудование — 12 месяцев</h4>
                        <p className="text-sm text-muted-foreground">Даже после окончания гарантии мы продолжаем оказывать поддержку</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Icon name="Monitor" size={20} className="text-success mt-1" />
                      <div>
                        <h4 className="font-semibold">Удалённое обслуживание</h4>
                        <p className="text-sm text-muted-foreground">Обновление прошивки и диагностика без визита</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Icon name="Phone" size={20} className="text-success mt-1" />
                      <div>
                        <h4 className="font-semibold">Консультации по всем вопросам</h4>
                        <p className="text-sm text-muted-foreground">От настройки роутера до выбора тарифа</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Icon name="Car" size={20} className="text-success mt-1" />
                      <div>
                        <h4 className="font-semibold">Выезд инженера</h4>
                        <p className="text-sm text-muted-foreground">Срочный выезд в течение 3–5 часов</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Icon name="TrendingUp" size={20} className="text-success mt-1" />
                      <div>
                        <h4 className="font-semibold">Модернизация оборудования</h4>
                        <p className="text-sm text-muted-foreground">Обновление техники для максимальной скорости</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Icon name="Clock" size={20} className="text-success mt-1" />
                      <div>
                        <h4 className="font-semibold">Поддержка 24/7</h4>
                        <p className="text-sm text-muted-foreground">Техническая поддержка в любое время</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Почему выбирают MosoblConnect</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-success" />
                  <span>Подключаем интернет там, где другие не могут</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-success" />
                  <span>Современные MIMO-антенны и LTE-роутеры</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-success" />
                  <span>Сканирование сети и оптимальные диапазоны</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-success" />
                  <span>Увеличение скорости с помощью сумматора</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-success" />
                  <span>Собственные прошивки и доработанное оборудование</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-success" />
                  <span>Инженерный отдел и поддержка 24/7</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-success" />
                  <span>Срочный выезд специалиста</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-success" />
                  <span>Быстрый, надёжный и технологичный интернет</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InternetTechnology;
