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
        
        <h3 class="text-xl font-semibold mb-3 mt-6">Населённые пункты с нашим покрытием:</h3>
        <div class="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <p class="font-medium mb-2">Посёлки и деревни:</p>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Ликино-Дулёво</li>
              <li>Верея</li>
              <li>Горбачиха</li>
              <li>Давыдово</li>
              <li>Дровосеки</li>
              <li>Запонорье</li>
              <li>Зимино</li>
            </ul>
          </div>
          
          <div>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground mt-7">
              <li>Ильинский Погост</li>
              <li>Кабаново</li>
              <li>Крутое</li>
              <li>Малая Дубна</li>
              <li>Мисцево</li>
              <li>Новое</li>
            </ul>
          </div>
        </div>

        <h3 class="text-xl font-semibold mb-3 mt-6">Коттеджные посёлки Орехово-Зуево:</h3>
        <div class="grid md:grid-cols-3 gap-3 mb-4">
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Орехово-Зуевский парк</li>
            <li>Ликино-Дулёво парк</li>
            <li>Верея парк</li>
            <li>Горбачиха парк</li>
            <li>Давыдово парк</li>
          </ul>
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Дровосеки парк</li>
            <li>Запонорье парк</li>
            <li>Зимино парк</li>
            <li>Ильинский Погост парк</li>
            <li>Кабаново парк</li>
          </ul>
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Крутое парк</li>
            <li>Малая Дубна парк</li>
            <li>Мисцево парк</li>
            <li>Новое парк</li>
          </ul>
        </div>

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
        
        <h3 class="text-xl font-semibold mb-3 mt-6">Населённые пункты и территории с нашим покрытием:</h3>
        <p class="mb-4">
          Подключаем беспроводной интернет в городе Фрязино и близлежащих населённых пунктах: деревни Гребнево, Большие Жеребцы, Чижово, Новофрянково, коттеджные посёлки Гринада, Фрязино-парк, Зелёный город, СНТ Дубки, СНТ Мечта, СНТ Зарянка, СНТ Строитель, СНТ Радуга.
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
          Подключаем интернет там, где недоступны проводные технологии. Работаем по всему Фрязино и окрестностям, включая деревни Гребнево, Большие Жеребцы, Чижово, и все коттеджные посёлки района. Гарантируем стабильную связь и высокую скорость.
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
        
        <h3 class="text-xl font-semibold mb-3 mt-6">Населённые пункты и территории с нашим покрытием:</h3>
        <p class="mb-4">
          Подключаем беспроводной интернет в городе Старая Купавна и близлежащих населённых пунктах: деревни Слободище, Карабаново, Кабаново, Давыдово, Городищи, посёлок Купавна, коттеджные посёлки Купавна-Hills, Лесная усадьба, СНТ Огонёк, СНТ Дружба, СНТ Берёзка, СНТ Текстильщик.
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
          Подключаем интернет там, где недоступны проводные технологии. Работаем по всей Старой Купавне и окрестностям, включая деревни Слободище, Карабаново, Кабаново, и все коттеджные посёлки района. Гарантируем стабильную связь и высокую скорость.
        </p>
      `
    };
  }

  if (cityName === 'Лобня' || cityName === 'Реутов' || cityName === 'Ногинск' || cityName === 'Красноармейск' || cityName === 'Лыткарино' || cityName === 'Бронницы' || cityName === 'Кашира') {
    return {
      title: `Подключение интернета в ${cityName}`,
      content: `
        <p class="mb-4">
          NetConnect предоставляет услуги высокоскоростного беспроводного интернета в городе ${cityName} и окрестностях Московской области.
        </p>
        
        <h3 class="text-xl font-semibold mb-3 mt-6">Территории с нашим покрытием:</h3>
        <p class="mb-4">
          Подключаем интернет во всех районах города ${cityName}, включая частные дома, дачные участки, коттеджные посёлки и садовые товарищества.
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
          Подключаем интернет там, где недоступны проводные технологии. Работаем по всему городу ${cityName} и окрестностям, включая удалённые районы и коттеджные посёлки. Гарантируем стабильную связь и высокую скорость.
        </p>
      `
    };
  }

  return null;
};