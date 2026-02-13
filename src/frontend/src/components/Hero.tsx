import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-background">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 dark:opacity-10"
        style={{ backgroundImage: 'url(/assets/generated/makeup-hero-background.dim_1600x900.png)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      
      <div className="container relative py-20 md:py-28 lg:py-36">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary animate-in fade-in slide-in-from-bottom-3 duration-500">
            <Zap className="h-4 w-4" />
            Trending Fashion & Beauty 2026
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Elevate Your Style
            <span className="block mt-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              With Fashion & Beauty Essentials
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-5 duration-900">
            Discover the hottest fashion trends and beauty must-haves that define your unique style. Curated from Amazon's top-rated fashion and makeup brands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-6 duration-1000">
            <Button size="lg" className="text-base px-8 rounded-full glow-button group transition-all duration-200 hover:scale-105">
              Shop Best Deals
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 rounded-full transition-all duration-200 hover:scale-105">
              Browse Collections
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative gradient blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  );
}
