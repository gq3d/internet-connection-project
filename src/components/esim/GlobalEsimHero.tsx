import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function GlobalEsimHero() {
  return (
    <div className="bg-gradient-to-br from-success/10 via-primary/10 to-secondary/10 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Link 
            to="/esim" 
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6 group"
          >
            <Icon name="ArrowLeft" size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            <span>Назад к eSIM</span>
          </Link>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-success to-primary p-4 rounded-2xl shadow-lg">
                <Icon name="Earth" size={40} className="text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-success via-primary to-secondary bg-clip-text text-transparent leading-tight">
              Глобальные eSIM
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Единая карта для всех стран мира, без смены SIM
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border">
                <Icon name="Globe" size={20} className="text-success" />
                <span className="font-semibold">106 стран</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border">
                <Icon name="Zap" size={20} className="text-primary" />
                <span className="font-semibold">Активация 5 минут</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border">
                <Icon name="Shield" size={20} className="text-secondary" />
                <span className="font-semibold">Без роуминга</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
