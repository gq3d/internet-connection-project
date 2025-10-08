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

  if (cityName === 'Лобня') {
    return {
      title: `Подключение интернета в Лобне`,
      content: `
        <p class="mb-4">
          NetConnect предоставляет услуги высокоскоростного беспроводного интернета в городе Лобня и окрестностях Долгопрудненского района Московской области.
        </p>
        
        <h3 class="text-xl font-semibold mb-3 mt-6">Населённые пункты и территории с нашим покрытием:</h3>
        <p class="mb-4">
          Подключаем беспроводной интернет в городе Лобня и близлежащих населённых пунктах: деревни Киово, Луговая, Шарапово, Красная Поляна, посёлок Шереметьевский, коттеджные посёлки Лобня Сити, Лесные Дали, Новая Лобня, Пестовское водохранилище, СНТ Мечта, СНТ Радуга, СНТ Дружба, СНТ Ветеран, СНТ Восход.
        </p>

        <h3 class="text-xl font-semibold mb-3 mt-6">Наши услуги в Лобне:</h3>
        <ul class="space-y-2 mb-4">
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Беспроводной интернет до 250 Мбит/с</strong> — надёжное подключение для дач, коттеджей и частных домов</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Установка и настройка оборудования</strong> — выезд инженера, монтаж антенны, настройка роутера</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Подключение СНТ и дачных кооперативов</strong> — выгодные тарифы для садовых товариществ</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Техническая поддержка 24/7</strong> — круглосуточная поддержка клиентов</span>
          </li>
        </ul>

        <p class="mt-4 text-muted-foreground">
          Работаем по всей Лобне и окрестностям, включая деревни Киово, Луговая, Шарапово, и все коттеджные посёлки района. Гарантируем стабильную связь.
        </p>
      `
    };
  }

  if (cityName === 'Реутов') {
    return {
      title: `Подключение интернета в Реутове`,
      content: `
        <p class="mb-4">
          NetConnect предоставляет услуги высокоскоростного беспроводного интернета в городе Реутов и прилегающих территориях Московской области.
        </p>
        
        <h3 class="text-xl font-semibold mb-3 mt-6">Населённые пункты и территории с нашим покрытием:</h3>
        <p class="mb-4">
          Подключаем беспроводной интернет в городе Реутов и близлежащих населённых пунктах: посёлок Никольское, микрорайон Новое Никольское, коттеджные посёлки Реутов Парк, Никольский Парк, Новая Слобода, СНТ Родник, СНТ Энергетик, СНТ Химик, СНТ Строитель.
        </p>

        <h3 class="text-xl font-semibold mb-3 mt-6">Наши услуги в Реутове:</h3>
        <ul class="space-y-2 mb-4">
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Беспроводной интернет до 250 Мбит/с</strong> — стабильное подключение для частных домов</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Установка оборудования</strong> — профессиональный монтаж антенны и настройка</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Техническая поддержка 24/7</strong> — всегда на связи для решения вопросов</span>
          </li>
        </ul>

        <p class="mt-4 text-muted-foreground">
          Обслуживаем весь Реутов и окрестности, включая Никольское и все коттеджные посёлки. Гарантируем качественную связь.
        </p>
      `
    };
  }

  if (cityName === 'Ногинск') {
    return {
      title: `Подключение интернета в Ногинске`,
      content: `
        <p class="mb-4">
          NetConnect предоставляет услуги высокоскоростного беспроводного интернета в городе Ногинск и окрестностях Богородского городского округа Московской области.
        </p>
        
        <h3 class="text-xl font-semibold mb-3 mt-6">Населённые пункты и территории с нашим покрытием:</h3>
        <p class="mb-4">
          Подключаем беспроводной интернет в городе Ногинск и близлежащих населённых пунктах: деревни Ямкино, Степановка, Мамонтово, Аверково, Ивановское, посёлки Обухово, Воровского, коттеджные посёлки Ногинск Парк, Аверково Парк, Лесная Усадьба, СНТ Заря, СНТ Ромашка, СНТ Надежда, СНТ Дружба.
        </p>

        <h3 class="text-xl font-semibold mb-3 mt-6">Наши услуги в Ногинске:</h3>
        <ul class="space-y-2 mb-4">
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Беспроводной интернет до 250 Мбит/с</strong> — надёжное подключение для дач и домов</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Установка оборудования</strong> — быстрый монтаж и настройка под ключ</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Поддержка СНТ</strong> — специальные условия для садовых товариществ</span>
          </li>
        </ul>

        <p class="mt-4 text-muted-foreground">
          Работаем по всему Ногинску и окрестностям, включая деревни Ямкино, Степановка, Мамонтово. Стабильная связь гарантирована.
        </p>
      `
    };
  }

  if (cityName === 'Красноармейск') {
    return {
      title: `Подключение интернета в Красноармейске`,
      content: `
        <p class="mb-4">
          NetConnect предоставляет услуги высокоскоростного беспроводного интернета в городе Красноармейск и прилегающих территориях Московской области.
        </p>
        
        <h3 class="text-xl font-semibold mb-3 mt-6">Населённые пункты и территории с нашим покрытием:</h3>
        <p class="mb-4">
          Подключаем беспроводной интернет в городе Красноармейск и близлежащих населённых пунктах: деревни Морозово, Леониха, Куровское, посёлок Ново-Ивановское, коттеджные посёлки Лесная Сказка, Красноармейский, Заря, СНТ Восход, СНТ Металлург, СНТ Текстильщик, СНТ Химик.
        </p>

        <h3 class="text-xl font-semibold mb-3 mt-6">Наши услуги в Красноармейске:</h3>
        <ul class="space-y-2 mb-4">
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Беспроводной интернет до 250 Мбит/с</strong> — высокая скорость для работы и отдыха</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Быстрая установка</strong> — подключение за 1-2 дня</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Техподдержка 24/7</strong> — всегда готовы помочь</span>
          </li>
        </ul>

        <p class="mt-4 text-muted-foreground">
          Обслуживаем Красноармейск и окрестности, включая деревни Морозово, Леониха, все коттеджные посёлки. Надёжный интернет.
        </p>
      `
    };
  }

  if (cityName === 'Лыткарино') {
    return {
      title: `Подключение интернета в Лыткарино`,
      content: `
        <p class="mb-4">
          NetConnect предоставляет услуги высокоскоростного беспроводного интернета в городе Лыткарино и окрестностях Московской области.
        </p>
        
        <h3 class="text-xl font-semibold mb-3 mt-6">Населённые пункты и территории с нашим покрытием:</h3>
        <p class="mb-4">
          Подключаем беспроводной интернет в городе Лыткарино и близлежащих населённых пунктах: деревни Мячково, Остров, микрорайон Тураево, коттеджные посёлки Лыткарино Парк, Остров Village, Берега, СНТ Волна, СНТ Оптик, СНТ Связист, СНТ Машиностроитель.
        </p>

        <h3 class="text-xl font-semibold mb-3 mt-6">Наши услуги в Лыткарино:</h3>
        <ul class="space-y-2 mb-4">
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Беспроводной интернет до 250 Мбит/с</strong> — стабильное подключение</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Профессиональная установка</strong> — качественный монтаж оборудования</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Поддержка 24/7</strong> — всегда на связи</span>
          </li>
        </ul>

        <p class="mt-4 text-muted-foreground">
          Работаем по всему Лыткарино и окрестностям, включая Мячково, Остров, все коттеджные посёлки. Надёжная связь.
        </p>
      `
    };
  }

  if (cityName === 'Бронницы') {
    return {
      title: `Подключение интернета в Бронницах`,
      content: `
        <p class="mb-4">
          NetConnect предоставляет услуги высокоскоростного беспроводного интернета в городе Бронницы и окрестностях Московской области.
        </p>
        
        <h3 class="text-xl font-semibold mb-3 mt-6">Населённые пункты и территории с нашим покрытием:</h3>
        <p class="mb-4">
          Подключаем беспроводной интернет в городе Бронницы и близлежащих населённых пунктах: деревни Кузнечики, Меньшово, Бисерово, Новое, посёлок Горка, коттеджные посёлки Бронницкое озеро, Прибрежный, Лесная Заимка, СНТ Восход, СНТ Лесное, СНТ Берёзка, СНТ Рассвет.
        </p>

        <h3 class="text-xl font-semibold mb-3 mt-6">Наши услуги в Бронницах:</h3>
        <ul class="space-y-2 mb-4">
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Беспроводной интернет до 250 Мбит/с</strong> — высокая скорость интернета</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Быстрая установка</strong> — подключение за 1-3 дня</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Круглосуточная поддержка</strong> — техподдержка 24/7</span>
          </li>
        </ul>

        <p class="mt-4 text-muted-foreground">
          Работаем по всем Бронницам и окрестностям, включая деревни Кузнечики, Меньшово, Бисерово. Стабильный интернет.
        </p>
      `
    };
  }

  if (cityName === 'Кашира') {
    return {
      title: `Подключение интернета в Кашире`,
      content: `
        <p class="mb-4">
          NetConnect предоставляет услуги высокоскоростного беспроводного интернета в городе Кашира и окрестностях Каширского городского округа Московской области.
        </p>
        
        <h3 class="text-xl font-semibold mb-3 mt-6">Населённые пункты и территории с нашим покрытием:</h3>
        <p class="mb-4">
          Подключаем беспроводной интернет в городе Кашира и близлежащих населённых пунктах: деревни Лиды, Знаменское, Богатищево, Торбеево, Ситне-Щелканово, посёлок Домна, коттеджные посёлки Каширские дали, Берег реки Ока, Лесная поляна, СНТ Ока, СНТ Машиностроитель, СНТ Энергетик, СНТ Родник.
        </p>

        <h3 class="text-xl font-semibold mb-3 mt-6">Наши услуги в Кашире:</h3>
        <ul class="space-y-2 mb-4">
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Беспроводной интернет до 250 Мбит/с</strong> — надёжное подключение для дач и домов</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Установка под ключ</strong> — полный монтаж и настройка оборудования</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Поддержка 24/7</strong> — круглосуточная техническая помощь</span>
          </li>
        </ul>

        <p class="mt-4 text-muted-foreground">
          Работаем по всей Кашире и окрестностям, включая деревни Лиды, Знаменское, Богатищево, все коттеджные посёлки. Гарантируем стабильную связь.
        </p>
      `
    };
  }

  return null;
};