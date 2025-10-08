import { getCitySEOGroup1 } from './seo/CitySEOGroup1';
import { getCitySEOGroup2 } from './seo/CitySEOGroup2';
import { getCitySEOGroup3 } from './seo/CitySEOGroup3';
import { getCitySEOGroup4 } from './seo/CitySEOGroup4';

interface CitySEOTextProps {
  cityName: string;
}

const CitySEOText = ({ cityName }: CitySEOTextProps) => {
  const getSEOContent = () => {
    return (
      getCitySEOGroup1(cityName) ||
      getCitySEOGroup2(cityName) ||
      getCitySEOGroup3(cityName) ||
      getCitySEOGroup4(cityName) ||
      null
    );
  };

  const seoContent = getSEOContent();

  if (!seoContent) {
    return null;
  }

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">{seoContent.title}</h2>
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: seoContent.content }}
          />
        </div>
      </div>
    </section>
  );
};

export default CitySEOText;
