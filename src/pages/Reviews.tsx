import WhatsAppButton from '@/components/WhatsAppButton';
import { useSEO } from '@/hooks/useSEO';
import ReviewsHeader from '@/components/reviews/ReviewsHeader';
import ReviewsHero from '@/components/reviews/ReviewsHero';
import ReviewsGrid from '@/components/reviews/ReviewsGrid';
import AboutInnovation from '@/components/reviews/AboutInnovation';
import ReviewsFooter from '@/components/reviews/ReviewsFooter';
import { reviewsData } from '@/data/reviewsData';

const Reviews = () => {
  useSEO({
    title: 'Отзывы клиентов NetConnect - Реальные отзывы о подключении интернета',
    description: 'Читайте отзывы клиентов NetConnect о подключении беспроводного и спутникового интернета в Московской области. Более 1500 довольных клиентов ⭐',
    keywords: 'отзывы netconnect, отзывы об интернете, отзывы провайдер, беспроводной интернет отзывы',
    canonical: 'https://wiline.ru/reviews',
    ogTitle: 'Отзывы клиентов NetConnect',
    ogDescription: 'Реальные отзывы клиентов о подключении интернета в Московской области',
    ogImage: 'https://cdn.wiline.ru/files/0b95440d-0b84-41b8-8404-418760cb07a4.jpg'
  });

  return (
    <div className="min-h-screen bg-background">
      <ReviewsHeader />
      <ReviewsHero />
      <ReviewsGrid reviews={reviewsData} />
      <AboutInnovation />
      <ReviewsFooter />
      <WhatsAppButton />
    </div>
  );
};

export default Reviews;