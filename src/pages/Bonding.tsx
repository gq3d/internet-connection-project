import { useSEO } from '@/hooks/useSEO';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import BondingHero from '@/components/bonding/BondingHero';
import BondingPricing from '@/components/bonding/BondingPricing';
import BondingHowItWorks from '@/components/bonding/BondingHowItWorks';
import BondingBenefits from '@/components/bonding/BondingBenefits';

export default function Bonding() {
  useSEO({
    title: 'Bonding каналов — объединение интернет-каналов для бизнеса | Балансировка нагрузки | NetConnect',
    description: 'Технология Bonding — суммирование скорости нескольких интернет-каналов от разных провайдеров. До 100+ Мбит/с, отказоустойчивость, балансировка нагрузки. Идеально для офисов, стриминга, торговых точек в Подмосковье. ☎️ +7 (495) 663-73-74',
    keywords: 'bonding каналов, объединение интернет каналов, балансировка интернет каналов, суммирование скорости интернет, отказоустойчивый интернет для бизнеса, агрегация каналов, bonding технология подмосковье, высокоскоростной интернет для офиса',
    ogTitle: 'Bonding каналов — объединение интернет-провайдеров для максимальной скорости',
    ogDescription: 'Суммируем скорость нескольких интернет-каналов в один. Отказоустойчивость + балансировка нагрузки для вашего бизнеса.',
    canonical: 'https://mosoblconnect.ru/business/bonding',
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <BondingHero />
      <BondingPricing />
      <BondingHowItWorks />
      <BondingBenefits />
      <Footer />
    </div>
  );
}
