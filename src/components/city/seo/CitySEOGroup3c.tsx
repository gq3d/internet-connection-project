interface CitySEOContent {
  title: string;
  content: string;
}

export const getCitySEOGroup3c = (cityName: string): CitySEOContent | null => {
  if (cityName === 'Солнечногорск') {
    return {
      title: 'Подключение интернета в Солнечногорском районе',
      content: `
        <p class="mb-4">
          NetConnect предоставляет услуги беспроводного интернета в городе Солнечногорск и всех населённых пунктах Солнечногорского городского округа Московской области.
        </p>
        
        <h3 class="text-xl font-semibold mb-3 mt-6">Населённые пункты с нашим покрытием:</h3>
        <div class="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <p class="font-medium mb-2">Посёлки и деревни:</p>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Андреевка</li>
              <li>Менделеево</li>
              <li>Поварово</li>
              <li>Ржавки</li>
              <li>Смирновка</li>
              <li>Тимоново</li>
              <li>Есипово</li>
              <li>Крюково</li>
            </ul>
          </div>
          
          <div>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground mt-7">
              <li>Кривцово</li>
              <li>Луцкое</li>
              <li>Пешки</li>
              <li>Редино</li>
              <li>Сенеж</li>
              <li>Соколово</li>
              <li>Тараканово</li>
            </ul>
          </div>
        </div>

        <h3 class="text-xl font-semibold mb-3 mt-6">Коттеджные посёлки Солнечногорска:</h3>
        <div class="grid md:grid-cols-3 gap-3 mb-4">
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Солнечногорск парк</li>
            <li>Андреевка парк</li>
            <li>Менделеево парк</li>
            <li>Поварово парк</li>
            <li>Ржавки парк</li>
          </ul>
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Смирновка парк</li>
            <li>Тимоново парк</li>
            <li>Есипово парк</li>
            <li>Крюково парк</li>
            <li>Кривцово парк</li>
          </ul>
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Луцкое парк</li>
            <li>Сенежский берег</li>
            <li>Соколово парк</li>
            <li>Тараканово парк</li>
          </ul>
        </div>

        <h3 class="text-xl font-semibold mb-3 mt-6">Наши услуги в Солнечногорске:</h3>
        <ul class="space-y-2 mb-4">
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Беспроводной интернет до 250 Мбит/с</strong> — быстрое подключение для дач и домов</span>
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
            <span><strong>Усиление сигнала</strong> — покрытие больших участков</span>
          </li>
        </ul>

        <p class="mt-4 text-muted-foreground">
          Подключаем беспроводной интернет в Солнечногорске и районе, обеспечивая стабильную связь для загородных объектов.
        </p>
      `
    };
  }

  if (cityName === 'Жуковский') {
    return {
      title: 'Подключение интернета в Жуковском',
      content: `
        <p class="mb-4">
          NetConnect обеспечивает беспроводным интернетом город Жуковский и окрестности городского округа Жуковский Московской области.
        </p>
        
        <h3 class="text-xl font-semibold mb-3 mt-6">Населённые пункты с нашим покрытием:</h3>
        <div class="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <p class="font-medium mb-2">Микрорайоны и посёлки:</p>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Отдых</li>
              <li>Планерная</li>
              <li>Жуковский-1</li>
              <li>Жуковский-2</li>
              <li>Жуковский-3</li>
              <li>Раменское направление</li>
              <li>Быково</li>
            </ul>
          </div>
          
          <div>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground mt-7">
              <li>Егорьевское шоссе</li>
              <li>Кратово</li>
              <li>Малаховка</li>
              <li>Октябрьский</li>
              <li>Полёт</li>
              <li>Фрязино</li>
            </ul>
          </div>
        </div>

        <h3 class="text-xl font-semibold mb-3 mt-6">Коттеджные посёлки Жуковского:</h3>
        <div class="grid md:grid-cols-3 gap-3 mb-4">
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Жуковский парк</li>
            <li>Отдых парк</li>
            <li>Планерная парк</li>
            <li>Быково парк</li>
            <li>Кратово парк</li>
          </ul>
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Малаховка парк</li>
            <li>Октябрьский парк</li>
            <li>Полёт парк</li>
            <li>Лесной квартал</li>
            <li>Авиатор парк</li>
          </ul>
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Жуковские дачи</li>
            <li>Лётное поле</li>
            <li>Зелёный город</li>
            <li>Раменский лес</li>
          </ul>
        </div>

        <h3 class="text-xl font-semibold mb-3 mt-6">Наши услуги в Жуковском:</h3>
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
            <span><strong>Усиление сигнала</strong> — покрытие больших территорий</span>
          </li>
        </ul>

        <p class="mt-4 text-muted-foreground">
          Подключаем беспроводной интернет в Жуковском и районе, обеспечивая качественную связь для загородных домов и дач.
        </p>
      `
    };
  }

  if (cityName === 'Егорьевск') {
    return {
      title: 'Подключение интернета в Егорьевском районе',
      content: `
        <p class="mb-4">
          NetConnect предоставляет услуги беспроводного интернета в городе Егорьевск и всех населённых пунктах Егорьевского городского округа Московской области.
        </p>
        
        <h3 class="text-xl font-semibold mb-3 mt-6">Населённые пункты с нашим покрытием:</h3>
        <div class="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <p class="font-medium mb-2">Посёлки и деревни:</p>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Саввино</li>
              <li>Рязановка</li>
              <li>Высокое</li>
              <li>Починки</li>
              <li>Алёшино</li>
              <li>Большое Гридино</li>
              <li>Васютино</li>
              <li>Горки</li>
            </ul>
          </div>
          
          <div>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground mt-7">
              <li>Ефремовская</li>
              <li>Косякино</li>
              <li>Лашино</li>
              <li>Михали</li>
              <li>Новохаритоново</li>
              <li>Пупково</li>
              <li>Слободищи</li>
            </ul>
          </div>
        </div>

        <h3 class="text-xl font-semibold mb-3 mt-6">Коттеджные посёлки Егорьевска:</h3>
        <div class="grid md:grid-cols-3 gap-3 mb-4">
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Егорьевский парк</li>
            <li>Саввино парк</li>
            <li>Рязановка парк</li>
            <li>Высокое парк</li>
            <li>Починки парк</li>
          </ul>
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Алёшино парк</li>
            <li>Большое Гридино парк</li>
            <li>Васютино парк</li>
            <li>Горки парк</li>
            <li>Ефремовская парк</li>
          </ul>
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Косякино парк</li>
            <li>Лашино парк</li>
            <li>Михали парк</li>
            <li>Новохаритоново парк</li>
          </ul>
        </div>

        <h3 class="text-xl font-semibold mb-3 mt-6">Наши услуги в Егорьевске:</h3>
        <ul class="space-y-2 mb-4">
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Беспроводной интернет до 250 Мбит/с</strong> — быстрое подключение для дач и домов</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Установка оборудования</strong> — профессиональный монтаж антенны</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Подключение СНТ и посёлков</strong> — работаем с садовыми товариществами</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Техподдержка 24/7</strong> — оперативное решение вопросов</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Усиление сигнала</strong> — покрытие больших участков</span>
          </li>
        </ul>

        <p class="mt-4 text-muted-foreground">
          Подключаем беспроводной интернет в Егорьевске и районе, обеспечивая стабильную связь для загородных объектов.
        </p>
      `
    };
  }

  return null;
};
