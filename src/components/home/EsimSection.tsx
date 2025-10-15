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
        
        <div className="max-w-7xl mx-auto">
          <div className={`mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="mb-12 bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-red-500/10 border-2 border-amber-500/30 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-br from-amber-500 to-orange-600 text-white px-6 py-2 text-sm font-bold rounded-bl-2xl shadow-lg">
                ⭐ Эксклюзив
              </div>
              
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                    <Icon name="Globe" size={28} className="text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                    Любая одна страна на выбор
                  </h3>
                </div>
                <p className="text-lg text-muted-foreground">
                  Специальное предложение: выберите любую страну мира
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                <div className="bg-white border-2 border-amber-200 rounded-xl p-4 hover:border-amber-400 hover:shadow-lg transition-all duration-300">
                  <div className="text-center mb-3">
                    <div className="text-3xl font-bold text-foreground mb-1">1 ГБ</div>
                    <div className="text-sm text-muted-foreground">7 дн.</div>
                  </div>
                  <div className="space-y-1 text-xs mb-3">
                    <div className="flex justify-between"><span className="text-muted-foreground">Цена</span><span className="font-medium">476 ₽</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Интернет</span><span className="font-medium">1 ГБ</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Срок</span><span className="font-medium">7 дней</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Покрытие</span><span className="font-medium text-amber-600">1 страна</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Продление</span><span className="font-medium text-green-600">Да</span></div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-amber-600">476 ₽</div>
                  </div>
                </div>

                <div className="bg-white border-2 border-amber-200 rounded-xl p-4 hover:border-amber-400 hover:shadow-lg transition-all duration-300">
                  <div className="text-center mb-3">
                    <div className="text-3xl font-bold text-foreground mb-1">2 ГБ</div>
                    <div className="text-sm text-muted-foreground">15 дн.</div>
                  </div>
                  <div className="space-y-2 text-xs mb-3">
                    <div className="flex justify-between"><span className="text-muted-foreground">Цена</span><span className="font-medium">706 ₽</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Интернет</span><span className="font-medium">2 ГБ</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Срок действия</span><span className="font-medium">15 дней</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Покрытие</span><span className="font-medium text-amber-600">1 страна</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Продление</span><span className="font-medium text-green-600">Да</span></div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-amber-600">706 ₽</div>
                  </div>
                </div>

                <div className="bg-white border-2 border-amber-200 rounded-xl p-4 hover:border-amber-400 hover:shadow-lg transition-all duration-300">
                  <div className="text-center mb-3">
                    <div className="text-3xl font-bold text-foreground mb-1">3 ГБ</div>
                    <div className="text-sm text-muted-foreground">30 дн.</div>
                  </div>
                  <div className="space-y-2 text-xs mb-3">
                    <div className="flex justify-between"><span className="text-muted-foreground">Цена</span><span className="font-medium">916 ₽</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Интернет</span><span className="font-medium">3 ГБ</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Срок действия</span><span className="font-medium">30 дней</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Покрытие</span><span className="font-medium text-amber-600">1 страна</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Продление</span><span className="font-medium text-green-600">Да</span></div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-amber-600">916 ₽</div>
                  </div>
                </div>

                <div className="bg-white border-2 border-amber-200 rounded-xl p-4 hover:border-amber-400 hover:shadow-lg transition-all duration-300">
                  <div className="text-center mb-3">
                    <div className="text-3xl font-bold text-foreground mb-1">5 ГБ</div>
                    <div className="text-sm text-muted-foreground">30 дн.</div>
                  </div>
                  <div className="space-y-2 text-xs mb-3">
                    <div className="flex justify-between"><span className="text-muted-foreground">Цена</span><span className="font-medium">1 378 ₽</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Интернет</span><span className="font-medium">5 ГБ</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Срок действия</span><span className="font-medium">30 дней</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Покрытие</span><span className="font-medium text-amber-600">1 страна</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Продление</span><span className="font-medium text-green-600">Да</span></div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-amber-600">1 378 ₽</div>
                  </div>
                </div>

                <div className="bg-white border-2 border-amber-200 rounded-xl p-4 hover:border-amber-400 hover:shadow-lg transition-all duration-300">
                  <div className="text-center mb-3">
                    <div className="text-3xl font-bold text-foreground mb-1">10 ГБ</div>
                    <div className="text-sm text-muted-foreground">30 дн.</div>
                  </div>
                  <div className="space-y-2 text-xs mb-3">
                    <div className="flex justify-between"><span className="text-muted-foreground">Цена</span><span className="font-medium">2 470 ₽</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Интернет</span><span className="font-medium">10 ГБ</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Срок действия</span><span className="font-medium">30 дней</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Покрытие</span><span className="font-medium text-amber-600">1 страна</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Продление</span><span className="font-medium text-green-600">Да</span></div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-amber-600">2 470 ₽</div>
                  </div>
                </div>

                <div className="bg-white border-2 border-amber-200 rounded-xl p-4 hover:border-amber-400 hover:shadow-lg transition-all duration-300">
                  <div className="text-center mb-3">
                    <div className="text-3xl font-bold text-foreground mb-1">20 ГБ</div>
                    <div className="text-sm text-muted-foreground">30 дн.</div>
                  </div>
                  <div className="space-y-2 text-xs mb-3">
                    <div className="flex justify-between"><span className="text-muted-foreground">Цена</span><span className="font-medium">4 054 ₽</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Интернет</span><span className="font-medium">20 ГБ</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Срок действия</span><span className="font-medium">30 дней</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Покрытие</span><span className="font-medium text-amber-600">1 страна</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Продление</span><span className="font-medium text-green-600">Да</span></div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-amber-600">4 054 ₽</div>
                  </div>
                </div>

                <div className="bg-white border-2 border-amber-200 rounded-xl p-4 hover:border-amber-400 hover:shadow-lg transition-all duration-300">
                  <div className="text-center mb-3">
                    <div className="text-3xl font-bold text-foreground mb-1">50 ГБ</div>
                    <div className="text-sm text-muted-foreground">30 дн.</div>
                  </div>
                  <div className="space-y-2 text-xs mb-3">
                    <div className="flex justify-between"><span className="text-muted-foreground">Цена</span><span className="font-medium">8 460 ₽</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Интернет</span><span className="font-medium">50 ГБ</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Срок действия</span><span className="font-medium">30 дней</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Покрытие</span><span className="font-medium text-amber-600">1 страна</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Продление</span><span className="font-medium text-green-600">Да</span></div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-amber-600">8 460 ₽</div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">Все регионы</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link 
                to="/esim/global"
                className="group bg-card border-2 border-border hover:border-success/50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-success/10 p-3 rounded-lg mr-4 flex-shrink-0 group-hover:bg-success/20 transition-colors">
                    <Icon name="Earth" size={32} className="text-success" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-1 group-hover:text-success transition-colors">Глобальный</h4>
                    <p className="text-sm text-muted-foreground">от 2 980 ₽ - 1 ГБ / 7 Day</p>
                  </div>
                  <Icon name="ArrowRight" size={20} className="text-success opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
                <div className="text-sm text-primary font-medium underline">
                  106 стран
                </div>
              </Link>

              <Link 
                to="/esim/europe"
                className="group bg-card border-2 border-border hover:border-primary/50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon name="Castle" size={32} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">Европа</h4>
                    <p className="text-sm text-muted-foreground">от 572 ₽ - 1 ГБ / 7 Day</p>
                  </div>
                  <Icon name="ArrowRight" size={20} className="text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
                <div className="text-sm text-primary font-medium underline">
                  70 стран
                </div>
              </Link>

              <Link 
                to="/esim/asia"
                className="group bg-card border-2 border-border hover:border-secondary/50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-secondary/10 p-3 rounded-lg mr-4 flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                    <Icon name="Flower2" size={32} className="text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-1 group-hover:text-secondary transition-colors">Азия</h4>
                    <p className="text-sm text-muted-foreground">от 878 ₽ - 1 ГБ / 7 Day</p>
                  </div>
                  <Icon name="ArrowRight" size={20} className="text-secondary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
                <div className="text-sm text-primary font-medium underline">
                  13 стран
                </div>
              </Link>

              <Link 
                to="/esim/north-america"
                className="group bg-card border-2 border-border hover:border-primary/50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon name="Building2" size={32} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">Северная Америка</h4>
                    <p className="text-sm text-muted-foreground">от 1 088 ₽ - 1 ГБ / 7 Day</p>
                  </div>
                  <Icon name="ArrowRight" size={20} className="text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
                <div className="text-sm text-primary font-medium underline">
                  3 страны
                </div>
              </Link>

              <Link 
                to="/esim/south-america"
                className="group bg-card border-2 border-border hover:border-success/50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-success/10 p-3 rounded-lg mr-4 flex-shrink-0 group-hover:bg-success/20 transition-colors">
                    <Icon name="TreePalm" size={32} className="text-success" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-1 group-hover:text-success transition-colors">Южная Америка</h4>
                    <p className="text-sm text-muted-foreground">от 1 074 ₽ - 1 ГБ / 7 Day</p>
                  </div>
                  <Icon name="ArrowRight" size={20} className="text-success opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
                <div className="text-sm text-primary font-medium underline">
                  11 стран
                </div>
              </Link>

              <Link 
                to="/esim/africa"
                className="group bg-card border-2 border-border hover:border-secondary/50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-secondary/10 p-3 rounded-lg mr-4 flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                    <Icon name="Sun" size={32} className="text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-1 group-hover:text-secondary transition-colors">Африка</h4>
                    <p className="text-sm text-muted-foreground">от 2 394 ₽ - 1 ГБ / 7 Day</p>
                  </div>
                  <Icon name="ArrowRight" size={20} className="text-secondary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
                <div className="text-sm text-primary font-medium underline">
                  12 стран
                </div>
              </Link>

              <Link 
                to="/esim/middle-east"
                className="group bg-card border-2 border-border hover:border-primary/50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon name="Landmark" size={32} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">Ближний Восток</h4>
                    <p className="text-sm text-muted-foreground">от 1 220 ₽ - 1 ГБ / 7 Day</p>
                  </div>
                  <Icon name="ArrowRight" size={20} className="text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
                <div className="text-sm text-primary font-medium underline">
                  8 стран
                </div>
              </Link>

              <Link 
                to="/esim/australia"
                className="group bg-card border-2 border-border hover:border-success/50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-success/10 p-3 rounded-lg mr-4 flex-shrink-0 group-hover:bg-success/20 transition-colors">
                    <Icon name="Waves" size={32} className="text-success" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-1 group-hover:text-success transition-colors">Австралия и Океания</h4>
                    <p className="text-sm text-muted-foreground">от 1 056 ₽ - 1 ГБ / 7 Day</p>
                  </div>
                  <Icon name="ArrowRight" size={20} className="text-success opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
                <div className="text-sm text-primary font-medium underline">
                  2 страны
                </div>
              </Link>

              <Link 
                to="/esim/caribbean"
                className="group bg-card border-2 border-border hover:border-secondary/50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-secondary/10 p-3 rounded-lg mr-4 flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                    <Icon name="Sailboat" size={32} className="text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-1 group-hover:text-secondary transition-colors">Карибский бассейн</h4>
                    <p className="text-sm text-muted-foreground">от 6 286 ₽ - 1 ГБ / 7 Day</p>
                  </div>
                  <Icon name="ArrowRight" size={20} className="text-secondary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
                <div className="text-sm text-primary font-medium underline">
                  17 стран
                </div>
              </Link>
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
              <a 
                href="tel:+79015000078"
                className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-105"
              >
                <Icon name="Smartphone" size={28} className="text-white" />
                <span className="text-xl font-semibold">Подключайтесь прямо сейчас!</span>
              </a>
              <p className="text-sm mt-4 opacity-80">Наслаждайтесь интернетом без границ в 200+ странах мира</p>
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
        </div>
      </div>
    </section>
  );
}