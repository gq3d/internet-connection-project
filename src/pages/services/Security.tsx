import { Link } from 'react-router-dom';
import { useSEO } from '@/hooks/useSEO';
import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';
import SecurityHeader from '@/components/security/SecurityHeader';
import SecurityHero from '@/components/security/SecurityHero';
import SecuritySystems from '@/components/security/SecuritySystems';
import SecurityPackages from '@/components/security/SecurityPackages';
import SecurityFeatures from '@/components/security/SecurityFeatures';
import ArmedSecurity from '@/components/security/ArmedSecurity';
import SecurityLicense from '@/components/security/SecurityLicense';
import SecurityCTA from '@/components/security/SecurityCTA';
import UniversalFooter from '@/components/UniversalFooter';

const Security = () => {
  useSEO({
    title: 'Охранная сигнализация в МО от 25000₽ | NetConnect',
    description: 'Охранная сигнализация для частных домов и дач в Московской области. GSM и беспроводные системы, пультовая охрана. Профессиональная установка под ключ. Комплекты от 25000 рублей.',
    canonical: 'https://mosoblconnect.ru/services/security',
    ogTitle: 'Охранные системы в МО от 25000₽',
    ogDescription: 'Профессиональная установка охранных систем. Беспроводная сигнализация, GSM мониторинг, пультовая охрана. Комплекты от 25 000₽.',
    ogImage: 'https://cdn.mosoblconnect.ru/files/0b95440d-0b84-41b8-8404-418760cb07a4.jpg',
    ogImageAlt: 'Охранная сигнализация NetConnect в Московской области'
  });

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/79857608347', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <SecurityHeader />
      <SecurityHero />
      <SecuritySystems />
      <SecurityPackages />
      <SecurityFeatures />
      <ArmedSecurity />
      <SecurityLicense />
      
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
      
      <SecurityCTA />
      <UniversalFooter customCopyright="© 2015 NetConnect. Системы охраны и безопасности в Московской области." />
      
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
        aria-label="Связаться в WhatsApp"
      >
        <Icon name="MessageCircle" size={28} className="group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
};

export default Security;