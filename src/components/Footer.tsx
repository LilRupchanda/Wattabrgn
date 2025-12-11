import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white border-t-4 border-red-600">
      <div className="px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-7xl mx-auto">
          {/* Brand */}
          <div>
            <h3 className="text-white mb-4 tracking-[0.3em]" style={{ fontStretch: 'ultra-expanded' }}>
              WATTABRGN
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              The social shopping app for unique fashion.
            </p>
            <p className="text-xs text-gray-500">
              Making fashion circular. One item at a time.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-white mb-4">SHOP</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-red-600 transition-colors">Vintage</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Y2K</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Streetwear</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Designer</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Sneakers</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-white mb-4">ABOUT</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-red-600 transition-colors">How it works</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Seller protection</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white mb-4">STAY UPDATED</h4>
            <p className="text-sm text-gray-400 mb-4">
              Get the latest drops in your inbox.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Email address"
                className="px-4 py-2 bg-white text-black border-2 border-white outline-none focus:border-red-600"
              />
              <button className="bg-red-600 text-white px-6 py-2 border-2 border-red-600 hover:bg-white hover:text-black hover:border-white transition-all">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-12 pt-8 border-t-2 border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-7xl mx-auto">
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-red-600 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-red-600 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-red-600 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-red-600 transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
            <div className="flex items-center gap-6 text-xs text-gray-500">
              <a href="#" className="hover:text-red-600 transition-colors">Privacy</a>
              <a href="#" className="hover:text-red-600 transition-colors">Terms</a>
              <a href="#" className="hover:text-red-600 transition-colors">Help</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-600">
            © 2025 DEPOP. ALL RIGHTS RESERVED. BE YOURSELF.
          </p>
        </div>
      </div>
    </footer>
  );
}