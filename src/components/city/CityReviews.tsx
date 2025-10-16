import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  text: string;
  service: string;
}

const allReviews: Review[] = [
  {
    id: 1,
    name: "Алексей М.",
    rating: 5,
    date: "2025-03-18",
    text: "Переехали в загородный дом, первым делом подключили NetConnect. Инженер приехал на следующий день, установил антенну на крыше за пару часов. Скорость 150 Мбит/с держится стабильно, даже в грозу не падает. Смотрим 4K, работаем удалённо – всё летает!",
    service: "Беспроводной интернет"
  },
  {
    id: 2,
    name: "Марина К.",
    rating: 5,
    date: "2024-11-05",
    text: "Живём в коттеджном посёлке, другие провайдеры отказывались тянуть кабель. NetConnect подключили за день – поставили антенну, настроили роутер, объяснили всё понятно. Уже 4 месяца пользуемся, ни разу проблем не было. Цена честная, без скрытых платежей.",
    service: "Беспроводной интернет"
  },
  {
    id: 3,
    name: "Дмитрий П.",
    rating: 4,
    date: "2024-09-22",
    text: "Подключал на дачу. Сначала сомневался – беспроводной интернет в деревне? Но ребята приехали, замерили сигнал, сказали будет уверенный приём. Поставили за день, работает на 100-120 Мбит/с. Иногда вечером чуть просаживается, но в целом очень доволен.",
    service: "Беспроводной интернет"
  },
  {
    id: 4,
    name: "Ольга С.",
    rating: 5,
    date: "2024-07-14",
    text: "Искала интернет для СНТ, везде говорили «слишком далеко». В NetConnect сразу согласились, приехали в субботу, за 3 часа всё установили. Антенну поставили на высокую мачту, теперь скорость 180 Мбит/с! Дети в онлайн-игры играют без лагов, я работаю по видеосвязи – идеально.",
    service: "Беспроводной интернет"
  },
  {
    id: 5,
    name: "Игорь В.",
    rating: 4,
    date: "2024-06-03",
    text: "Заказал спутниковый для удалённого участка. Монтажник приехал точно в назначенное время, установил тарелку за 2 часа. Скорость 50 Мбит/с, для загородного дома более чем достаточно. Пинг повыше чем хотелось бы, но для такой удалённости это норма.",
    service: "Спутниковый интернет"
  },
  {
    id: 6,
    name: "Елена Б.",
    rating: 5,
    date: "2024-04-28",
    text: "Лучшее решение для нашей деревни! Раньше сидели на мобильном интернете с ужасной скоростью. NetConnect установили за один визит, теперь 200 Мбит/с по WiFi во всём доме. Уже 6 соседей подключил по моей рекомендации – все в восторге!",
    service: "Беспроводной интернет"
  },
  {
    id: 7,
    name: "Сергей Н.",
    rating: 5,
    date: "2024-02-16",
    text: "Работаю удалённо, критично важна стабильность. Выбирал между несколькими провайдерами, NetConnect впечатлили профессионализмом. Поставили мощную антенну, настроили резервный канал. Больше года работы – ни одного обрыва связи! Поддержка отвечает за 5 минут в любое время.",
    service: "Беспроводной интернет"
  },
  {
    id: 8,
    name: "Анна Л.",
    rating: 5,
    date: "2023-12-08",
    text: "Подключала интернет для родителей в посёлок. Инженер приехал, провёл замеры, предложил оптимальное место для антенны. Всё установил аккуратно, провода спрятал, роутер настроил под пожилых людей – просто включи и работает. Родители очень довольны, смотрят онлайн-кино каждый вечер.",
    service: "Беспроводной интернет"
  },
  {
    id: 9,
    name: "Виктор Г.",
    rating: 4,
    date: "2023-10-11",
    text: "Переехал в частный дом, нужен был быстрый интернет. NetConnect подключили за 2 дня – первый выезд на замер, второй установка. Скорость отличная, 170 Мбит/с стабильно. Цена чуть выше конкурентов, но качество связи того стоит. Рекомендую.",
    service: "Беспроводной интернет"
  },
  {
    id: 10,
    name: "Татьяна Р.",
    rating: 5,
    date: "2023-08-25",
    text: "Наконец-то нормальный интернет на даче! До этого пользовались модемом 4G – еле-еле загружалось. NetConnect поставили направленную антенну, теперь скачиваем фильмы за минуты. Зимой живём в городе, весной приехали – всё работает как часы, даже настройки не сбились.",
    service: "Беспроводной интернет"
  },
  {
    id: 11,
    name: "Андрей К.",
    rating: 5,
    date: "2023-06-19",
    text: "Строили коттедж, интернет нужен был срочно для работы. Другие провайдеры обещали через месяц, NetConnect приехали на третий день! Поставили временную антенну, потом при чистовой отделке переустановили красиво. Сервис на высоте, скорость 220 Мбит/с – больше чем ожидал!",
    service: "Беспроводной интернет"
  },
  {
    id: 12,
    name: "Наталья Ф.",
    rating: 4,
    date: "2023-05-07",
    text: "Подключали на два объекта – дом и баню с гостевыми комнатами. Инженер посоветовал поставить mesh-систему для бесшовного покрытия. Теперь WiFi ловит по всему участку, даже в саду. Немного дороговато вышло, но результат отличный.",
    service: "Беспроводной интернет"
  },
  {
    id: 13,
    name: "Павел Т.",
    rating: 5,
    date: "2023-03-30",
    text: "Купили участок в 80 км от Москвы, думали интернета вообще не будет. NetConnect сделали чудо – поставили высокую мачту с антенной, развернули в сторону базовой станции. Скорость 130 Мбит/с в чистом поле! Онлайн-игры идут плавно, стримы без зависаний. Спасибо огромное!",
    service: "Беспроводной интернет"
  },
  {
    id: 14,
    name: "Ирина Ш.",
    rating: 5,
    date: "2024-08-12",
    text: "Переезжали всей семьёй в деревню на удалёнку. Главное требование – стабильный интернет. NetConnect провели тест сигнала, показали график покрытия, дали гарантию на скорость. Работает уже 8 месяцев – ни одного сбоя! Видеоконференции, облачные сервисы – всё работает идеально.",
    service: "Беспроводной интернет"
  },
  {
    id: 15,
    name: "Максим Ж.",
    rating: 4,
    date: "2024-05-20",
    text: "Заказывал на дачу в СНТ. Мастер приехал вовремя, быстро всё смонтировал. Единственное – пришлось докупить более мощный роутер, штатный не пробивал через два этажа. С новым роутером покрытие отличное, скорость держится на 160-170 Мбит/с.",
    service: "Беспроводной интернет"
  },
  {
    id: 16,
    name: "Юлия Н.",
    rating: 5,
    date: "2023-11-14",
    text: "Долго выбирала провайдера для коттеджа. NetConnect понравились честностью – сразу сказали реальную скорость без маркетинговых обещаний. Установили за день, настроили родительский контроль для детей, объяснили как пользоваться личным кабинетом. Уже год пользуемся – всё супер!",
    service: "Беспроводной интернет"
  },
  {
    id: 17,
    name: "Владимир П.",
    rating: 5,
    date: "2023-09-03",
    text: "Подключал в посёлок где только начали строиться дома. Другие провайдеры сказали приходите через год когда посёлок заселится. NetConnect приехали без проблем! Поставили антенну на крышу, провели кабель аккуратно. Скорость отменная, уже соседи спрашивают контакты.",
    service: "Беспроводной интернет"
  },
  {
    id: 18,
    name: "Екатерина Д.",
    rating: 4,
    date: "2024-01-22",
    text: "Установили спутниковый интернет в глубинке, куда проводной не дотянется. Монтаж занял чуть дольше обещанного – 4 часа вместо 2, но мастер работал аккуратно. Скорость 60 Мбит/с, для наших задач достаточно. Погода не влияет на качество связи.",
    service: "Спутниковый интернет"
  }
];

function getRandomReviews(count: number): Review[] {
  const shuffled = [...allReviews].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('ru-RU', options);
}

interface CityReviewsProps {
  cityName: string;
}

export default function CityReviews({ cityName }: CityReviewsProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const reviewCount = 3 + Math.floor(Math.random() * 4);
    setReviews(getRandomReviews(reviewCount));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('city-reviews');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [cityName]);

  const averageRating = reviews.length > 0 
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : "5.0";

  return (
    <section id="city-reviews" className="py-16 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Отзывы наших клиентов в {cityName}
          </h2>
          <div className="flex items-center justify-center gap-2 text-xl">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Icon 
                  key={star} 
                  name="Star" 
                  size={24} 
                  className={parseFloat(averageRating) >= star ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                />
              ))}
            </div>
            <span className="font-bold text-gray-900">{averageRating}</span>
            <span className="text-muted-foreground">· {reviews.length} отзывов</span>
          </div>
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {reviews.map((review, index) => (
            <div 
              key={review.id}
              className="bg-white rounded-xl shadow-lg border-2 border-blue-100 p-6 hover:shadow-xl transition-all duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{review.name}</h3>
                  <p className="text-sm text-muted-foreground">{formatDate(review.date)}</p>
                </div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon 
                      key={star} 
                      name="Star" 
                      size={16} 
                      className={review.rating >= star ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {review.text}
              </p>
              
              <div className="flex items-center text-sm text-blue-600 font-medium">
                <Icon name="CheckCircle" size={16} className="mr-1" />
                {review.service}
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <a 
            href="/reviews" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
          >
            Другие отзывы
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}