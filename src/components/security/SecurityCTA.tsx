import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const SecurityCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
              <Icon name="Shield" size={32} className="text-blue-600" />
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Получите консультацию специалиста по безопасности
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Наши эксперты помогут подобрать оптимальную систему защиты для вашего объекта и рассчитают стоимость
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border-2 border-blue-100 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Icon name="CheckCircle2" size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Бесплатный выезд инженера</h3>
                    <p className="text-muted-foreground">Оценим объект и составим план размещения оборудования</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Icon name="Calculator" size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Точный расчёт стоимости</h3>
                    <p className="text-muted-foreground">Подберём оптимальное решение под ваш бюджет</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Icon name="Clock" size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Быстрый монтаж</h3>
                    <p className="text-muted-foreground">Установка системы за 1-2 дня с гарантией качества</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Icon name="HeadphonesIcon" size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Поддержка 24/7</h3>
                    <p className="text-muted-foreground">Круглосуточная техническая поддержка и обслуживание</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t-2 border-blue-100 pt-10">
              <h3 className="text-2xl font-bold text-center mb-6 text-blue-900">Свяжитесь с нами удобным способом</h3>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="tel:+79015000078"
                  className="group flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 w-full sm:w-auto justify-center"
                >
                  <Icon name="Phone" size={24} className="group-hover:rotate-12 transition-transform" />
                  <span>+7 (901) 500-00-78</span>
                </a>

                <a 
                  href="tel:+79015000087"
                  className="group flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 w-full sm:w-auto justify-center"
                >
                  <Icon name="Phone" size={24} className="group-hover:rotate-12 transition-transform" />
                  <span>+7 (901) 500-00-87</span>
                </a>

                <a 
                  href="https://wa.me/79015000078"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 w-full sm:w-auto justify-center"
                >
                  <Icon name="MessageCircle" size={24} className="group-hover:scale-110 transition-transform" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <p className="text-center text-muted-foreground mt-6 text-sm">
                Звоните или пишите в любое время. Мы работаем без выходных с 8:00 до 22:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityCTA;