import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, ExternalLink, AlertCircle } from 'lucide-react';

const trendingItems = [
  {
    id: 1,
    title: 'Classic White Sneakers',
    category: 'Footwear',
    price: '$79.99',
    originalPrice: '$99.99',
    rating: 4.8,
    reviews: 2847,
    badge: 'Best Seller',
    image: '/assets/generated/fashion-product-sneakers.dim_800x800.png',
    alt: 'Classic white leather sneakers with minimalist design',
  },
  {
    id: 2,
    title: 'Vintage Denim Jacket',
    category: 'Outerwear',
    price: '$89.99',
    originalPrice: '$129.99',
    rating: 4.9,
    reviews: 5234,
    badge: 'Top Rated',
    image: '/assets/generated/fashion-product-denim-jacket.dim_800x800.png',
    alt: 'Vintage-style denim jacket with distressed finish',
  },
  {
    id: 3,
    title: 'Luxury Lipstick Set',
    category: 'Makeup',
    price: '$49.99',
    originalPrice: '$69.99',
    rating: 4.9,
    reviews: 3421,
    badge: 'Hot Deal',
    image: '/assets/generated/makeup-product-lipstick.dim_800x800.png',
    alt: 'Premium lipstick collection with various shades',
  },
  {
    id: 4,
    title: 'Flawless Foundation',
    category: 'Makeup',
    price: '$39.99',
    originalPrice: '$54.99',
    rating: 4.8,
    reviews: 2876,
    badge: 'Popular',
    image: '/assets/generated/makeup-product-foundation.dim_800x800.png',
    alt: 'High-coverage foundation for all skin types',
  },
  {
    id: 5,
    title: 'Designer Sunglasses',
    category: 'Accessories',
    price: '$59.99',
    originalPrice: '$89.99',
    rating: 4.6,
    reviews: 2134,
    badge: 'Trending',
    image: '/assets/generated/fashion-product-sunglasses.dim_800x800.png',
    alt: 'Stylish designer sunglasses on sunlit surface',
  },
  {
    id: 6,
    title: 'Luxury Wristwatch',
    category: 'Accessories',
    price: '$199.99',
    originalPrice: '$299.99',
    rating: 4.9,
    reviews: 4567,
    badge: 'New',
    image: '/assets/generated/fashion-product-watch.dim_800x800.png',
    alt: 'Elegant wristwatch on marble surface',
  },
];

export default function TrendingSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trending Fashion & Beauty Picks
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the most popular fashion and beauty items loved by style enthusiasts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trendingItems.map((item) => (
            <Card
              key={item.id}
              className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-200 hover:shadow-2xl"
            >
              <div className="relative aspect-square overflow-hidden bg-muted/30">
                <img 
                  src={item.image} 
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 rounded-full bg-primary text-primary-foreground">
                  {item.badge}
                </Badge>
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full">
                  <AlertCircle className="h-3 w-3 text-destructive" />
                  <span className="text-xs font-semibold text-destructive">Limited Stock!</span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1 ml-auto">
                    <Star className="h-4 w-4 fill-pink-400 text-pink-400" />
                    <span className="text-sm font-semibold">{item.rating}</span>
                    <span className="text-xs text-muted-foreground">({item.reviews})</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-bold text-primary">
                    {item.price}
                  </span>
                  <span className="text-sm text-muted-foreground line-through">
                    {item.originalPrice}
                  </span>
                </div>
                <Button 
                  className="w-full rounded-full glow-button group/btn transition-all duration-200 hover:scale-105"
                >
                  View on Amazon
                  <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
