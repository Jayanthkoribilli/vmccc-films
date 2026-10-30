// =========================================================
// How It Works Component — VMCCC.FILMS (White & Maroon Luxury Theme)
// Instagram ID: @vmccc.films | Hotline: 8341667106
// =========================================================

function HowItWorks({ onBookClick }) {
  const steps = window.VMCCC_DATA.howItWorks;

  return (
    <section id="how-it-works" className="py-20 md:py-28 relative border-t border-[#700104]/10 bg-[#FAF8F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#700104]/20 bg-[#700104]/5 text-[#700104] text-xs font-bold uppercase tracking-wider mb-3">
            From Shoot to Instagram Feed
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
            How <span className="text-[#700104]">VMCCC.FILMS</span> Works
          </h2>
          <p className="mt-4 text-base text-neutral-600 font-normal leading-relaxed">
            No waiting 6 weeks for slow videos. Experience on-site, same-day cinematic reel delivery in 4 effortless steps.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative group border border-[#700104]/15 shadow-sm hover:shadow-xl hover:border-[#700104] transition-all duration-300"
            >
              {/* Step Number Watermark */}
              <div className="absolute top-4 right-6 text-5xl font-black text-neutral-100 group-hover:text-[#700104]/10 transition-colors font-heading select-none">
                {item.step}
              </div>

              <div>
                {/* Step Pill */}
                <div className="w-12 h-12 rounded-2xl bg-[#700104]/10 border border-[#700104]/20 flex items-center justify-center text-[#700104] mb-6 group-hover:scale-110 group-hover:bg-[#700104] group-hover:text-white transition-all shadow-sm">
                  <span className="font-bold text-sm">#{item.step}</span>
                </div>

                <div className="inline-block px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#FAF2F3] border border-[#700104]/15 text-[#700104] mb-3">
                  {item.badge}
                </div>

                <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-[#700104] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-neutral-600 font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Step indicator arrow */}
              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-neutral-400 group-hover:text-[#700104] transition-colors">
                <span>Phase {item.step}</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Slot Booking Banner in Deep Maroon */}
        <div className="mt-12 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#700104] text-white shadow-xl border border-[#520002]">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-xl font-extrabold text-white">Ready to make your moments look like a movie?</h4>
            <p className="text-sm text-white/85 font-normal">
              Cinematic filmmakers and speed-editors on standby across Hyderabad, Mumbai, Delhi, Bengaluru & Goa.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:8341667106"
              className="text-xs font-bold px-5 py-3 rounded-full bg-white text-[#700104] hover:bg-neutral-100 transition-all whitespace-nowrap shadow-md"
            >
              📞 Call: 8341667106
            </a>
            <button
              onClick={onBookClick}
              className="text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full bg-[#94101E] hover:bg-[#A31526] text-white border border-white/20 whitespace-nowrap shadow-md transition-all"
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
