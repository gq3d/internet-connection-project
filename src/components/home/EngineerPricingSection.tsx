import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function EngineerPricingSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Прайс-лист на услуги инженера
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный перечень инженерных работ и их стоимость. Качественное подключение и настройка оборудования.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Стандартные работы */}
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
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
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800 font-semibold">2000 ₽</Badge>
                    </div>
                  </div>
                  <div className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Установка кронштейна для антенны MIMO на фасаде здания</span>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800 font-semibold">2000 ₽</Badge>
                    </div>
                  </div>
                  <div className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Подключение и настройка антенны MIMO</span>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800 font-semibold">2500 ₽</Badge>
                    </div>
                  </div>
                  <div className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Подключение и настройка wi-fi роутера</span>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800 font-semibold">1500 ₽</Badge>
                    </div>
                  </div>
                  <div className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Прокладка кабеля</span>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800 font-semibold">150 ₽/м</Badge>
                    </div>
                  </div>
                  <div className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Сверление отверстия для вывода кабеля в оконной раме</span>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800 font-semibold">500 ₽</Badge>
                    </div>
                  </div>
                  <div className="p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Сверление отверстия для вывода кабеля в стене</span>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800 font-semibold">1000 ₽</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Дополнительные работы */}
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
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
                      <Badge variant="secondary" className="bg-indigo-100 text-indigo-800 font-semibold">от 1500 ₽</Badge>
                    </div>
                  </div>
                  <div className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Настройка "бесшовного" соединения (несколько роутеров в одну сеть)</span>
                      <Badge variant="secondary" className="bg-indigo-100 text-indigo-800 font-semibold">от 10000 ₽</Badge>
                    </div>
                  </div>
                  <div className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Обжим сетевого кабеля</span>
                      <Badge variant="secondary" className="bg-indigo-100 text-indigo-800 font-semibold">100 ₽/шт.</Badge>
                    </div>
                  </div>
                  <div className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Настройка оборудования клиента</span>
                      <Badge variant="secondary" className="bg-indigo-100 text-indigo-800 font-semibold">5000 ₽</Badge>
                    </div>
                  </div>
                  <div className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Установка спутниковой антенны</span>
                      <Badge variant="secondary" className="bg-indigo-100 text-indigo-800 font-semibold">8000 ₽</Badge>
                    </div>
                  </div>
                  <div className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Установка антенного усилителя мобильной связи</span>
                      <Badge variant="secondary" className="bg-indigo-100 text-indigo-800 font-semibold">6000 ₽</Badge>
                    </div>
                  </div>
                  <div className="p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Прокладка высокочастотного кабеля</span>
                      <Badge variant="secondary" className="bg-indigo-100 text-indigo-800 font-semibold">500 ₽/м</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Дополнительная информация */}
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-amber-800 mb-3">Важная информация</h3>
            <ul className="text-amber-700 space-y-2">
              <li>• Все цены указаны с учетом работы инженера</li>
              <li>• Стоимость материалов оплачивается отдельно</li>
              <li>• Точную стоимость работ уточняйте при заказе</li>
              <li>• Гарантия на выполненные работы — 12 месяцев</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
