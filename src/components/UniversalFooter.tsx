import { Link, useLocation, useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';

interface UniversalFooterProps {
  customCopyright?: string;
}

export default function UniversalFooter({ customCopyright }: UniversalFooterProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault();
    
    if (location.pathname === '/') {
      const section = document.getElementById(anchor);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(anchor);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const defaultCopyright = "© 2015 NetConnect. Надежный беспроводной интернет в Московской области.";
  const copyrightText = customCopyright || defaultCopyright;

  return (
    <footer className="bg-muted/50 border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Satellite" size={32} className="text-primary" />
              <span className="text-xl font-bold">NetConnect</span>
            </div>
            <p className="text-muted-foreground text-sm mb-3">
              Надежный беспроводной интернет в Московской области
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-4">
              <p className="font-semibold text-sm text-gray-900 mb-1">ООО "ЧОО "СБ ЗВИ"</p>
              <p className="text-xs text-muted-foreground">115093, г. Москва,<br/>пер. Партийный, д. 1</p>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Услуги</h3>
            <div className="space-y-2 text-sm">
              <Link to="/services/internet" className="block text-muted-foreground hover:text-primary transition-colors">Интернет-подключение</Link>
              <Link to="/services/satellite" className="block text-muted-foreground hover:text-primary transition-colors">Спутниковый интернет</Link>
              <Link to="/services/surveillance" className="block text-muted-foreground hover:text-primary transition-colors">Видеонаблюдение</Link>
              <Link to="/services/security" className="block text-muted-foreground hover:text-primary transition-colors">Системы охраны</Link>
              <Link to="/services/wifi" className="block text-muted-foreground hover:text-primary transition-colors">Wi-Fi оборудование</Link>
              <Link to="/services/cellular-booster" className="block text-muted-foreground hover:text-primary transition-colors">Усиление связи</Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Информация</h3>
            <div className="space-y-2 text-sm">
              <Link to="/" className="block text-muted-foreground hover:text-primary transition-colors">Главная</Link>
              <a href="/#tariffs" onClick={(e) => handleAnchorClick(e, 'tariffs')} className="block text-muted-foreground hover:text-primary transition-colors">Тарифы</a>
              <a href="/#pricing" onClick={(e) => handleAnchorClick(e, 'pricing')} className="block text-muted-foreground hover:text-primary transition-colors">Стоимость</a>
              <a href="/#coverage" onClick={(e) => handleAnchorClick(e, 'coverage')} className="block text-muted-foreground hover:text-primary transition-colors">Покрытие</a>
              <a href="/#esim" onClick={(e) => handleAnchorClick(e, 'esim')} className="block text-muted-foreground hover:text-primary transition-colors">eSIM</a>
              <a href="/#about" onClick={(e) => handleAnchorClick(e, 'about')} className="block text-muted-foreground hover:text-primary transition-colors">О компании</a>
              <Link to="/faq" className="block text-muted-foreground hover:text-primary transition-colors">FAQ</Link>
              <Link to="/reviews" className="block text-muted-foreground hover:text-primary transition-colors">Отзывы</Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Контакты</h3>
            <div className="space-y-3 text-sm">
              <a 
                href="tel:+79015000078"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon name="Phone" size={16} className="mr-2" />
                +7 (901) 500-00-78
              </a>
              <a 
                href="tel:+79015000087"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon name="Phone" size={16} className="mr-2" />
                +7 (901) 500-00-87
              </a>
              <a 
                href="https://wa.me/79015000078"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-muted-foreground hover:text-green-600 transition-colors"
              >
                <Icon name="MessageCircle" size={16} className="mr-2" />
                WhatsApp
              </a>
              <a 
                href="mailto:info@mosoblconnect.ru"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon name="Mail" size={16} className="mr-2" />
                info@mosoblconnect.ru
              </a>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>{copyrightText}</p>
        </div>
      </div>
    </footer>
  );
}
