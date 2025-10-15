import { useEffect, useState } from 'react';
import Icon from '@/components/ui/icon';
import ExclusiveOffer from '@/components/esim/ExclusiveOffer';
import RegionCards from '@/components/esim/RegionCards';
import ActivationSteps from '@/components/esim/ActivationSteps';
import BenefitsSection from '@/components/esim/BenefitsSection';

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
            <ExclusiveOffer />
            <RegionCards />
          </div>

          <ActivationSteps />
          <BenefitsSection />
        </div>
      </div>
    </section>
  );
}
