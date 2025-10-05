import Icon from '@/components/ui/icon';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Заголовок секции */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-4 py-2 bg-success/10 rounded-full mb-6">
              <Icon name="Banknote" size={20} className="text-success mr-2" />
              <span className="text-sm font-semibold text-success uppercase tracking-wide">Прозрачные цены</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Стоимость подключения</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Профессиональное оборудование с установкой «под ключ»
            </p>
          </div>

          {/* Основной пакет */}
          <Card className="mb-8 border-2 border-primary/20 shadow-xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary to-primary/90 text-white pb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-3xl mb-2">Базовый пакет подключения</CardTitle>
                  <CardDescription className="text-white/80 text-lg">Всё необходимое для стабильного интернета</CardDescription>
                </div>
                <div className="bg-white text-primary rounded-2xl px-6 py-4 text-center">
                  <div className="text-sm font-medium">Стоимость от</div>
                  <div className="text-4xl font-bold">16 800 ₽</div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon name="Package" size={28} className="text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold ml-4">Состав пакета</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start p-4 bg-success/5 rounded-lg border border-success/20">
                      <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Wifi" size={20} className="text-success" />
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold mb-2 text-lg">Wi-Fi роутер нового поколения</h4>
                        <ul className="text-muted-foreground space-y-2 text-sm">
                          <li className="flex items-start">
                            <Icon name="Shield" size={16} className="text-success mr-2 mt-0.5 flex-shrink-0" />
                            <span>Расширенная система безопасности</span>
                          </li>
                          <li className="flex items-start">
                            <Icon name="Puzzle" size={16} className="text-success mr-2 mt-0.5 flex-shrink-0" />
                            <span>Поддержка дополнительных опций (усилители, IPTV, резервные каналы)</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start p-4 bg-secondary/5 rounded-lg border border-secondary/20">
                      <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Antenna" size={20} className="text-secondary" />
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold mb-1 text-lg">Антенна 4G LTE</h4>
                        <p className="text-muted-foreground text-sm">Профессиональное приёмное оборудование</p>
                      </div>
                    </div>

                    <div className="flex items-start p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Wrench" size={20} className="text-primary" />
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold mb-1 text-lg">Установка и настройка</h4>
                        <p className="text-muted-foreground text-sm">Профессиональный монтаж специалистом</p>
                      </div>
                    </div>
                  </div>
                </div>
              
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center">
                      <Icon name="CheckCircle" size={28} className="text-success" />
                    </div>
                    <h3 className="text-2xl font-bold ml-4">Что входит в цену</h3>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <Icon name="CheckCircle2" size={20} className="text-success mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Профессиональная установка и настройка оборудования</span>
                    </div>
                    <div className="flex items-start p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <Icon name="CheckCircle2" size={20} className="text-success mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Подбор оптимального тарифа под ваши задачи</span>
                    </div>
                    <div className="flex items-start p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <Icon name="CheckCircle2" size={20} className="text-success mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Консультация и техподдержка после подключения</span>
                    </div>
                    <div className="flex items-start p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <Icon name="CheckCircle2" size={20} className="text-success mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Гарантия на оборудование и работы</span>
                    </div>
                    <div className="flex items-start p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <Icon name="CheckCircle2" size={20} className="text-success mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Все необходимые комплектующие и крепления</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl p-5">
                    <div className="flex items-start">
                      <Icon name="Info" size={20} className="text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-amber-900 mb-2">Финальная стоимость</h4>
                        <p className="text-sm text-amber-800">Итоговая цена зависит от удалённости объекта, сложности монтажа и выбранного тарифа. Точную стоимость назовёт специалист после консультации.</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            


            </CardContent>
          </Card>

          {/* CTA блок */}
          <Card className="mb-8 border-2 border-success/30 shadow-lg overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={32} className="text-success" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">Получите персональный расчёт</h3>
                  <p className="text-muted-foreground">Свяжитесь с нами — подберём оптимальное решение для вашего объекта и рассчитаем точную стоимость</p>
                </div>
                <div className="flex flex-col gap-3">
                  <a href="tel:+79015000078" className="flex items-center gap-2 px-6 py-3 bg-success hover:bg-success/90 text-white rounded-lg font-semibold transition-colors">
                    <Icon name="Phone" size={20} />
                    <span>+7 (901) 500-00-78</span>
                  </a>
                  <a href="https://wa.me/79015000078" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-lg font-semibold transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Дополнительные ссылки */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Ссылка на тарифы */}
            <a 
              href="/tariffs"
              className="block bg-gradient-to-r from-emerald-50 to-teal-50 hover:from-emerald-100 hover:to-teal-100 border-2 border-emerald-200 hover:border-emerald-400 rounded-xl p-6 transition-all duration-300 group shadow-md hover:shadow-xl"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name="Zap" size={28} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-emerald-900 mb-1">Тарифные планы</h4>
                    <p className="text-sm text-emerald-700">Выберите подходящую скорость</p>
                  </div>
                </div>
                <Icon name="ChevronRight" size={28} className="text-emerald-500 group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0" />
              </div>
            </a>

            {/* Ссылка на оборудование */}
            <a 
              href="/equipment"
              className="block bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 border-2 border-blue-200 hover:border-blue-400 rounded-xl p-6 transition-all duration-300 group shadow-md hover:shadow-xl"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name="Router" size={28} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-blue-900 mb-1">Оборудование</h4>
                    <p className="text-sm text-blue-700">Антенны, роутеры и прочее</p>
                  </div>
                </div>
                <Icon name="ChevronRight" size={28} className="text-blue-500 group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}