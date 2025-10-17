import { useSEO } from '@/hooks/useSEO';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';

const KidsInternet = () => {

  useSEO({
    title: 'Детский интернет с родительским контролем в МО | NetConnect',
    description: 'Безопасный интернет для детей с родительским контролем, блокировкой опасных сайтов, контролем времени. Отчёты об активности, возрастные фильтры. Звоните: +7 (901) 500-00-78',
    canonical: 'https://wiline.ru/kids-internet',
    ogTitle: 'Детский интернет с родительским контролем в Московской области',
    ogDescription: 'Безопасный интернет для детей. Блокировка опасных сайтов, лимиты времени, статистика посещений.',
    ogImage: 'https://cdn.wiline.ru/files/0b95440d-0b84-41b8-8404-418760cb07a4.jpg',
    ogImageAlt: 'Детский интернет с родительским контролем NetConnect'
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-16 bg-gradient-to-br from-pink-50 via-rose-50 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl mb-6 shadow-xl">
              <Icon name="Baby" size={40} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Детский интернет
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Родительский контроль, блокировка опасных сайтов и полная безопасность ваших детей онлайн
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="px-4 py-2 bg-pink-100 text-pink-800 border-pink-200">
                <Icon name="ShieldCheck" size={16} className="mr-2" />
                Родительский контроль
              </Badge>
              <Badge className="px-4 py-2 bg-rose-100 text-rose-800 border-rose-200">
                <Icon name="Clock" size={16} className="mr-2" />
                Лимиты времени
              </Badge>
              <Badge className="px-4 py-2 bg-red-100 text-red-800 border-red-200">
                <Icon name="Ban" size={16} className="mr-2" />
                Блокировка сайтов
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Возможности родительского контроля</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Ban" size={24} className="text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Блокировка сайтов</h3>
                  <p className="text-muted-foreground">Автоматическая блокировка сайтов для взрослых, казино, насилия и других опасных категорий</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Clock" size={24} className="text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Временные лимиты</h3>
                  <p className="text-muted-foreground">Устанавливайте время использования интернета: по часам, дням недели или общему лимиту</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="BarChart" size={24} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Отчёты активности</h3>
                  <p className="text-muted-foreground">Детальная статистика посещённых сайтов, времени онлайн и активности по дням</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Users" size={24} className="text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Возрастные фильтры</h3>
                  <p className="text-muted-foreground">Настройка контроля по возрасту: от малышей до подростков с разными уровнями защиты</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="CheckCircle" size={24} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Белые списки</h3>
                  <p className="text-muted-foreground">Создавайте списки разрешённых образовательных и развивающих сайтов</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Search" size={24} className="text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Безопасный поиск</h3>
                  <p className="text-muted-foreground">Фильтрация результатов поиска Яндекс и Google от нежелательного контента</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Как работает система защиты</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Filter" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">DNS-фильтрация</h3>
                      <p className="text-muted-foreground">
                        Система работает на уровне DNS-запросов, блокируя доступ к нежелательным сайтам ещё до их загрузки. 
                        База опасных ресурсов включает более 10 миллионов адресов и обновляется ежедневно. Блокируются 
                        сайты для взрослых, азартные игры, наркотики, оружие, экстремизм и другой опасный контент.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="CalendarClock" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Гибкие расписания</h3>
                      <p className="text-muted-foreground">
                        Настраивайте доступ к интернету по дням недели и времени суток через простой веб-интерфейс. 
                        Например, разрешить интернет только после выполнения домашнего задания с 18:00 до 21:00 в будни, 
                        а в выходные — с 10:00 до 22:00. Можно установить общий дневной лимит времени или заблокировать 
                        доступ к определённым сайтам в учебное время.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="List" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Персональные списки</h3>
                      <p className="text-muted-foreground">
                        Создавайте белые списки полезных образовательных ресурсов (учи.ру, решу.егэ и др.), к которым 
                        всегда будет доступ независимо от настроек. Чёрные списки позволяют заблокировать конкретные сайты 
                        или категории, которые вы считаете неподходящими. Списки работают мгновенно и применяются ко всем 
                        устройствам ребёнка.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="LineChart" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Статистика использования</h3>
                      <p className="text-muted-foreground">
                        Получайте подробные отчёты об онлайн-активности детей: какие сайты посещались, сколько времени 
                        проведено в интернете, попытки доступа к заблокированным ресурсам. Вся информация доступна в 
                        личном кабинете в виде наглядных графиков и таблиц. Можно настроить email-уведомления о попытках 
                        обхода защиты или превышении лимитов времени.
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
            <h2 className="text-3xl font-bold mb-6">Хотите защитить своих детей онлайн?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Подключите интернет с родительским контролем уже сегодня
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
                href="tel:+79015000087"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl hover:shadow-xl transition-all font-bold text-lg"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                +7 (901) 500-00-87
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KidsInternet;