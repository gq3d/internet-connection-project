import Icon from '@/components/ui/icon';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ConnectionSchema() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-10">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-success/5 rounded-2xl p-8 md:p-12">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Как работает загородный 4G LTE интернет</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Простая и надёжная схема подключения для вашего дома
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Схема слева */}
              <div className="relative bg-gradient-to-br from-card via-card to-muted/30 backdrop-blur rounded-2xl p-10 border-2 border-primary/10 shadow-xl overflow-hidden">
                
                {/* Мобильная версия: горизонтальная схема */}
                <div className="lg:hidden flex items-center justify-between gap-3">
                  {/* Вышка слева */}
                  <div className="relative flex-shrink-0">
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20 relative z-10 group">
                        <Icon name="Radio" size={28} className="text-white" />
                        
                        {/* Волны сигнала */}
                        <div className="absolute inset-0 -z-10">
                          <div className="w-24 h-24 border-4 border-primary/20 rounded-full animate-ping"></div>
                        </div>
                        
                        {/* Анимация к антенне горизонтально */}
                        <div className="absolute top-0 left-0">
                          <div className="w-3 h-3 bg-primary rounded-full shadow-lg" style={{animation: 'signal-flow-mobile 2s linear infinite'}}></div>
                        </div>
                        <div className="absolute top-0 left-0">
                          <div className="w-2.5 h-2.5 bg-primary/80 rounded-full shadow-lg" style={{animation: 'signal-flow-mobile 2s linear infinite', animationDelay: '0.5s'}}></div>
                        </div>
                        <div className="absolute top-0 left-0">
                          <div className="w-3 h-3 bg-primary rounded-full shadow-lg" style={{animation: 'signal-flow-mobile 2s linear infinite', animationDelay: '1s'}}></div>
                        </div>
                      </div>
                      <div className="w-1 h-16 bg-gradient-to-b from-foreground/30 to-foreground/10 mt-1"></div>
                      <div className="w-0 h-0 border-l-[20px] border-l-transparent border-b-[30px] border-b-foreground/10 border-r-[20px] border-r-transparent"></div>
                    </div>
                    <p className="text-xs text-center mt-2 font-semibold">Базовая<br/>станция</p>
                  </div>

                  {/* Домик справа */}
                  <div className="relative flex-1">
                    <div className="relative mx-auto w-fit">
                      <div className="w-0 h-0 border-l-[80px] border-l-transparent border-b-[50px] border-b-muted border-r-[80px] border-r-transparent filter drop-shadow-md"></div>
                      
                      {/* Антенна */}
                      <div className="absolute -top-1 right-2 z-20">
                        <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-lg flex items-center justify-center shadow-xl border-2 border-white/30">
                          <Icon name="Antenna" size={20} className="text-white" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-success rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                        
                        {/* Анимация к роутеру вертикально */}
                        <div className="absolute top-0 left-0">
                          <div className="w-2 h-2 bg-secondary rounded-full shadow-lg" style={{animation: 'data-transfer-mobile 1.5s linear infinite'}}></div>
                        </div>
                        <div className="absolute top-0 left-0">
                          <div className="w-2 h-2 bg-secondary/80 rounded-full shadow-lg" style={{animation: 'data-transfer-mobile 1.5s linear infinite', animationDelay: '0.5s'}}></div>
                        </div>
                      </div>
                      
                      {/* Роутер */}
                      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10">
                        <div className="w-12 h-12 bg-gradient-to-br from-success to-success/80 rounded-lg flex items-center justify-center shadow-xl border-2 border-white/30">
                          <Icon name="Wifi" size={24} className="text-white" />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 border-2 border-success/30 rounded-full animate-ping"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Стены */}
                    <div className="border-4 border-muted p-4 rounded-b-xl bg-gradient-to-b from-card to-muted/20">
                      <div className="grid grid-cols-3 gap-3 mt-1">
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg">
                            <Icon name="Laptop" size={20} className="text-white" />
                          </div>
                          <p className="text-[10px] mt-1">Ноутбук</p>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-lg flex items-center justify-center shadow-lg">
                            <Icon name="Smartphone" size={20} className="text-white" />
                          </div>
                          <p className="text-[10px] mt-1">Телефон</p>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg">
                            <Icon name="Tv" size={20} className="text-white" />
                          </div>
                          <p className="text-[10px] mt-1">Smart TV</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Десктопная версия: вертикальная схема */}
                <div className="hidden lg:block relative">
                  {/* Крыша с роутером внутри */}
                  <div className="relative mx-auto mb-2 w-fit">
                    <div className="w-0 h-0
                      border-l-[140px] border-l-transparent
                      border-b-[90px] border-b-muted
                      border-r-[140px] border-r-transparent
                      filter drop-shadow-md">
                    </div>
                    
                    {/* Роутер внутри крыши */}
                    <div className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
                      <div className="relative group">
                        <div className="w-16 h-16 bg-gradient-to-br from-success via-success to-success/80 rounded-xl flex items-center justify-center shadow-2xl border-2 border-white/30 transform hover:scale-110 transition-transform">
                          <Icon name="Wifi" size={32} className="text-white" />
                        </div>
                        
                        {/* Tooltip */}
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-success text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap shadow-lg z-50">
                          Домашний роутер Wi-Fi
                        </div>
                        
                        {/* Пульсирующие волны Wi-Fi */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 border-2 border-success/30 rounded-full animate-ping"></div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-24 h-24 border-2 border-success/20 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-28 h-28 border-2 border-success/10 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Антенна снаружи */}
                    <div className="absolute -top-2 right-4 flex flex-col items-center group">
                      <div className="relative">
                        <div className="w-14 h-14 bg-gradient-to-br from-secondary via-secondary to-secondary/80 rounded-xl flex items-center justify-center shadow-2xl border-2 border-white/30 transform hover:scale-110 transition-transform">
                          <Icon name="Antenna" size={28} className="text-white" />
                        </div>
                        {/* Индикатор сигнала */}
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                        
                        {/* Tooltip */}
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-secondary text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap shadow-lg">
                          Приём сигнала LTE
                        </div>
                        
                        {/* Анимация передачи данных от антенны к роутеру */}
                        <div className="absolute top-0 left-0">
                          <div className="w-3 h-3 bg-secondary rounded-full animate-data-transfer shadow-lg"></div>
                        </div>
                        <div className="absolute top-0 left-0">
                          <div className="w-2.5 h-2.5 bg-secondary/80 rounded-full animate-data-transfer shadow-lg" style={{ animationDelay: '0.6s' }}></div>
                        </div>
                        <div className="absolute top-0 left-0">
                          <div className="w-3 h-3 bg-secondary rounded-full animate-data-transfer shadow-lg" style={{ animationDelay: '1.2s' }}></div>
                        </div>
                        <div className="absolute top-0 left-0">
                          <div className="w-2 h-2 bg-secondary/60 rounded-full animate-data-transfer shadow-lg" style={{ animationDelay: '0.3s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Стены дома */}
                  <div className="border-4 border-muted p-8 rounded-b-2xl relative bg-gradient-to-b from-card to-muted/20 shadow-inner">
                    {/* Устройства внутри дома */}
                    <div className="grid grid-cols-3 gap-6 mt-2">
                      {/* Ноутбук */}
                      <div className="flex flex-col items-center group">
                        <div className="relative mb-3">
                          <div className="w-16 h-16 bg-gradient-to-br from-primary via-primary to-primary/80 rounded-xl flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform border border-primary/20">
                            <Icon name="Laptop" size={32} className="text-white" />
                          </div>
                          <div className="absolute -top-2 -right-2">
                            <div className="w-6 h-6 bg-success/20 rounded-full flex items-center justify-center animate-pulse">
                              <Icon name="Wifi" size={14} className="text-success" />
                            </div>
                          </div>
                          {/* Tooltip */}
                          <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-foreground text-background text-xs px-3 py-1 rounded-lg whitespace-nowrap shadow-lg z-50">
                            Wi-Fi подключен
                          </div>
                        </div>
                        <p className="text-xs font-medium text-muted-foreground">Ноутбук</p>
                      </div>

                      {/* Смартфон */}
                      <div className="flex flex-col items-center group">
                        <div className="relative mb-3">
                          <div className="w-16 h-16 bg-gradient-to-br from-secondary via-secondary to-secondary/80 rounded-xl flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform border border-secondary/20">
                            <Icon name="Smartphone" size={32} className="text-white" />
                          </div>
                          <div className="absolute -top-2 -right-2">
                            <div className="w-6 h-6 bg-success/20 rounded-full flex items-center justify-center animate-pulse" style={{ animationDelay: '0.3s' }}>
                              <Icon name="Wifi" size={14} className="text-success" />
                            </div>
                          </div>
                          {/* Tooltip */}
                          <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-foreground text-background text-xs px-3 py-1 rounded-lg whitespace-nowrap shadow-lg z-50">
                            Wi-Fi подключен
                          </div>
                        </div>
                        <p className="text-xs font-medium text-muted-foreground">Смартфон</p>
                      </div>

                      {/* ТВ */}
                      <div className="flex flex-col items-center group">
                        <div className="relative mb-3">
                          <div className="w-16 h-16 bg-gradient-to-br from-primary via-primary to-primary/80 rounded-xl flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform border border-primary/20">
                            <Icon name="Tv" size={32} className="text-white" />
                          </div>
                          <div className="absolute -top-2 -right-2">
                            <div className="w-6 h-6 bg-success/20 rounded-full flex items-center justify-center animate-pulse" style={{ animationDelay: '0.6s' }}>
                              <Icon name="Wifi" size={14} className="text-success" />
                            </div>
                          </div>
                          {/* Tooltip */}
                          <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-foreground text-background text-xs px-3 py-1 rounded-lg whitespace-nowrap shadow-lg z-50">
                            Wi-Fi подключен
                          </div>
                        </div>
                        <p className="text-xs font-medium text-muted-foreground">Smart TV</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Базовая станция справа - только для десктопа */}
              <div className="hidden lg:flex relative flex-col items-center lg:items-start">

                {/* Вышка */}
                <div className="relative">
                  {/* Волны сигнала */}
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 -z-10">
                    <div className="w-32 h-32 border-4 border-primary/20 rounded-full animate-ping"></div>
                  </div>
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 -z-10">
                    <div className="w-24 h-24 border-4 border-primary/30 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                  </div>
                  
                  {/* Антенна вышки */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20 relative z-10 group">
                      <Icon name="Radio" size={32} className="text-white" />
                      
                      {/* Tooltip */}
                      <div className="absolute -top-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap shadow-lg z-50">
                        Базовая станция 4G LTE
                      </div>
                      
                      {/* Анимация передачи сигнала от вышки к антенне */}
                      <div className="absolute top-0 left-0">
                        <div className="w-4 h-4 bg-primary rounded-full shadow-lg animate-signal-flow"></div>
                      </div>
                      <div className="absolute top-0 left-0">
                        <div className="w-3 h-3 bg-primary/80 rounded-full shadow-lg animate-signal-flow" style={{ animationDelay: '0.5s' }}></div>
                      </div>
                      <div className="absolute top-0 left-0">
                        <div className="w-4 h-4 bg-primary rounded-full shadow-lg animate-signal-flow" style={{ animationDelay: '1s' }}></div>
                      </div>
                      <div className="absolute top-0 left-0">
                        <div className="w-3 h-3 bg-primary/60 rounded-full shadow-lg animate-signal-flow" style={{ animationDelay: '1.5s' }}></div>
                      </div>
                      <div className="absolute top-0 left-0">
                        <div className="w-2 h-2 bg-primary/80 rounded-full shadow-lg animate-signal-flow" style={{ animationDelay: '0.25s' }}></div>
                      </div>
                      <div className="absolute top-0 left-0">
                        <div className="w-2 h-2 bg-primary/60 rounded-full shadow-lg animate-signal-flow" style={{ animationDelay: '0.75s' }}></div>
                      </div>
                    </div>
                    
                    {/* Мачта */}
                    <div className="w-1 h-32 bg-gradient-to-b from-foreground/30 to-foreground/10"></div>
                    <div className="w-8 h-1 bg-foreground/20 -translate-y-28"></div>
                    <div className="w-12 h-1 bg-foreground/20 -translate-y-20"></div>
                    <div className="w-16 h-1 bg-foreground/20 -translate-y-12"></div>
                    
                    {/* Основание */}
                    <div className="w-0 h-0 -mt-4
                      border-l-[40px] border-l-transparent
                      border-b-[60px] border-b-foreground/10
                      border-r-[40px] border-r-transparent">
                    </div>
                  </div>
                  
                  <p className="text-center mt-4 font-semibold">Базовая станция оператора</p>
                  <p className="text-sm text-muted-foreground text-center">4G/LTE сигнал</p>
                </div>
              </div>
            </div>

            {/* Преимущества */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/services/internet" className="flex items-start gap-3 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-5 border border-primary/20 hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
                <div className="bg-primary p-3 rounded-lg flex-shrink-0">
                  <Icon name="Zap" size={24} className="text-white" />
                </div>
                <div>
                  <h5 className="font-bold mb-1 text-lg">Быстрая установка</h5>
                  <p className="text-sm text-muted-foreground">Быстрое подключение</p>
                </div>
              </Link>
              <Link to="/services/cellular-booster" className="flex items-start gap-3 bg-gradient-to-br from-success/10 to-success/5 rounded-xl p-5 border border-success/20 hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
                <div className="bg-success p-3 rounded-lg flex-shrink-0">
                  <Icon name="Signal" size={24} className="text-white" />
                </div>
                <div>
                  <h5 className="font-bold mb-1 text-lg">Стабильный сигнал</h5>
                  <p className="text-sm text-muted-foreground">До 250 Мбит/с</p>
                </div>
              </Link>
              <Link to="/services/wifi" className="flex items-start gap-3 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl p-5 border border-secondary/20 hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
                <div className="bg-secondary p-3 rounded-lg flex-shrink-0">
                  <Icon name="Home" size={24} className="text-white" />
                </div>
                <div>
                  <h5 className="font-bold mb-1 text-lg">Для всего дома</h5>
                  <p className="text-sm text-muted-foreground">Покрытие по всей территории</p>
                </div>
              </Link>
            </div>

            {/* Стильные ссылки */}
            <div className={`mt-12 grid md:grid-cols-3 gap-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <a 
                href="/coverage#speed-test"
                className="block bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 hover:from-primary/10 hover:via-secondary/10 hover:to-primary/10 border-2 border-primary/20 hover:border-primary/40 rounded-2xl p-6 transition-all duration-300 group shadow-lg hover:shadow-2xl"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <Icon name="Gauge" size={32} className="text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-success rounded-full flex items-center justify-center border-4 border-background shadow-lg animate-pulse">
                      <Icon name="Zap" size={14} className="text-white" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Тест скорости</h4>
                    <p className="text-muted-foreground text-sm">Проверьте скорость интернета</p>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <span>Перейти к тесту</span>
                    <Icon name="ArrowRight" size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </a>

              <a 
                href="/coverage#coverage-map"
                className="block bg-gradient-to-r from-violet-500/5 via-purple-500/5 to-violet-500/5 hover:from-violet-500/10 hover:via-purple-500/10 hover:to-violet-500/10 border-2 border-violet-500/20 hover:border-violet-500/40 rounded-2xl p-6 transition-all duration-300 group shadow-lg hover:shadow-2xl"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <Icon name="Map" size={32} className="text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-green-500 rounded-full flex items-center justify-center border-4 border-background shadow-lg">
                      <Icon name="MapPin" size={14} className="text-white" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-bold mb-2 bg-gradient-to-r from-violet-500 to-purple-600 bg-clip-text text-transparent">Карта покрытия</h4>
                    <p className="text-muted-foreground text-sm">Посмотрите зоны покрытия</p>
                  </div>
                  <div className="flex items-center gap-2 text-violet-500 font-semibold">
                    <span>Открыть карту</span>
                    <Icon name="ArrowRight" size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </a>
              
              <Link 
                to="/equipment"
                className="block bg-gradient-to-r from-orange-500/5 via-amber-500/5 to-orange-500/5 hover:from-orange-500/10 hover:via-amber-500/10 hover:to-orange-500/10 border-2 border-orange-500/20 hover:border-orange-500/40 rounded-2xl p-6 transition-all duration-300 group shadow-lg hover:shadow-2xl hover:scale-105"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl">
                      <Icon name="Cpu" size={32} className="text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center border-4 border-background shadow-lg animate-pulse">
                      <Icon name="Antenna" size={14} className="text-white" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-bold mb-2 bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">Оборудование</h4>
                    <p className="text-muted-foreground text-sm">MIMO антенны и роутеры</p>
                  </div>
                  <div className="flex items-center gap-2 text-orange-500 font-semibold">
                    <span>Посмотреть примеры</span>
                    <Icon name="ArrowRight" size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}