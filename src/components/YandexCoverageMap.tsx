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
  const [selectedOperator, setSelectedOperator] = useState<'all' | 'mts' | 'megafon' | 'beeline' | 'tele2'>('all');

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
        zoom: 9,
        controls: ['zoomControl', 'fullscreenControl', 'geolocationControl']
      });

      const coveragePolygons = [
        [[55.9, 37.2], [55.9, 38.2], [55.5, 38.2], [55.5, 37.2]],
        [[55.5, 37.1], [55.5, 38.3], [55.1, 38.3], [55.1, 37.1]],
        [[56.2, 37.0], [56.2, 38.0], [55.9, 38.0], [55.9, 37.0]],
        [[55.1, 36.8], [55.1, 38.5], [54.7, 38.5], [54.7, 36.8]],
        [[54.7, 37.5], [54.7, 38.8], [54.4, 38.8], [54.4, 37.5]],
        [[56.5, 36.5], [56.5, 37.8], [56.2, 37.8], [56.2, 36.5]],
        [[55.5, 36.5], [55.5, 37.2], [55.1, 37.2], [55.1, 36.5]],
        [[56.0, 38.0], [56.0, 38.8], [55.7, 38.8], [55.7, 38.0]],
        [[54.4, 36.8], [54.4, 37.8], [54.1, 37.8], [54.1, 36.8]],
      ];

      const gapPolygons = [
        [[55.7, 36.9], [55.7, 37.0], [55.65, 37.0], [55.65, 36.9]],
        [[54.9, 38.0], [54.9, 38.1], [54.85, 38.1], [54.85, 38.0]],
        [[56.1, 37.5], [56.1, 37.6], [56.05, 37.6], [56.05, 37.5]],
        [[55.3, 36.7], [55.3, 36.8], [55.25, 36.8], [55.25, 36.7]],
      ];

      const operatorColors: Record<string, string> = {
        all: '#22c55e',
        mts: '#E30611',
        megafon: '#00B956',
        beeline: '#FFCC00',
        tele2: '#000000'
      };

      const currentColor = operatorColors[selectedOperator] || operatorColors.all;

      coveragePolygons.forEach((coords) => {
        const polygon = new window.ymaps.Polygon(
          [coords],
          {
            hintContent: 'Зона покрытия 4G/LTE'
          },
          {
            fillColor: currentColor,
            fillOpacity: 0.35,
            strokeColor: currentColor,
            strokeOpacity: 0.6,
            strokeWidth: 2
          }
        );
        map.geoObjects.add(polygon);
      });

      gapPolygons.forEach((coords) => {
        const gapPolygon = new window.ymaps.Polygon(
          [coords],
          {
            hintContent: 'Слабое покрытие'
          },
          {
            fillColor: '#ef4444',
            fillOpacity: 0.2,
            strokeColor: '#ef4444',
            strokeOpacity: 0.4,
            strokeWidth: 1
          }
        );
        map.geoObjects.add(gapPolygon);
      });

      const moscowCircle = new window.ymaps.Circle(
        [[55.751244, 37.618423], 50000],
        {
          hintContent: 'Москва - 99% покрытие'
        },
        {
          fillColor: currentColor,
          fillOpacity: 0.4,
          strokeColor: currentColor,
          strokeOpacity: 0.8,
          strokeWidth: 3
        }
      );
      map.geoObjects.add(moscowCircle);

      const cities = [
        { name: 'Москва', coords: [55.751244, 37.618423] },
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
            balloonContent: `<strong>${city.name}</strong><br/>Покрытие 4G/LTE доступно`,
            hintContent: city.name
          },
          {
            preset: 'islands#greenDotIcon',
            iconColor: currentColor
          }
        );
        map.geoObjects.add(placemark);
      });
    });
  }, [mapLoaded, selectedOperator]);

  const operators = [
    { id: 'all' as const, name: 'Все операторы', color: '#22c55e' },
    { id: 'mts' as const, name: 'МТС', color: '#E30611' },
    { id: 'megafon' as const, name: 'МегаФон', color: '#00B956' },
    { id: 'beeline' as const, name: 'Билайн', color: '#FFCC00' },
    { id: 'tele2' as const, name: 'Теле2', color: '#000000' },
  ];

  return (
    <div className="bg-card border rounded-lg p-6 md:p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Icon name="Map" size={28} className="text-primary" />
          Карта покрытия Московской области
        </h3>
        <p className="text-muted-foreground mb-4">
          Зона покрытия 4G/LTE — 98% территории Москвы и Московской области
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {operators.map((op) => (
            <button
              key={op.id}
              onClick={() => setSelectedOperator(op.id)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all text-sm ${
                selectedOperator === op.id
                  ? 'shadow-lg scale-105'
                  : 'bg-muted hover:bg-muted/70'
              }`}
              style={
                selectedOperator === op.id
                  ? { 
                      backgroundColor: op.color, 
                      color: op.id === 'beeline' ? '#000' : '#fff' 
                    }
                  : {}
              }
            >
              {op.name}
            </button>
          ))}
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
              <div className="w-6 h-6 rounded bg-green-500/40 border-2 border-green-500"></div>
              <span>Зона покрытия 4G/LTE (98%)</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded bg-red-500/20 border border-red-500"></div>
              <span>Слабое покрытие (2%)</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="MapPin" size={20} className="text-green-500" />
              <span>Основные города с покрытием</span>
            </div>
          </div>
        </div>

        <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
          <Icon name="Lightbulb" size={20} className="text-primary mb-2" />
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Совет:</strong> Увеличьте масштаб карты, чтобы увидеть детали покрытия в вашем районе. Зелёные зоны — стабильное 4G покрытие, красные — возможны слабые сигналы.
          </p>
        </div>
      </div>

      <div className="mt-4 bg-muted/50 rounded-lg p-4 border">
        <div className="flex items-start gap-3">
          <Icon name="Info" size={20} className="text-primary flex-shrink-0 mt-0.5" />
          <div className="text-sm text-muted-foreground">
            <p>
              <strong className="text-foreground">Обратите внимание:</strong> карта показывает общее покрытие по Московской области. Качество сигнала может варьироваться в зависимости от рельефа, застройки и других факторов.
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
