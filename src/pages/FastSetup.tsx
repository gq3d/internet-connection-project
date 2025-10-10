import { useState } from 'react';
import { useSEO } from '@/hooks/useSEO';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import WhatsAppButton from '@/components/WhatsAppButton';
import UniversalFooter from '@/components/UniversalFooter';

const FastSetup = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useSEO({
    title: 'Быстрое подключение интернета за 1-3 дня в МО | NetConnect',
    description: 'Подключение беспроводного интернета за 1-3 дня без прокладки кабелей. Профессиональная установка, всё оборудование включено. Без копания траншей. Звоните: +7 (901) 500-00-78',
    canonical: 'https://mosoblconnect.ru/fast-setup',
    ogTitle: 'Быстрое подключение интернета за 1-3 дня в Московской области',
    ogDescription: 'Установка беспроводного интернета за 1-3 дня. Без прокладки кабелей, профессиональный монтаж оборудования.',
    ogImage: 'https://cdn.mosoblconnect.ru/files/0b95440d-0b84-41b8-8404-418760cb07a4.jpg',
    ogImageAlt: 'Быстрое подключение интернета NetConnect'
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

      <section className="py-16 bg-gradient-to-br from-purple-50 via-violet-50 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl mb-6 shadow-xl">
              <Icon name="Clock" size={40} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
              Быстрое подключение
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Установка интернета за 1-3 дня без прокладки кабелей и копания траншей
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="px-4 py-2 bg-purple-100 text-purple-800 border-purple-200">
                <Icon name="Zap" size={16} className="mr-2" />
                1-3 дня установка
              </Badge>
              <Badge className="px-4 py-2 bg-violet-100 text-violet-800 border-violet-200">
                <Icon name="Drill" size={16} className="mr-2" />
                Без копания
              </Badge>
              <Badge className="px-4 py-2 bg-fuchsia-100 text-fuchsia-800 border-fuchsia-200">
                <Icon name="Wrench" size={16} className="mr-2" />
                Всё включено
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Преимущества быстрого подключения</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Timer" size={24} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">1-3 дня установка</h3>
                  <p className="text-muted-foreground">Подключим интернет в течение 1-3 дней после заявки. Не ждите неделями</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Cable" size={24} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Без кабелей</h3>
                  <p className="text-muted-foreground">Беспроводное подключение. Не нужно тянуть провода и портить ландшафт</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="UserCheck" size={24} className="text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Профессионалы</h3>
                  <p className="text-muted-foreground">Опытные монтажники выполнят установку качественно и аккуратно</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Package" size={24} className="text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Всё в комплекте</h3>
                  <p className="text-muted-foreground">Оборудование, крепёж, кабели и настройка — всё уже включено в стоимость</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Этапы подключения интернета</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-primary">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Заявка и консультация</h3>
                      <p className="text-muted-foreground">
                        Позвоните нам по телефону{' '}
                        <a 
                          href="tel:+79015000078"
                          className="font-semibold text-primary hover:underline"
                        >
                          +7 (901) 500-00-78
                        </a>
                        . Наш специалист уточнит адрес и проверит возможность подключения, расскажет о доступных 
                        тарифах, ответит на все вопросы и согласует удобное время для выезда монтажников.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-primary">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Доставка оборудования</h3>
                      <p className="text-muted-foreground">
                        На следующий день после звонка инженер привезёт всё необходимое оборудование: внешнюю антенну, 
                        Wi-Fi роутер, блоки питания, крепёж и кабели. Вам не нужно ничего покупать дополнительно.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-primary">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Монтаж и установка</h3>
                      <p className="text-muted-foreground">
                        В согласованное время приезжает инженер со всем инструментом. Установка занимает 
                        от двух часов в зависимости от сложности объекта: крепление внешней антенны на фасад или крышу дома, 
                        прокладка кабеля внутрь помещения, установка и подключение роутера. Работы выполняются аккуратно, 
                        без повреждения отделки. Весь мусор убирается, крепёжные отверстия герметизируются.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-primary">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Настройка и тестирование</h3>
                      <p className="text-muted-foreground">
                        После монтажа инженер настраивает оборудование для максимальной производительности: выбирает 
                        оптимальную частоту и канал, настраивает Wi-Fi сеть, проверяет скорость и стабильность соединения. 
                        Подключит ваши устройства к сети, покажет как управлять настройками роутера. Проведёт тестирование: 
                        измерит скорость, проверит пинг, запустит видео в 4K. Только убедившись, что всё работает отлично, 
                        передаст вам договор и документы. Интернет работает сразу!
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
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <Icon name="Zap" size={48} className="text-primary mx-auto mb-4" />
                  <h2 className="text-3xl font-bold mb-4">Наши преимущества</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <Icon name="Zap" size={32} className="text-primary mx-auto mb-2" />
                    <p className="font-semibold">Быстрая установка</p>
                    <p className="text-sm text-muted-foreground">За 1-3 дня</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <Icon name="Wrench" size={32} className="text-primary mx-auto mb-2" />
                    <p className="font-semibold">Монтаж</p>
                    <p className="text-sm text-muted-foreground">Профессионально</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Готовы подключиться быстро?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Оставьте заявку сегодня — интернет заработает уже через 1-3 дня
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

      <UniversalFooter customCopyright="© 2015 NetConnect. Быстрое подключение интернета в Московской области." />
      <WhatsAppButton />
    </div>
  );
};

export default FastSetup;