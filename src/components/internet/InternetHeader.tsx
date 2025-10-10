import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { useAnchorScroll } from '@/hooks/useAnchorScroll';

const InternetHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { handleAnchorClick } = useAnchorScroll();

  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Satellite" size={32} className="text-primary" />
            <a href="/" className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">NetConnect</a>
          </div>
          
          <nav className="hidden lg:flex items-center gap-3 xl:gap-4">
            <a href="/services" className="text-sm font-medium hover:text-success transition-colors whitespace-nowrap">Услуги</a>
            <a href="/tariffs" className="text-sm font-medium hover:text-success transition-colors whitespace-nowrap">Тарифы</a>
            <a href="/pricing" className="text-sm font-medium hover:text-success transition-colors whitespace-nowrap">Стоимость</a>
            <a href="/coverage" className="text-sm font-medium hover:text-success transition-colors whitespace-nowrap">Покрытие</a>
            <a href="/signal-boost" className="text-sm font-medium hover:text-success transition-colors whitespace-nowrap">Усиление 4G/LTE</a>
            <a href="/esim" className="text-sm font-medium hover:text-success transition-colors whitespace-nowrap">eSIM</a>
            <a href="/#about" onClick={(e) => handleAnchorClick(e, 'about')} className="text-sm font-medium hover:text-success transition-colors whitespace-nowrap">О компании</a>
            <a href="/faq" className="text-sm font-medium hover:text-success transition-colors whitespace-nowrap">FAQ</a>
            <a href="/#contacts" onClick={(e) => handleAnchorClick(e, 'contacts')} className="text-sm font-medium hover:text-success transition-colors whitespace-nowrap">Контакты</a>
            <a 
              href="tel:+79015000078" 
              className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm whitespace-nowrap"
            >
              <Icon name="Phone" size={16} className="mr-2" />
              <span className="hidden xl:inline">+7 (901) 500-00-78</span>
              <span className="xl:hidden">Позвонить</span>
            </a>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <a 
              href="tel:+79015000078" 
              className="inline-flex items-center justify-center w-10 h-10 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              aria-label="Позвонить"
            >
              <Icon name="Phone" size={20} />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label="Меню"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-border">
            <div className="space-y-4">
              <a href="/services" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-medium hover:text-success transition-colors">Услуги</a>
              <a href="/tariffs" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-medium hover:text-success transition-colors">Тарифы</a>
              <a href="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-medium hover:text-success transition-colors">Стоимость</a>
              <a href="/coverage" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-medium hover:text-success transition-colors">Покрытие</a>
              <a href="/signal-boost" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-medium hover:text-success transition-colors">Усиление 4G/LTE</a>
              <a href="/esim" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-medium hover:text-success transition-colors">eSIM</a>
              <a href="/#about" onClick={(e) => { handleAnchorClick(e, 'about'); setIsMobileMenuOpen(false); }} className="block py-2 text-sm font-medium hover:text-success transition-colors">О компании</a>
              <a href="/faq" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-medium hover:text-success transition-colors">FAQ</a>
              <a href="/#contacts" onClick={(e) => { handleAnchorClick(e, 'contacts'); setIsMobileMenuOpen(false); }} className="block py-2 text-sm font-medium hover:text-success transition-colors">Контакты</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default InternetHeader;