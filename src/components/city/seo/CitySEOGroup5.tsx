interface CitySEOContent {
  title: string;
  content: string;
}

export const getCitySEOGroup5 = (cityName: string): CitySEOContent | null => {
  if (cityName === 'Королёв') {
    return {
      title: 'Подключение интернета в Королёве и окрестностях',
      content: `
        <p class="mb-4">
          NetConnect предоставляет услуги беспроводного интернета в городе Королёв и прилегающих районах Московской области.
        </p>
        
        <h3 class="text-xl font-semibold mb-3 mt-6">Наши услуги в Королёве:</h3>
        <ul class="space-y-2 mb-4">
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Беспроводной интернет до 250 Мбит/с</strong> — стабильное подключение для дач и коттеджей</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Быстрая установка</strong> — монтаж и настройка за 1 день</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Подключение дачных посёлков</strong> — работаем с любыми объектами</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Техподдержка 24/7</strong> — оперативное решение вопросов</span>
          </li>
        </ul>

        <p class="mt-4 text-muted-foreground">
          Обеспечиваем качественным интернетом район Королёва, включая удалённые дачные посёлки и коттеджные участки.
        </p>
      `
    };
  }

  if (cityName === 'Электросталь') {
    return {
      title: 'Подключение интернета в Электростали и районе',
      content: `
        <p class="mb-4">
          NetConnect предоставляет услуги беспроводного интернета в городе Электросталь и всех населённых пунктах городского округа Электросталь.
        </p>
        
        <h3 class="text-xl font-semibold mb-3 mt-6">Наши услуги в Электростали:</h3>
        <ul class="space-y-2 mb-4">
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Беспроводной интернет до 250 Мбит/с</strong> — надёжное подключение для домов</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Профессиональная установка</strong> — монтаж оборудования за 1-3 дня</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Подключение деревень</strong> — работаем с удалёнными объектами</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Техподдержка 24/7</strong> — круглосуточная помощь</span>
          </li>
        </ul>

        <p class="mt-4 text-muted-foreground">
          Подключаем беспроводной интернет в Электростали и окрестностях, обеспечивая качественную связь для загородных домов.
        </p>
      `
    };
  }

  if (cityName === 'Балашиха') {
    return {
      title: 'Подключение интернета в Балашихе и районе',
      content: `
        <p class="mb-4">
          NetConnect предоставляет услуги беспроводного интернета в городе Балашиха и окрестностях городского округа Балашиха.
        </p>
        
        <h3 class="text-xl font-semibold mb-3 mt-6">Наши услуги в Балашихе:</h3>
        <ul class="space-y-2 mb-4">
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Беспроводной интернет до 250 Мбит/с</strong> — быстрое подключение</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Установка за 1-3 дня</strong> — профессиональный монтаж</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Подключение СНТ</strong> — специальные тарифы для товариществ</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Техподдержка 24/7</strong> — оперативная помощь</span>
          </li>
        </ul>

        <p class="mt-4 text-muted-foreground">
          Обеспечиваем интернетом весь городской округ Балашиха, включая удалённые дачные посёлки.
        </p>
      `
    };
  }

  // Универсальный шаблон для остальных городов
  const cityTemplates: Record<string, { district: string; villages: string[]; cottages: string[] }> = {
    'Одинцово': {
      district: 'Одинцовский городской округ',
      villages: [],
      cottages: []
    },
    'Раменское': {
      district: 'Раменский городской округ',
      villages: [],
      cottages: []
    },
    'Красногорск': {
      district: 'Красногорский городской округ',
      villages: [],
      cottages: []
    }
  };

  if (cityTemplates[cityName]) {
    const template = cityTemplates[cityName];
    return {
      title: `Подключение интернета в ${template.district}`,
      content: `
        <p class="mb-4">
          NetConnect предоставляет услуги беспроводного интернета в городе ${cityName} и всех населённых пунктах ${template.district} Московской области.
        </p>
        
        <h3 class="text-xl font-semibold mb-3 mt-6">Наши услуги в ${cityName}:</h3>
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
            <span><strong>Подключение СНТ и коттеджных посёлков</strong> — работаем с любыми объектами</span>
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
          Подключаем беспроводной интернет в ${cityName} и районе, обеспечивая качественную связь для частных домов, дач и загородных участков.
        </p>
      `
    };
  }

  return null;
};
