import { useState } from 'react';
import { useSEO } from '@/hooks/useSEO';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import WhatsAppButton from '@/components/WhatsAppButton';
import UniversalFooter from '@/components/UniversalFooter';

const SecureConnection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" size={32} className="text-primary" />
              <a href="/" className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">NetConnect</a>
            </div>
            
            <nav className="hidden lg:flex items-center gap-3 xl:gap-4">
              <a href="/" className="text-sm font-medium hover:text-success transition-colors whitespace-nowrap">Главная</a>
              <a href="/services" className="text-sm font-medium hover:text-success transition-colors whitespace-nowrap">Услуги</a>
              <a href="/tariffs" className="text-sm font-medium hover:text-success transition-colors whitespace-nowrap">Тарифы</a>
              <a 
                href="tel:+79015000078" 
                className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm whitespace-nowrap"
              >
                <Icon name="Phone" size={16} className="mr-2" />
                <span className="hidden xl:inline">+7 (901) 500-00-78</span>
                <span className="xl:hidden">Позвонить</span>
              </a>
            </nav>

            <div className="flex items-center gap-2 lg:hidden">
              <a 
                href="tel:+79015000078" 
                className="inline-flex items-center justify-center w-10 h-10 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                aria-label="Позвонить"
              >
                <Icon name="Phone" size={20} />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-accent transition-colors"
                aria-label="Меню"
              >
                <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 py-4 border-t border-border">
              <div className="space-y-4">
                <a href="/" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-medium hover:text-success transition-colors">Главная</a>
                <a href="/services" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-medium hover:text-success transition-colors">Услуги</a>
                <a href="/tariffs" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-medium hover:text-success transition-colors">Тарифы</a>
              </div>
            </div>
          )}
        </div>
      </header>

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

      <UniversalFooter customCopyright="© 2015 NetConnect. Защищённый интернет в Московской области." />
      <WhatsAppButton />
    </div>
  );
};

export default SecureConnection;
