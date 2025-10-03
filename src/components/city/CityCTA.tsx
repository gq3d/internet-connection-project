import Icon from '@/components/ui/icon';

interface CityCTAProps {
  cityName: string;
}

export default function CityCTA({ cityName }: CityCTAProps) {
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
        <div className="bg-card border rounded-lg p-4 flex items-center space-x-3">
          <Icon name="Phone" size={24} className="text-success" />
          <div className="text-left">
            <div className="font-semibold text-lg">+7 (901) 500-00-78</div>
            <div className="text-sm text-muted-foreground">Основная линия</div>
          </div>
        </div>
        <div className="bg-card border rounded-lg p-4 flex items-center space-x-3">
          <Icon name="Phone" size={24} className="text-success" />
          <div className="text-left">
            <div className="font-semibold text-lg">+7 (901) 500-00-87</div>
            <div className="text-sm text-muted-foreground">Дополнительная линия</div>
          </div>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mt-4">Консультации и подключение • 24/7</p>
    </div>
  );
}
