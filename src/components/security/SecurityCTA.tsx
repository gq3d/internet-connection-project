import Icon from '@/components/ui/icon';

const SecurityCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Защитите свой объект уже сегодня</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Получите бесплатную консультацию по выбору системы безопасности для вашего объекта
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-success font-semibold">
            <div className="flex items-center space-x-2">
              <Icon name="Phone" size={18} />
              <a href="tel:+79015000078" className="hover:underline">+7 (901) 500-00-78</a>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Phone" size={18} />
              <a href="tel:+79015000087" className="hover:underline">+7 (901) 500-00-87</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityCTA;
