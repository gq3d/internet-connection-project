import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const CompatibleEquipment = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Совместимое оборудование</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Умная аналитика работает с современными камерами видеонаблюдения
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/services/cameras/ptz-cameras" className="block">
              <Card className="hover:shadow-xl hover:scale-105 transition-all cursor-pointer h-full">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                    <Icon name="RotateCw" size={32} className="text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">PTZ камеры</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Поворотные камеры с автоследованием
                  </p>
                  <div className="text-primary text-sm font-medium flex items-center justify-center gap-1">
                    Подробнее <Icon name="ArrowRight" size={16} />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/services/cameras/4k-cameras" className="block">
              <Card className="hover:shadow-xl hover:scale-105 transition-all cursor-pointer h-full">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
                    <Icon name="Maximize2" size={32} className="text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">4K камеры</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Ultra HD для точной идентификации
                  </p>
                  <div className="text-primary text-sm font-medium flex items-center justify-center gap-1">
                    Подробнее <Icon name="ArrowRight" size={16} />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/services/cameras/ip-cameras" className="block">
              <Card className="hover:shadow-xl hover:scale-105 transition-all cursor-pointer h-full">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <Icon name="Camera" size={32} className="text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">IP камеры</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Сетевые камеры с ИИ-процессором
                  </p>
                  <div className="text-primary text-sm font-medium flex items-center justify-center gap-1">
                    Подробнее <Icon name="ArrowRight" size={16} />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/services/surveillance" className="block">
              <Card className="hover:shadow-xl hover:scale-105 transition-all cursor-pointer h-full">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-100 rounded-full mb-4">
                    <Icon name="Video" size={32} className="text-cyan-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Видеонаблюдение</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Комплексные системы под ключ
                  </p>
                  <div className="text-primary text-sm font-medium flex items-center justify-center gap-1">
                    Подробнее <Icon name="ArrowRight" size={16} />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompatibleEquipment;
