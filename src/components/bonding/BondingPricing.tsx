import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function BondingPricing() {
  return (
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
  );
}
