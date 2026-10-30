// =========================================================
// Hero Component — VMCCC.FILMS (Redesigned with Cinematic Logo)
// Brand Name: VMCCC.FILMS (Montserrat ExtraBold 800)
// Tagline: MAKE YOUR MOMENTS LOOK LIKE A MOVIE (Playfair Display Italic)
// Starting Price: ₹1,500
// Hotline: 8341667106
// =========================================================

function Hero({ onBookClick, onOpenQrModal }) {
  const [selectedCity, setSelectedCity] = React.useState("Vijayawada");
  const [shootDate, setShootDate] = React.useState("");
  const [checkResult, setCheckResult] = React.useState(null);
  const brand = window.VMCCC_DATA.brand;

  const handleCheckAvailability = (e) => {
    e.preventDefault();
    setCheckResult({
      status: "available",
      message: `Slots available in ${selectedCity}! Call 8341667106 or scroll to reserve your slot below.`
    });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#0B0708]">
      {/* Ambient background glows in burgundy, maroon and champagne gold */}
      <div className="ambient-glow-top"></div>
      <div className="ambient-glow-center top-1/4 left-1/4"></div>
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#700104]/25 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-[#E2BA65]/12 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* =========================================================
              Left Column: Typography & Visual Hierarchy
              1. Brand Name: VMCCC.FILMS (Montserrat ExtraBold 800)
              2. Tagline: MAKE YOUR MOMENTS LOOK LIKE A MOVIE (Playfair Display Italic)
              3. Description, Hotline & Booking CTA (From ₹1,500)
             ========================================================= */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Eyebrow Pill with Official Brand & Sub-motto */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E2BA65]/35 bg-[#700104]/30 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#E2BA65] animate-ping"></span>
              <span className="w-2 h-2 rounded-full bg-[#E2BA65] -ml-4"></span>
              <span className="text-xs font-semibold tracking-wider uppercase text-[#F3E5C8]">
                PREMIUM WEDDING CINEMATOGRAPHY &bull; 10-MIN AIRDROP
              </span>
            </div>

            {/* Main Title Area: Strict Visual Hierarchy */}
            <div className="space-y-3">
              {/* 1. BRAND NAME: VMCCC.FILMS — Montserrat ExtraBold 800, Prominent, Bold & Attractive */}
              <h1 
                className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold text-white leading-[1.04] tracking-tight uppercase"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, letterSpacing: '-0.02em' }}
              >
                <span className="text-white drop-shadow-[0_2px_15px_rgba(255,255,255,0.18)]">
                  VMCCC
                </span>
                <span className="text-[#A31526] drop-shadow-[0_0_25px_rgba(163,21,38,0.7)]">
                  .FILMS
                </span>
              </h1>

              {/* 2. TAGLINE: MAKE YOUR MOMENTS LOOK LIKE A MOVIE — Playfair Display Italic, Elegant Golden/Yellow */}
              <p 
                className="text-2xl sm:text-3xl md:text-4xl xl:text-[42px] font-normal italic leading-snug text-transparent bg-clip-text bg-gradient-to-r from-[#F7E7CE] via-[#E2BA65] to-[#D4A346] drop-shadow-[0_2px_12px_rgba(226,186,101,0.3)] block pt-1"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'italic' }}
              >
                MAKE YOUR MOMENTS LOOK LIKE A MOVIE.
              </p>

              {/* 3. SUB-MOTTO: SHOOT • EDIT • DELIVER */}
              <div className="flex items-center justify-center lg:justify-start gap-2 pt-1">
                <span className="h-[1px] w-6 bg-[#E2BA65]/50"></span>
                <span className="text-xs sm:text-sm font-bold tracking-[0.3em] text-[#E2BA65] uppercase font-mono">
                  SHOOT &bull; EDIT &bull; DELIVER
                </span>
                <span className="h-[1px] w-6 bg-[#E2BA65]/50"></span>
              </div>
            </div>

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

            {/* Primary Action Button: BOOK SHOOT SLOT – FROM ₹1,500 */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onBookClick}
                className="btn-primary w-full sm:w-auto px-9 py-4 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2.5 group shadow-[0_0_25px_rgba(112,1,4,0.6)] hover:shadow-[0_0_35px_rgba(148,16,30,0.85)]"
              >
                <span>BOOK SHOOT SLOT &ndash; FROM &#8377;1,500</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

            {/* City & Date Quick Slot Checker Widget */}
            <div className="glass-panel p-4 rounded-2xl max-w-xl mx-auto lg:mx-0 shadow-lg border border-[#E2BA65]/20 mt-4">
              <form onSubmit={handleCheckAvailability} className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <label className="block text-[11px] font-medium text-neutral-400 uppercase tracking-wider mb-1">
                    Event Location / City
                  </label>
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full bg-[#160B0E] border border-white/10 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-[#E2BA65]"
                  >
                    <option value="Vijayawada (NTR District)">Vijayawada (NTR District)</option>
                    <option value="Hyderabad / Secunderabad">Hyderabad / Secunderabad</option>
                    <option value="Visakhapatnam (Vizag)">Visakhapatnam (Vizag)</option>
                    <option value="Guntur / Mangalagiri">Guntur / Mangalagiri</option>
                    <option value="Tirupati">Tirupati</option>
                    <option value="Rajahmundry / Kakinada">Rajahmundry / Kakinada</option>
                    <option value="Nellore">Nellore</option>
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Chennai">Chennai</option>
                    <option value="All India / Destination">All India / Destination</option>
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
                <div className="mt-3 text-xs text-[#E2BA65] flex items-center justify-between gap-2 bg-[#700104]/30 border border-[#E2BA65]/30 px-3 py-2 rounded-lg">
                  <div className="flex items-center gap-2">
                    <span>✓</span>
                    <span>{checkResult.message}</span>
                  </div>
                  <button
                    onClick={onBookClick}
                    className="text-[11px] font-bold text-white underline hover:text-[#E2BA65] whitespace-nowrap ml-2"
                  >
                    Fill Details →
                  </button>
                </div>
              )}
            </div>

            {/* Trust Metric Micro-Bar */}
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
                Shot on iPhone 16 Pro Max ProRes Log
              </div>
            </div>

          </div>

          {/* =========================================================
              Right Column: Redesigned Cinematic VMCCC.FILMS Logo Presentation
              - Actual VMCCC.FILMS camera logo prominently featured
              - Cinematic dark background with maroon, black & gold lighting
              - Viewfinder frame markers & camera telemetry
              - Spec pills & instant booking action bar
             ========================================================= */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative w-full">
            
            {/* Ambient Lighting Layers behind the showcase */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#700104]/60 via-[#94101E]/35 to-[#E2BA65]/25 rounded-[40px] blur-[90px] pointer-events-none -z-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#E2BA65]/15 rounded-full blur-[90px] pointer-events-none -z-10"></div>

            {/* Main Cinematic Showcase Box */}
            <div className="w-full max-w-md rounded-3xl p-5 sm:p-7 relative bg-gradient-to-b from-[#180B0F]/95 via-[#0D0507]/98 to-[#14090C]/95 border-2 border-[#E2BA65]/40 shadow-[0_0_60px_rgba(112,1,4,0.6),0_0_30px_rgba(226,186,101,0.25)] backdrop-blur-xl group hover:border-[#E2BA65]/70 transition-all duration-500">
              
              {/* Cinematic Viewfinder Corner Crosshairs (Gold) */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#E2BA65]"></div>
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#E2BA65]"></div>
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#E2BA65]"></div>
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#E2BA65]"></div>

              {/* Top Telemetry / Cinema Status Bar */}
              <div className="flex items-center justify-between text-[11px] font-mono pb-3.5 border-b border-white/10 text-neutral-300">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.9)]"></span>
                  <span className="text-red-400 font-bold tracking-wider">● REC 4K LOG</span>
                </div>
                <span className="text-[#E2BA65] font-semibold tracking-widest uppercase">24.00 FPS • PRORES</span>
                <span className="text-white/60 tracking-wider">ISO 800</span>
              </div>

              {/* Centerpiece: The Actual VMCCC.FILMS Camera Logo */}
              <div className="my-5 relative flex items-center justify-center">
                {/* Subtle golden halo behind the logo card */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#700104]/50 via-[#E2BA65]/30 to-[#94101E]/40 rounded-2xl blur-xl"></div>
                
                {/* Luxury White & Gold Mount Card showcasing the official camera logo with 100% crispness */}
                <div className="relative w-full max-w-[320px] sm:max-w-[340px] px-6 py-7 sm:py-8 rounded-2xl bg-gradient-to-b from-white via-[#FAF7F2] to-[#F5EFE6] border-2 border-[#E2BA65]/70 shadow-[0_15px_35px_rgba(0,0,0,0.7),0_0_35px_rgba(226,186,101,0.35)] flex flex-col items-center justify-center overflow-hidden group-hover:shadow-[0_15px_45px_rgba(112,1,4,0.65),0_0_45px_rgba(226,186,101,0.55)] transition-all duration-500">
                  
                  {/* Subtle corner golden notches on mount */}
                  <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-[#B88E35]"></div>
                  <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-[#B88E35]"></div>
                  <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-[#B88E35]"></div>
                  <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-[#B88E35]"></div>

                  {/* The Actual Provided Camera Logo (perfect proportions, no stretching) */}
                  <img
                    src="assets/logo.png"
                    alt="VMCCC.FILMS Official Brand Identity"
                    className="w-full h-auto max-h-[180px] sm:max-h-[200px] object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Cinema Brand Identity Badge */}
              <div className="text-center space-y-1.5 pt-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#700104]/60 border border-[#E2BA65]/40 text-[#F3E5C8] text-[10px] font-bold uppercase tracking-[0.2em]">
                  <span>★</span>
                  <span>OFFICIAL BRAND IDENTITY</span>
                  <span>★</span>
                </div>
                <p className="text-xs font-serif-luxury italic text-[#E2BA65] tracking-wide">
                  Cinematography &amp; Wedding Filmmaking Studio
                </p>
              </div>

              {/* Spec Pills: Rig, Delivery, Coverage */}
              <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-white/10 text-center">
                <div className="p-2 rounded-xl bg-white/[0.04] border border-white/5">
                  <span className="block text-[10px] text-neutral-400 uppercase font-mono">Cinema Rig</span>
                  <span className="text-[11px] font-bold text-white">4K ProRes</span>
                </div>
                <div className="p-2 rounded-xl bg-white/[0.04] border border-white/5">
                  <span className="block text-[10px] text-neutral-400 uppercase font-mono">On-Site Edit</span>
                  <span className="text-[11px] font-bold text-[#E2BA65]">10-Min Live</span>
                </div>
                <div className="p-2 rounded-xl bg-white/[0.04] border border-white/5">
                  <span className="block text-[10px] text-neutral-400 uppercase font-mono">Coverage</span>
                  <span className="text-[11px] font-bold text-white">Pan-India</span>
                </div>
              </div>

              {/* Direct Booking Action Bar under Logo */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-left">
                  <span className="w-8 h-8 rounded-xl bg-[#700104] border border-[#E2BA65]/50 flex items-center justify-center text-xs shadow">
                    📞
                  </span>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-[#E2BA65] font-bold block">Hotline</span>
                    <a href="tel:8341667106" className="text-xs sm:text-sm font-extrabold text-white hover:text-[#E2BA65] transition-colors">
                      8341667106
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="tel:8341667106"
                    className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#700104] to-[#94101E] hover:from-[#94101E] hover:to-[#B51B2B] text-white text-[11px] font-bold uppercase tracking-wider transition-all border border-[#E2BA65]/40 shadow"
                  >
                    Call
                  </a>
                  <a
                    href={brand.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold uppercase tracking-wider transition-all shadow flex items-center gap-1"
                  >
                    WhatsApp
                  </a>
                  <button
                    onClick={onBookClick}
                    className="px-3.5 py-1.5 rounded-xl bg-white text-[#700104] hover:bg-[#F3E5C8] text-[11px] font-extrabold uppercase tracking-wider transition-all shadow"
                  >
                    Book Slot
                  </button>
                </div>
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
