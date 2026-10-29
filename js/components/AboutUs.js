// =========================================================
// About Us Component — vmccc.films (Using uploaded About Us card & QR)
// =========================================================

function AboutUs({ onBookClick }) {
  const brand = window.VMCCC_DATA.brand;

  return (
    <section id="about" className="py-20 md:py-28 relative border-t border-[#E2BA65]/15 bg-gradient-to-b from-[#0B0708] via-[#160A0D] to-[#0B0708]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E2BA65]/30 bg-[#700104]/20 backdrop-blur-md mb-4">
            <span className="w-2 h-2 rounded-full bg-[#E2BA65]"></span>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#F3E5C8]">
              Wedding Content Creators
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            About <span className="font-serif-luxury italic text-[#E2BA65]">vmccc.films_</span>
          </h2>
          <p className="mt-4 text-base text-neutral-400 font-light leading-relaxed">
            Turning celebrations into cherished keepsakes through stunning visuals, heartfelt narratives and fun BTS.
          </p>
        </div>

        {/* Content Layout: Left About Card / Story + Right QR Code & Booking Hotline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Official About Us Card Image & Styled Manifesto */}
          <div className="lg:col-span-7 flex flex-col md:flex-row gap-6 items-center glass-panel p-6 sm:p-8 rounded-3xl border border-[#E2BA65]/25 shadow-2xl relative overflow-hidden">
            
            {/* Background subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#700104]/20 rounded-full blur-3xl pointer-events-none"></div>

            {/* Official Image Preview with frame */}
            <div className="w-full md:w-56 shrink-0 rounded-2xl overflow-hidden border-2 border-[#E2BA65]/40 shadow-xl group">
              <img
                src="assets/about_card.jpg"
                alt="About vmccc.films_"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Typography Story */}
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#E2BA65]">
                <span>Our Philosophy</span>
                <span>•</span>
                <span className="text-neutral-400">Cherished Keepsakes</span>
              </div>

              <h3 className="text-2xl font-bold text-white leading-tight font-serif-luxury italic">
                "We capture the unique stories of couples on their special day."
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                <p>
                  As wedding content creators, we understand the profound significance of the little moments. From spontaneous bridal suite giggles to intimate vows and electric sangeet dance floors.
                </p>
                <p>
                  We strive to tell your love story through <strong className="text-white font-medium">stunning visuals</strong>, <strong className="text-white font-medium">heartfelt narratives</strong>, and <strong className="text-white font-medium">fun BTS</strong> — delivered on-site within 10 to 15 minutes.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href="tel:8341667106"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E2BA65] hover:text-white transition-colors"
                >
                  <span>📞 Call Slot Booking: 8341667106</span>
                  <span>→</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Official Instagram QR Card & Connect */}
          <div className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-3xl border border-[#E2BA65]/20 flex flex-col items-center text-center space-y-5">
            
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#700104] to-[#B51B2B] flex items-center justify-center text-xl shadow-lg border border-[#E2BA65]/30">
              📸
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#E2BA65]">
                Official Instagram
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                Scan to Follow <span className="text-[#E2BA65]">@vmccc.films_</span>
              </h3>
              <p className="text-xs text-neutral-400 mt-1 font-light">
                Explore our daily wedding reels, real client BTS, and ceremony stories.
              </p>
            </div>

            {/* Official QR Code Image */}
            <div className="p-3 bg-white rounded-2xl shadow-[0_0_30px_rgba(226,186,101,0.25)] border-2 border-[#E2BA65]/40 max-w-[200px] group cursor-pointer hover:scale-105 transition-transform">
              <img
                src="assets/instagram_qr.png"
                alt="Instagram QR Code for VMCCC.FILMS"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Action buttons */}
            <div className="w-full flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 rounded-xl text-xs font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-90 text-white transition-all shadow-md flex items-center justify-center gap-1.5"
              >
                <span>Open Instagram</span>
                <span>↗</span>
              </a>

              <a
                href={brand.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-md flex items-center justify-center gap-1.5"
              >
                <span>WhatsApp Booking</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
window.AboutUs = AboutUs;
