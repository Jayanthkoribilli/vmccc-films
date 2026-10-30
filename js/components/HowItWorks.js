// =========================================================
// How It Works Component — vmccc.films (Burgundy & Gold)
// =========================================================

function HowItWorks({ onBookClick }) {
  const steps = window.VMCCC_DATA.howItWorks;

  return (
    <section id="how-it-works" className="py-20 md:py-28 relative border-t border-[#E2BA65]/15 bg-[#0B0708]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E2BA65]/30 bg-[#700104]/20 text-[#F3E5C8] text-xs font-semibold uppercase tracking-wider mb-3">
            From Ceremony to Instagram Feed
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            How vmccc.films Works
          </h2>
          <p className="mt-4 text-base text-neutral-400 font-light leading-relaxed">
            No waiting 6 weeks for slow wedding videos. Experience on-site, same-day cinematic reel delivery in 4 effortless steps.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => (
            <div 
              key={idx}
              className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative group hover:border-[#E2BA65]/50"
            >
              {/* Step Number Watermark */}
              <div className="absolute top-4 right-6 text-5xl font-black text-white/5 group-hover:text-[#E2BA65]/15 transition-colors font-heading select-none">
                {item.step}
              </div>

              <div>
                {/* Step Pill */}
                <div className="w-12 h-12 rounded-2xl bg-[#700104]/40 border border-[#E2BA65]/30 flex items-center justify-center text-[#E2BA65] mb-6 group-hover:scale-110 group-hover:bg-[#700104] group-hover:text-white transition-all shadow-[0_0_15px_rgba(112,1,4,0.3)]">
                  <span className="font-bold text-sm">#{item.step}</span>
                </div>

                <div className="inline-block px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider bg-white/5 border border-white/10 text-[#F3E5C8] mb-3">
                  {item.badge}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#E2BA65] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Step indicator arrow */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400 group-hover:text-[#E2BA65] transition-colors">
                <span>Phase {item.step}</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Slot Booking Banner */}
        <div className="mt-12 glass-panel rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#E2BA65]/30 bg-gradient-to-r from-[#700104]/50 via-[#0B0708] to-[#0B0708]">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">Ready to preserve your special day?</h4>
            <p className="text-sm text-neutral-300 font-light">
              Cinematic filmmakers and speed-editors on standby across Hyderabad, Mumbai, Delhi, Bengaluru & Goa.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:8341667106"
              className="text-xs font-bold px-5 py-3 rounded-full border border-[#E2BA65]/40 text-white bg-[#700104] hover:bg-[#94101E] transition-all whitespace-nowrap shadow"
            >
              📞 Call: 8341667106
            </a>
            <button
              onClick={onBookClick}
              className="btn-primary text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full whitespace-nowrap"
            >
              Book Slot Online
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
window.HowItWorks = HowItWorks;
