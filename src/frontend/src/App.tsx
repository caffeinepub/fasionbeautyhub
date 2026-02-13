import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import TrendingSection from './components/TrendingSection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    document.title = 'fasionbeautyhub - Trending Fashion & Beauty Deals';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Categories />
        <TrendingSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
