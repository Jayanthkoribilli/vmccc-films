// =========================================================
// Reel Showcase Component — VMCCC.FILMS (White & Maroon Luxury Theme)
// Instagram ID: @vmccc.films | Hotline: 8341667106
// =========================================================

function ReelShowcase({ onSelectReelForModal, onBookStyle }) {
  const [activeFilter, setActiveFilter] = React.useState("all");
  const reels = window.VMCCC_DATA.reels;

  const categories = [
    { label: "All Reels", key: "all" },
    { label: "Weddings & Luxury", key: "wedding" },
    { label: "Celebrations & Parties", key: "party" },
    { label: "Fun BTS & Candid", key: "bts" }
  ];

  const filteredReels = activeFilter === "all" 
    ? reels 
    : reels.filter(r => r.categoryKey === activeFilter);

  return (
    <section id="showcase" className="py-20 md:py-28 relative bg-white border-t border-[#700104]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#700104]/20 bg-[#700104]/5 text-[#700104] text-xs font-bold uppercase tracking-wider mb-3">
              Official Instagram Work • @vmccc.films
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
              Featured Reels & <br />
              <span className="text-[#700104] font-serif-luxury italic">
                Cinematic Keepsakes
              </span>
            </h2>
            <p className="mt-3 text-neutral-600 font-normal text-sm sm:text-base">
              Explore authentic wedding reels created by VMCCC.FILMS. Every reel shot on iPhone 16 Pro Max ProRes Log, color-graded on-site, and delivered in minutes.
            </p>
          </div>

          {/* Slot Hotline Box */}
          <div className="bg-white px-5 py-3 rounded-2xl flex items-center gap-3 border border-[#700104]/20 shadow-md self-start md:self-auto">
            <div className="w-10 h-10 rounded-xl bg-[#700104] text-white flex items-center justify-center font-bold text-lg shadow-sm">
              📞
            </div>
            <div>
              <div className="text-xs text-neutral-500 uppercase tracking-wider font-bold">Book This Style</div>
              <a href="tel:8341667106" className="text-sm font-extrabold text-[#700104] hover:text-[#94101E] transition-colors">
                Call 8341667106
              </a>
            </div>
          </div>
        </div>

        {/* Category Filters Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveFilter(cat.key)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                activeFilter === cat.key
                  ? 'bg-[#700104] text-white shadow-md'
                  : 'bg-[#FAF8F6] text-neutral-700 hover:bg-neutral-200 border border-neutral-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 9:16 Vertical Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredReels.map((reel) => {
            return (
              <div
                key={reel.id}
                onClick={() => onSelectReelForModal(reel)}
                className="group relative rounded-3xl overflow-hidden bg-white cursor-pointer border border-[#700104]/15 hover:border-[#700104] transition-all duration-300 shadow-md hover:shadow-2xl hover:-translate-y-1"
              >
                {/* 9:16 Aspect Container */}
                <div className="relative aspect-[9/16] w-full bg-black overflow-hidden">
                  
                  {/* Poster Image */}
                  <img
                    src={reel.poster}
                    alt={reel.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/75 backdrop-blur-md text-white border border-white/20">
                      {reel.category}
                    </span>

                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#700104] text-white flex items-center gap-1 shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                      {reel.turnaround}
                    </span>
                  </div>

                  {/* Center Play Icon with Instagram badge */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none gap-2">
                    <div className="w-14 h-14 rounded-full bg-[#700104]/90 backdrop-blur-md text-white flex items-center justify-center group-hover:scale-110 group-hover:bg-[#700104] transition-all shadow-xl">
                      <svg className="w-6 h-6 translate-x-0.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                    <span className="text-[11px] font-bold text-white bg-black/70 px-2.5 py-0.5 rounded-full border border-white/20 shadow">
                      Watch Reel Preview
                    </span>
                  </div>

                  {/* Bottom Vignette & Information */}
                  <div className="absolute inset-x-0 bottom-0 p-5 pt-14 bg-gradient-to-t from-black via-black/85 to-transparent z-10 flex flex-col justify-end text-left space-y-2">
                    
                    {/* Metrics Bar */}
                    <div className="flex items-center gap-4 text-xs font-semibold text-neutral-200">
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        {reel.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 text-red-400 fill-red-400" viewBox="0 0 24 24">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                        {reel.likes}
                      </span>
                      <span className="text-[#F3E5C8] ml-auto font-bold font-mono">@vmccc.films</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white group-hover:text-[#F3E5C8] transition-colors line-clamp-1">
                      {reel.title}
                    </h3>

                    <div className="text-xs text-neutral-300 flex items-center justify-between">
                      <span className="truncate">{reel.client}</span>
                    </div>

                    {/* Quick Actions: Direct Instagram link & Book */}
                    <div className="pt-2 flex items-center justify-between gap-2">
                      <a
                        href={reel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-[11px] font-bold text-white/90 hover:text-white flex items-center gap-1 underline underline-offset-4"
                      >
                        <span>Instagram Link</span>
                        <span>↗</span>
                      </a>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onBookStyle(reel);
                        }}
                        className="text-[11px] font-bold px-3 py-1.5 rounded-full bg-[#700104] hover:bg-[#94101E] text-white transition-all shadow"
                      >
                        Book Style →
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
window.ReelShowcase = ReelShowcase;
