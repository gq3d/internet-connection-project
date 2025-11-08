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
    icon: 'Signal',
    title: 'Усиление сотовой связи',
    description: 'Репитеры и усилители сигнала для стабильной мобильной связи',
    features: ['Все операторы', 'Увеличение зоны покрытия', 'Простая установка'],
    url: '/services/cellular-booster'
  },
  {
    icon: 'Sparkles',
    title: 'Усиление Wi-Fi',
    description: 'Мощное усиление Wi-Fi сигнала для покрытия больших площадей',
    features: ['Покрытие до 500м²', 'Mesh-системы', 'Бесшовный роуминг'],
    url: '/services/wifi-signal-boost'
  },
  {
    icon: 'Network',
    title: 'Сумматор каналов связи',
    description: 'Bonding технология для объединения нескольких интернет-каналов в один',
    features: ['Скорость до 1 Гбит/с', 'Резервирование', 'Для бизнеса'],
    url: '/business/bonding'
  }
];

export default function Services() {
  useEffect(() => {
    document.title = 'Наши услуги - NetConnect';
  }, []);

  return (
    <>
      <Helmet>
        <title>Подключение интернета и услуги связи в Московской области - быстро и надежно</title>
        <meta name="description" content="Подключение беспроводного интернета до 250 Мбит/с, Bonding до 1 Гбит/с для бизнеса, видеонаблюдение, Wi-Fi оборудование, системы охраны в Подмосковье. Поддержка 24/7. Профессиональный монтаж." />
        <link rel="canonical" href="https://mosoblconnect.ru/services" />
        <meta name="keywords" content="подключить интернет московская область, беспроводной интернет подмосковье, видеонаблюдение дача, wifi оборудование частный дом, охранные системы мо, bonding каналов связи, объединение интернет каналов, сумматор интернет, интернет 1 гбит для бизнеса" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Услуги связи и интернета в Подмосковье</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Подключение беспроводного интернета, видеонаблюдение, Wi-Fi оборудование и системы охраны для дома и бизнеса
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

          {/* Quick Links Section */}
          <div className="mt-16 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <Link 
                to="/coverage#speed-test"
                className="group block"
              >
                <div className="bg-white/80 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-6 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon name="Gauge" size={28} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">Тест скорости интернета</h3>
                        <p className="text-sm text-muted-foreground">Проверьте скорость вашего соединения</p>
                      </div>
                    </div>
                    <div className="mt-auto flex justify-end">
                      <Icon name="ArrowRight" size={20} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </Link>

              <Link 
                to="/coverage"
                className="group block"
              >
                <div className="bg-white/80 backdrop-blur-sm border-2 border-secondary/20 rounded-2xl p-6 hover:border-secondary hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-14 h-14 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" size={28} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1 group-hover:text-secondary transition-colors">Карта покрытия</h3>
                        <p className="text-sm text-muted-foreground">Узнайте, доступен ли интернет в вашем районе</p>
                      </div>
                    </div>
                    <div className="mt-auto flex justify-end">
                      <Icon name="ArrowRight" size={20} className="text-muted-foreground group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </Link>

              <Link 
                to="/esim"
                className="group block"
              >
                <div className="bg-white/80 backdrop-blur-sm border-2 border-success/20 rounded-2xl p-6 hover:border-success hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon name="Smartphone" size={28} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1 group-hover:text-success transition-colors">eSIM для путешествий</h3>
                        <p className="text-sm text-muted-foreground">Мобильный интернет в 200+ странах мира</p>
                      </div>
                    </div>
                    <div className="mt-auto flex justify-end">
                      <Icon name="ArrowRight" size={20} className="text-muted-foreground group-hover:text-success group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Reviews CTA */}
          <div className="mt-16 max-w-3xl mx-auto">
            <Link to="/reviews" className="block group">
              <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-success/10 border-2 border-primary/20 rounded-xl p-6 hover:border-primary/40 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="MessageCircle" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Отзывы наших клиентов</h3>
                      <p className="text-sm text-muted-foreground">Узнайте, что говорят о нас</p>
                    </div>
                  </div>
                  <Icon name="ArrowRight" size={24} className="text-primary group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
}