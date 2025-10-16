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
  { name: 'Поведники', city: 'mytishchi', type: 'village' },
  { name: 'Троицкое', city: 'mytishchi', type: 'village' },
  { name: 'Челобитьево', city: 'mytishchi', type: 'village' },
  { name: 'Вешки', city: 'mytishchi', type: 'village' },
  { name: 'Марфино', city: 'mytishchi', type: 'village' },
  
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