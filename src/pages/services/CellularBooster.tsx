import WhatsAppButton from '@/components/WhatsAppButton';
import { useSEO } from '@/hooks/useSEO';
import {
  CellularHeader,
  CellularHero,
  CellularBoosters,
  CellularOperators,
  CellularAdvantages,
  CellularProcess,
  CellularCTA,
  CellularFooter
} from '@/components/cellular/CellularBoosterComponents';
import { CellularSigns, CellularExamples } from '@/components/cellular/CellularAdditional';

const CellularBooster = () => {
  useSEO({
    title: 'Усиление сотовой связи в МО от 18000₽ | NetConnect',
    description: 'Репитеры GSM/3G/4G/5G для всех операторов. Установка за 1 день. Звоните: +7 (901) 500-00-78',
    canonical: 'https://mosoblconnect.ru/services/cellular-booster',
    ogTitle: 'Усиление сотовой связи в МО от 18000₽',
    ogDescription: 'Репитеры GSM, 3G, 4G, 5G. Усиление сигнала всех операторов на доме и даче. Комплекты от 18 000₽.',
    ogImage: 'https://cdn.mosoblconnect.ru/files/0b95440d-0b84-41b8-8404-418760cb07a4.jpg',
    ogImageAlt: 'Усиление сотовой связи NetConnect в Московской области'
  });

  return (
    <div className="min-h-screen bg-background">
      <CellularHeader />
      <CellularHero />
      <CellularBoosters />
      <CellularOperators />
      <CellularAdvantages />
      <CellularProcess />
      <CellularSigns />
      <CellularExamples />
      <CellularCTA />
      <CellularFooter />
      <WhatsAppButton />
    </div>
  );
};

export default CellularBooster;