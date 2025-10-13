import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Review {
  name: string;
  date: string;
  rating: number;
  service: string;
  location: string;
  text: string;
  avatar: string;
}

interface ReviewsGridProps {
  reviews: Review[];
}

export default function ReviewsGrid({ reviews }: ReviewsGridProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-primary">{review.avatar}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-lg">{review.name}</h3>
                          <div className="text-sm text-muted-foreground">{review.location}</div>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                          ))}
                        </div>
                      </div>
                      <Badge variant="outline" className="mb-3">
                        {review.service}
                      </Badge>
                      <p className="text-muted-foreground leading-relaxed mb-3">
                        {review.text}
                      </p>
                      <div className="text-xs text-muted-foreground">
                        {review.date}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
