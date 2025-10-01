import Icon from '@/components/ui/icon';

export default function EsimSection() {
  return (
    <section id="esim" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Туристические eSIM — интернет без границ за 5 минут</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Компания NetConnect предлагает туристические eSIM, которые можно подключить всего за 5 минут на любой телефон с поддержкой eSIM. Забудьте про физические SIM-карты, роуминг и ограничения операторов — оставайтесь на связи в любой точке мира.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-8">Что мы предлагаем:</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Icon name="MapPin" size={24} className="text-primary mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Региональные eSIM</h4>
                    <p className="text-muted-foreground">для конкретных стран или частей мира (например, только Европа или только Азия).</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Icon name="Globe" size={24} className="text-primary mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Международные eSIM</h4>
                    <p className="text-muted-foreground">работают в нескольких странах одновременно, идеально для путешествий по нескольким странам или по всей планете.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Icon name="Earth" size={24} className="text-primary mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Глобальные eSIM</h4>
                    <p className="text-muted-foreground">единая карта для всех стран мира, без смены SIM.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Преимущества наших туристических eSIM:</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Clock" size={20} className="text-success mr-3 flex-shrink-0" />
                  <span><strong>Мгновенная активация</strong> — подключение за 5 минут.</span>
                </div>
                
                <div className="flex items-center">
                  <Icon name="Smartphone" size={20} className="text-success mr-3 flex-shrink-0" />
                  <span><strong>Поддержка всех современных устройств:</strong> смартфоны, планшеты, модемы, роутеры.</span>
                </div>
                
                <div className="flex items-center">
                  <Icon name="DollarSign" size={20} className="text-success mr-3 flex-shrink-0" />
                  <span><strong>Гибкие тарифы</strong> — оплачиваете только нужный трафик.</span>
                </div>
                
                <div className="flex items-center">
                  <Icon name="Wifi" size={20} className="text-success mr-3 flex-shrink-0" />
                  <span><strong>Надёжная связь</strong> и высокая скорость интернета.</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-primary to-success text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">С туристическими eSIM от NetConnect вы всегда на связи</h3>
            <p className="text-lg mb-6 opacity-90">в командировке, путешествии или отпуске по всему миру.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <span className="text-2xl">📲</span>
              <span className="text-xl font-semibold">Подключайтесь прямо сейчас и наслаждайтесь интернетом без границ!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
