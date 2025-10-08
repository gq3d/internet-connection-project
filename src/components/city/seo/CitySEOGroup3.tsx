import { getCitySEOGroup3a } from './CitySEOGroup3a';
import { getCitySEOGroup3b } from './CitySEOGroup3b';
import { getCitySEOGroup3c } from './CitySEOGroup3c';
import { getCitySEOGroup3d } from './CitySEOGroup3d';

interface CitySEOContent {
  title: string;
  content: string;
}

export const getCitySEOGroup3 = (cityName: string): CitySEOContent | null => {
  return (
    getCitySEOGroup3a(cityName) ||
    getCitySEOGroup3b(cityName) ||
    getCitySEOGroup3c(cityName) ||
    getCitySEOGroup3d(cityName) ||
    null
  );
};
