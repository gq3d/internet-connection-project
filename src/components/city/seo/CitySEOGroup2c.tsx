interface CitySEOContent {
  title: string;
  content: string;
}

export const getCitySEOGroup2c = (cityName: string): CitySEOContent | null => {
  if (cityName === 'Пушкино') {
    return {
      title: 'Подключение интернета в Пушкинском районе',
      content: `
        <p class="mb-4">
          NetConnect обеспечивает беспроводным интернетом город Пушкино и все населённые пункты Пушкинского городского округа Московской области.
        </p>
        
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

  return null;
};