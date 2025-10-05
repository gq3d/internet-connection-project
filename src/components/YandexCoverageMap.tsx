import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/icon';

declare global {
  interface Window {
    ymaps: any;
  }
}

export default function YandexCoverageMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window.ymaps !== 'undefined') {
      setMapLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
    script.async = true;
    script.onload = () => {
      window.ymaps.ready(() => {
        setMapLoaded(true);
      });
    };
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    if (!mapLoaded || !mapRef.current) return;

    window.ymaps.ready(() => {
      const map = new window.ymaps.Map(mapRef.current, {
        center: [55.751244, 37.618423],
        zoom: 7,
        controls: ['zoomControl', 'fullscreenControl', 'geolocationControl']
      });

      const outerCoverageCircle = new window.ymaps.Circle(
        [[55.751244, 37.618423], 180000],
        {
          hintContent: 'Галактический охват',
          balloonContent: '<strong>Галактический охват</strong><br/>Интернет доступен даже в самых отдалённых точках'
        },
        {
          fillColor: '#8b5cf6',
          fillOpacity: 0.25,
          strokeColor: '#8b5cf6',
          strokeOpacity: 0.6,
          strokeWidth: 3
        }
      );
      map.geoObjects.add(outerCoverageCircle);

      const innerCoverageCircle = new window.ymaps.Circle(
        [[55.751244, 37.618423], 68000],
        {
          hintContent: 'Орбитальное покрытие',
          balloonContent: '<strong>Орбитальное покрытие</strong><br/>Высокая скорость и стабильность'
        },
        {
          fillColor: '#10b981',
          fillOpacity: 0.35,
          strokeColor: '#10b981',
          strokeOpacity: 0.7,
          strokeWidth: 3
        }
      );
      map.geoObjects.add(innerCoverageCircle);

      const blueCoverageCircle = new window.ymaps.Circle(
        [[55.751244, 37.618423], 34000],
        {
          hintContent: 'Космическая скорость',
          balloonContent: '<strong>Космическая скорость</strong><br/>Молниеносное подключение без задержек'
        },
        {
          fillColor: '#3b82f6',
          fillOpacity: 0.4,
          strokeColor: '#3b82f6',
          strokeOpacity: 0.8,
          strokeWidth: 3
        }
      );
      map.geoObjects.add(blueCoverageCircle);

      mapInstanceRef.current = map;
    });
  }, [mapLoaded]);

  return (
    <div id="coverage-map" className="bg-card border rounded-lg p-6 md:p-8 scroll-mt-20">
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Icon name="Map" size={28} className="text-primary" />
          Карта покрытия интернета
        </h3>
        <p className="text-muted-foreground">
          Зона покрытия — Москва, Московская область и соседние регионы
        </p>
      </div>

      <div 
        ref={mapRef} 
        className="w-full h-[500px] md:h-[600px] rounded-lg border-2 border-muted overflow-hidden"
        style={{ position: 'relative' }}
      >
        {!mapLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
            <div className="text-center">
              <Icon name="Loader2" size={48} className="text-primary animate-spin mx-auto mb-4" />
              <p className="text-muted-foreground">Загрузка карты...</p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <div className="bg-muted/50 rounded-lg p-4 border">
          <h4 className="font-semibold mb-3 flex items-center gap-2">
            <Icon name="Info" size={18} className="text-primary" />
            Легенда
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-500/40 border-2 border-blue-500"></div>
              <span>Космическая скорость</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-500/35 border-2 border-emerald-500"></div>
              <span>Орбитальное покрытие</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-violet-500/25 border-2 border-violet-500"></div>
              <span>Галактический охват</span>
            </div>
          </div>
        </div>

        <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
          <Icon name="Lightbulb" size={20} className="text-primary mb-2" />
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Совет:</strong> Используйте масштабирование и перемещение карты для навигации. Чем ближе к центру — тем выше скорость!
          </p>
        </div>
      </div>

      <div className="mt-4 relative overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-2xl p-6 border-2 border-primary/30">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
        
        <div className="relative z-10">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 bg-primary/20 rounded-xl">
              <Icon name="Radar" size={24} className="text-primary" />
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-1 flex items-center gap-2">
                Точная проверка покрытия
                <Icon name="Sparkles" size={18} className="text-primary" />
              </h4>
              <p className="text-sm text-muted-foreground">
                Карта показывает общую зону покрытия. Качество сигнала может варьироваться в зависимости от вашего местоположения.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-card/80 backdrop-blur-sm rounded-xl border border-primary/20">
            <div className="flex items-center gap-3 flex-1">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Icon name="Phone" size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Узнайте точное покрытие</p>
                <a 
                  href="tel:+79015000078" 
                  className="text-xl font-bold text-primary hover:text-primary/80 transition-colors"
                >
                  +7 (901) 500-00-78
                </a>
              </div>
            </div>
            <a
              href="tel:+79015000078"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 flex items-center gap-2 shadow-lg shadow-primary/25"
            >
              <Icon name="PhoneCall" size={18} />
              Позвонить сейчас
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}