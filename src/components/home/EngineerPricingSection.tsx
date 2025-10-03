import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function EngineerPricingSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-primary/10 p-2 rounded-lg">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Прайс-лист на услуги инженера
            </h2>
            <div className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-primary via-secondary to-primary rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Перечень инженерных работ и их стоимость. Качественное подключение и настройка оборудования.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Стандартные работы */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-primary/20">
              <CardHeader className="bg-gradient-to-r from-primary to-primary/90 text-white">
                <CardTitle className="text-xl flex items-center gap-3">
                  <span className="bg-white text-blue-600 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  Стандартные работы
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-0">
                  <div className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Выезд инженера на объект, диагностика сети, замер сигнала</span>
                      <Badge variant="secondary" className="bg-primary/10 text-primary font-semibold">2000 ₽</Badge>
                    </div>
                  </div>
                  <div className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Установка кронштейна для антенны MIMO на фасаде здания</span>
                      <Badge variant="secondary" className="bg-primary/10 text-primary font-semibold">2000 ₽</Badge>
                    </div>
                  </div>
                  <div className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Подключение и настройка антенны MIMO</span>
                      <Badge variant="secondary" className="bg-primary/10 text-primary font-semibold">2500 ₽</Badge>
                    </div>
                  </div>
                  <div className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Подключение и настройка wi-fi роутера</span>
                      <Badge variant="secondary" className="bg-primary/10 text-primary font-semibold">1500 ₽</Badge>
                    </div>
                  </div>
                  <div className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Прокладка кабеля</span>
                      <Badge variant="secondary" className="bg-primary/10 text-primary font-semibold">150 ₽/м</Badge>
                    </div>
                  </div>
                  <div className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Сверление отверстия для вывода кабеля в оконной раме</span>
                      <Badge variant="secondary" className="bg-primary/10 text-primary font-semibold">500 ₽</Badge>
                    </div>
                  </div>
                  <div className="p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Сверление отверстия для вывода кабеля в стене</span>
                      <Badge variant="secondary" className="bg-primary/10 text-primary font-semibold">1000 ₽</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Дополнительные работы */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-secondary/20">
              <CardHeader className="bg-gradient-to-r from-secondary to-secondary/90 text-white">
                <CardTitle className="text-xl flex items-center gap-3">
                  <span className="bg-white text-indigo-600 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  Дополнительные работы
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-0">
                  <div className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Высотные работы</span>
                      <Badge variant="secondary" className="bg-secondary/10 text-secondary font-semibold">от 1500 ₽</Badge>
                    </div>
                  </div>
                  <div className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Настройка "бесшовного" соединения (несколько роутеров в одну сеть)</span>
                      <Badge variant="secondary" className="bg-secondary/10 text-secondary font-semibold">от 10000 ₽</Badge>
                    </div>
                  </div>
                  <div className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Обжим сетевого кабеля</span>
                      <Badge variant="secondary" className="bg-secondary/10 text-secondary font-semibold">100 ₽/шт.</Badge>
                    </div>
                  </div>
                  <div className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Настройка оборудования клиента</span>
                      <Badge variant="secondary" className="bg-secondary/10 text-secondary font-semibold">5000 ₽</Badge>
                    </div>
                  </div>
                  <div className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Установка спутниковой антенны</span>
                      <Badge variant="secondary" className="bg-secondary/10 text-secondary font-semibold">8000 ₽</Badge>
                    </div>
                  </div>
                  <div className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Установка антенного усилителя мобильной связи</span>
                      <Badge variant="secondary" className="bg-secondary/10 text-secondary font-semibold">6000 ₽</Badge>
                    </div>
                  </div>
                  <div className="p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Прокладка высокочастотного кабеля</span>
                      <Badge variant="secondary" className="bg-secondary/10 text-secondary font-semibold">500 ₽/м</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Дополнительная информация */}
          <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl p-6 shadow-md">
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <h3 className="text-lg font-semibold text-amber-800">Важная информация</h3>
            </div>
            <ul className="text-amber-700 space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-amber-500 mr-2 font-bold">✓</span>
                <span>Все цены указаны с учетом работы инженера</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2 font-bold">✓</span>
                <span>Стоимость материалов оплачивается отдельно</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2 font-bold">✓</span>
                <span>Точную стоимость работ уточняйте при заказе</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2 font-bold">✓</span>
                <span>Гарантия на выполненные работы — 12 месяцев</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}