import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const SmartAnalyticsHero = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-indigo-50 to-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/services/surveillance"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <Icon name="ArrowLeft" size={20} />
            <span>Назад к видеонаблюдению</span>
          </Link>
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl mb-6 shadow-xl">
              <Icon name="Brain" size={40} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Умная аналитика видеонаблюдения
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Современные камеры — это уже не просто «глаза» системы безопасности. Они видят, запоминают и анализируют. Мы предлагаем решения, которые работают на опережение.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Badge className="px-4 py-2 bg-purple-100 text-purple-800 border-purple-200">
              <Icon name="ScanFace" size={16} className="mr-2" />
              Распознавание лиц
            </Badge>
            <Badge className="px-4 py-2 bg-indigo-100 text-indigo-800 border-indigo-200">
              <Icon name="Activity" size={16} className="mr-2" />
              Детекция движения
            </Badge>
            <Badge className="px-4 py-2 bg-blue-100 text-blue-800 border-blue-200">
              <Icon name="Users" size={16} className="mr-2" />
              Свой-чужой
            </Badge>
            <Badge className="px-4 py-2 bg-cyan-100 text-cyan-800 border-cyan-200">
              <Icon name="Eye" size={16} className="mr-2" />
              Электронный глазок
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartAnalyticsHero;
