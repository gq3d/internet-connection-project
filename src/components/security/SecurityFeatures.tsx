import Icon from '@/components/ui/icon';

const SecurityFeatures = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Преимущества наших систем</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Современные технологии</h3>
              <p className="text-muted-foreground mb-6">
                Используем только проверенное оборудование ведущих мировых производителей. 
                Все системы интегрируются между собой и управляются через единое приложение.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Smartphone" size={20} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Мобильное управление</h4>
                    <p className="text-sm text-muted-foreground">Контроль системы с любой точки мира</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Cloud" size={20} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Облачное хранение</h4>
                    <p className="text-sm text-muted-foreground">Надежное хранение записей в облаке</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Bell" size={20} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Мгновенные уведомления</h4>
                    <p className="text-sm text-muted-foreground">SMS и push-уведомления о событиях</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 text-center">
              <Icon name="Shield" size={80} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Профессиональная установка</h3>
              <p className="text-muted-foreground mb-4">
                Наши инженеры имеют сертификаты и многолетний опыт работы с системами безопасности
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm">
                <div className="flex items-center">
                  <Icon name="Award" size={16} className="text-success mr-1" />
                  <span>Сертифицированы</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" size={16} className="text-success mr-1" />
                  <span>5+ лет опыта</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityFeatures;
