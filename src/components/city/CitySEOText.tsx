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
