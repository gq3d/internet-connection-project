import { useSEO } from '@/hooks/useSEO';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';

const HighSpeed = () => {

  useSEO({
    title: 'Высокоскоростной интернет до 250 Мбит/с в МО | NetConnect',
    description: 'Беспроводной интернет со скоростью до 250 Мбит/с для дома и бизнеса. Стриминг 4K, онлайн-игры, видеозвонки без задержек. Звоните: +7 (901) 500-00-78',
    canonical: 'https://wiline.ru/high-speed',
    ogTitle: 'Высокоскоростной интернет 250 Мбит/с в Московской области',
    ogDescription: 'Беспроводной интернет со скоростью до 250 Мбит/с. Без проводов, быстрое подключение за 1-3 дня.',
    ogImage: 'https://cdn.wiline.ru/files/0b95440d-0b84-41b8-8404-418760cb07a4.jpg',
    ogImageAlt: 'Высокоскоростной интернет NetConnect'
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-16 bg-gradient-to-br from-yellow-50 via-orange-50 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl mb-6 shadow-xl">
              <Icon name="Zap" size={40} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Высокоскоростной интернет
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              До 250 Мбит/с для комфортной работы, учебы и развлечений без ограничений
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="px-4 py-2 bg-yellow-100 text-yellow-800 border-yellow-200">
                <Icon name="Download" size={16} className="mr-2" />
                До 250 Мбит/с
              </Badge>
              <Badge className="px-4 py-2 bg-orange-100 text-orange-800 border-orange-200">
                <Icon name="Upload" size={16} className="mr-2" />
                Высокая отдача
              </Badge>
              <Badge className="px-4 py-2 bg-green-100 text-green-800 border-green-200">
                <Icon name="Wifi" size={16} className="mr-2" />
                Беспроводной
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Что можно делать на скорости 250 Мбит/с</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Play" size={24} className="text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Стриминг 4K видео</h3>
                  <p className="text-muted-foreground">Смотрите фильмы и сериалы в максимальном качестве на нескольких устройствах одновременно</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Gamepad2" size={24} className="text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Онлайн-игры</h3>
                  <p className="text-muted-foreground">Играйте без лагов и задержек. Низкий пинг для комфортного гейминга</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Video" size={24} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Видеозвонки HD</h3>
                  <p className="text-muted-foreground">Работайте из дома с комфортом. Zoom, Teams, Skype без зависаний</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Download" size={24} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Быстрая загрузка</h3>
                  <p className="text-muted-foreground">Скачивайте большие файлы за минуты. Фильм 10 ГБ — всего 5 минут</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Users" size={24} className="text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Вся семья онлайн</h3>
                  <p className="text-muted-foreground">Хватит на всех: работа, учеба, развлечения одновременно на 10+ устройствах</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Cloud" size={24} className="text-pink-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Облачные сервисы</h3>
                  <p className="text-muted-foreground">Работайте с Google Drive, Яндекс.Диск, Dropbox без ожидания</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Как мы достигаем таких скоростей</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Antenna" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Современные MIMO-антенны</h3>
                      <p className="text-muted-foreground">
                        Используем антенны с технологией Multiple Input Multiple Output, которые работают одновременно 
                        в нескольких потоках. Это увеличивает скорость передачи данных в 2-3 раза по сравнению с обычными антеннами.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Radio" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Оптимальный выбор частот</h3>
                      <p className="text-muted-foreground">
                        Наши инженеры проводят сканирование радиоэфира и выбирают наименее загруженные частоты. 
                        Это гарантирует стабильную максимальную скорость даже в час пик.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Settings" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Профессиональная настройка</h3>
                      <p className="text-muted-foreground">
                        Каждое подключение настраивается индивидуально с учетом рельефа местности, расстояния до базовой 
                        станции и помех. Это позволяет выжать максимум из доступного сигнала.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Zap" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Агрегация каналов</h3>
                      <p className="text-muted-foreground">
                        При необходимости объединяем несколько модемов в один канал с помощью технологии сумматора. 
                        Это удваивает или утраивает скорость в местах с сильной загруженностью сети.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Готовы к высокой скорости?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Подключитесь к интернету 250 Мбит/с уже сегодня
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+79015000078"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl hover:shadow-xl transition-all font-bold text-lg"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                +7 (901) 500-00-78
              </a>
              <a 
                href="/tariffs"
                className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-primary text-primary rounded-xl hover:bg-primary hover:text-white transition-all font-bold text-lg"
              >
                <Icon name="FileText" size={20} className="mr-2" />
                Смотреть тарифы
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HighSpeed;