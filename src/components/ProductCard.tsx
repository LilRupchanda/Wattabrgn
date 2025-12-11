import { Heart, ShoppingBag } from 'lucide-react';
import { Product } from '../types';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(product.isLiked);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-100 border-2 border-black">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Condition Badge */}
        <div className="absolute top-2 left-2">
          <span className="bg-white text-black px-2 py-1 text-xs border border-black">
            {product.condition.toUpperCase()}
          </span>
        </div>

        {/* Quick Actions - Show on hover (desktop) or always (mobile) */}
        <div className={`absolute top-2 right-2 flex gap-2 transition-opacity ${isHovered ? 'opacity-100' : 'opacity-0 md:opacity-0'} md:group-hover:opacity-100`}>
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`p-2 border-2 border-black transition-colors ${
              isLiked 
                ? 'bg-red-600 text-white' 
                : 'bg-white text-black hover:bg-red-600 hover:text-white'
            }`}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
          </button>
          <button className="bg-black text-white p-2 border-2 border-black hover:bg-red-600 transition-colors">
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>

        {/* Seller Avatar - Overlaid on image */}
        <div className="absolute bottom-2 left-2">
          <div className="flex items-center gap-2 bg-white border-2 border-black px-2 py-1">
            <span className="text-sm">{product.seller.avatar}</span>
            <span className="text-xs max-w-[100px] truncate">
              {product.seller.username}
            </span>
            {product.seller.verified && (
              <span className="text-red-600 text-xs">✓</span>
            )}
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-2 space-y-1">
        <h3 className="text-sm line-clamp-2 min-h-[2.5rem]">
          {product.title}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-red-600">${product.price}</span>
          {product.size && (
            <span className="text-xs text-gray-600 border border-gray-300 px-2 py-0.5">
              {product.size}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <Heart className="w-3 h-3" />
          <span>{product.likes}</span>
        </div>
      </div>
    </div>
  );
}
