// =========================================================
// Hero Component — VMCCC.FILMS
// Tagline: MAKE YOUR MOMENTS LOOK LIKE A MOVIE
// Sub-motto: SHOOT • EDIT • DELIVER
// Hotline: 8341667106
// =========================================================

function Hero({ onBookClick, onWatchShowreel, onOpenQrModal }) {
  const [selectedCity, setSelectedCity] = React.useState("Hyderabad");
  const [shootDate, setShootDate] = React.useState("");
  const [checkResult, setCheckResult] = React.useState(null);
  const brand = window.VMCCC_DATA.brand;

  const handleCheckAvailability = (e) => {
    e.preventDefault();
    setCheckResult({
      status: "available",
      message: `Slots available in ${selectedCity}! Call 8341667106 for priority confirmation.`
    });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#0B0708]">
      {/* Ambient background glows in burgundy and champagne gold */}
      <div className="ambient-glow-top"></div>
      <div className="ambient-glow-center top-1/4 left-1/4"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#700104]/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Value Proposition, Action */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Eyebrow Pill with Official Brand & Sub-motto */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E2BA65]/35 bg-[#700104]/25 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#E2BA65] animate-ping"></span>
              <span className="w-2 h-2 rounded-full bg-[#E2BA65] -ml-4"></span>
              <span className="text-xs font-semibold tracking-wider uppercase text-[#F3E5C8]">
                VMCCC.FILMS • SHOOT • EDIT • DELIVER
              </span>
            </div>

            {/* Main Title featuring user's exact tagline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold text-white leading-[1.08] tracking-tight">
              <span className="block text-2xl sm:text-3xl md:text-4xl font-heading tracking-widest text-white uppercase mb-2">
                VMCCC.FILMS
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3E5C8] via-[#E2BA65] to-[#B88E35] font-serif-luxury italic block">
                MAKE YOUR MOMENTS LOOK LIKE A MOVIE.
              </span>
              <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#E2BA65] uppercase block mt-3 font-mono">
                SHOOT • EDIT • DELIVER
              </span>
            </h1>

            {/* Official Manifesto */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              We capture and share the unique stories of couples and special celebrations on their day. We tell your story through stunning visuals, heartfelt narratives and fun BTS — color-graded and delivered on-site in 10 minutes.
            </p>

            {/* Slot Booking Hotline Bar */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#700104]/40 via-[#94101E]/30 to-[#12090B] border border-[#E2BA65]/30 flex flex-wrap items-center justify-between gap-3 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5 text-left">
                <span className="w-8 h-8 rounded-xl bg-[#700104] border border-[#E2BA65]/40 flex items-center justify-center text-sm shadow">
                  📞
                </span>
                <div>
                  <span className="text-[10px] text-[#E2BA65] font-bold uppercase tracking-wider block">Slot Booking Mobile</span>
                  <a href="tel:8341667106" className="text-base font-extrabold text-white hover:text-[#E2BA65] transition-colors">
                    +91 8341667106
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={brand.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
                >
                  <span>WhatsApp</span>
                  <span>↗</span>
                </a>
                <button
                  onClick={onOpenQrModal}
                  className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#F3E5C8] text-xs font-semibold border border-white/10"
                >
                  QR Code
                </button>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onBookClick}
                className="btn-primary w-full sm:w-auto px-8 py-4 rounded-full font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 group shadow-xl"
              >
                <span>Book Shoot Slot · From ₹1,999</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>

              <button
                onClick={onWatchShowreel}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-[#E2BA65]/30 hover:border-[#E2BA65] text-[#F3E5C8] font-medium text-xs flex items-center justify-center gap-2.5 transition-all bg-white/[0.03] hover:bg-white/[0.08]"
              >
                <div className="w-6 h-6 rounded-full bg-[#700104] flex items-center justify-center text-[#E2BA65] text-xs">
                  ▶
                </div>
                <span>Watch Cinematic Reels</span>
              </button>
            </div>

            {/* City & Date Checker Widget */}
            <div className="glass-panel p-4 rounded-2xl max-w-xl mx-auto lg:mx-0 shadow-lg border border-[#E2BA65]/20 mt-4">
              <form onSubmit={handleCheckAvailability} className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <label className="block text-[11px] font-medium text-neutral-400 uppercase tracking-wider mb-1">
                    Event City
                  </label>
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full bg-[#160B0E] border border-white/10 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-[#E2BA65]"
                  >
                    {brand.activeCities.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div className="flex-1">
                  <label className="block text-[11px] font-medium text-neutral-400 uppercase tracking-wider mb-1">
                    Event Date
                  </label>
                  <input
                    type="date"
                    value={shootDate}
                    onChange={(e) => setShootDate(e.target.value)}
                    className="w-full bg-[#160B0E] border border-white/10 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-[#E2BA65]"
                  />
                </div>

                <div className="sm:self-end">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#700104] hover:bg-[#94101E] text-white text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap border border-[#E2BA65]/30"
                  >
                    Check Slot
                  </button>
                </div>
              </form>

              {checkResult && (
                <div className="mt-3 text-xs text-[#E2BA65] flex items-center gap-2 bg-[#700104]/30 border border-[#E2BA65]/30 px-3 py-2 rounded-lg">
                  <span>✓</span>
                  <span>{checkResult.message}</span>
                </div>
              )}
            </div>

            {/* Trust Metric Micro-Bar (No reviews) */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-white font-semibold">⚡ 10-Min Live Delivery Guarantee</span>
              </div>
              <span className="text-neutral-600">•</span>
              <div className="flex items-center gap-1.5">
                <span className="text-[#E2BA65] font-semibold">SHOOT • EDIT • DELIVER</span>
              </div>
              <span className="text-neutral-600 hidden sm:inline">•</span>
              <div className="text-neutral-300 font-medium hidden sm:block">
                Shot on iPhone 16 Pro Max ProRes
              </div>
            </div>

          </div>

          {/* Right Column: Aesthetic Brand Movie Card & Showcase (Top Video removed as requested) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* Ambient behind card */}
            <div className="absolute inset-0 bg-[#700104]/35 rounded-3xl blur-[80px] -z-10"></div>

            {/* Cinema Identity Card Container */}
            <div className="w-full max-w-md glass-panel p-3 sm:p-4 rounded-3xl border border-[#E2BA65]/35 shadow-[0_0_50px_rgba(112,1,4,0.4)] relative group hover:border-[#E2BA65]/60 transition-all duration-500">
              
              {/* Corner Accents */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#E2BA65]"></div>
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#E2BA65]"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#E2BA65]"></div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#E2BA65]"></div>

              {/* Exact Tagline Card Image Provided by User */}
              <div className="rounded-2xl overflow-hidden border border-[#E2BA65]/20 shadow-2xl relative bg-black">
                <img
                  src="assets/movie_card.jpg"
                  alt="VMCCC.FILMS - MAKE YOUR MOMENTS LOOK LIKE A MOVIE - SHOOT EDIT DELIVER"
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              {/* Interactive Booking & Action Bar Under Card */}
              <div className="mt-4 p-3 rounded-2xl bg-[#0B0708]/80 border border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs px-1">
                  <div className="flex items-center gap-1.5 text-neutral-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span>Ready for Booking</span>
                  </div>
                  <span className="text-[#E2BA65] font-semibold text-[11px] uppercase tracking-wider">
                    Pan-India Service
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="tel:8341667106"
                    className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#700104] to-[#94101E] hover:from-[#94101E] hover:to-[#B51B2B] text-white text-xs font-bold transition-all shadow text-center flex items-center justify-center gap-1.5 border border-[#E2BA65]/30"
                  >
                    <span>📞 8341667106</span>
                  </a>

                  <a
                    href={brand.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow text-center flex items-center justify-center gap-1.5"
                  >
                    <span>💬 WhatsApp</span>
                  </a>
                </div>

                <button
                  onClick={onBookClick}
                  className="w-full btn-primary py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow-lg flex items-center justify-center gap-1.5"
                >
                  <span>Reserve Date Online</span>
                  <span>→</span>
                </button>
              </div>

              {/* Floating Badges */}
              <div className="absolute -bottom-4 -left-3 glass-panel px-3.5 py-2 rounded-xl border border-[#E2BA65]/30 shadow-xl hidden sm:flex items-center gap-2">
                <span className="text-base">⚡</span>
                <span className="text-[11px] font-bold text-white">10-Min Delivery</span>
              </div>

              <div className="absolute -top-3 -right-3 glass-panel px-3 py-1.5 rounded-xl border border-[#E2BA65]/30 shadow-xl hidden sm:flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#E2BA65] animate-pulse"></span>
                <span className="text-[10px] font-bold text-[#F3E5C8] uppercase tracking-wider">4K ProRes</span>
              </div>

            </div>

          </div>

        </div>

        {/* Global Statistics Counter Bar */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {window.VMCCC_DATA.stats.map((stat, idx) => (
            <div key={idx} className="text-center lg:text-left glass-card p-5 rounded-2xl border border-[#E2BA65]/15">
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F3E5C8] to-[#E2BA65]">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-neutral-200 mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-neutral-400 mt-0.5 font-light">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
window.Hero = Hero;
