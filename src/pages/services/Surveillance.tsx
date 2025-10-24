import { Link } from 'react-router-dom';
import { useSEO } from '@/hooks/useSEO';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import SurveillanceHeader from '@/components/surveillance/SurveillanceHeader';
import SurveillanceHero from '@/components/surveillance/SurveillanceHero';
import SurveillanceCameras from '@/components/surveillance/SurveillanceCameras';
import SurveillanceFeatures from '@/components/surveillance/SurveillanceFeatures';
import SurveillancePackages from '@/components/surveillance/SurveillancePackages';
import SurveillanceProcess from '@/components/surveillance/SurveillanceProcess';
import SurveillanceExamples from '@/components/surveillance/SurveillanceExamples';
import SurveillanceCTA from '@/components/surveillance/SurveillanceCTA';
import Footer from '@/components/home/Footer';

const Surveillance = () => {
  useSEO({
    title: 'Видеонаблюдение в МО от 45000₽ | NetConnect',
    description: 'IP-камеры 4K, облачное хранение, мобильный доступ. Установка под ключ. Звоните: +7 (901) 500-00-78',
    keywords: 'видеонаблюдение московская область, установка видеонаблюдения, ip камеры, камеры 4k, системы видеонаблюдения, видеонаблюдение для дома, видеонаблюдение офис',
    canonical: 'https://wiline.ru/services/surveillance',
    ogTitle: 'Видеонаблюдение 4K в МО от 45000₽',
    ogDescription: 'Профессиональная установка систем видеонаблюдения. IP камеры 4K, облачное хранение, удаленный доступ. Готовые комплекты от 45 000₽.',
    ogImage: 'https://cdn.wiline.ru/files/0b95440d-0b84-41b8-8404-418760cb07a4.jpg',
    ogImageAlt: 'Видеонаблюдение NetConnect в Московской области',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Установка видеонаблюдения',
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
      'offers': [
        {
          '@type': 'Offer',
          'name': 'Домашнее видеонаблюдение',
          'price': '45000',
          'priceCurrency': 'RUB',
          'description': '4 IP камеры Full HD, регистратор, установка'
        },
        {
          '@type': 'Offer',
          'name': 'Офисная безопасность',
          'price': '85000',
          'priceCurrency': 'RUB',
          'description': '8 камер 4K, облачное хранение, аналитика'
        },
        {
          '@type': 'Offer',
          'name': 'Корпоративная система',
          'price': '180000',
          'priceCurrency': 'RUB',
          'description': '16+ камер, интеграция с СКУД, техподдержка'
        }
      ],
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'reviewCount': '320'
      }
    }
  });

  return (
    <div className="min-h-screen bg-background">
      <SurveillanceHeader />
      <SurveillanceHero />
      <SurveillanceCameras />
      <SurveillanceFeatures />
      <SurveillancePackages />
      <SurveillanceProcess />
      <SurveillanceExamples />
      
      {/* Smart Analytics Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 via-indigo-50 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl mb-6 shadow-xl">
                <Icon name="Brain" size={32} className="text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Умная аналитика видеонаблюдения
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                Современные камеры умеют не просто записывать видео — они анализируют происходящее, 
                распознают лица, отслеживают движение и помогают предотвращать инциденты
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="ScanFace" size={24} className="text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Распознавание лиц</h3>
                  <p className="text-muted-foreground text-sm">
                    Автоматическая идентификация людей, система «свой-чужой», уведомления о посторонних
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Activity" size={24} className="text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Детекция движения</h3>
                  <p className="text-muted-foreground text-sm">
                    Запись только при движении, контроль присутствия, интеграция с системой доступа
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Eye" size={24} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Электронный глазок</h3>
                  <p className="text-muted-foreground text-sm">
                    Видеоглазок с трансляцией на смартфон, двусторонняя связь, запись посетителей
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Link 
                to="/services/surveillance/smart-analytics"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Узнать больше об умной аналитике
                <Icon name="ArrowRight" size={24} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Reviews Link Section */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mt-12 mb-8">
              <Link 
                to="/reviews"
                className="group block"
              >
                <Card className="overflow-hidden border-0 shadow-lg bg-gradient-to-br from-primary via-primary/95 to-secondary hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                          <Icon name="Star" size={18} className="text-yellow-300" />
                          <span className="text-white text-sm font-medium">500+ довольных клиентов</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-white">
                          Узнайте, что говорят наши клиенты
                        </h3>
                      </div>
                      <div className="flex items-center gap-3 bg-white hover:bg-white/95 text-primary px-6 py-3 rounded-xl font-bold shadow-lg group-hover:shadow-xl transition-all">
                        <Icon name="MessageSquare" size={20} />
                        <span>Читать отзывы</span>
                        <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <SurveillanceCTA />
      <Footer />
    </div>
  );
};

export default Surveillance;