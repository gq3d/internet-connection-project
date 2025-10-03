import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/icon';
import { generateCitySlug } from '@/utils/citySlug';

const cities = [
  'Москва', 'Подольск', 'Красногорск', 'Химки', 'Мытищи', 'Люберцы',
  'Домодедово', 'Сергиев Посад', 'Коломна', 'Пушкино', 'Зеленоград', 'Щёлково',
  'Видное', 'Дубна', 'Истра', 'Орехово-Зуево', 'Клин', 'Фрязино',
  'Лобня', 'Ногинск', 'Реутов', 'Красноармейск', 'Дмитров', 'Серпухов',
  'Егорьевск', 'Лыткарино', 'Солнечногорск', 'Жуковский', 'Старая Купавна',
  'Бронницы', 'Чехов', 'Кашира'
];

export default function CoverageSection() {
  const [isVisible, setIsVisible] = useState(false);
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
          <div className="w-32 h-1 mx-auto mb-6 bg-gradient-to-r from-primary via-secondary to-primary rounded-full"></div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Мы предоставляем доступ к <span className="font-semibold text-foreground">беспроводному</span> и <span className="font-semibold text-foreground">высокоскоростному</span> интернету в различных районах Московской области, включая крупные города, пригороды, дачи и удалённые населённые пункты.
          </p>
          <div className="flex justify-center gap-3 mt-8 flex-wrap">
            <div className="inline-flex items-center px-4 py-2 bg-success/10 rounded-lg animate-pulse hover:animate-none hover:scale-105 transition-transform cursor-default">
              <Icon name="Wifi" size={18} className="text-success mr-2" />
              <span className="text-sm font-medium">Беспроводной интернет</span>
            </div>
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-lg animate-pulse hover:animate-none hover:scale-105 transition-transform cursor-default" style={{ animationDelay: '150ms' }}>
              <Icon name="Zap" size={18} className="text-primary mr-2" />
              <span className="text-sm font-medium">Высокая скорость</span>
            </div>
            <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-lg animate-pulse hover:animate-none hover:scale-105 transition-transform cursor-default" style={{ animationDelay: '300ms' }}>
              <Icon name="MapPin" size={18} className="text-secondary mr-2" />
              <span className="text-sm font-medium">Вся область</span>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="bg-card border rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Основные регионы и города <span className="text-muted-foreground text-lg">(список минимальный, для примера)</span></h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
              {cities.map((city, index) => (
                <a
                  key={city}
                  href={`/city/${generateCitySlug(city)}`}
                  className={`bg-accent/30 rounded-lg p-3 border hover:bg-accent/50 transition-all duration-500 group ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{
                    transitionDelay: `${index * 30}ms`
                  }}
                >
                  <div className="flex items-center justify-center">
                    <Icon name="MapPin" size={16} className="text-success mr-2 group-hover:scale-110 transition-transform" />
                    <span className="font-medium group-hover:text-primary transition-colors">{city}</span>
                  </div>
                </a>
              ))}
            </div>
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
              </div>
            </div>
          </div>

          <div className="bg-primary/10 border-2 border-primary/20 rounded-lg p-8">
            <div className="text-center">
              <Icon name="Phone" size={48} className="text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Получите персональную консультацию</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Для получения подробной информации о качестве и скорости работы сети конкретно на вашем объекте, рекомендуем обратиться по телефону. Наши специалисты в индивидуальном режиме предоставят развернутую консультацию и помогут подобрать оптимальный тариф.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <div className="bg-card border rounded-lg p-4 flex items-center space-x-3">
                  <Icon name="Phone" size={24} className="text-success" />
                  <div className="text-left">
                    <div className="font-semibold text-lg">+7 (901) 500-00-78</div>
                    <div className="text-sm text-muted-foreground">Основная линия</div>
                  </div>
                </div>
                <div className="bg-card border rounded-lg p-4 flex items-center space-x-3">
                  <Icon name="Phone" size={24} className="text-success" />
                  <div className="text-left">
                    <div className="font-semibold text-lg">+7 (901) 500-00-87</div>
                    <div className="text-sm text-muted-foreground">Дополнительная линия</div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">Консультации и подключение • 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}