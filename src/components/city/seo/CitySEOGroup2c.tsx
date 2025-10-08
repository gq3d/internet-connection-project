interface CitySEOContent {
  title: string;
  content: string;
}

export const getCitySEOGroup2c = (cityName: string): CitySEOContent | null => {
  if (cityName === 'Пушкино') {
    return {
      title: 'Подключение интернета в Пушкинском районе',
      content: `
        <p class="mb-4">
          NetConnect обеспечивает беспроводным интернетом город Пушкино и все населённые пункты Пушкинского городского округа Московской области.
        </p>
        
        <h3 class="text-xl font-semibold mb-3 mt-6">Населённые пункты с нашим покрытием:</h3>
        <div class="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <p class="font-medium mb-2">Посёлки и деревни:</p>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Правдинский</li>
              <li>Лесной</li>
              <li>Софрино</li>
              <li>Ашукино</li>
              <li>Зеленоградский</li>
              <li>Черкизово</li>
              <li>Звягино</li>
              <li>Клязьма</li>
            </ul>
          </div>
          
          <div>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground mt-7">
              <li>Тарасовка</li>
              <li>Лесные Поляны</li>
              <li>Талицы</li>
              <li>Барково</li>
              <li>Царёво</li>
              <li>Мамонтовка</li>
              <li>Красноармейск</li>
            </ul>
          </div>
        </div>

        <h3 class="text-xl font-semibold mb-3 mt-6">Коттеджные посёлки Пушкино:</h3>
        <div class="grid md:grid-cols-3 gap-3 mb-4">
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Пушкино парк</li>
            <li>Клязьма резиденс</li>
            <li>Софрино парк</li>
            <li>Ашукинский лес</li>
            <li>Лесные дачи</li>
          </ul>
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Правдинский парк</li>
            <li>Тарасовка парк</li>
            <li>Черкизово парк</li>
            <li>Звягино парк</li>
            <li>Талицы парк</li>
          </ul>
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Барково парк</li>
            <li>Царёво парк</li>
            <li>Мамонтовка парк</li>
            <li>Зеленоградский лес</li>
          </ul>
        </div>

        <h3 class="text-xl font-semibold mb-3 mt-6">Наши услуги в Пушкино:</h3>
        <ul class="space-y-2 mb-4">
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Беспроводной интернет до 250 Мбит/с</strong> — стабильное подключение для дач</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Профессиональная установка</strong> — монтаж и настройка оборудования</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Подключение коттеджных посёлков</strong> — опыт работы с жилыми комплексами</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Техподдержка 24/7</strong> — круглосуточная поддержка</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Усиление сигнала</strong> — покрытие больших территорий</span>
          </li>
        </ul>

        <p class="mt-4 text-muted-foreground">
          Подключаем беспроводной интернет в Пушкино и районе, обеспечивая качественную связь для загородных домов и дач.
        </p>
      `
    };
  }

  return null;
};
