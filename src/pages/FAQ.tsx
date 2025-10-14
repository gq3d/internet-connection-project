import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import Icon from '@/components/ui/icon';

const faqs = [
  {
    question: 'Как быстро можно подключить интернет?',
    answer: (
      <span>
        Подключение занимает 1-3 дня с момента заявки. Наши специалисты приедут, установят оборудование и настроят всё под ключ. Подробнее о тарифах и стоимости подключения можно узнать на странице{' '}
        <Link to="/pricing" className="text-blue-600 hover:text-blue-800 underline font-medium">
          Стоимость
        </Link>.
      </span>
    )
  },
  {
    question: 'Какая зона покрытия вашей сети?',
    answer: (
      <span>
        Мы покрываем Московскую область и прилегающие районы. Для уточнения доступности интернета по вашему адресу посмотрите{' '}
        <Link to="/coverage" className="text-blue-600 hover:text-blue-800 underline font-medium">
          карту покрытия
        </Link>{' '}
        или свяжитесь с нами по телефону или WhatsApp.
      </span>
    )
  },
  {
    question: 'Нужно ли покупать оборудование?',
    answer: 'Да, оборудование выкупается единоразово при подключении. Это выгоднее аренды — вы платите один раз и пользуетесь без ежемесячных доплат. Всё оборудование профессиональное, сертифицированное, с гарантией производителя от 2 до 5 лет. Антенны и роутеры служат 7-10 лет без замены. При необходимости мы бесплатно производим настройку и техническое обслуживание в рамках вашего тарифа.'
  },
  {
    question: 'Что делать, если интернет пропал?',
    answer: 'Наша служба поддержки работает 24/7. Позвоните нам, и мы оперативно решим проблему. В большинстве случаев неполадки устраняются удалённо за несколько минут.'
  },
  {
    question: 'Можно ли сменить тариф?',
    answer: 'Да, вы можете изменить тариф в любой момент. Просто свяжитесь с нами, и мы подберём оптимальный вариант под ваши потребности.'
  },
  {
    question: 'Есть ли ограничения по трафику?',
    answer: 'Нет, все наши тарифы включают безлимитный интернет без ограничений по объёму данных. Пользуйтесь сколько нужно!'
  },
  {
    question: 'Работает ли интернет в плохую погоду?',
    answer: 'Да, технология 4G LTE стабильно работает в любую погоду. Профессиональное оборудование обеспечивает надёжную связь даже при сильном ветре, дожде или снеге.'
  },
  {
    question: 'Можно ли подключить несколько устройств?',
    answer: 'Конечно! Наш роутер поддерживает одновременное подключение множества устройств: ноутбуки, смартфоны, планшеты, Smart TV, умный дом и другие гаджеты.'
  },
  {
    question: 'Какие документы нужны для подключения?',
    answer: 'Для подключения понадобится только паспорт. Мы заключим договор на месте, и вы сразу сможете пользоваться интернетом.'
  },
  {
    question: 'Есть ли договор и на какой срок?',
    answer: 'Да, мы заключаем официальный договор. Минимальный срок — 1 месяц. Вы можете отказаться от услуг в любое время, предупредив нас заранее.'
  },
  {
    question: 'Какая скорость интернета на самом деле?',
    answer: 'Скорость соответствует заявленной в тарифе, но при замере на одном устройстве может показывать меньше. Это нормально — современные роутеры распределяют канал между устройствами. Например, на тарифе 100 Мбит/с спидтест может показать 25 Мбит/с, но при этом три других устройства тоже получат по 25 Мбит/с каждое. Итоговая скорость совпадает с тарифом. Скорость также зависит от загруженности сети оператора, расстояния до вышки, погодных условий и качества приёма сигнала в конкретной точке.'
  },
  {
    question: 'Можно ли использовать свой роутер?',
    answer: 'Технически возможно, но мы рекомендуем использовать наше оборудование. Оно специально настроено для работы с нашей сетью и обеспечивает максимальную скорость и стабильность.'
  },
  {
    question: 'Какие дополнительные услуги вы предоставляете?',
    answer: (
      <span>
        Помимо интернета, мы устанавливаем{' '}
        <Link to="/services/surveillance" className="text-blue-600 hover:text-blue-800 underline font-medium">
          видеонаблюдение
        </Link>,{' '}
        <Link to="/services/security" className="text-blue-600 hover:text-blue-800 underline font-medium">
          охранную сигнализацию
        </Link>, усиливаем{' '}
        <Link to="/services/cellular-booster" className="text-blue-600 hover:text-blue-800 underline font-medium">
          сотовую связь
        </Link>, настраиваем{' '}
        <Link to="/services/wifi" className="text-blue-600 hover:text-blue-800 underline font-medium">
          Wi-Fi сети и mesh-системы
        </Link>. Все услуги можно заказать в комплексе со скидкой.
      </span>
    )
  },
  {
    question: 'Сколько стоит установка видеонаблюдения?',
    answer: (
      <span>
        Стоимость зависит от количества камер и площади объекта. Базовый комплект на 4 камеры с записью стоит от 35 000₽. Подробнее на странице{' '}
        <Link to="/services/surveillance" className="text-blue-600 hover:text-blue-800 underline font-medium">
          Видеонаблюдение
        </Link>. Консультация и выезд для замера — бесплатно.
      </span>
    )
  },
  {
    question: 'Что входит в установку оборудования?',
    answer: 'Базовый комплекс включает: монтаж антенны на фасаде или крыше, прокладку кабелей до 5 метров, установку и настройку роутера, подключение и тестирование. Конечная стоимость складывается из цены оборудования и стоимости работ. Дополнительные работы (прокладка кабелей свыше 5 метров, сложный монтаж, дополнительные точки доступа) оговариваются отдельно при составлении и согласовании окончательной сметы после выезда специалиста на объект.'
  },
  {
    question: 'Безопасно ли оборудование для здоровья?',
    answer: 'Абсолютно безопасно. Наше оборудование сертифицировано и соответствует всем санитарным нормам. Уровень излучения в десятки раз ниже допустимых значений и не превышает излучение обычного смартфона.'
  },
  {
    question: 'Можно ли подключиться в СНТ или деревне?',
    answer: (
      <span>
        Да, мы специализируемся на подключении загородных домов, дач и коттеджных посёлков. Если в вашем районе есть покрытие 4G любого оператора, мы сможем подключить стабильный интернет. Проверьте доступность на{' '}
        <Link to="/coverage" className="text-blue-600 hover:text-blue-800 underline font-medium">
          карте покрытия
        </Link>{' '}
        или позвоните нам для консультации.
      </span>
    )
  },
  {
    question: 'Что делать при переезде?',
    answer: 'При переезде в пределах зоны покрытия мы поможем перенести оборудование на новый адрес за дополнительную плату (демонтаж, транспортировка и повторная установка). Оборудование остаётся вашим — вы можете забрать его с собой или продолжить пользоваться услугами по новому адресу, если там есть наше покрытие.'
  },
  {
    question: 'Есть ли акции и скидки?',
    answer: 'Да! Первый месяц со скидкой 50% для новых клиентов. При заказе нескольких услуг (интернет + видеонаблюдение или сигнализация) — дополнительная скидка до 15%. Следите за акциями на сайте.'
  },
  {
    question: 'Как усилить сотовую связь на даче?',
    answer: (
      <span>
        Мы устанавливаем{' '}
        <Link to="/services/cellular-booster" className="text-blue-600 hover:text-blue-800 underline font-medium">
          репитеры (усилители) сигнала
        </Link>{' '}
        GSM, 3G, 4G для всех операторов. Комплект включает уличную антенну, усилитель и внутреннюю антенну. Цены от 18 000₽, установка за 1 день.
      </span>
    )
  },
  {
    question: 'Предоставляете ли гарантию на оборудование?',
    answer: 'Да, на всё установленное оборудование действует гарантия производителя от 1 до 3 лет. Кроме того, мы предоставляем бесплатное техническое обслуживание на весь срок действия договора.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Часто задаваемые вопросы - NetConnect</title>
        <meta name="description" content="Ответы на популярные вопросы о подключении интернета, тарифах и работе оборудования. Всё о беспроводном интернете в Московской области." />
        <link rel="canonical" href="https://mosoblconnect.ru/faq" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <section className="py-20 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Часто задаваемые вопросы</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ответы на популярные вопросы о подключении и работе интернета
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-md border border-blue-100 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-blue-50/50 transition-colors"
                  >
                    <span className="font-semibold text-lg text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <Icon 
                      name="ChevronDown" 
                      size={24} 
                      className={`text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-[1000px]' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 pb-5 pt-2">
                      <div className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto shadow-xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Не нашли ответ на свой вопрос?
              </h2>
              <p className="text-blue-100 text-lg mb-6">
                Наши специалисты с радостью проконсультируют вас по любым вопросам
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/#contacts" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
                >
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Связаться с нами
                </a>
                <a 
                  href="tel:+79015000078" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition-all shadow-lg hover:shadow-xl"
                >
                  <Icon name="Phone" size={20} className="mr-2" />
                  +7 (901) 500-00-78
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}