import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { settlements } from '@/data/settlements';

interface CitySettlementsListProps {
  citySlug: string;
  cityNameGenitive: string;
}

const getTypeLabel = (type: string): string => {
  switch (type) {
    case 'village': return 'Деревня';
    case 'settlement': return 'Посёлок';
    case 'cottage': return 'КП';
    case 'snt': return 'СНТ';
    default: return type;
  }
};

export default function CitySettlementsList({ citySlug, cityNameGenitive }: CitySettlementsListProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const citySettlements = settlements.filter(s => s.city === citySlug);

  if (citySettlements.length === 0) {
    return null;
  }

  const groupedByType = citySettlements.reduce((acc, settlement) => {
    if (!acc[settlement.type]) {
      acc[settlement.type] = [];
    }
    acc[settlement.type].push(settlement);
    return acc;
  }, {} as Record<string, typeof citySettlements>);

  Object.keys(groupedByType).forEach(type => {
    groupedByType[type].sort((a, b) => a.name.localeCompare(b.name, 'ru'));
  });

  const allSettlementsText = citySettlements.map(s => s.name).join(', ');

  return (
    <div className="mt-16" itemScope itemType="https://schema.org/ItemList">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Населённые пункты в {cityNameGenitive}
        </h2>
        <p className="text-muted-foreground text-lg">
          Полный список деревень, посёлков и СНТ с доступным подключением
        </p>
      </div>

      <noscript>
        <div className="bg-card rounded-2xl border-2 border-border p-6 mb-4">
          <h3 className="text-xl font-bold mb-4">
            Список всех {citySettlements.length} населённых пунктов:
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {allSettlementsText}
          </p>
        </div>
      </noscript>

      <div className="bg-card rounded-2xl border-2 border-border overflow-hidden">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full p-6 flex items-center justify-between hover:bg-muted/50 transition-colors"
          aria-expanded={isExpanded}
          aria-label={`${isExpanded ? 'Скрыть' : 'Показать'} список населённых пунктов`}
        >
          <div className="flex items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-lg">
              <Icon name="MapPin" size={24} className="text-primary" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold">
                Список всех {citySettlements.length} населённых пунктов
              </h3>
              <p className="text-sm text-muted-foreground">
                {isExpanded ? "Скрыть список" : "Показать все деревни и посёлки"}
              </p>
            </div>
          </div>
          <Icon 
            name={isExpanded ? "ChevronUp" : "ChevronDown"} 
            size={28} 
            className="text-primary transition-transform"
          />
        </button>

        <div className={`p-6 pt-0 border-t border-border ${isExpanded ? '' : 'sr-only'}`}>
          <div className="bg-muted/30 rounded-xl p-6 max-h-[600px] overflow-y-auto">
            <div className="space-y-6">
              {Object.entries(groupedByType).map(([type, items]) => (
                <div key={type}>
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Icon name="MapPin" size={18} className="text-primary" />
                    {getTypeLabel(type)} ({items.length})
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {items.map((settlement, index) => (
                      <div 
                        key={`${settlement.name}-${index}`}
                        className="text-sm bg-background/50 rounded-lg px-3 py-2 hover:bg-background transition-colors"
                        itemProp="itemListElement"
                        itemScope
                        itemType="https://schema.org/Place"
                      >
                        <span itemProp="name">{settlement.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}