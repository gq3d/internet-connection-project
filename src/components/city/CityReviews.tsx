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
    date: "2025-09-15",
    text: "Отличный интернет! Подключили быстро, скорость стабильная даже в плохую погоду. Поддержка всегда на связи.",
    service: "Беспроводной интернет"
  },
  {
    id: 2,
    name: "Марина К.",
    rating: 5,
    date: "2025-08-22",
    text: "Давно искали надежный интернет для дачи. NetConnect решили все проблемы! Скорость отличная, цена адекватная.",
    service: "Спутниковый интернет"
  },
  {
    id: 3,
    name: "Дмитрий П.",
    rating: 4,
    date: "2025-08-10",
    text: "Хороший провайдер. Установка заняла 2 дня, работает стабильно. Единственный минус - хотелось бы больше тарифов на выбор.",
    service: "Беспроводной интернет"
  },
  {
    id: 4,
    name: "Ольга С.",
    rating: 5,
    date: "2025-07-28",
    text: "Спасибо за оперативность! Подключили за день, все настроили. Скорость соответствует заявленной, работает без сбоев.",
    service: "Беспроводной интернет"
  },
  {
    id: 5,
    name: "Игорь В.",
    rating: 4,
    date: "2025-07-15",
    text: "Качественный сервис. Интернет работает стабильно, скорость хорошая. Иногда бывают небольшие задержки в часы пик.",
    service: "Спутниковый интернет"
  },
  {
    id: 6,
    name: "Елена Б.",
    rating: 5,
    date: "2025-06-30",
    text: "Лучший интернет-провайдер в нашем районе! Подключили за 1 день, работает безупречно. Рекомендую всем соседям!",
    service: "Беспроводной интернет"
  },
  {
    id: 7,
    name: "Сергей Н.",
    rating: 5,
    date: "2025-06-18",
    text: "Отличное соотношение цена-качество. Скорость высокая, поддержка оперативная. Очень доволен выбором!",
    service: "Беспроводной интернет"
  },
  {
    id: 8,
    name: "Анна Л.",
    rating: 4,
    date: "2025-06-05",
    text: "Хороший провайдер для загородного дома. Скорость стабильная, цена приемлемая. Установка заняла 3 дня.",
    service: "Спутниковый интернет"
  },
  {
    id: 9,
    name: "Виктор Г.",
    rating: 5,
    date: "2025-05-20",
    text: "Профессиональная команда! Быстро подключили, все объяснили. Интернет работает отлично, сбоев нет.",
    service: "Беспроводной интернет"
  },
  {
    id: 10,
    name: "Татьяна Р.",
    rating: 5,
    date: "2025-05-10",
    text: "Очень довольна! Скорость высокая, подключение быстрое. Наконец-то нормальный интернет на даче!",
    service: "Беспроводной интернет"
  },
  {
    id: 11,
    name: "Андрей К.",
    rating: 4,
    date: "2025-04-28",
    text: "Качественный сервис. Интернет стабильный, скорость соответствует тарифу. Рекомендую.",
    service: "Спутниковый интернет"
  },
  {
    id: 12,
    name: "Наталья Ф.",
    rating: 5,
    date: "2025-04-15",
    text: "Подключили за 1 день, работает без нареканий. Скорость отличная, цена адекватная. Спасибо!",
    service: "Беспроводной интернет"
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