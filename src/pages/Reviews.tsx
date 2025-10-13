import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useSEO } from '@/hooks/useSEO';

const Reviews = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useSEO({
    title: 'Отзывы клиентов NetConnect - Реальные отзывы о подключении интернета',
    description: 'Читайте отзывы клиентов NetConnect о подключении беспроводного и спутникового интернета в Московской области. Более 1500 довольных клиентов ⭐',
    keywords: 'отзывы netconnect, отзывы об интернете, отзывы провайдер, беспроводной интернет отзывы',
    canonical: 'https://mosoblconnect.ru/reviews',
    ogTitle: 'Отзывы клиентов NetConnect',
    ogDescription: 'Реальные отзывы клиентов о подключении интернета в Московской области',
    ogImage: 'https://cdn.mosoblconnect.ru/files/0b95440d-0b84-41b8-8404-418760cb07a4.jpg'
  });

  const reviews = [
    {
      name: 'Александр Соколов',
      date: '15 сентября 2024',
      rating: 5,
      service: 'Беспроводной интернет',
      location: 'Дмитровский район',
      text: 'Подключили беспроводной интернет на даче в Дмитровском районе. Скорость отличная, 150 Мбит/с стабильно. Специалисты приехали в тот же день, все установили за 2 часа. Теперь работаю удаленно без проблем, даже видеозвонки идут без задержек.',
      avatar: 'A'
    },
    {
      name: 'Елена Морозова',
      date: '22 августа 2024',
      rating: 5,
      service: 'Спутниковый интернет',
      location: 'Можайский район',
      text: 'Спасибо за спутниковый интернет! Живем в деревне, никакие провайдеры к нам не доходили. NetConnect установили спутниковую антенну, теперь есть нормальный интернет. Дети смотрят YouTube, я работаю — все довольны. Скорость 50 Мбит/с вполне хватает.',
      avatar: 'Е'
    },
    {
      name: 'Дмитрий Кузнецов',
      date: '3 октября 2024',
      rating: 5,
      service: 'Видеонаблюдение',
      location: 'Истринский район',
      text: 'Заказывал установку видеонаблюдения для загородного дома. Поставили 6 камер с записью в облако. Всё работает через интернет от NetConnect. Могу смотреть с телефона откуда угодно. Монтаж аккуратный, настройка понятная. Рекомендую!',
      avatar: 'Д'
    },
    {
      name: 'Ольга Петрова',
      date: '18 июля 2024',
      rating: 5,
      service: 'Беспроводной интернет',
      location: 'Одинцовский район',
      text: 'Переехали в частный дом в Подмосковье. NetConnect быстро провели интернет, установили Wi-Fi роутер. Сигнал ловит во всех комнатах и даже на участке. Цена адекватная, скорость как обещали — 240 Мбит/с. Очень довольны!',
      avatar: 'О'
    },
    {
      name: 'Сергей Иванов',
      date: '28 сентября 2024',
      rating: 5,
      service: 'Беспроводной интернет',
      location: 'Раменский район',
      text: 'Отличный провайдер! Подключили интернет в СНТ, где раньше вообще ничего не было. Беспроводная технология — просто спасение. Работает стабильно уже 4 месяца, ни одного обрыва. Техподдержка отвечает быстро, если что-то нужно.',
      avatar: 'С'
    },
    {
      name: 'Мария Волкова',
      date: '5 августа 2024',
      rating: 5,
      service: 'Усиление связи',
      location: 'Серпуховский район',
      text: 'Заказывала усиление сотовой связи для дачи. Раньше телефон вообще не ловил. После установки репитера полный сигнал везде. Теперь могу и звонить, и 4G работает отлично. Ребята профессионалы, всё объяснили и показали.',
      avatar: 'М'
    },
    {
      name: 'Андрей Смирнов',
      date: '12 сентября 2024',
      rating: 5,
      service: 'Системы охраны',
      location: 'Ногинский район',
      text: 'Установили систему охраны с датчиками на окна и двери. Все подключено к интернету, получаю уведомления на телефон. Удобно и спокойно, особенно когда уезжаем. Монтаж качественный, цена приемлемая.',
      avatar: 'А'
    },
    {
      name: 'Наталья Федорова',
      date: '1 октября 2024',
      rating: 5,
      service: 'Беспроводной интернет',
      location: 'Клинский район',
      text: 'NetConnect — лучший провайдер в нашем районе! Скорость высокая, цена честная, никаких скрытых платежей. Служба поддержки всегда на связи. Интернет не отключался ни разу за 6 месяцев. Всем соседям рекомендовала.',
      avatar: 'Н'
    },
    {
      name: 'Игорь Белов',
      date: '10 октября 2024',
      rating: 4,
      service: 'Wi-Fi для дома',
      location: 'Подольский район',
      text: 'Установили Wi-Fi по всему дому. Покрытие хорошее, но в одной комнате на втором этаже сигнал слабоват. Техник предложил поставить дополнительную точку доступа за небольшую доплату. В целом доволен, работает стабильно.',
      avatar: 'И'
    },
    {
      name: 'Виктория Зайцева',
      date: '25 сентября 2024',
      rating: 5,
      service: 'Видеонаблюдение',
      location: 'Люберецкий район',
      text: 'Поставили видеонаблюдение вокруг участка. 8 камер с ночной съемкой и записью в облако. Качество изображения отличное, приложение удобное. Теперь всегда контролирую, что происходит на территории. Установка за один день!',
      avatar: 'В'
    },
    {
      name: 'Павел Григорьев',
      date: '7 августа 2024',
      rating: 4,
      service: 'Спутниковый интернет',
      location: 'Волоколамский район',
      text: 'Спутниковый интернет работает хорошо, но скорость иногда падает в сильный дождь. Зато в обычную погоду всё отлично. Для удаленной работы хватает. Установка заняла 2 дня из-за погодных условий.',
      avatar: 'П'
    },
    {
      name: 'Юлия Захарова',
      date: '14 октября 2024',
      rating: 5,
      service: 'Усиление связи',
      location: 'Коломенский район',
      text: 'Заказывали усиление 4G для загородного дома. Раньше интернет в телефоне практически не работал. После установки репитера скорость 4G стабильно высокая. Онлайн-банк, соцсети, видео — всё летает!',
      avatar: 'Ю'
    },
    {
      name: 'Константин Орлов',
      date: '30 сентября 2024',
      rating: 5,
      service: 'Системы охраны',
      location: 'Красногорский район',
      text: 'Установили умную систему охраны с датчиками движения и открытия дверей. Интеграция с интернетом позволяет управлять всем со смартфона. Очень доволен функционалом и оперативностью службы поддержки.',
      avatar: 'К'
    },
    {
      name: 'Светлана Королева',
      date: '19 июля 2024',
      rating: 4,
      service: 'Wi-Fi для дома',
      location: 'Мытищинский район',
      text: 'Настроили Wi-Fi сеть для большого дома. В основном всё работает отлично, но пришлось докупить ещё один роутер для лучшего покрытия подвала. Техподдержка помогла с настройкой быстро. Рекомендую.',
      avatar: 'С'
    },
    {
      name: 'Роман Васильев',
      date: '2 октября 2024',
      rating: 5,
      service: 'Беспроводной интернет',
      location: 'Сергиево-Посадский район',
      text: 'Подключили интернет в коттеджном поселке. Скорость 200 Мбит/с, работает без сбоев. Установка заняла всего один день. Цена справедливая, оборудование качественное. Очень доволен выбором провайдера!',
      avatar: 'Р'
    },
    {
      name: 'Екатерина Новикова',
      date: '11 августа 2024',
      rating: 5,
      service: 'Видеонаблюдение',
      location: 'Щёлковский район',
      text: 'Заказала систему видеонаблюдения для офиса. 10 камер с записью на сервер. Всё настроили, показали как пользоваться. Качество картинки отличное, доступ с любого устройства. Профессиональная работа!',
      avatar: 'Е'
    },
    {
      name: 'Владимир Титов',
      date: '6 сентября 2024',
      rating: 4,
      service: 'Усиление связи',
      location: 'Шаховской район',
      text: 'Поставили репитер для усиления сотовой связи. Связь стала намного лучше, но в дальнем углу участка сигнал всё ещё слабоват. Возможно, нужен более мощный усилитель. В доме теперь полный сигнал — это главное.',
      avatar: 'В'
    },
    {
      name: 'Анастасия Лебедева',
      date: '17 октября 2024',
      rating: 5,
      service: 'Спутниковый интернет',
      location: 'Талдомский район',
      text: 'Живем в глубинке, провайдеры сюда не доходят. Спутниковый интернет от NetConnect — настоящее спасение! Дети могут учиться онлайн, я работаю удаленно. Скорость стабильная, цена приемлемая.',
      avatar: 'А'
    },
    {
      name: 'Максим Киселёв',
      date: '23 июля 2024',
      rating: 5,
      service: 'Wi-Fi для дома',
      location: 'Химкинский район',
      text: 'Настроили бесшовный Wi-Fi по всему дому с тремя точками доступа. Теперь интернет ловит везде — от подвала до мансарды. Скорость не падает при переходе между комнатами. Отличная работа!',
      avatar: 'М'
    },
    {
      name: 'Ирина Соловьева',
      date: '4 октября 2024',
      rating: 4,
      service: 'Системы охраны',
      location: 'Ленинский район',
      text: 'Установили сигнализацию с датчиками на все окна и двери. Работает хорошо, но один раз была ложная тревога из-за залетевшего в дом насекомого. После калибровки датчика всё в порядке. Чувствую себя в безопасности.',
      avatar: 'И'
    },
    {
      name: 'Артем Федоров',
      date: '29 августа 2024',
      rating: 5,
      service: 'Беспроводной интернет',
      location: 'Наро-Фоминский район',
      text: 'Переехал в деревню на удаленку. NetConnect провели беспроводной интернет за 2 дня. Скорость 180 Мбит/с — более чем достаточно для работы. Видеоконференции без задержек, файлы летают. Очень доволен!',
      avatar: 'А'
    },
    {
      name: 'Лариса Крылова',
      date: '8 сентября 2024',
      rating: 5,
      service: 'Видеонаблюдение',
      location: 'Пушкинский район',
      text: 'Поставили видеонаблюдение на даче. 4 камеры с записью в облако и датчики движения. Теперь спокойно уезжаю в город — всё под контролем. Приложение удобное, уведомления приходят мгновенно.',
      avatar: 'Л'
    },
    {
      name: 'Валерий Морозов',
      date: '16 июля 2024',
      rating: 4,
      service: 'Беспроводной интернет',
      location: 'Воскресенский район',
      text: 'Интернет работает стабильно, скорость соответствует тарифу. Единственный минус — иногда пинг повышается в вечерние часы, когда все соседи онлайн. Для обычного пользования не критично. В целом доволен.',
      avatar: 'В'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Wifi" size={32} className="text-primary" />
              <a href="/" className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">NetConnect</a>
            </div>
            
            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-4">
              <a href="/services" className="text-sm font-medium hover:text-success transition-colors">Услуги</a>
              <a href="/tariffs" className="text-sm font-medium hover:text-success transition-colors">Тарифы</a>
              <a href="/pricing" className="text-sm font-medium hover:text-success transition-colors">Стоимость</a>
              <a href="/coverage" className="text-sm font-medium hover:text-success transition-colors">Покрытие</a>
              <a href="/signal-boost" className="text-sm font-medium hover:text-success transition-colors">Усиление 4G/LTE</a>
              <a href="/esim" className="text-sm font-medium hover:text-success transition-colors">eSIM</a>
              <a href="/#about" className="text-sm font-medium hover:text-success transition-colors">О компании</a>
              <a href="/faq" className="text-sm font-medium hover:text-success transition-colors">FAQ</a>
              <a href="/#contacts" className="text-sm font-medium hover:text-success transition-colors">Контакты</a>
              <a 
                href="tel:+79015000078" 
                className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                <Icon name="Phone" size={16} className="mr-2" />
                +7 (901) 500-00-78
              </a>
            </nav>

            {/* Mobile Quick Actions */}
            <div className="flex md:hidden items-center gap-2">
              <a 
                href="tel:+79015000078" 
                className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                aria-label="Позвонить"
              >
                <Icon name="Phone" size={20} />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-accent transition-colors"
                aria-label="Меню"
              >
                <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-border">
              <div className="space-y-4">
                <a href="/services" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-medium hover:text-success transition-colors">Услуги</a>
                <a href="/tariffs" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-medium hover:text-success transition-colors">Тарифы</a>
                <a href="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-medium hover:text-success transition-colors">Стоимость</a>
                <a href="/coverage" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-medium hover:text-success transition-colors">Покрытие</a>
                <a href="/signal-boost" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-medium hover:text-success transition-colors">Усиление 4G/LTE</a>
                <a href="/esim" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-medium hover:text-success transition-colors">eSIM</a>
                <a href="/#about" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-medium hover:text-success transition-colors">О компании</a>
                <a href="/faq" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-medium hover:text-success transition-colors">FAQ</a>
                <a href="/#contacts" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-medium hover:text-success transition-colors">Контакты</a>
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center space-x-2 text-success font-semibold">
                    <Icon name="Phone" size={16} />
                    <a href="tel:+79015000078" className="hover:underline">+7 (901) 500-00-78</a>
                  </div>
                  <div className="flex items-center space-x-2 text-success font-semibold mt-2">
                    <Icon name="Phone" size={16} />
                    <a href="tel:+79015000087" className="hover:underline">+7 (901) 500-00-87</a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Icon name="Star" size={32} className="text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Отзывы клиентов
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Реальные отзывы наших клиентов о подключении интернета в Московской области
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2 bg-success/10 text-success border-success/20">
                <Icon name="Star" size={16} className="mr-2" />
                Рейтинг 4.7/5
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-success/10 text-success border-success/20">
                <Icon name="Users" size={16} className="mr-2" />
                23 отзыва
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {reviews.map((review, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl font-bold text-primary">{review.avatar}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-lg">{review.name}</h3>
                            <div className="text-sm text-muted-foreground">{review.location}</div>
                          </div>
                          <div className="flex gap-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                            ))}
                          </div>
                        </div>
                        <Badge variant="outline" className="mb-3">
                          {review.service}
                        </Badge>
                        <p className="text-muted-foreground leading-relaxed mb-3">
                          {review.text}
                        </p>
                        <div className="text-xs text-muted-foreground">
                          {review.date}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Innovation Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-success/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mb-6">
                <Icon name="Lightbulb" size={32} className="text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Инновационный подход к каждому клиенту
              </h2>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-primary/10">
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p className="text-center md:text-left">
                  NetConnect специализируется на разработке и внедрении <span className="font-semibold text-foreground">инновационных телекоммуникационных решений</span>, основанных на передовых технологиях беспроводной и спутниковой связи. Мы не просто предоставляем доступ к интернету — мы создаем <span className="font-semibold text-foreground">индивидуальные технологические решения</span> для каждой точки подключения.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <div className="text-center p-4 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl">
                    <Icon name="Target" size={32} className="text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Индивидуальный подход</h3>
                    <p className="text-sm text-muted-foreground">Каждое подключение — уникальный проект</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-xl">
                    <Icon name="Cpu" size={32} className="text-secondary mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Новейшие технологии</h3>
                    <p className="text-sm text-muted-foreground">Постоянное внедрение инноваций</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-success/5 to-success/10 rounded-xl">
                    <Icon name="Award" size={32} className="text-success mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Высокое качество</h3>
                    <p className="text-sm text-muted-foreground">Максимальный уровень сервиса</p>
                  </div>
                </div>

                <p className="text-center md:text-left">
                  Наша команда инженеров проводит детальный <span className="font-semibold text-foreground">анализ технических особенностей</span> каждого объекта: рельефа местности, удаленности от базовых станций, наличия помех и препятствий. На основе этих данных мы подбираем оптимальное оборудование и конфигурацию системы, гарантируя <span className="font-semibold text-foreground">максимальную производительность и надежность</span> интернет-соединения.
                </p>

                <p className="text-center md:text-left">
                  Приверженность качеству, непрерывное совершенствование технологий и персонализированный сервис — вот принципы, которые позволяют NetConnect оставаться лидером в области телекоммуникационных услуг и обеспечивать <span className="font-semibold text-foreground">наивысший уровень удовлетворенности</span> каждого клиента.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a 
                href="/"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-opacity font-medium shadow-lg"
              >
                <Icon name="Home" size={20} className="mr-2" />
                Вернуться на главную
              </a>
              
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-success font-semibold">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={18} />
                  <a href="tel:+79015000078" className="hover:underline">+7 (901) 500-00-78</a>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={18} />
                  <a href="tel:+79015000087" className="hover:underline">+7 (901) 500-00-87</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Satellite" size={32} className="text-primary" />
                <span className="text-xl font-bold">NetConnect</span>
              </div>
              <p className="text-muted-foreground text-sm mb-3">
                Надежный беспроводной интернет в Московской области
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-4">
                <p className="font-semibold text-sm text-gray-900 mb-1">ООО "ЧОО "СБ ЗВИ"</p>
                <p className="text-xs text-muted-foreground">115093, г. Москва,<br/>пер. Партийный, д. 1</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Услуги</h3>
              <div className="space-y-2 text-sm">
                <a href="/services/internet" className="block text-muted-foreground hover:text-primary transition-colors">Интернет-подключение</a>
                <a href="/services/satellite" className="block text-muted-foreground hover:text-primary transition-colors">Спутниковый интернет</a>
                <a href="/services/surveillance" className="block text-muted-foreground hover:text-primary transition-colors">Видеонаблюдение</a>
                <a href="/services/security" className="block text-muted-foreground hover:text-primary transition-colors">Системы охраны</a>
                <a href="/services/wifi" className="block text-muted-foreground hover:text-primary transition-colors">Wi-Fi оборудование</a>
                <a href="/services/cellular-booster" className="block text-muted-foreground hover:text-primary transition-colors">Усиление связи</a>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Информация</h3>
              <div className="space-y-2 text-sm">
                <a href="/tariffs" className="block text-muted-foreground hover:text-primary transition-colors">Тарифы</a>
                <a href="/pricing" className="block text-muted-foreground hover:text-primary transition-colors">Стоимость</a>
                <a href="/coverage" className="block text-muted-foreground hover:text-primary transition-colors">Покрытие</a>
                <a href="/signal-boost" className="block text-muted-foreground hover:text-primary transition-colors">Усиление 4G/LTE</a>
                <a href="/esim" className="block text-muted-foreground hover:text-primary transition-colors">eSIM</a>
                <a href="/#about" className="block text-muted-foreground hover:text-primary transition-colors">О компании</a>
                <a href="/faq" className="block text-muted-foreground hover:text-primary transition-colors">FAQ</a>
                <a href="/reviews" className="block text-muted-foreground hover:text-primary transition-colors">Отзывы</a>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <div className="space-y-3 text-sm">
                <a 
                  href="tel:+79015000078"
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (901) 500-00-78
                </a>
                <a 
                  href="tel:+79015000087"
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (901) 500-00-87
                </a>
                <a 
                  href="https://wa.me/79015000078"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-muted-foreground hover:text-green-600 transition-colors"
                >
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  WhatsApp
                </a>
                <a 
                  href="mailto:info@mosoblconnect.ru"
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@mosoblconnect.ru
                </a>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground text-sm">
            <p>© 2015 NetConnect. Все права защищены.</p>
          </div>
        </div>
      </footer>
      <WhatsAppButton />
    </div>
  );
};

export default Reviews;