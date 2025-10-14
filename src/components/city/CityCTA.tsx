import Icon from '@/components/ui/icon';
import { trackPhoneClick, trackCTAClick } from '@/utils/metrika';

interface CityCTAProps {
  cityName: string;
}

export default function CityCTA({ cityName }: CityCTAProps) {
  const handlePhoneClick = (phoneNumber: string) => {
    trackPhoneClick(`cta_block_city_${phoneNumber}`, cityName);
    trackCTAClick('phone_contact', cityName);
  };

  return (
    <div className="bg-primary/10 border-2 border-primary/20 rounded-lg p-8 text-center">
      <h3 className="text-2xl font-bold mb-4">
        Готовы подключить интернет в {cityName}?
      </h3>
      <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
        Свяжитесь с нами для получения персональной консультации. 
        Наши специалисты помогут подобрать оптимальное решение для вашего объекта в {cityName}.
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <a
          href="tel:+79015000078"
          onClick={() => handlePhoneClick('78')}
          className="bg-card border rounded-lg p-4 flex items-center space-x-3 hover:bg-accent transition-colors"
        >
          <Icon name="Phone" size={24} className="text-success" />
          <div className="text-left">
            <div className="font-semibold text-lg">+7 (901) 500-00-78</div>
            <div className="text-sm text-muted-foreground">Основная линия</div>
          </div>
        </a>
        <a
          href="tel:+79015000087"
          onClick={() => handlePhoneClick('87')}
          className="bg-card border rounded-lg p-4 flex items-center space-x-3 hover:bg-accent transition-colors"
        >
          <Icon name="Phone" size={24} className="text-success" />
          <div className="text-left">
            <div className="font-semibold text-lg">+7 (901) 500-00-87</div>
            <div className="text-sm text-muted-foreground">Дополнительная линия</div>
          </div>
        </a>
      </div>
      <p className="text-sm text-muted-foreground mt-4">Консультации и подключение • 24/7</p>
    </div>
  );
}