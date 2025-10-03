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
    title: 'Усиление сотовой связи в МО - от 18 000₽ | NetConnect',
    description: 'Усиление сотовой связи в Московской области. Репитеры GSM, 3G, 4G, 5G. Усиление сигнала всех операторов. Установка и настройка. ☎ +7 (901) 500-00-78',
    keywords: 'усиление сотовой связи, репитер gsm, усилитель сигнала, 4g репитер, 5g усилитель, усиление связи на даче',
    canonical: 'https://mosoblconnect.ru/services/cellular-booster',
    ogTitle: 'Усиление сотовой связи в Московской области',
    ogDescription: 'Репитеры GSM, 3G, 4G, 5G. Усиление сигнала всех операторов на доме и даче. Комплекты от 18 000₽.',
    ogImage: 'https://cdn.mosoblconnect.ru/files/0b95440d-0b84-41b8-8404-418760cb07a4.jpg'
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
