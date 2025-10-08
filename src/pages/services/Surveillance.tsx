import WhatsAppButton from '@/components/WhatsAppButton';
import { useSEO } from '@/hooks/useSEO';
import SurveillanceHeader from '@/components/surveillance/SurveillanceHeader';
import SurveillanceHero from '@/components/surveillance/SurveillanceHero';
import SurveillanceCameras from '@/components/surveillance/SurveillanceCameras';
import SurveillanceFeatures from '@/components/surveillance/SurveillanceFeatures';
import SurveillancePackages from '@/components/surveillance/SurveillancePackages';
import SurveillanceProcess from '@/components/surveillance/SurveillanceProcess';
import SurveillanceExamples from '@/components/surveillance/SurveillanceExamples';
import SurveillanceCTA from '@/components/surveillance/SurveillanceCTA';
import SurveillanceFooter from '@/components/surveillance/SurveillanceFooter';

const Surveillance = () => {
  useSEO({
    title: 'Видеонаблюдение в МО от 45000₽ | NetConnect',
    description: 'IP-камеры 4K, облачное хранение, мобильный доступ. Установка под ключ. Звоните: +7 (901) 500-00-78',
    canonical: 'https://mosoblconnect.ru/services/surveillance',
    ogTitle: 'Видеонаблюдение 4K в МО от 45000₽',
    ogDescription: 'Профессиональная установка систем видеонаблюдения. IP камеры 4K, облачное хранение, удаленный доступ. Готовые комплекты от 45 000₽.',
    ogImage: 'https://cdn.mosoblconnect.ru/files/0b95440d-0b84-41b8-8404-418760cb07a4.jpg',
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
      <SurveillanceCTA />
      <SurveillanceFooter />
      <WhatsAppButton />
    </div>
  );
};

export default Surveillance;