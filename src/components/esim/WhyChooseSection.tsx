import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

export default function WhyChooseSection() {
  return (
    <div className="bg-gradient-to-br from-primary via-secondary to-success text-white rounded-2xl p-10 text-center shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
            <Icon name="CheckCircle" size={48} className="text-white" />
          </div>
        </div>
        
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Почему выбирают наши глобальные eSIM?
        </h3>
        
        <div className="grid md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <Icon name="Globe" size={32} className="text-white mb-3 mx-auto" />
            <h4 className="font-bold text-xl mb-2">106 стран</h4>
            <p className="text-white/90 text-sm">
              Работает по всему миру без смены SIM-карты
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <Icon name="Zap" size={32} className="text-white mb-3 mx-auto" />
            <h4 className="font-bold text-xl mb-2">Моментальная активация</h4>
            <p className="text-white/90 text-sm">
              Подключение за 5 минут, без визита в офис
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <Icon name="DollarSign" size={32} className="text-white mb-3 mx-auto" />
            <h4 className="font-bold text-xl mb-2">Выгодные цены</h4>
            <p className="text-white/90 text-sm">
              Дешевле роуминга в 3-5 раз
            </p>
          </div>
        </div>
        
        <div className="mt-8">
          <Link to="/esim">
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-bold"
            >
              Посмотреть все регионы
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
