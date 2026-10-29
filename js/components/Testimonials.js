// =========================================================
// Testimonials Component — vmccc.films
// =========================================================

function Testimonials() {
  const testimonials = window.VMCCC_DATA.testimonials;

  return (
    <section className="py-20 md:py-28 relative border-t border-white/5 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-500 mb-3">
            Client Stories
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Loved by 2,400+ Creators, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">
              Couples & High-Growth Brands
            </span>
          </h2>
          <p className="mt-4 text-base text-neutral-400 font-light leading-relaxed">
            See how our 10-minute on-site cinema service transformed social engagement for weddings and commercial campaigns.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-8 flex flex-col justify-between border border-white/10 hover:border-red-500/30 relative"
            >
              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 text-amber-400 text-sm mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                  <span className="text-xs text-neutral-400 ml-2 font-mono">5.0</span>
                </div>

                {/* Content */}
                <p className="text-sm text-neutral-300 font-light leading-relaxed mb-6 italic">
                  "{t.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-white/10 flex items-center gap-3.5">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border border-red-500/30"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-neutral-400">{t.role}</p>
                </div>
                <span className="ml-auto px-2 py-0.5 rounded text-[9px] font-semibold bg-white/5 text-neutral-400 border border-white/10">
                  {t.type}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Live Brands Marquee Ticker */}
        <div className="mt-16 pt-8 border-t border-white/5 overflow-hidden relative">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400 mb-6">
            Featured Across Leading Labels & Creators
          </p>
          <div className="flex gap-12 items-center justify-center flex-wrap opacity-60">
            <span className="font-heading font-extrabold text-lg tracking-wider text-neutral-400">VOGUE INDIA</span>
            <span className="font-heading font-extrabold text-lg tracking-wider text-neutral-400">WEDMEGOOD</span>
            <span className="font-heading font-extrabold text-lg tracking-wider text-neutral-400">GQ STYLES</span>
            <span className="font-heading font-extrabold text-lg tracking-wider text-neutral-400">GRAZIA</span>
            <span className="font-heading font-extrabold text-lg tracking-wider text-neutral-400">ZOMATO DINING</span>
            <span className="font-heading font-extrabold text-lg tracking-wider text-neutral-400">LIFESTYLE ASIA</span>
          </div>
        </div>

      </div>
    </section>
  );
}
window.Testimonials = Testimonials;
