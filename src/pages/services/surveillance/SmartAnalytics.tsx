import { useSEO } from '@/hooks/useSEO';
import SurveillanceHeader from '@/components/surveillance/SurveillanceHeader';
import Footer from '@/components/home/Footer';
import SmartAnalyticsHero from '@/components/smartAnalytics/SmartAnalyticsHero';
import FaceRecognitionSection from '@/components/smartAnalytics/FaceRecognitionSection';
import MotionDetectionSection from '@/components/smartAnalytics/MotionDetectionSection';
import FriendOrFoeSection from '@/components/smartAnalytics/FriendOrFoeSection';
import ElectronicPeepholeSection from '@/components/smartAnalytics/ElectronicPeepholeSection';
import CompatibleEquipment from '@/components/smartAnalytics/CompatibleEquipment';
import SmartAnalyticsCTA from '@/components/smartAnalytics/SmartAnalyticsCTA';

const SmartAnalytics = () => {
  useSEO({
    title: 'Умная аналитика видеонаблюдения в МО | NetConnect',
    description: 'Распознавание лиц, детекция движения, система свой-чужой, электронный глазок. Видеоаналитика для максимальной безопасности. Звоните: +7 (901) 500-00-78',
    keywords: 'умная аналитика видеонаблюдение, распознавание лиц, детекция движения, электронный глазок, система свой чужой, видеоаналитика',
    canonical: 'https://wiline.ru/services/surveillance/smart-analytics',
    ogTitle: 'Умная аналитика и дополнительные функции видеонаблюдения',
    ogDescription: 'Современные системы видеонаблюдения с распознаванием лиц, детекцией движения и интеллектуальной аналитикой. Установка под ключ в Московской области.',
    ogImage: 'https://cdn.wiline.ru/files/0b95440d-0b84-41b8-8404-418760cb07a4.jpg',
    ogImageAlt: 'Умная аналитика видеонаблюдения NetConnect'
  });

  return (
    <div className="min-h-screen bg-background">
      <SurveillanceHeader />
      <SmartAnalyticsHero />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            <FaceRecognitionSection />
            <MotionDetectionSection />
            <FriendOrFoeSection />
            <ElectronicPeepholeSection />
          </div>
        </div>
      </section>

      <CompatibleEquipment />
      <SmartAnalyticsCTA />
      <Footer />
    </div>
  );
};

export default SmartAnalytics;
