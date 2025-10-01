import Icon from '@/components/ui/icon';

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Стоимость подключения</h2>
            <p className="text-xl text-muted-foreground">
              Профессиональные решения для надежного интернета
            </p>
          </div>
          
          <div className="bg-card border rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <Icon name="Package" size={32} className="text-primary mr-4" />
                  <h3 className="text-2xl font-bold">В пакет оборудования входит:</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Icon name="Wifi" size={20} className="text-success mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Wi-Fi роутер нового поколения с:</h4>
                      <ul className="text-muted-foreground space-y-2 ml-4">
                        <li>• системой расширенной безопасности пользователя (защита от внешних угроз и несанкционированного доступа)</li>
                        <li>• возможностью подключения дополнительных опций (например, усилителей сигнала, IPTV, резервных каналов связи)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center mb-6">
                  <Icon name="Banknote" size={32} className="text-success mr-4" />
                  <h3 className="text-2xl font-bold">От 16 800 рублей</h3>
                </div>
                
                <div className="bg-success/10 border border-success/20 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-success mb-3">Стоимость минимального пакета подключения начинается от 16 800 рублей.</h4>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold mb-3">Мы гарантируем:</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Icon name="CheckCircle" size={16} className="text-success mr-3" />
                      <span>профессиональную установку и настройку</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="CheckCircle" size={16} className="text-success mr-3" />
                      <span>подбор оптимального тарифа под ваши нужды</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="CheckCircle" size={16} className="text-success mr-3" />
                      <span>консультационную и техническую поддержку после подключения</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t pt-6 mt-8">
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                <div className="flex items-start">
                  <Icon name="Phone" size={24} className="text-primary mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Свяжитесь с нами, и мы подготовим для вас персональное решение по организации интернета на вашем объекте.</h4>
                    <p className="text-muted-foreground">Наши специалисты проведут бесплатную консультацию и предложат оптимальный вариант подключения.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Link to Equipment Page */}
            <div className="mt-8">
              <a 
                href="/equipment"
                className="block bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 border-2 border-blue-200 hover:border-blue-400 rounded-xl p-4 sm:p-8 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center space-x-3 sm:space-x-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <Icon name="Router" size={24} className="text-white sm:w-8 sm:h-8" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-base sm:text-xl md:text-2xl font-bold text-blue-900 mb-1 sm:mb-2 leading-tight">Примеры устанавливаемого оборудования</h4>
                      <p className="text-sm sm:text-base text-blue-700 hidden sm:block">Посмотрите антенны, роутеры и другое оборудование, которое мы используем</p>
                      <p className="text-xs text-blue-700 sm:hidden">Антенны, роутеры и другое</p>
                    </div>
                  </div>
                  <Icon name="ChevronRight" size={24} className="text-blue-500 group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0 sm:w-8 sm:h-8" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
