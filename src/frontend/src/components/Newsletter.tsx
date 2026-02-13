import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 rounded-3xl p-8 md:p-12 border-2 border-primary/20">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Exclusive Fashion & Beauty Drops
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Subscribe to receive the latest fashion and beauty deals, style edits, and trend alerts delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-12 rounded-full px-6 transition-all duration-200 focus:ring-2 focus:ring-primary"
            />
            <Button size="lg" className="rounded-full px-8 glow-button transition-all duration-200 hover:scale-105">
              Subscribe
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
