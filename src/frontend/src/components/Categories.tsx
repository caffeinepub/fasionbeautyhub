import { Card, CardContent } from '@/components/ui/card';
import { Shirt, Sparkles, Watch, ShoppingBag, Palette } from 'lucide-react';

const categories = [
  {
    icon: Shirt,
    title: 'Streetwear',
    description: 'Urban fashion and casual styles',
    color: 'text-pink-500',
    bgColor: 'bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950/30 dark:to-pink-900/20',
  },
  {
    icon: Sparkles,
    title: 'Dresses',
    description: 'Elegant and casual dress styles',
    color: 'text-pink-400',
    bgColor: 'bg-gradient-to-br from-pink-100 to-pink-200 dark:from-pink-900/30 dark:to-pink-800/20',
  },
  {
    icon: Palette,
    title: 'Makeup',
    description: 'Beauty essentials and cosmetics',
    color: 'text-pink-600',
    bgColor: 'bg-gradient-to-br from-pink-50 to-rose-100 dark:from-pink-950/30 dark:to-rose-900/20',
  },
  {
    icon: Watch,
    title: 'Accessories',
    description: 'Complete your look with style',
    color: 'text-rose-500',
    bgColor: 'bg-gradient-to-br from-rose-50 to-rose-100 dark:from-rose-950/30 dark:to-rose-900/20',
  },
  {
    icon: ShoppingBag,
    title: 'Shoes & Bags',
    description: 'Step out in style and comfort',
    color: 'text-pink-500',
    bgColor: 'bg-gradient-to-br from-pink-100 to-pink-50 dark:from-pink-900/30 dark:to-pink-950/20',
  },
];

export default function Categories() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find the perfect fashion and beauty pieces to express your unique style
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.title}
                className="group cursor-pointer border-2 hover:border-primary/50 transition-all duration-200 hover:shadow-xl hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${category.bgColor} mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className={`h-8 w-8 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
