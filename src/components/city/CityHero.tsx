import Icon from '@/components/ui/icon';

interface CityHeroProps {
  cityName: string;
  district?: string;
}

export default function CityHero({ cityName, district }: CityHeroProps) {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {district && (
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Icon name="MapPin" size={16} className="text-primary mr-2" />
              <span className="text-sm font-medium text-primary">{district}</span>
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Беспроводной интернет в {cityName}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Подключение качественного беспроводного интернета для дач, коттеджных поселков, СНТ и частных домов в {cityName}. 
            Профессиональная установка оборудования с выездом инженера на объект.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="tel:+79015000078"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center space-x-2"
            >
              <Icon name="Phone" size={20} />
              <span>Вызвать инженера</span>
            </a>
            <a
              href="/#tariffs"
              className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors"
            >
              Посмотреть тарифы
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}