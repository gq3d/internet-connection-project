import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function RegionCards() {
  return (
    <>
      <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">Все регионы</h3>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link 
          to="/esim/global"
          className="group bg-card border-2 border-border hover:border-success/50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <div className="flex items-start mb-4">
            <div className="bg-success/10 p-3 rounded-lg mr-4 flex-shrink-0 group-hover:bg-success/20 transition-colors">
              <Icon name="Earth" size={32} className="text-success" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-lg mb-1 group-hover:text-success transition-colors">Глобальный</h4>
              <p className="text-sm text-muted-foreground">от 2 980 ₽ - 1 ГБ / 7 Day</p>
            </div>
            <Icon name="ArrowRight" size={20} className="text-success opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0" />
          </div>
          <div className="text-sm text-primary font-medium underline">
            106 стран
          </div>
        </Link>

        <Link 
          to="/esim/europe"
          className="group bg-card border-2 border-border hover:border-primary/50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <div className="flex items-start mb-4">
            <div className="bg-primary/10 p-3 rounded-lg mr-4 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
              <Icon name="Castle" size={32} className="text-primary" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">Европа</h4>
              <p className="text-sm text-muted-foreground">от 572 ₽ - 1 ГБ / 7 Day</p>
            </div>
            <Icon name="ArrowRight" size={20} className="text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0" />
          </div>
          <div className="text-sm text-primary font-medium underline">
            70 стран
          </div>
        </Link>

        <Link 
          to="/esim/asia"
          className="group bg-card border-2 border-border hover:border-secondary/50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <div className="flex items-start mb-4">
            <div className="bg-secondary/10 p-3 rounded-lg mr-4 flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
              <Icon name="Flower2" size={32} className="text-secondary" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-lg mb-1 group-hover:text-secondary transition-colors">Азия</h4>
              <p className="text-sm text-muted-foreground">от 878 ₽ - 1 ГБ / 7 Day</p>
            </div>
            <Icon name="ArrowRight" size={20} className="text-secondary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0" />
          </div>
          <div className="text-sm text-primary font-medium underline">
            13 стран
          </div>
        </Link>

        <Link 
          to="/esim/north-america"
          className="group bg-card border-2 border-border hover:border-primary/50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <div className="flex items-start mb-4">
            <div className="bg-primary/10 p-3 rounded-lg mr-4 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
              <Icon name="Building2" size={32} className="text-primary" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">Северная Америка</h4>
              <p className="text-sm text-muted-foreground">от 1 088 ₽ - 1 ГБ / 7 Day</p>
            </div>
            <Icon name="ArrowRight" size={20} className="text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0" />
          </div>
          <div className="text-sm text-primary font-medium underline">
            3 страны
          </div>
        </Link>

        <Link 
          to="/esim/south-america"
          className="group bg-card border-2 border-border hover:border-success/50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <div className="flex items-start mb-4">
            <div className="bg-success/10 p-3 rounded-lg mr-4 flex-shrink-0 group-hover:bg-success/20 transition-colors">
              <Icon name="TreePalm" size={32} className="text-success" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-lg mb-1 group-hover:text-success transition-colors">Южная Америка</h4>
              <p className="text-sm text-muted-foreground">от 1 074 ₽ - 1 ГБ / 7 Day</p>
            </div>
            <Icon name="ArrowRight" size={20} className="text-success opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0" />
          </div>
          <div className="text-sm text-primary font-medium underline">
            11 стран
          </div>
        </Link>

        <Link 
          to="/esim/africa"
          className="group bg-card border-2 border-border hover:border-secondary/50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <div className="flex items-start mb-4">
            <div className="bg-secondary/10 p-3 rounded-lg mr-4 flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
              <Icon name="Sun" size={32} className="text-secondary" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-lg mb-1 group-hover:text-secondary transition-colors">Африка</h4>
              <p className="text-sm text-muted-foreground">от 2 184 ₽ - 1 ГБ / 7 Day</p>
            </div>
            <Icon name="ArrowRight" size={20} className="text-secondary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0" />
          </div>
          <div className="text-sm text-primary font-medium underline">
            37 стран
          </div>
        </Link>

        <Link 
          to="/esim/australia"
          className="group bg-card border-2 border-border hover:border-success/50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <div className="flex items-start mb-4">
            <div className="bg-success/10 p-3 rounded-lg mr-4 flex-shrink-0 group-hover:bg-success/20 transition-colors">
              <Icon name="Map" size={32} className="text-success" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-lg mb-1 group-hover:text-success transition-colors">Австралия и Океания</h4>
              <p className="text-sm text-muted-foreground">от 2 030 ₽ - 1 ГБ / 7 Day</p>
            </div>
            <Icon name="ArrowRight" size={20} className="text-success opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0" />
          </div>
          <div className="text-sm text-primary font-medium underline">
            8 стран
          </div>
        </Link>

        <Link 
          to="/esim/middle-east"
          className="group bg-card border-2 border-border hover:border-primary/50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <div className="flex items-start mb-4">
            <div className="bg-primary/10 p-3 rounded-lg mr-4 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
              <Icon name="Moon" size={32} className="text-primary" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">Ближний Восток</h4>
              <p className="text-sm text-muted-foreground">от 2 030 ₽ - 1 ГБ / 7 Day</p>
            </div>
            <Icon name="ArrowRight" size={20} className="text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0" />
          </div>
          <div className="text-sm text-primary font-medium underline">
            6 стран
          </div>
        </Link>

        <Link 
          to="/esim/caribbean"
          className="group bg-card border-2 border-border hover:border-secondary/50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <div className="flex items-start mb-4">
            <div className="bg-secondary/10 p-3 rounded-lg mr-4 flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
              <Icon name="Palmtree" size={32} className="text-secondary" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-lg mb-1 group-hover:text-secondary transition-colors">Карибы</h4>
              <p className="text-sm text-muted-foreground">от 2 642 ₽ - 1 ГБ / 7 Day</p>
            </div>
            <Icon name="ArrowRight" size={20} className="text-secondary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0" />
          </div>
          <div className="text-sm text-primary font-medium underline">
            24 страны
          </div>
        </Link>
      </div>
    </>
  );
}
