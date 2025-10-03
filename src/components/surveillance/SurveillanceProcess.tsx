import Icon from '@/components/ui/icon';

const SurveillanceProcess = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Этапы установки видеонаблюдения</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full mb-4 text-xl font-bold">1</div>
              <h3 className="font-semibold mb-2">Обследование объекта</h3>
              <p className="text-sm text-muted-foreground">Выезд инженера для оценки и составления схемы размещения камер</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full mb-4 text-xl font-bold">2</div>
              <h3 className="font-semibold mb-2">Подбор оборудования</h3>
              <p className="text-sm text-muted-foreground">Выбор камер и регистратора под ваши задачи и бюджет</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full mb-4 text-xl font-bold">3</div>
              <h3 className="font-semibold mb-2">Монтаж системы</h3>
              <p className="text-sm text-muted-foreground">Установка камер, прокладка кабелей и подключение оборудования</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full mb-4 text-xl font-bold">4</div>
              <h3 className="font-semibold mb-2">Настройка и обучение</h3>
              <p className="text-sm text-muted-foreground">Конфигурация системы и обучение работе с приложением</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurveillanceProcess;
