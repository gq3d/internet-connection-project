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
    <section ref={sectionRef} className="py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-success/5">
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
                Подключение к сети интернет для частных лиц и бизнеса через беспроводные каналы связи, включая спутниковый интернет. Усиление сотовой связи и Wi-Fi сигнала. Системы видеонаблюдения и охраны объектов.
              </p>
              
              <div className="flex flex-col gap-6 items-center">
                <Link 
                  to="/services"
                  className={`inline-flex items-center justify-center px-10 py-4 bg-white text-primary rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all hover:-translate-y-1 duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}
                >
                  Все наши услуги
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Link>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-2xl px-2">
                  <Link 
                    to="/pricing"
                    className={`group flex flex-col items-center justify-center p-4 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-xl font-medium text-sm hover:bg-white hover:text-primary transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}
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
                    style={{ transitionDelay: isVisible ? '500ms' : '0ms' }}
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
                    style={{ transitionDelay: isVisible ? '600ms' : '0ms' }}
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
                    style={{ transitionDelay: isVisible ? '700ms' : '0ms' }}
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
                  style={{ transitionDelay: isVisible ? '800ms' : '0ms' }}
                >
                  <Icon name="Phone" size={20} className="mr-2" />
                  Связаться с нами
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}