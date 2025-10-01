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
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Подключение к сети интернет для частных лиц и бизнеса через беспроводные каналы связи, включая спутниковый интернет
          </p>
          
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
