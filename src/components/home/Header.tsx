import { useState } from 'react';
import Icon from '@/components/ui/icon';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Satellite" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-primary">NetConnect</span>
            </div>
            
            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-4">
              <a href="#services" className="text-sm font-medium hover:text-success transition-colors">Услуги</a>
              <a href="#tariffs" className="text-sm font-medium hover:text-success transition-colors">Тарифы</a>
              <a href="#pricing" className="text-sm font-medium hover:text-success transition-colors">Стоимость</a>
              <a href="#esim" className="text-sm font-medium hover:text-success transition-colors">eSIM</a>
              <a href="#coverage" className="text-sm font-medium hover:text-success transition-colors">Покрытие</a>
              <a href="#about" className="text-sm font-medium hover:text-success transition-colors">О компании</a>
              <a href="/faq" className="text-sm font-medium hover:text-success transition-colors">FAQ</a>
              <a href="#contacts" className="text-sm font-medium hover:text-success transition-colors">Контакты</a>
              <a 
                href="tel:+79015000078" 
                className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                <Icon name="Phone" size={16} className="mr-2" />
                +7 (901) 500-00-78
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label="Меню"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-border">
              <div className="space-y-4">
                <a 
                  href="#services" 
                  className="block py-2 text-sm font-medium hover:text-success transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Услуги
                </a>
                <a 
                  href="#tariffs" 
                  className="block py-2 text-sm font-medium hover:text-success transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Тарифы
                </a>
                <a 
                  href="#pricing" 
                  className="block py-2 text-sm font-medium hover:text-success transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Стоимость
                </a>
                <a 
                  href="#esim" 
                  className="block py-2 text-sm font-medium hover:text-success transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  eSIM
                </a>
                <a 
                  href="#coverage" 
                  className="block py-2 text-sm font-medium hover:text-success transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Покрытие
                </a>
                <a 
                  href="#about" 
                  className="block py-2 text-sm font-medium hover:text-success transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  О компании
                </a>
                <a 
                  href="/faq" 
                  className="block py-2 text-sm font-medium hover:text-success transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQ
                </a>
                <a 
                  href="#contacts" 
                  className="block py-2 text-sm font-medium hover:text-success transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
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