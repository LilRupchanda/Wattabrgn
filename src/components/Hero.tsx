export function Hero() {
  return (
    <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
      {/* Hero Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1756276884456-b8b65af476fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwZmFzaGlvbiUyMHlvdXRofGVufDF8fHx8MTc2NTM1ODg0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
        }}
      >
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
        {/* Bold Headline */}
        <h1 className="text-white text-5xl md:text-7xl lg:text-8xl mb-6 md:mb-8 max-w-5xl" style={{ fontFamily: 'Geist Mono, monospace' }}>
          YOUR NEXT ICONIC OUTFIT IS ONE <span className="text-[#E31E24]" style={{ fontWeight: 600 }}>BRGN</span> AWAY
        </h1>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-red-600 text-white px-8 md:px-12 py-4 border-4 border-white hover:bg-white hover:text-black hover:border-black transition-all transform hover:scale-105">
            SHOP NOW
          </button>
          <button className="bg-white text-black px-8 md:px-12 py-4 border-4 border-white hover:bg-black hover:text-white transition-all transform hover:scale-105">
            START SELLING
          </button>
        </div>

        {/* Bottom racing checkered pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-8 md:h-12" style={{
          backgroundImage: `repeating-conic-gradient(#E31E24 0% 25%, #FFFFFF 0% 50%) 50% / 40px 40px`,
          backgroundPosition: '0 0, 20px 20px'
        }}></div>
      </div>
    </section>
  );
}