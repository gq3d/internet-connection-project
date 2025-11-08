import Icon from '@/components/ui/icon';

export default function BondingBenefits() {
  return (
    <>
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Преимущества технологии</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-card border rounded-xl p-6">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <Icon name="Zap" size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Высокая скорость</h3>
              <p className="text-muted-foreground text-sm">
                Суммарная пропускная способность всех каналов — до 100+ Мб/с и выше
              </p>
            </div>

            <div className="bg-card border rounded-xl p-6">
              <div className="p-3 bg-green-500/10 rounded-lg w-fit mb-4">
                <Icon name="ShieldCheck" size={28} className="text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Надёжность</h3>
              <p className="text-muted-foreground text-sm">
                Если один канал упадёт, остальные продолжат работать — интернет не пропадёт
              </p>
            </div>

            <div className="bg-card border rounded-xl p-6">
              <div className="p-3 bg-secondary/10 rounded-lg w-fit mb-4">
                <Icon name="TrendingUp" size={28} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Масштабируемость</h3>
              <p className="text-muted-foreground text-sm">
                Легко добавить ещё каналы для увеличения скорости и надёжности
              </p>
            </div>

            <div className="bg-card border rounded-xl p-6">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <Icon name="Globe" size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Независимость</h3>
              <p className="text-muted-foreground text-sm">
                Не зависите от одного провайдера — используете лучшее от разных операторов
              </p>
            </div>

            <div className="bg-card border rounded-xl p-6">
              <div className="p-3 bg-green-500/10 rounded-lg w-fit mb-4">
                <Icon name="Users" size={28} className="text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Для бизнеса</h3>
              <p className="text-muted-foreground text-sm">
                Идеально для офисов, онлайн-сервисов, стриминга, видеоконференций
              </p>
            </div>

            <div className="bg-card border rounded-xl p-6">
              <div className="p-3 bg-secondary/10 rounded-lg w-fit mb-4">
                <Icon name="Settings" size={28} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Балансировка</h3>
              <p className="text-muted-foreground text-sm">
                Умное распределение нагрузки между каналами для оптимальной работы
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Для кого это решение?</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-card border rounded-xl p-6">
              <Icon name="Building2" size={32} className="text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Офисы и компании</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Стабильный интернет для бизнеса</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Резервирование каналов связи</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Экономия на подключении</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border rounded-xl p-6">
              <Icon name="Store" size={32} className="text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Торговые точки</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Бесперебойная работа эквайринга</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Удалённый доступ к системам</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Видеонаблюдение и мониторинг</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border rounded-xl p-6">
              <Icon name="Video" size={32} className="text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Стриминг и контент</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Высокая скорость отдачи</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Стабильное качество трансляций</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Мобильность для выездных эфиров</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border rounded-xl p-6">
              <Icon name="Wifi" size={32} className="text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Загородные объекты</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Решение для дач и коттеджей</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Автономная работа</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Удалённое управление</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
