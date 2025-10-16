import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/icon';
import { generateCitySlug } from '@/utils/citySlug';
import SpeedTest from '@/components/SpeedTest';
import YandexCoverageMap from '@/components/YandexCoverageMap';
import UnblockedServicesBadge from '@/components/UnblockedServicesBadge';

const cities = [
  { name: 'Москва', district: 'Город федерального значения' },
  { name: 'Подольск', district: 'Городской округ Подольск' },
  { name: 'Красногорск', district: 'Красногорский городской округ' },
  { name: 'Химки', district: 'Городской округ Химки' },
  { name: 'Королёв', district: 'Городской округ Королёв' },
  { name: 'Мытищи', district: 'Городской округ Мытищи' },
  { name: 'Люберцы', district: 'Люберецкий городской округ' },
  { name: 'Электросталь', district: 'Городской округ Электросталь' },
  { name: 'Домодедово', district: 'Городской округ Домодедово' },
  { name: 'Одинцово', district: 'Одинцовский городской округ' },
  { name: 'Сергиев Посад', district: 'Сергиево-Посадский городской округ' },
  { name: 'Коломна', district: 'Городской округ Коломна' },
  { name: 'Раменское', district: 'Раменский городской округ' },
  { name: 'Долгопрудный', district: 'Городской округ Долгопрудный' },
  { name: 'Пушкино', district: 'Пушкинский городской округ' },
  { name: 'Зеленоград', district: 'Зеленоградский административный округ Москвы' },
  { name: 'Щёлково', district: 'Щёлковский городской округ' },
  { name: 'Видное', district: 'Ленинский городской округ' },
  { name: 'Дубна', district: 'Городской округ Дубна' },
  { name: 'Истра', district: 'Истринский городской округ' },
  { name: 'Орехово-Зуево', district: 'Орехово-Зуевский городской округ' },
  { name: 'Клин', district: 'Клинский городской округ' },
  { name: 'Фрязино', district: 'Городской округ Фрязино' },
  { name: 'Лобня', district: 'Городской округ Лобня' },
  { name: 'Ногинск', district: 'Богородский городской округ' },
  { name: 'Реутов', district: 'Городской округ Реутов' },
  { name: 'Красноармейск', district: 'Городской округ Красноармейск' },
  { name: 'Дмитров', district: 'Дмитровский городской округ' },
  { name: 'Серпухов', district: 'Городской округ Серпухов' },
  { name: 'Егорьевск', district: 'Егорьевский городской округ' },
  { name: 'Лыткарино', district: 'Городской округ Лыткарино' },
  { name: 'Солнечногорск', district: 'Солнечногорский городской округ' },
  { name: 'Жуковский', district: 'Городской округ Жуковский' },
  { name: 'Старая Купавна', district: 'Городской округ Павловский Посад' },
  { name: 'Бронницы', district: 'Городской округ Бронницы' },
  { name: 'Чехов', district: 'Чеховский городской округ' },
  { name: 'Кашира', district: 'Городской округ Кашира' }
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
          
          <div className="bg-card border rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Основные регионы и города <span className="text-muted-foreground text-lg">(список минимальный, для примера)</span></h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
              {cities.map((city, index) => (
                <a
                  key={city.name}
                  href={`/city/${generateCitySlug(city.name)}`}
                  className={`bg-accent/30 rounded-lg p-3 border hover:bg-accent/50 transition-all duration-500 group ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{
                    transitionDelay: `${index * 30}ms`
                  }}
                >
                  <div className="flex items-center justify-center">
                    <Icon name="MapPin" size={16} className="text-success mr-2 group-hover:scale-110 transition-transform" />
                    <span className="font-medium group-hover:text-primary transition-colors">{city.name}</span>
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
                    <a href="tel:+79015000078" className="font-semibold text-lg hover:text-primary transition-colors whitespace-nowrap">+7 (901) 500-00-78</a>
                    <div className="text-sm text-muted-foreground">Основная линия</div>
                  </div>
                  <a 
                    href="https://wa.me/79015000078" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="ml-2 w-10 h-10 bg-[#25D366] hover:bg-[#20bd5a] rounded-full flex items-center justify-center transition-colors"
                    aria-label="WhatsApp"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </a>
                </div>
                <div className="bg-card border rounded-lg p-4 flex items-center space-x-3">
                  <Icon name="Phone" size={24} className="text-success" />
                  <div className="text-left">
                    <a href="tel:+79015000087" className="font-semibold text-lg hover:text-primary transition-colors whitespace-nowrap">+7 (901) 500-00-87</a>
                    <div className="text-sm text-muted-foreground">Дополнительная линия</div>
                  </div>
                  <a 
                    href="https://wa.me/79015000087" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="ml-2 w-10 h-10 bg-[#25D366] hover:bg-[#20bd5a] rounded-full flex items-center justify-center transition-colors"
                    aria-label="WhatsApp"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </a>
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