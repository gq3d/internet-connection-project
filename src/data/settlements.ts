export interface Settlement {
  name: string;
  city: string;
  type: 'village' | 'settlement' | 'cottage' | 'snt';
}

export const settlements: Settlement[] = [
  // Озёры
  { name: 'Горы', city: 'ozery', type: 'village' },
  { name: 'Клишино', city: 'ozery', type: 'village' },
  { name: 'Липитино', city: 'ozery', type: 'village' },
  { name: 'Полурядинки', city: 'ozery', type: 'village' },
  { name: 'Соколова Пустынь', city: 'ozery', type: 'settlement' },
  { name: 'Редькино', city: 'ozery', type: 'village' },
  
  // Видное
  { name: 'Развилка', city: 'vidnoe', type: 'settlement' },
  { name: 'Горки Ленинские', city: 'vidnoe', type: 'settlement' },
  { name: 'Володарского', city: 'vidnoe', type: 'settlement' },
  { name: 'Апаринки', city: 'vidnoe', type: 'village' },
  { name: 'Бачурино', city: 'vidnoe', type: 'village' },
  { name: 'Булатниково', city: 'vidnoe', type: 'village' },
  { name: 'Былово', city: 'vidnoe', type: 'village' },
  { name: 'Столбово', city: 'vidnoe', type: 'village' },
  { name: 'Видная речка', city: 'vidnoe', type: 'cottage' },
  { name: 'Южная долина', city: 'vidnoe', type: 'cottage' },
  { name: 'Горки XXI', city: 'vidnoe', type: 'cottage' },
  
  // Подольск
  { name: 'Климовск', city: 'podolsk', type: 'settlement' },
  { name: 'Львовский', city: 'podolsk', type: 'settlement' },
  { name: 'Дубровицы', city: 'podolsk', type: 'settlement' },
  { name: 'Беляево', city: 'podolsk', type: 'village' },
  { name: 'Борисовка', city: 'podolsk', type: 'village' },
  { name: 'Валищево', city: 'podolsk', type: 'village' },
  
  // Химки
  { name: 'Подрезково', city: 'khimki', type: 'settlement' },
  { name: 'Новогорск', city: 'khimki', type: 'settlement' },
  { name: 'Левобережный', city: 'khimki', type: 'settlement' },
  { name: 'Фирсановка', city: 'khimki', type: 'settlement' },
  { name: 'Кирилловка', city: 'khimki', type: 'village' },
  { name: 'Старбеево', city: 'khimki', type: 'village' },
  { name: 'Новое Подрезково', city: 'khimki', type: 'cottage' },
  { name: 'Заповедное', city: 'khimki', type: 'cottage' },
  
  // Мытищи
  { name: 'Пироговский', city: 'mytishchi', type: 'settlement' },
  { name: 'Нагорное', city: 'mytishchi', type: 'settlement' },
  { name: 'Дружба', city: 'mytishchi', type: 'settlement' },
  { name: 'Поведники', city: 'mytishchi', type: 'settlement' },
  { name: 'Аббакумово', city: 'mytishchi', type: 'village' },
  { name: 'Аксаково', city: 'mytishchi', type: 'village' },
  { name: 'Афанасово', city: 'mytishchi', type: 'village' },
  { name: 'Беляниново', city: 'mytishchi', type: 'village' },
  { name: 'Болтино', city: 'mytishchi', type: 'village' },
  { name: 'Большая Чёрная', city: 'mytishchi', type: 'village' },
  { name: 'Большое Ивановское', city: 'mytishchi', type: 'village' },
  { name: 'Борец', city: 'mytishchi', type: 'village' },
  { name: 'Бородино', city: 'mytishchi', type: 'village' },
  { name: 'Бяконтово', city: 'mytishchi', type: 'village' },
  { name: 'Вешки', city: 'mytishchi', type: 'village' },
  { name: 'Виноградово', city: 'mytishchi', type: 'village' },
  { name: 'Витенёво', city: 'mytishchi', type: 'village' },
  { name: 'Высоково', city: 'mytishchi', type: 'village' },
  { name: 'Голенищево', city: 'mytishchi', type: 'village' },
  { name: 'Горки', city: 'mytishchi', type: 'village' },
  { name: 'Грибки', city: 'mytishchi', type: 'village' },
  { name: 'Долгиниха', city: 'mytishchi', type: 'village' },
  { name: 'Драчёво', city: 'mytishchi', type: 'village' },
  { name: 'Еремино', city: 'mytishchi', type: 'village' },
  { name: 'Жостово', city: 'mytishchi', type: 'village' },
  { name: 'Здравница', city: 'mytishchi', type: 'village' },
  { name: 'Зимино', city: 'mytishchi', type: 'village' },
  { name: 'Капустино', city: 'mytishchi', type: 'village' },
  { name: 'Кардо-Лента', city: 'mytishchi', type: 'village' },
  { name: 'Коргашино', city: 'mytishchi', type: 'village' },
  { name: 'Красная Горка', city: 'mytishchi', type: 'village' },
  { name: 'Крюково', city: 'mytishchi', type: 'village' },
  { name: 'Ларёво', city: 'mytishchi', type: 'village' },
  { name: 'Леспаркхоза Клязьминский', city: 'mytishchi', type: 'village' },
  { name: 'Лётчик-Испытатель', city: 'mytishchi', type: 'village' },
  { name: 'Лысково', city: 'mytishchi', type: 'village' },
  { name: 'Малое Ивановское', city: 'mytishchi', type: 'village' },
  { name: 'Манюхино', city: 'mytishchi', type: 'village' },
  { name: 'Марфино', city: 'mytishchi', type: 'village' },
  { name: 'Мебельной фабрики', city: 'mytishchi', type: 'village' },
  { name: 'Менжинец', city: 'mytishchi', type: 'village' },
  { name: 'Муракино', city: 'mytishchi', type: 'village' },
  { name: 'Мытищи', city: 'mytishchi', type: 'village' },
  { name: 'Николо-Прозорово', city: 'mytishchi', type: 'village' },
  { name: 'Никульское', city: 'mytishchi', type: 'village' },
  { name: 'Новоалександрово', city: 'mytishchi', type: 'village' },
  { name: 'Новогрязново', city: 'mytishchi', type: 'village' },
  { name: 'Новосельцево', city: 'mytishchi', type: 'village' },
  { name: 'Осташково', city: 'mytishchi', type: 'village' },
  { name: 'Пестово', city: 'mytishchi', type: 'village' },
  { name: 'Пирогово', city: 'mytishchi', type: 'village' },
  { name: 'Пироговского лесопарка', city: 'mytishchi', type: 'village' },
  { name: 'Погорелки', city: 'mytishchi', type: 'village' },
  { name: 'Подольниха', city: 'mytishchi', type: 'village' },
  { name: 'Подрезово', city: 'mytishchi', type: 'village' },
  { name: 'Покровская Гора', city: 'mytishchi', type: 'village' },
  { name: 'Поседкино', city: 'mytishchi', type: 'village' },
  { name: 'Протасово', city: 'mytishchi', type: 'village' },
  { name: 'Пруссы', city: 'mytishchi', type: 'village' },
  { name: 'Птицефабрики', city: 'mytishchi', type: 'village' },
  { name: 'Пчёлка', city: 'mytishchi', type: 'village' },
  { name: 'Рождественно', city: 'mytishchi', type: 'village' },
  { name: 'Румянцево', city: 'mytishchi', type: 'village' },
  { name: 'Свиноедово', city: 'mytishchi', type: 'village' },
  { name: 'Сгонники', city: 'mytishchi', type: 'village' },
  { name: 'Семенищево', city: 'mytishchi', type: 'village' },
  { name: 'Семкино', city: 'mytishchi', type: 'village' },
  { name: 'Сорокино', city: 'mytishchi', type: 'village' },
  { name: 'Совхоза «Марфино»', city: 'mytishchi', type: 'village' },
  { name: 'Степаньково', city: 'mytishchi', type: 'village' },
  { name: 'Сумароково', city: 'mytishchi', type: 'village' },
  { name: 'Сухарево', city: 'mytishchi', type: 'village' },
  { name: 'Терпигорьево', city: 'mytishchi', type: 'village' },
  { name: 'Торфоболото', city: 'mytishchi', type: 'village' },
  { name: 'Троице-Сельцо', city: 'mytishchi', type: 'village' },
  { name: 'Троицкое', city: 'mytishchi', type: 'village' },
  { name: 'Трудовая', city: 'mytishchi', type: 'village' },
  { name: 'Туристический Пансионат «Клязьминское водохранилище»', city: 'mytishchi', type: 'village' },
  { name: 'Ульянково', city: 'mytishchi', type: 'village' },
  { name: 'Федоскино', city: 'mytishchi', type: 'village' },
  { name: 'Фелисово', city: 'mytishchi', type: 'village' },
  { name: 'Фоминское', city: 'mytishchi', type: 'village' },
  { name: 'Хлябово', city: 'mytishchi', type: 'village' },
  { name: 'Ховрино', city: 'mytishchi', type: 'village' },
  { name: 'Челобитьево', city: 'mytishchi', type: 'village' },
  { name: 'Чиверёво', city: 'mytishchi', type: 'village' },
  { name: 'Шолохово', city: 'mytishchi', type: 'village' },
  { name: 'Юдино', city: 'mytishchi', type: 'village' },
  { name: 'Юрьево', city: 'mytishchi', type: 'village' },
  
  // Люберцы
  { name: 'Котельники', city: 'lyubertsy', type: 'settlement' },
  { name: 'Дзержинский', city: 'lyubertsy', type: 'settlement' },
  { name: 'Малаховка', city: 'lyubertsy', type: 'settlement' },
  { name: 'Красково', city: 'lyubertsy', type: 'settlement' },
  { name: 'Октябрьский', city: 'lyubertsy', type: 'settlement' },
  { name: 'Томилино', city: 'lyubertsy', type: 'settlement' },
  { name: 'Некрасовка', city: 'lyubertsy', type: 'settlement' },
  { name: 'Салтыковка', city: 'lyubertsy', type: 'settlement' },
  
  // Домодедово
  { name: 'Барыбино', city: 'domodedovo', type: 'settlement' },
  { name: 'Белые Столбы', city: 'domodedovo', type: 'settlement' },
  { name: 'Вельяминово', city: 'domodedovo', type: 'village' },
  { name: 'Растуново', city: 'domodedovo', type: 'village' },
  { name: 'Востряково', city: 'domodedovo', type: 'village' },
  
  // Щёлково
  { name: 'Фряново', city: 'shchelkovo', type: 'settlement' },
  { name: 'Монино', city: 'shchelkovo', type: 'settlement' },
  { name: 'Свердловский', city: 'shchelkovo', type: 'settlement' },
  { name: 'Загорянский', city: 'shchelkovo', type: 'settlement' },
  { name: 'Чкаловский', city: 'shchelkovo', type: 'settlement' },
  { name: 'Медвежьи Озёра', city: 'shchelkovo', type: 'settlement' },
  
  // Жуковский
  { name: 'Отдых', city: 'zhukovsky', type: 'settlement' },
  { name: 'Быково', city: 'zhukovsky', type: 'settlement' },
  { name: 'Кратово', city: 'zhukovsky', type: 'settlement' },
  { name: 'Планерная', city: 'zhukovsky', type: 'settlement' },
  { name: 'Полёт', city: 'zhukovsky', type: 'settlement' },
  
  // Королёв
  { name: 'Болшево', city: 'korolev', type: 'settlement' },
  { name: 'Текстильщик', city: 'korolev', type: 'settlement' },
  { name: 'Первомайский', city: 'korolev', type: 'settlement' },
  { name: 'Торфопредприятие', city: 'korolev', type: 'settlement' },
  
  // Балашиха
  { name: 'Железнодорожный', city: 'balashikha', type: 'settlement' },
  { name: 'Новый Свет', city: 'balashikha', type: 'settlement' },
  { name: 'Павлино', city: 'balashikha', type: 'settlement' },
  { name: 'Саввино', city: 'balashikha', type: 'village' },
  
  // Коломна
  { name: 'Черкизово', city: 'kolomna', type: 'settlement' },
  { name: 'Проводник', city: 'kolomna', type: 'settlement' },
  { name: 'Радужный', city: 'kolomna', type: 'settlement' },
  { name: 'Щурово', city: 'kolomna', type: 'settlement' },
  { name: 'Песчаное', city: 'kolomna', type: 'village' },
  
  // Зарайск
  { name: 'Алферово', city: 'zaraysk', type: 'village' },
  { name: 'Гололобово', city: 'zaraysk', type: 'village' },
  { name: 'Каменка', city: 'zaraysk', type: 'village' },
  { name: 'Мендюкино', city: 'zaraysk', type: 'village' },
  
  // Луховицы
  { name: 'Белоомут', city: 'lukhovitsy', type: 'settlement' },
  { name: 'Газопровод', city: 'lukhovitsy', type: 'settlement' },
  { name: 'Астапово', city: 'lukhovitsy', type: 'village' },
  { name: 'Дединово', city: 'lukhovitsy', type: 'village' },
  
  // Одинцово
  { name: 'Заречье', city: 'odintsovo', type: 'settlement' },
  { name: 'Новоивановское', city: 'odintsovo', type: 'settlement' },
  { name: 'Лесной городок', city: 'odintsovo', type: 'settlement' },
  { name: 'Барвиха', city: 'odintsovo', type: 'village' },
  { name: 'Жуковка', city: 'odintsovo', type: 'village' },
  
  // Раменское
  { name: 'Бронницы', city: 'ramenskoye', type: 'settlement' },
  { name: 'Удельная', city: 'ramenskoye', type: 'settlement' },
  { name: 'Чулково', city: 'ramenskoye', type: 'village' },
  { name: 'Ново-Харитоново', city: 'ramenskoye', type: 'village' },
  
  // Орехово-Зуево
  { name: 'Ликино-Дулёво', city: 'orekhovo-zuevo', type: 'settlement' },
  { name: 'Дрезна', city: 'orekhovo-zuevo', type: 'settlement' },
  { name: 'Куровское', city: 'orekhovo-zuevo', type: 'settlement' },
  
  // Электросталь
  { name: 'Ногинск', city: 'elektrostal', type: 'settlement' },
  { name: 'Павловский Посад', city: 'elektrostal', type: 'settlement' },
  { name: 'Старая Купавна', city: 'elektrostal', type: 'settlement' },
  
  // Серпухов
  { name: 'Пролетарский', city: 'serpukhov', type: 'settlement' },
  { name: 'Большевик', city: 'serpukhov', type: 'settlement' },
  { name: 'Заокский', city: 'serpukhov', type: 'settlement' },
  { name: 'Дракино', city: 'serpukhov', type: 'village' },
  
  // Клин
  { name: 'Высоковск', city: 'klin', type: 'settlement' },
  { name: 'Решетниково', city: 'klin', type: 'settlement' },
  { name: 'Шевляково', city: 'klin', type: 'settlement' },
  { name: 'Спас-Заулок', city: 'klin', type: 'village' },
  
  // Егорьевск
  { name: 'Саввино', city: 'egoryevsk', type: 'village' },
  { name: 'Рязановка', city: 'egoryevsk', type: 'village' },
  { name: 'Высокое', city: 'egoryevsk', type: 'village' },
  { name: 'Починки', city: 'egoryevsk', type: 'village' },
  
  // Ступино
  { name: 'Жилёво', city: 'stupino', type: 'village' },
  { name: 'Михнево', city: 'stupino', type: 'settlement' },
  { name: 'Малино', city: 'stupino', type: 'village' },
  
  // Воскресенск
  { name: 'Белоозёрский', city: 'voskresensk', type: 'settlement' },
  { name: 'Хорлово', city: 'voskresensk', type: 'settlement' },
  { name: 'Фосфоритный', city: 'voskresensk', type: 'settlement' },
];