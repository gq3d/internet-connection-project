import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const InternetHero = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl mb-6 shadow-xl">
              <Icon name="Wifi" size={40} className="text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient leading-tight">
              Интернет-подключение
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Беспроводной интернет до <span className="font-bold text-primary">250 Мбит/с</span> через современные технологии в Московской области
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              <Badge variant="secondary" className="px-5 py-3 text-base bg-success/10 text-success border-success/20 hover:bg-success/20 transition-colors">
                <Icon name="Zap" size={18} className="mr-2" />
                До 250 Мбит/с
              </Badge>
              <Badge variant="secondary" className="px-5 py-3 text-base bg-success/10 text-success border-success/20 hover:bg-success/20 transition-colors">
                <Icon name="Shield" size={18} className="mr-2" />
                99.9% надежность
              </Badge>
              <Badge variant="secondary" className="px-5 py-3 text-base bg-success/10 text-success border-success/20 hover:bg-success/20 transition-colors">
                <Icon name="Clock" size={18} className="mr-2" />
                За 1-3 дня
              </Badge>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Link 
              to="/coverage#speed-test"
              className="group block"
            >
              <div className="bg-white/80 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-6 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Gauge" size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">Тест скорости интернета</h3>
                    <p className="text-sm text-muted-foreground">Проверьте текущую скорость вашего соединения</p>
                  </div>
                  <Icon name="ArrowRight" size={20} className="ml-auto text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </Link>

            <Link 
              to="/coverage"
              className="group block"
            >
              <div className="bg-white/80 backdrop-blur-sm border-2 border-secondary/20 rounded-2xl p-6 hover:border-secondary hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 group-hover:text-secondary transition-colors">Карта покрытия</h3>
                    <p className="text-sm text-muted-foreground">Узнайте, доступен ли интернет в вашем районе</p>
                  </div>
                  <Icon name="ArrowRight" size={20} className="ml-auto text-muted-foreground group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternetHero;