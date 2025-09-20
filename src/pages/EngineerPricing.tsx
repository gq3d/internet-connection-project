import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';

export default function EngineerPricing() {
  const standardServices = [
    {
      service: 'Выезд инженера на объект, диагностика сети, замер сигнала',
      price: '2000 ₽'
    },
    {
      service: 'Установка кронштейна для антенны MIMO на фасаде здания',
      price: '2000 ₽'
    },
    {
      service: 'Подключение и настройка антенны MIMO',
      price: '2500 ₽'
    },
    {
      service: 'Подключение и настройка wi-fi роутера',
      price: '1500 ₽'
    },
    {
      service: 'Прокладка кабеля',
      price: '150 ₽/м'
    },
    {
      service: 'Сверление отверстия для вывода кабеля в оконной раме',
      price: '500 ₽'
    },
    {
      service: 'Сверление отверстия для вывода кабеля в стене',
      price: '1000 ₽'
    }
  ];

  const additionalServices = [
    {
      service: 'Высотные работы',
      price: 'от 1500 ₽'
    },
    {
      service: 'Настройка "бесшовного" соединения (несколько роутеров в одну сеть)',
      price: 'от 10000 ₽'
    },
    {
      service: 'Обжим сетевого кабеля',
      price: '100 ₽/шт.'
    },
    {
      service: 'Настройка оборудования клиента',
      price: '5000 ₽'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Прайс-лист на услуги инженера
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный перечень инженерных работ и их стоимость. Качественное подключение и настройка оборудования.
            </p>
          </div>

          {/* Стандартные работы */}
          <Card className="mb-8 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <CardTitle className="text-2xl flex items-center gap-3">
                <span className="bg-white text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                Стандартные работы
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-hidden">
                {standardServices.map((item, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-b-0">
                    <div className="flex items-center justify-between p-6 hover:bg-gray-50 transition-colors">
                      <div className="text-gray-900 flex-1">{item.service}</div>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-lg px-4 py-2 font-semibold">
                        {item.price}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Дополнительные работы */}
          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
              <CardTitle className="text-2xl flex items-center gap-3">
                <span className="bg-white text-indigo-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                Дополнительные работы
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-hidden">
                {additionalServices.map((item, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-b-0">
                    <div className="flex items-center justify-between p-6 hover:bg-gray-50 transition-colors">
                      <div className="text-gray-900 flex-1">{item.service}</div>
                      <Badge variant="secondary" className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2 font-semibold">
                        {item.price}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Дополнительная информация */}
          <div className="mt-12 bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-amber-800 mb-3">Важная информация</h3>
            <ul className="text-amber-700 space-y-2">
              <li>• Все цены указаны с учетом работы инженера</li>
              <li>• Стоимость материалов оплачивается отдельно</li>
              <li>• Точную стоимость работ уточняйте при заказе</li>
              <li>• Гарантия на выполненные работы — 12 месяцев</li>
            </ul>
          </div>

          {/* Кнопка связи */}
          <div className="text-center mt-12">
            <a 
              href="tel:+74951234567" 
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Заказать услуги инженера: +7 (495) 123-45-67
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}