import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
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
    <section ref={sectionRef} className="py-12 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
      <div className="container mx-auto px-4">
        <Link to="/business" className="block max-w-4xl mx-auto mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex w-14 h-14 bg-white/20 rounded-full items-center justify-center flex-shrink-0">
                  <Icon name="Briefcase" size={28} className="text-white" />
                </div>
                <div className="text-left">
                  <p className="text-lg md:text-xl font-bold mb-1">Услуги для бизнеса</p>
                  <p className="text-sm md:text-base text-white/90">Специальные условия для юридических лиц</p>
                </div>
              </div>
              <Icon name="ArrowRight" size={24} className="text-white flex-shrink-0" />
            </div>
          </div>
        </Link>
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Беспроводной интернет в Московской области
          </h1>

          {/* Mobile only: Large Internet card above description */}
          <div className="md:hidden mb-6">
            <a href="/services/internet" className="block">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm rounded-2xl p-6 border-2 border-primary/30 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-3">
                    <Icon name="Wifi" size={32} className="text-primary" />
                  </div>
                  <p className="text-lg font-bold text-foreground mb-1">Подключение к интернет</p>
                  <p className="text-sm text-muted-foreground">До 250 Мбит/с</p>
                </div>
              </div>
            </a>
          </div>

          {/* Services Grid - Mobile: Featured Internet card + 2x2 grid */}
          <div className="mb-8 max-w-4xl mx-auto">

            {/* Desktop & Mobile: Grid with all services */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {/* Desktop only: Internet card (same size as others) */}
              <a href="/services/internet" className="hidden md:block">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-primary/10 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                      <Icon name="Wifi" size={24} className="text-primary" />
                    </div>
                    <p className="text-sm font-semibold text-foreground">Подключение к интернет</p>
                  </div>
                </div>
              </a>

              <a href="/services/surveillance">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-primary/10 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                      <Icon name="Video" size={24} className="text-primary" />
                    </div>
                    <p className="text-sm font-semibold text-foreground">Видеонаблюдение</p>
                  </div>
                </div>
              </a>
              
              <a href="/services/security">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-primary/10 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mb-2">
                      <Icon name="Shield" size={24} className="text-success" />
                    </div>
                    <p className="text-sm font-semibold text-foreground">Системы охраны</p>
                  </div>
                </div>
              </a>
              
              <a href="/services/cellular-booster">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-primary/10 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-2">
                      <Icon name="Signal" size={24} className="text-secondary" />
                    </div>
                    <p className="text-sm font-semibold text-foreground">Усиление сотовой связи</p>
                  </div>
                </div>
              </a>
              
              <a href="/services/wifi">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-primary/10 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                      <Icon name="Wifi" size={24} className="text-primary" />
                    </div>
                    <p className="text-sm font-semibold text-foreground">Усиление Wi-Fi</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="px-4 py-2 bg-success/10 text-success border-success/20">
              <Icon name="Zap" size={16} className="mr-2" />
              До 250 Мбит/с
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 bg-success/10 text-success border-success/20">
              <Icon name="Shield" size={16} className="mr-2" />
              99% надежность
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 bg-success/10 text-success border-success/20">
              <Icon name="Clock" size={16} className="mr-2" />
              24/7 поддержка
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}