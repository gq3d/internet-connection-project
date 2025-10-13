import Icon from '@/components/ui/icon';

export default function AboutInnovation() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-success/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mb-6">
              <Icon name="Lightbulb" size={32} className="text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Инновационный подход к каждому клиенту
            </h2>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-primary/10">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p className="text-center md:text-left">
                NetConnect специализируется на разработке и внедрении <span className="font-semibold text-foreground">инновационных телекоммуникационных решений</span>, основанных на передовых технологиях беспроводной и спутниковой связи. Мы не просто предоставляем доступ к интернету — мы создаем <span className="font-semibold text-foreground">индивидуальные технологические решения</span> для каждой точки подключения.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="text-center p-4 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl">
                  <Icon name="Target" size={32} className="text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Индивидуальный подход</h3>
                  <p className="text-sm text-muted-foreground">Каждое подключение — уникальный проект</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-xl">
                  <Icon name="Cpu" size={32} className="text-secondary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Новейшие технологии</h3>
                  <p className="text-sm text-muted-foreground">Постоянное внедрение инноваций</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-success/5 to-success/10 rounded-xl">
                  <Icon name="Award" size={32} className="text-success mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Высокое качество</h3>
                  <p className="text-sm text-muted-foreground">Максимальный уровень сервиса</p>
                </div>
              </div>

              <p className="text-center md:text-left">
                Наша команда инженеров проводит детальный <span className="font-semibold text-foreground">анализ технических особенностей</span> каждого объекта: рельефа местности, удаленности от базовых станций, наличия помех и препятствий. На основе этих данных мы подбираем оптимальное оборудование и конфигурацию системы, гарантируя <span className="font-semibold text-foreground">максимальную производительность и надежность</span> интернет-соединения.
              </p>

              <p className="text-center md:text-left">
                Приверженность качеству, непрерывное совершенствование технологий и персонализированный сервис — вот принципы, которые позволяют NetConnect оставаться лидером в области телекоммуникационных услуг и обеспечивать <span className="font-semibold text-foreground">наивысший уровень удовлетворенности</span> каждого клиента.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a 
              href="/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-opacity font-medium shadow-lg"
            >
              <Icon name="Home" size={20} className="mr-2" />
              Вернуться на главную
            </a>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-success font-semibold">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={18} />
                <a href="tel:+79015000078" className="hover:underline">+7 (901) 500-00-78</a>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={18} />
                <a href="tel:+79015000087" className="hover:underline">+7 (901) 500-00-87</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
