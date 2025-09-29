import { useParams, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Icon from '@/components/ui/icon';
import Breadcrumbs from '@/components/Breadcrumbs';
import { useSEO } from '@/hooks/useSEO';

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useSEO({
    title: city?.seoTitle || 'NetConnect',
    description: city?.description || '',
    keywords: `интернет ${city?.name}, беспроводной интернет ${city?.name}, подключение интернета ${city?.name}, интернет на даче ${city?.name}`,
    canonical: `https://mosoblconnect.ru/city/${citySlug}`,
    ogTitle: city?.seoTitle || '',
    ogDescription: city?.description || '',
    ogImage: 'https://cdn.mosoblconnect.ru/files/0b95440d-0b84-41b8-8404-418760cb07a4.jpg'
  });

  if (!city) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-4 border-b bg-card sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <a href="/" className="text-2xl font-bold text-primary">NetConnect</a>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="/#services" className="text-muted-foreground hover:text-foreground transition-colors">Услуги</a>
              <a href="/#tariffs" className="text-muted-foreground hover:text-foreground transition-colors">Тарифы</a>
              <a href="/#coverage" className="text-muted-foreground hover:text-foreground transition-colors">Покрытие</a>
              <div className="flex items-center space-x-2 text-success font-semibold">
                <Icon name="Phone" size={16} />
                <span>+7 (901) 500-00-78</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label="Меню"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-border">
              <div className="space-y-4">
                <a 
                  href="/#services" 
                  className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Услуги
                </a>
                <a 
                  href="/#tariffs" 
                  className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Тарифы
                </a>
                <a 
                  href="/#coverage" 
                  className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Покрытие
                </a>
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center space-x-2 text-success font-semibold">
                    <Icon name="Phone" size={16} />
                    <a href="tel:+79015000078" className="hover:underline">+7 (901) 500-00-78</a>
                  </div>
                  <div className="flex items-center space-x-2 text-success font-semibold mt-2">
                    <Icon name="Phone" size={16} />
                    <a href="tel:+79015000087" className="hover:underline">+7 (901) 500-00-87</a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <Breadcrumbs items={[
        { label: 'Покрытие', href: '/' },
        { label: city.name }
      ]} />

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

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

      {/* WhatsApp Float Button */}
      <a
        href={`https://wa.me/79015000078?text=Здравствуйте! Хочу подключить интернет в г. ${city.name}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center group"
        title="Написать в WhatsApp"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
        </svg>
        <span className="ml-2 hidden group-hover:inline-block whitespace-nowrap text-sm font-medium">
          Написать в WhatsApp
        </span>
      </a>

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