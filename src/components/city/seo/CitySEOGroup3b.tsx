interface CitySEOContent {
  title: string;
  content: string;
}

export const getCitySEOGroup3b = (cityName: string): CitySEOContent | null => {
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

  return null;
};
