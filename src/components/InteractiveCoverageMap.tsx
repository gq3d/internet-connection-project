import { useState } from 'react';
import Icon from '@/components/ui/icon';

type Operator = 'mts' | 'megafon' | 'beeline' | 'tele2';
type CoverageType = '4G' | '3G' | '2G' | 'no';

const operators = [
  { id: 'mts' as Operator, name: 'МТС', color: '#E30611' },
  { id: 'megafon' as Operator, name: 'МегаФон', color: '#00B956' },
  { id: 'beeline' as Operator, name: 'Билайн', color: '#FFCC00' },
  { id: 'tele2' as Operator, name: 'Теле2', color: '#000000' },
];

const coverageColors = {
  '4G': '#22c55e',
  '3G': '#eab308',
  '2G': '#f97316',
  'no': '#94a3b8'
};

const moscowRegionZones = [
  { name: 'Москва', x: 50, y: 50, size: 'large' },
  { name: 'Подольск', x: 48, y: 65, size: 'medium' },
  { name: 'Красногорск', x: 40, y: 45, size: 'medium' },
  { name: 'Химки', x: 48, y: 40, size: 'medium' },
  { name: 'Мытищи', x: 58, y: 42, size: 'medium' },
  { name: 'Люберцы', x: 62, y: 55, size: 'medium' },
  { name: 'Домодедово', x: 55, y: 70, size: 'small' },
  { name: 'Сергиев Посад', x: 70, y: 25, size: 'small' },
  { name: 'Коломна', x: 85, y: 75, size: 'small' },
  { name: 'Пушкино', x: 60, y: 35, size: 'small' },
  { name: 'Зеленоград', x: 35, y: 38, size: 'small' },
  { name: 'Щёлково', x: 68, y: 45, size: 'small' },
  { name: 'Видное', x: 52, y: 58, size: 'small' },
  { name: 'Дубна', x: 52, y: 15, size: 'small' },
  { name: 'Истра', x: 28, y: 48, size: 'small' },
  { name: 'Орехово-Зуево', x: 85, y: 50, size: 'small' },
  { name: 'Клин', x: 38, y: 20, size: 'small' },
  { name: 'Фрязино', x: 65, y: 48, size: 'small' },
];

function getCoverageForZone(operator: Operator, zoneName: string): CoverageType {
  const coverage: Record<Operator, Record<string, CoverageType>> = {
    mts: {
      'Москва': '4G',
      'Подольск': '4G',
      'Красногорск': '4G',
      'Химки': '4G',
      'Мытищи': '4G',
      'Люберцы': '4G',
      'Домодедово': '4G',
      'Сергиев Посад': '3G',
      'Коломна': '3G',
      'Пушкино': '4G',
      'Зеленоград': '4G',
      'Щёлково': '4G',
      'Видное': '4G',
      'Дубна': '3G',
      'Истра': '3G',
      'Орехово-Зуево': '3G',
      'Клин': '3G',
      'Фрязино': '4G',
    },
    megafon: {
      'Москва': '4G',
      'Подольск': '4G',
      'Красногорск': '4G',
      'Химки': '4G',
      'Мытищи': '4G',
      'Люберцы': '4G',
      'Домодедово': '3G',
      'Сергиев Посад': '3G',
      'Коломна': '3G',
      'Пушкино': '4G',
      'Зеленоград': '4G',
      'Щёлково': '3G',
      'Видное': '4G',
      'Дубна': '3G',
      'Истра': '2G',
      'Орехово-Зуево': '3G',
      'Клин': '2G',
      'Фрязино': '3G',
    },
    beeline: {
      'Москва': '4G',
      'Подольск': '4G',
      'Красногорск': '4G',
      'Химки': '4G',
      'Мытищи': '4G',
      'Люберцы': '4G',
      'Домодедово': '4G',
      'Сергиев Посад': '3G',
      'Коломна': '3G',
      'Пушкино': '4G',
      'Зеленоград': '4G',
      'Щёлково': '4G',
      'Видное': '4G',
      'Дубна': '3G',
      'Истра': '3G',
      'Орехово-Зуево': '3G',
      'Клин': '3G',
      'Фрязино': '4G',
    },
    tele2: {
      'Москва': '4G',
      'Подольск': '4G',
      'Красногорск': '4G',
      'Химки': '4G',
      'Мытищи': '4G',
      'Люберцы': '4G',
      'Домодедово': '3G',
      'Сергиев Посад': '3G',
      'Коломна': '3G',
      'Пушкино': '4G',
      'Зеленоград': '3G',
      'Щёлково': '3G',
      'Видное': '4G',
      'Дубна': '2G',
      'Истра': '2G',
      'Орехово-Зуево': '3G',
      'Клин': '2G',
      'Фрязино': '3G',
    },
  };

  return coverage[operator][zoneName] || '2G';
}

export default function InteractiveCoverageMap() {
  const [selectedOperator, setSelectedOperator] = useState<Operator>('mts');
  const [hoveredZone, setHoveredZone] = useState<string | null>(null);

  return (
    <div className="bg-card border rounded-lg p-6 md:p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Icon name="Radio" size={28} className="text-primary" />
          Интерактивная карта покрытия операторов связи
        </h3>
        <p className="text-muted-foreground">
          Выберите оператора, чтобы увидеть зоны покрытия в Московской области
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {operators.map((op) => (
          <button
            key={op.id}
            onClick={() => setSelectedOperator(op.id)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              selectedOperator === op.id
                ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                : 'bg-muted hover:bg-muted/70'
            }`}
            style={
              selectedOperator === op.id
                ? { backgroundColor: op.color, color: op.id === 'tele2' ? '#fff' : '#fff' }
                : {}
            }
          >
            {op.name}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-[1fr_auto] gap-6">
        <div className="relative bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20 rounded-lg p-8 min-h-[500px] border-2 border-muted">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
          
          <div className="relative">
            {moscowRegionZones.map((zone) => {
              const coverage = getCoverageForZone(selectedOperator, zone.name);
              const size = zone.size === 'large' ? 80 : zone.size === 'medium' ? 50 : 35;
              
              return (
                <div
                  key={zone.name}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 cursor-pointer"
                  style={{
                    left: `${zone.x}%`,
                    top: `${zone.y}%`,
                  }}
                  onMouseEnter={() => setHoveredZone(zone.name)}
                  onMouseLeave={() => setHoveredZone(null)}
                >
                  <div
                    className={`rounded-full flex items-center justify-center transition-all duration-300 ${
                      hoveredZone === zone.name ? 'scale-125 shadow-2xl' : 'hover:scale-110'
                    }`}
                    style={{
                      width: `${size}px`,
                      height: `${size}px`,
                      backgroundColor: coverageColors[coverage],
                      opacity: 0.7,
                    }}
                  >
                    {zone.size === 'large' && (
                      <Icon name="MapPin" size={32} className="text-white drop-shadow-lg" />
                    )}
                  </div>
                  
                  {(hoveredZone === zone.name || zone.size === 'large') && (
                    <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-background border rounded-lg px-3 py-2 shadow-xl whitespace-nowrap z-10">
                      <div className="font-semibold text-sm">{zone.name}</div>
                      <div className="text-xs text-muted-foreground">{coverage === 'no' ? 'Нет покрытия' : coverage}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="absolute bottom-4 left-4 text-xs text-muted-foreground bg-background/80 rounded px-2 py-1">
            <Icon name="MapPin" size={12} className="inline mr-1" />
            Московская область
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-muted/50 rounded-lg p-4 border">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Icon name="Info" size={18} />
              Легенда
            </h4>
            <div className="space-y-2">
              {Object.entries(coverageColors).map(([type, color]) => (
                <div key={type} className="flex items-center gap-3">
                  <div
                    className="w-6 h-6 rounded-full flex-shrink-0"
                    style={{ backgroundColor: color }}
                  ></div>
                  <span className="text-sm">
                    {type === '4G' && '4G LTE - Высокая скорость'}
                    {type === '3G' && '3G - Средняя скорость'}
                    {type === '2G' && '2G - Базовое покрытие'}
                    {type === 'no' && 'Нет покрытия'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
            <Icon name="Lightbulb" size={20} className="text-primary mb-2" />
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Совет:</strong> Наведите курсор на зону, чтобы увидеть детали покрытия
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-muted/50 rounded-lg p-4 border">
        <div className="flex items-start gap-3">
          <Icon name="Info" size={20} className="text-primary flex-shrink-0 mt-0.5" />
          <div className="text-sm text-muted-foreground space-y-2">
            <p>
              <strong className="text-foreground">Обратите внимание:</strong> данные о покрытии являются ориентировочными и могут отличаться в зависимости от конкретного местоположения, рельефа местности и других факторов.
            </p>
            <p>
              Для точной информации о качестве сигнала в вашей зоне рекомендуем обратиться к специалистам по телефону <a href="tel:+79015000078" className="text-primary hover:underline font-semibold">+7 (901) 500-00-78</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
