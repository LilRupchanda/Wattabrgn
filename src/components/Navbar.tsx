import { Search, ShoppingBag, MessageCircle, User, Menu } from 'lucide-react';
import { useState } from 'react';
import logoImage from '../assets/wattabrgn-logo.png';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-4 border-black">
      <div className="px-4 py-3 md:px-6">
        <div className="flex items-center justify-between gap-4">
          {/* Logo - Wide, stretched treatment */}
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <a href="/" className="flex-shrink-0">
              <img 
                src={logoImage} 
                alt="Watta Brgn!" 
                className="h-12 md:h-16 w-auto object-cover object-left"
                style={{ maxWidth: '200px', objectPosition: '0% 50%' }}
              />
            </a>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl">
            <div className={`flex items-center w-full border-2 ${searchFocused ? 'border-red-600' : 'border-black'} transition-colors`}>
              <Search className={`w-5 h-5 ml-3 ${searchFocused ? 'text-red-600' : 'text-black'}`} />
              <input
                type="text"
                placeholder="Search for anything..."
                className="w-full px-3 py-2 outline-none"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4 md:gap-6">
            <button className="md:hidden">
              <Search className="w-6 h-6" />
            </button>
            <button className="relative">
              <ShoppingBag className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                3
              </span>
            </button>
            <button className="hidden md:block">
              <MessageCircle className="w-6 h-6" />
            </button>
            <button className="hidden md:block">
              <User className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Search Bar - Mobile */}
        <div className="md:hidden mt-3">
          <div className={`flex items-center w-full border-2 ${searchFocused ? 'border-red-600' : 'border-black'} transition-colors`}>
            <Search className={`w-5 h-5 ml-3 ${searchFocused ? 'text-red-600' : 'text-black'}`} />
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-2 outline-none"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t-2 border-black bg-white">
          <div className="flex flex-col p-4 gap-4">
            <a href="#" className="flex items-center gap-3 py-2">
              <MessageCircle className="w-5 h-5" />
              <span>Messages</span>
            </a>
            <a href="#" className="flex items-center gap-3 py-2">
              <User className="w-5 h-5" />
              <span>Profile</span>
            </a>
            <button className="bg-red-600 text-white px-6 py-3 border-2 border-black hover:bg-black hover:text-white transition-colors">
              START SELLING
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
