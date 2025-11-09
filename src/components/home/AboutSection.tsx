import { useEffect, useRef, useState } from 'react';

export default function AboutSection() {
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
    <section ref={sectionRef} id="about" className="py-10 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50">
      <div className="container mx-auto px-4">
        <div className={`max-w-5xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">О компании NetConnect</h2>
          
          <div className="bg-white rounded-2xl shadow-lg border-2 border-blue-100 p-8 mb-8">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-blue-900 mb-3">ООО "ЧОО "СБ ЗВИ"</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Юридический адрес:</p>
                      <p>115093, г. Москва, пер. Партийный, д. 1</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
          <div className="text-lg text-muted-foreground mb-8 leading-relaxed space-y-4 text-left">
            <p>
              NetConnect — это ваш надежный партнер в мире современных телекоммуникаций. Мы предоставляем быстрый, стабильный и безопасный интернет для жителей Московской области и ближайших регионов, обеспечивая удобное подключение как для частных пользователей, так и для бизнеса любого масштаба.
            </p>
            <p>
              Мы используем передовые беспроводные технологии и спутниковый интернет, чтобы гарантировать доступ к сети даже в труднодоступных районах. Благодаря инновационным решениям наши клиенты получают высокую скорость соединения и непрерывный доступ к интернету, независимо от погодных условий или технических ограничений локальных сетей.
            </p>
            <p>
              Особое преимущество NetConnect — эффективная защита от глушения интернет-сигнала. Мы внедряем резервное подключение через спутниковый интернет, что обеспечивает постоянную онлайн-связь даже при попытках блокировки сигнала или перебоях в локальных сетях.
            </p>
            <p>
              С NetConnect вы получаете не просто интернет, а современное, надежное и адаптированное под ваши потребности решение связи, позволяющее работать, учиться и развлекаться без ограничений.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2">5+</div>
              <div className="text-muted-foreground">лет на рынке</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2">1500+</div>
              <div className="text-muted-foreground">довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2">99%</div>
              <div className="text-muted-foreground">время безотказной работы</div>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/reviews" 
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-all font-semibold shadow-md hover:shadow-lg"
            >
              Читать отзывы наших клиентов
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a 
              href="/faq" 
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all font-semibold shadow-md hover:shadow-lg"
            >
              <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Часто задаваемые вопросы
            </a>
          </div>

          <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-900">Telegram-канал mosoblconnect</p>
                  <p className="text-sm text-muted-foreground">Наши проекты и выдающиеся подключения</p>
                </div>
              </div>
              <a 
                href="https://t.me/mosoblconnect"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-semibold shadow-md hover:shadow-lg whitespace-nowrap"
              >
                Подписаться
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}