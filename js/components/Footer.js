// =========================================================
// Footer Component — vmccc.films (Updated Logo & 8341667106)
// =========================================================

function Footer({ onBookClick, onOpenQrModal }) {
  const brand = window.VMCCC_DATA.brand;
  const [email, setEmail] = React.useState("");
  const [subscribed, setSubscribed] = React.useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="relative pt-20 pb-12 border-t border-[#E2BA65]/20 bg-[#070304]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Brand Manifesto Column */}
          <div className="lg:col-span-5 space-y-5 text-left">
            
            {/* Logo Badge */}
            <div className="flex items-center gap-3">
              <div className="h-12 px-3 py-1.5 rounded-xl bg-white/95 border border-[#E2BA65]/40 flex items-center justify-center shadow-lg">
                <img 
                  src="assets/logo.png" 
                  alt="vmccc.films logo" 
                  className="h-9 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl tracking-tight text-white">
                  vmccc<span className="text-[#A31526]">.films</span>
                </span>
                <span className="text-[9px] font-bold tracking-[0.2em] text-[#E2BA65] uppercase">
                  MAKE YOUR MOMENTS LOOK LIKE A MOVIE
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-300 font-light leading-relaxed max-w-md">
              We capture and share the unique stories and moments of couples on their special day. Turning celebrations into cherished keepsakes through stunning visuals, heartfelt narratives and fun BTS.
            </p>

            {/* Slot Hotline Box */}
            <div className="p-4 rounded-2xl bg-[#700104]/30 border border-[#E2BA65]/30 flex items-center gap-3.5 max-w-sm">
              <span className="w-10 h-10 rounded-xl bg-[#700104] flex items-center justify-center text-lg shadow">
                📞
              </span>
              <div>
                <span className="text-[10px] text-[#E2BA65] font-bold uppercase tracking-wider block">Slot Booking Mobile</span>
                <a href="tel:8341667106" className="text-base font-extrabold text-white hover:text-[#E2BA65] transition-colors">
                  +91 8341667106
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-90 text-white text-xs font-bold transition-all shadow flex items-center gap-1.5"
                title="Follow @vmccc.films on Instagram"
              >
                <span>📸 @vmccc.films</span>
              </a>
              <button
                onClick={onOpenQrModal}
                className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/15 text-[#F3E5C8] text-xs font-medium border border-white/10"
              >
                Instagram QR Code
              </button>
              <a
                href={brand.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center transition-all shadow"
                title="Chat on WhatsApp"
              >
                💬
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E2BA65]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#showcase" className="hover:text-white transition-colors">Reels Showcase</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#packages" className="hover:text-white transition-colors">Wedding Packages</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">Cost Estimator</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Help & FAQ</a></li>
            </ul>
          </div>

          {/* Featured Wedding Reels Links */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E2BA65]">
              Featured Reels
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              {brand.reels && brand.reels.slice(0, 4).map((r, i) => (
                <li key={i}>
                  <a href={r.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors truncate block">
                    {r.title} ↗
                  </a>
                </li>
              ))}
              <li><a href="https://www.instagram.com/reel/DebwAFPo-nj/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Love Story Keepsake ↗</a></li>
              <li><a href="https://www.instagram.com/reel/DeedyMhoFaY/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Royal Wedding Teaser ↗</a></li>
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E2BA65]">
              Slot Hotline
            </h4>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Have questions about wedding dates or destination events? Contact our director directly:
            </p>

            <div className="text-xs space-y-1.5 text-neutral-300">
              <div>📞 <strong className="text-white">Call:</strong> 8341667106</div>
              <div>💬 <strong className="text-white">WhatsApp:</strong> +91 8341667106</div>
              <div>📸 <strong className="text-white">Instagram:</strong> @vmccc.films</div>
            </div>

            <form onSubmit={handleSubscribe} className="flex gap-2 pt-2">
              <input
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-[#160B0E] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#E2BA65]"
              />
              <button
                type="submit"
                className="btn-primary px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider"
              >
                Join
              </button>
            </form>

            {subscribed && (
              <p className="text-xs text-emerald-400">
                ✓ Thank you! We have added you to our wedding priority list.
              </p>
            )}
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            © 2026 <strong className="text-white">vmccc.films</strong>. MAKE YOUR MOMENTS LOOK LIKE A MOVIE • SHOOT • EDIT • DELIVER.
          </div>
          <div className="flex items-center gap-6 text-neutral-400">
            <a href="tel:8341667106" className="text-[#E2BA65] font-semibold hover:underline">Slot Booking: 8341667106</a>
            <a href="https://www.instagram.com/vmccc.films/" target="_blank" rel="noopener noreferrer" className="hover:text-white">@vmccc.films</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
window.Footer = Footer;
