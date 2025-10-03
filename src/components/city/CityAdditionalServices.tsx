import Icon from '@/components/ui/icon';

interface CityAdditionalServicesProps {
  cityName: string;
  isVisible: boolean;
}

export default function CityAdditionalServices({ cityName, isVisible }: CityAdditionalServicesProps) {
  return (
    <div id="additional-services" className="mb-16">
      <h3 className="text-2xl font-bold mb-8 text-center">
        Дополнительные услуги в {cityName}
      </h3>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
        <a 
          href="/services/satellite" 
          className={`bg-card border rounded-lg p-6 hover:border-primary transition-all duration-500 hover:shadow-lg group ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0ms' }}
        >
          <div className="bg-primary/10 p-3 rounded-lg mb-4 w-fit group-hover:bg-primary/20 transition-colors">
            <Icon name="Satellite" size={28} className="text-primary" />
          </div>
          <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
            Спутниковый интернет
          </h4>
          <p className="text-muted-foreground text-sm">
            Подключение интернета через спутник в любой точке {cityName}. Работаем там, где нет других способов связи.
          </p>
        </a>

        <a 
          href="/services/wifi" 
          className={`bg-card border rounded-lg p-6 hover:border-primary transition-all duration-500 hover:shadow-lg group ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          <div className="bg-primary/10 p-3 rounded-lg mb-4 w-fit group-hover:bg-primary/20 transition-colors">
            <Icon name="Wifi" size={28} className="text-primary" />
          </div>
          <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
            Усиление Wi-Fi
          </h4>
          <p className="text-muted-foreground text-sm">
            Профессиональное усиление Wi-Fi сигнала. Стабильное покрытие по всему дому или участку.
          </p>
        </a>

        <a 
          href="/services/cellular-booster" 
          className={`bg-card border rounded-lg p-6 hover:border-primary transition-all duration-500 hover:shadow-lg group ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="bg-primary/10 p-3 rounded-lg mb-4 w-fit group-hover:bg-primary/20 transition-colors">
            <Icon name="Signal" size={28} className="text-primary" />
          </div>
          <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
            Усиление сотовой связи
          </h4>
          <p className="text-muted-foreground text-sm">
            Усиление сигнала мобильной связи. Уверенный прием для всех операторов в {cityName}.
          </p>
        </a>

        <a 
          href="/services/surveillance" 
          className={`bg-card border rounded-lg p-6 hover:border-primary transition-all duration-500 hover:shadow-lg group ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <div className="bg-primary/10 p-3 rounded-lg mb-4 w-fit group-hover:bg-primary/20 transition-colors">
            <Icon name="Video" size={28} className="text-primary" />
          </div>
          <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
            Охрана и видеонаблюдение
          </h4>
          <p className="text-muted-foreground text-sm">
            Установка систем видеонаблюдения и охранных систем. Защита вашей недвижимости в {cityName}.
          </p>
        </a>

        <a 
          href="/services/security" 
          className={`bg-card border rounded-lg p-6 hover:border-primary transition-all duration-500 hover:shadow-lg group ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <div className="bg-primary/10 p-3 rounded-lg mb-4 w-fit group-hover:bg-primary/20 transition-colors">
            <Icon name="ShieldCheck" size={28} className="text-primary" />
          </div>
          <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
            Системы безопасности
          </h4>
          <p className="text-muted-foreground text-sm">
            Комплексные решения безопасности для вашего дома. Сигнализация, контроль доступа, пожарная безопасность.
          </p>
        </a>
      </div>
    </div>
  );
}
