interface CitySEOContent {
  title: string;
  content: string;
}

export const getCitySEOGroup3 = (cityName: string): CitySEOContent | null => {
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

  return null;
};
