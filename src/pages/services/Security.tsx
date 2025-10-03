import { useSEO } from '@/hooks/useSEO';
import SecurityHeader from '@/components/security/SecurityHeader';
import SecurityHero from '@/components/security/SecurityHero';
import SecuritySystems from '@/components/security/SecuritySystems';
import SecurityPackages from '@/components/security/SecurityPackages';
import SecurityFeatures from '@/components/security/SecurityFeatures';
import ArmedSecurity from '@/components/security/ArmedSecurity';
import SecurityLicense from '@/components/security/SecurityLicense';
import SecurityCTA from '@/components/security/SecurityCTA';
import SecurityFooter from '@/components/security/SecurityFooter';

const Security = () => {
  useSEO({
    title: 'Охранные системы и сигнализация в Московской области | NetConnect',
    description: 'Установка охранных систем и сигнализации в Московской области. Проводные и беспроводные системы, GSM мониторинг, пультовая охрана. Комплекты от 25 000₽. ☎ +7 (901) 500-00-78',
    keywords: 'охранная сигнализация московская область, установка сигнализации, охранная система, gsm сигнализация, пультовая охрана, беспроводная сигнализация',
    canonical: 'https://mosoblconnect.ru/services/security',
    ogTitle: 'Охранные системы в Московской области - установка сигнализации',
    ogDescription: 'Профессиональная установка охранных систем. Беспроводная сигнализация, GSM мониторинг, пультовая охрана. Комплекты от 25 000₽.',
    ogImage: 'https://cdn.mosoblconnect.ru/files/0b95440d-0b84-41b8-8404-418760cb07a4.jpg'
  });

  return (
    <div className="min-h-screen bg-background">
      <SecurityHeader />
      <SecurityHero />
      <SecuritySystems />
      <SecurityPackages />
      <SecurityFeatures />
      <ArmedSecurity />
      <SecurityLicense />
      <SecurityCTA />
      <SecurityFooter />
    </div>
  );
};

export default Security;