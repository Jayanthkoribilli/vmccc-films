// =========================================================
// Interactive Shoot Cost Estimator — vmccc.films
// =========================================================

function Calculator({ onApplyCustomQuote }) {
  const [shootType, setShootType] = React.useState("fashion");
  const [hours, setHours] = React.useState(2);
  const [reelsCount, setReelsCount] = React.useState(2);
  const [includeDrone, setIncludeDrone] = React.useState(false);
  const [includeSecondShooter, setIncludeSecondShooter] = React.useState(false);
  const [includeProResSSD, setIncludeProResSSD] = React.useState(false);

  // Dynamic price calculation
  const baseRatePerHour = 1500;
  const baseRatePerReel = 800;

  let total = (hours * baseRatePerHour) + (reelsCount * baseRatePerReel);
  
  if (shootType === "wedding") total += 2000;
  if (shootType === "corporate") total += 1500;
  
  if (includeDrone) total += 3500;
  if (includeSecondShooter) total += 2500;
  if (includeProResSSD) total += 1500;

  const estimatedMinutes = Math.min(10 + (reelsCount * 2), 25);

  const handleBookEstimate = () => {
    const customConfig = {
      name: `Custom ${shootType.toUpperCase()} Sprint`,
      price: total.toLocaleString('en-IN'),
      formValue: `Custom Quote: ${shootType} (${hours} hrs, ${reelsCount} reels, Total ₹${total.toLocaleString('en-IN')})`,
      deliverables: [
        `${hours} Hours of Coverage`,
        `${reelsCount} Custom Edited 4K Reels`,
        includeDrone ? "4K Drone Aerial Coverage" : "Standard Mobile Cinema Rig",
        includeSecondShooter ? "Dual Camera Directors" : "Lead Creator",
        includeProResSSD ? "ProRes RAW Master SSD Dump" : "Direct AirDrop / Cloud Transfer"
      ]
    };
    onApplyCustomQuote(customConfig);
  };

  return (
    <section id="calculator" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-500 mb-3">
            Custom Quote Engine
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Build Your Custom Shoot
          </h2>
          <p className="mt-4 text-base text-neutral-400 font-light leading-relaxed">
            Need something unique? Adjust hours, reel deliverables, and cinema add-ons in real time. Get an instant, binding price estimate with zero guesswork.
          </p>
        </div>

        {/* Calculator Interactive Box */}
        <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Shoot Type Buttons */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                  Shoot Category
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "fashion", label: "Fashion & Lifestyle" },
                    { id: "cafe", label: "Cafe & Dining" },
                    { id: "wedding", label: "Wedding Moments" },
                    { id: "auto", label: "Automobile & Tech" },
                    { id: "corporate", label: "Brand & Founder" },
                    { id: "event", label: "Nightlife & Party" }
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setShootType(t.id)}
                      className={`px-3 py-2.5 rounded-xl text-xs font-medium border text-center transition-all ${
                        shootType === t.id
                          ? 'bg-red-600/30 border-red-500 text-white font-semibold'
                          : 'bg-white/[0.03] border-white/10 text-neutral-300 hover:border-white/30'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Hours Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    Shoot Duration
                  </label>
                  <span className="text-sm font-bold text-white bg-white/10 px-2.5 py-0.5 rounded-md">
                    {hours} {hours === 1 ? 'Hour' : 'Hours'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="8"
                  step="1"
                  value={hours}
                  onChange={(e) => setHours(parseInt(e.target.value))}
                  className="w-full accent-red-600 cursor-pointer h-2 bg-neutral-800 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-neutral-500 mt-1">
                  <span>1 hr (Quick)</span>
                  <span>4 hrs (Half Day)</span>
                  <span>8 hrs (Full Day)</span>
                </div>
              </div>

              {/* Reels Count Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    Finished Edited Reels
                  </label>
                  <span className="text-sm font-bold text-white bg-white/10 px-2.5 py-0.5 rounded-md">
                    {reelsCount} {reelsCount === 1 ? 'Reel' : 'Reels'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="8"
                  step="1"
                  value={reelsCount}
                  onChange={(e) => setReelsCount(parseInt(e.target.value))}
                  className="w-full accent-red-600 cursor-pointer h-2 bg-neutral-800 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-neutral-500 mt-1">
                  <span>1 Reel</span>
                  <span>4 Reels</span>
                  <span>8 Reels</span>
                </div>
              </div>

              {/* Add-ons Toggles */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                  Cinema Add-ons
                </label>
                <div className="space-y-2">
                  
                  <label className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={includeDrone}
                        onChange={(e) => setIncludeDrone(e.target.checked)}
                        className="accent-red-600 w-4 h-4 rounded"
                      />
                      <span className="text-xs text-neutral-200">4K Drone Aerial Cinematography</span>
                    </div>
                    <span className="text-xs font-semibold text-neutral-400">+₹3,500</span>
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={includeSecondShooter}
                        onChange={(e) => setIncludeSecondShooter(e.target.checked)}
                        className="accent-red-600 w-4 h-4 rounded"
                      />
                      <span className="text-xs text-neutral-200">Second Creator (Dual Camera Angles)</span>
                    </div>
                    <span className="text-xs font-semibold text-neutral-400">+₹2,500</span>
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={includeProResSSD}
                        onChange={(e) => setIncludeProResSSD(e.target.checked)}
                        className="accent-red-600 w-4 h-4 rounded"
                      />
                      <span className="text-xs text-neutral-200">ProRes RAW SSD Export & Archive</span>
                    </div>
                    <span className="text-xs font-semibold text-neutral-400">+₹1,500</span>
                  </label>

                </div>
              </div>

            </div>

            {/* Right Summary Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-red-950/40 via-[#121217] to-black rounded-2xl p-6 border border-red-500/30 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-400">
                  Estimated Shoot Price
                </span>

                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-xl text-neutral-400 font-bold">₹</span>
                  <span className="text-5xl font-black text-white font-heading tracking-tight">
                    {total.toLocaleString('en-IN')}
                  </span>
                </div>
                <span className="text-xs text-neutral-400 block mt-1">+ 18% GST</span>

                <div className="mt-6 pt-6 border-t border-white/10 space-y-2.5 text-xs text-neutral-300">
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Delivery Speed:</span>
                    <span className="font-bold text-red-400">~{estimatedMinutes} Minutes On-Site</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Gear Unit:</span>
                    <span className="text-white">iPhone 16 Pro Max + Rig</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Audio Setup:</span>
                    <span className="text-white">Rode Wireless Pro 32-bit</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Raw Footage:</span>
                    <span className="text-white">Full AirDrop Included</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={handleBookEstimate}
                  className="w-full btn-primary py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <span>Lock In Quote & Reserve</span>
                  <span>→</span>
                </button>
                <p className="text-[10px] text-center text-neutral-400 font-light">
                  No payment required today. Pay after shoot completion.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
window.Calculator = Calculator;
