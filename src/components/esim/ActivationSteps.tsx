import Icon from '@/components/ui/icon';

export default function ActivationSteps() {
  return (
    <div className="mt-24 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-12">
      <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Как активировать eSIM за 5 минут
      </h3>
      <p className="text-center text-muted-foreground mb-12 text-lg">
        Простой процесс подключения без визита в магазин
      </p>
      
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div className="text-center group">
          <div className="relative mb-6">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Icon name="ShoppingCart" size={36} className="text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
              1
            </div>
          </div>
          <h4 className="font-bold text-lg mb-2">Выберите тариф</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Подберите подходящий план по объёму данных и сроку действия
          </p>
        </div>

        <div className="text-center group">
          <div className="relative mb-6">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Icon name="CreditCard" size={36} className="text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
              2
            </div>
          </div>
          <h4 className="font-bold text-lg mb-2">Оплатите онлайн</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Безопасная оплата картой через защищённое соединение
          </p>
        </div>

        <div className="text-center group">
          <div className="relative mb-6">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Icon name="QrCode" size={36} className="text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
              3
            </div>
          </div>
          <h4 className="font-bold text-lg mb-2">Получите QR-код</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            QR-код придёт на email сразу после оплаты
          </p>
        </div>

        <div className="text-center group">
          <div className="relative mb-6">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Icon name="Smartphone" size={36} className="text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
              4
            </div>
          </div>
          <h4 className="font-bold text-lg mb-2">Отсканируйте код</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Откройте настройки телефона и отсканируйте QR-код камерой
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <a 
          href="tel:+79015000078"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all hover:scale-105"
        >
          <Icon name="Phone" size={24} />
          Получить консультацию
        </a>
      </div>
    </div>
  );
}
