import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface CityHeaderProps {
  onAnchorClick: (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => void;
}

export default function CityHeader({ onAnchorClick }: CityHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="py-4 border-b bg-card sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <a href="/" className="text-2xl font-bold text-primary">NetConnect</a>
            
            <div className="hidden md:flex items-center space-x-6">
              <a href="/#services" onClick={(e) => onAnchorClick(e, '#services')} className="text-muted-foreground hover:text-foreground transition-colors">Услуги</a>
              <a href="/#tariffs" onClick={(e) => onAnchorClick(e, '#tariffs')} className="text-muted-foreground hover:text-foreground transition-colors">Тарифы</a>
              <a href="/#coverage" onClick={(e) => onAnchorClick(e, '#coverage')} className="text-muted-foreground hover:text-foreground transition-colors">Покрытие</a>
              <a href="/signal-boost" className="text-muted-foreground hover:text-foreground transition-colors">Усиление 4G/LTE</a>
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
            <div className="md:hidden mt-4 py-4 border-t border-border">
              <div className="space-y-4">
                <a 
                  href="/#services" 
                  className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={(e) => { onAnchorClick(e, '#services'); setIsMobileMenuOpen(false); }}
                >
                  Услуги
                </a>
                <a 
                  href="/#tariffs" 
                  className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={(e) => { onAnchorClick(e, '#tariffs'); setIsMobileMenuOpen(false); }}
                >
                  Тарифы
                </a>
                <a 
                  href="/#coverage" 
                  className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={(e) => { onAnchorClick(e, '#coverage'); setIsMobileMenuOpen(false); }}
                >
                  Покрытие
                </a>
                <a 
                  href="/signal-boost" 
                  className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Усиление 4G/LTE
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