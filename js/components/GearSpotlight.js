// =========================================================
// Gear Spotlight Component — vmccc.films
// =========================================================

function GearSpotlight() {
  const gearList = window.VMCCC_DATA.gearList;

  return (
    <section id="gear" className="py-20 md:py-28 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-500 mb-3">
            Cinema Rig Specifications
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            The Mobile Cinema Unit
          </h2>
          <p className="mt-4 text-base text-neutral-400 font-light leading-relaxed">
            No bulky broadcast trucks. No heavy tripods taking up half the dance floor. Every vmccc filmmaker operates an ultra-agile, Apple Log-certified cinema rig.
          </p>
        </div>

        {/* Gear Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gearList.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-6 sm:p-7 rounded-3xl relative border border-white/10 hover:border-red-500/40 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-600/20 text-red-400 border border-red-500/30">
                    {item.badge}
                  </span>
                  <span className="text-neutral-600 font-mono text-xs">#0{idx + 1}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                  {item.name}
                </h3>

                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  {item.specs}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-400">
                <span>vmccc Certified Rig Standard</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              </div>
            </div>
          ))}

          {/* Bonus 6th Box: Audition Standard */}
          <div className="glass-card p-6 sm:p-7 rounded-3xl relative border border-red-500/30 bg-gradient-to-br from-red-950/30 via-[#121217] to-black flex flex-col justify-between">
            <div>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-600 text-white">
                Vetting Filter
              </span>
              <h3 className="text-lg font-bold text-white mt-4 mb-2">
                The 6-Tier Creator Exam
              </h3>
              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                Only top 4% of filmmakers pass our practical tests: framing, real-time grading, audio calibration, speed turnaround, and social media instinct.
              </p>
            </div>
            <div className="mt-6 text-[11px] font-bold text-red-400 flex items-center gap-1">
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
