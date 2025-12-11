import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryNav } from './components/CategoryNav';
import { ProductGrid } from './components/ProductGrid';
import { TrendingSection } from './components/TrendingSection';
import { CommunityHighlights } from './components/CommunityHighlights';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <CategoryNav />
      <ProductGrid />
      <TrendingSection />
      <CommunityHighlights />
      <Footer />
    </div>
  );
}
