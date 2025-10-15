import { useState } from 'react';
import Icon from '@/components/ui/icon';
import CountryList from './CountryList';

export default function CountryCoverageInfo() {
  const [showAllCountries, setShowAllCountries] = useState(false);

  return (
    <div className="mt-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Техническая информация о покрытии
        </h2>
        <p className="text-muted-foreground text-lg">
          Полный список из 106 стран с указанием операторов и поддерживаемых технологий связи
        </p>
      </div>

      <div className="bg-card rounded-2xl border-2 border-border overflow-hidden">
        <button
          onClick={() => setShowAllCountries(!showAllCountries)}
          className="w-full p-6 flex items-center justify-between hover:bg-muted/50 transition-colors"
        >
          <div className="flex items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-lg">
              <Icon name="Globe" size={24} className="text-primary" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold">Список всех 106 стран</h3>
              <p className="text-sm text-muted-foreground">
                {showAllCountries ? "Скрыть подробную информацию" : "Показать операторов и технологии связи"}
              </p>
            </div>
          </div>
          <Icon 
            name={showAllCountries ? "ChevronUp" : "ChevronDown"} 
            size={28} 
            className="text-primary transition-transform"
          />
        </button>

        {showAllCountries && (
          <div className="p-6 pt-0 border-t border-border">
            <div className="bg-muted/30 rounded-xl p-6 max-h-[600px] overflow-y-auto">
              <CountryList />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
