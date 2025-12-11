import { products } from '../data/mockData';
import { TrendingUp } from 'lucide-react';

export function TrendingSection() {
  // Get top trending items (highest likes)
  const trendingItems = [...products]
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 4);

  return (
    <section className="bg-black text-white px-4 md:px-6 py-12 md:py-16">
      {/* Section Header */}
      <div className="mb-8 md:mb-12 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <TrendingUp className="w-8 h-8 md:w-12 md:h-12 text-red-600" />
          <h2 className="text-white">TRENDING NOW</h2>
        </div>
        <p className="text-gray-300 max-w-2xl mx-auto">
          The hottest picks from the community. Don{"'"}t sleep on these.
        </p>
      </div>

      {/* Featured Grid - Mixed Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
        {trendingItems.map((item, index) => (
          <div 
            key={item.id}
            className={`relative group cursor-pointer ${index === 0 ? 'md:col-span-2' : ''}`}
          >
            {/* Image Container */}
            <div className={`relative overflow-hidden ${index === 0 ? 'aspect-[16/9]' : 'aspect-square'}`}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              {/* Trending Label */}
              <div className="absolute top-4 left-4">
                <span className="bg-red-600 text-white px-4 py-2 border-2 border-white flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-xs">#{index + 1} TRENDING</span>
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">{item.seller.avatar}</span>
                  <span className="text-sm text-white">{item.seller.username}</span>
                  {item.seller.verified && (
                    <span className="text-red-600">✓</span>
                  )}
                </div>
                <h3 className={`text-white mb-2 ${index === 0 ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'}`}>
                  {item.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-red-600 text-xl">${item.price}</span>
                  <span className="text-white text-sm">{item.likes} likes</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
