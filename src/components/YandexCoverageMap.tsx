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
          hintContent: 'Зона покрытия NetConnect',
          balloonContent: '<strong>Зона покрытия интернета</strong><br/>Москва и Московская область + соседние регионы'
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
          hintContent: 'Зона приоритетного покрытия',
          balloonContent: '<strong>Зона приоритетного покрытия</strong><br/>Центральная зона с максимальной скоростью'
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
          hintContent: 'Центральная зона',
          balloonContent: '<strong>Центральная зона</strong><br/>Зона с максимальной скоростью подключения'
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
    <div className="bg-card border rounded-lg p-6 md:p-8">
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
              <span>Центральная зона</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-500/35 border-2 border-emerald-500"></div>
              <span>Зона приоритетного покрытия</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-violet-500/25 border-2 border-violet-500"></div>
              <span>Расширенная зона покрытия</span>
            </div>
          </div>
        </div>

        <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
          <Icon name="Lightbulb" size={20} className="text-primary mb-2" />
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Совет:</strong> Используйте масштабирование и перемещение карты для навигации. Фиолетовая зона — доступно подключение.
          </p>
        </div>
      </div>

      <div className="mt-4 bg-muted/50 rounded-lg p-4 border">
        <div className="flex items-start gap-3">
          <Icon name="Info" size={20} className="text-primary flex-shrink-0 mt-0.5" />
          <div className="text-sm text-muted-foreground">
            <p>
              <strong className="text-foreground">Обратите внимание:</strong> карта показывает общую зону покрытия. Качество сигнала и доступные тарифы могут варьироваться в зависимости от конкретного местоположения.
            </p>
            <p className="mt-2">
              Для точной проверки покрытия на вашем объекте звоните <a href="tel:+79015000078" className="text-primary hover:underline font-semibold">+7 (901) 500-00-78</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}