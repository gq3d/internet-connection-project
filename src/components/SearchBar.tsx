import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { cities } from '@/data/cities';

interface SearchSuggestion {
  title: string;
  url: string;
  type: 'page' | 'city' | 'service';
  description?: string;
}

const cityData: SearchSuggestion[] = cities.map(city => ({
  title: city.name,
  url: `/city/${city.slug}`,
  type: 'city' as const,
  description: city.region,
}));

const searchData: SearchSuggestion[] = [
  ...cityData,
  { title: 'Покрытие', url: '/coverage', type: 'page' },
  { title: 'Тарифы', url: '/tariffs', type: 'page' },
  { title: 'Стоимость подключения', url: '/pricing', type: 'page' },
  { title: 'Интернет', url: '/services/internet', type: 'service' },
  { title: 'Спутниковый интернет', url: '/services/satellite', type: 'service' },
  { title: 'Wi-Fi', url: '/services/wifi', type: 'service' },
  { title: 'Установка Wi-Fi', url: '/services/wifi-installation', type: 'service' },
  { title: 'Усиление Wi-Fi сигнала', url: '/services/wifi-signal-boost', type: 'service' },
  { title: 'Безопасность', url: '/services/security', type: 'service' },
  { title: 'Видеонаблюдение', url: '/services/surveillance', type: 'service' },
  { title: 'IP камеры', url: '/services/cameras/ip-cameras', type: 'service' },
  { title: '4K камеры', url: '/services/cameras/4k-cameras', type: 'service' },
  { title: 'PTZ камеры', url: '/services/cameras/ptz-cameras', type: 'service' },
  { title: 'Тепловизионные камеры', url: '/services/cameras/thermal-cameras', type: 'service' },
  { title: 'Охранная сигнализация', url: '/services/alarm-security', type: 'service' },
  { title: 'Контроль доступа', url: '/services/access-control', type: 'service' },
  { title: 'Пожарная безопасность', url: '/services/fire-safety', type: 'service' },
  { title: 'Усилитель сотовой связи', url: '/services/cellular-booster', type: 'service' },
  { title: 'Усиление 4G/LTE', url: '/signal-boost', type: 'page' },
  { title: 'eSIM', url: '/esim', type: 'page' },
  { title: 'Глобальный eSIM', url: '/esim/global', type: 'service' },
  { title: 'eSIM для Европы', url: '/esim/europe', type: 'service' },
  { title: 'eSIM для Азии', url: '/esim/asia', type: 'service' },
  { title: 'Высокая скорость', url: '/high-speed', type: 'page' },
  { title: 'Стабильное соединение', url: '/stable-connection', type: 'page' },
  { title: 'Безопасное подключение', url: '/secure-connection', type: 'page' },
  { title: 'Интернет для детей', url: '/kids-internet', type: 'page' },
  { title: 'Быстрая настройка', url: '/fast-setup', type: 'page' },
  { title: 'FAQ', url: '/faq', type: 'page' },
  { title: 'Услуги', url: '/services', type: 'page' },
];

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyboardShortcut = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyboardShortcut);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyboardShortcut);
    };
  }, []);

  useEffect(() => {
    if (query.trim().length > 0) {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 6);
      setSuggestions(filtered);
      setIsOpen(true);
      setSelectedIndex(-1);
    } else {
      setSuggestions([]);
      setIsOpen(false);
    }
  }, [query]);

  const handleSelect = (url: string) => {
    navigate(url);
    setQuery('');
    setIsOpen(false);
    inputRef.current?.blur();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev < suggestions.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      e.preventDefault();
      handleSelect(suggestions[selectedIndex].url);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      inputRef.current?.blur();
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'city':
        return 'MapPin';
      case 'service':
        return 'Wrench';
      default:
        return 'FileText';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'city':
        return 'Город';
      case 'service':
        return 'Услуга';
      default:
        return 'Страница';
    }
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-[200px]">
      <div className="relative">
        <Icon 
          name="Search" 
          size={16} 
          className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground/60 pointer-events-none" 
        />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query.trim().length > 0 && setIsOpen(true)}
          placeholder="Поиск..."
          className="w-full pl-9 pr-9 py-1.5 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-muted-foreground/60"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setIsOpen(false);
            }}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground/60 hover:text-foreground transition-colors"
          >
            <Icon name="X" size={14} />
          </button>
        )}
      </div>

      {isOpen && suggestions.length > 0 && (
        <div className="absolute top-full mt-2 w-max min-w-[300px] max-w-[400px] bg-white rounded-lg shadow-lg border border-border overflow-hidden z-50 right-0">
          {suggestions.map((suggestion, index) => (
            <button
              key={suggestion.url}
              onClick={() => handleSelect(suggestion.url)}
              className={`w-full px-4 py-3 flex items-center gap-3 hover:bg-accent transition-colors text-left ${
                index === selectedIndex ? 'bg-accent' : ''
              }`}
              onMouseEnter={() => setSelectedIndex(index)}
            >
              <Icon name={getTypeIcon(suggestion.type)} size={16} className="text-primary flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm truncate">{suggestion.title}</div>
                <div className="text-xs text-muted-foreground">
                  {suggestion.description || getTypeLabel(suggestion.type)}
                </div>
              </div>
              <Icon name="ArrowRight" size={14} className="text-muted-foreground flex-shrink-0" />
            </button>
          ))}
        </div>
      )}

      {isOpen && query.trim().length > 0 && suggestions.length === 0 && (
        <div className="absolute top-full mt-2 w-max min-w-[250px] bg-white rounded-lg shadow-lg border border-border p-4 z-50 right-0">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Icon name="Search" size={16} />
            <span>Ничего не найдено</span>
          </div>
        </div>
      )}
    </div>
  );
}