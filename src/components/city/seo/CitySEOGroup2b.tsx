interface CitySEOContent {
  title: string;
  content: string;
}

export const getCitySEOGroup2b = (cityName: string): CitySEOContent | null => {
  if (cityName === 'Люберцы') {
    return {
      title: 'Подключение интернета в Люберецком районе',
      content: `
        <p class="mb-4">
          NetConnect предоставляет услуги беспроводного интернета в городе Люберцы и всех населённых пунктах Люберецкого городского округа Московской области.
        </p>
        
        <h3 class="text-xl font-semibold mb-3 mt-6">Населённые пункты с нашим покрытием:</h3>
        <div class="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <p class="font-medium mb-2">Посёлки и деревни:</p>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Котельники</li>
              <li>Дзержинский</li>
              <li>Малаховка</li>
              <li>Красково</li>
              <li>Октябрьский</li>
              <li>Томилино</li>
              <li>Некрасовка</li>
              <li>Кожухово</li>
            </ul>
          </div>
          
          <div>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground mt-7">
              <li>Марусино</li>
              <li>Мотяково</li>
              <li>Новая Ухтомка</li>
              <li>Пехорка</li>
              <li>Салтыковка</li>
              <li>Токарёво</li>
              <li>Ухтомский</li>
            </ul>
          </div>
        </div>

        <h3 class="text-xl font-semibold mb-3 mt-6">Коттеджные посёлки Люберец:</h3>
        <div class="grid md:grid-cols-3 gap-3 mb-4">
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Люберцы парк</li>
            <li>Малаховское озеро</li>
            <li>Салтыковка парк</li>
            <li>Томилинский лес</li>
            <li>Красковский лес</li>
          </ul>
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Некрасовка парк</li>
            <li>Лесная дача</li>
            <li>Зелёная поляна</li>
            <li>Октябрьский парк</li>
            <li>Марусино берег</li>
          </ul>
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Пехорка парк</li>
            <li>Ухтомский парк</li>
            <li>Дзержинский парк</li>
            <li>Котельниково</li>
          </ul>
        </div>

        <h3 class="text-xl font-semibold mb-3 mt-6">Наши услуги в Люберцах:</h3>
        <ul class="space-y-2 mb-4">
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Беспроводной интернет до 250 Мбит/с</strong> — надёжное подключение для домов и дач</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Установка и настройка</strong> — профессиональный монтаж оборудования</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Подключение СНТ</strong> — работаем с садовыми товариществами</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Техподдержка 24/7</strong> — круглосуточная поддержка</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Расширение покрытия</strong> — усиление для больших территорий</span>
          </li>
        </ul>

        <p class="mt-4 text-muted-foreground">
          Подключаем беспроводной интернет в Люберцах и районе, обеспечивая качественную связь для частных домов и дачных участков.
        </p>
      `
    };
  }

  if (cityName === 'Домодедово') {
    return {
      title: 'Подключение интернета в Домодедовском районе',
      content: `
        <p class="mb-4">
          NetConnect обеспечивает беспроводным интернетом город Домодедово и все населённые пункты Домодедовского городского округа Московской области.
        </p>
        
        <h3 class="text-xl font-semibold mb-3 mt-6">Населённые пункты с нашим покрытием:</h3>
        <div class="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <p class="font-medium mb-2">Посёлки и деревни:</p>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Барыбино</li>
              <li>Белые Столбы</li>
              <li>Вельяминово</li>
              <li>Ильинское</li>
              <li>Константиново</li>
              <li>Растуново</li>
              <li>Заборье</li>
              <li>Ямы</li>
            </ul>
          </div>
          
          <div>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground mt-7">
              <li>Редькино</li>
              <li>Добрыниха</li>
              <li>Востряково</li>
              <li>Кишкино</li>
              <li>Павловское</li>
              <li>Одинцово</li>
              <li>Сатино-Русское</li>
            </ul>
          </div>
        </div>

        <h3 class="text-xl font-semibold mb-3 mt-6">Коттеджные посёлки Домодедово:</h3>
        <div class="grid md:grid-cols-3 gap-3 mb-4">
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Домодедово парк</li>
            <li>Барыбино парк</li>
            <li>Белые столбы парк</li>
            <li>Растуново лес</li>
            <li>Вельяминово парк</li>
          </ul>
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Заборье парк</li>
            <li>Ильинские дачи</li>
            <li>Константиново парк</li>
            <li>Павловская слобода</li>
            <li>Редькино парк</li>
          </ul>
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Сатинский лес</li>
            <li>Ямской парк</li>
            <li>Востряково парк</li>
            <li>Одинцовский парк</li>
          </ul>
        </div>

        <h3 class="text-xl font-semibold mb-3 mt-6">Наши услуги в Домодедово:</h3>
        <ul class="space-y-2 mb-4">
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Беспроводной интернет до 250 Мбит/с</strong> — быстрое подключение для дач и домов</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Профессиональная установка</strong> — монтаж и настройка оборудования</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Подключение коттеджных посёлков</strong> — работаем с любыми объектами</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Техподдержка 24/7</strong> — круглосуточная поддержка клиентов</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Усиление сигнала</strong> — покрытие больших территорий</span>
          </li>
        </ul>

        <p class="mt-4 text-muted-foreground">
          Подключаем беспроводной интернет в Домодедово и районе, обеспечивая стабильную связь для загородных домов и дач.
        </p>
      `
    };
  }

  if (cityName === 'Щёлково') {
    return {
      title: 'Подключение интернета в Щёлковском районе',
      content: `
        <p class="mb-4">
          NetConnect предоставляет услуги беспроводного интернета в городе Щёлково и всех населённых пунктах Щёлковского городского округа Московской области.
        </p>
        
        <h3 class="text-xl font-semibold mb-3 mt-6">Населённые пункты с нашим покрытием:</h3>
        <div class="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <p class="font-medium mb-2">Посёлки и деревни:</p>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Фряново</li>
              <li>Монино</li>
              <li>Свердловский</li>
              <li>Загорянский</li>
              <li>Биокомбината</li>
              <li>Чкаловский</li>
              <li>Огуднево</li>
              <li>Трубино</li>
            </ul>
          </div>
          
          <div>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground mt-7">
              <li>Анискино</li>
              <li>Гребнево</li>
              <li>Медвежьи Озёра</li>
              <li>Супонево</li>
              <li>Образцово</li>
              <li>Жегалово</li>
              <li>Серково</li>
            </ul>
          </div>
        </div>

        <h3 class="text-xl font-semibold mb-3 mt-6">Коттеджные посёлки Щёлково:</h3>
        <div class="grid md:grid-cols-3 gap-3 mb-4">
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Щёлковские хутора</li>
            <li>Медвежьи озёра парк</li>
            <li>Монино парк</li>
            <li>Фряново парк</li>
            <li>Свердловский парк</li>
          </ul>
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Загорянка парк</li>
            <li>Гребнево усадьба</li>
            <li>Анискино парк</li>
            <li>Лесное озеро</li>
            <li>Зелёная роща</li>
          </ul>
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Чкаловский парк</li>
            <li>Огуднево парк</li>
            <li>Трубино парк</li>
            <li>Образцово парк</li>
          </ul>
        </div>

        <h3 class="text-xl font-semibold mb-3 mt-6">Наши услуги в Щёлково:</h3>
        <ul class="space-y-2 mb-4">
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Беспроводной интернет до 250 Мбит/с</strong> — надёжное подключение для частных домов</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Установка оборудования</strong> — профессиональный монтаж антенны</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Подключение дачных посёлков</strong> — работаем с СНТ и коттеджными посёлками</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Техподдержка 24/7</strong> — оперативная помощь в любое время</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Расширение покрытия</strong> — усиление сигнала для больших участков</span>
          </li>
        </ul>

        <p class="mt-4 text-muted-foreground">
          Подключаем беспроводной интернет в Щёлково и районе, обеспечивая качественную связь там, где кабельный интернет недоступен.
        </p>
      `
    };
  }

  return null;
};
