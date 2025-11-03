import { useSEO } from '@/hooks/useSEO';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const BusinessServices = () => {
  useSEO({
    title: 'Полная цифровизация бизнеса | IT-решения, CRM, Интернет, Видеонаблюдение | NetConnect',
    description: 'Комплексная цифровизация бизнеса в Подмосковье: разработка CRM-систем, создание сайтов, IT-консалтинг, оптимизация процессов. Интернет до 1 Гбит/с, Wi-Fi, видеонаблюдение, охрана. Работаем по договору с юрлицами. Поддержка 24/7. ☎️ +7 (901) 500-00-78',
    keywords: 'цифровизация бизнеса мо, разработка crm систем, создание сайтов для бизнеса, it консалтинг московская область, интернет для бизнеса, корпоративный wifi, видеонаблюдение для офиса, оптимизация бизнес процессов, it решения для бизнеса',
    ogTitle: 'Полная цифровизация бизнеса | IT-решения и телекоммуникации | NetConnect',
    ogDescription: 'CRM-системы, сайты, IT-консалтинг + интернет, Wi-Fi, видеонаблюдение. Полный цикл цифровизации для вашего бизнеса.',
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
              Полная цифровизация вашего бизнеса
            </h1>
            <div className="relative max-w-3xl mx-auto mb-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-secondary/30 to-success/30 rounded-3xl blur-2xl opacity-60"></div>
              <div className="relative overflow-hidden rounded-3xl border border-primary/20 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-secondary/5"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
                
                <div className="relative backdrop-blur-sm p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
                      <Icon name="Sparkles" size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                        От разработки CRM-систем до телекоммуникаций
                      </h3>
                      <p className="text-base text-muted-foreground">
                        — полный цикл IT-услуг для юридических лиц
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 mt-6">
                    <div className="group flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-xl border border-primary/20 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon name="Code" size={16} className="text-primary" />
                      </div>
                      <span className="text-sm font-semibold text-foreground">Разработка</span>
                    </div>
                    
                    <div className="group flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-xl border border-primary/20 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon name="Database" size={16} className="text-primary" />
                      </div>
                      <span className="text-sm font-semibold text-foreground">Интеграция</span>
                    </div>
                    
                    <div className="group flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-xl border border-primary/20 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300">
                      <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                        <Icon name="TrendingUp" size={16} className="text-secondary" />
                      </div>
                      <span className="text-sm font-semibold text-foreground">Оптимизация</span>
                    </div>
                    
                    <div className="group flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-xl border border-secondary/20 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300">
                      <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                        <Icon name="Network" size={16} className="text-secondary" />
                      </div>
                      <span className="text-sm font-semibold text-foreground">Инфраструктура и безопасность</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Button size="lg" asChild>
                <a href="tel:+79015000078">
                  <Icon name="Phone" size={20} className="mr-2" />
                  +7 (901) 500-00-78
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Icon name="Network" size={16} />
              Телекоммуникации
            </div>
          </div>
          <h2 className="text-3xl font-bold text-center mb-4">Связь и безопасность</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Профессиональная инфраструктура для вашего бизнеса
          </p>
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

      <section className="py-16 bg-gradient-to-br from-secondary/5 via-primary/5 to-success/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
              <Icon name="Laptop" size={16} />
              IT-услуги и цифровизация
            </div>
          </div>
          <h2 className="text-3xl font-bold text-center mb-4">Разработка и автоматизация</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Современные IT-решения для эффективности вашего бизнеса
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="bg-card border rounded-xl p-6 hover:shadow-lg transition-all group">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                  <Icon name="Globe" size={28} className="text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Создание сайтов</h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Разработка корпоративных сайтов, интернет-магазинов, лендингов с современным дизайном и удобной CMS
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Адаптивный дизайн
                </li>
                <li className="flex items-center text-sm">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  SEO-оптимизация
                </li>
                <li className="flex items-center text-sm">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Интеграция с системами
                </li>
                <li className="flex items-center text-sm">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Техподдержка
                </li>
              </ul>
            </div>

            <div className="bg-card border rounded-xl p-6 hover:shadow-lg transition-all group">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                  <Icon name="Database" size={28} className="text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Разработка CRM-систем</h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Индивидуальные CRM под ваши бизнес-процессы: управление клиентами, продажами, аналитика
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Под ключ или доработка
                </li>
                <li className="flex items-center text-sm">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Интеграция с 1С, почтой
                </li>
                <li className="flex items-center text-sm">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Мобильные приложения
                </li>
                <li className="flex items-center text-sm">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Обучение сотрудников
                </li>
              </ul>
            </div>

            <div className="bg-card border rounded-xl p-6 hover:shadow-lg transition-all group">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                  <Icon name="Wrench" size={28} className="text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Ремонт техники и установка ПО</h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Диагностика, ремонт компьютеров и ноутбуков, настройка ПО, обслуживание корпоративной техники
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Выезд специалиста
                </li>
                <li className="flex items-center text-sm">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Настройка Windows, macOS
                </li>
                <li className="flex items-center text-sm">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Установка офисного ПО
                </li>
                <li className="flex items-center text-sm">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Гарантия на работы
                </li>
              </ul>
            </div>

            <div className="bg-card border rounded-xl p-6 hover:shadow-lg transition-all group">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                  <Icon name="TrendingUp" size={28} className="text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Оптимизация бизнес-процессов</h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Анализ текущих процессов, выявление узких мест, внедрение автоматизации и повышение эффективности
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Аудит процессов
                </li>
                <li className="flex items-center text-sm">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Дорожная карта изменений
                </li>
                <li className="flex items-center text-sm">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Внедрение инструментов
                </li>
                <li className="flex items-center text-sm">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Обучение команды
                </li>
              </ul>
            </div>

            <div className="bg-card border rounded-xl p-6 hover:shadow-lg transition-all group">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                  <Icon name="Lightbulb" size={28} className="text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">IT-консалтинг</h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Экспертная поддержка по выбору IT-решений, стратегии цифровизации, технологическому развитию компании
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  IT-стратегия
                </li>
                <li className="flex items-center text-sm">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Выбор технологий
                </li>
                <li className="flex items-center text-sm">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Масштабирование систем
                </li>
                <li className="flex items-center text-sm">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Аудит безопасности
                </li>
              </ul>
            </div>

            <div className="bg-card border rounded-xl p-6 hover:shadow-lg transition-all group">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                  <Icon name="Layers" size={28} className="text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Интеграция систем</h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Связываем разрозненные системы в единую экосистему: 1С, CRM, складской учёт, сайт, телефония
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  API-интеграции
                </li>
                <li className="flex items-center text-sm">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Синхронизация данных
                </li>
                <li className="flex items-center text-sm">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Автоматизация обмена
                </li>
                <li className="flex items-center text-sm">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  Техподдержка
                </li>
              </ul>
            </div>
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
              Просто позвоните или напишите в мессенджер для обсуждения деталей 
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