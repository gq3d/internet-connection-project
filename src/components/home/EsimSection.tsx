import { useEffect, useState } from 'react';
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