import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const InternetHero = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Icon name="Wifi" size={32} className="text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Интернет-подключение
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Беспроводной интернет до 250 Мбит/с через современные беспроводные технологии в Московской области
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="px-4 py-2 bg-success/10 text-success border-success/20">
              <Icon name="Zap" size={16} className="mr-2" />
              До 250 Мбит/с
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 bg-success/10 text-success border-success/20">
              <Icon name="Shield" size={16} className="mr-2" />
              99.9% надежность
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 bg-success/10 text-success border-success/20">
              <Icon name="Clock" size={16} className="mr-2" />
              Подключение за 1-3 дня
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternetHero;
