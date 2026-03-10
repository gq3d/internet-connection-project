export default function SeoTextBlock() {
  return (
    <section className="py-12 bg-white" aria-label="О подключении интернета в Московской области">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">

          {/* Основной SEO-текст */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
              Подключение интернета в Московской области — беспроводной и спутниковый
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4 leading-relaxed">
              <p>
                NetConnect — провайдер беспроводного интернета в Московской области. Мы подключаем частные дома, дачи, коттеджные посёлки, СНТ и садовые товарищества к высокоскоростному интернету до 250 Мбит/с. Если в вашем районе нет оптики или кабельного интернета — беспроводное подключение станет идеальным решением.
              </p>
              <p>
                Работаем во всех районах Подмосковья: Одинцовский, Красногорский, Истринский, Дмитровский, Можайский, Домодедовский, Подольский, Ленинский, Наро-Фоминский, Раменский и других. Подключение выполняем за 1 день — наш инженер выезжает на объект и устанавливает антенное оборудование. Никаких проводных работ и долгого ожидания.
              </p>
              <p>
                Для бизнеса предлагаем <strong>bonding-агрегацию каналов</strong> — объединение нескольких каналов связи для получения скорости до 1 Гбит/с с резервированием. Подходит для магазинов, кафе, офисов, производств и объектов в загородной зоне МО.
              </p>
            </div>
          </div>

          {/* Блок преимуществ */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
              <div className="text-blue-600 font-bold text-2xl mb-1">250</div>
              <div className="text-blue-800 font-semibold mb-1">Мбит/с</div>
              <div className="text-gray-600 text-sm">Максимальная скорость беспроводного интернета для дома и дачи</div>
            </div>
            <div className="bg-green-50 rounded-xl p-5 border border-green-100">
              <div className="text-green-600 font-bold text-2xl mb-1">1</div>
              <div className="text-green-800 font-semibold mb-1">день</div>
              <div className="text-gray-600 text-sm">Срок подключения от момента заявки до работающего интернета</div>
            </div>
            <div className="bg-purple-50 rounded-xl p-5 border border-purple-100">
              <div className="text-purple-600 font-bold text-2xl mb-1">169+</div>
              <div className="text-purple-800 font-semibold mb-1">населённых пунктов</div>
              <div className="text-gray-600 text-sm">Покрытие по всей Московской области: города, деревни, посёлки, СНТ</div>
            </div>
            <div className="bg-orange-50 rounded-xl p-5 border border-orange-100">
              <div className="text-orange-600 font-bold text-2xl mb-1">24/7</div>
              <div className="text-orange-800 font-semibold mb-1">поддержка</div>
              <div className="text-gray-600 text-sm">Техническая поддержка клиентов круглосуточно без выходных</div>
            </div>
          </div>

          {/* Зона покрытия */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-10 border border-gray-100">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Зона покрытия интернета NetConnect в Подмосковье
            </h2>
            <p className="text-gray-600 mb-5 text-sm md:text-base">
              Подключаем интернет в следующих городах и районах Московской области:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
              {[
                'Подольск', 'Красногорск', 'Химки', 'Мытищи', 'Люберцы',
                'Домодедово', 'Королёв', 'Одинцово', 'Балашиха', 'Щёлково',
                'Серпухов', 'Воскресенск', 'Электросталь', 'Клин', 'Дмитров',
                'Истра', 'Можайск', 'Руза', 'Наро-Фоминск', 'Пушкино',
                'Ногинск', 'Чехов', 'Ступино', 'Коломна', 'Жуковский',
                'Лобня', 'Долгопрудный', 'Реутов', 'Дзержинский', 'Лыткарино',
                'Бронницы', 'Видное', 'Кашира', 'Озёры', 'Зарайск',
                'Егорьевск', 'Орехово-Зуево', 'Электрогорск', 'Павловский Посад', 'Фрязево',
              ].map((city) => (
                <a
                  key={city}
                  href={`/city/${city.toLowerCase().replace(/\s+/g, '-').replace(/[ёЁ]/g, 'yo')}`}
                  className="text-blue-600 hover:text-blue-800 hover:underline text-sm py-1 px-2 rounded hover:bg-blue-50 transition-colors"
                >
                  {city}
                </a>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <a
                href="/coverage"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-sm"
              >
                Смотреть полную карту покрытия →
              </a>
            </div>
          </div>

          {/* FAQ секция */}
          <div className="mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
              Часто задаваемые вопросы об интернете в Московской области
            </h2>
            <div className="space-y-4">
              {[
                {
                  question: 'Как подключить интернет в частный дом в Московской области?',
                  answer: 'Оставьте заявку на сайте или позвоните по номеру +7 (901) 500-00-78. Наш инженер свяжется с вами, уточнит адрес и согласует удобное время выезда. Установка беспроводного оборудования занимает 2-4 часа, после чего интернет работает сразу. Подключение возможно в любой точке Московской области, где есть прямая видимость на нашу базовую станцию.',
                },
                {
                  question: 'Есть ли интернет на даче в Подмосковье?',
                  answer: 'Да, мы специализируемся на подключении дач, загородных домов и сезонных объектов в Московской области. Беспроводной интернет работает независимо от сезона. Для дачных посёлков и СНТ без кабельной инфраструктуры — это лучшее решение: не нужны провода, рытьё траншей и согласования.',
                },
                {
                  question: 'Сколько стоит подключение интернета в Подмосковье?',
                  answer: 'Тарифы на беспроводной интернет в Московской области начинаются от 1490 руб/мес за скорость 100 Мбит/с. Тариф 150 Мбит/с — 1990 руб/мес, 240 Мбит/с — 2590 руб/мес. Установка оборудования оплачивается отдельно. Точную стоимость уточняйте у наших менеджеров — цена зависит от расстояния до базовой станции.',
                },
                {
                  question: 'Работает ли интернет в деревне без кабеля?',
                  answer: 'Да, беспроводной интернет не требует прокладки кабеля. Мы устанавливаем на крышу или стену дома специальную антенну, которая получает сигнал от нашей базовой станции. Технология работает на расстоянии до 15-20 км от вышки. Если прямой видимости нет — предлагаем спутниковый интернет как альтернативу.',
                },
                {
                  question: 'Как быстро можно подключить интернет в Московской области?',
                  answer: 'Стандартный срок подключения — 1 рабочий день. После оформления заявки менеджер связывается с вами в течение 30 минут. В большинстве случаев инженер выезжает в тот же или на следующий день. Экстренное подключение возможно в день обращения при наличии свободного специалиста.',
                },
                {
                  question: 'Есть ли интернет в коттеджных посёлках Московской области?',
                  answer: 'Да, мы подключаем коттеджные посёлки как целиком (корпоративное подключение с разводкой по участкам), так и отдельные домовладения. Для КП действуют специальные условия — свяжитесь с нами для расчёта стоимости проекта.',
                },
              ].map((item, index) => (
                <details key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden group">
                  <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                    <span>{item.question}</span>
                    <svg
                      className="w-5 h-5 text-gray-500 flex-shrink-0 ml-3 group-open:rotate-180 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
