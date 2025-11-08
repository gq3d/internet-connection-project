import Icon from '@/components/ui/icon';

export default function BondingHowItWorks() {
  return (
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
  );
}
