interface CitySEOContent {
  title: string;
  content: string;
}

export const getCitySEOGroup3b = (cityName: string): CitySEOContent | null => {
  if (cityName === 'Чехов') {
    return {
      title: 'Подключение интернета в Чеховском районе',
      content: `
        <p class="mb-4">
          NetConnect обеспечивает беспроводным интернетом город Чехов и все населённые пункты Чеховского городского округа Московской области.
        </p>
        
        <h3 class="text-xl font-semibold mb-3 mt-6">Наши услуги в Чехове:</h3>
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
          Подключаем беспроводной интернет в Чехове и районе, обеспечивая качественную связь для загородных домов и дач.
        </p>
      `
    };
  }

  if (cityName === 'Серпухов') {
    return {
      title: 'Подключение интернета в Серпухове и районе',
      content: `
        <p class="mb-4">
          NetConnect предоставляет услуги беспроводного интернета в городе Серпухов и окрестностях Московской области.
        </p>
        
        <h3 class="text-xl font-semibold mb-3 mt-6">Наши услуги в Серпухове:</h3>
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
            <span><strong>Техподдержка 24/7</strong> — круглосуточная поддержка клиентов</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Усиление сигнала</strong> — покрытие больших территорий</span>
          </li>
        </ul>

        <p class="mt-4 text-muted-foreground">
          Подключаем беспроводной интернет в Серпухове и районе, обеспечивая стабильную связь для загородных объектов.
        </p>
      `
    };
  }

  if (cityName === 'Истра') {
    return {
      title: 'Подключение интернета в Истринском районе',
      content: `
        <p class="mb-4">
          NetConnect обеспечивает беспроводным интернетом город Истра и все населённые пункты Истринского городского округа Московской области.
        </p>
        
        <h3 class="text-xl font-semibold mb-3 mt-6">Наши услуги в Истре:</h3>
        <ul class="space-y-2 mb-4">
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Беспроводной интернет до 250 Мбит/с</strong> — надёжное подключение для частных домов</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Установка и настройка</strong> — профессиональный монтаж оборудования</span>
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
            <span><strong>Расширение покрытия</strong> — усиление сигнала для больших территорий</span>
          </li>
        </ul>

        <p class="mt-4 text-muted-foreground">
          Подключаем беспроводной интернет в Истре и районе, обеспечивая качественную связь для загородных домов.
        </p>
      `
    };
  }

  return null;
};
