import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function BondingHero() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
      <div className="container mx-auto px-4">
        <Link 
          to="/business" 
          className="inline-flex items-center text-primary hover:underline mb-8"
        >
          <Icon name="ArrowLeft" size={20} className="mr-2" />
          Назад к услугам для бизнеса
        </Link>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 dark:from-primary/20 dark:via-card dark:to-secondary/20 border-2 border-primary/20 rounded-3xl p-6 md:p-12 shadow-xl overflow-hidden">
            <div className="flex items-start gap-3 md:gap-4 mb-6 flex-wrap">
              <div className="p-3 md:p-4 bg-primary/10 rounded-2xl border-2 border-primary/20 flex-shrink-0">
                <Icon name="Zap" size={28} className="text-primary md:w-8 md:h-8" />
              </div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold">
                <Icon name="Star" size={14} className="md:w-4 md:h-4" />
                <span className="whitespace-nowrap">Специальное предложение</span>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent break-words">
              Bonding и балансировка каналов
            </h1>
            
            <p className="text-base sm:text-lg md:text-2xl text-muted-foreground leading-relaxed">
              Объединяем несколько интернет-каналов в один мощный поток для максимальной скорости и надёжности
            </p>
            
            <div className="mt-8 pt-8 border-t border-primary/20 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm font-medium">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <Icon name="Zap" size={20} className="text-green-500" />
                </div>
                <span>До 300+ Мбит/с</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Icon name="ShieldCheck" size={20} className="text-blue-500" />
                </div>
                <span>Отказоустойчивость</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <Icon name="TrendingUp" size={20} className="text-purple-500" />
                </div>
                <span>Белый статический IP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
