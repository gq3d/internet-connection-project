import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const SmartAnalyticsCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Готовы внедрить умную аналитику?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Мы подберём оптимальное решение для вашего объекта и установим систему под ключ
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
                    <Icon name="Calculator" size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Расчёт стоимости</h3>
                  <p className="text-sm text-muted-foreground">Бесплатный выезд для оценки объекта</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
                    <Icon name="Wrench" size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Установка под ключ</h3>
                  <p className="text-sm text-muted-foreground">Монтаж, настройка, обучение</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
                    <Icon name="Headphones" size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Техподдержка 24/7</h3>
                  <p className="text-sm text-muted-foreground">Помощь в любое время</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+79015000078"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  <Icon name="Phone" size={24} />
                  +7 (901) 500-00-78
                </a>
                <a 
                  href="https://wa.me/79015000078"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  <Icon name="MessageCircle" size={24} />
                  WhatsApp
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SmartAnalyticsCTA;
