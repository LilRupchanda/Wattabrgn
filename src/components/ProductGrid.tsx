import { ProductCard } from './ProductCard';
import { products } from '../data/mockData';

export function ProductGrid() {
  return (
    <section className="px-4 md:px-6 py-8 md:py-12">
      {/* Section Header */}
      <div className="mb-6 md:mb-8">
        <h2 className="mb-2">EXPLORE</h2>
        <div className="h-1 w-24 bg-red-600"></div>
      </div>

      {/* Grid Layout - Instagram style */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-8 md:mt-12">
        <button className="bg-black text-white px-12 py-4 border-4 border-black hover:bg-white hover:text-black transition-all">
          LOAD MORE
        </button>
      </div>
    </section>
  );
}
