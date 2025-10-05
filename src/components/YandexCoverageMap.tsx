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
  const [searchQuery, setSearchQuery] = useState('');
  const mapInstanceRef = useRef<any>(null);
  const searchMarkersRef = useRef<any[]>([]);

  useEffect(() => {
    if (typeof window.ymaps !== 'undefined') {
      setMapLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://api-maps.yandex.ru/2.1/?apikey=&lang=ru_RU';
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

      const coverageCircle = new window.ymaps.Circle(
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
      map.geoObjects.add(coverageCircle);

      const cities = [
        { name: 'Москва', coords: [55.751244, 37.618423] },
        { name: 'Тула', coords: [54.193122, 37.617348] },
        { name: 'Владимир', coords: [56.129042, 40.406635] },
        { name: 'Ржев', coords: [56.263333, 34.328056] },
        { name: 'Тверь', coords: [56.858917, 35.911789] },
        { name: 'Подольск', coords: [55.424740, 37.554622] },
        { name: 'Красногорск', coords: [55.820682, 37.330389] },
        { name: 'Химки', coords: [55.889050, 37.429680] },
        { name: 'Мытищи', coords: [55.911255, 37.730578] },
        { name: 'Люберцы', coords: [55.677544, 37.893933] },
        { name: 'Домодедово', coords: [55.443422, 37.751665] },
        { name: 'Сергиев Посад', coords: [56.300133, 38.137556] },
        { name: 'Коломна', coords: [55.078744, 38.778289] },
        { name: 'Зеленоград', coords: [55.991933, 37.211622] },
      ];

      cities.forEach((city) => {
        const placemark = new window.ymaps.Placemark(
          city.coords,
          {
            balloonContent: `<strong>${city.name}</strong><br/>Покрытие интернета доступно`,
            hintContent: city.name
          },
          {
            preset: 'islands#violetDotIcon',
            iconColor: '#8b5cf6'
          }
        );
        map.geoObjects.add(placemark);
      });

      mapInstanceRef.current = map;
    });
  }, [mapLoaded]);

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      return;
    }

    if (!mapLoaded || !window.ymaps || !mapInstanceRef.current) {
      console.error('Карта еще не загружена');
      return;
    }

    if (searchMarkersRef.current && searchMarkersRef.current.length > 0) {
      searchMarkersRef.current.forEach((marker) => {
        if (mapInstanceRef.current) {
          mapInstanceRef.current.geoObjects.remove(marker);
        }
      });
      searchMarkersRef.current = [];
    }

    window.ymaps.ready(() => {
      window.ymaps.geocode(searchQuery, {
        results: 1
      }).then((res: any) => {
        const firstGeoObject = res.geoObjects.get(0);
        if (firstGeoObject) {
          const coords = firstGeoObject.geometry.getCoordinates();
          const addressLine = firstGeoObject.getAddressLine();
          
          if (mapInstanceRef.current) {
            mapInstanceRef.current.setCenter(coords, 12, {
              duration: 300
            });
            
            const placemark = new window.ymaps.Placemark(
              coords,
              {
                balloonContent: `<strong>Найдено:</strong><br/>${addressLine}`,
                hintContent: addressLine
              },
              { 
                preset: 'islands#blueCircleDotIcon',
                iconColor: '#3b82f6'
              }
            );
            
            mapInstanceRef.current.geoObjects.add(placemark);
            
            if (!searchMarkersRef.current) {
              searchMarkersRef.current = [];
            }
            searchMarkersRef.current.push(placemark);
            
            setTimeout(() => {
              if (placemark && placemark.balloon) {
                placemark.balloon.open();
              }
            }, 400);
          }
        }
      }).catch((error: any) => {
        console.error('Ошибка геокодирования:', error);
      });
    });
  };

  return (
    <div className="bg-card border rounded-lg p-6 md:p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Icon name="Map" size={28} className="text-primary" />
          Карта покрытия интернета
        </h3>
        <p className="text-muted-foreground mb-4">
          Зона покрытия — Москва, Московская область и соседние регионы
        </p>

        <div className="mb-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Введите адрес для поиска..."
              className="flex-1 px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch();
                }
              }}
            />
            <button
              onClick={handleSearch}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <Icon name="Search" size={18} />
              Найти
            </button>
          </div>
        </div>
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
              <div className="w-6 h-6 rounded-full bg-violet-500/25 border-2 border-violet-500"></div>
              <span>Зона покрытия интернета</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="MapPin" size={20} className="text-violet-500" />
              <span>Основные города</span>
            </div>
          </div>
        </div>

        <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
          <Icon name="Lightbulb" size={20} className="text-primary mb-2" />
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Совет:</strong> Используйте поиск по адресу выше, чтобы проверить доступность интернета в вашем районе. Фиолетовая зона — доступно подключение.
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