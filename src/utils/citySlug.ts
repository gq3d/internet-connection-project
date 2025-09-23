export const generateCitySlug = (cityName: string): string => {
  return cityName
    .toLowerCase()
    .replace(/ё/g, 'e')
    .replace(/[^a-zA-Z0-9\u0430-\u044f]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
};