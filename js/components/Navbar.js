// =========================================================
// Navbar Component — vmccc.films (Updated with Logo & 8341667106)
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
      
      {/* Top Slot Booking Notification Bar */}
      <div className="bg-gradient-to-r from-[#3B0002] via-[#700104] to-[#2B0002] text-xs text-[#F3E5C8] border-b border-[#E2BA65]/20 py-2 px-4 text-center flex flex-wrap items-center justify-center gap-3">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-[#B51B2B] text-white animate-pulse">
            SLOT BOOKING
          </span>
          <span className="font-medium">Direct Hotline:</span>
          <a 
            href="tel:8341667106" 
            className="font-bold text-white hover:text-[#E2BA65] transition-colors underline decoration-[#E2BA65]/60 flex items-center gap-1"
          >
            📞 8341667106
          </a>
        </div>
        <span className="text-white/40 hidden sm:inline">•</span>
        <span className="hidden md:inline text-white/90">
          ⚡ 10-Min On-Site Delivery • SHOOT • EDIT • DELIVER
        </span>
        <a 
          href={brand.whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-600/80 hover:bg-emerald-600 text-white transition-colors ml-1 flex items-center gap-1 shadow-sm"
        >
          <span>Chat on WhatsApp</span>
        </a>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`px-4 sm:px-8 py-3 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0B0708]/95 backdrop-blur-xl border-b border-[#E2BA65]/15 shadow-2xl' 
          : 'bg-[#0B0708]/70 backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand Logo with Image */}
          <a href="#" className="flex items-center gap-3 group">
            {/* White/Gold Pill Logo Container to showcase the official camera logo */}
            <div className="h-11 px-2.5 py-1 rounded-xl bg-white/95 border border-[#E2BA65]/40 flex items-center justify-center shadow-[0_0_20px_rgba(112,1,4,0.4)] group-hover:scale-105 transition-transform">
              <img 
                src="assets/logo.png" 
                alt="vmccc.films logo" 
                className="h-9 w-auto object-contain"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-heading font-extrabold text-lg tracking-tight text-white group-hover:text-[#E2BA65] transition-colors">
                VMCCC<span className="text-[#A31526]">.FILMS</span>
              </span>
              <span className="text-[8.5px] font-bold tracking-[0.2em] text-[#E2BA65] uppercase -mt-0.5">
                MAKE YOUR MOMENTS LOOK LIKE A MOVIE
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-7 text-xs font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="hover:text-[#E2BA65] transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E2BA65] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Instagram QR Code Button */}
            <button
              onClick={onOpenQrModal}
              className="text-xs font-semibold px-3 py-2 rounded-full border border-[#E2BA65]/30 text-[#F3E5C8] hover:text-white hover:border-[#E2BA65] hover:bg-[#E2BA65]/10 transition-all flex items-center gap-1.5"
              title="Scan Instagram QR Code"
            >
              <span>📱</span>
              <span>@vmccc.films_</span>
            </button>

            {/* Direct Call Button */}
            <a
              href="tel:8341667106"
              className="text-xs font-bold px-3.5 py-2 rounded-full border border-red-500/30 text-white bg-red-950/40 hover:bg-red-900/60 transition-all flex items-center gap-1.5"
            >
              <span>📞</span>
              <span>8341667106</span>
            </a>

            {/* Primary Book Slot Button */}
            <button
              onClick={onBookClick}
              className="btn-primary text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full flex items-center gap-2"
            >
              <span>Book Slot</span>
              <span>→</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:8341667106"
              className="btn-primary text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 sm:hidden"
            >
              <span>📞 Call</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-white/5 transition-colors"
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

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-[#E2BA65]/15 glass-panel rounded-2xl p-4 shadow-2xl animate-fadeIn">
            <div className="flex flex-col gap-2.5 text-sm font-medium text-neutral-300">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-[#E2BA65] transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-[#E2BA65]">→</span>
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2">
                <a
                  href="tel:8341667106"
                  className="w-full text-center text-xs font-bold py-2.5 rounded-xl border border-red-500/40 bg-red-950/40 text-white flex items-center justify-center gap-2"
                >
                  <span>📞 Call Slot Booking: 8341667106</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQrModal();
                  }}
                  className="w-full text-center text-xs font-semibold py-2.5 rounded-xl border border-[#E2BA65]/30 text-[#F3E5C8]"
                >
                  Scan Instagram QR Code (@vmccc.films_)
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookClick();
                  }}
                  className="w-full btn-primary text-xs font-bold uppercase tracking-wider py-3 rounded-xl flex items-center justify-center gap-2"
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
