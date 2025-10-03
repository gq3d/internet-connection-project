import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function HeroSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Беспроводной интернет в Московской области
          </h1>

          {/* Mobile only: Large Internet card above description */}
          <div className="md:hidden mb-6">
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm rounded-2xl p-6 border-2 border-primary/30 shadow-xl">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-3">
                  <Icon name="Wifi" size={32} className="text-primary" />
                </div>
                <p className="text-lg font-bold text-foreground mb-1">Подключение к интернет</p>
                <p className="text-sm text-muted-foreground">До 250 Мбит/с</p>
              </div>
            </div>
          </div>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Подключение к сети интернет для частных лиц и бизнеса через беспроводные каналы связи, включая спутниковый интернет
          </p>

          {/* Services Grid - Mobile: Featured Internet card + 2x2 grid */}
          <div className="mb-8 max-w-4xl mx-auto">

            {/* Desktop & Mobile: Grid with all services */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {/* Desktop only: Internet card (same size as others) */}
              <div className="hidden md:block bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-primary/10 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                    <Icon name="Wifi" size={24} className="text-primary" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">Подключение к интернет</p>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-primary/10 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                    <Icon name="Video" size={24} className="text-primary" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">Видеонаблюдение</p>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-primary/10 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mb-2">
                    <Icon name="Shield" size={24} className="text-success" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">Системы охраны</p>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-primary/10 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-2">
                    <Icon name="Signal" size={24} className="text-secondary" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">Усиление сотовой связи</p>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-primary/10 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                    <Icon name="Wifi" size={24} className="text-primary" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">Усиление Wi-Fi</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="px-4 py-2 bg-success/10 text-success border-success/20">
              <Icon name="Zap" size={16} className="mr-2" />
              До 250 Мбит/с
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 bg-success/10 text-success border-success/20">
              <Icon name="Shield" size={16} className="mr-2" />
              99% надежность
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 bg-success/10 text-success border-success/20">
              <Icon name="Clock" size={16} className="mr-2" />
              24/7 поддержка
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}