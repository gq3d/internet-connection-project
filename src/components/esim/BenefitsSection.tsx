import Icon from '@/components/ui/icon';

export default function BenefitsSection() {
  return (
    <div className="mt-20 grid md:grid-cols-3 gap-8">
      <div className="bg-card border-2 border-border rounded-xl p-8 hover:border-primary hover:shadow-lg transition-all">
        <div className="flex items-center mb-4">
          <div className="bg-primary/10 p-3 rounded-lg mr-4">
            <Icon name="Zap" size={32} className="text-primary" />
          </div>
          <h4 className="font-bold text-xl">Мгновенная активация</h4>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Получите eSIM в течение нескольких минут после оплаты. Не нужно ждать доставку или идти в магазин.
        </p>
      </div>

      <div className="bg-card border-2 border-border rounded-xl p-8 hover:border-success hover:shadow-lg transition-all">
        <div className="flex items-center mb-4">
          <div className="bg-success/10 p-3 rounded-lg mr-4">
            <Icon name="Globe" size={32} className="text-success" />
          </div>
          <h4 className="font-bold text-xl">200+ стран мира</h4>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Используйте интернет в путешествиях по всему миру без дорогого роуминга и лишних хлопот.
        </p>
      </div>

      <div className="bg-card border-2 border-border rounded-xl p-8 hover:border-secondary hover:shadow-lg transition-all">
        <div className="flex items-center mb-4">
          <div className="bg-secondary/10 p-3 rounded-lg mr-4">
            <Icon name="Shield" size={32} className="text-secondary" />
          </div>
          <h4 className="font-bold text-xl">Безопасность данных</h4>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Надёжное шифрование и защита персональных данных. Работаем только с проверенными операторами.
        </p>
      </div>
    </div>
  );
}
