import WhatsAppButton from '@/components/WhatsAppButton';
import { useSEO } from '@/hooks/useSEO';
import InternetHeader from '@/components/internet/InternetHeader';
import InternetHero from '@/components/internet/InternetHero';
import InternetAdvantages from '@/components/internet/InternetAdvantages';
import InternetTechnology from '@/components/internet/InternetTechnology';
import InternetTariffs from '@/components/internet/InternetTariffs';
import InternetExamples from '@/components/internet/InternetExamples';
import InternetCTA from '@/components/internet/InternetCTA';
import InternetFooter from '@/components/internet/InternetFooter';

const Internet = () => {
  useSEO({
    title: 'Беспроводной интернет для частного дома в МО - от 1490₽/мес | NetConnect',
    description: 'Подключение беспроводного интернета для частного дома и дачи в Московской области. Скорость до 250 Мбит/с. Без проводов и закапывания кабеля. Тарифы от 1490₽. ☎ +7 (901) 500-00-78',
    keywords: 'беспроводной интернет московская область, интернет для дома, интернет на даче, подключение интернета, интернет без проводов, интернет в частный дом',
    canonical: 'https://mosoblconnect.ru/services/internet',
    ogTitle: 'Беспроводной интернет в Московской области для дома и дачи',
    ogDescription: 'Быстрое подключение беспроводного интернета. Скорость до 250 Мбит/с, без проводов. Тарифы от 1490₽/мес.',
    ogImage: 'https://cdn.mosoblconnect.ru/files/0b95440d-0b84-41b8-8404-418760cb07a4.jpg'
  });

  return (
    <div className="min-h-screen bg-background">
      <InternetHeader />
      <InternetHero />
      <InternetAdvantages />
      <InternetTechnology />
      <InternetTariffs />
      <InternetExamples />
      <InternetCTA />
      <InternetFooter />
      <WhatsAppButton />
    </div>
  );
};

export default Internet;
