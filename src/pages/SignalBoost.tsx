import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import Icon from '@/components/ui/icon';

export default function SignalBoost() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Усиление 4G/LTE сигнала для дачи и загородного дома | NetConnect</title>
        <meta name="description" content="Решения для усиления 4G/LTE сигнала в Московской области. Антенны, репитеры, роутеры. Стабильный интернет даже при слабом сигнале. ☎️ +7 (901) 500-00-78" />
        <meta name="keywords" content="усилитель 4g сигнала, усилитель 3g, антенна для интернета, репитер 4g, усиление сигнала на даче, усилитель интернета для дачи" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <div className="pt-20 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center px-4 py-2 bg-primary/10 rounded-full mb-6">
                  <Icon name="Radio" size={20} className="text-primary mr-2" />
                  <span className="text-sm font-semibold text-primary uppercase tracking-wide">Технические решения</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Решения для усиления 4G/LTE сигнала
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Стабильный интернет даже при слабом сигнале базовой станции
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-16">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 border-2 border-primary/20">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4">
                    <Icon name="Antenna" size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Антенна + Роутер</h3>
                  <p className="text-sm text-muted-foreground mb-3">Пассивное усиление для максимальной скорости</p>
                  <div className="text-2xl font-bold text-primary">от 16 800 ₽</div>
                </div>

                <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-6 border-2 border-secondary/20">
                  <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-4">
                    <Icon name="Radio" size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Репитер</h3>
                  <p className="text-sm text-muted-foreground mb-3">Активное усиление для всех устройств</p>
                  <div className="text-2xl font-bold text-secondary">от 18 000 ₽</div>
                </div>

                <div className="bg-gradient-to-br from-success/10 to-success/5 rounded-2xl p-6 border-2 border-success/20">
                  <div className="w-16 h-16 bg-success rounded-xl flex items-center justify-center mb-4">
                    <Icon name="Wifi" size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Уличный роутер</h3>
                  <p className="text-sm text-muted-foreground mb-3">Антенна со встроенным роутером</p>
                  <div className="text-2xl font-bold text-success">от 45 000 ₽</div>
                </div>
              </div>

              <div className="bg-card border rounded-2xl p-8 mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Icon name="Info" size={32} className="text-primary" />
                  Как работает усиление сигнала
                </h2>
                <div className="space-y-6 text-muted-foreground">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Пассивное усиление (Антенна + Роутер)</h3>
                    <p>
                      Направленная антенна устанавливается на крыше и направляется на базовую станцию оператора. 
                      Антенна принимает сигнал и передаёт его по кабелю на 4G-роутер, который раздаёт интернет по WiFi. 
                      Усиление происходит за счёт коэффициента усиления антенны (7-24 дБ).
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Активное усиление (Репитер)</h3>
                    <p>
                      Наружная антенна принимает слабый сигнал от базовой станции и передаёт его на репитер. 
                      Репитер многократно усиливает сигнал (50-80 дБ) и передаёт на внутреннюю антенну, 
                      которая распределяет его по всему помещению. Работает для всех устройств одновременно.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8 mb-12">
                <div className="bg-gradient-to-br from-primary/5 to-transparent border-2 border-primary/20 rounded-2xl p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
                      <Icon name="Antenna" size={32} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4">Антенна + Роутер с WiFi</h3>
                      
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-semibold text-success mb-2 flex items-center gap-2">
                            <Icon name="CheckCircle2" size={20} />
                            Преимущества
                          </h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>✓ Максимальная скорость интернета (поддержка MIMO)</li>
                            <li>✓ Доступная стоимость (от 16 800 ₽)</li>
                            <li>✓ Простая установка</li>
                            <li>✓ Подключение нескольких устройств</li>
                            <li>✓ Долговечность</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-destructive mb-2 flex items-center gap-2">
                            <Icon name="XCircle" size={20} />
                            Недостатки
                          </h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• Не усиливает голосовую связь</li>
                            <li>• Требуется SIM-карта</li>
                            <li>• Работает с одним оператором</li>
                            <li>• Ограничение длины кабеля</li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-muted/50 rounded-xl p-4">
                        <p className="text-sm font-semibold mb-2">Рекомендуется:</p>
                        <p className="text-sm text-muted-foreground">
                          Для загородных домов и дач при уровне сигнала от -70 до -95 дБм. 
                          Идеально для тех, кому нужен только интернет с максимальной скоростью.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-secondary/5 to-transparent border-2 border-secondary/20 rounded-2xl p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-secondary rounded-xl flex items-center justify-center">
                      <Icon name="Radio" size={32} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4">Активный репитер (усилитель)</h3>
                      
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-semibold text-success mb-2 flex items-center gap-2">
                            <Icon name="CheckCircle2" size={20} />
                            Преимущества
                          </h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>✓ Усиливает сигнал для всех устройств</li>
                            <li>✓ Улучшает голосовую связь и интернет</li>
                            <li>✓ Работает со всеми операторами</li>
                            <li>✓ Не требует SIM-карты</li>
                            <li>✓ Большая площадь покрытия (50-300 м²)</li>
                            <li>✓ Максимальное усиление (50-80 дБ)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-destructive mb-2 flex items-center gap-2">
                            <Icon name="XCircle" size={20} />
                            Недостатки
                          </h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• Стоимость от 18 000 ₽</li>
                            <li>• Сложная установка</li>
                            <li>• Не поддерживает MIMO</li>
                            <li>• Скорость ниже на 30-50%</li>
                            <li>• Требует точной настройки</li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-muted/50 rounded-xl p-4">
                        <p className="text-sm font-semibold mb-2">Рекомендуется:</p>
                        <p className="text-sm text-muted-foreground">
                          Для офисов, баз отдыха, гостиниц. При очень слабом сигнале (хуже -95 дБм). 
                          Когда нужно усилить и интернет, и голосовую связь для нескольких человек.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-success/5 to-transparent border-2 border-success/20 rounded-2xl p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-success rounded-xl flex items-center justify-center">
                      <Icon name="Wifi" size={32} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4">Уличный роутер со встроенной антенной</h3>
                      
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-semibold text-success mb-2 flex items-center gap-2">
                            <Icon name="CheckCircle2" size={20} />
                            Преимущества
                          </h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>✓ Минимальные потери сигнала</li>
                            <li>✓ Максимальная скорость интернета</li>
                            <li>✓ Длина кабеля до 80 м (PoE)</li>
                            <li>✓ Поддержка MIMO</li>
                            <li>✓ Работа при -30...+50°C</li>
                            <li>✓ Защита от влаги и пыли</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-destructive mb-2 flex items-center gap-2">
                            <Icon name="XCircle" size={20} />
                            Недостатки
                          </h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• Требуется SIM-карта</li>
                            <li>• Не усиливает голосовую связь</li>
                            <li>• Работает с одним оператором</li>
                            <li>• Стоимость от 45 000 ₽</li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-muted/50 rounded-xl p-4">
                        <p className="text-sm font-semibold mb-2">Рекомендуется:</p>
                        <p className="text-sm text-muted-foreground">
                          Оптимальное решение для загородных домов с большим расстоянием от точки ввода. 
                          Максимальная скорость благодаря минимальным потерям.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-8 mb-12">
                <h2 className="text-3xl font-bold mb-6 text-center">Как выбрать решение?</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-card rounded-xl p-6 border-2 border-primary/20">
                    <div className="text-center mb-4">
                      <div className="text-4xl font-bold text-primary mb-2">-70 до -85 дБм</div>
                      <p className="text-sm text-muted-foreground">Хороший сигнал</p>
                    </div>
                    <div className="space-y-2">
                      <p className="font-semibold">Рекомендация:</p>
                      <p className="text-sm text-muted-foreground">Антенна + Роутер</p>
                    </div>
                  </div>

                  <div className="bg-card rounded-xl p-6 border-2 border-secondary/20">
                    <div className="text-center mb-4">
                      <div className="text-4xl font-bold text-secondary mb-2">-85 до -95 дБм</div>
                      <p className="text-sm text-muted-foreground">Слабый сигнал</p>
                    </div>
                    <div className="space-y-2">
                      <p className="font-semibold">Рекомендация:</p>
                      <p className="text-sm text-muted-foreground">Мощная антенна + Роутер или средний репитер</p>
                    </div>
                  </div>

                  <div className="bg-card rounded-xl p-6 border-2 border-success/20">
                    <div className="text-center mb-4">
                      <div className="text-4xl font-bold text-success mb-2">хуже -95 дБм</div>
                      <p className="text-sm text-muted-foreground">Очень слабый сигнал</p>
                    </div>
                    <div className="space-y-2">
                      <p className="font-semibold">Рекомендация:</p>
                      <p className="text-sm text-muted-foreground">Мощный репитер</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border rounded-2xl p-8 mb-12">
                <h2 className="text-3xl font-bold mb-6">Частые вопросы</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <Icon name="HelpCircle" size={20} className="text-primary" />
                      Что лучше: антенна или репитер?
                    </h3>
                    <p className="text-muted-foreground pl-7">
                      Для максимальной скорости интернета — антенна + роутер с MIMO. 
                      Для комплексного решения (интернет + голосовая связь для многих пользователей) — репитер.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <Icon name="HelpCircle" size={20} className="text-primary" />
                      Можно ли усилить сигнал нескольких операторов?
                    </h3>
                    <p className="text-muted-foreground pl-7">
                      Да, для этого нужен многодиапазонный репитер (800/900/1800/2100/2600 МГц). 
                      Антенна + роутер работает только с одним оператором.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <Icon name="HelpCircle" size={20} className="text-primary" />
                      Как узнать уровень сигнала на моём участке?
                    </h3>
                    <p className="text-muted-foreground pl-7">
                      Используйте приложения для Android: «Сотовые вышки, локатор» или «ДалСВЯЗЬ — замер сигнала». 
                      Или позвоните нам — мы проведём замер.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <Icon name="HelpCircle" size={20} className="text-primary" />
                      Сколько стоит установка?
                    </h3>
                    <p className="text-muted-foreground pl-7">
                      Стоимость установки зависит от сложности монтажа и высоты. 
                      Обычно от 8 000 ₽. При покупке оборудования у нас — скидка на установку.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-2xl p-8 border-2 border-primary/30">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
                
                <div className="relative z-10 text-center">
                  <Icon name="PhoneCall" size={48} className="text-primary mx-auto mb-4" />
                  <h2 className="text-3xl font-bold mb-4">Бесплатная консультация</h2>
                  <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Наши специалисты помогут подобрать оптимальное решение для усиления сигнала на вашем объекте. 
                    Проведём замер уровня сигнала и рассчитаем стоимость.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a 
                      href="tel:+79015000078" 
                      className="flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all shadow-lg hover:scale-105"
                    >
                      <Icon name="Phone" size={24} />
                      +7 (901) 500-00-78
                    </a>
                    <a 
                      href="https://wa.me/79015000078" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#20bd5a] transition-all shadow-lg hover:scale-105"
                    >
                      <Icon name="MessageCircle" size={24} />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}