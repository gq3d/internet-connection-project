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
        
        <h3 class="text-xl font-semibold mb-3 mt-6">Населённые пункты с нашим покрытием:</h3>
        <div class="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <p class="font-medium mb-2">Микрорайоны Химок:</p>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Подрезково</li>
              <li>Новогорск</li>
              <li>Левобережный</li>
              <li>Фирсановка</li>
              <li>Клязьма-Старбеево</li>
            </ul>
          </div>
          
          <div>
            <p class="font-medium mb-2">Деревни и посёлки:</p>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Кирилловка</li>
              <li>Старбеево</li>
              <li>Петровское</li>
              <li>Козлово</li>
              <li>Ивакино</li>
            </ul>
          </div>
        </div>

        <h3 class="text-xl font-semibold mb-3 mt-6">Коттеджные посёлки Химок:</h3>
        <div class="grid md:grid-cols-3 gap-3 mb-4">
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Новое Подрезково</li>
            <li>Вишнёвый сад</li>
            <li>Заповедное</li>
            <li>Зелёная роща</li>
            <li>Клязьминское водохранилище</li>
          </ul>
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Лесные дачи</li>
            <li>Парк Фили</li>
            <li>Покровские горки</li>
            <li>Серебряный бор</li>
            <li>Фирсановская усадьба</li>
          </ul>
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Химкинский лес</li>
            <li>Левобережье</li>
            <li>Эко-парк</li>
            <li>Новогорск парк</li>
          </ul>
        </div>

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
        
        <h3 class="text-xl font-semibold mb-3 mt-6">Районы Новой Москвы с нашим покрытием:</h3>
        <div class="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <p class="font-medium mb-2">Населённые пункты:</p>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Внуково</li>
              <li>Московский</li>
              <li>Щербинка</li>
              <li>Троицк</li>
              <li>Сосенское</li>
              <li>Воскресенское</li>
              <li>Десёновское</li>
              <li>Кокошкино</li>
            </ul>
          </div>
          
          <div>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground mt-7">
              <li>Марушкинское</li>
              <li>Московский</li>
              <li>Новофёдоровское</li>
              <li>Первомайское</li>
              <li>Рязановское</li>
              <li>Филимонковское</li>
              <li>Щаповское</li>
            </ul>
          </div>
        </div>

        <h3 class="text-xl font-semibold mb-3 mt-6">Коттеджные посёлки Москвы:</h3>
        <div class="grid md:grid-cols-3 gap-3 mb-4">
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Новая Москва</li>
            <li>Московские водники</li>
            <li>Троицкая слобода</li>
            <li>Переделкино ближнее</li>
            <li>Рассказовка</li>
          </ul>
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Саларьево парк</li>
            <li>Внуково парк</li>
            <li>Западное Кунцево</li>
            <li>Южное Бутово парк</li>
            <li>Николо-Хованское</li>
          </ul>
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Ватутинки</li>
            <li>Мамыри</li>
            <li>Бунинские луга</li>
            <li>Марушкино</li>
          </ul>
        </div>

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
        
        <h3 class="text-xl font-semibold mb-3 mt-6">Населённые пункты с нашим покрытием:</h3>
        <div class="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <p class="font-medium mb-2">Посёлки и деревни:</p>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Пироговский</li>
              <li>Нагорное</li>
              <li>Дружба</li>
              <li>Поведники</li>
              <li>Подольниха</li>
              <li>Троицкое</li>
              <li>Челобитьево</li>
              <li>Болтино</li>
            </ul>
          </div>
          
          <div>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground mt-7">
              <li>Марфино</li>
              <li>Высоково</li>
              <li>Виноградово</li>
              <li>Рупасово</li>
              <li>Беляниново</li>
              <li>Федоскино</li>
              <li>Лупаново</li>
            </ul>
          </div>
        </div>

        <h3 class="text-xl font-semibold mb-3 mt-6">Коттеджные посёлки Мытищ:</h3>
        <div class="grid md:grid-cols-3 gap-3 mb-4">
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Пироговская ривьера</li>
            <li>Клязьминский берег</li>
            <li>Марфинский парк</li>
            <li>Зелёные холмы</li>
            <li>Виноградово парк</li>
          </ul>
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Лесная резиденция</li>
            <li>Троицкие поляны</li>
            <li>Мытищи парк</li>
            <li>Дружба парк</li>
            <li>Северный парк</li>
          </ul>
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Федоскинская усадьба</li>
            <li>Пироговский лес</li>
            <li>Лесное озеро</li>
            <li>Загородный клуб</li>
          </ul>
        </div>

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
