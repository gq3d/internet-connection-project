import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function AboutInnovation() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-success/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mb-6">
              <Icon name="Lightbulb" size={32} className="text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Инновационный подход к каждому клиенту
            </h2>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-primary/10">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p className="text-center md:text-left">
                NetConnect специализируется на разработке и внедрении <span className="font-semibold text-foreground">инновационных телекоммуникационных решений</span>, основанных на передовых технологиях беспроводной и спутниковой связи. Мы не просто предоставляем доступ к интернету — мы создаем <span className="font-semibold text-foreground">индивидуальные технологические решения</span> для каждой точки подключения.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="text-center p-4 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl">
                  <Icon name="Target" size={32} className="text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Индивидуальный подход</h3>
                  <p className="text-sm text-muted-foreground">Каждое подключение — уникальный проект</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-xl">
                  <Icon name="Cpu" size={32} className="text-secondary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Новейшие технологии</h3>
                  <p className="text-sm text-muted-foreground">Постоянное внедрение инноваций</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-success/5 to-success/10 rounded-xl">
                  <Icon name="Award" size={32} className="text-success mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Высокое качество</h3>
                  <p className="text-sm text-muted-foreground">Максимальный уровень сервиса</p>
                </div>
              </div>

              <p className="text-center md:text-left">
                Наша команда инженеров проводит детальный <span className="font-semibold text-foreground">анализ технических особенностей</span> каждого объекта: рельефа местности, удаленности от базовых станций, наличия помех и препятствий. На основе этих данных мы подбираем оптимальное оборудование и конфигурацию системы, гарантируя <span className="font-semibold text-foreground">максимальную производительность и надежность</span> интернет-соединения.
              </p>

              <p className="text-center md:text-left">
                Приверженность качеству, непрерывное совершенствование технологий и персонализированный сервис — вот принципы, которые позволяют NetConnect оставаться лидером в области телекоммуникационных услуг и обеспечивать <span className="font-semibold text-foreground">наивысший уровень удовлетворенности</span> каждого клиента.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-success bg-clip-text text-transparent">
                Наши услуги в Московской области
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Полный спектр телекоммуникационных и охранных решений для дома и бизнеса
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link 
                to="/services/internet"
                className="group relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100/50 border-2 border-blue-200 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl group-hover:bg-blue-400/20 transition-colors"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name="Wifi" size={32} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-blue-900">Интернет-подключение</h4>
                  <p className="text-blue-700 text-sm mb-4">Беспроводной интернет до 250 Мбит/с для дома и офиса</p>
                  <div className="flex items-center text-blue-600 font-medium">
                    <span className="text-sm">Подробнее</span>
                    <Icon name="ArrowRight" size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>

              <Link 
                to="/services/satellite"
                className="group relative overflow-hidden bg-gradient-to-br from-purple-50 to-purple-100/50 border-2 border-purple-200 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-400/10 rounded-full blur-3xl group-hover:bg-purple-400/20 transition-colors"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name="Satellite" size={32} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-purple-900">Спутниковый интернет</h4>
                  <p className="text-purple-700 text-sm mb-4">Связь в самых удалённых уголках Подмосковья</p>
                  <div className="flex items-center text-purple-600 font-medium">
                    <span className="text-sm">Подробнее</span>
                    <Icon name="ArrowRight" size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>

              <Link 
                to="/services/surveillance"
                className="group relative overflow-hidden bg-gradient-to-br from-amber-50 to-amber-100/50 border-2 border-amber-200 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-3xl group-hover:bg-amber-400/20 transition-colors"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name="Video" size={32} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-amber-900">Видеонаблюдение</h4>
                  <p className="text-amber-700 text-sm mb-4">Системы безопасности и IP-камеры с облаком</p>
                  <div className="flex items-center text-amber-600 font-medium">
                    <span className="text-sm">Подробнее</span>
                    <Icon name="ArrowRight" size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>

              <Link 
                to="/services/security"
                className="group relative overflow-hidden bg-gradient-to-br from-red-50 to-red-100/50 border-2 border-red-200 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-400/10 rounded-full blur-3xl group-hover:bg-red-400/20 transition-colors"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name="Shield" size={32} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-red-900">Системы охраны</h4>
                  <p className="text-red-700 text-sm mb-4">Умная сигнализация и охранные комплексы</p>
                  <div className="flex items-center text-red-600 font-medium">
                    <span className="text-sm">Подробнее</span>
                    <Icon name="ArrowRight" size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>

              <Link 
                to="/services/cellular-booster"
                className="group relative overflow-hidden bg-gradient-to-br from-green-50 to-green-100/50 border-2 border-green-200 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-400/10 rounded-full blur-3xl group-hover:bg-green-400/20 transition-colors"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name="Signal" size={32} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-green-900">Усиление LTE/4G</h4>
                  <p className="text-green-700 text-sm mb-4">Антенны и усилители мобильной связи</p>
                  <div className="flex items-center text-green-600 font-medium">
                    <span className="text-sm">Подробнее</span>
                    <Icon name="ArrowRight" size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>

              <Link 
                to="/services/wifi"
                className="group relative overflow-hidden bg-gradient-to-br from-cyan-50 to-cyan-100/50 border-2 border-cyan-200 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl group-hover:bg-cyan-400/20 transition-colors"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name="Router" size={32} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-cyan-900">Wi-Fi оборудование</h4>
                  <p className="text-cyan-700 text-sm mb-4">Бесшовный Wi-Fi и профессиональные роутеры</p>
                  <div className="flex items-center text-cyan-600 font-medium">
                    <span className="text-sm">Подробнее</span>
                    <Icon name="ArrowRight" size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a 
              href="/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-opacity font-medium shadow-lg"
            >
              <Icon name="Home" size={20} className="mr-2" />
              Вернуться на главную
            </a>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-success font-semibold">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={18} />
                <a href="tel:+79015000078" className="hover:underline">+7 (901) 500-00-78</a>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={18} />
                <a href="tel:+79015000087" className="hover:underline">+7 (901) 500-00-87</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}