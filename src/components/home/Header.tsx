import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { useAnchorScroll } from '@/hooks/useAnchorScroll';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { handleAnchorClick } = useAnchorScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <>
      <header className={`border-b sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-2xl border-primary/20' 
          : 'bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60'
      }`}>
        <div className={`container mx-auto px-4 transition-all duration-300 ${
          isScrolled ? 'py-2' : 'py-4'
        }`}>
          <div className="flex items-center justify-between">
            <Link to="/" className={`flex items-center space-x-2 transition-all duration-300 ${
              isScrolled ? 'scale-90' : 'scale-100'
            }`}>
              <Icon name="Satellite" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-primary">NetConnect</span>
            </Link>
            
            {/* Mobile Quick Actions */}
            <div className="flex md:hidden items-center gap-2">
              <a 
                href="tel:+79015000078" 
                className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
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

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-4">
              <a href="/#services" onClick={(e) => handleAnchorClick(e, 'services')} className="text-sm font-medium hover:text-success transition-colors">Услуги</a>
              <a href="/#tariffs" onClick={(e) => handleAnchorClick(e, 'tariffs')} className="text-sm font-medium hover:text-success transition-colors">Тарифы</a>
              <a href="/#pricing" onClick={(e) => handleAnchorClick(e, 'pricing')} className="text-sm font-medium hover:text-success transition-colors">Стоимость</a>
              <a href="/#coverage" onClick={(e) => handleAnchorClick(e, 'coverage')} className="text-sm font-medium hover:text-success transition-colors">Покрытие</a>
              <Link to="/signal-boost" className="text-sm font-medium hover:text-success transition-colors">Усиление 4G/LTE</Link>
              <a href="/#esim" onClick={(e) => handleAnchorClick(e, 'esim')} className="text-sm font-medium hover:text-success transition-colors">eSIM</a>
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
            </nav>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-border">
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
                <a 
                  href="/#pricing" 
                  className="block py-2 text-sm font-medium hover:text-success transition-colors"
                  onClick={(e) => { handleAnchorClick(e, 'pricing'); setIsMobileMenuOpen(false); }}
                >
                  Стоимость
                </a>
                <a 
                  href="/#coverage" 
                  className="block py-2 text-sm font-medium hover:text-success transition-colors"
                  onClick={(e) => { handleAnchorClick(e, 'coverage'); setIsMobileMenuOpen(false); }}
                >
                  Покрытие
                </a>
                {location.pathname !== '/signal-boost' && (
                  <Link 
                    to="/signal-boost" 
                    className="block py-2 text-sm font-medium hover:text-success transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Усиление 4G/LTE
                  </Link>
                )}
                <a 
                  href="/#esim" 
                  className="block py-2 text-sm font-medium hover:text-success transition-colors"
                  onClick={(e) => { handleAnchorClick(e, 'esim'); setIsMobileMenuOpen(false); }}
                >
                  eSIM
                </a>
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

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}