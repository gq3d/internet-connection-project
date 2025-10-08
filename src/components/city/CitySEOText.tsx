interface CitySEOTextProps {
  cityName: string;
}

const CitySEOText = ({ cityName }: CitySEOTextProps) => {
  const getSEOContent = () => {
    if (cityName === 'Видное') {
      return {
        title: 'Подключение интернета в Ленинском районе Московской области',
        content: `
          <p class="mb-4">
            Компания NetConnect предоставляет услуги высокоскоростного беспроводного интернета в городе Видное и всех населённых пунктах Ленинского городского округа Московской области.
          </p>
          
          <h3 class="text-xl font-semibold mb-3 mt-6">Города и деревни, где работает наш интернет:</h3>
          <div class="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <p class="font-medium mb-2">Города:</p>
              <ul class="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Видное</li>
                <li>Московский</li>
              </ul>
            </div>
            
            <div>
              <p class="font-medium mb-2">Посёлки:</p>
              <ul class="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Развилка</li>
                <li>Горки Ленинские</li>
                <li>Володарского</li>
                <li>Совхоза имени Ленина</li>
                <li>Краснопахорское</li>
              </ul>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <p class="font-medium mb-2">Деревни:</p>
              <ul class="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Апаринки</li>
                <li>Бачурино</li>
                <li>Богданиха</li>
                <li>Булатниково</li>
                <li>Былово</li>
                <li>Валищево</li>
                <li>Верхнее Валуево</li>
                <li>Городище</li>
                <li>Дрожжино</li>
                <li>Захарково</li>
                <li>Картино</li>
                <li>Колычёво</li>
                <li>Лопатино</li>
                <li>Марьино</li>
                <li>Мисайлово</li>
                <li>Молоково</li>
              </ul>
            </div>
            
            <div>
              <ul class="list-disc list-inside space-y-1 text-muted-foreground mt-7">
                <li>Пахорка</li>
                <li>Пенино</li>
                <li>Першино</li>
                <li>Поливаново</li>
                <li>Сапроново</li>
                <li>Сергеевка</li>
                <li>Сосенки</li>
                <li>Софьино</li>
                <li>Столбово</li>
                <li>Стрелково</li>
                <li>Таболово</li>
                <li>Тарычёво</li>
                <li>Шаганино</li>
                <li>Шишкино</li>
                <li>Яковлево</li>
              </ul>
            </div>
          </div>

          <h3 class="text-xl font-semibold mb-3 mt-6">Коттеджные посёлки Ленинского района:</h3>
          <div class="grid md:grid-cols-3 gap-3 mb-4">
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Видная речка</li>
              <li>Южная долина</li>
              <li>Горки XXI</li>
              <li>Видный город</li>
              <li>Видное берег</li>
              <li>Дубровские зори</li>
            </ul>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Зелёная роща</li>
              <li>Опушкино</li>
              <li>Барские усадьбы</li>
              <li>Новая Москва</li>
              <li>Дубки</li>
              <li>Видное Поле</li>
            </ul>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Летний сад</li>
              <li>Парк Горки</li>
              <li>Столбово парк</li>
              <li>Еловый лес</li>
              <li>Графские пруды</li>
            </ul>
          </div>

          <h3 class="text-xl font-semibold mb-3 mt-6">Наши услуги в Ленинском районе:</h3>
          <ul class="space-y-2 mb-4">
            <li class="flex items-start">
              <span class="text-primary mr-2">✓</span>
              <span><strong>Беспроводной интернет до 250 Мбит/с</strong> — стабильное подключение через спутниковые и радиорелейные технологии для дач, коттеджей и частных домов</span>
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
            Подключаем интернет там, где недоступны проводные технологии. Работаем по всему Ленинскому городскому округу, включая удалённые деревни и коттеджные посёлки. Гарантируем стабильную связь и высокую скорость.
          </p>
        `
      };
    }

    if (cityName === 'Подольск') {
      return {
        title: 'Подключение интернета в городском округе Подольск',
        content: `
          <p class="mb-4">
            NetConnect обеспечивает высокоскоростным беспроводным интернетом город Подольск и все населённые пункты городского округа Подольск Московской области.
          </p>
          
          <h3 class="text-xl font-semibold mb-3 mt-6">Населённые пункты с нашим покрытием:</h3>
          <div class="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <p class="font-medium mb-2">Посёлки и деревни:</p>
              <ul class="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Александровка</li>
                <li>Бережки</li>
                <li>Борисовка</li>
                <li>Быковка</li>
                <li>Валищево</li>
                <li>Ворыпаево</li>
                <li>Вороново</li>
                <li>Дубровицы</li>
                <li>Жарково</li>
                <li>Заболотье</li>
                <li>Знаменское</li>
                <li>Ивановское</li>
                <li>Коледино</li>
              </ul>
            </div>
            
            <div>
              <ul class="list-disc list-inside space-y-1 text-muted-foreground mt-7">
                <li>Красная Пахра</li>
                <li>Кузнечики</li>
                <li>Лемешово</li>
                <li>Львово</li>
                <li>Михайловское</li>
                <li>Никульское</li>
                <li>Покров</li>
                <li>Рязановка</li>
                <li>Сальково</li>
                <li>Сынково</li>
                <li>Федюково</li>
                <li>Щапово</li>
              </ul>
            </div>
          </div>

          <h3 class="text-xl font-semibold mb-3 mt-6">Коттеджные посёлки Подольска:</h3>
          <div class="grid md:grid-cols-3 gap-3 mb-4">
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Подольские просторы</li>
              <li>Westberlin</li>
              <li>Южная усадьба</li>
              <li>Пахра парк</li>
              <li>Покровское</li>
            </ul>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Николина горка</li>
              <li>Вишнёвый сад</li>
              <li>Дубровицы парк</li>
              <li>Лесная сказка</li>
              <li>Подольская слобода</li>
            </ul>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Кленовые аллеи</li>
              <li>Усадьба Знаменское</li>
              <li>Времена года</li>
              <li>Ривер парк</li>
            </ul>
          </div>

          <h3 class="text-xl font-semibold mb-3 mt-6">Наши услуги в Подольске:</h3>
          <ul class="space-y-2 mb-4">
            <li class="flex items-start">
              <span class="text-primary mr-2">✓</span>
              <span><strong>Беспроводной интернет до 250 Мбит/с</strong> — стабильное подключение через спутниковые и радиорелейные технологии</span>
            </li>
            <li class="flex items-start">
              <span class="text-primary mr-2">✓</span>
              <span><strong>Профессиональная установка</strong> — выезд инженера на объект, монтаж антенны, настройка оборудования</span>
            </li>
            <li class="flex items-start">
              <span class="text-primary mr-2">✓</span>
              <span><strong>Подключение дач и коттеджных посёлков</strong> — работаем с любыми объектами</span>
            </li>
            <li class="flex items-start">
              <span class="text-primary mr-2">✓</span>
              <span><strong>Техподдержка 24/7</strong> — круглосуточное решение любых вопросов</span>
            </li>
            <li class="flex items-start">
              <span class="text-primary mr-2">✓</span>
              <span><strong>Усиление покрытия</strong> — установка репитеров для больших территорий</span>
            </li>
          </ul>

          <p class="mt-4 text-muted-foreground">
            Подключаем интернет в Подольске и окрестностях, где проводные технологии недоступны. Гарантируем стабильное соединение и высокую скорость.
          </p>
        `
      };
    }

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

    if (cityName === 'Красногорск') {
      return {
        title: 'Подключение интернета в Красногорском районе',
        content: `
          <p class="mb-4">
            NetConnect обеспечивает высокоскоростным беспроводным интернетом город Красногорск и все населённые пункты Красногорского городского округа Московской области.
          </p>
          
          <h3 class="text-xl font-semibold mb-3 mt-6">Населённые пункты с нашим покрытием:</h3>
          <div class="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <p class="font-medium mb-2">Посёлки:</p>
              <ul class="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Нахабино</li>
                <li>Архангельское</li>
                <li>Отрадное</li>
                <li>Ильинское</li>
                <li>Павшинская пойма</li>
                <li>Опалиха</li>
                <li>Гольево</li>
              </ul>
            </div>
            
            <div>
              <p class="font-medium mb-2">Деревни:</p>
              <ul class="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Глухово</li>
                <li>Ангелово</li>
                <li>Ульянково</li>
                <li>Петрово-Дальнее</li>
                <li>Степановское</li>
                <li>Воронки</li>
                <li>Козино</li>
              </ul>
            </div>
          </div>

          <h3 class="text-xl font-semibold mb-3 mt-6">Коттеджные посёлки Красногорска:</h3>
          <div class="grid md:grid-cols-3 gap-3 mb-4">
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Красногорье</li>
              <li>Губайлово</li>
              <li>Усадьба Архангельское</li>
              <li>Рублёвка</li>
              <li>Николина гора</li>
            </ul>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Павшино парк</li>
              <li>Ильинские дачи</li>
              <li>Сосновый бор</li>
              <li>Опалиха парк</li>
              <li>Нахабинские высоты</li>
            </ul>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Зелёная долина</li>
              <li>Покровский</li>
              <li>Гольево парк</li>
              <li>Отрадное парк</li>
            </ul>
          </div>

          <h3 class="text-xl font-semibold mb-3 mt-6">Наши услуги в Красногорске:</h3>
          <ul class="space-y-2 mb-4">
            <li class="flex items-start">
              <span class="text-primary mr-2">✓</span>
              <span><strong>Беспроводной интернет до 250 Мбит/с</strong> — быстрое подключение для дач и коттеджей</span>
            </li>
            <li class="flex items-start">
              <span class="text-primary mr-2">✓</span>
              <span><strong>Профессиональный монтаж</strong> — установка антенны и настройка оборудования</span>
            </li>
            <li class="flex items-start">
              <span class="text-primary mr-2">✓</span>
              <span><strong>Подключение элитных посёлков</strong> — опыт работы с премиум-сегментом</span>
            </li>
            <li class="flex items-start">
              <span class="text-primary mr-2">✓</span>
              <span><strong>Техподдержка 24/7</strong> — оперативное решение любых вопросов</span>
            </li>
            <li class="flex items-start">
              <span class="text-primary mr-2">✓</span>
              <span><strong>Усиление сигнала</strong> — покрытие больших участков и территорий</span>
            </li>
          </ul>

          <p class="mt-4 text-muted-foreground">
            Подключаем беспроводной интернет в Красногорске и районе, обеспечивая стабильную связь там, где проводные технологии недоступны.
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

    if (cityName === 'Люберцы') {
      return {
        title: 'Подключение интернета в Люберецком районе',
        content: `
          <p class="mb-4">
            NetConnect предоставляет услуги беспроводного интернета в городе Люберцы и всех населённых пунктах Люберецкого городского округа Московской области.
          </p>
          
          <h3 class="text-xl font-semibold mb-3 mt-6">Населённые пункты с нашим покрытием:</h3>
          <div class="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <p class="font-medium mb-2">Посёлки и деревни:</p>
              <ul class="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Котельники</li>
                <li>Дзержинский</li>
                <li>Малаховка</li>
                <li>Красково</li>
                <li>Октябрьский</li>
                <li>Томилино</li>
                <li>Некрасовка</li>
                <li>Кожухово</li>
              </ul>
            </div>
            
            <div>
              <ul class="list-disc list-inside space-y-1 text-muted-foreground mt-7">
                <li>Марусино</li>
                <li>Мотяково</li>
                <li>Новая Ухтомка</li>
                <li>Пехорка</li>
                <li>Салтыковка</li>
                <li>Токарёво</li>
                <li>Ухтомский</li>
              </ul>
            </div>
          </div>

          <h3 class="text-xl font-semibold mb-3 mt-6">Коттеджные посёлки Люберец:</h3>
          <div class="grid md:grid-cols-3 gap-3 mb-4">
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Люберцы парк</li>
              <li>Малаховское озеро</li>
              <li>Салтыковка парк</li>
              <li>Томилинский лес</li>
              <li>Красковский лес</li>
            </ul>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Некрасовка парк</li>
              <li>Лесная дача</li>
              <li>Зелёная поляна</li>
              <li>Октябрьский парк</li>
              <li>Марусино берег</li>
            </ul>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Пехорка парк</li>
              <li>Ухтомский парк</li>
              <li>Дзержинский парк</li>
              <li>Котельниково</li>
            </ul>
          </div>

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
          
          <h3 class="text-xl font-semibold mb-3 mt-6">Населённые пункты с нашим покрытием:</h3>
          <div class="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <p class="font-medium mb-2">Посёлки и деревни:</p>
              <ul class="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Барыбино</li>
                <li>Белые Столбы</li>
                <li>Вельяминово</li>
                <li>Ильинское</li>
                <li>Константиново</li>
                <li>Растуново</li>
                <li>Заборье</li>
                <li>Ямы</li>
              </ul>
            </div>
            
            <div>
              <ul class="list-disc list-inside space-y-1 text-muted-foreground mt-7">
                <li>Редькино</li>
                <li>Добрыниха</li>
                <li>Востряково</li>
                <li>Кишкино</li>
                <li>Павловское</li>
                <li>Одинцово</li>
                <li>Сатино-Русское</li>
              </ul>
            </div>
          </div>

          <h3 class="text-xl font-semibold mb-3 mt-6">Коттеджные посёлки Домодедово:</h3>
          <div class="grid md:grid-cols-3 gap-3 mb-4">
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Домодедово парк</li>
              <li>Барыбино парк</li>
              <li>Белые столбы парк</li>
              <li>Растуново лес</li>
              <li>Вельяминово парк</li>
            </ul>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Заборье парк</li>
              <li>Ильинские дачи</li>
              <li>Константиново парк</li>
              <li>Павловская слобода</li>
              <li>Редькино парк</li>
            </ul>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Сатинский лес</li>
              <li>Ямской парк</li>
              <li>Востряково парк</li>
              <li>Одинцовский парк</li>
            </ul>
          </div>

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
          
          <h3 class="text-xl font-semibold mb-3 mt-6">Населённые пункты с нашим покрытием:</h3>
          <div class="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <p class="font-medium mb-2">Посёлки и деревни:</p>
              <ul class="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Фряново</li>
                <li>Монино</li>
                <li>Свердловский</li>
                <li>Загорянский</li>
                <li>Биокомбината</li>
                <li>Чкаловский</li>
                <li>Огуднево</li>
                <li>Трубино</li>
              </ul>
            </div>
            
            <div>
              <ul class="list-disc list-inside space-y-1 text-muted-foreground mt-7">
                <li>Анискино</li>
                <li>Гребнево</li>
                <li>Медвежьи Озёра</li>
                <li>Супонево</li>
                <li>Образцово</li>
                <li>Жегалово</li>
                <li>Серково</li>
              </ul>
            </div>
          </div>

          <h3 class="text-xl font-semibold mb-3 mt-6">Коттеджные посёлки Щёлково:</h3>
          <div class="grid md:grid-cols-3 gap-3 mb-4">
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Щёлковские хутора</li>
              <li>Медвежьи озёра парк</li>
              <li>Монино парк</li>
              <li>Фряново парк</li>
              <li>Свердловский парк</li>
            </ul>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Загорянка парк</li>
              <li>Гребнево усадьба</li>
              <li>Анискино парк</li>
              <li>Лесное озеро</li>
              <li>Зелёная роща</li>
            </ul>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Чкаловский парк</li>
              <li>Огуднево парк</li>
              <li>Трубино парк</li>
              <li>Образцово парк</li>
            </ul>
          </div>

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

    if (cityName === 'Пушкино') {
      return {
        title: 'Подключение интернета в Пушкинском районе',
        content: `
          <p class="mb-4">
            NetConnect обеспечивает беспроводным интернетом город Пушкино и все населённые пункты Пушкинского городского округа Московской области.
          </p>
          
          <h3 class="text-xl font-semibold mb-3 mt-6">Населённые пункты с нашим покрытием:</h3>
          <div class="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <p class="font-medium mb-2">Посёлки и деревни:</p>
              <ul class="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Правдинский</li>
                <li>Лесной</li>
                <li>Софрино</li>
                <li>Ашукино</li>
                <li>Зеленоградский</li>
                <li>Черкизово</li>
                <li>Звягино</li>
                <li>Клязьма</li>
              </ul>
            </div>
            
            <div>
              <ul class="list-disc list-inside space-y-1 text-muted-foreground mt-7">
                <li>Тарасовка</li>
                <li>Лесные Поляны</li>
                <li>Талицы</li>
                <li>Барково</li>
                <li>Царёво</li>
                <li>Мамонтовка</li>
                <li>Красноармейск</li>
              </ul>
            </div>
          </div>

          <h3 class="text-xl font-semibold mb-3 mt-6">Коттеджные посёлки Пушкино:</h3>
          <div class="grid md:grid-cols-3 gap-3 mb-4">
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Пушкино парк</li>
              <li>Клязьма резиденс</li>
              <li>Софрино парк</li>
              <li>Ашукинский лес</li>
              <li>Лесные дачи</li>
            </ul>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Правдинский парк</li>
              <li>Тарасовка парк</li>
              <li>Черкизово парк</li>
              <li>Звягино парк</li>
              <li>Талицы парк</li>
            </ul>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Барково парк</li>
              <li>Царёво парк</li>
              <li>Мамонтовка парк</li>
              <li>Зеленоградский лес</li>
            </ul>
          </div>

          <h3 class="text-xl font-semibold mb-3 mt-6">Наши услуги в Пушкино:</h3>
          <ul class="space-y-2 mb-4">
            <li class="flex items-start">
              <span class="text-primary mr-2">✓</span>
              <span><strong>Беспроводной интернет до 250 Мбит/с</strong> — стабильное подключение для дач</span>
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
            Подключаем беспроводной интернет в Пушкино и районе, обеспечивая качественную связь для загородных домов и дач.
          </p>
        `
      };
    }

    if (cityName === 'Дмитров') {
      return {
        title: 'Подключение интернета в Дмитровском районе',
        content: `
          <p class="mb-4">
            NetConnect предоставляет услуги беспроводного интернета в городе Дмитров и всех населённых пунктах Дмитровского городского округа Московской области.
          </p>
          
          <h3 class="text-xl font-semibold mb-3 mt-6">Населённые пункты с нашим покрытием:</h3>
          <div class="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <p class="font-medium mb-2">Посёлки и деревни:</p>
              <ul class="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Деденево</li>
                <li>Яхрома</li>
                <li>Икша</li>
                <li>Вербилки</li>
                <li>Новосиньково</li>
                <li>Синьково</li>
                <li>Орудьево</li>
                <li>Подосинки</li>
              </ul>
            </div>
            
            <div>
              <ul class="list-disc list-inside space-y-1 text-muted-foreground mt-7">
                <li>Горки</li>
                <li>Курово</li>
                <li>Ольявидово</li>
                <li>Белый Раст</li>
                <li>Костино</li>
                <li>Рогачёво</li>
                <li>Подъячево</li>
              </ul>
            </div>
          </div>

          <h3 class="text-xl font-semibold mb-3 mt-6">Коттеджные посёлки Дмитрова:</h3>
          <div class="grid md:grid-cols-3 gap-3 mb-4">
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Дмитровские горы</li>
              <li>Яхрома парк</li>
              <li>Деденево парк</li>
              <li>Икша парк</li>
              <li>Вербилки парк</li>
            </ul>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Синьковский лес</li>
              <li>Орудьевский парк</li>
              <li>Горки парк</li>
              <li>Куровские дачи</li>
              <li>Белый Раст парк</li>
            </ul>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Костино парк</li>
              <li>Рогачёвский лес</li>
              <li>Подъячево парк</li>
              <li>Дмитровский лес</li>
            </ul>
          </div>

          <h3 class="text-xl font-semibold mb-3 mt-6">Наши услуги в Дмитрове:</h3>
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
            Подключаем беспроводной интернет в Дмитрове и районе, обеспечивая стабильную связь для загородных объектов.
          </p>
        `
      };
    }

    if (cityName === 'Сергиев Посад') {
      return {
        title: 'Подключение интернета в Сергиево-Посадском районе',
        content: `
          <p class="mb-4">
            NetConnect обеспечивает беспроводным интернетом город Сергиев Посад и все населённые пункты Сергиево-Посадского городского округа Московской области.
          </p>
          
          <h3 class="text-xl font-semibold mb-3 mt-6">Населённые пункты с нашим покрытием:</h3>
          <div class="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <p class="font-medium mb-2">Посёлки и деревни:</p>
              <ul class="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Хотьково</li>
                <li>Краснозаводск</li>
                <li>Скоропусковский</li>
                <li>Сергиев Посад-7</li>
                <li>Богородское</li>
                <li>Реммаш</li>
                <li>Березняки</li>
                <li>Жучки</li>
              </ul>
            </div>
            
            <div>
              <ul class="list-disc list-inside space-y-1 text-muted-foreground mt-7">
                <li>Шеметово</li>
                <li>Абрамцево</li>
                <li>Семхоз</li>
                <li>Константиново</li>
                <li>Васильевское</li>
                <li>Лоза</li>
                <li>Кузьмино</li>
              </ul>
            </div>
          </div>

          <h3 class="text-xl font-semibold mb-3 mt-6">Коттеджные посёлки Сергиева Посада:</h3>
          <div class="grid md:grid-cols-3 gap-3 mb-4">
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Хотьковский парк</li>
              <li>Абрамцево усадьба</li>
              <li>Краснозаводск парк</li>
              <li>Богородское парк</li>
              <li>Березняковский лес</li>
            </ul>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Шеметово парк</li>
              <li>Семхоз парк</li>
              <li>Константиново парк</li>
              <li>Васильевское парк</li>
              <li>Лоза парк</li>
            </ul>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Кузьмино парк</li>
              <li>Жучки парк</li>
              <li>Посадский лес</li>
              <li>Скоропусковский парк</li>
            </ul>
          </div>

          <h3 class="text-xl font-semibold mb-3 mt-6">Наши услуги в Сергиевом Посаде:</h3>
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
            Подключаем беспроводной интернет в Сергиевом Посаде и районе, обеспечивая качественную связь для загородных домов.
          </p>
        `
      };
    }

    if (cityName === 'Коломна') {
      return {
        title: 'Подключение интернета в Коломенском районе',
        content: `
          <p class="mb-4">
            NetConnect предоставляет услуги беспроводного интернета в городе Коломна и всех населённых пунктах Коломенского городского округа Московской области.
          </p>
          
          <h3 class="text-xl font-semibold mb-3 mt-6">Населённые пункты с нашим покрытием:</h3>
          <div class="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <p class="font-medium mb-2">Посёлки и деревни:</p>
              <ul class="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Черкизово</li>
                <li>Проводник</li>
                <li>Радужный</li>
                <li>Песчаное</li>
                <li>Хорошово</li>
                <li>Городище</li>
                <li>Колычёво</li>
                <li>Пятница</li>
              </ul>
            </div>
            
            <div>
              <ul class="list-disc list-inside space-y-1 text-muted-foreground mt-7">
                <li>Малое Колычёво</li>
                <li>Озёрки</li>
                <li>Сергиевское</li>
                <li>Непецино</li>
                <li>Биорки</li>
                <li>Акатьево</li>
                <li>Щурово</li>
              </ul>
            </div>
          </div>

          <h3 class="text-xl font-semibold mb-3 mt-6">Коттеджные посёлки Коломны:</h3>
          <div class="grid md:grid-cols-3 gap-3 mb-4">
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Коломенский парк</li>
              <li>Черкизовский лес</li>
              <li>Проводник парк</li>
              <li>Радужный парк</li>
              <li>Песчаное парк</li>
            </ul>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Хорошово парк</li>
              <li>Городище парк</li>
              <li>Колычёво парк</li>
              <li>Пятница парк</li>
              <li>Озёрки парк</li>
            </ul>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Сергиевское парк</li>
              <li>Непецино парк</li>
              <li>Биорки парк</li>
              <li>Щурово парк</li>
            </ul>
          </div>

          <h3 class="text-xl font-semibold mb-3 mt-6">Наши услуги в Коломне:</h3>
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
              <span><strong>Усиление сигнала</strong> — покрытие больших территорий</span>
            </li>
          </ul>

          <p class="mt-4 text-muted-foreground">
            Подключаем беспроводной интернет в Коломне и районе, обеспечивая стабильную связь для загородных объектов.
          </p>
        `
      };
    }

    if (cityName === 'Чехов') {
      return {
        title: 'Подключение интернета в Чеховском районе',
        content: `
          <p class="mb-4">
            NetConnect обеспечивает беспроводным интернетом город Чехов и все населённые пункты Чеховского городского округа Московской области.
          </p>
          
          <h3 class="text-xl font-semibold mb-3 mt-6">Населённые пункты с нашим покрытием:</h3>
          <div class="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <p class="font-medium mb-2">Посёлки и деревни:</p>
              <ul class="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Столбовая</li>
                <li>Мещерское</li>
                <li>Любучаны</li>
                <li>Стремилово</li>
                <li>Ивачково</li>
                <li>Константиновское</li>
                <li>Манушкино</li>
                <li>Новый Быт</li>
              </ul>
            </div>
            
            <div>
              <ul class="list-disc list-inside space-y-1 text-muted-foreground mt-7">
                <li>Оксино</li>
                <li>Баранцево</li>
                <li>Дубна</li>
                <li>Селятино</li>
                <li>Сергеево</li>
                <li>Студенцы</li>
                <li>Угрюмово</li>
              </ul>
            </div>
          </div>

          <h3 class="text-xl font-semibold mb-3 mt-6">Коттеджные посёлки Чехова:</h3>
          <div class="grid md:grid-cols-3 gap-3 mb-4">
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Чеховские дачи</li>
              <li>Столбовая парк</li>
              <li>Мещерское парк</li>
              <li>Любучаны парк</li>
              <li>Стремилово парк</li>
            </ul>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Ивачково парк</li>
              <li>Константиновское парк</li>
              <li>Манушкино парк</li>
              <li>Новый Быт парк</li>
              <li>Оксино парк</li>
            </ul>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Баранцево парк</li>
              <li>Селятино парк</li>
              <li>Сергеево парк</li>
              <li>Студенцы парк</li>
            </ul>
          </div>

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
          
          <h3 class="text-xl font-semibold mb-3 mt-6">Населённые пункты с нашим покрытием:</h3>
          <div class="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <p class="font-medium mb-2">Посёлки и деревни:</p>
              <ul class="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Пролетарский</li>
                <li>Большевик</li>
                <li>Заокский</li>
                <li>Липицы</li>
                <li>Калиново</li>
                <li>Дракино</li>
                <li>Данки</li>
                <li>Турово</li>
              </ul>
            </div>
            
            <div>
              <ul class="list-disc list-inside space-y-1 text-muted-foreground mt-7">
                <li>Райсеменовское</li>
                <li>Борисково</li>
                <li>Бутурлино</li>
                <li>Васильево</li>
                <li>Глазово</li>
                <li>Гурово</li>
                <li>Заборье</li>
              </ul>
            </div>
          </div>

          <h3 class="text-xl font-semibold mb-3 mt-6">Коттеджные посёлки Серпухова:</h3>
          <div class="grid md:grid-cols-3 gap-3 mb-4">
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Серпуховский парк</li>
              <li>Пролетарский парк</li>
              <li>Большевик парк</li>
              <li>Заокский лес</li>
              <li>Липицы парк</li>
            </ul>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Калиново парк</li>
              <li>Дракино парк</li>
              <li>Данки парк</li>
              <li>Турово парк</li>
              <li>Райсеменовское парк</li>
            </ul>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Борисково парк</li>
              <li>Бутурлино парк</li>
              <li>Васильево парк</li>
              <li>Глазово парк</li>
            </ul>
          </div>

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
          
          <h3 class="text-xl font-semibold mb-3 mt-6">Населённые пункты с нашим покрытием:</h3>
          <div class="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <p class="font-medium mb-2">Посёлки и деревни:</p>
              <ul class="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Дедовск</li>
                <li>Снегири</li>
                <li>Павловская Слобода</li>
                <li>Курсаково</li>
                <li>Манихино</li>
                <li>Лечищево</li>
                <li>Новопетровское</li>
                <li>Ивановское</li>
              </ul>
            </div>
            
            <div>
              <ul class="list-disc list-inside space-y-1 text-muted-foreground mt-7">
                <li>Глебово</li>
                <li>Котово</li>
                <li>Ламишино</li>
                <li>Онуфриево</li>
                <li>Рождествено</li>
                <li>Северный</li>
                <li>Троицкое</li>
              </ul>
            </div>
          </div>

          <h3 class="text-xl font-semibold mb-3 mt-6">Коттеджные посёлки Истры:</h3>
          <div class="grid md:grid-cols-3 gap-3 mb-4">
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Истринские дачи</li>
              <li>Дедовск парк</li>
              <li>Снегири парк</li>
              <li>Павловская Слобода парк</li>
              <li>Курсаково парк</li>
            </ul>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Манихино парк</li>
              <li>Лечищево парк</li>
              <li>Новопетровское парк</li>
              <li>Ивановское парк</li>
              <li>Глебово парк</li>
            </ul>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Котово парк</li>
              <li>Ламишино парк</li>
              <li>Рождествено парк</li>
              <li>Троицкое парк</li>
            </ul>
          </div>

          <h3 class="text-xl font-semibold mb-3 mt-6">Наши услуги в Истре:</h3>
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
              <span><strong>Усиление сигнала</strong> — покрытие больших участков</span>
            </li>
          </ul>

          <p class="mt-4 text-muted-foreground">
            Подключаем беспроводной интернет в Истре и районе, обеспечивая качественную связь для загородных домов.
          </p>
        `
      };
    }

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

    if (cityName === 'Клин') {
      return {
        title: 'Подключение интернета в Клинском районе',
        content: `
          <p class="mb-4">
            NetConnect обеспечивает беспроводным интернетом город Клин и все населённые пункты Клинского городского округа Московской области.
          </p>
          
          <h3 class="text-xl font-semibold mb-3 mt-6">Населённые пункты с нашим покрытием:</h3>
          <div class="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <p class="font-medium mb-2">Посёлки и деревни:</p>
              <ul class="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Высоковск</li>
                <li>Решетниково</li>
                <li>Шевляково</li>
                <li>Петровское</li>
                <li>Нудоль</li>
                <li>Воздвиженское</li>
                <li>Зубово</li>
                <li>Спас-Заулок</li>
              </ul>
            </div>
            
            <div>
              <ul class="list-disc list-inside space-y-1 text-muted-foreground mt-7">
                <li>Давыдково</li>
                <li>Ямуга</li>
                <li>Шанталово</li>
                <li>Слобода</li>
                <li>Крюково</li>
                <li>Клушино</li>
                <li>Акулово</li>
              </ul>
            </div>
          </div>

          <h3 class="text-xl font-semibold mb-3 mt-6">Коттеджные посёлки Клина:</h3>
          <div class="grid md:grid-cols-3 gap-3 mb-4">
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Клинские просторы</li>
              <li>Высоковск парк</li>
              <li>Решетниково парк</li>
              <li>Шевляково парк</li>
              <li>Петровское парк</li>
            </ul>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Нудоль парк</li>
              <li>Воздвиженское парк</li>
              <li>Зубово парк</li>
              <li>Спас-Заулок парк</li>
              <li>Давыдково парк</li>
            </ul>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Ямуга парк</li>
              <li>Шанталово парк</li>
              <li>Слобода парк</li>
              <li>Крюково парк</li>
            </ul>
          </div>

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
          
          <h3 class="text-xl font-semibold mb-3 mt-6">Микрорайоны и территории с нашим покрытием:</h3>
          <div class="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <p class="font-medium mb-2">Микрорайоны:</p>
              <ul class="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Крюково</li>
                <li>Силино</li>
                <li>Савёлки</li>
                <li>Старое Крюково</li>
                <li>Матушкино</li>
                <li>Андреевка</li>
              </ul>
            </div>
            
            <div>
              <p class="font-medium mb-2">Деревни и посёлки:</p>
              <ul class="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Ржавки</li>
                <li>Каменка</li>
                <li>Алабушево</li>
                <li>Малино</li>
                <li>Голубое</li>
                <li>Назарьево</li>
              </ul>
            </div>
          </div>

          <h3 class="text-xl font-semibold mb-3 mt-6">Коттеджные посёлки Зеленограда:</h3>
          <div class="grid md:grid-cols-3 gap-3 mb-4">
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Зеленоградский лес</li>
              <li>Крюково парк</li>
              <li>Силино парк</li>
              <li>Савёлки парк</li>
              <li>Матушкино парк</li>
            </ul>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Андреевка парк</li>
              <li>Ржавки парк</li>
              <li>Каменка парк</li>
              <li>Алабушево парк</li>
              <li>Малино парк</li>
            </ul>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Голубое озеро</li>
              <li>Назарьево парк</li>
              <li>Зеленоградские дачи</li>
              <li>Лесной квартал</li>
            </ul>
          </div>

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
          
          <h3 class="text-xl font-semibold mb-3 mt-6">Населённые пункты с нашим покрытием:</h3>
          <div class="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <p class="font-medium mb-2">Посёлки и микрорайоны:</p>
              <ul class="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Большая Волга</li>
                <li>Ратмино</li>
                <li>Юркино</li>
                <li>Александровка</li>
                <li>Козлаки</li>
                <li>Поселок Института ядерных исследований</li>
              </ul>
            </div>
            
            <div>
              <ul class="list-disc list-inside space-y-1 text-muted-foreground mt-7">
                <li>Левобережный</li>
                <li>Черная речка</li>
                <li>Притыкинская роща</li>
                <li>Центральный</li>
                <li>Новое Поле</li>
              </ul>
            </div>
          </div>

          <h3 class="text-xl font-semibold mb-3 mt-6">Коттеджные посёлки Дубны:</h3>
          <div class="grid md:grid-cols-3 gap-3 mb-4">
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Дубна парк</li>
              <li>Большая Волга парк</li>
              <li>Ратмино парк</li>
              <li>Юркино парк</li>
              <li>Александровка парк</li>
            </ul>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Козлаки парк</li>
              <li>Левобережный парк</li>
              <li>Черная речка парк</li>
              <li>Притыкинская роща парк</li>
              <li>Волжский берег</li>
            </ul>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Дубненский лес</li>
              <li>Канал имени Москвы</li>
              <li>Новое Поле парк</li>
              <li>Атомный парк</li>
            </ul>
          </div>

          <h3 class="text-xl font-semibold mb-3 mt-6">Наши услуги в Дубне:</h3>
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
              <span><strong>Усиление сигнала</strong> — покрытие больших участков</span>
            </li>
          </ul>

          <p class="mt-4 text-muted-foreground">
            Подключаем беспроводной интернет в Дубне и районе, обеспечивая качественную связь для загородных домов и дач.
          </p>
        `
      };
    }

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

    if (cityName === 'Фрязино' || cityName === 'Лобня' || cityName === 'Реутов' || cityName === 'Ногинск' || cityName === 'Красноармейск' || cityName === 'Лыткарино' || cityName === 'Старая Купавна' || cityName === 'Бронницы' || cityName === 'Кашира') {
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

  const seoContent = getSEOContent();

  if (!seoContent) {
    return null;
  }

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">{seoContent.title}</h2>
          <div 
            className="prose prose-slate max-w-none"
            dangerouslySetInnerHTML={{ __html: seoContent.content }}
          />
        </div>
      </div>
    </section>
  );
};

export default CitySEOText;