// =========================================================
// Packages Component — VMCCC.FILMS (White & Maroon Luxury Theme)
// Instagram ID: @vmccc.films | Hotline: 8341667106
// =========================================================

function Packages({ onSelectPackage }) {
  const [activeTab, setActiveTab] = React.useState("wedding");
  const packageData = window.VMCCC_DATA.packages;

  const currentList = packageData[activeTab] || [];

  return (
    <section id="packages" className="py-20 md:py-28 relative border-t border-[#700104]/10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#700104]/20 bg-[#700104]/5 text-[#700104] text-xs font-bold uppercase tracking-wider mb-3">
            Transparent Pricing • Cherished Keepsakes
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Curated Packages for Every <br />
            <span className="text-[#700104] font-serif-luxury italic">
              Celebration & Story
            </span>
          </h2>
          <p className="mt-4 text-base text-neutral-600 font-normal leading-relaxed">
            Zero hidden charges. Certified cinema filmmakers with iPhone 16 Pro Max rigs. Color-graded on-site with same-day AirDrop delivery.
          </p>

          {/* Pricing Tabs Switcher */}
          <div className="mt-8 inline-flex p-1.5 rounded-full bg-[#FAF8F6] border border-neutral-200 shadow-sm">
            <button
              onClick={() => setActiveTab("wedding")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === "wedding"
                  ? 'bg-[#700104] text-white shadow-md'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Wedding Moments & Keepsakes
            </button>
            <button
              onClick={() => setActiveTab("hourly")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === "hourly"
                  ? 'bg-[#700104] text-white shadow-md'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Hourly & Instant Content
            </button>
            <button
              onClick={() => setActiveTab("business")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === "business"
                  ? 'bg-[#700104] text-white shadow-md'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Commercial & Brands
            </button>
          </div>
        </div>

        {/* Packages Cards Grid */}
        <div className={`grid grid-cols-1 ${currentList.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' : 'md:grid-cols-3'} gap-8 items-stretch`}>
          {currentList.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 bg-white ${
                pkg.highlighted
                  ? 'border-2 border-[#700104] shadow-[0_15px_40px_rgba(112,1,4,0.15)] md:-translate-y-2'
                  : 'border border-[#700104]/15 shadow-sm hover:shadow-xl hover:border-[#700104]/40'
              }`}
            >
              {/* Badge if available */}
              {pkg.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#700104] text-white shadow-md border border-white/40">
                    {pkg.badge}
                  </span>
                </div>
              )}

              <div>
                <p className="text-xs font-bold text-[#700104] uppercase tracking-wider mb-2">
                  {pkg.tagline}
                </p>

                <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                  {pkg.name}
                </h3>

                <p className="text-xs text-neutral-600 font-normal mb-6 leading-relaxed">
                  {pkg.description}
                </p>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-neutral-100">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-lg font-bold text-[#700104]">₹</span>
                    <span className="text-4xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight font-heading">
                      {pkg.price}
                    </span>
                  </div>
                  <span className="text-xs text-neutral-500 font-medium block mt-1">
                    {pkg.unit}
                  </span>
                </div>

                {/* Deliverables Checklist */}
                <div className="space-y-3.5 mb-8">
                  <p className="text-xs font-bold text-neutral-800 uppercase tracking-wider">
                    What's Included:
                  </p>
                  {pkg.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-700 font-normal">
                      <div className="w-4 h-4 rounded-full bg-[#700104]/10 text-[#700104] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-[#700104]/20">
                        ✓
                      </div>
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={() => onSelectPackage(pkg)}
                  className={`w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    pkg.highlighted
                      ? 'btn-primary shadow-md'
                      : 'bg-[#FAF2F3] hover:bg-[#700104] text-[#700104] hover:text-white border border-[#700104]/25 shadow-sm'
                  }`}
                >
                  <span>Book This Plan</span>
                  <span>→</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Slot Hotline Note */}
        <div className="mt-16 text-center text-xs text-neutral-600 flex flex-col sm:flex-row items-center justify-center gap-3">
          <span>Need custom destination wedding coverage or recurring brand shoots?</span>
          <a
            href="tel:8341667106"
            className="text-[#700104] hover:text-[#94101E] font-bold underline underline-offset-4 flex items-center gap-1"
          >
            <span>Call Slot Hotline: 8341667106</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
window.Packages = Packages;
