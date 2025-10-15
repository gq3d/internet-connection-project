import CountriesEuropeNorth from './countries/CountriesEuropeNorth';
import CountriesAmericas from './countries/CountriesAmericas';
import CountriesAsiaPacific from './countries/CountriesAsiaPacific';
import CountriesAfrica from './countries/CountriesAfrica';

export default function CountryList() {
  return (
    <div className="space-y-3 text-sm leading-relaxed">
      <CountriesEuropeNorth />
      <CountriesAmericas />
      <CountriesAsiaPacific />
      <CountriesAfrica />
    </div>
  );
}
