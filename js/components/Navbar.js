// =========================================================
// Navbar Component — VMCCC.FILMS (White & Maroon Luxury Theme)
// Instagram ID: @vmccc.films | Hotline: 8341667106
// =========================================================

function Navbar({ onBookClick, onOpenQrModal }) {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const brand = window.VMCCC_DATA.brand;

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "About Us", href: "#about" },
    { name: "Reels Showcase", href: "#showcase" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Packages", href: "#packages" },
    { name: "Cost Estimator", href: "#calculator" },
    { name: "Why Us", href: "#comparison" },
    { name: "FAQ", href: "#faq" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* Top Slot Booking Notification Bar in Deep Maroon */}
      <div className="bg-[#700104] text-xs text-white border-b border-[#520002] py-2 px-4 text-center flex flex-wrap items-center justify-center gap-3 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-white text-[#700104] animate-pulse">
            SLOT BOOKING
          </span>
          <span className="font-medium text-white/90">Direct Hotline:</span>
          <a 
            href="tel:8341667106" 
            className="font-bold text-white hover:text-[#F3E5C8] transition-colors underline decoration-white/60 flex items-center gap-1"
          >
            📞 8341667106
          </a>
        </div>
        <span className="text-white/40 hidden sm:inline">•</span>
        <span className="hidden md:inline text-white/95 font-medium">
          ⚡ 10-Min On-Site Delivery • SHOOT • EDIT • DELIVER
        </span>
        <a 
          href={brand.whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white transition-colors ml-1 flex items-center gap-1 shadow-sm"
        >
          <span>Chat on WhatsApp</span>
        </a>
      </div>

      {/* Main Navigation Bar — Clean White Glass Canvas */}
      <nav className={`px-4 sm:px-8 py-2.5 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-[#700104]/15 shadow-md' 
          : 'bg-white/90 backdrop-blur-md border-b border-neutral-200/80 shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand Logo with Image — Perfectly integrates with White background */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="h-11 flex items-center justify-center group-hover:scale-105 transition-transform">
              <img 
                src="assets/logo.png" 
                alt="VMCCC.FILMS logo" 
                className="h-10 w-auto object-contain"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-heading font-extrabold text-lg tracking-tight text-[#700104] group-hover:text-[#94101E] transition-colors">
                VMCCC<span className="text-neutral-900">.FILMS</span>
              </span>
              <span className="text-[8px] font-bold tracking-[0.2em] text-[#700104] uppercase -mt-0.5">
                MAKE YOUR MOMENTS LOOK LIKE A MOVIE
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-7 text-xs font-semibold text-neutral-700">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="hover:text-[#700104] transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#700104] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Instagram ID Button */}
            <button
              onClick={onOpenQrModal}
              className="text-xs font-semibold px-3 py-2 rounded-full border border-[#700104]/25 text-[#700104] bg-[#700104]/5 hover:bg-[#700104] hover:text-white transition-all flex items-center gap-1.5 shadow-sm"
              title="Instagram @vmccc.films"
            >
              <span>📱</span>
              <span className="font-mono font-bold">@vmccc.films</span>
            </button>

            {/* Direct Call Button */}
            <a
              href="tel:8341667106"
              className="text-xs font-bold px-3.5 py-2 rounded-full border border-[#700104]/30 text-[#700104] bg-white hover:bg-[#700104] hover:text-white transition-all flex items-center gap-1.5 shadow-sm"
            >
              <span>📞</span>
              <span>8341667106</span>
            </a>

            {/* Primary Book Slot Button */}
            <button
              onClick={onBookClick}
              className="btn-primary text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full flex items-center gap-2 shadow-md"
            >
              <span>Book Slot</span>
              <span>→</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:8341667106"
              className="btn-primary text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 sm:hidden shadow"
            >
              <span>📞 Call</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-800 hover:text-[#700104] hover:bg-neutral-100 transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu — Clean White */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-neutral-200 bg-white rounded-2xl p-4 shadow-2xl animate-fadeIn">
            <div className="flex flex-col gap-2.5 text-sm font-medium text-neutral-800">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-[#700104]/5 hover:text-[#700104] transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-[#700104]">→</span>
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-neutral-200 flex flex-col gap-2">
                <a
                  href="tel:8341667106"
                  className="w-full text-center text-xs font-bold py-2.5 rounded-xl border border-[#700104]/30 bg-[#700104]/5 text-[#700104] flex items-center justify-center gap-2"
                >
                  <span>📞 Call Slot Booking: 8341667106</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQrModal();
                  }}
                  className="w-full text-center text-xs font-semibold py-2.5 rounded-xl border border-neutral-300 text-neutral-800 hover:border-[#700104]"
                >
                  Instagram: @vmccc.films
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookClick();
                  }}
                  className="w-full btn-primary text-xs font-bold uppercase tracking-wider py-3 rounded-xl flex items-center justify-center gap-2 shadow"
                >
                  <span>Book a Slot Now</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
window.Navbar = Navbar;
