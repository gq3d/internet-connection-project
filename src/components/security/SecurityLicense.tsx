import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const SecurityLicense = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 px-4 py-2 bg-success text-white border-0">
              <Icon name="ShieldCheck" size={18} className="mr-2" />
              Официально лицензированная компания
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Лицензия МВД РФ</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Мы работаем на основании официальной лицензии на осуществление частной охранной деятельности
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* License Image */}
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-2 border-primary/20">
              <CardContent className="p-0">
                <img 
                  src="https://cdn.poehali.dev/files/70ef45ba-7179-4d37-ae04-17c04f362309.png" 
                  alt="Лицензия МВД РФ на осуществление частной охранной деятельности" 
                  className="w-full h-auto"
                />
              </CardContent>
            </Card>

            {/* License Details */}
            <div className="space-y-6">
              <Card className="bg-white border-2 border-success/20">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-success/10 rounded-full flex-shrink-0">
                      <Icon name="FileCheck" size={24} className="text-success" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 text-success">Номер лицензии</h3>
                      <p className="text-3xl font-mono font-bold text-foreground">
                        Л056-00106-77/00029868
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                      <Icon name="Calendar" size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Дата выдачи</h3>
                      <p className="text-2xl font-semibold text-muted-foreground">
                        11 января 2000 г.
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Icon name="Check" size={18} className="text-success" />
                        <span className="text-sm font-medium">Официальная регистрация в МВД</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Check" size={18} className="text-success" />
                        <span className="text-sm font-medium">Полный спектр охранных услуг</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Check" size={18} className="text-success" />
                        <span className="text-sm font-medium">Соответствие требованиям законодательства</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Check" size={18} className="text-success" />
                        <span className="text-sm font-medium">Квалифицированные сотрудники</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <Icon name="Info" size={24} className="text-primary" />
                    <p className="text-sm text-muted-foreground">
                      Вы можете проверить подлинность нашей лицензии на официальном сайте МВД РФ
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional Trust Indicators */}
          <div className="grid md:grid-cols-4 gap-4 mt-12">
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-success/10 rounded-full mb-3">
                  <Icon name="Award" size={24} className="text-success" />
                </div>
                <h4 className="font-bold text-lg mb-1">25+ лет</h4>
                <p className="text-xs text-muted-foreground">на рынке охранных услуг</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
                  <Icon name="Users" size={24} className="text-primary" />
                </div>
                <h4 className="font-bold text-lg mb-1">500+</h4>
                <p className="text-xs text-muted-foreground">защищенных объектов</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-full mb-3">
                  <Icon name="ShieldCheck" size={24} className="text-secondary" />
                </div>
                <h4 className="font-bold text-lg mb-1">100%</h4>
                <p className="text-xs text-muted-foreground">законность услуг</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-success/10 rounded-full mb-3">
                  <Icon name="Lock" size={24} className="text-success" />
                </div>
                <h4 className="font-bold text-lg mb-1">24/7</h4>
                <p className="text-xs text-muted-foreground">круглосуточная защита</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityLicense;