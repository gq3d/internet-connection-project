import Icon from '@/components/ui/icon';
import { useEffect, useRef, useState } from 'react';

export default function ContactsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
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
    <section ref={sectionRef} id="contacts" className="py-20 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/50">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Контакты</h2>
          <p className="text-xl text-muted-foreground">
            Свяжитесь с нами для подключения или консультации
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-white rounded-2xl shadow-lg border-2 border-blue-100 p-8">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-blue-900 mb-3">ООО "ЧОО "СБ ЗВИ"</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Юридический адрес:</p>
                      <p className="text-muted-foreground">115093, г. Москва, пер. Партийный, д. 1</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
          <div className="bg-white rounded-xl shadow-md border border-blue-100 p-6 hover:shadow-lg transition-shadow">
            <Icon name="Phone" size={32} className="text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Телефон</h3>
            <div className="space-y-3">
              <div className="space-y-2">
                <p className="text-muted-foreground">+7 (901) 500-00-78</p>
                <a 
                  href="https://wa.me/79015000078" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-1 bg-green-500 text-white text-sm rounded-md hover:bg-green-600 transition-colors"
                >
                  <Icon name="MessageCircle" size={16} className="mr-1" />
                  WhatsApp
                </a>
              </div>
              <div className="space-y-2">
                <p className="text-muted-foreground">+7 (901) 500-00-87</p>
                <a 
                  href="https://wa.me/79015000087" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-1 bg-green-500 text-white text-sm rounded-md hover:bg-green-600 transition-colors"
                >
                  <Icon name="MessageCircle" size={16} className="mr-1" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md border border-blue-100 p-6 hover:shadow-lg transition-shadow text-center">
            <Icon name="Mail" size={32} className="text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Email</h3>
            <p className="text-muted-foreground break-words">info@mosoblconnect.ru</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md border border-blue-100 p-6 hover:shadow-lg transition-shadow">
            <Icon name="MapPin" size={32} className="text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Офис</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">Москва,<br/>Партийный пер., д. 1</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md border border-blue-100 p-6 hover:shadow-lg transition-shadow text-center">
            <Icon name="Clock" size={32} className="text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Режим работы</h3>
            <p className="text-muted-foreground font-semibold text-lg">24/7</p>
          </div>
        </div>

        {/* Яндекс карта */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border-2 border-blue-100 p-4 md:p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Мы на карте</h3>
            <div className="w-full overflow-hidden rounded-xl">
              <iframe 
                src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=46026566706" 
                width="100%" 
                height="400" 
                frameBorder="0"
                className="w-full"
                title="Карта офиса"
              ></iframe>
            </div>
            <div className="mt-6 text-center">
              <a 
                href="https://yandex.ru/maps/org/choo_sb_zvi/46026566706/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg"
              >
                <Icon name="Navigation" size={20} className="mr-2" />
                Построить маршрут
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}