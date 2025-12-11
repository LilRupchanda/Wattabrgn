import { categories } from '../data/mockData';
import { useState } from 'react';

export function CategoryNav() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="sticky top-[72px] md:top-[68px] z-40 bg-white border-b-2 border-black py-3 overflow-hidden">
      <div className="px-4 md:px-6">
        {/* Horizontal scrolling categories */}
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <button
            onClick={() => setSelectedCategory(null)}
            className={`flex-shrink-0 px-6 py-2 border-2 border-black transition-all ${
              selectedCategory === null
                ? 'bg-red-600 text-white'
                : 'bg-white text-black hover:bg-black hover:text-white'
            }`}
          >
            ALL
          </button>
          {categories.map((category) => (
            <button
              key={category.slug}
              onClick={() => setSelectedCategory(category.slug)}
              className={`flex-shrink-0 px-6 py-2 border-2 border-black transition-all whitespace-nowrap ${
                selectedCategory === category.slug
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-black hover:bg-black hover:text-white'
              }`}
            >
              {category.name.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
