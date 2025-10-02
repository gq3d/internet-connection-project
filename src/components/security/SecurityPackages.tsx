import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const SecurityPackages = () => {
  const packages = [
    {
      name: 'Базовая безопасность',
      price: '25 000',
      description: 'Минимальный комплект для защиты квартиры или небольшого дома',
      features: ['4 HD камеры', '2 датчика движения', 'Базовая сигнализация', 'Мобильное приложение', 'Установка и настройка']
    },
    {
      name: 'Комплексная защита',
      price: '65 000',
      description: 'Полная система безопасности для дома или офиса',
      features: ['8 камер 4K', 'Охранная сигнализация', 'Контроль доступа', 'Пожарные датчики', 'Облачное хранение', 'Техподдержка 24/7']
    },
    {
      name: 'Премиум система',
      price: '150 000',
      description: 'Профессиональная система для крупных объектов',
      features: ['16+ камер с аналитикой', 'Периметровая защита', 'Биометрический доступ', 'Интеграция с умным домом', 'Пультовая охрана', 'VIP поддержка']
    }
  ];

  return (
    <section className="py-16 bg-accent/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Пакеты безопасности</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <Card key={index} className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 ${
              index === 1 ? 'ring-2 ring-primary scale-105' : ''
            }`}>
              {index === 1 && (
                <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                  Популярный
                </div>
              )}
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-primary mb-2">
                    от {pkg.price} ₽<span className="text-lg font-normal text-muted-foreground">*</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm mb-6">{pkg.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <Icon name="Check" size={16} className="text-success mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-8">* Цена указана за базовый комплект без учета монтажа</p>
      </div>
    </section>
  );
};

export default SecurityPackages;
