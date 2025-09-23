import { useParams, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import Icon from '@/components/ui/icon';

interface CityData {
  name: string;
  seoTitle: string;
  description: string;
  slug: string;
}

const cityData: { [key: string]: CityData } = {
  'moskva': {
    name: 'Москва',
    seoTitle: 'Беспроводной интернет в Москве — NetConnect | Подключение интернета на дачу',
    description: 'Качественный беспроводной интернет в Москве и ближайшем Подмосковье. Подключение дач, коттеджных поселков, СНТ. Выезд инженера, установка оборудования, техподдержка 24/7.',
    slug: 'moskva'
  },
  'podolsk': {
    name: 'Подольск',
    seoTitle: 'Интернет в Подольске — беспроводное подключение NetConnect | Дачи, коттеджи',
    description: 'Надежный беспроводной интернет в Подольске для частных домов, дач и коттеджных поселков. Профессиональная установка, техподдержка, выезд инженера на объект.',
    slug: 'podolsk'
  },
  'krasnogorsk': {
    name: 'Красногорск',
    seoTitle: 'Беспроводной интернет в Красногорске — подключение дач | NetConnect',
    description: 'Качественное подключение беспроводного интернета в Красногорске. Обслуживание дач, коттеджей, СНТ. Быстрая установка, техническая поддержка 24/7.',
    slug: 'krasnogorsk'
  },
  'himki': {
    name: 'Химки',
    seoTitle: 'Интернет в Химках — беспроводное подключение дач и коттеджей | NetConnect',
    description: 'Профессиональное подключение беспроводного интернета в Химках. Подключаем дачи, частные дома, коттеджные поселки. Выезд инженера, установка оборудования.',
    slug: 'himki'
  }
  // Добавлю остальные города позже
};

// Полный список всех городов из компонента
const allCities = [
  'Москва', 'Подольск', 'Красногорск', 'Химки', 'Мытищи', 'Люберцы',
  'Домодедово', 'Сергиев Посад', 'Коломна', 'Пушкино', 'Зеленоград', 'Щёлково',
  'Видное', 'Дубна', 'Истра', 'Орехово-Зуево', 'Клин', 'Фрязино',
  'Лобня', 'Ногинск', 'Реутов', 'Красноармейск', 'Дмитров', 'Серпухов',
  'Егорьевск', 'Лыткарино', 'Солнечногорск', 'Жуковский', 'Старая Купавна',
  'Бронницы', 'Чехов', 'Кашира'
];

// Генерируем данные для всех городов
allCities.forEach(city => {
  const slug = city.toLowerCase()
    .replace(/ё/g, 'e')
    .replace(/[^a-zA-Z0-9\u0430-\u044f]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  
  if (!cityData[slug]) {
    cityData[slug] = {
      name: city,
      seoTitle: `Беспроводной интернет в ${city} — подключение дач и коттеджей | NetConnect`,
      description: `Качественное подключение беспроводного интернета в ${city}. Подключение дач, коттеджных поселков, СНТ, частных домов. Выезд инженера, установка оборудования, техподдержка 24/7.`,
      slug
    };
  }
});

const CityPage = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const city = citySlug ? cityData[citySlug] : null;

  useEffect(() => {
    if (city) {
      document.title = city.seoTitle;
      
      // Обновляем meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', city.description);
      }
    }
  }, [city]);

  if (!city) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-4 border-b bg-card">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <a href="/" className="text-2xl font-bold text-primary">NetConnect</a>
            <div className="flex items-center space-x-6">
              <a href="/#services" className="text-muted-foreground hover:text-foreground">Услуги</a>
              <a href="/#tariffs" className="text-muted-foreground hover:text-foreground">Тарифы</a>
              <a href="/#coverage" className="text-muted-foreground hover:text-foreground">Покрытие</a>
              <div className="flex items-center space-x-2 text-success font-semibold">
                <Icon name="Phone" size={16} />
                <span>+7 (901) 500-00-78</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Беспроводной интернет в {city.name}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Подключение качественного беспроводного интернета для дач, коттеджных поселков, СНТ и частных домов в {city.name}. 
              Профессиональная установка оборудования с выездом инженера на объект.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="tel:+79015000078"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center space-x-2"
              >
                <Icon name="Phone" size={20} />
                <span>Вызвать инженера</span>
              </a>
              <a
                href="/#tariffs"
                className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors"
              >
                Посмотреть тарифы
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Услуги беспроводного интернета в {city.name}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-card border rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Icon name="Home" size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Интернет на дачу</h3>
                </div>
                <p className="text-muted-foreground">
                  Подключаем стабильный беспроводной интернет на любую дачу в {city.name}. 
                  Высокая скорость, надежное соединение даже в удаленных районах.
                </p>
              </div>

              <div className="bg-card border rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Icon name="Building" size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Коттеджные поселки</h3>
                </div>
                <p className="text-muted-foreground">
                  Комплексное подключение коттеджных поселков и таунхаусов. 
                  Индивидуальный подход к каждому объекту в {city.name}.
                </p>
              </div>

              <div className="bg-card border rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Icon name="TreePine" size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">СНТ и деревни</h3>
                </div>
                <p className="text-muted-foreground">
                  Подключение интернета в садовых товариществах и деревнях. 
                  Работаем с любыми удаленными населенными пунктами.
                </p>
              </div>
            </div>

            <div className="bg-accent/30 border rounded-lg p-8 mb-16">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Что включает наш сервис в {city.name}
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Icon name="CheckCircle" size={20} className="text-success mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Выезд инженера на объект</h4>
                      <p className="text-muted-foreground">Бесплатная консультация и оценка возможности подключения в {city.name}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Icon name="CheckCircle" size={20} className="text-success mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Профессиональная установка</h4>
                      <p className="text-muted-foreground">Монтаж и настройка всего необходимого оборудования</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Icon name="CheckCircle" size={20} className="text-success mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Качественное оборудование</h4>
                      <p className="text-muted-foreground">Используем только проверенные антенны и роутеры</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Icon name="CheckCircle" size={20} className="text-success mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Техническая поддержка 24/7</h4>
                      <p className="text-muted-foreground">Круглосуточная поддержка клиентов и решение проблем</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Icon name="CheckCircle" size={20} className="text-success mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Гарантия на услуги</h4>
                      <p className="text-muted-foreground">Гарантируем стабильную работу интернета</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Icon name="CheckCircle" size={20} className="text-success mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Работаем везде</h4>
                      <p className="text-muted-foreground">Подключаем в любой деревне, СНТ или коттеджном поселке</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-primary/10 border-2 border-primary/20 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Готовы подключить интернет в {city.name}?
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Свяжитесь с нами для получения персональной консультации. 
                Наши специалисты помогут подобрать оптимальное решение для вашего объекта в {city.name}.
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
      </section>

      {/* Footer */}
      <footer className="py-8 border-t bg-muted/30">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 NetConnect. Беспроводной интернет в {city.name} — качественное подключение дач и коттеджей.</p>
        </div>
      </footer>
    </div>
  );
};

export default CityPage;