import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { useAnchorScroll } from '@/hooks/useAnchorScroll';
import SearchBar from '@/components/SearchBar';

export default function CityHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { handleAnchorClick } = useAnchorScroll();

  return (
    <>
      <header className="py-4 border-b bg-card sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-4">
            <a href="/" className="text-2xl font-bold text-primary flex-shrink-0">NetConnect</a>
            
            <div className="hidden lg:flex items-center gap-3 flex-1 justify-end">
              <SearchBar />
              <Link to="/services" className="text-sm font-medium hover:text-success transition-colors whitespace-nowrap">Услуги</Link>
              <Link to="/tariffs" className="text-sm font-medium hover:text-success transition-colors whitespace-nowrap">Тарифы</Link>
              <Link to="/coverage" className="text-sm font-medium hover:text-success transition-colors whitespace-nowrap">Покрытие</Link>
              <a 
                href="tel:+79015000078" 
                className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium whitespace-nowrap flex-shrink-0"
              >
                <Icon name="Phone" size={16} className="mr-2" />
                +7 (901) 500-00-78
              </a>
            </div>
            
            <div className="hidden md:flex lg:hidden items-center gap-2">
              <SearchBar />
              <a 
                href="tel:+79015000078" 
                className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium whitespace-nowrap"
              >
                <Icon name="Phone" size={16} className="mr-2" />
                +7 (901) 500-00-78
              </a>
            </div>

            <div className="flex md:hidden items-center gap-2">
              <a 
                href="tel:+79015000078" 
                className="inline-flex items-center justify-center w-10 h-10 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                aria-label="Позвонить"
              >
                <Icon name="Phone" size={20} />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-accent transition-colors"
                aria-label="Меню"
              >
                <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-border">
              <div className="space-y-4">
                <Link 
                  to="/services" 
                  className="block py-2 text-sm font-medium hover:text-success transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Услуги
                </Link>
                <Link 
                  to="/tariffs" 
                  className="block py-2 text-sm font-medium hover:text-success transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Тарифы
                </Link>
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