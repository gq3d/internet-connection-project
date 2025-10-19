import { settlements } from '@/data/settlements';
import { cityData } from '@/data/cityData';

interface CitySEOContent {
  title: string;
  content: string;
}

export const getCitySEODynamic = (cityName: string, citySlug: string): CitySEOContent | null => {
  // Проверяем, есть ли населённые пункты для данного города
  const citySettlements = settlements.filter(s => s.city === citySlug);
  
  if (citySettlements.length === 0) {
    return null;
  }

  // Получаем данные города для правильных форм имени
  const city = cityData[citySlug];
  const cityNameNominative = city?.name || cityName;
  
  const content = `
    <p class="mb-4">
      NetConnect предоставляет услуги беспроводного интернета в городе ${cityNameNominative} и всех населённых пунктах района Московской области.
    </p>

    <h3 class="text-xl font-semibold mb-3 mt-6">Наши услуги в районе ${cityNameNominative}:</h3>
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
        <span><strong>Подключение СНТ и коттеджных посёлков</strong> — работаем с любыми объектами</span>
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
      Подключаем беспроводной интернет в ${cityNameNominative} и районе, обеспечивая качественную связь для частных домов, дач и загородных участков.
    </p>
  `;
  
  return {
    title: `Подключение интернета в районе ${cityNameNominative}`,
    content: content
  };
};