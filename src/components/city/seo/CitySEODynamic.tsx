import { settlements, Settlement } from '@/data/settlements';
import { cityData } from '@/data/cityData';

interface CitySEOContent {
  title: string;
  content: string;
}

const getTypeLabel = (type: Settlement['type']): string => {
  switch (type) {
    case 'village': return 'Деревни';
    case 'settlement': return 'Посёлки';
    case 'cottage': return 'Коттеджные посёлки';
    case 'snt': return 'СНТ';
    default: return 'Населённые пункты';
  }
};

export const getCitySEODynamic = (cityName: string, citySlug: string): CitySEOContent | null => {
  // Получаем все населённые пункты для данного города
  const citySettlements = settlements.filter(s => s.city === citySlug);
  
  if (citySettlements.length === 0) {
    return null;
  }

  // Получаем данные города для правильных форм имени
  const city = cityData[citySlug];
  const cityNameNominative = city?.name || cityName;
  
  // Группируем по типам
  const villages = citySettlements.filter(s => s.type === 'village');
  const settlementsOnly = citySettlements.filter(s => s.type === 'settlement');
  const cottages = citySettlements.filter(s => s.type === 'cottage');
  const snts = citySettlements.filter(s => s.type === 'snt');
  
  // Генерируем список с разбивкой по колонкам
  const generateList = (items: Settlement[], columns: number = 2) => {
    if (items.length === 0) return '';
    
    const itemsPerColumn = Math.ceil(items.length / columns);
    const cols: Settlement[][] = [];
    
    for (let i = 0; i < columns; i++) {
      cols.push(items.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn));
    }
    
    return cols.map((col, idx) => {
      const marginClass = idx === 0 ? '' : 'mt-7';
      return `
        <div>
          <ul class="list-disc list-inside space-y-1 text-muted-foreground ${marginClass}">
            ${col.map(item => `<li>${item.name}</li>`).join('\n            ')}
          </ul>
        </div>
      `;
    }).join('\n          ');
  };
  
  // Формируем контент
  let sectionsHTML = '';
  
  // Комбинируем деревни и посёлки в одну секцию
  const combinedVillagesAndSettlements = [...villages, ...settlementsOnly];
  
  if (combinedVillagesAndSettlements.length > 0) {
    sectionsHTML += `
      <h3 class="text-xl font-semibold mb-3 mt-6">Населённые пункты с нашим покрытием:</h3>
      <div class="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <p class="font-medium mb-2">Посёлки и деревни:</p>
          ${generateList(combinedVillagesAndSettlements.slice(0, Math.ceil(combinedVillagesAndSettlements.length / 2)), 1)}
        </div>
        ${generateList(combinedVillagesAndSettlements.slice(Math.ceil(combinedVillagesAndSettlements.length / 2)), 1)}
      </div>
    `;
  }
  
  // Коттеджные посёлки отдельно
  if (cottages.length > 0) {
    const cottageColumns = cottages.length > 10 ? 3 : cottages.length > 5 ? 2 : 1;
    sectionsHTML += `
      <h3 class="text-xl font-semibold mb-3 mt-6">Коттеджные посёлки в районе ${cityNameNominative}:</h3>
      <div class="grid md:grid-cols-${cottageColumns} gap-3 mb-4">
        ${generateList(cottages, cottageColumns)}
      </div>
    `;
  }
  
  // СНТ отдельно
  if (snts.length > 0) {
    const sntColumns = snts.length > 10 ? 3 : snts.length > 5 ? 2 : 1;
    sectionsHTML += `
      <h3 class="text-xl font-semibold mb-3 mt-6">Садовые товарищества (СНТ) в районе ${cityNameNominative}:</h3>
      <div class="grid md:grid-cols-${sntColumns} gap-3 mb-4">
        ${generateList(snts, sntColumns)}
      </div>
    `;
  }
  
  const content = `
    <p class="mb-4">
      NetConnect предоставляет услуги беспроводного интернета в городе ${cityNameNominative} и всех населённых пунктах района Московской области.
    </p>
    
    ${sectionsHTML}

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