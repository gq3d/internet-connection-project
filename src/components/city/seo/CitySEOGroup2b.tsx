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