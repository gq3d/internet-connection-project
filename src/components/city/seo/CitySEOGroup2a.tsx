interface CitySEOContent {
  title: string;
  content: string;
}

export const getCitySEOGroup2a = (cityName: string): CitySEOContent | null => {
  if (cityName === 'Химки') {
    return {
      title: 'Подключение интернета в городском округе Химки',
      content: `
        <p class="mb-4">
          NetConnect предоставляет услуги беспроводного интернета в городе Химки и всех населённых пунктах городского округа Химки Московской области.
        </p>
        
        <h3 class="text-xl font-semibold mb-3 mt-6">Наши услуги в Химках:</h3>
        <ul class="space-y-2 mb-4">
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Беспроводной интернет до 250 Мбит/с</strong> — надёжное подключение для частных домов и дач</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Выезд инженера и установка</strong> — профессиональный монтаж оборудования</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Подключение коттеджных посёлков</strong> — групповые подключения по выгодным условиям</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Техподдержка 24/7</strong> — всегда на связи для решения вопросов</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Расширение покрытия</strong> — установка дополнительного оборудования</span>
          </li>
        </ul>

        <p class="mt-4 text-muted-foreground">
          Подключаем беспроводной интернет в Химках и районе, где нет возможности провести кабель. Обеспечиваем стабильную связь и высокую скорость.
        </p>
      `
    };
  }

  if (cityName === 'Москва') {
    return {
      title: 'Беспроводной интернет в Москве и Новой Москве',
      content: `
        <p class="mb-4">
          NetConnect предоставляет услуги беспроводного интернета в Москве, особенно в районах Новой Москвы, где проводное подключение затруднено или недоступно.
        </p>
        
        <h3 class="text-xl font-semibold mb-3 mt-6">Наши услуги в Москве:</h3>
        <ul class="space-y-2 mb-4">
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Беспроводной интернет до 250 Мбит/с</strong> — надёжное подключение для районов Новой Москвы</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Установка оборудования</strong> — профессиональный монтаж и настройка</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Подключение СНТ и дачных посёлков</strong> — работаем с любыми объектами</span>
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
          Специализируемся на подключении беспроводного интернета в районах Новой Москвы, где кабельные технологии недоступны или экономически нецелесообразны.
        </p>
      `
    };
  }

  if (cityName === 'Мытищи') {
    return {
      title: 'Подключение интернета в Мытищинском районе',
      content: `
        <p class="mb-4">
          NetConnect обеспечивает беспроводным интернетом город Мытищи и все населённые пункты Мытищинского городского округа Московской области.
        </p>

        <h3 class="text-xl font-semibold mb-3 mt-6">Наши услуги в Мытищах:</h3>
        <ul class="space-y-2 mb-4">
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Беспроводной интернет до 250 Мбит/с</strong> — стабильное подключение для дач и коттеджей</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Профессиональная установка</strong> — монтаж антенны и настройка оборудования</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Подключение коттеджных посёлков</strong> — опыт работы с жилыми комплексами</span>
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
          Подключаем беспроводной интернет в Мытищах и районе, обеспечивая качественную связь там, где проводное подключение невозможно.
        </p>
      `
    };
  }

  return null;
};