import { Sparkles, Search, Heart, ShoppingBag, Menu, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useTheme } from '../hooks/useTheme';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="text-2xl font-bold tracking-tight text-foreground">
            fasionbeautyhub
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-150">
            Streetwear
          </a>
          <a href="#" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-150">
            Dresses
          </a>
          <a href="#" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-150">
            Makeup
          </a>
          <a href="#" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-150">
            Best Sellers
          </a>
          <a href="#" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-150">
            Deals
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="icon" 
            className="hidden md:flex transition-all duration-150"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:flex transition-all duration-150">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:flex transition-all duration-150">
            <Heart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:flex transition-all duration-150">
            <ShoppingBag className="h-5 w-5" />
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-6 mt-8">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <span className="text-xl font-bold">fasionbeautyhub</span>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={toggleTheme}
                >
                  {theme === 'dark' ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />}
                  {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </Button>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search..." className="pl-9" />
                </div>
                <nav className="flex flex-col gap-4">
                  <a href="#" className="text-base font-medium hover:text-primary transition-colors duration-150">
                    Streetwear
                  </a>
                  <a href="#" className="text-base font-medium hover:text-primary transition-colors duration-150">
                    Dresses
                  </a>
                  <a href="#" className="text-base font-medium hover:text-primary transition-colors duration-150">
                    Makeup
                  </a>
                  <a href="#" className="text-base font-medium hover:text-primary transition-colors duration-150">
                    Best Sellers
                  </a>
                  <a href="#" className="text-base font-medium hover:text-primary transition-colors duration-150">
                    Deals
                  </a>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
