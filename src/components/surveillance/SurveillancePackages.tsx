import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const packages = [
  {
    name: 'Домашнее видеонаблюдение',
    cameras: '4 камеры',
    price: '45 000',
    description: 'Базовый комплект для частного дома или дачи',
    features: ['4 IP камеры Full HD', 'Регистратор 4 канала', 'HDD 1TB', 'Кабели и крепления', 'Мобильное приложение', 'Установка и настройка']
  },
  {
    name: 'Офисная безопасность',
    cameras: '8 камер',
    price: '85 000',
    description: 'Профессиональная система для офисов и магазинов',
    features: ['8 камер 4K', 'NVR регистратор', 'HDD 4TB', 'Детекция лиц', 'Облачное хранение', 'Удаленный мониторинг', 'Техподдержка']
  },
  {
    name: 'Корпоративная система',
    cameras: '16+ камер',
    price: '180 000',
    description: 'Комплексное решение для крупных объектов',
    features: ['16+ камер с аналитикой', 'Серверное оборудование', 'Резервирование данных', 'Интеграция с СКУД', 'Центр мониторинга', 'SLA поддержка']
  }
];

const SurveillancePackages = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Готовые комплекты видеонаблюдения</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <Card key={index} className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 ${
              index === 1 ? 'ring-2 ring-primary scale-105' : ''
            }`}>
              {index === 1 && (
                <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                  Хит продаж
                </div>
              )}
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-primary mb-2">
                    от {pkg.price} ₽<span className="text-lg font-normal text-muted-foreground">*</span>
                  </div>
                  <div className="text-lg font-semibold text-secondary">{pkg.cameras}</div>
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
      </div>
    </section>
  );
};

export default SurveillancePackages;
