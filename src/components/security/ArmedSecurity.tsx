import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ArmedSecurity = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Icon name="ShieldAlert" size={32} className="text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Вооружённая охрана премиум-класса
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Профессиональная защита частных домовладений и коттеджных посёлков в Московской области
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <img 
                src="/img/95a782e0-6509-497c-baf4-462b23cc7fe2.jpg" 
                alt="Профессиональный охранник" 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <p className="text-white font-semibold p-4">Лицензированные специалисты</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <img 
                src="/img/4fe3dca8-ba1d-4984-a307-0d994a66e08b.jpg" 
                alt="Центр мониторинга" 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <p className="text-white font-semibold p-4">Центр мониторинга 24/7</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <img 
                src="/img/f7b0d163-1f30-4e6a-9a6c-1f67cb6ff35b.jpg" 
                alt="Охрана объектов" 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <p className="text-white font-semibold p-4">Элитные объекты</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                      <Icon name="Users" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Охрана объектов недвижимости</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <Icon name="Check" size={16} className="text-success mr-3 mt-0.5 flex-shrink-0" />
                          <span>Круглосуточная охрана частных домов и коттеджей</span>
                        </li>
                        <li className="flex items-start">
                          <Icon name="Check" size={16} className="text-success mr-3 mt-0.5 flex-shrink-0" />
                          <span>Патрулирование территории коттеджных поселков</span>
                        </li>
                        <li className="flex items-start">
                          <Icon name="Check" size={16} className="text-success mr-3 mt-0.5 flex-shrink-0" />
                          <span>Контроль периметра и въездных групп</span>
                        </li>
                        <li className="flex items-start">
                          <Icon name="Check" size={16} className="text-success mr-3 mt-0.5 flex-shrink-0" />
                          <span>Сопровождение массовых мероприятий</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-full flex-shrink-0">
                      <Icon name="UserCheck" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Личная охрана VIP-класса</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <Icon name="Check" size={16} className="text-success mr-3 mt-0.5 flex-shrink-0" />
                          <span>Персональная защита руководителей и VIP-персон</span>
                        </li>
                        <li className="flex items-start">
                          <Icon name="Check" size={16} className="text-success mr-3 mt-0.5 flex-shrink-0" />
                          <span>Сопровождение и обеспечение безопасности</span>
                        </li>
                        <li className="flex items-start">
                          <Icon name="Check" size={16} className="text-success mr-3 mt-0.5 flex-shrink-0" />
                          <span>Конфиденциальность гарантирована</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                      <Icon name="Shield" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Профессиональные охранники</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <Icon name="Check" size={16} className="text-success mr-3 mt-0.5 flex-shrink-0" />
                          <span>Лицензированные специалисты с военным и правоохранительным опытом</span>
                        </li>
                        <li className="flex items-start">
                          <Icon name="Check" size={16} className="text-success mr-3 mt-0.5 flex-shrink-0" />
                          <span>Постоянная физическая и огневая подготовка</span>
                        </li>
                        <li className="flex items-start">
                          <Icon name="Check" size={16} className="text-success mr-3 mt-0.5 flex-shrink-0" />
                          <span>Разрешение на ношение и применение оружия</span>
                        </li>
                        <li className="flex items-start">
                          <Icon name="Check" size={16} className="text-success mr-3 mt-0.5 flex-shrink-0" />
                          <span>Строгий отбор и проверка СБ</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-success/10 rounded-full flex-shrink-0">
                      <Icon name="Radar" size={24} className="text-success" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Комплексный подход</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <Icon name="Check" size={16} className="text-success mr-3 mt-0.5 flex-shrink-0" />
                          <span>Оценка рисков и разработка индивидуального плана безопасности</span>
                        </li>
                        <li className="flex items-start">
                          <Icon name="Check" size={16} className="text-success mr-3 mt-0.5 flex-shrink-0" />
                          <span>Интеграция с системами видеонаблюдения и сигнализации</span>
                        </li>
                        <li className="flex items-start">
                          <Icon name="Check" size={16} className="text-success mr-3 mt-0.5 flex-shrink-0" />
                          <span>Взаимодействие с правоохранительными органами</span>
                        </li>
                        <li className="flex items-start">
                          <Icon name="Check" size={16} className="text-success mr-3 mt-0.5 flex-shrink-0" />
                          <span>Гибкие графики охраны: постоянная, временная, событийная</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-all duration-300 border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                  <Icon name="Clock" size={28} className="text-primary" />
                </div>
                <h4 className="font-bold text-lg mb-2">24/7</h4>
                <p className="text-sm text-muted-foreground">Круглосуточная охрана без выходных</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300 border-success/20">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-success/10 rounded-full mb-4">
                  <Icon name="Award" size={28} className="text-success" />
                </div>
                <h4 className="font-bold text-lg mb-2">Лицензия</h4>
                <p className="text-sm text-muted-foreground">Все необходимые разрешения и аккредитации</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300 border-secondary/20">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-secondary/10 rounded-full mb-4">
                  <Icon name="Zap" size={28} className="text-secondary" />
                </div>
                <h4 className="font-bold text-lg mb-2">Быстрая реакция</h4>
                <p className="text-sm text-muted-foreground">Экстренное реагирование на угрозы</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300 border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                  <Icon name="Lock" size={28} className="text-primary" />
                </div>
                <h4 className="font-bold text-lg mb-2">Конфиденциальность</h4>
                <p className="text-sm text-muted-foreground">NDA и полная защита данных</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Получите консультацию специалиста по безопасности</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Мы проведем анализ объекта, оценим риски и разработаем индивидуальный план защиты. 
                Конфиденциальность гарантирована.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <div className="flex items-center space-x-2 text-success font-semibold text-lg">
                  <Icon name="Phone" size={20} />
                  <a href="tel:+79015000078" className="hover:underline">+7 (901) 500-00-78</a>
                </div>
                <div className="flex items-center space-x-2 text-success font-semibold text-lg">
                  <Icon name="Phone" size={20} />
                  <a href="tel:+79015000087" className="hover:underline">+7 (901) 500-00-87</a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ArmedSecurity;
