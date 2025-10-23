import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const features = [
  {
    icon: 'Smartphone',
    title: 'Мобильное приложение',
    description: 'Просмотр камер в реальном времени с телефона',
    link: null
  },
  {
    icon: 'Cloud',
    title: 'Облачное хранение',
    description: 'Автоматическое резервное копирование записей',
    link: null
  },
  {
    icon: 'Brain',
    title: 'Умная аналитика',
    description: 'Детекция лиц, номеров, подсчет посетителей',
    link: '/services/surveillance/smart-analytics'
  },
  {
    icon: 'Bell',
    title: 'Push-уведомления',
    description: 'Мгновенные оповещения о событиях',
    link: null
  }
];

const SurveillanceFeatures = () => {
  return (
    <section className="py-16 bg-accent/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Возможности системы</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const CardWrapper = feature.link ? Link : 'div';
            const cardProps = feature.link ? { to: feature.link } : {};
            
            return (
              <CardWrapper key={index} {...cardProps} className={feature.link ? 'block' : ''}>
                <Card className={`text-center transition-all duration-300 ${feature.link ? 'hover:shadow-xl hover:scale-105 cursor-pointer' : 'hover:shadow-lg'}`}>
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                      <Icon name={feature.icon} size={24} className="text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                    {feature.link && (
                      <div className="mt-4 text-primary text-sm font-medium flex items-center justify-center gap-1">
                        Подробнее <Icon name="ArrowRight" size={16} />
                      </div>
                    )}
                  </CardContent>
                </Card>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SurveillanceFeatures;