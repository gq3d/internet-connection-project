import { useSEO } from '@/hooks/useSEO';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';

const StableConnection = () => {

  useSEO({
    title: 'Стабильное интернет-соединение 99.9% uptime в МО | NetConnect',
    description: 'Надёжный беспроводной интернет с гарантией работы 99.9%. Круглосуточный мониторинг, резервные каналы, быстрое реагирование. SLA гарантии. Звоните: +7 (901) 500-00-78',
    canonical: 'https://wiline.ru/stable-connection',
    ogTitle: 'Стабильный интернет 99.9% uptime в Московской области',
    ogDescription: 'Беспроводной интернет с гарантией стабильности 99.9%. Мониторинг 24/7, резервирование оборудования.',
    ogImage: 'https://cdn.wiline.ru/files/0b95440d-0b84-41b8-8404-418760cb07a4.jpg',
    ogImageAlt: 'Стабильное интернет-соединение NetConnect'
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-16 bg-gradient-to-br from-green-50 via-emerald-50 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-6 shadow-xl">
              <Icon name="Signal" size={40} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Стабильное соединение
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              99.9% времени работы. Гарантированная надёжность для вашего бизнеса и комфорта
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="px-4 py-2 bg-green-100 text-green-800 border-green-200">
                <Icon name="Check" size={16} className="mr-2" />
                99.9% Uptime
              </Badge>
              <Badge className="px-4 py-2 bg-emerald-100 text-emerald-800 border-emerald-200">
                <Icon name="Clock" size={16} className="mr-2" />
                Мониторинг 24/7
              </Badge>
              <Badge className="px-4 py-2 bg-teal-100 text-teal-800 border-teal-200">
                <Icon name="Shield" size={16} className="mr-2" />
                SLA гарантии
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Преимущества стабильного соединения</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="WifiOff" size={24} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Без отключений</h3>
                  <p className="text-muted-foreground">Работаем без сбоев и внеплановых технических работ. Ваш интернет всегда онлайн</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Eye" size={24} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Мониторинг 24/7</h3>
                  <p className="text-muted-foreground">Круглосуточный контроль работы сети. Обнаруживаем и устраняем проблемы до их появления</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Network" size={24} className="text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Резервные каналы</h3>
                  <p className="text-muted-foreground">Автоматическое переключение на резервный канал связи при любых неполадках</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="FileText" size={24} className="text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">SLA гарантии</h3>
                  <p className="text-muted-foreground">Договорные гарантии качества обслуживания. Компенсация за простои</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Как мы обеспечиваем стабильность</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Server" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Резервное оборудование</h3>
                      <p className="text-muted-foreground">
                        На каждой базовой станции установлено дублирующее оборудование. При выходе из строя основного 
                        маршрутизатора или модема, резервное автоматически включается в течение 30 секунд. Вы даже не 
                        заметите переключения — максимум потеряется один пинг в онлайн-игре.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Activity" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Системы мониторинга</h3>
                      <p className="text-muted-foreground">
                        Специализированное ПО отслеживает работу всех узлов сети в режиме реального времени. Система 
                        анализирует качество сигнала, загруженность каналов, температуру оборудования и другие параметры. 
                        При малейших отклонениях от нормы приходит уведомление дежурному инженеру.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Headphones" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Быстрое реагирование</h3>
                      <p className="text-muted-foreground">
                        Наша служба поддержки работает круглосуточно без выходных. В городских зонах время реакции на 
                        проблему составляет до 2 часов, в удалённых районах — до 4 часов. Дежурная бригада выезжает на 
                        место с полным комплектом запасного оборудования для оперативной замены.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="CloudLightning" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Защита от ЧС</h3>
                      <p className="text-muted-foreground">
                        Все базовые станции оснащены источниками бесперебойного питания и молниезащитой. При отключении 
                        электричества сеть продолжает работать от аккумуляторов до 8 часов. Грозозащитные системы предохраняют 
                        оборудование от скачков напряжения и прямых ударов молнии.
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
            <h2 className="text-3xl font-bold mb-6">Нужен надёжный интернет?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Подключитесь к провайдеру с гарантией стабильности 99.9%
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

export default StableConnection;