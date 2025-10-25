import { useSEO } from '@/hooks/useSEO';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const BusinessServices = () => {
  useSEO({
    title: 'Услуги для бизнеса и юридических лиц | NetConnect',
    description: 'Комплексные IT-решения для бизнеса: корпоративный интернет, Wi-Fi для офисов, видеонаблюдение, системы безопасности, контроль доступа. Индивидуальные условия для юридических лиц.',
    keywords: 'интернет для бизнеса, корпоративный интернет, wifi для офиса, видеонаблюдение для бизнеса, системы безопасности офис',
    canonical: 'https://mosoblconnect.ru/business',
  });

  const businessServices = [
    {
      icon: 'Network',
      title: 'Корпоративный интернет',
      description: 'Высокоскоростной интернет до 1 Гбит/с с выделенной линией и гарантированной скоростью для вашего офиса',
      features: ['SLA 99.9%', 'Выделенная линия', 'Статический IP', 'Техподдержка 24/7'],
      link: '/services/internet'
    },
    {
      icon: 'Wifi',
      title: 'Корпоративный Wi-Fi',
      description: 'Проектирование и развертывание беспроводных сетей любой сложности для офисов, складов, торговых центров',
      features: ['Бесшовный роуминг', 'Гостевая сеть', 'Управление доступом', 'Масштабируемость'],
      link: '/services/wifi'
    },
    {
      icon: 'Camera',
      title: 'Видеонаблюдение',
      description: 'Профессиональные системы видеонаблюдения с аналитикой, распознаванием лиц и удаленным доступом',
      features: ['IP-камеры 4K', 'Облачное хранение', 'AI-аналитика', 'Интеграция с СКУД'],
      link: '/services/surveillance'
    },
    {
      icon: 'Shield',
      title: 'Охранные системы',
      description: 'Комплексные решения безопасности: охранная сигнализация, контроль доступа, пожарная безопасность',
      features: ['СКУД', 'Охранная сигнализация', 'Пожарная сигнализация', 'Интеграция систем'],
      link: '/services/security'
    },
    {
      icon: 'Satellite',
      title: 'Спутниковый интернет',
      description: 'Надежное подключение для удаленных объектов, складов, производств вне зоны покрытия проводных сетей',
      features: ['Покрытие 100%', 'До 150 Мбит/с', 'Быстрое развертывание', 'Независимость от инфраструктуры'],
      link: '/services/satellite'
    },
    {
      icon: 'Radio',
      title: 'Усиление сотовой связи',
      description: 'Репитеры и DAS-системы для улучшения качества мобильной связи в офисах и на производствах',
      features: ['Все операторы', '4G/5G', 'Большие площади', 'Сертифицированное оборудование'],
      link: '/services/cellular-booster'
    }
  ];

  const advantages = [
    {
      icon: 'FileCheck',
      title: 'Работа по договору',
      description: 'Официальное сотрудничество с юридическими лицами, полный пакет документов'
    },
    {
      icon: 'Calculator',
      title: 'Индивидуальные условия',
      description: 'Гибкие тарифы и специальные предложения для корпоративных клиентов'
    },
    {
      icon: 'Headphones',
      title: 'Персональный менеджер',
      description: 'Выделенный специалист для решения всех вопросов вашей компании'
    },
    {
      icon: 'Clock',
      title: 'Техподдержка 24/7',
      description: 'Круглосуточная поддержка и оперативное реагирование на заявки'
    },
    {
      icon: 'TrendingUp',
      title: 'SLA гарантии',
      description: 'Договорные обязательства по уровню доступности услуг до 99.9%'
    },
    {
      icon: 'Award',
      title: 'Опыт работы 10+ лет',
      description: 'Реализованные проекты для малого и среднего бизнеса в Подмосковье'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/5 via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Briefcase" size={16} />
              Для бизнеса
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              IT-решения для вашего бизнеса
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Комплексные услуги связи и безопасности для юридических лиц. 
              Индивидуальный подход, прозрачные условия, гарантированное качество.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="tel:+79015000078">
                  <Icon name="Phone" size={20} className="mr-2" />
                  +7 (901) 500-00-78
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:info@mosoblconnect.ru">
                  <Icon name="Mail" size={20} className="mr-2" />
                  Отправить заявку
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши услуги для бизнеса</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessServices.map((service, index) => (
              <div 
                key={index}
                className="bg-card border rounded-xl p-6 hover:shadow-lg transition-all group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-sm">
                      <Icon name="CheckCircle2" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={service.link}
                  className="text-primary hover:underline text-sm font-medium inline-flex items-center"
                >
                  Подробнее
                  <Icon name="ArrowRight" size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Преимущества работы с нами</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {advantages.map((advantage, index) => (
              <div 
                key={index}
                className="bg-card border rounded-xl p-6 text-center"
              >
                <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                  <Icon name={advantage.icon} size={32} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground text-sm">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 text-center">
            <Icon name="FileText" size={48} className="mx-auto text-primary mb-6" />
            <h2 className="text-3xl font-bold mb-4">Готовы обсудить проект?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Оставьте заявку, и наш менеджер свяжется с вами для обсуждения деталей 
              и подготовки коммерческого предложения
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="tel:+79015000078">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить сейчас
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://wa.me/79015000078" target="_blank" rel="noopener noreferrer">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessServices;
