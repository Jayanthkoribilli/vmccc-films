// =========================================================
// About Us Component — VMCCC.FILMS (White & Maroon Luxury Theme)
// Instagram ID: @vmccc.films | Hotline: 8341667106
// =========================================================

function AboutUs({ onBookClick }) {
  const brand = window.VMCCC_DATA.brand;

  return (
    <section id="about" className="py-20 md:py-28 relative border-t border-[#700104]/10 bg-[#FAF8F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#700104]/20 bg-[#700104]/5 backdrop-blur-md mb-4">
            <span className="w-2 h-2 rounded-full bg-[#700104]"></span>
            <span className="text-xs font-bold tracking-widest uppercase text-[#700104]">
              SHOOT • EDIT • DELIVER
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
            About <span className="font-serif-luxury italic text-[#700104]">VMCCC.FILMS</span>
          </h2>
          <p className="mt-4 text-base text-neutral-600 font-normal leading-relaxed">
            MAKE YOUR MOMENTS LOOK LIKE A MOVIE — turning celebrations into cherished keepsakes through stunning visuals, heartfelt narratives and fun BTS.
          </p>
        </div>

        {/* Content Layout: Left About Card / Story + Right QR Code & Booking Hotline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Official About Us Card Image & Styled Manifesto */}
          <div className="lg:col-span-7 flex flex-col md:flex-row gap-6 items-center bg-white p-6 sm:p-8 rounded-3xl border border-[#700104]/15 shadow-lg relative overflow-hidden">
            
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#700104]/[0.03] rounded-full blur-3xl pointer-events-none"></div>

            {/* Official Image Preview with frame */}
            <div className="w-full md:w-56 shrink-0 rounded-2xl overflow-hidden border-2 border-[#700104]/20 shadow-md group">
              <img
                src="assets/about_card.jpg"
                alt="About VMCCC.FILMS"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Typography Story */}
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#700104]">
                <span>Our Philosophy</span>
                <span>•</span>
                <span className="text-neutral-500">MAKE YOUR MOMENTS LOOK LIKE A MOVIE</span>
              </div>

              <h3 className="text-2xl font-bold text-neutral-900 leading-tight font-serif-luxury italic">
                "We capture the unique stories of couples and celebrations."
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                <p>
                  We understand the profound significance of the little moments. From spontaneous bridal suite giggles to intimate vows and electric celebration dance floors.
                </p>
                <p>
                  We strive to make your moments look like a movie through <strong className="text-neutral-900 font-semibold">stunning visuals</strong>, <strong className="text-neutral-900 font-semibold">heartfelt narratives</strong>, and <strong className="text-neutral-900 font-semibold">fun BTS</strong> — delivered on-site within 10 to 15 minutes.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href="tel:8341667106"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#700104] hover:text-[#94101E] transition-colors"
                >
                  <span>📞 Call Slot Booking: 8341667106</span>
                  <span>→</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Official Instagram QR Card & Connect */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-[#700104]/15 shadow-lg flex flex-col items-center text-center space-y-5">
            
            <div className="w-12 h-12 rounded-2xl bg-[#700104] flex items-center justify-center text-xl shadow-md text-white">
              📸
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#700104]">
                Official Instagram
              </span>
              <h3 className="text-xl font-bold text-neutral-900 mt-1">
                Scan to Follow <span className="text-[#700104]">@vmccc.films</span>
              </h3>
              <p className="text-xs text-neutral-500 mt-1 font-normal">
                Explore our daily wedding reels, real client BTS, and ceremony stories.
              </p>
            </div>

            {/* Official QR Code Image */}
            <div className="p-3 bg-white rounded-2xl shadow-md border-2 border-[#700104]/20 max-w-[200px] group cursor-pointer hover:scale-105 transition-transform">
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
                className="flex-1 py-2.5 px-4 rounded-xl text-xs font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-90 text-white transition-all shadow flex items-center justify-center gap-1.5"
              >
                <span>Open Instagram</span>
                <span>↗</span>
              </a>

              <a
                href={brand.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow flex items-center justify-center gap-1.5"
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
