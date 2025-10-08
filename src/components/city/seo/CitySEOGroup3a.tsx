interface CitySEOContent {
  title: string;
  content: string;
}

export const getCitySEOGroup3a = (cityName: string): CitySEOContent | null => {
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

  return null;
};
