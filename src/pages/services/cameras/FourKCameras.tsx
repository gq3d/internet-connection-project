import { Link } from 'react-router-dom';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useSEO } from '@/hooks/useSEO';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import SurveillanceHeader from '@/components/surveillance/SurveillanceHeader';
import UniversalFooter from '@/components/UniversalFooter';

const FourKCameras = () => {
  useSEO({
    title: '4K камеры для видеонаблюдения в МО от 15000₽ | NetConnect',
    description: 'Установка камер 4K Ultra HD 3840x2160. Максимальная детализация, Smart детекция, ночное видение до 50м. Звоните: +7 (901) 500-00-78',
    canonical: 'https://mosoblconnect.ru/services/cameras/4k-cameras',
    ogTitle: '4K камеры видеонаблюдения в Московской области',
    ogDescription: 'Камеры сверхвысокого разрешения 4K UHD. Детализация лиц и номеров, Smart аналитика, запись 8 Мп.',
    ogImage: 'https://cdn.poehali.dev/projects/d4f2c7e9-a091-4f1c-9e82-47f687864218/files/b435c19e-b35a-463b-9c15-5b429ceeada0.jpg',
    ogImageAlt: '4K камеры видеонаблюдения NetConnect',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': '4K камеры видеонаблюдения Ultra HD',
      'description': 'Камеры сверхвысокого разрешения 3840x2160',
      'offers': {
        '@type': 'Offer',
        'price': '15000',
        'priceCurrency': 'RUB'
      }
    }
  });

  const advantages = [
    {
      icon: 'Maximize2',
      title: '8 мегапикселей',
      description: 'Разрешение 3840x2160 пикселей — в 4 раза больше деталей чем Full HD'
    },
    {
      icon: 'UserSearch',
      title: 'Распознавание лиц',
      description: 'Четкая идентификация людей даже на большом расстоянии'
    },
    {
      icon: 'Hash',
      title: 'Чтение номеров',
      description: 'Распознавание автомобильных номеров с расстояния до 25 метров'
    },
    {
      icon: 'Sparkles',
      title: 'Smart детекция',
      description: 'ИИ аналитика: распознавание людей, транспорта, пересечение линий'
    },
    {
      icon: 'Moon',
      title: 'Ночная съемка',
      description: 'ИК подсветка до 50 метров, режим Starlight для цветной съемки ночью'
    },
    {
      icon: 'Maximize',
      title: 'Цифровой зум',
      description: 'Увеличение фрагментов без потери качества благодаря высокому разрешению'
    }
  ];

  const comparison = [
    {
      parameter: 'Разрешение',
      fullHd: '1920x1080 (2 Мп)',
      fourK: '3840x2160 (8 Мп)',
      better: true
    },
    {
      parameter: 'Детализация лиц',
      fullHd: 'До 5 метров',
      fourK: 'До 15 метров',
      better: true
    },
    {
      parameter: 'Чтение номеров',
      fullHd: 'До 8 метров',
      fourK: 'До 25 метров',
      better: true
    },
    {
      parameter: 'Цифровой зум',
      fullHd: '2-3x без потерь',
      fourK: '4-6x без потерь',
      better: true
    },
    {
      parameter: 'Требования к сети',
      fullHd: '2-4 Мбит/с',
      fourK: '8-15 Мбит/с',
      better: false
    },
    {
      parameter: 'Размер записи (1 час)',
      fullHd: '1-2 ГБ',
      fourK: '4-8 ГБ',
      better: false
    }
  ];

  const models = [
    {
      name: 'Hikvision DS-2CD2683G2',
      price: 'от 15 500 ₽',
      features: ['8 Мп (4K)', 'AcuSense детекция', 'ИК до 50м', 'PoE', 'H.265+ кодек', 'MicroSD 256 ГБ']
    },
    {
      name: 'Dahua IPC-HFW3841E',
      price: 'от 17 200 ₽',
      features: ['8 Мп (4K)', 'SMD Plus', 'Starlight', 'ИК до 60м', 'WDR 140 дБ', 'AI распознавание'],
      popular: true
    },
    {
      name: 'Uniview IPC2328SB',
      price: 'от 14 800 ₽',
      features: ['8 Мп (4K)', 'Smart детекция', 'ИК до 50м', 'PoE', 'IP67', 'ONVIF Profile S']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SurveillanceHeader />
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <Icon name="Sparkles" size={16} className="mr-2" />
              Максимальное качество
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              4K камеры Ultra HD для видеонаблюдения
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Камеры сверхвысокого разрешения 3840x2160 с Smart детекцией и ИИ аналитикой. 
              Максимальная детализация для распознавания лиц и автомобильных номеров.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a href="tel:+79015000078">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить сейчас
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services/surveillance">Все камеры</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Преимущества 4K камер</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            В 4 раза больше деталей чем Full HD камеры
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <Icon name={adv.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{adv.title}</h3>
                  <p className="text-muted-foreground">{adv.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Сравнение с Full HD</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Почему стоит выбрать 4K камеры
          </p>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Параметр</th>
                        <th className="text-center py-3 px-4">Full HD</th>
                        <th className="text-center py-3 px-4 text-primary font-bold">4K UHD</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparison.map((row, index) => (
                        <tr key={index} className="border-b last:border-0">
                          <td className="py-3 px-4 font-medium">{row.parameter}</td>
                          <td className="text-center py-3 px-4">{row.fullHd}</td>
                          <td className="text-center py-3 px-4">
                            <div className="flex items-center justify-center gap-2">
                              {row.better && <Icon name="TrendingUp" size={16} className="text-success" />}
                              {!row.better && <Icon name="TrendingDown" size={16} className="text-warning" />}
                              <span className={row.better ? 'font-semibold text-primary' : ''}>{row.fourK}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Рекомендуемые модели</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Лучшие 4K камеры для профессионального видеонаблюдения
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {models.map((model, index) => (
              <Card key={index} className={model.popular ? 'border-primary shadow-lg scale-105' : ''}>
                <CardContent className="p-8">
                  {model.popular && (
                    <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      Лидер продаж
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2">{model.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-6">
                    {model.price}
                  </div>
                  <ul className="space-y-3 mb-6">
                    {model.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Icon name="Check" size={20} className="text-success mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={model.popular ? 'default' : 'outline'} asChild>
                    <a href="tel:+79015000078">Заказать</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Готовы установить 4K камеры?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Получите максимальную детализацию изображения для вашей системы видеонаблюдения.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a href="tel:+79015000078">
                  <Icon name="Phone" size={20} className="mr-2" />
                  +7 (901) 500-00-78
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services/surveillance">Видеонаблюдение</Link>
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

export default FourKCameras;