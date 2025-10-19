import { useEffect, useRef, useState, useMemo } from 'react';
import Icon from '@/components/ui/icon';
import SpeedTest from '@/components/SpeedTest';
import YandexCoverageMap from '@/components/YandexCoverageMap';
import UnblockedServicesBadge from '@/components/UnblockedServicesBadge';
import { cities } from '@/data/cities';
import { settlements } from '@/data/settlements';

export default function CoverageSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) {
      return { cities, settlements: [] };
    }

    const query = searchQuery.toLowerCase();

    const filteredCities = cities.filter(city => 
      city.name.toLowerCase().includes(query) ||
      city.region.toLowerCase().includes(query) ||
      city.district.toLowerCase().includes(query)
    );

    const matchedSettlements = settlements.filter(settlement =>
      settlement.name.toLowerCase().includes(query)
    );

    return { cities: filteredCities, settlements: matchedSettlements };
  }, [searchQuery]);

  const totalResults = searchResults.cities.length + searchResults.settlements.length;

  return (
    <section id="coverage" className="py-20" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Icon name="MapPin" size={20} className="text-primary mr-2" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Зона покрытия</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight">
            Карта покрытия интернета<br />в Московской области
          </h2>
          <div className={`h-1 mx-auto mb-6 bg-gradient-to-r from-primary via-secondary to-primary rounded-full transition-all duration-1000 ${isVisible ? 'w-32' : 'w-0'}`}></div>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-8">
          <YandexCoverageMap />

          <div className="bg-gradient-to-br from-card via-card to-primary/5 border border-primary/20 rounded-2xl p-8 md:p-10 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Мы предоставляем доступ к <span className="font-semibold text-foreground">беспроводному</span> и <span className="font-semibold text-foreground">высокоскоростному</span> интернету в различных районах Московской области, включая крупные города, пригороды, дачи и удалённые населённые пункты.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <div className="group inline-flex items-center px-5 py-3 bg-gradient-to-r from-success/10 to-success/5 border border-success/20 rounded-xl hover:scale-105 transition-all duration-300 cursor-default shadow-sm hover:shadow-md">
                <Icon name="Wifi" size={20} className="text-success mr-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold">Беспроводной интернет</span>
              </div>
              <div className="group inline-flex items-center px-5 py-3 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl hover:scale-105 transition-all duration-300 cursor-default shadow-sm hover:shadow-md">
                <Icon name="Zap" size={20} className="text-primary mr-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold">Высокая скорость</span>
              </div>
              <div className="group inline-flex items-center px-5 py-3 bg-gradient-to-r from-secondary/10 to-secondary/5 border border-secondary/20 rounded-xl hover:scale-105 transition-all duration-300 cursor-default shadow-sm hover:shadow-md">
                <Icon name="MapPin" size={20} className="text-secondary mr-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold">Вся область</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center my-8">
            <UnblockedServicesBadge linkTo="/services/internet" />
          </div>

          <div className="mb-8">
            <SpeedTest />
          </div>
          
          <div className="bg-card border rounded-lg p-4 md:p-8">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-center">
              Основные регионы и города 
              <span className="block md:inline text-muted-foreground text-sm md:text-lg mt-1 md:mt-0"> (список минимальный, для примера)</span>
            </h3>

            <div className="mb-6">
              <div className="relative max-w-2xl mx-auto">
                <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground z-10" />
                <input
                  type="text"
                  placeholder="Поиск города или района..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 bg-background border-2 border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all text-base"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground hover:bg-accent rounded-full transition-all z-10"
                    aria-label="Очистить поиск"
                  >
                    <Icon name="X" size={20} />
                  </button>
                )}
              </div>

              {searchQuery && (
                <div className="text-sm text-muted-foreground text-center mt-3">
                  Найдено: <span className="font-semibold text-foreground">{totalResults}</span> {totalResults === 1 ? 'результат' : totalResults < 5 ? 'результата' : 'результатов'}
                  {searchResults.cities.length > 0 && ` (${searchResults.cities.length} ${searchResults.cities.length === 1 ? 'город' : 'города'})`}
                  {searchResults.settlements.length > 0 && ` (${searchResults.settlements.length} ${searchResults.settlements.length === 1 ? 'населённый пункт' : 'населённых пункта'})`}
                </div>
              )}
            </div>
            
            {totalResults > 0 ? (
              <div className="space-y-6">
                {searchResults.cities.length > 0 && (
                  <div>
                    {searchQuery && <h4 className="text-lg font-semibold mb-4">Города и районы</h4>}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                      {searchResults.cities.map((city) => (
                        <a
                          key={city.name}
                          href={`/city/${city.slug}`}
                          className="bg-accent/30 rounded-lg p-4 border hover:bg-accent/50 transition-colors group"
                        >
                          <div className="flex items-center justify-start md:justify-center mb-1">
                            <Icon name="MapPin" size={16} className="text-success mr-2 flex-shrink-0 group-hover:scale-110 transition-transform" />
                            <span className="font-medium group-hover:text-primary transition-colors text-left md:text-center">{city.name}</span>
                          </div>
                          <div className="text-xs text-muted-foreground text-left md:text-center">{city.region}</div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {searchResults.settlements.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Населённые пункты</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                      {searchResults.settlements.map((settlement, index) => {
                        const parentCity = cities.find(c => c.slug === settlement.city);
                        const settlementTypeLabel = {
                          village: 'Деревня',
                          settlement: 'Посёлок',
                          cottage: 'КП',
                          snt: 'СНТ'
                        }[settlement.type];

                        return (
                          <a
                            key={`${settlement.name}-${settlement.city}-${index}`}
                            href={`/city/${settlement.city}`}
                            className="bg-accent/30 rounded-lg p-4 border hover:bg-accent/50 transition-colors group"
                          >
                            <div className="flex items-center justify-start md:justify-center mb-1">
                              <Icon name="Home" size={16} className="text-primary mr-2 flex-shrink-0 group-hover:scale-110 transition-transform" />
                              <span className="font-medium group-hover:text-primary transition-colors text-left md:text-center">{settlement.name}</span>
                            </div>
                            <div className="text-xs text-muted-foreground text-left md:text-center">
                              {settlementTypeLabel} • {parentCity?.name || settlement.city}
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-12">
                <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4 opacity-50" />
                <p className="text-lg text-muted-foreground">Ничего не найдено</p>
                <p className="text-sm text-muted-foreground mt-2">Попробуйте изменить поисковый запрос</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all"
                >
                  Показать все города
                </button>
              </div>
            )}
          </div>

          <div className="bg-muted/50 border rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <Icon name="Info" size={24} className="text-primary flex-shrink-0 mt-1" />
              <div className="space-y-3 text-muted-foreground">
                <p>
                  <strong>Обратите внимание:</strong> полную карту покрытия мы не публикуем, так как в разных районах существуют различные тарифные зоны, а также разный уровень приема связи и сигналов, который может незначительно отличаться от места к месту.
                </p>
                <p>
                  На самом деле, покрытие осуществляется по всей территории Московской области, поэтому даже на самой удаленной даче или на удаленном складе связь работает.
                </p>
                <p>
                  <strong>Звоните нам</strong>, и мы дадим вам подробную информацию о возможностях подключения вашего конкретного адреса с учетом всех нюансов зоны покрытия.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}