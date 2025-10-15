import Icon from '@/components/ui/icon';

export default function ExclusiveOffer() {
  return (
    <div className="mb-12 bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-red-500/10 border-2 border-amber-500/30 rounded-2xl p-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 bg-gradient-to-br from-amber-500 to-orange-600 text-white px-6 py-2 text-sm font-bold rounded-bl-2xl shadow-lg">
        ⭐ Эксклюзив
      </div>
      
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
            <Icon name="Globe" size={28} className="text-white" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
            Любая одна страна на выбор
          </h3>
        </div>
        <p className="text-lg text-muted-foreground">
          Специальное предложение: выберите любую страну мира
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="bg-white border-2 border-amber-200 rounded-xl p-4 hover:border-amber-400 hover:shadow-lg transition-all duration-300">
          <div className="text-center mb-3">
            <div className="text-3xl font-bold text-foreground mb-1">1 ГБ</div>
            <div className="text-sm text-muted-foreground">7 дн.</div>
          </div>
          <div className="space-y-2 text-xs mb-3">
            <div className="flex justify-between"><span className="text-muted-foreground">Цена</span><span className="font-medium">476 ₽</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Интернет</span><span className="font-medium">1 ГБ</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Срок<br/>действия</span><span className="font-medium">7<br/>дней</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Покрытие</span><span className="font-medium text-amber-600">1 страна</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Продление</span><span className="font-medium text-green-600">Да</span></div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-amber-600">476 ₽</div>
          </div>
        </div>

        <div className="bg-white border-2 border-amber-200 rounded-xl p-4 hover:border-amber-400 hover:shadow-lg transition-all duration-300">
          <div className="text-center mb-3">
            <div className="text-3xl font-bold text-foreground mb-1">2 ГБ</div>
            <div className="text-sm text-muted-foreground">15 дн.</div>
          </div>
          <div className="space-y-2 text-xs mb-3">
            <div className="flex justify-between"><span className="text-muted-foreground">Цена</span><span className="font-medium">706 ₽</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Интернет</span><span className="font-medium">2 ГБ</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Срок действия</span><span className="font-medium">15 дней</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Покрытие</span><span className="font-medium text-amber-600">1 страна</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Продление</span><span className="font-medium text-green-600">Да</span></div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-amber-600">706 ₽</div>
          </div>
        </div>

        <div className="bg-white border-2 border-amber-200 rounded-xl p-4 hover:border-amber-400 hover:shadow-lg transition-all duration-300">
          <div className="text-center mb-3">
            <div className="text-3xl font-bold text-foreground mb-1">3 ГБ</div>
            <div className="text-sm text-muted-foreground">30 дн.</div>
          </div>
          <div className="space-y-2 text-xs mb-3">
            <div className="flex justify-between"><span className="text-muted-foreground">Цена</span><span className="font-medium">916 ₽</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Интернет</span><span className="font-medium">3 ГБ</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Срок действия</span><span className="font-medium">30 дней</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Покрытие</span><span className="font-medium text-amber-600">1 страна</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Продление</span><span className="font-medium text-green-600">Да</span></div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-amber-600">916 ₽</div>
          </div>
        </div>

        <div className="bg-white border-2 border-amber-200 rounded-xl p-4 hover:border-amber-400 hover:shadow-lg transition-all duration-300">
          <div className="text-center mb-3">
            <div className="text-3xl font-bold text-foreground mb-1">5 ГБ</div>
            <div className="text-sm text-muted-foreground">30 дн.</div>
          </div>
          <div className="space-y-2 text-xs mb-3">
            <div className="flex justify-between"><span className="text-muted-foreground">Цена</span><span className="font-medium">1 378 ₽</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Интернет</span><span className="font-medium">5 ГБ</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Срок действия</span><span className="font-medium">30 дней</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Покрытие</span><span className="font-medium text-amber-600">1 страна</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Продление</span><span className="font-medium text-green-600">Да</span></div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-amber-600">1 378 ₽</div>
          </div>
        </div>

        <div className="bg-white border-2 border-amber-200 rounded-xl p-4 hover:border-amber-400 hover:shadow-lg transition-all duration-300">
          <div className="text-center mb-3">
            <div className="text-3xl font-bold text-foreground mb-1">10 ГБ</div>
            <div className="text-sm text-muted-foreground">30 дн.</div>
          </div>
          <div className="space-y-2 text-xs mb-3">
            <div className="flex justify-between"><span className="text-muted-foreground">Цена</span><span className="font-medium">2 470 ₽</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Интернет</span><span className="font-medium">10 ГБ</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Срок действия</span><span className="font-medium">30 дней</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Покрытие</span><span className="font-medium text-amber-600">1 страна</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Продление</span><span className="font-medium text-green-600">Да</span></div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-amber-600">2 470 ₽</div>
          </div>
        </div>

        <div className="bg-white border-2 border-amber-200 rounded-xl p-4 hover:border-amber-400 hover:shadow-lg transition-all duration-300">
          <div className="text-center mb-3">
            <div className="text-3xl font-bold text-foreground mb-1">20 ГБ</div>
            <div className="text-sm text-muted-foreground">30 дн.</div>
          </div>
          <div className="space-y-2 text-xs mb-3">
            <div className="flex justify-between"><span className="text-muted-foreground">Цена</span><span className="font-medium">4 054 ₽</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Интернет</span><span className="font-medium">20 ГБ</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Срок действия</span><span className="font-medium">30 дней</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Покрытие</span><span className="font-medium text-amber-600">1 страна</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Продление</span><span className="font-medium text-green-600">Да</span></div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-amber-600">4 054 ₽</div>
          </div>
        </div>
      </div>
    </div>
  );
}
