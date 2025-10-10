import { Link } from 'react-router-dom';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useSEO } from '@/hooks/useSEO';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import SurveillanceHeader from '@/components/surveillance/SurveillanceHeader';
import UniversalFooter from '@/components/UniversalFooter';

const WifiSignalBoost = () => {
  useSEO({
    title: 'Усиление сигнала Wi-Fi в МО от 8000₽ | NetConnect',
    description: 'Расширение зоны покрытия Wi-Fi с помощью репитеров и mesh-систем. Устранение мертвых зон. Звоните: +7 (901) 500-00-78',
    canonical: 'https://mosoblconnect.ru/services/wifi-signal-boost',
    ogTitle: 'Усиление Wi-Fi сигнала в Московской области от 8000₽',
    ogDescription: 'Установка усилителей сигнала, mesh-систем. Анализ покрытия, устранение мертвых зон, бесшовный роуминг.',
    ogImage: 'https://cdn.mosoblconnect.ru/files/wifi-boost.jpg',
    ogImageAlt: 'Усиление Wi-Fi сигнала NetConnect',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Усиление сигнала Wi-Fi',
      'provider': {
        '@type': 'Organization',
        'name': 'NetConnect',
        'telephone': '+79015000078',
        'address': {
          '@type': 'PostalAddress',
          'addressRegion': 'Московская область',
          'addressCountry': 'RU'
        }
      },
      'areaServed': 'Московская область',
      'offers': {
        '@type': 'Offer',
        'name': 'Усиление Wi-Fi сигнала',
        'price': '8000',
        'priceCurrency': 'RUB'
      }
    }
  });

  const solutions = [
    {
      icon: 'Repeat',
      title: 'Wi-Fi репитеры',
      price: 'от 8 000 ₽',
      description: 'Простое решение для расширения зоны покрытия на 30-50 метров',
      features: ['Быстрая установка', 'Доступная цена', 'Покрытие 1-2 комнат', 'Автоматическое подключение']
    },
    {
      icon: 'Grid3x3',
      title: 'Mesh-системы',
      price: 'от 15 000 ₽',
      description: 'Бесшовная сеть из нескольких узлов для больших домов',
      features: ['Единая сеть', 'Автоматический роуминг', 'Покрытие всего дома', 'Удобное управление'],
      popular: true
    },
    {
      icon: 'Radio',
      title: 'Точки доступа',
      price: 'от 26 000 ₽',
      description: 'Профессиональные решения для офисов и больших домов',
      features: ['Централизованное управление', 'Высокая производительность', 'Неограниченное масштабирование', 'Продвинутая аналитика']
    }
  ];

  const problems = [
    {
      icon: 'WifiOff',
      problem: 'Слабый сигнал в дальних комнатах',
      solution: 'Устанавливаем усилители или mesh-систему для равномерного покрытия'
    },
    {
      icon: 'TrendingDown',
      problem: 'Обрывы связи при перемещении',
      solution: 'Настраиваем бесшовный роуминг между точками доступа'
    },
    {
      icon: 'Home',
      problem: 'Нет сигнала на втором этаже',
      solution: 'Добавляем дополнительные узлы mesh-сети или точки доступа'
    },
    {
      icon: 'TreeDeciduous',
      problem: 'Нет Wi-Fi на участке',
      solution: 'Устанавливаем уличные точки доступа с защитой от влаги'
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Анализ покрытия',
      description: 'Специалист измеряет уровень сигнала во всех помещениях специальным оборудованием'
    },
    {
      step: '2',
      title: 'Выбор решения',
      description: 'Подбираем оптимальный вариант: репитеры, mesh-система или точки доступа'
    },
    {
      step: '3',
      title: 'Монтаж оборудования',
      description: 'Устанавливаем усилители в оптимальных местах, при необходимости прокладываем кабели'
    },
    {
      step: '4',
      title: 'Настройка сети',
      description: 'Конфигурируем единую сеть с бесшовным роумингом и проверяем покрытие'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SurveillanceHeader />
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Усиление сигнала Wi-Fi в Московской области
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Расширяем зону покрытия беспроводной сети с помощью репитеров, mesh-систем и дополнительных точек доступа. 
              Устраняем мертвые зоны и создаем бесшовное покрытие.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a href="tel:+79015000078">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить сейчас
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services/wifi">Все Wi-Fi услуги</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Решаем проблемы с покрытием</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Типичные проблемы с Wi-Fi и наши решения
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {problems.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-destructive/10 rounded-full flex-shrink-0">
                      <Icon name={item.icon} size={24} className="text-destructive" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 text-destructive">{item.problem}</h3>
                      <div className="flex items-start space-x-2">
                        <Icon name="ArrowRight" size={18} className="text-success mt-1 flex-shrink-0" />
                        <p className="text-muted-foreground">{item.solution}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Варианты усиления сигнала</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Подбираем решение под ваши задачи и бюджет
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {solutions.map((solution, index) => (
              <Card key={index} className={solution.popular ? 'border-primary shadow-lg scale-105' : ''}>
                <CardContent className="p-8">
                  {solution.popular && (
                    <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      Популярный
                    </div>
                  )}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <Icon name={solution.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{solution.title}</h3>
                  <div className="text-2xl font-bold text-primary mb-3">
                    {solution.price}
                  </div>
                  <p className="text-muted-foreground mb-6">{solution.description}</p>
                  <ul className="space-y-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Icon name="Check" size={20} className="text-success mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={solution.popular ? 'default' : 'outline'} asChild>
                    <a href="tel:+79015000078">Заказать</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Как мы работаем</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <Card>
                  <CardContent className="p-6">
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 mt-4">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Нужно усилить Wi-Fi сигнал?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Закажите бесплатную диагностику покрытия и получите рекомендации по усилению сигнала.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a href="tel:+79015000078">
                  <Icon name="Phone" size={20} className="mr-2" />
                  +7 (901) 500-00-78
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services/wifi">Все Wi-Fi услуги</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <UniversalFooter />
      <WhatsAppButton />
    </div>
  );
};

export default WifiSignalBoost;
