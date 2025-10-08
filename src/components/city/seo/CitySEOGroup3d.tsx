interface CitySEOContent {
  title: string;
  content: string;
}

export const getCitySEOGroup3d = (cityName: string): CitySEOContent | null => {
  if (cityName === 'Клин') {
    return {
      title: 'Подключение интернета в Клинском районе',
      content: `
        <p class="mb-4">
          NetConnect обеспечивает беспроводным интернетом город Клин и все населённые пункты Клинского городского округа Московской области.
        </p>
        
        <h3 class="text-xl font-semibold mb-3 mt-6">Населённые пункты с нашим покрытием:</h3>
        <div class="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <p class="font-medium mb-2">Посёлки и деревни:</p>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Высоковск</li>
              <li>Решетниково</li>
              <li>Шевляково</li>
              <li>Петровское</li>
              <li>Нудоль</li>
              <li>Воздвиженское</li>
              <li>Зубово</li>
              <li>Спас-Заулок</li>
            </ul>
          </div>
          
          <div>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground mt-7">
              <li>Давыдково</li>
              <li>Ямуга</li>
              <li>Шанталово</li>
              <li>Слобода</li>
              <li>Крюково</li>
              <li>Клушино</li>
              <li>Акулово</li>
            </ul>
          </div>
        </div>

        <h3 class="text-xl font-semibold mb-3 mt-6">Коттеджные посёлки Клина:</h3>
        <div class="grid md:grid-cols-3 gap-3 mb-4">
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Клинские просторы</li>
            <li>Высоковск парк</li>
            <li>Решетниково парк</li>
            <li>Шевляково парк</li>
            <li>Петровское парк</li>
          </ul>
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Нудоль парк</li>
            <li>Воздвиженское парк</li>
            <li>Зубово парк</li>
            <li>Спас-Заулок парк</li>
            <li>Давыдково парк</li>
          </ul>
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Ямуга парк</li>
            <li>Шанталово парк</li>
            <li>Слобода парк</li>
            <li>Крюково парк</li>
          </ul>
        </div>

        <h3 class="text-xl font-semibold mb-3 mt-6">Наши услуги в Клину:</h3>
        <ul class="space-y-2 mb-4">
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Беспроводной интернет до 250 Мбит/с</strong> — надёжное подключение для домов и дач</span>
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
          Подключаем беспроводной интернет в Клину и районе, обеспечивая качественную связь для загородных домов.
        </p>
      `
    };
  }

  if (cityName === 'Зеленоград') {
    return {
      title: 'Подключение интернета в Зеленограде',
      content: `
        <p class="mb-4">
          NetConnect предоставляет услуги беспроводного интернета в Зеленограде и окрестностях Зеленоградского административного округа Москвы.
        </p>
        
        <h3 class="text-xl font-semibold mb-3 mt-6">Микрорайоны и территории с нашим покрытием:</h3>
        <div class="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <p class="font-medium mb-2">Микрорайоны:</p>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Крюково</li>
              <li>Силино</li>
              <li>Савёлки</li>
              <li>Старое Крюково</li>
              <li>Матушкино</li>
              <li>Андреевка</li>
            </ul>
          </div>
          
          <div>
            <p class="font-medium mb-2">Деревни и посёлки:</p>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Ржавки</li>
              <li>Каменка</li>
              <li>Алабушево</li>
              <li>Малино</li>
              <li>Голубое</li>
              <li>Назарьево</li>
            </ul>
          </div>
        </div>

        <h3 class="text-xl font-semibold mb-3 mt-6">Коттеджные посёлки Зеленограда:</h3>
        <div class="grid md:grid-cols-3 gap-3 mb-4">
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Зеленоградский лес</li>
            <li>Крюково парк</li>
            <li>Силино парк</li>
            <li>Савёлки парк</li>
            <li>Матушкино парк</li>
          </ul>
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Андреевка парк</li>
            <li>Ржавки парк</li>
            <li>Каменка парк</li>
            <li>Алабушево парк</li>
            <li>Малино парк</li>
          </ul>
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Голубое озеро</li>
            <li>Назарьево парк</li>
            <li>Зеленоградские дачи</li>
            <li>Лесной квартал</li>
          </ul>
        </div>

        <h3 class="text-xl font-semibold mb-3 mt-6">Наши услуги в Зеленограде:</h3>
        <ul class="space-y-2 mb-4">
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Беспроводной интернет до 250 Мбит/с</strong> — быстрое подключение для домов и дач</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Установка оборудования</strong> — профессиональный монтаж антенны</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Подключение коттеджных посёлков</strong> — работаем с любыми объектами</span>
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
          Подключаем беспроводной интернет в Зеленограде и районе, обеспечивая стабильную связь для загородных объектов.
        </p>
      `
    };
  }

  if (cityName === 'Дубна') {
    return {
      title: 'Подключение интернета в Дубне',
      content: `
        <p class="mb-4">
          NetConnect обеспечивает беспроводным интернетом город Дубна и окрестности городского округа Дубна Московской области.
        </p>
        
        <h3 class="text-xl font-semibold mb-3 mt-6">Населённые пункты с нашим покрытием:</h3>
        <div class="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <p class="font-medium mb-2">Посёлки и микрорайоны:</p>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Большая Волга</li>
              <li>Ратмино</li>
              <li>Юркино</li>
              <li>Александровка</li>
              <li>Козлаки</li>
              <li>Поселок Института ядерных исследований</li>
            </ul>
          </div>
          
          <div>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground mt-7">
              <li>Левобережный</li>
              <li>Черная речка</li>
              <li>Притыкинская роща</li>
              <li>Центральный</li>
              <li>Новое Поле</li>
            </ul>
          </div>
        </div>

        <h3 class="text-xl font-semibold mb-3 mt-6">Коттеджные посёлки Дубны:</h3>
        <div class="grid md:grid-cols-3 gap-3 mb-4">
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Дубна парк</li>
            <li>Большая Волга парк</li>
            <li>Ратмино парк</li>
            <li>Юркино парк</li>
            <li>Александровка парк</li>
          </ul>
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Козлаки парк</li>
            <li>Левобережный парк</li>
            <li>Черная речка парк</li>
            <li>Притыкинская роща парк</li>
            <li>Волжский берег</li>
          </ul>
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Дубненский лес</li>
            <li>Канал имени Москвы</li>
            <li>Новое Поле парк</li>
            <li>Атомный парк</li>
          </ul>
        </div>

        <h3 class="text-xl font-semibold mb-3 mt-6">Наши услуги в Дубне:</h3>
        <ul class="space-y-2 mb-4">
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Беспроводной интернет до 250 Мбит/с</strong> — надёжное подключение для домов и дач</span>
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
            <span><strong>Усиление сигнала</strong> — покрытие больших участков</span>
          </li>
        </ul>

        <p class="mt-4 text-muted-foreground">
          Подключаем беспроводной интернет в Дубне и районе, обеспечивая качественную связь для загородных домов и дач.
        </p>
      `
    };
  }

  return null;
};
