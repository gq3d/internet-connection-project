import { getCitySEOGroup2a } from './CitySEOGroup2a';
import { getCitySEOGroup2b } from './CitySEOGroup2b';
import { getCitySEOGroup2c } from './CitySEOGroup2c';

interface CitySEOContent {
  title: string;
  content: string;
}

export const getCitySEOGroup2 = (cityName: string): CitySEOContent | null => {
  return (
    getCitySEOGroup2a(cityName) ||
    getCitySEOGroup2b(cityName) ||
    getCitySEOGroup2c(cityName) ||
    null
  );
};
