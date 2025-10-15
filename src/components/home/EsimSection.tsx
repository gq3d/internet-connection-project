import { useEffect, useState } from 'react';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function EsimSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('esim');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="esim" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-r from-primary to-secondary p-3 rounded-2xl shadow-lg">
              <Icon name="Globe" size={32} className="text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent leading-tight">
            Туристические eSIM<br />
            Интернет без границ за 5 минут
          </h2>
          <div className="w-32 h-1 mx-auto mb-6 bg-gradient-to-r from-primary via-secondary to-primary rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Компания NetConnect предлагает туристические eSIM, которые можно подключить всего за 5 минут на любой телефон с поддержкой eSIM. <span className="font-semibold text-foreground">Забудьте про физические SIM-карты, роуминг и ограничения операторов</span> — оставайтесь на связи в любой точке мира.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className={`bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20 rounded-xl p-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}>
              <h3 className="text-2xl font-bold mb-8 text-center">Что мы предлагаем:</h3>
              <div className="space-y-6">
                <div className="flex items-start bg-card rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4 flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-lg">Региональные eSIM</h4>
                    <p className="text-muted-foreground">для конкретных стран или частей мира (например, только Европа или только Азия).</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-card rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="bg-secondary/10 p-3 rounded-lg mr-4 flex-shrink-0">
                    <Icon name="Globe" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-lg">Международные eSIM</h4>
                    <p className="text-muted-foreground">работают в нескольких странах одновременно, идеально для путешествий по нескольким странам или по всей планете.</p>
                  </div>
                </div>
                
                <Link 
                  to="/esim/global"
                  className="flex items-start bg-card rounded-lg p-4 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-success/30 group"
                >
                  <div className="bg-success/10 p-3 rounded-lg mr-4 flex-shrink-0 group-hover:bg-success/20 transition-colors">
                    <Icon name="Earth" size={24} className="text-success" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold mb-2 text-lg group-hover:text-success transition-colors">Глобальные eSIM</h4>
                      <Icon name="ArrowRight" size={20} className="text-success opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-muted-foreground">единая карта для всех стран мира, без смены SIM.</p>
                  </div>
                </Link>
              </div>
            </div>
            
            <div className={`bg-card border-2 border-secondary/30 rounded-xl p-8 shadow-lg transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}>
              <div className="flex items-center justify-center mb-6">
                <div className="bg-secondary/10 p-2 rounded-lg">
                  <Icon name="Sparkles" size={24} className="text-secondary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-center">Преимущества наших туристических eSIM:</h3>
              <div className="space-y-4">
                <div className="flex items-start p-3 rounded-lg hover:bg-accent/50 transition-colors">
                  <div className="bg-success/10 p-2 rounded-lg mr-3 flex-shrink-0">
                    <Icon name="Clock" size={20} className="text-success" />
                  </div>
                  <div>
                    <strong className="text-foreground">Мгновенная активация</strong>
                    <p className="text-muted-foreground text-sm mt-1">подключение за 5 минут</p>
                  </div>
                </div>
                
                <div className="flex items-start p-3 rounded-lg hover:bg-accent/50 transition-colors">
                  <div className="bg-success/10 p-2 rounded-lg mr-3 flex-shrink-0">
                    <Icon name="Smartphone" size={20} className="text-success" />
                  </div>
                  <div>
                    <strong className="text-foreground">Поддержка всех современных устройств</strong>
                    <p className="text-muted-foreground text-sm mt-1">смартфоны, планшеты, модемы, роутеры</p>
                  </div>
                </div>
                
                <div className="flex items-start p-3 rounded-lg hover:bg-accent/50 transition-colors">
                  <div className="bg-success/10 p-2 rounded-lg mr-3 flex-shrink-0">
                    <Icon name="DollarSign" size={20} className="text-success" />
                  </div>
                  <div>
                    <strong className="text-foreground">Гибкие тарифы</strong>
                    <p className="text-muted-foreground text-sm mt-1">оплачиваете только нужный трафик</p>
                  </div>
                </div>
                
                <div className="flex items-start p-3 rounded-lg hover:bg-accent/50 transition-colors">
                  <div className="bg-success/10 p-2 rounded-lg mr-3 flex-shrink-0">
                    <Icon name="Wifi" size={20} className="text-success" />
                  </div>
                  <div>
                    <strong className="text-foreground">Надёжная связь</strong>
                    <p className="text-muted-foreground text-sm mt-1">высокая скорость интернета</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`relative overflow-hidden bg-gradient-to-br from-primary via-secondary to-success text-white rounded-2xl p-10 text-center shadow-2xl transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm animate-float">
                  <Icon name="Plane" size={32} className="text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-4">С туристическими eSIM от NetConnect<br />вы всегда на связи</h3>
              <p className="text-lg mb-6 opacity-90">в командировке, путешествии или отпуске по всему миру</p>
              <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full">
                <Icon name="Smartphone" size={28} className="text-white" />
                <span className="text-xl font-semibold">Подключайтесь прямо сейчас!</span>
              </div>
              <p className="text-sm mt-4 opacity-80">Наслаждайтесь интернетом без границ в 200+ странах мира</p>
            </div>
          </div>

          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-success bg-clip-text text-transparent">
                Наши услуги в Московской области
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Полный спектр телекоммуникационных решений для дома и бизнеса
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
        </div>
      </div>
    </section>
  );
}