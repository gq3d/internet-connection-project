import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Wifi',
    title: 'Интернет-подключение',
    description: 'Беспроводной интернет до 250 Мбит/с через беспроводные технологии',
    features: ['До 250 Мбит/с', 'Стабильное соединение', '24/7 поддержка'],
    url: '/services/internet'
  },
  {
    icon: 'Video',
    title: 'Видеонаблюдение',
    description: 'Системы безопасности с удаленным доступом и записью',
    features: ['HD качество', 'Облачное хранение', 'Мобильное приложение'],
    url: '/services/surveillance'
  },
  {
    icon: 'Router',
    title: 'Wi-Fi оборудование',
    description: 'Установка и настройка Wi-Fi сетей, усиление сигнала',
    features: ['Профессиональная установка', 'Настройка роуминга', 'Усиление сигнала'],
    url: '/services/wifi'
  },
  {
    icon: 'Shield',
    title: 'Системы охраны',
    description: 'Комплексная безопасность: автоматизированные системы, физическая охрана домов и посёлков',
    features: ['Физическая охрана', 'Охрана посёлков', 'Системы контроля доступа'],
    url: '/services/security'
  },
  {
    icon: 'Satellite',
    title: 'Спутниковый интернет',
    description: 'Надежное покрытие в отдаленных районах Московской области',
    features: ['Покрытие 99%', 'Низкая задержка', 'Защита от помех'],
    url: '/services/satellite'
  },
  {
    icon: 'Signal',
    title: 'Усиление сотовой связи',
    description: 'Репитеры и усилители сигнала для стабильной мобильной связи',
    features: ['Все операторы', 'Увеличение зоны покрытия', 'Простая установка'],
    url: '/services/cellular-booster'
  }
];

export default function Services() {
  useEffect(() => {
    document.title = 'Наши услуги - NetConnect';
  }, []);

  return (
    <>
      <Helmet>
        <title>Наши услуги - NetConnect</title>
        <meta name="description" content="Полный спектр телекоммуникационных и охранных услуг для дома и бизнеса в Московской области: интернет, видеонаблюдение, Wi-Fi, системы охраны, спутниковый интернет" />
        <link rel="canonical" href="https://mosoblconnect.ru/services" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр телекоммуникационных и охранных услуг для дома и бизнеса
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link key={index} to={service.url}>
                <Card className="hover:shadow-lg transition-all duration-300 animate-scale-in cursor-pointer hover:scale-105 h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name={service.icon} size={24} className="text-success" />
                    </div>
                    <CardTitle as="h3" className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <Icon name="Check" size={16} className="text-success mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex items-center text-primary font-medium">
                      <span>Подробнее</span>
                      <Icon name="ArrowRight" size={16} className="ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* SEO Content Section */}
          <div className="mt-24 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-primary/5 to-success/5 rounded-2xl p-8 md:p-12 border border-primary/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Профессиональные телеком-решения</h2>
              
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p className="leading-relaxed">
                  <span className="font-semibold text-foreground">NetConnect</span> — ведущий поставщик телекоммуникационных и охранных услуг в Московской области. 
                  Мы специализируемся на предоставлении высокоскоростного интернета, систем видеонаблюдения и комплексных решений безопасности для частных домов, коттеджных поселков и бизнеса.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <Icon name="Award" size={32} className="text-success mb-3" />
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Опыт и надежность</h3>
                    <p className="text-sm">
                      Более 15 лет успешной работы на рынке телекоммуникаций. Тысячи довольных клиентов в Московской области доверяют нам свою связь и безопасность.
                    </p>
                  </div>

                  <div className="bg-card rounded-xl p-6 border border-border">
                    <Icon name="Headphones" size={32} className="text-success mb-3" />
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Поддержка 24/7</h3>
                    <p className="text-sm">
                      Наша служба технической поддержки работает круглосуточно. Мы оперативно решаем любые технические вопросы и гарантируем стабильность сервиса.
                    </p>
                  </div>
                </div>

                <p className="leading-relaxed">
                  Наши услуги включают беспроводной интернет со скоростью до 250 Мбит/с, профессиональные системы видеонаблюдения с облачным хранением, 
                  настройку Wi-Fi сетей любой сложности, физическую охрану объектов, спутниковый интернет для отдаленных районов и усиление сотовой связи.
                </p>

                <div className="bg-success/10 border border-success/20 rounded-xl p-6 mt-8">
                  <div className="flex items-start gap-4">
                    <Icon name="Sparkles" size={28} className="text-success flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">Индивидуальный подход</h3>
                      <p className="text-sm">
                        Мы разрабатываем решения под конкретные потребности каждого клиента. От подключения одного дома до создания комплексной инфраструктуры 
                        для целого коттеджного поселка — наши специалисты найдут оптимальное решение для любой задачи.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="leading-relaxed">
                  Выбирая NetConnect, вы получаете не просто услугу, а надежного партнера в сфере телекоммуникаций и безопасности. 
                  Современное оборудование, квалифицированные специалисты и прозрачные условия сотрудничества — всё это делает нас лучшим выбором для вашего дома или бизнеса.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
}