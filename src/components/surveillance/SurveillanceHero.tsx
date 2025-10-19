import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const SurveillanceHero = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Icon name="Video" size={32} className="text-primary" />
          </div>
          <h1 className="text-3xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent break-words">
            Видеонаблюдение
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Системы видеонаблюдения с HD/4K качеством, удаленным доступом и облачным хранением
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="px-4 py-2 bg-success/10 text-success border-success/20">
              <Icon name="Video" size={16} className="mr-2" />
              4K качество
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 bg-success/10 text-success border-success/20">
              <Icon name="Cloud" size={16} className="mr-2" />
              Облачное хранение
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 bg-success/10 text-success border-success/20">
              <Icon name="Smartphone" size={16} className="mr-2" />
              Мобильный доступ
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurveillanceHero;