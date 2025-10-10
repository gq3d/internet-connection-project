import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const cameraTypes = [
  {
    icon: 'Video',
    title: 'IP камеры Full HD',
    description: 'Цифровые камеры высокого разрешения для четкой картинки',
    specs: '1920x1080, PoE питание, ночное видение до 30м',
    price: 'от 8 000 ₽',
    link: '/services/cameras/ip-cameras'
  },
  {
    icon: 'Eye',
    title: '4K камеры',
    description: 'Камеры сверхвысокого разрешения для максимальной детализации',
    specs: '3840x2160, Smart детекция, ночное видение до 50м',
    price: 'от 15 000 ₽',
    link: '/services/cameras/4k-cameras'
  },
  {
    icon: 'Scan',
    title: 'PTZ камеры',
    description: 'Поворотные камеры с зумом для контроля больших территорий',
    specs: 'Поворот 360°, 20x зум, автоследование объектов',
    price: 'от 35 000 ₽',
    link: '/services/cameras/ptz-cameras'
  },
  {
    icon: 'Gauge',
    title: 'Тепловизионные камеры',
    description: 'Камеры тепловидения для периметровой охраны',
    specs: 'Детекция в полной темноте, дальность до 500м',
    price: 'от 85 000 ₽',
    link: '/services/cameras/thermal-cameras'
  }
];

const SurveillanceCameras = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Типы камер видеонаблюдения</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Профессиональные камеры для любых задач безопасности
        </p>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {cameraTypes.map((camera, index) => (
            <Link key={index} to={camera.link} className="group">
              <Card className="hover:shadow-2xl hover:border-primary transition-all duration-300 cursor-pointer h-full overflow-hidden border-2">
                <CardContent className="p-0">
                  <div className="flex flex-col">
                    <div className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 p-6 border-b">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <Icon name={camera.icon} size={32} className="text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold mb-1">{camera.title}</h3>
                            <span className="inline-block text-2xl font-bold text-primary">{camera.price}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 bg-card">
                      <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                        {camera.description}
                      </p>
                      <div className="flex items-start gap-2 bg-muted/50 rounded-lg p-3">
                        <Icon name="Check" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm font-medium text-foreground">{camera.specs}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SurveillanceCameras;