import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const SecuritySystems = () => {
  const systems = [
    {
      icon: 'Video',
      title: 'Видеонаблюдение',
      description: 'HD камеры с записью, удаленным доступом и облачным хранением',
      features: ['Камеры Full HD/4K', 'Ночное видение', 'Детекция движения', 'Мобильное приложение', 'Облачное хранение'],
      link: '/services/surveillance'
    },
    {
      icon: 'Shield',
      title: 'Охранная сигнализация',
      description: 'Комплексная система безопасности с датчиками и пультовой охраной',
      features: ['Датчики движения', 'Датчики открытия', 'Сирена и световая индикация', 'SMS уведомления', 'Пультовая охрана'],
      link: '/services/alarm-security'
    },
    {
      icon: 'Lock',
      title: 'Контроль доступа',
      description: 'Электронные замки, домофоны и системы идентификации',
      features: ['Электронные замки', 'Карты доступа/брелоки', 'Биометрия', 'Журнал событий', 'Удаленное управление'],
      link: '/services/access-control'
    },
    {
      icon: 'Flame',
      title: 'Пожарная безопасность',
      description: 'Датчики дыма, температуры и автоматическое пожаротушение',
      features: ['Дымовые датчики', 'Тепловые датчики', 'Ручные извещатели', 'Звуковое оповещение', 'Интеграция с МЧС'],
      link: '/services/fire-safety'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Системы безопасности</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {systems.map((system, index) => (
            <Link key={index} to={system.link}>
              <Card className="hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer h-full">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                      <Icon name={system.icon} size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">{system.title}</h3>
                      <p className="text-muted-foreground mb-4">{system.description}</p>
                      <ul className="space-y-2">
                        {system.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm">
                            <Icon name="Check" size={16} className="text-success mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySystems;