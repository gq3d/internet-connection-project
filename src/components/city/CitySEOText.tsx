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