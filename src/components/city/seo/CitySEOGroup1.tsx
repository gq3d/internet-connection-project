export const getCitySEOGroup1 = (cityName: string) => {
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
            <li>Покровские холмы</li>
            <li>Бутово парк</li>
            <li>Видное хилс</li>
            <li>Видное estate</li>
            <li>Зелёная гавань</li>
          </ul>
        </div>

        <h3 class="text-xl font-semibold mb-3 mt-6">Наши услуги в Видном:</h3>
        <ul class="space-y-2 mb-4">
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Беспроводной интернет до 250 Мбит/с</strong> — надёжное подключение через спутниковые и радиорелейные технологии для дач, коттеджей и частных домов в Ленинском районе</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Установка и настройка оборудования</strong> — выезд инженера на объект, монтаж антенны, настройка роутера и всех устройств в течение 1 дня</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Подключение СНТ и дачных кооперативов</strong> — организуем интернет для садовых товариществ по выгодным корпоративным тарифам</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Техническая поддержка 24/7</strong> — оперативное решение любых вопросов круглосуточно без выходных</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Усиление сигнала</strong> — установка дополнительных репитеров для покрытия больших территорий и удалённых участков</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Резервное подключение</strong> — настройка резервных каналов связи для бесперебойной работы интернета</span>
          </li>
        </ul>

        <p class="mt-4 text-muted-foreground">
          Подключаем интернет там, где недоступны проводные технологии. Работаем по всему Ленинскому району, включая удалённые деревни и коттеджные посёлки. Гарантируем стабильную связь и высокую скорость.
        </p>
      `
    };
  }

  if (cityName === 'Подольск') {
    return {
      title: 'Подключение интернета в Подольске и Подольском районе',
      content: `
        <p class="mb-4">
          NetConnect предоставляет услуги беспроводного интернета в Подольске и всех населённых пунктах Подольского городского округа Московской области.
        </p>
        
        <h3 class="text-xl font-semibold mb-3 mt-6">Населённые пункты с нашим покрытием:</h3>
        <div class="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <p class="font-medium mb-2">Города и посёлки:</p>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Подольск</li>
              <li>Климовск</li>
              <li>Львовский</li>
              <li>Дубровицы</li>
              <li>Кузнечики</li>
              <li>Михайловское</li>
              <li>Сертякино</li>
              <li>Стрелково</li>
            </ul>
          </div>
          
          <div>
            <p class="font-medium mb-2">Деревни:</p>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Беляево</li>
              <li>Борисовка</li>
              <li>Валищево</li>
              <li>Ворыпаево</li>
              <li>Коледино</li>
              <li>Лемешово</li>
              <li>Плещеево</li>
            </ul>
          </div>
        </div>

        <h3 class="text-xl font-semibold mb-3 mt-6">Коттеджные посёлки Подольска:</h3>
        <div class="grid md:grid-cols-3 gap-3 mb-4">
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Подольские просторы</li>
            <li>Климовск парк</li>
            <li>Львовский парк</li>
            <li>Дубровицы парк</li>
            <li>Кузнечики парк</li>
          </ul>
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Михайловское парк</li>
            <li>Сертякино парк</li>
            <li>Стрелково парк</li>
            <li>Беляево парк</li>
            <li>Борисовка парк</li>
          </ul>
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Валищево парк</li>
            <li>Ворыпаево парк</li>
            <li>Коледино парк</li>
            <li>Лемешово парк</li>
          </ul>
        </div>

        <h3 class="text-xl font-semibold mb-3 mt-6">Наши услуги в Подольске:</h3>
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
            <span><strong>Подключение коттеджных посёлков</strong> — работаем с жилыми комплексами</span>
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
          Подключаем беспроводной интернет в Подольске и районе, обеспечивая качественную связь для загородных домов.
        </p>
      `
    };
  }

  if (cityName === 'Красногорск') {
    return {
      title: 'Подключение интернета в Красногорске',
      content: `
        <p class="mb-4">
          NetConnect обеспечивает беспроводным интернетом город Красногорск и все населённые пункты Красногорского городского округа Московской области.
        </p>
        
        <h3 class="text-xl font-semibold mb-3 mt-6">Населённые пункты с нашим покрытием:</h3>
        <div class="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <p class="font-medium mb-2">Города и посёлки:</p>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Красногорск</li>
              <li>Нахабино</li>
              <li>Опалиха</li>
              <li>Архангельское</li>
              <li>Ильинское</li>
              <li>Отрадное</li>
              <li>Николо-Урюпино</li>
            </ul>
          </div>
          
          <div>
            <p class="font-medium mb-2">Деревни:</p>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Гольёво</li>
              <li>Глухово</li>
              <li>Знаменское</li>
              <li>Петрово-Дальнее</li>
              <li>Путилково</li>
              <li>Ангелово</li>
            </ul>
          </div>
        </div>

        <h3 class="text-xl font-semibold mb-3 mt-6">Коттеджные посёлки Красногорска:</h3>
        <div class="grid md:grid-cols-3 gap-3 mb-4">
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Красногорские холмы</li>
            <li>Нахабино парк</li>
            <li>Опалиха парк</li>
            <li>Архангельское парк</li>
            <li>Ильинское парк</li>
          </ul>
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Отрадное парк</li>
            <li>Николо-Урюпино парк</li>
            <li>Гольёво парк</li>
            <li>Глухово парк</li>
            <li>Знаменское парк</li>
          </ul>
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Петрово-Дальнее парк</li>
            <li>Путилково парк</li>
            <li>Ангелово парк</li>
            <li>Красногорские просторы</li>
          </ul>
        </div>

        <h3 class="text-xl font-semibold mb-3 mt-6">Наши услуги в Красногорске:</h3>
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
          Подключаем беспроводной интернет в Красногорске и районе, обеспечивая стабильную связь для загородных объектов.
        </p>
      `
    };
  }

  return null;
};
