export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">О компании NetConnect</h2>
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

          <div className="mt-8 text-center">
            <a 
              href="/reviews" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
            >
              Читать отзывы наших клиентов
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}