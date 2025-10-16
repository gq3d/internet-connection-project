export interface City {
  name: string;
  slug: string;
  region: string;
}

export const cities: City[] = [
  { name: 'Озёры', slug: 'ozery', region: 'Московская область' },
  { name: 'Москва', slug: 'moscow', region: 'Москва' },
  { name: 'Коломна', slug: 'kolomna', region: 'Московская область' },
  { name: 'Зарайск', slug: 'zaraysk', region: 'Московская область' },
  { name: 'Луховицы', slug: 'lukhovitsy', region: 'Московская область' },
  { name: 'Рязань', slug: 'ryazan', region: 'Рязанская область' },
];
