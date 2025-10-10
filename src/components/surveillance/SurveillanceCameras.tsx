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
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Типы камер видеонаблюдения</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {cameraTypes.map((camera, index) => (
            <Link key={index} to={camera.link}>
              <Card className="hover:shadow-xl hover:scale-[1.02] hover:border-primary/30 transition-all duration-300 cursor-pointer h-full">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                      <Icon name={camera.icon} size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold">{camera.title}</h3>
                        <span className="text-lg font-bold text-primary">{camera.price}</span>
                      </div>
                      <p className="text-muted-foreground mb-3">{camera.description}</p>
                      <p className="text-sm text-secondary font-medium">{camera.specs}</p>
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