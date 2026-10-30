// =========================================================
// Comparison Component — VMCCC.FILMS (White & Maroon Luxury Theme)
// Instagram ID: @vmccc.films | Hotline: 8341667106
// =========================================================

function Comparison({ onBookClick }) {
  const comparisonData = window.VMCCC_DATA.comparison;

  return (
    <section id="comparison" className="py-20 md:py-28 relative border-t border-[#700104]/10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#700104]/20 bg-[#700104]/5 text-[#700104] text-xs font-bold uppercase tracking-wider mb-3">
            The VMCCC Difference
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Why Modern Couples Choose <br />
            <span className="text-[#700104] font-serif-luxury italic">
              VMCCC.FILMS
            </span>
          </h2>
          <p className="mt-4 text-base text-neutral-600 font-normal leading-relaxed">
            See how VMCCC.FILMS outpaces traditional videographers in speed, cinematic quality, and 10-minute on-site delivery.
          </p>
        </div>

        {/* Matrix Table */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden border border-[#700104]/15 shadow-xl">
          <div className="grid grid-cols-12 bg-[#FAF8F6] p-4 sm:p-5 border-b border-neutral-200 text-xs font-bold uppercase tracking-wider text-neutral-600">
            <div className="col-span-5 sm:col-span-4">Experience / Deliverable</div>
            <div className="col-span-4 sm:col-span-4 text-[#700104] flex items-center gap-1.5 font-extrabold">
              <span className="w-2 h-2 rounded-full bg-[#700104]"></span>
              VMCCC.FILMS
            </div>
            <div className="col-span-3 sm:col-span-4 text-neutral-500">Traditional Studios</div>
          </div>

          <div className="divide-y divide-neutral-100">
            {comparisonData.map((row, idx) => (
              <div key={idx} className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-[#FAF8F6]/60 transition-colors text-xs sm:text-sm">
                
                <div className="col-span-5 sm:col-span-4 font-bold text-neutral-900">
                  {row.feature}
                </div>

                <div className="col-span-4 sm:col-span-4 text-[#700104] font-bold flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#700104]/10 text-[#700104] flex items-center justify-center shrink-0 text-[10px] font-extrabold border border-[#700104]/20">
                    ✓
                  </span>
                  <span>{row.vmccc}</span>
                </div>

                <div className="col-span-3 sm:col-span-4 text-neutral-500 font-normal flex items-center gap-2">
                  <span className="text-neutral-400 hidden sm:inline">✕</span>
                  <span>{row.traditional}</span>
                </div>

              </div>
            ))}
          </div>

          {/* Table Bottom Action */}
          <div className="p-6 bg-[#FAF8F6] border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-neutral-600 font-medium text-center sm:text-left">
              Direct slot booking available for upcoming wedding seasons.
            </span>
            <div className="flex items-center gap-3">
              <a
                href="tel:8341667106"
                className="text-xs font-bold text-[#700104] hover:text-[#94101E]"
              >
                📞 8341667106
              </a>
              <button
                onClick={onBookClick}
                className="btn-primary text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-full whitespace-nowrap shadow"
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
