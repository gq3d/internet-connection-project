import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { useAnchorScroll } from '@/hooks/useAnchorScroll';

export default function CityHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { handleAnchorClick } = useAnchorScroll();

  return (
    <>
      <header className="py-4 border-b bg-card sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <a href="/" className="text-2xl font-bold text-primary">NetConnect</a>
            
            <div className="hidden md:flex items-center space-x-4">
              <a href="/#services" onClick={(e) => handleAnchorClick(e, 'services')} className="text-sm font-medium hover:text-success transition-colors">Услуги</a>
              <a href="/#tariffs" onClick={(e) => handleAnchorClick(e, 'tariffs')} className="text-sm font-medium hover:text-success transition-colors">Тарифы</a>
              <Link to="/pricing" className="text-sm font-medium hover:text-success transition-colors">Стоимость</Link>
              <Link to="/coverage" className="text-sm font-medium hover:text-success transition-colors">Покрытие</Link>
              <Link to="/signal-boost" className="text-sm font-medium hover:text-success transition-colors">Усиление 4G/LTE</Link>
              <a href="/#about" onClick={(e) => handleAnchorClick(e, 'about')} className="text-sm font-medium hover:text-success transition-colors">О компании</a>
              <Link to="/faq" className="text-sm font-medium hover:text-success transition-colors">FAQ</Link>
              <a href="/#contacts" onClick={(e) => handleAnchorClick(e, 'contacts')} className="text-sm font-medium hover:text-success transition-colors">Контакты</a>
              <a 
                href="tel:+79015000078" 
                className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                <Icon name="Phone" size={16} className="mr-2" />
                +7 (901) 500-00-78
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label="Меню"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-border max-h-[70vh] overflow-y-auto">
              <div className="space-y-4">
                <a 
                  href="/#services" 
                  className="block py-2 text-sm font-medium hover:text-success transition-colors"
                  onClick={(e) => { handleAnchorClick(e, 'services'); setIsMobileMenuOpen(false); }}
                >
                  Услуги
                </a>
                <a 
                  href="/#tariffs" 
                  className="block py-2 text-sm font-medium hover:text-success transition-colors"
                  onClick={(e) => { handleAnchorClick(e, 'tariffs'); setIsMobileMenuOpen(false); }}
                >
                  Тарифы
                </a>
                <Link 
                  to="/pricing" 
                  className="block py-2 text-sm font-medium hover:text-success transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Стоимость
                </Link>
                <Link 
                  to="/coverage" 
                  className="block py-2 text-sm font-medium hover:text-success transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Покрытие
                </Link>
                <Link 
                  to="/signal-boost" 
                  className="block py-2 text-sm font-medium hover:text-success transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Усиление 4G/LTE
                </Link>
                <Link 
                  to="/esim" 
                  className="block py-2 text-sm font-medium hover:text-success transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  eSIM
                </Link>
                <a 
                  href="/#about" 
                  className="block py-2 text-sm font-medium hover:text-success transition-colors"
                  onClick={(e) => { handleAnchorClick(e, 'about'); setIsMobileMenuOpen(false); }}
                >
                  О компании
                </a>
                <Link 
                  to="/faq" 
                  className="block py-2 text-sm font-medium hover:text-success transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
                <a 
                  href="/#contacts" 
                  className="block py-2 text-sm font-medium hover:text-success transition-colors"
                  onClick={(e) => { handleAnchorClick(e, 'contacts'); setIsMobileMenuOpen(false); }}
                >
                  Контакты
                </a>
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center space-x-2 text-success font-semibold">
                    <Icon name="Phone" size={16} />
                    <a href="tel:+79015000078" className="hover:underline">+7 (901) 500-00-78</a>
                  </div>
                  <div className="flex items-center space-x-2 text-success font-semibold mt-2">
                    <Icon name="Phone" size={16} />
                    <a href="tel:+79015000087" className="hover:underline">+7 (901) 500-00-87</a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}