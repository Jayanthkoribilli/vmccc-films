// =========================================================
// Interactive Shoot Cost Estimator — VMCCC.FILMS (White & Maroon Luxury Theme)
// Instagram ID: @vmccc.films | Hotline: 8341667106
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
        includeSecondShooter ? "Dual Camera Directors" : "Lead Cinema Filmmaker",
        includeProResSSD ? "ProRes RAW Master SSD Dump" : "Direct AirDrop / Cloud Transfer"
      ]
    };
    onApplyCustomQuote(customConfig);
  };

  return (
    <section id="calculator" className="py-20 md:py-28 relative border-t border-[#700104]/10 bg-[#FAF8F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#700104] mb-3">
            Custom Quote Engine
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Build Your Custom Shoot
          </h2>
          <p className="mt-4 text-base text-neutral-600 font-normal leading-relaxed">
            Need something unique? Adjust hours, reel deliverables, and cinema add-ons in real time. Get an instant, binding price estimate with zero guesswork.
          </p>
        </div>

        {/* Calculator Interactive Box */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-[#700104]/15 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Shoot Type Buttons */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-3">
                  Shoot Category
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "fashion", label: "Fashion & Lifestyle" },
                    { id: "cafe", label: "Cafe & Dining" },
                    { id: "wedding", label: "Wedding Moments" },
                    { id: "auto", label: "Automobile & Tech" },
                    { id: "corporate", label: "Brand & Founder" },
                    { id: "event", label: "Celebration & Party" }
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setShootType(t.id)}
                      className={`px-3 py-2.5 rounded-xl text-xs font-bold border text-center transition-all ${
                        shootType === t.id
                          ? 'bg-[#700104] border-[#700104] text-white shadow-sm'
                          : 'bg-[#FAF8F6] border-neutral-200 text-neutral-700 hover:border-[#700104]/40'
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
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                    Shoot Duration
                  </label>
                  <span className="text-sm font-bold text-[#700104] bg-[#FAF2F3] px-2.5 py-0.5 rounded-md border border-[#700104]/15">
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
                  className="w-full accent-[#700104] cursor-pointer h-2 bg-neutral-200 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-neutral-500 mt-1 font-medium">
                  <span>1 hr (Quick)</span>
                  <span>4 hrs (Half Day)</span>
                  <span>8 hrs (Full Day)</span>
                </div>
              </div>

              {/* Reels Count Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                    Finished Edited Reels
                  </label>
                  <span className="text-sm font-bold text-[#700104] bg-[#FAF2F3] px-2.5 py-0.5 rounded-md border border-[#700104]/15">
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
                  className="w-full accent-[#700104] cursor-pointer h-2 bg-neutral-200 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-neutral-500 mt-1 font-medium">
                  <span>1 Reel</span>
                  <span>4 Reels</span>
                  <span>8 Reels</span>
                </div>
              </div>

              {/* Add-ons Toggles */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                  Cinema Add-ons
                </label>
                <div className="space-y-2">
                  
                  <label className="flex items-center justify-between p-3 rounded-xl bg-[#FAF8F6] border border-neutral-200 hover:border-[#700104]/30 cursor-pointer transition-colors">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={includeDrone}
                        onChange={(e) => setIncludeDrone(e.target.checked)}
                        className="accent-[#700104] w-4 h-4 rounded"
                      />
                      <span className="text-xs font-medium text-neutral-800">4K Drone Aerial Cinematography</span>
                    </div>
                    <span className="text-xs font-bold text-[#700104]">+₹3,500</span>
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-xl bg-[#FAF8F6] border border-neutral-200 hover:border-[#700104]/30 cursor-pointer transition-colors">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={includeSecondShooter}
                        onChange={(e) => setIncludeSecondShooter(e.target.checked)}
                        className="accent-[#700104] w-4 h-4 rounded"
                      />
                      <span className="text-xs font-medium text-neutral-800">Second Creator (Dual Camera Angles)</span>
                    </div>
                    <span className="text-xs font-bold text-[#700104]">+₹2,500</span>
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-xl bg-[#FAF8F6] border border-neutral-200 hover:border-[#700104]/30 cursor-pointer transition-colors">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={includeProResSSD}
                        onChange={(e) => setIncludeProResSSD(e.target.checked)}
                        className="accent-[#700104] w-4 h-4 rounded"
                      />
                      <span className="text-xs font-medium text-neutral-800">ProRes RAW SSD Export & Archive</span>
                    </div>
                    <span className="text-xs font-bold text-[#700104]">+₹1,500</span>
                  </label>

                </div>
              </div>

            </div>

            {/* Right Summary Card in Deep Maroon */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#700104] to-[#94101E] text-white rounded-2xl p-6 shadow-xl flex flex-col justify-between space-y-6 border border-[#520002]">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F3E5C8]">
                  Estimated Shoot Price
                </span>

                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-xl text-white/80 font-bold">₹</span>
                  <span className="text-5xl font-black text-white font-heading tracking-tight">
                    {total.toLocaleString('en-IN')}
                  </span>
                </div>
                <span className="text-xs text-white/70 block mt-1">+ 18% GST</span>

                <div className="mt-6 pt-6 border-t border-white/20 space-y-2.5 text-xs text-white/90 font-medium">
                  <div className="flex justify-between">
                    <span className="text-white/70">Delivery Speed:</span>
                    <span className="font-bold text-[#F3E5C8]">~{estimatedMinutes} Minutes On-Site</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Gear Unit:</span>
                    <span className="text-white">iPhone 16 Pro Max Rig</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Audio Setup:</span>
                    <span className="text-white">Rode Wireless Pro 32-bit</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Raw Footage:</span>
                    <span className="text-white">Full AirDrop Included</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={handleBookEstimate}
                  className="w-full bg-white hover:bg-neutral-100 text-[#700104] py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all"
                >
                  <span>Lock In Quote & Reserve</span>
                  <span>→</span>
                </button>
                <p className="text-[10px] text-center text-white/70 font-normal">
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
