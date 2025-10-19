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
        
        <h3 class="text-xl font-semibold mb-3 mt-6">Наши услуги в Дубне:</h3>
        <ul class="space-y-2 mb-4">
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Беспроводной интернет до 250 Мбит/с</strong> — стабильное подключение для частных домов</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Установка оборудования</strong> — профессиональный монтаж антенны</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Подключение посёлков</strong> — работаем с любыми объектами</span>
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
          Подключаем беспроводной интернет в Дубне и районе, обеспечивая качественную связь для загородных объектов.
        </p>
      `
    };
  }

  return null;
};
