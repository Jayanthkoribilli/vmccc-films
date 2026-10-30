// =========================================================
// Comparison Component — vmccc.films (Burgundy & Gold Theme)
// =========================================================

function Comparison({ onBookClick }) {
  const comparisonData = window.VMCCC_DATA.comparison;

  return (
    <section id="comparison" className="py-20 md:py-28 relative border-t border-[#E2BA65]/15 bg-[#0B0708]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#E2BA65]/35 bg-[#700104]/30 text-[#F3E5C8] text-xs font-semibold uppercase tracking-wider mb-3">
            The vmccc Difference
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Why Modern Couples Choose <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3E5C8] via-[#E2BA65] to-[#B88E35] font-serif-luxury italic">
              VMCCC.FILMS
            </span>
          </h2>
          <p className="mt-4 text-base text-neutral-400 font-light leading-relaxed">
            See how VMCCC.FILMS outpaces traditional videographers in speed, cinematic quality, and 10-minute on-site delivery.
          </p>
        </div>

        {/* Matrix Table */}
        <div className="max-w-4xl mx-auto glass-panel rounded-3xl overflow-hidden border border-[#E2BA65]/20 shadow-2xl">
          <div className="grid grid-cols-12 bg-white/[0.04] p-4 sm:p-5 border-b border-white/10 text-xs font-bold uppercase tracking-wider text-neutral-400">
            <div className="col-span-5 sm:col-span-4">Experience / Deliverable</div>
            <div className="col-span-4 sm:col-span-4 text-[#E2BA65] flex items-center gap-1.5 font-extrabold">
              <span className="w-2 h-2 rounded-full bg-[#E2BA65]"></span>
              vmccc.films
            </div>
            <div className="col-span-3 sm:col-span-4 text-neutral-400">Traditional Studios</div>
          </div>

          <div className="divide-y divide-white/5">
            {comparisonData.map((row, idx) => (
              <div key={idx} className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-white/[0.02] transition-colors text-xs sm:text-sm">
                
                <div className="col-span-5 sm:col-span-4 font-semibold text-white">
                  {row.feature}
                </div>

                <div className="col-span-4 sm:col-span-4 text-[#F3E5C8] font-bold flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#700104] text-[#E2BA65] flex items-center justify-center shrink-0 text-[10px]">
                    ✓
                  </span>
                  <span>{row.vmccc}</span>
                </div>

                <div className="col-span-3 sm:col-span-4 text-neutral-400 font-light flex items-center gap-2">
                  <span className="text-neutral-500 hidden sm:inline">✕</span>
                  <span>{row.traditional}</span>
                </div>

              </div>
            ))}
          </div>

          {/* Table Bottom Action */}
          <div className="p-6 bg-white/[0.02] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-neutral-300 font-light text-center sm:text-left">
              Direct slot booking available for upcoming wedding seasons.
            </span>
            <div className="flex items-center gap-3">
              <a
                href="tel:8341667106"
                className="text-xs font-bold text-[#E2BA65] hover:text-white"
              >
                📞 8341667106
              </a>
              <button
                onClick={onBookClick}
                className="btn-primary text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-full whitespace-nowrap"
              >
                Book a Slot Today
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
window.Comparison = Comparison;
