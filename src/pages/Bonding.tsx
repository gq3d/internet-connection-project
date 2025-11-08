import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { useSEO } from '@/hooks/useSEO';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';

export default function Bonding() {
  useSEO({
    title: 'Bonding каналов — объединение интернет-каналов для бизнеса | Балансировка нагрузки | NetConnect',
    description: 'Технология Bonding — суммирование скорости нескольких интернет-каналов от разных провайдеров. До 100+ Мбит/с, отказоустойчивость, балансировка нагрузки. Идеально для офисов, стриминга, торговых точек в Подмосковье. ☎️ +7 (495) 663-73-74',
    keywords: 'bonding каналов, объединение интернет каналов, балансировка интернет каналов, суммирование скорости интернет, отказоустойчивый интернет для бизнеса, агрегация каналов, bonding технология подмосковье, высокоскоростной интернет для офиса',
    ogTitle: 'Bonding каналов — объединение интернет-провайдеров для максимальной скорости',
    ogDescription: 'Суммируем скорость нескольких интернет-каналов в один. Отказоустойчивость + балансировка нагрузки для вашего бизнеса.',
    canonical: 'https://mosoblconnect.ru/business/bonding',
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="py-16 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <Link 
            to="/business" 
            className="inline-flex items-center text-primary hover:underline mb-6"
          >
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            Назад к услугам для бизнеса
          </Link>
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Icon name="Zap" size={16} />
              Специальное предложение
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Bonding и балансировка каналов
            </h1>
            <p className="text-xl text-muted-foreground">
              Объединяем несколько интернет-каналов в один мощный поток для максимальной скорости и надёжности
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Как это работает</h2>
            
            <div className="bg-card border rounded-2xl p-8 mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                <div className="flex flex-col items-center text-center">
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold mb-4 whitespace-nowrap">
                    НА СТОРОНЕ КЛИЕНТА
                  </div>
                  <div className="space-y-4 w-full">
                    <div className="flex flex-col items-center">
                      <div className="w-20 h-20 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                        <Icon name="Monitor" size={32} className="text-primary" />
                      </div>
                      <p className="text-sm font-medium">Клиентские устройства</p>
                    </div>
                    
                    <div className="flex justify-center">
                      <Icon name="ArrowDown" size={24} className="text-primary" />
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="w-20 h-20 rounded-xl bg-orange-500/20 flex items-center justify-center mb-2 border-2 border-orange-500">
                        <Icon name="Wifi" size={32} className="text-orange-500" />
                      </div>
                      <p className="text-sm font-medium">mosoblconnect</p>
                      <p className="text-xs text-muted-foreground">мультироутер</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-semibold mb-4 whitespace-nowrap">
                    SIM-КАРТЫ И ETHERNET
                  </div>
                  <div className="space-y-3 w-full">
                    <div className="flex items-center gap-3 bg-muted/50 px-3 py-2 rounded-lg border">
                      <Icon name="Smartphone" size={24} className="text-primary" />
                      <div className="text-left flex-1">
                        <p className="text-xs text-muted-foreground">мобильная сеть</p>
                        <p className="text-sm font-semibold text-cyan-500">20 Мбит/с</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-muted/50 px-3 py-2 rounded-lg border">
                      <Icon name="Smartphone" size={24} className="text-primary" />
                      <div className="text-left flex-1">
                        <p className="text-xs text-muted-foreground">мобильная сеть</p>
                        <p className="text-sm font-semibold text-cyan-500">15 Мбит/с</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-muted/50 px-3 py-2 rounded-lg border">
                      <Icon name="Smartphone" size={24} className="text-primary" />
                      <div className="text-left flex-1">
                        <p className="text-xs text-muted-foreground">мобильная сеть</p>
                        <p className="text-sm font-semibold text-cyan-500">5 Мбит/с</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-muted/50 px-3 py-2 rounded-lg border">
                      <Icon name="Cable" size={24} className="text-secondary" />
                      <div className="text-left flex-1">
                        <p className="text-xs text-muted-foreground">проводная сеть</p>
                        <p className="text-sm font-semibold text-cyan-500">50 Мбит/с</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold mb-4 whitespace-nowrap">
                    РАЗНЫЕ ОПЕРАТОРЫ
                  </div>
                  <div className="space-y-3 w-full">
                    <div className="flex flex-col items-center py-2">
                      <Icon name="Radio" size={32} className="text-primary mb-1" />
                      <p className="text-xs text-muted-foreground">Оператор 1</p>
                    </div>
                    <div className="flex flex-col items-center py-2">
                      <Icon name="Radio" size={32} className="text-primary mb-1" />
                      <p className="text-xs text-muted-foreground">Оператор 2</p>
                    </div>
                    <div className="flex flex-col items-center py-2">
                      <Icon name="Radio" size={32} className="text-primary mb-1" />
                      <p className="text-xs text-muted-foreground">Оператор 3</p>
                    </div>
                    <div className="flex flex-col items-center py-2">
                      <Icon name="Radio" size={32} className="text-primary mb-1" />
                      <p className="text-xs text-muted-foreground">Оператор 4</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-600 px-3 py-1 rounded-full text-xs font-semibold mb-4 whitespace-nowrap">
                    СУММИРУЕМ СКОРОСТЬ
                  </div>
                  <div className="space-y-4 w-full">
                    <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 rounded-xl p-4 border-2 border-cyan-500/30">
                      <p className="text-lg font-bold text-cyan-500 mb-1">20 + 15 + 5 + 50</p>
                      <p className="text-2xl font-bold text-cyan-500">= 90 Мбит/с</p>
                    </div>
                    
                    <div className="flex justify-center">
                      <Icon name="ArrowDown" size={24} className="text-green-500" />
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-2 border-2 border-purple-500 relative">
                        <Icon name="Server" size={32} className="text-purple-500" />
                        <div className="absolute -top-1 -right-1">
                          <Icon name="Zap" size={16} className="text-yellow-500" />
                        </div>
                      </div>
                      <p className="text-sm font-medium">mosoblconnect</p>
                      <p className="text-xs text-muted-foreground">суммирующий сервер</p>
                    </div>

                    <div className="flex justify-center">
                      <Icon name="ArrowDown" size={24} className="text-green-500" />
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="w-20 h-20 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                        <Icon name="Globe" size={32} className="text-primary" />
                      </div>
                      <p className="text-sm font-medium">Статический IP</p>
                      <p className="text-xs text-muted-foreground">интернет</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-2 border-green-500/20 rounded-xl p-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-500/20 rounded-lg">
                  <Icon name="Info" size={24} className="text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Технология Bonding</h3>
                  <p className="text-muted-foreground">
                    Специальный суммирующий сервер объединяет несколько независимых интернет-каналов от разных операторов в один мощный канал. 
                    Результат: суммарная скорость и отказоустойчивость — если один провайдер упадёт, интернет продолжит работать через остальные.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Преимущества технологии</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-card border rounded-xl p-6">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <Icon name="Zap" size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Высокая скорость</h3>
              <p className="text-muted-foreground text-sm">
                Суммарная пропускная способность всех каналов — до 100+ Мб/с и выше
              </p>
            </div>

            <div className="bg-card border rounded-xl p-6">
              <div className="p-3 bg-green-500/10 rounded-lg w-fit mb-4">
                <Icon name="ShieldCheck" size={28} className="text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Надёжность</h3>
              <p className="text-muted-foreground text-sm">
                Если один канал упадёт, остальные продолжат работать — интернет не пропадёт
              </p>
            </div>

            <div className="bg-card border rounded-xl p-6">
              <div className="p-3 bg-secondary/10 rounded-lg w-fit mb-4">
                <Icon name="TrendingUp" size={28} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Масштабируемость</h3>
              <p className="text-muted-foreground text-sm">
                Легко добавить ещё каналы для увеличения скорости и надёжности
              </p>
            </div>

            <div className="bg-card border rounded-xl p-6">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <Icon name="Globe" size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Независимость</h3>
              <p className="text-muted-foreground text-sm">
                Не зависите от одного провайдера — используете лучшее от разных операторов
              </p>
            </div>

            <div className="bg-card border rounded-xl p-6">
              <div className="p-3 bg-green-500/10 rounded-lg w-fit mb-4">
                <Icon name="Users" size={28} className="text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Для бизнеса</h3>
              <p className="text-muted-foreground text-sm">
                Идеально для офисов, онлайн-сервисов, стриминга, видеоконференций
              </p>
            </div>

            <div className="bg-card border rounded-xl p-6">
              <div className="p-3 bg-secondary/10 rounded-lg w-fit mb-4">
                <Icon name="Settings" size={28} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Балансировка</h3>
              <p className="text-muted-foreground text-sm">
                Умное распределение нагрузки между каналами для оптимальной работы
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Для кого это решение?</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-card border rounded-xl p-6">
              <Icon name="Building2" size={32} className="text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Офисы и компании</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-start">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Постоянный доступ к облачным сервисам
                </li>
                <li className="flex items-start">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Видеоконференции без разрывов
                </li>
                <li className="flex items-start">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Работа с большими файлами
                </li>
              </ul>
            </div>

            <div className="bg-card border rounded-xl p-6">
              <Icon name="Store" size={32} className="text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-3">Торговые точки</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-start">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Бесперебойная работа онлайн-касс
                </li>
                <li className="flex items-start">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Стабильность банковских терминалов
                </li>
                <li className="flex items-start">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Быстрая загрузка товаров в системе
                </li>
              </ul>
            </div>

            <div className="bg-card border rounded-xl p-6">
              <Icon name="Video" size={32} className="text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Стриминг и контент</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-start">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Прямые трансляции без лагов
                </li>
                <li className="flex items-start">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Быстрая загрузка видео на платформы
                </li>
                <li className="flex items-start">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Высокое качество без буферизации
                </li>
              </ul>
            </div>

            <div className="bg-card border rounded-xl p-6">
              <Icon name="Wifi" size={32} className="text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-3">Загородные объекты</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-start">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Решение проблемы слабого покрытия
                </li>
                <li className="flex items-start">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Объединение нескольких операторов
                </li>
                <li className="flex items-start">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Стабильный интернет вдали от города
                </li>
              </ul>
            </div>
          </div>

          <div className="max-w-3xl mx-auto bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 text-center">
            <Icon name="Phone" size={48} className="mx-auto text-primary mb-6" />
            <h2 className="text-3xl font-bold mb-4">Интересует bonding?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Специальное предложение для бизнеса. Свяжитесь с нами для расчёта стоимости и технического решения
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+79015000078"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                <Icon name="Phone" size={20} />
                +7 (901) 500-00-78
              </a>
              <a 
                href="https://wa.me/79015000078"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-medium"
              >
                <Icon name="MessageCircle" size={20} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}