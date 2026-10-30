// =========================================================
// Packages Component — vmccc.films (Burgundy & Gold Theme)
// =========================================================

function Packages({ onSelectPackage }) {
  const [activeTab, setActiveTab] = React.useState("wedding");
  const packageData = window.VMCCC_DATA.packages;

  const currentList = packageData[activeTab] || [];

  return (
    <section id="packages" className="py-20 md:py-28 relative border-t border-[#E2BA65]/15 bg-gradient-to-b from-transparent via-[#700104]/10 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E2BA65]/35 bg-[#700104]/30 text-[#F3E5C8] text-xs font-semibold uppercase tracking-wider mb-3">
            Transparent Pricing • Cherished Keepsakes
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Curated Packages for Every <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3E5C8] via-[#E2BA65] to-[#B88E35] font-serif-luxury italic">
              Celebration & Love Story
            </span>
          </h2>
          <p className="mt-4 text-base text-neutral-400 font-light leading-relaxed">
            Zero hidden charges. Certified cinema filmmakers with iPhone 16 Pro Max cinema rigs. Color-graded on-site with same-day AirDrop delivery.
          </p>

          {/* Pricing Tabs Switcher */}
          <div className="mt-8 inline-flex p-1.5 rounded-full bg-white/[0.05] border border-[#E2BA65]/25 backdrop-blur-md">
            <button
              onClick={() => setActiveTab("wedding")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "wedding"
                  ? 'bg-gradient-to-r from-[#700104] to-[#94101E] text-white border border-[#E2BA65]/50 shadow-[0_0_20px_rgba(112,1,4,0.5)]'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Wedding Moments & Keepsakes
            </button>
            <button
              onClick={() => setActiveTab("hourly")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "hourly"
                  ? 'bg-gradient-to-r from-[#700104] to-[#94101E] text-white border border-[#E2BA65]/50 shadow-[0_0_20px_rgba(112,1,4,0.5)]'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Hourly & Instant Content
            </button>
            <button
              onClick={() => setActiveTab("business")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "business"
                  ? 'bg-gradient-to-r from-[#700104] to-[#94101E] text-white border border-[#E2BA65]/50 shadow-[0_0_20px_rgba(112,1,4,0.5)]'
                  : 'text-neutral-400 hover:text-white'
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
              className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                pkg.highlighted
                  ? 'glass-card border-2 border-[#E2BA65]/60 shadow-[0_0_40px_rgba(112,1,4,0.35)] scale-100 md:-translate-y-2'
                  : 'glass-card border border-[#E2BA65]/15 hover:border-[#E2BA65]/35'
              }`}
            >
              {/* Badge if available */}
              {pkg.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-gradient-to-r from-[#700104] via-[#94101E] to-[#B51B2B] text-[#F3E5C8] shadow-lg border border-[#E2BA65]/50">
                    {pkg.badge}
                  </span>
                </div>
              )}

              <div>
                <p className="text-xs font-semibold text-[#E2BA65] uppercase tracking-wider mb-2">
                  {pkg.tagline}
                </p>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {pkg.name}
                </h3>

                <p className="text-xs text-neutral-300 font-light mb-6 leading-relaxed">
                  {pkg.description}
                </p>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-lg font-medium text-[#E2BA65]">₹</span>
                    <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
                      {pkg.price}
                    </span>
                  </div>
                  <span className="text-xs text-neutral-400 block mt-1">
                    {pkg.unit}
                  </span>
                </div>

                {/* Deliverables Checklist */}
                <div className="space-y-3.5 mb-8">
                  <p className="text-xs font-bold text-neutral-200 uppercase tracking-wider">
                    What's Included:
                  </p>
                  {pkg.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300 font-light">
                      <div className="w-4 h-4 rounded-full bg-[#700104]/40 text-[#E2BA65] flex items-center justify-center shrink-0 mt-0.5 border border-[#E2BA65]/30">
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
                      ? 'btn-primary shadow-lg'
                      : 'bg-white/10 hover:bg-[#700104] text-white border border-[#E2BA65]/30'
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
        <div className="mt-16 text-center text-xs text-neutral-300 flex flex-col sm:flex-row items-center justify-center gap-3">
          <span>Need custom destination wedding coverage or recurring brand shoots?</span>
          <a
            href="tel:8341667106"
            className="text-[#E2BA65] hover:text-white font-bold underline underline-offset-4 flex items-center gap-1"
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
