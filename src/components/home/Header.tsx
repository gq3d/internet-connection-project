import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const contactsSection = document.getElementById('contacts');
      if (contactsSection) {
        contactsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

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
              <Link to="/services" className="text-sm font-medium hover:text-success transition-colors">Услуги</Link>
              <Link to="/tariffs" className="text-sm font-medium hover:text-success transition-colors">Тарифы</Link>
              <Link to="/pricing" className="text-sm font-medium hover:text-success transition-colors">Стоимость</Link>
              <Link to="/coverage" className="text-sm font-medium hover:text-success transition-colors">Покрытие</Link>
              <Link to="/signal-boost" className="text-sm font-medium hover:text-success transition-colors">Усиление 4G/LTE</Link>
              <Link to="/esim" className="text-sm font-medium hover:text-success transition-colors">eSIM</Link>
              <a href="/#about" onClick={handleAboutClick} className="text-sm font-medium hover:text-success transition-colors">О компании</a>
              <Link to="/faq" className="text-sm font-medium hover:text-success transition-colors">FAQ</Link>
              <a href="/#contacts" onClick={handleContactsClick} className="text-sm font-medium hover:text-success transition-colors">Контакты</a>
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
                {location.pathname !== '/signal-boost' && (
                  <Link 
                    to="/signal-boost" 
                    className="block py-2 text-sm font-medium hover:text-success transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Усиление 4G/LTE
                  </Link>
                )}
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
                  onClick={handleAboutClick}
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
                  onClick={handleContactsClick}
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