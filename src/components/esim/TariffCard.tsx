interface TariffCardProps {
  tariff: {
    data: string;
    days: number;
    speed: string;
    calls: string;
    sms: string;
    price: number;
    oldPrice: number;
  };
  variant?: 'default' | 'unlimited' | 'fullService';
}

export default function TariffCard({ tariff, variant = 'default' }: TariffCardProps) {
  const getCardClasses = () => {
    switch (variant) {
      case 'unlimited':
        return 'bg-gradient-to-br from-primary/5 to-success/5 border-2 border-primary/30 rounded-xl p-6 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden';
      case 'fullService':
        return 'bg-gradient-to-br from-secondary/5 to-primary/5 border-2 border-secondary/30 rounded-xl p-8 hover:border-secondary hover:shadow-xl transition-all duration-300 hover:-translate-y-1';
      default:
        return 'bg-card border-2 border-border rounded-xl p-6 hover:border-success hover:shadow-xl transition-all duration-300 hover:-translate-y-1';
    }
  };

  const getDataSize = () => {
    switch (variant) {
      case 'unlimited':
        return 'text-5xl';
      case 'fullService':
        return 'text-5xl';
      default:
        return 'text-4xl';
    }
  };

  const getDaysSize = () => {
    return variant === 'fullService' ? 'text-lg' : '';
  };

  const getPriceColor = () => {
    switch (variant) {
      case 'unlimited':
        return 'text-primary';
      case 'fullService':
        return 'text-secondary';
      default:
        return 'text-success';
    }
  };

  const getPriceSize = () => {
    return variant === 'fullService' ? 'text-4xl' : 'text-3xl';
  };

  return (
    <div className={getCardClasses()}>
      {variant === 'unlimited' && (
        <div className="absolute top-0 right-0 bg-primary/10 text-primary px-3 py-1 text-xs font-bold rounded-bl-lg">
          Безлимит
        </div>
      )}
      
      <div className="text-center mb-6">
        <div className={`${getDataSize()} font-bold text-foreground mb-2`}>
          {tariff.data}
        </div>
        <div className={`text-muted-foreground ${getDaysSize()}`}>
          {tariff.days} дн.
        </div>
      </div>
      

      
      <div className="text-center">
        <div className="text-sm text-muted-foreground line-through mb-1">
          {tariff.oldPrice.toLocaleString('ru-RU')} ₽
        </div>
        <div className={`${getPriceSize()} font-bold ${getPriceColor()}`}>
          {tariff.price.toLocaleString('ru-RU')} ₽
        </div>
      </div>
    </div>
  );
}