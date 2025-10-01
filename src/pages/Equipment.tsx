import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Equipment() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-secondary/5">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Icon name="Wifi" className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">NetConnect</span>
            </Link>
            <Link to="/">
              <Button variant="ghost">Главная</Button>
            </Link>
          </div>
        </div>
      </nav>
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <div className="inline-block bg-gradient-to-r from-primary to-success text-white px-8 py-3 rounded-full mb-6">
                <span className="font-bold text-lg">🛠️ Профессиональное оборудование</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-success to-secondary bg-clip-text text-transparent">
                Примеры устанавливаемого оборудования
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
                Мы используем только проверенное оборудование от ведущих мировых производителей для стабильного и быстрого интернета
              </p>
            </div>

            {/* MIMO Antennas */}
            <div className="mb-20">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-xl p-8">
                <div className="flex items-center justify-center">
                  <Icon name="Antenna" size={40} className="mr-4" />
                  <h2 className="text-3xl font-bold">Антенны MIMO для LTE/4G</h2>
                </div>
                <p className="text-center mt-3 text-blue-100 text-lg">Направленные и всенаправленные антенны для максимального качества сигнала</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8 bg-card border border-t-0 rounded-b-xl p-10">
                <div className="group hover:scale-105 transition-transform duration-300">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 h-full border-2 border-blue-200 hover:border-blue-400 transition-colors">
                    <div className="aspect-square bg-white rounded-lg mb-4 overflow-hidden shadow-lg">
                      <img 
                        src="/img/1df3afaa-b915-4f88-af94-9f4b80b2ad20.jpg" 
                        alt="MIMO антенна двухполяризационная"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="font-bold text-xl mb-2 text-blue-900">MIMO Панельная антенна</h3>
                    <p className="text-sm text-blue-700 mb-4">Двухполяризационная антенна с усилением 2x18 dBi</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-blue-600">
                        <Icon name="Check" size={16} className="mr-2 text-green-600" />
                        <span>Частоты 700-2700 МГц</span>
                      </div>
                      <div className="flex items-center text-blue-600">
                        <Icon name="Check" size={16} className="mr-2 text-green-600" />
                        <span>Дальность до 15 км</span>
                      </div>
                      <div className="flex items-center text-blue-600">
                        <Icon name="Check" size={16} className="mr-2 text-green-600" />
                        <span>Защита IP65</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group hover:scale-105 transition-transform duration-300">
                  <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6 h-full border-2 border-indigo-200 hover:border-indigo-400 transition-colors">
                    <div className="aspect-square bg-white rounded-lg mb-4 overflow-hidden shadow-lg">
                      <img 
                        src="/img/20a5c8b2-9fd0-47f2-a678-f813b6b23c30.jpg" 
                        alt="Направленная MIMO антенна"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="font-bold text-xl mb-2 text-indigo-900">MIMO Направленная</h3>
                    <p className="text-sm text-indigo-700 mb-4">Узконаправленная антенна высокого усиления</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-indigo-600">
                        <Icon name="Check" size={16} className="mr-2 text-green-600" />
                        <span>Усиление 2x21 dBi</span>
                      </div>
                      <div className="flex items-center text-indigo-600">
                        <Icon name="Check" size={16} className="mr-2 text-green-600" />
                        <span>Дальность до 25 км</span>
                      </div>
                      <div className="flex items-center text-indigo-600">
                        <Icon name="Check" size={16} className="mr-2 text-green-600" />
                        <span>Узкий луч 45°</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group hover:scale-105 transition-transform duration-300">
                  <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-6 h-full border-2 border-cyan-200 hover:border-cyan-400 transition-colors">
                    <div className="aspect-square bg-white rounded-lg mb-4 overflow-hidden shadow-lg">
                      <img 
                        src="/img/fc1f839a-e663-4701-89c0-35b836c59c99.jpg" 
                        alt="Ubiquiti MIMO антенна"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="font-bold text-xl mb-2 text-cyan-900">Ubiquiti LTE Antenna</h3>
                    <p className="text-sm text-cyan-700 mb-4">Всепогодная антенна для уличной установки</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-cyan-600">
                        <Icon name="Check" size={16} className="mr-2 text-green-600" />
                        <span>Частоты 698-3800 МГц</span>
                      </div>
                      <div className="flex items-center text-cyan-600">
                        <Icon name="Check" size={16} className="mr-2 text-green-600" />
                        <span>Защита IP67</span>
                      </div>
                      <div className="flex items-center text-cyan-600">
                        <Icon name="Check" size={16} className="mr-2 text-green-600" />
                        <span>Температура -40°C до +70°C</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* LTE Routers */}
            <div className="mb-20">
              <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-t-xl p-8">
                <div className="flex items-center justify-center">
                  <Icon name="Router" size={40} className="mr-4" />
                  <h2 className="text-3xl font-bold">LTE/4G роутеры и модемы</h2>
                </div>
                <p className="text-center mt-3 text-green-100 text-lg">Профессиональное оборудование для преобразования сигнала в Wi-Fi</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8 bg-card border border-t-0 rounded-b-xl p-10">
                <div className="group hover:scale-105 transition-transform duration-300">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 h-full border-2 border-green-200 hover:border-green-400 transition-colors">
                    <div className="aspect-square bg-white rounded-lg mb-4 overflow-hidden shadow-lg">
                      <img 
                        src="/img/3322b870-367a-4774-992a-82f2d3840a3c.jpg" 
                        alt="ZyXel LTE роутер"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-3 py-1 rounded-full inline-block mb-3">
                      <span className="text-xs font-bold">ZyXel</span>
                    </div>
                    <h3 className="font-bold text-xl mb-2 text-green-900">ZyXel LTE3301-PLUS</h3>
                    <p className="text-sm text-green-700 mb-4">Профессиональный LTE роутер с поддержкой Cat.4</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-green-600">
                        <Icon name="Zap" size={16} className="mr-2 text-amber-600" />
                        <span>До 150 Мбит/с</span>
                      </div>
                      <div className="flex items-center text-green-600">
                        <Icon name="Wifi" size={16} className="mr-2 text-blue-600" />
                        <span>Wi-Fi 802.11ac</span>
                      </div>
                      <div className="flex items-center text-green-600">
                        <Icon name="Users" size={16} className="mr-2 text-purple-600" />
                        <span>До 32 устройств</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group hover:scale-105 transition-transform duration-300">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 h-full border-2 border-blue-200 hover:border-blue-400 transition-colors">
                    <div className="aspect-square bg-white rounded-lg mb-4 overflow-hidden shadow-lg">
                      <img 
                        src="/img/8324dfb5-8278-4070-893f-c6753227a566.jpg" 
                        alt="TP-Link LTE роутер"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1 rounded-full inline-block mb-3">
                      <span className="text-xs font-bold">TP-Link</span>
                    </div>
                    <h3 className="font-bold text-xl mb-2 text-blue-900">TP-Link Archer MR600</h3>
                    <p className="text-sm text-blue-700 mb-4">Двухдиапазонный 4G+ роутер Cat.6</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-blue-600">
                        <Icon name="Zap" size={16} className="mr-2 text-amber-600" />
                        <span>До 300 Мбит/с</span>
                      </div>
                      <div className="flex items-center text-blue-600">
                        <Icon name="Wifi" size={16} className="mr-2 text-blue-600" />
                        <span>Dual-band AC1200</span>
                      </div>
                      <div className="flex items-center text-blue-600">
                        <Icon name="Network" size={16} className="mr-2 text-green-600" />
                        <span>4 порта Gigabit Ethernet</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group hover:scale-105 transition-transform duration-300">
                  <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 h-full border-2 border-red-200 hover:border-red-400 transition-colors">
                    <div className="aspect-square bg-white rounded-lg mb-4 overflow-hidden shadow-lg">
                      <img 
                        src="/img/98e7d6a2-f1ce-40d6-944b-ca439925b607.jpg" 
                        alt="Huawei LTE роутер"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-3 py-1 rounded-full inline-block mb-3">
                      <span className="text-xs font-bold">Huawei</span>
                    </div>
                    <h3 className="font-bold text-xl mb-2 text-red-900">Huawei B535-232</h3>
                    <p className="text-sm text-red-700 mb-4">Флагманский LTE CPE роутер Cat.7</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-red-600">
                        <Icon name="Zap" size={16} className="mr-2 text-amber-600" />
                        <span>До 300 Мбит/с</span>
                      </div>
                      <div className="flex items-center text-red-600">
                        <Icon name="Wifi" size={16} className="mr-2 text-blue-600" />
                        <span>Wi-Fi AC1200</span>
                      </div>
                      <div className="flex items-center text-red-600">
                        <Icon name="Users" size={16} className="mr-2 text-purple-600" />
                        <span>До 64 устройств</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Professional Equipment */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-10 mb-16">
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full mb-6">
                  <Icon name="Award" size={40} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold text-amber-900 mb-4">Почему важно профессиональное оборудование?</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Icon name="CheckCircle" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-3 text-amber-900">Стабильная скорость</h3>
                    <p className="text-amber-800 text-lg">Профессиональные роутеры обеспечивают заявленную скорость даже при большой нагрузке на сеть</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <Icon name="Shield" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-3 text-amber-900">Надежность</h3>
                    <p className="text-amber-800 text-lg">Оборудование работает без перезагрузок 24/7, выдерживает перепады температур и влажности</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <Icon name="Signal" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-3 text-amber-900">Максимальное покрытие</h3>
                    <p className="text-amber-800 text-lg">MIMO антенны ловят сигнал даже в сложных условиях на расстоянии до 25 км от вышки</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                    <Icon name="Wrench" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-3 text-amber-900">Долгий срок службы</h3>
                    <p className="text-amber-800 text-lg">Гарантия производителя до 3 лет, реальный срок работы 5-7 лет без замены</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-primary via-success to-secondary text-white rounded-2xl p-12 text-center shadow-2xl">
              <Icon name="Phone" size={56} className="mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-6">Подберём оптимальное оборудование для вашего объекта</h2>
              <p className="text-2xl mb-8 opacity-90">Наши специалисты проведут замеры сигнала и предложат лучшее решение</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a 
                  href="tel:+79015000078"
                  className="inline-flex items-center px-10 py-5 bg-white text-primary rounded-full font-bold text-xl hover:bg-gray-100 transition-colors shadow-lg"
                >
                  <Icon name="Phone" size={28} className="mr-3" />
                  +7 (901) 500-00-78
                </a>
                <a 
                  href="https://wa.me/79015000078"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-10 py-5 bg-green-500 text-white rounded-full font-bold text-xl hover:bg-green-600 transition-colors shadow-lg"
                >
                  <Icon name="MessageCircle" size={28} className="mr-3" />
                  Написать в WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted/50 border-t mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Wifi" className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold">NetConnect</span>
              </div>
              <p className="text-muted-foreground">
                Надежный беспроводной интернет в Московской области
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>+7 (901) 500-00-78</p>
                <p>Московская область</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Навигация</h3>
              <div className="space-y-2">
                <Link to="/" className="block text-muted-foreground hover:text-primary">Главная</Link>
                <Link to="/equipment" className="block text-muted-foreground hover:text-primary">Оборудование</Link>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>© 2024 NetConnect. Все права защищены.</p>
          </div>
        </div>
      </footer>
      
      <WhatsAppButton />
    </div>
  );
}