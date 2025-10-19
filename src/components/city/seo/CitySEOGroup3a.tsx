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
        
        <h3 class="text-xl font-semibold mb-3 mt-6">Наши услуги в Коломне:</h3>
        <ul class="space-y-2 mb-4">
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Беспроводной интернет до 250 Мбит/с</strong> — стабильное подключение для частных домов</span>
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
            <span><strong>Техподдержка 24/7</strong> — круглосуточная поддержка</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span><strong>Усиление сигнала</strong> — покрытие больших участков</span>
          </li>
        </ul>

        <p class="mt-4 text-muted-foreground">
          Подключаем беспроводной интернет в Коломне и районе, обеспечивая качественную связь для загородных объектов.
        </p>
      `
    };
  }

  return null;
};
