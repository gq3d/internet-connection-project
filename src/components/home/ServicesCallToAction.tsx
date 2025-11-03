import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { useEffect, useRef, useState } from 'react';

export default function ServicesCallToAction() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-10 bg-gradient-to-br from-primary/5 via-secondary/5 to-success/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className={`bg-gradient-to-r from-primary to-secondary rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl text-white relative overflow-hidden transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Icon name="Wifi" size={32} className="text-white" />
                </div>
              </div>
              
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight px-2">
                Полный спектр телекоммуникационных услуг
              </h2>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
                Интернет, видеонаблюдение, Wi-Fi оборудование, охранные системы и многое другое
              </p>
              
              <div className="flex flex-col gap-6 items-center">
                {/* Баннер для бизнеса - ПЕРВЫМ */}
                <Link 
                  to="/business" 
                  className={`w-full max-w-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 text-white rounded-2xl p-6 md:p-8 shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-500 cursor-pointer ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 md:gap-6">
                      <div className="flex w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-2xl items-center justify-center flex-shrink-0 border-2 border-white/30">
                        <Icon name="Briefcase" size={36} className="text-white" />
                      </div>
                      <div className="text-left">
                        <p className="text-xl md:text-3xl font-bold mb-2 flex items-center gap-2">
                          💼 Для бизнеса
                        </p>
                        <p className="text-sm md:text-lg text-white/95 font-medium leading-relaxed">
                          Полная цифровизация: CRM, сайты, IT-консалтинг + связь и безопасность
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl border-2 border-white/30">
                      <span className="text-white font-bold">Подробнее</span>
                      <Icon name="ArrowRight" size={24} className="text-white" />
                    </div>
                    <Icon name="ArrowRight" size={28} className="text-white flex-shrink-0 md:hidden" />
                  </div>
                </Link>
                
                <Link 
                  to="/services"
                  className={`inline-flex items-center justify-center px-10 py-4 bg-white text-primary rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all hover:-translate-y-1 duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}
                >
                  Все наши услуги
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Link>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-2xl px-2">
                  <Link 
                    to="/tariffs"
                    className={`group flex flex-col items-center justify-center p-4 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-xl font-medium text-sm hover:bg-white hover:text-primary transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: isVisible ? '600ms' : '0ms' }}
                  >
                    <div className="w-10 h-10 mb-2 bg-white/20 group-hover:bg-primary/10 rounded-full flex items-center justify-center transition-colors">
                      <Icon name="DollarSign" size={20} className="group-hover:text-primary transition-colors" />
                    </div>
                    <span className="font-semibold">Тарифы</span>
                  </Link>
                  
                  <Link 
                    to="/pricing"
                    className={`group flex flex-col items-center justify-center p-4 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-xl font-medium text-sm hover:bg-white hover:text-primary transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: isVisible ? '700ms' : '0ms' }}
                  >
                    <div className="w-10 h-10 mb-2 bg-white/20 group-hover:bg-primary/10 rounded-full flex items-center justify-center transition-colors">
                      <Icon name="Calculator" size={20} className="group-hover:text-primary transition-colors" />
                    </div>
                    <span className="font-semibold">Стоимость</span>
                  </Link>
                  
                  <Link 
                    to="/coverage"
                    className={`group flex flex-col items-center justify-center p-4 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-xl font-medium text-sm hover:bg-white hover:text-primary transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: isVisible ? '800ms' : '0ms' }}
                  >
                    <div className="w-10 h-10 mb-2 bg-white/20 group-hover:bg-primary/10 rounded-full flex items-center justify-center transition-colors">
                      <Icon name="MapPin" size={20} className="group-hover:text-primary transition-colors" />
                    </div>
                    <span className="font-semibold">Покрытие</span>
                  </Link>
                  
                  <Link 
                    to="/esim"
                    className={`group flex flex-col items-center justify-center p-4 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-xl font-medium text-sm hover:bg-white hover:text-primary transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: isVisible ? '900ms' : '0ms' }}
                  >
                    <div className="w-10 h-10 mb-2 bg-white/20 group-hover:bg-primary/10 rounded-full flex items-center justify-center transition-colors">
                      <Icon name="Smartphone" size={20} className="group-hover:text-primary transition-colors" />
                    </div>
                    <span className="font-semibold">eSIM</span>
                  </Link>
                </div>
                
                <a 
                  href="#contacts"
                  className={`inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-white/25 to-white/15 backdrop-blur-md text-white border-2 border-white/60 rounded-2xl font-bold text-lg hover:bg-white hover:text-primary transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-1 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: isVisible ? '1000ms' : '0ms' }}
                >
                  <Icon name="Phone" size={20} className="mr-2" />
                  Связаться с нами
                </a>
              </div>
            </div>
          </div>
          
          {/* Анимированная карточка с описанием */}
          <div className={`mt-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: isVisible ? '1100ms' : '0ms' }}>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-success rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-500 animate-pulse"></div>
              <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-xl text-center">
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-4xl mx-auto">
                  Подключение к сети интернет для частных лиц и бизнеса через беспроводные каналы связи, включая спутниковый интернет. Усиление сотовой связи и Wi-Fi сигнала. Системы видеонаблюдения и охраны объектов.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}