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
        
        <h3 class="text-xl font-semibold mb-3 mt-6">Районы и микрорайоны с нашим покрытием:</h3>
        <div class="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <p class="font-medium mb-2">Городские районы:</p>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Центр (Подлипки)</li>
              <li>Болшево</li>
              <li>Костино</li>
              <li>Юбилейный</li>
              <li>Первомайский</li>
              <li>Текстильщик</li>
              <li>Торфопредприятие</li>
            </ul>
          </div>
          
          <div>
            <p class="font-medium mb-2">Дачные посёлки:</p>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Подлипки-Дачные</li>
              <li>Водопроводчик</li>
              <li>Погонный</li>
              <li>Валентиновка</li>
              <li>Акулово</li>
              <li>Оболдино</li>
            </ul>
          </div>
        </div>

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
        
        <h3 class="text-xl font-semibold mb-3 mt-6">Населённые пункты с нашим покрытием:</h3>
        <div class="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <p class="font-medium mb-2">Деревни:</p>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Бабеево</li>
              <li>Всеволодово</li>
              <li>Есино</li>
              <li>Пушкино</li>
              <li>Стёпаново</li>
            </ul>
          </div>
          
          <div>
            <p class="font-medium mb-2">Посёлки и сёла:</p>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Иванисово (село)</li>
              <li>Случайный</li>
              <li>Елизаветино</li>
              <li>Новые Дома</li>
              <li>Фрязево</li>
            </ul>
          </div>
        </div>

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
        
        <h3 class="text-xl font-semibold mb-3 mt-6">Районы и микрорайоны с покрытием:</h3>
        <div class="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <p class="font-medium mb-2">Городские районы:</p>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Центр Балашихи</li>
              <li>Железнодорожный</li>
              <li>Никольско-Архангельский</li>
              <li>Северный</li>
              <li>Салтыковка</li>
              <li>Купавна</li>
            </ul>
          </div>
          
          <div>
            <p class="font-medium mb-2">Дачные посёлки и СНТ:</p>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Агрогородок</li>
              <li>Павлино</li>
              <li>Новый Милет</li>
              <li>Акулово</li>
              <li>Ольгино</li>
            </ul>
          </div>
        </div>

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
      villages: ['Барвиха', 'Жуковка', 'Ромашково', 'Горки', 'Раздоры', 'Николина Гора'],
      cottages: ['Горки XXI', 'Николино', 'Трувиль', 'Ромашково XXI', 'Березки', 'Жуковка XXI']
    },
    'Раменское': {
      district: 'Раменский городской округ',
      villages: ['Быково', 'Кратово', 'Удельная', 'Ильинский', 'Родники', 'Верея'],
      cottages: ['Раменское парк', 'Быково парк', 'Кратово парк', 'Удельная парк', 'Родники парк', 'Верея парк']
    },
    'Долгопрудный': {
      district: 'Городской округ Долгопрудный',
      villages: ['Водники', 'Павельцево', 'Хлебниково', 'Шереметьево', 'Новое', 'Котово'],
      cottages: ['Долгопрудный парк', 'Водники парк', 'Павельцево парк', 'Котово парк', 'Новое парк', 'Лесной']
    },
    'Воскресенск': {
      district: 'Воскресенский городской округ',
      villages: ['Ашитково', 'Виноградово', 'Горы', 'Золотово', 'Конобеево', 'Маришкино'],
      cottages: ['Воскресенск парк', 'Ашитково парк', 'Виноградово парк', 'Горы парк', 'Золотово парк', 'Маришкино парк']
    },
    'Ивантеевка': {
      district: 'Городской округ Ивантеевка',
      villages: ['Вантеево', 'Копнино', 'Башмаково'],
      cottages: ['Ивантеевка парк', 'Вантеево парк', 'Копнино парк']
    },
    'Павловский Посад': {
      district: 'Павлово-Посадский городской округ',
      villages: ['Аверкиево', 'Большие Дворы', 'Васютино', 'Городищи', 'Демихово', 'Евсеево'],
      cottages: ['Павловский Посад парк', 'Аверкиево парк', 'Демихово парк', 'Городищи парк', 'Евсеево парк', 'Васютино парк']
    },
    'Наро-Фоминск': {
      district: 'Наро-Фоминский городской округ',
      villages: ['Афинеево', 'Атепцево', 'Бекасово', 'Васильевское', 'Верея', 'Головково'],
      cottages: ['Наро-Фоминск парк', 'Афинеево парк', 'Атепцево парк', 'Бекасово парк', 'Верея парк', 'Головково парк']
    },
    'Можайск': {
      district: 'Можайский городской округ',
      villages: ['Бородино', 'Горетово', 'Дровнино', 'Ельня', 'Клементьево', 'Колоцкое'],
      cottages: ['Можайск парк', 'Бородино парк', 'Горетово парк', 'Дровнино парк', 'Ельня парк', 'Клементьево парк']
    },
    'Ступино': {
      district: 'Ступинский городской округ',
      villages: ['Аксиньино', 'Барабаново', 'Верзилово', 'Городище', 'Жилёво', 'Семёновское'],
      cottages: ['Ступино парк', 'Аксиньино парк', 'Барабаново парк', 'Верзилово парк', 'Городище парк', 'Семёновское парк']
    },
    'Протвино': {
      district: 'Городской округ Протвино',
      villages: ['Данки', 'Спас-Темня', 'Боровково'],
      cottages: ['Протвино парк', 'Данки парк', 'Спас-Темня парк']
    },
    'Лосино-Петровский': {
      district: 'Городской округ Лосино-Петровский',
      villages: ['Анискино', 'Биокомбинат', 'Русавкино'],
      cottages: ['Лосино-Петровский парк', 'Анискино парк', 'Русавкино парк']
    },
    'Апрелевка': {
      district: 'Городской округ Апрелевка',
      villages: ['Апрелевка-1', 'Апрелевка-2', 'Дубки'],
      cottages: ['Апрелевка парк', 'Дубки парк', 'Лесной квартал']
    },
    'Черноголовка': {
      district: 'Городской округ Черноголовка',
      villages: ['Ново-Архангельский', 'Кудрино', 'Обухово'],
      cottages: ['Черноголовка парк', 'Кудрино парк', 'Обухово парк']
    },
    'Рошаль': {
      district: 'Городской округ Рошаль',
      villages: ['Архангельское', 'Васильево', 'Горки'],
      cottages: ['Рошаль парк', 'Архангельское парк', 'Горки парк']
    },
    'Высоковск': {
      district: 'Клинский городской округ',
      villages: ['Высоковск-1', 'Высоковск-2', 'Спас-Заулок'],
      cottages: ['Высоковск парк', 'Спас-Заулок парк', 'Лесной']
    },
    'Куровское': {
      district: 'Орехово-Зуевский городской округ',
      villages: ['Авсюнино', 'Беливо', 'Верхово'],
      cottages: ['Куровское парк', 'Авсюнино парк', 'Беливо парк']
    },
    'Краснознаменск': {
      district: 'Городской округ Краснознаменск',
      villages: ['Власово', 'Горки', 'Гольево'],
      cottages: ['Краснознаменск парк', 'Власово парк', 'Гольево парк']
    },
    'Звенигород': {
      district: 'Одинцовский городской округ',
      villages: ['Ершово', 'Дунино', 'Назарьево', 'Саввинская Слобода', 'Супонево', 'Иглово'],
      cottages: ['Звенигород парк', 'Ершово парк', 'Дунино парк', 'Назарьево парк', 'Саввинская Слобода парк', 'Иглово парк']
    },
    'Волоколамск': {
      district: 'Волоколамский городской округ',
      villages: ['Андреевское', 'Борки', 'Ватолино', 'Кашино', 'Осташево', 'Спас'],
      cottages: ['Волоколамск парк', 'Андреевское парк', 'Борки парк', 'Ватолино парк', 'Кашино парк', 'Спас парк']
    },
    'Руза': {
      district: 'Рузский городской округ',
      villages: ['Беляная Гора', 'Воробьёво', 'Горбово', 'Дорохово', 'Колюбакино', 'Нестерово'],
      cottages: ['Руза парк', 'Беляная Гора парк', 'Воробьёво парк', 'Горбово парк', 'Дорохово парк', 'Колюбакино парк']
    },
    'Талдом': {
      district: 'Талдомский городской округ',
      villages: ['Вербилки', 'Запрудня', 'Квашонки', 'Новая Слобода', 'Темпы', 'Юркино'],
      cottages: ['Талдом парк', 'Вербилки парк', 'Запрудня парк', 'Квашонки парк', 'Темпы парк', 'Юркино парк']
    },
    'Шатура': {
      district: 'Шатурский городской округ',
      villages: ['Власово', 'Дмитровский Погост', 'Кривандино', 'Мишеронский', 'Пышлицы', 'Радовицы'],
      cottages: ['Шатура парк', 'Власово парк', 'Дмитровский Погост парк', 'Кривандино парк', 'Мишеронский парк', 'Радовицы парк']
    },
    'Озёры': {
      district: 'Озёрский городской округ',
      villages: ['Бебелево', 'Горы', 'Горностаево', 'Клишино', 'Полурядинки', 'Сенницы'],
      cottages: ['Озёры парк', 'Бебелево парк', 'Горы парк', 'Горностаево парк', 'Клишино парк', 'Полурядинки парк']
    }
  };

  const template = cityTemplates[cityName];
  if (template) {
    const villagesFirstHalf = template.villages.slice(0, Math.ceil(template.villages.length / 2));
    const villagesSecondHalf = template.villages.slice(Math.ceil(template.villages.length / 2));
    const cottagesFirstThird = template.cottages.slice(0, 2);
    const cottagesSecondThird = template.cottages.slice(2, 4);
    const cottagesThirdThird = template.cottages.slice(4);

    return {
      title: `Подключение интернета в ${template.district}`,
      content: `
        <p class="mb-4">
          NetConnect предоставляет услуги беспроводного интернета в городе ${cityName} и всех населённых пунктах ${template.district} Московской области.
        </p>
        
        <h3 class="text-xl font-semibold mb-3 mt-6">Населённые пункты с нашим покрытием:</h3>
        <div class="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <p class="font-medium mb-2">Посёлки и деревни:</p>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground">
              ${villagesFirstHalf.map(v => `<li>${v}</li>`).join('\n              ')}
            </ul>
          </div>
          
          <div>
            <ul class="list-disc list-inside space-y-1 text-muted-foreground mt-7">
              ${villagesSecondHalf.map(v => `<li>${v}</li>`).join('\n              ')}
            </ul>
          </div>
        </div>

        <h3 class="text-xl font-semibold mb-3 mt-6">Коттеджные посёлки ${cityName}:</h3>
        <div class="grid md:grid-cols-3 gap-3 mb-4">
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            ${cottagesFirstThird.map(c => `<li>${c}</li>`).join('\n            ')}
          </ul>
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            ${cottagesSecondThird.map(c => `<li>${c}</li>`).join('\n            ')}
          </ul>
          <ul class="list-disc list-inside space-y-1 text-muted-foreground">
            ${cottagesThirdThird.map(c => `<li>${c}</li>`).join('\n            ')}
          </ul>
        </div>

        <h3 class="text-xl font-semibold mb-3 mt-6">Наши услуги в ${cityName}:</h3>
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
          Подключаем беспроводной интернет в ${cityName} и районе, обеспечивая стабильную связь для загородных объектов.
        </p>
      `
    };
  }

  return null;
};