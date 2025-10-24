import { useSEO } from '@/hooks/useSEO';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';

const SecureConnection = () => {

  useSEO({
    title: 'Защищённое интернет-подключение с шифрованием в МО | NetConnect',
    description: 'Безопасный беспроводной интернет с шифрованием трафика, защитой от DDoS, VPN-поддержкой. Конфиденциальность данных гарантирована. Звоните: +7 (901) 500-00-78',
    canonical: 'https://mosoblconnect.ru/secure-connection',
    ogTitle: 'Защищённый интернет с шифрованием в Московской области',
    ogDescription: 'Безопасное беспроводное подключение. Шифрование WPA3, защита от DDoS-атак, поддержка VPN.',
    ogImage: 'https://cdn.mosoblconnect.ru/files/0b95440d-0b84-41b8-8404-418760cb07a4.jpg',
    ogImageAlt: 'Защищённое интернет-соединение NetConnect'
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-16 bg-gradient-to-br from-blue-50 via-cyan-50 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl mb-6 shadow-xl">
              <Icon name="Shield" size={40} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Защищённое подключение
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Шифрование данных, защита от атак и полная конфиденциальность в сети
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="px-4 py-2 bg-blue-100 text-blue-800 border-blue-200">
                <Icon name="Lock" size={16} className="mr-2" />
                Шифрование WPA3
              </Badge>
              <Badge className="px-4 py-2 bg-cyan-100 text-cyan-800 border-cyan-200">
                <Icon name="ShieldCheck" size={16} className="mr-2" />
                Защита от DDoS
              </Badge>
              <Badge className="px-4 py-2 bg-indigo-100 text-indigo-800 border-indigo-200">
                <Icon name="Globe" size={16} className="mr-2" />
                Поддержка VPN
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Почему безопасность важна</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Lock" size={24} className="text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Шифрование трафика</h3>
                  <p className="text-muted-foreground">Весь ваш трафик зашифрован по протоколу WPA3. Никто не может перехватить данные</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="ShieldAlert" size={24} className="text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Защита от DDoS</h3>
                  <p className="text-muted-foreground">Современные системы фильтрации защищают от DDoS-атак и флуда</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="KeyRound" size={24} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">VPN-поддержка</h3>
                  <p className="text-muted-foreground">Полная совместимость с любыми VPN-сервисами для анонимности</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Eye" size={24} className="text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Приватность</h3>
                  <p className="text-muted-foreground">Не храним логи посещённых сайтов. Ваша приватность под защитой</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Уровни защиты вашего подключения</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Radio" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Шифрование на уровне радиоканала (WPA3)</h3>
                      <p className="text-muted-foreground">
                        Используем новейший стандарт шифрования WPA3-Personal с 192-битным ключом. Это самый надёжный 
                        протокол защиты Wi-Fi соединений на сегодняшний день. Подбор пароля методом перебора практически 
                        невозможен — потребуются миллиарды лет даже на самых мощных суперкомпьютерах.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Flame" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Межсетевой экран (Firewall)</h3>
                      <p className="text-muted-foreground">
                        На каждом роутере активирован продвинутый межсетевой экран, который блокирует входящие соединения 
                        и защищает ваши устройства от внешних атак. Все порты закрыты по умолчанию, открываются только те, 
                        которые нужны для работы ваших приложений. Система автоматически блокирует подозрительную активность.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Globe" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Безопасный DNS</h3>
                      <p className="text-muted-foreground">
                        Используем защищённые DNS-серверы с поддержкой DNSSEC для предотвращения подмены адресов сайтов. 
                        Это защищает от фишинговых атак и перенаправления на вредоносные ресурсы. Также DNS-фильтр блокирует 
                        известные источники вирусов и вредоносного ПО ещё до того, как они попадут на ваше устройство.
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
                      <h3 className="text-xl font-bold mb-2">Мониторинг аномалий</h3>
                      <p className="text-muted-foreground">
                        Система мониторинга отслеживает необычную сетевую активность в режиме реального времени. При обнаружении 
                        признаков DDoS-атаки, сканирования портов или массовых рассылок спама автоматически включаются защитные 
                        механизмы. В критических случаях наши специалисты свяжутся с вами для решения проблемы.
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
            <h2 className="text-3xl font-bold mb-6">Нужен защищённый интернет?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Подключитесь к безопасному провайдеру уже сегодня
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

export default SecureConnection;