interface CitySEOContent {
  title: string;
  content: string;
}

export const getCitySEOGroup4 = (cityName: string): CitySEOContent | null => {
  if (cityName === 'Орехово-Зуево') {
    return {
      title: 'Подключение интернета в Орехово-Зуево',
      content: `
        <p class="mb-4">
          NetConnect предоставляет услуги беспроводного интернета в городе Орехово-Зуево и окрестностях Орехово-Зуевского городского округа Московской области.
        </p>
        
        <h3 class="text-xl font-semibold mb-3 mt-6">Наши услуги в Орехово-Зуево:</h3>
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
          Подключаем беспроводной интернет в Орехово-Зуево и районе, обеспечивая стабильную связь для загородных объектов.
        </p>
      `
    };
  }

  if (cityName === 'Фрязино') {
    return {
      title: `Подключение интернета в ${cityName}`,
      content: `
        <p class="mb-4">
          NetConnect предоставляет услуги высокоскоростного беспроводного интернета в городе Фрязино и окрестностях Щёлковского района Московской области.
        </p>
        
        <h3 class="text-xl font-semibold mb-3 mt-6">Наши услуги в Фрязино:</h3>
        <ul class="space-y-2 mb-4">
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Беспроводной интернет до 250 Мбит/с</strong> — надёжное подключение через спутниковые и радиорелейные технологии для дач, коттеджей и частных домов</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Установка и настройка оборудования</strong> — выезд инженера на объект, монтаж антенны, настройка роутера и всех устройств</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Подключение СНТ и дачных кооперативов</strong> — организуем интернет для садовых товариществ по выгодным тарифам</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Техническая поддержка 24/7</strong> — оперативное решение любых вопросов круглосуточно</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Усиление сигнала</strong> — установка дополнительных репитеров для покрытия больших территорий</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Резервное подключение</strong> — настройка резервных каналов связи для бесперебойной работы</span>
          </li>
        </ul>

        <p class="mt-4 text-muted-foreground">
          Подключаем интернет там, где недоступны проводные технологии. Работаем по всему Фрязино и окрестностям. Гарантируем стабильную связь и высокую скорость.
        </p>
      `
    };
  }

  if (cityName === 'Старая Купавна') {
    return {
      title: `Подключение интернета в ${cityName}`,
      content: `
        <p class="mb-4">
          NetConnect предоставляет услуги высокоскоростного беспроводного интернета в городе Старая Купавна и окрестностях Павлово-Посадского района Московской области.
        </p>
        
        <h3 class="text-xl font-semibold mb-3 mt-6">Наши услуги в Старой Купавне:</h3>
        <ul class="space-y-2 mb-4">
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Беспроводной интернет до 250 Мбит/с</strong> — надёжное подключение через спутниковые и радиорелейные технологии для дач, коттеджей и частных домов</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Установка и настройка оборудования</strong> — выезд инженера на объект, монтаж антенны, настройка роутера и всех устройств</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Подключение СНТ и дачных кооперативов</strong> — организуем интернет для садовых товариществ по выгодным тарифам</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Техническая поддержка 24/7</strong> — оперативное решение любых вопросов круглосуточно</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Усиление сигнала</strong> — установка дополнительных репитеров для покрытия больших территорий</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Резервное подключение</strong> — настройка резервных каналов связи для бесперебойной работы</span>
          </li>
        </ul>

        <p class="mt-4 text-muted-foreground">
          Подключаем интернет там, где недоступны проводные технологии. Работаем по всей Старой Купавне и окрестностям. Гарантируем стабильную связь и высокую скорость.
        </p>
      `
    };
  }

  // Города с упрощенным шаблоном
  const simpleCities = ['Можайск', 'Наро-Фоминск', 'Воскресенск', 'Ступино', 'Павловский Посад', 'Электрогорск'];
  
  if (simpleCities.includes(cityName)) {
    return {
      title: `Подключение интернета в ${cityName}`,
      content: `
        <p class="mb-4">
          NetConnect предоставляет услуги высокоскоростного беспроводного интернета в городе ${cityName} и окрестностях Московской области.
        </p>
        
        <h3 class="text-xl font-semibold mb-3 mt-6">Наши услуги в ${cityName}:</h3>
        <ul class="space-y-2 mb-4">
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Беспроводной интернет до 250 Мбит/с</strong> — надёжное подключение через спутниковые и радиорелейные технологии для дач, коттеджей и частных домов</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Установка и настройка оборудования</strong> — выезд инженера на объект, монтаж антенны, настройка роутера и всех устройств</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Подключение СНТ и дачных кооперативов</strong> — организуем интернет для садовых товариществ по выгодным тарифам</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Техническая поддержка 24/7</strong> — оперативное решение любых вопросов круглосуточно</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Усиление сигнала</strong> — установка дополнительных репитеров для покрытия больших территорий</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Резервное подключение</strong> — настройка резервных каналов связи для бесперебойной работы</span>
          </li>
        </ul>

        <p class="mt-4 text-muted-foreground">
          Подключаем интернет там, где недоступны проводные технологии. Работаем по всему городу ${cityName} и окрестностям. Гарантируем стабильную связь и высокую скорость.
        </p>
      `
    };
  }

  return null;
};
