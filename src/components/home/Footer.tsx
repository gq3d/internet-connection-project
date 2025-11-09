import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function Footer() {
  const location = useLocation();

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault();
    
    if (location.pathname === '/') {
      const section = document.getElementById(anchor);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = `/#${anchor}`;
    }
  };

  return (
    <>
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
                <Link to="/tariffs" className="block text-muted-foreground hover:text-primary transition-colors">Тарифы</Link>
                <Link to="/pricing" className="block text-muted-foreground hover:text-primary transition-colors">Стоимость</Link>
                <Link to="/coverage" className="block text-muted-foreground hover:text-primary transition-colors">Покрытие</Link>
                <Link to="/signal-boost" className="block text-muted-foreground hover:text-primary transition-colors">Усиление 4G/LTE</Link>
                <Link to="/esim" className="block text-muted-foreground hover:text-primary transition-colors">eSIM</Link>
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
                <a 
                  href="https://t.me/mosoblconnect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-muted-foreground hover:text-blue-500 transition-colors"
                >
                  <Icon name="Send" size={16} className="mr-2" />
                  Telegram канал
                </a>
                <p className="text-xs text-muted-foreground/70 ml-6">Наши проекты и выдающиеся подключения</p>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground text-sm">
            <p>© 2015 NetConnect. Все права защищены.</p>
            <p className="mt-2 text-xs opacity-50">
              Разработка сайта:{' '}
              <a 
                href="mailto:konovaltsev.dev@yandex.com" 
                className="hover:opacity-100 transition-opacity"
              >
                konovaltsev.dev@yandex.com
              </a>
            </p>
          </div>
        </div>
      </footer>
      
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/79015000078" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110"
          title="Написать в WhatsApp"
        >
          <Icon name="MessageCircle" size={24} />
        </a>
      </div>
    </>
  );
}