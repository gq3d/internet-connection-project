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
              <div className="flex flex-col lg:flex-row items-center gap-4 justify-between">
                <div className="flex flex-col items-center text-center min-w-[140px]">
                  <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center mb-3">
                    <Icon name="Globe" size={40} className="text-primary" />
                  </div>
                  <p className="font-semibold text-sm">Быстрый, надёжный интернет</p>
                </div>

                <Icon name="ArrowRight" size={24} className="text-muted-foreground hidden lg:block" />
                <Icon name="ArrowDown" size={24} className="text-muted-foreground lg:hidden" />

                <div className="flex flex-col items-center text-center min-w-[140px]">
                  <div className="w-24 h-24 rounded-2xl bg-secondary/10 flex items-center justify-center mb-3">
                    <Icon name="Server" size={40} className="text-secondary" />
                  </div>
                  <p className="font-semibold text-sm">Наш суммирующий сервер</p>
                </div>

                <Icon name="ArrowRight" size={24} className="text-muted-foreground hidden lg:block" />
                <Icon name="ArrowDown" size={24} className="text-muted-foreground lg:hidden" />

                <div className="flex flex-col gap-3">
                  {['МТС', 'Мегафон', 'Билайн', 'Tele2'].map((provider) => (
                    <div key={provider} className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-lg border border-dashed">
                      <Icon name="Radio" size={20} className="text-primary" />
                      <span className="text-sm font-medium">{provider}</span>
                      <span className="text-xs text-muted-foreground ml-auto">25 Мб/с</span>
                    </div>
                  ))}
                </div>

                <Icon name="ArrowRight" size={24} className="text-muted-foreground hidden lg:block" />
                <Icon name="ArrowDown" size={24} className="text-muted-foreground lg:hidden" />

                <div className="flex flex-col items-center text-center min-w-[140px] relative">
                  <div className="w-24 h-24 rounded-2xl bg-green-500 flex items-center justify-center mb-3 shadow-lg">
                    <Icon name="Zap" size={40} className="text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    100 Мб/с
                  </div>
                  <p className="font-semibold text-sm">Суммированный канал</p>
                </div>

                <Icon name="ArrowRight" size={24} className="text-muted-foreground hidden lg:block" />
                <Icon name="ArrowDown" size={24} className="text-muted-foreground lg:hidden" />

                <div className="flex flex-col items-center text-center min-w-[140px]">
                  <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center mb-3">
                    <Icon name="Wifi" size={40} className="text-primary" />
                  </div>
                  <p className="font-semibold text-sm">Ваш роутер</p>
                </div>

                <Icon name="ArrowRight" size={24} className="text-muted-foreground hidden lg:block" />
                <Icon name="ArrowDown" size={24} className="text-muted-foreground lg:hidden" />

                <div className="flex flex-col items-center text-center min-w-[140px]">
                  <div className="w-24 h-24 rounded-2xl bg-secondary/10 flex items-center justify-center mb-3">
                    <Icon name="Monitor" size={40} className="text-secondary" />
                  </div>
                  <p className="font-semibold text-sm">Ваши устройства</p>
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
                href="tel:+74956637374"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                <Icon name="Phone" size={20} />
                +7 (495) 663-73-74
              </a>
              <a 
                href="https://wa.me/79686373774"
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