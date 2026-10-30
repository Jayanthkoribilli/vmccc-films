// =========================================================
// Gear Spotlight Component — VMCCC.FILMS (White & Maroon Luxury Theme)
// Instagram ID: @vmccc.films | Hotline: 8341667106
// =========================================================

function GearSpotlight() {
  const gearList = window.VMCCC_DATA.gearList;

  return (
    <section id="gear" className="py-20 md:py-28 relative border-t border-[#700104]/10 bg-[#FAF8F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#700104] mb-3">
            Cinema Rig Specifications
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
            The Mobile Cinema Unit
          </h2>
          <p className="mt-4 text-base text-neutral-600 font-normal leading-relaxed">
            No bulky broadcast trucks. No heavy tripods taking up half the dance floor. Every VMCCC filmmaker operates an ultra-agile, Apple Log-certified cinema rig.
          </p>
        </div>

        {/* Gear Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gearList.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-7 rounded-3xl relative border border-[#700104]/15 shadow-sm hover:shadow-xl hover:border-[#700104] flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#FAF2F3] text-[#700104] border border-[#700104]/20">
                    {item.badge}
                  </span>
                  <span className="text-neutral-400 font-mono text-xs font-semibold">#0{idx + 1}</span>
                </div>

                <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-[#700104] transition-colors">
                  {item.name}
                </h3>

                <p className="text-xs text-neutral-600 font-normal leading-relaxed">
                  {item.specs}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-500 font-medium">
                <span>VMCCC Certified Rig Standard</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              </div>
            </div>
          ))}

          {/* Bonus 6th Box: Audition Standard in Deep Maroon */}
          <div className="bg-gradient-to-br from-[#700104] to-[#94101E] text-white p-6 sm:p-7 rounded-3xl shadow-xl flex flex-col justify-between border border-[#520002]">
            <div>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white text-[#700104] shadow-sm">
                Vetting Standard
              </span>
              <h3 className="text-lg font-bold text-white mt-4 mb-2">
                The Elite Creator Exam
              </h3>
              <p className="text-xs text-white/85 font-normal leading-relaxed">
                Only top 4% of filmmakers pass our practical tests: framing, real-time grading, audio calibration, speed turnaround, and social media instinct.
              </p>
            </div>
            <div className="mt-6 text-[11px] font-bold text-[#F3E5C8] flex items-center gap-1">
              <span>Zero amateur videographers guaranteed</span>
              <span>✓</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
window.GearSpotlight = GearSpotlight;
