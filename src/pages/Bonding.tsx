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

      {/* PRICING SECTION - MOVED HERE */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Icon name="Package" size={20} />
                КОМПЛЕКТАЦИЯ И СТОИМОСТЬ
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Готовое решение с Белым IP
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Полностью настроенная система bonding на профессиональном оборудовании
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 border-2 border-primary/20 rounded-2xl p-8 md:p-12 mb-8">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">Стандартный комплект</h3>
                  <p className="text-muted-foreground">Полностью настроенное решение под ваш запрос</p>
                </div>
                <div className="text-left md:text-right">
                  <div className="text-4xl md:text-5xl font-bold text-primary">65 000 ₽</div>
                  <p className="text-sm text-muted-foreground mt-1">miniPC DELL x64 или ARM</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card/50 backdrop-blur rounded-xl p-6 border">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon name="Zap" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Производительность</h4>
                      <p className="text-sm text-muted-foreground">До 8 SIM-карт и до 300 Мбит/с</p>
                      <p className="text-xs text-muted-foreground mt-1">(в некоторых случаях возможно больше)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card/50 backdrop-blur rounded-xl p-6 border">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-green-500/10 rounded-lg">
                      <Icon name="ShieldCheck" size={24} className="text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Надёжность</h4>
                      <p className="text-sm text-muted-foreground">Резервирование каналов</p>
                      <p className="text-xs text-muted-foreground mt-1">Автоматическое переключение при сбоях</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card/50 backdrop-blur rounded-xl p-6 border">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-secondary/10 rounded-lg">
                      <Icon name="MapPin" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Универсальность</h4>
                      <p className="text-sm text-muted-foreground">Для офиса, дома, дачи</p>
                      <p className="text-xs text-muted-foreground mt-1">Поездки и выездные мероприятия (стримы)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card/50 backdrop-blur rounded-xl p-6 border">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-amber-500/10 rounded-lg">
                      <Icon name="PiggyBank" size={24} className="text-amber-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Экономия</h4>
                      <p className="text-sm text-muted-foreground">В разы дешевле традиционных провайдеров</p>
                      <p className="text-xs text-muted-foreground mt-1">Особенно актуально для офисов</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t">
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Icon name="Settings" size={20} className="text-primary" />
                  Дополнительные возможности
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Проброс портов и удалённый доступ</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Удалённая поддержка + SLA (по договорённости)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border rounded-2xl p-8 mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Icon name="Info" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Технология MPTCP</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Используем реально работающую технологию MPTCP для соединения нескольких TCP потоков 
                    с последующей передачей данных по нескольким путям и сборкой их в единой точке. 
                    <strong className="text-foreground"> Только профессиональное оборудование — никаких самоделок и самосборок!</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-center mb-8">Варианты оборудования</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border rounded-xl p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-cyan-500/10 rounded-lg">
                      <Icon name="Smartphone" size={24} className="text-cyan-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Базовая комплектация</h4>
                      <p className="text-sm text-muted-foreground mt-1">Модемы Huawei E3372h-153</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Проверенное решение для стандартных задач в зоне уверенного приёма
                  </p>
                </div>

                <div className="bg-card border rounded-xl p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-purple-500/10 rounded-lg">
                      <Icon name="Cpu" size={24} className="text-purple-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Продвинутая комплектация</h4>
                      <p className="text-sm text-muted-foreground mt-1">Модемы 6-20 категории (MIMO 4x4, 4x2, 2x2)</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    В алюминиевых корпусах с адаптером M.2 key B к USB 3.0. Антенны MICRODRIVE и Cisco LTE
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-2 border-purple-500/20 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg flex-shrink-0">
                    <Icon name="Star" size={24} className="text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-3">Комплект «ВСЁ В ОДНОМ» на базе ARM</h4>
                    <p className="text-muted-foreground mb-4">
                      Кастомизированная прошивка на OpenWrt/ImmortalWrt, с возможностью установки роутеров GL.iNet Slate (GL-AR750S-Ext) 
                      с 5 слотами M.2 для модемов и двумя диапазонами Wi-Fi (2.4 ГГц и 5 ГГц)
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <Icon name="CheckCircle2" size={16} className="text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Всё включено: роутер + модемы + настройка в одном корпусе</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle2" size={16} className="text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Компактное решение 20×12×6 см готовое к работе</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle2" size={16} className="text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Идеально для выездов, стримов и мобильного использования</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-500/20 rounded-lg flex-shrink-0">
                  <Icon name="Gift" size={32} className="text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-green-900">Что входит в стоимость</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-2">
                      <Icon name="CheckCircle2" size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Оборудование</p>
                        <p className="text-sm text-muted-foreground">miniPC DELL или ARM-роутер с модемами</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="CheckCircle2" size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Настройка bonding</p>
                        <p className="text-sm text-muted-foreground">Полная конфигурация MPTCP под ваши задачи</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="CheckCircle2" size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Белый IP-адрес</p>
                        <p className="text-sm text-muted-foreground">Для удалённого доступа и сервисов</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="CheckCircle2" size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Тестирование</p>
                        <p className="text-sm text-muted-foreground">Проверка работоспособности перед отправкой</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="CheckCircle2" size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Доставка</p>
                        <p className="text-sm text-muted-foreground">По Москве и Подмосковью</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="CheckCircle2" size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Гарантия</p>
                        <p className="text-sm text-muted-foreground">На оборудование и настройки</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                to="/contacts"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold text-lg"
              >
                <Icon name="MessageCircle" size={24} />
                Заказать консультацию
              </Link>
              <p className="mt-4 text-sm text-muted-foreground">
                Обсудим ваши задачи и подберём оптимальную конфигурацию
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Как это работает</h2>
            
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl p-6 mb-12 max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-amber-500/20 rounded-lg flex-shrink-0">
                  <Icon name="AlertCircle" size={24} className="text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-amber-900">Сложные условия приёма?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Представьте: ваш объект находится в зоне со слабым радиосигналом, где качество связи критически низкое. 
                    Каждый оператор даёт всего 5-20 Мбит/с из-за помех, удалённости от вышек или плотной застройки. 
                    Bonding решает эту проблему — мы объединяем 3-4 слабых канала в один мощный, 
                    <strong className="text-foreground"> увеличивая скорость в 2-3 раза и более</strong>, даже в самых неблагоприятных условиях.
                  </p>
                </div>
              </div>
            </div>
            
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
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Полностью настроенная система bonding на профессиональном оборудовании
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 border-2 border-primary/20 rounded-2xl p-8 md:p-12 mb-8">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">Стандартный комплект</h3>
                  <p className="text-muted-foreground">Полностью настроенное решение под ваш запрос</p>
                </div>
                <div className="text-left md:text-right">
                  <div className="text-4xl md:text-5xl font-bold text-primary">65 000 ₽</div>
                  <p className="text-sm text-muted-foreground mt-1">miniPC DELL x64 или ARM</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card/50 backdrop-blur rounded-xl p-6 border">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon name="Zap" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Производительность</h4>
                      <p className="text-sm text-muted-foreground">До 8 SIM-карт и до 300 Мбит/с</p>
                      <p className="text-xs text-muted-foreground mt-1">(в некоторых случаях возможно больше)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card/50 backdrop-blur rounded-xl p-6 border">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-green-500/10 rounded-lg">
                      <Icon name="ShieldCheck" size={24} className="text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Надёжность</h4>
                      <p className="text-sm text-muted-foreground">Резервирование каналов</p>
                      <p className="text-xs text-muted-foreground mt-1">Автоматическое переключение при сбоях</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card/50 backdrop-blur rounded-xl p-6 border">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-secondary/10 rounded-lg">
                      <Icon name="MapPin" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Универсальность</h4>
                      <p className="text-sm text-muted-foreground">Для офиса, дома, дачи</p>
                      <p className="text-xs text-muted-foreground mt-1">Поездки и выездные мероприятия (стримы)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card/50 backdrop-blur rounded-xl p-6 border">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-amber-500/10 rounded-lg">
                      <Icon name="PiggyBank" size={24} className="text-amber-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Экономия</h4>
                      <p className="text-sm text-muted-foreground">В разы дешевле традиционных провайдеров</p>
                      <p className="text-xs text-muted-foreground mt-1">Особенно актуально для офисов</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t">
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Icon name="Settings" size={20} className="text-primary" />
                  Дополнительные возможности
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Проброс портов и удалённый доступ</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Удалённая поддержка + SLA (по договорённости)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border rounded-2xl p-8 mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Icon name="Info" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Технология MPTCP</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Используем реально работающую технологию MPTCP для соединения нескольких TCP потоков 
                    с последующей передачей данных по нескольким путям и сборкой их в единой точке. 
                    <strong className="text-foreground"> Только профессиональное оборудование — никаких самоделок и самосборок!</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-center mb-8">Варианты оборудования</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border rounded-xl p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-cyan-500/10 rounded-lg">
                      <Icon name="Smartphone" size={24} className="text-cyan-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Базовая комплектация</h4>
                      <p className="text-sm text-muted-foreground mt-1">Модемы Huawei E3372h-153</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Проверенное решение для стандартных задач в зоне уверенного приёма
                  </p>
                </div>

                <div className="bg-card border rounded-xl p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-purple-500/10 rounded-lg">
                      <Icon name="Cpu" size={24} className="text-purple-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Продвинутая комплектация</h4>
                      <p className="text-sm text-muted-foreground mt-1">Модемы 6-20 категории (MIMO 4x4, 4x2, 2x2)</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    В алюминиевых корпусах с адаптером M.2 key B к USB 3.0. Антенны MICRODRIVE и Cisco LTE
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-2 border-purple-500/20 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg flex-shrink-0">
                    <Icon name="Star" size={24} className="text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-3">Комплект «ВСЁ В ОДНОМ» на базе ARM</h4>
                    <p className="text-muted-foreground mb-4">
                      Кастомизированная прошивка с агрегацией: 1 модем Cat20 + 2 модема Cat6/12
                    </p>
                    <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20">
                      <p className="text-sm font-semibold mb-2 text-purple-700 dark:text-purple-300">
                        ⭐ ОПТИМАЛЬНОЕ РЕШЕНИЕ ДЛЯ 3 ПРОВАЙДЕРОВ LTE
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Далеко не все провайдеры дают на агрегацию несколько несущих. 
                        Этот параметр также различается от станции к станции
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border rounded-xl p-6">
                <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
                  <Icon name="Radio" size={24} className="text-primary" />
                  Загородные решения с антеннами MikroTik
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-muted/30 rounded-lg p-4 border">
                    <h5 className="font-bold mb-2 flex items-center gap-2">
                      <Icon name="Target" size={18} className="text-primary" />
                      Серия LHG
                    </h5>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="Dot" size={16} className="mt-1 flex-shrink-0" />
                        <span>Высокий коэффициент усиления (21 dBi)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Dot" size={16} className="mt-1 flex-shrink-0" />
                        <span>Узкий угол направленности — 25°</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Dot" size={16} className="mt-1 flex-shrink-0" />
                        <span>Дальность до 10 км от вышки</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="AlertCircle" size={16} className="text-amber-500 mt-1 flex-shrink-0" />
                        <span className="text-amber-600 dark:text-amber-400 font-medium">Требуется прямая видимость</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-4 border">
                    <h5 className="font-bold mb-2 flex items-center gap-2">
                      <Icon name="Compass" size={18} className="text-secondary" />
                      Серия SXT
                    </h5>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="Dot" size={16} className="mt-1 flex-shrink-0" />
                        <span>Коэффициент усиления 9 dBi</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Dot" size={16} className="mt-1 flex-shrink-0" />
                        <span>Широкий угол направленности — 60°</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Dot" size={16} className="mt-1 flex-shrink-0" />
                        <span>Дальность до 3-4 км от вышки</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="CheckCircle2" size={16} className="text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-green-600 dark:text-green-400 font-medium">Работает с препятствиями (деревья)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-2 border-blue-500/20 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg flex-shrink-0">
                    <Icon name="Server" size={24} className="text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-3">Серверы суммирования</h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold mb-2 flex items-center gap-2">
                          <Icon name="Zap" size={18} className="text-blue-500" />
                          Собственные COLOCATION серверы на SELECTEL
                        </h5>
                        <p className="text-sm text-muted-foreground mb-2">
                          По запросу (при наличии технической возможности и скорости на вашей локации)
                        </p>
                        <div className="bg-blue-500/10 rounded-lg p-3 border border-blue-500/20">
                          <p className="text-sm font-semibold text-blue-700 dark:text-blue-300">HPE DL 360 Gen 10+</p>
                          <p className="text-xs text-muted-foreground">Скорость до 1 Гбит/с • Система круглосуточного мониторинга</p>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold mb-2 flex items-center gap-2">
                          <Icon name="Cloud" size={18} className="text-cyan-500" />
                          Суммирующие VPS
                        </h5>
                        <p className="text-sm text-muted-foreground">
                          На площадках SELECTEL и REG.RU
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-secondary/10 rounded-lg flex-shrink-0">
                    <Icon name="Package" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Промышленные корпуса KETER</h4>
                    <p className="text-sm text-muted-foreground">
                      По запросу производим компоновку в промышленных влаго-пыле защищённых кофрах KETER 
                      для размещения оборудования в сложных условиях
                    </p>
                  </div>
                </div>
              </div>
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