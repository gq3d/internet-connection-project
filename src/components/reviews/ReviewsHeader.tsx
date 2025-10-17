import { useState } from 'react';
import Icon from '@/components/ui/icon';
import SearchBar from '@/components/SearchBar';

export default function ReviewsHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Wifi" size={32} className="text-primary" />
            <a href="/" className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">NetConnect</a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-4">
            <SearchBar />
            <a href="/services" className="text-sm font-medium hover:text-success transition-colors">Услуги</a>
            <a href="/tariffs" className="text-sm font-medium hover:text-success transition-colors">Тарифы</a>
            <a href="/pricing" className="text-sm font-medium hover:text-success transition-colors">Стоимость</a>
            <a href="/coverage" className="text-sm font-medium hover:text-success transition-colors">Покрытие</a>
            <a href="/signal-boost" className="text-sm font-medium hover:text-success transition-colors">Усиление 4G/LTE</a>
            <a href="/esim" className="text-sm font-medium hover:text-success transition-colors">eSIM</a>
            <a href="/#about" className="text-sm font-medium hover:text-success transition-colors">О компании</a>
            <a href="/faq" className="text-sm font-medium hover:text-success transition-colors">FAQ</a>
            <a href="/#contacts" className="text-sm font-medium hover:text-success transition-colors">Контакты</a>
            <a 
              href="tel:+79015000078" 
              className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              <Icon name="Phone" size={16} className="mr-2" />
              +7 (901) 500-00-78
            </a>
          </nav>

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
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <div className="mb-4">
              <SearchBar />
            </div>
            <div className="space-y-4">
              <a href="/services" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-medium hover:text-success transition-colors">Услуги</a>
              <a href="/tariffs" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-medium hover:text-success transition-colors">Тарифы</a>
              <a href="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-medium hover:text-success transition-colors">Стоимость</a>
              <a href="/coverage" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-medium hover:text-success transition-colors">Покрытие</a>
              <a href="/signal-boost" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-medium hover:text-success transition-colors">Усиление 4G/LTE</a>
              <a href="/esim" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-medium hover:text-success transition-colors">eSIM</a>
              <a href="/#about" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-medium hover:text-success transition-colors">О компании</a>
              <a href="/faq" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-medium hover:text-success transition-colors">FAQ</a>
              <a href="/#contacts" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-medium hover:text-success transition-colors">Контакты</a>
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
  );
}