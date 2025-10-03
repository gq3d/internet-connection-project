import Icon from '@/components/ui/icon';

interface CityServicesSectionProps {
  cityName: string;
}

export default function CityServicesSection({ cityName }: CityServicesSectionProps) {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">
        Услуги беспроводного интернета в {cityName}
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="bg-card border rounded-lg p-6">
          <div className="flex items-center mb-4">
            <div className="bg-primary/10 p-3 rounded-lg mr-4">
              <Icon name="Home" size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Интернет на дачу</h3>
          </div>
          <p className="text-muted-foreground">
            Подключаем стабильный беспроводной интернет на любую дачу в {cityName}. 
            Высокая скорость, надежное соединение даже в удаленных районах.
          </p>
        </div>

        <div className="bg-card border rounded-lg p-6">
          <div className="flex items-center mb-4">
            <div className="bg-primary/10 p-3 rounded-lg mr-4">
              <Icon name="Building" size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Коттеджные поселки</h3>
          </div>
          <p className="text-muted-foreground">
            Комплексное подключение коттеджных поселков и таунхаусов. 
            Индивидуальный подход к каждому объекту в {cityName}.
          </p>
        </div>

        <div className="bg-card border rounded-lg p-6">
          <div className="flex items-center mb-4">
            <div className="bg-primary/10 p-3 rounded-lg mr-4">
              <Icon name="TreePine" size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold">СНТ и деревни</h3>
          </div>
          <p className="text-muted-foreground">
            Подключение интернета в садовых товариществах и деревнях. 
            Работаем с любыми удаленными населенными пунктами.
          </p>
        </div>
      </div>

      <div className="bg-accent/30 border rounded-lg p-8 mb-16">
        <h3 className="text-2xl font-bold mb-6 text-center">
          Что включает наш сервис в {cityName}
        </h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-start">
              <Icon name="CheckCircle" size={20} className="text-success mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Выезд инженера на объект</h4>
                <p className="text-muted-foreground">Бесплатная консультация и оценка возможности подключения в {cityName}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Icon name="CheckCircle" size={20} className="text-success mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Профессиональная установка</h4>
                <p className="text-muted-foreground">Монтаж и настройка всего необходимого оборудования</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Icon name="CheckCircle" size={20} className="text-success mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Качественное оборудование</h4>
                <p className="text-muted-foreground">Используем только проверенные антенны и роутеры</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <Icon name="CheckCircle" size={20} className="text-success mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Техническая поддержка 24/7</h4>
                <p className="text-muted-foreground">Круглосуточная поддержка клиентов и решение проблем</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Icon name="CheckCircle" size={20} className="text-success mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Гарантия на услуги</h4>
                <p className="text-muted-foreground">Гарантируем стабильную работу интернета</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Icon name="CheckCircle" size={20} className="text-success mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Работаем везде</h4>
                <p className="text-muted-foreground">Подключаем в любой деревне, СНТ или коттеджном поселке</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
