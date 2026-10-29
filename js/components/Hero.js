// =========================================================
// Hero Component — vmccc.films (Updated Burgundy/Gold & 8341667106)
// =========================================================

function Hero({ onBookClick, onWatchShowreel, onOpenQrModal }) {
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [isMuted, setIsMuted] = React.useState(true);
  const [liked, setLiked] = React.useState(false);
  const [likeCount, setLikeCount] = React.useState(148500);
  const [selectedCity, setSelectedCity] = React.useState("Hyderabad");
  const [shootDate, setShootDate] = React.useState("");
  const [checkResult, setCheckResult] = React.useState(null);
  const videoRef = React.useRef(null);
  const brand = window.VMCCC_DATA.brand;

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleLike = () => {
    if (!liked) {
      setLiked(true);
      setLikeCount(prev => prev + 1);
    } else {
      setLiked(false);
      setLikeCount(prev => prev - 1);
    }
  };

  const handleCheckAvailability = (e) => {
    e.preventDefault();
    setCheckResult({
      status: "available",
      message: `Slots available in ${selectedCity}! Call 8341667106 for priority confirmation.`
    });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#0B0708]">
      {/* Ambient background glows in burgundy */}
      <div className="ambient-glow-top"></div>
      <div className="ambient-glow-center top-1/4 left-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Value Proposition, Action */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Eyebrow Pill with Official Handle */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E2BA65]/35 bg-[#700104]/25 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#E2BA65] animate-ping"></span>
              <span className="w-2 h-2 rounded-full bg-[#E2BA65] -ml-4"></span>
              <span className="text-xs font-semibold tracking-wider uppercase text-[#F3E5C8]">
                Wedding Content Creators • @vmccc.films_
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold text-white leading-[1.08] tracking-tight">
              Capturing Moments Into <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3E5C8] via-[#E2BA65] to-[#B88E35] font-serif-luxury italic">
                Cherished Keepsakes.
              </span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl font-light text-neutral-300">
                Wedding Reels in 10 Minutes.
              </span>
            </h1>

            {/* Official Manifesto from Uploaded Card */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              As wedding content creators, we capture and share the unique stories of couples on their special day. We tell your love story through stunning visuals, heartfelt narratives and fun BTS — delivered on-site while the magic is still alive.
            </p>

            {/* Slot Booking Hotline Bar */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#700104]/40 via-[#94101E]/30 to-[#12090B] border border-[#E2BA65]/30 flex flex-wrap items-center justify-between gap-3 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5 text-left">
                <span className="w-8 h-8 rounded-xl bg-[#700104] border border-[#E2BA65]/40 flex items-center justify-center text-sm shadow">
                  📞
                </span>
                <div>
                  <span className="text-[10px] text-[#E2BA65] font-bold uppercase tracking-wider block">Slot Booking Mobile</span>
                  <a href="tel:8341667106" className="text-base font-extrabold text-white hover:text-[#E2BA65] transition-colors">
                    +91 8341667106
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={brand.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
                >
                  <span>WhatsApp</span>
                  <span>↗</span>
                </a>
                <button
                  onClick={onOpenQrModal}
                  className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#F3E5C8] text-xs font-semibold border border-white/10"
                >
                  QR Code
                </button>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onBookClick}
                className="btn-primary w-full sm:w-auto px-8 py-4 rounded-full font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 group shadow-xl"
              >
                <span>Book Shoot Slot · From ₹1,999</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>

              <button
                onClick={onWatchShowreel}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-[#E2BA65]/30 hover:border-[#E2BA65] text-[#F3E5C8] font-medium text-xs flex items-center justify-center gap-2.5 transition-all bg-white/[0.03] hover:bg-white/[0.08]"
              >
                <div className="w-6 h-6 rounded-full bg-[#700104] flex items-center justify-center text-[#E2BA65] text-xs">
                  ▶
                </div>
                <span>Watch Wedding Reels</span>
              </button>
            </div>

            {/* City & Date Checker Widget */}
            <div className="glass-panel p-4 rounded-2xl max-w-xl mx-auto lg:mx-0 shadow-lg border border-[#E2BA65]/20 mt-4">
              <form onSubmit={handleCheckAvailability} className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <label className="block text-[11px] font-medium text-neutral-400 uppercase tracking-wider mb-1">
                    Event City
                  </label>
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full bg-[#160B0E] border border-white/10 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-[#E2BA65]"
                  >
                    {brand.activeCities.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div className="flex-1">
                  <label className="block text-[11px] font-medium text-neutral-400 uppercase tracking-wider mb-1">
                    Event Date
                  </label>
                  <input
                    type="date"
                    value={shootDate}
                    onChange={(e) => setShootDate(e.target.value)}
                    className="w-full bg-[#160B0E] border border-white/10 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-[#E2BA65]"
                  />
                </div>

                <div className="sm:self-end">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#700104] hover:bg-[#94101E] text-white text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap border border-[#E2BA65]/30"
                  >
                    Check Slot
                  </button>
                </div>
              </form>

              {checkResult && (
                <div className="mt-3 text-xs text-[#E2BA65] flex items-center gap-2 bg-[#700104]/30 border border-[#E2BA65]/30 px-3 py-2 rounded-lg">
                  <span>✓</span>
                  <span>{checkResult.message}</span>
                </div>
              )}
            </div>

            {/* Trust Metric Micro-Bar */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-neutral-400">
              <div className="flex items-center gap-1.5">
                <span className="text-[#E2BA65] text-sm">★★★★★</span>
                <span className="text-white font-semibold">4.9</span>
                <span>(2,400+ couples & clients)</span>
              </div>
              <span className="text-neutral-600">•</span>
              <div className="flex items-center gap-1.5">
                <span className="text-white font-medium">10-Min Live Delivery Guarantee</span>
              </div>
              <span className="text-neutral-600 hidden sm:inline">•</span>
              <div className="text-neutral-300 font-medium hidden sm:block">
                Shot on iPhone 16 Pro Max
              </div>
            </div>

          </div>

          {/* Right Column: Interactive iPhone Mockup displaying Reel */}
          <div className="lg:col-span-5 flex justify-center relative">
            
            {/* Ambient behind phone */}
            <div className="absolute inset-0 bg-[#700104]/30 rounded-full blur-[90px] -z-10"></div>

            <div className="phone-mockup">
              <div className="phone-island"></div>
              
              <div className="phone-screen group relative">
                {/* Real Video from assets/vamcyyy.mp4 */}
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  src="assets/vamcyyy.mp4"
                  playsInline
                  autoPlay
                  loop
                  muted={isMuted}
                />

                {/* Top Overlay Badge */}
                <div className="absolute top-12 left-4 right-4 flex items-center justify-between z-30">
                  <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#E2BA65]/30">
                    <span className="w-2 h-2 rounded-full bg-[#E2BA65] animate-pulse"></span>
                    <span className="text-[10px] font-semibold text-white uppercase tracking-wider">
                      vmccc.films_ 4K
                    </span>
                  </div>

                  <button
                    onClick={toggleMute}
                    className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-white hover:bg-black/90 transition-colors"
                  >
                    {isMuted ? "🔇" : "🔊"}
                  </button>
                </div>

                {/* Center Play/Pause button on tap */}
                <div 
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center cursor-pointer z-20"
                >
                  {!isPlaying && (
                    <div className="w-14 h-14 rounded-full bg-black/70 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-2xl">
                      <svg className="w-6 h-6 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Right Instagram Actions Column */}
                <div className="absolute right-3 bottom-24 flex flex-col items-center gap-4 z-30">
                  {/* Like Button */}
                  <div className="flex flex-col items-center">
                    <button
                      onClick={handleLike}
                      className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-all ${
                        liked ? 'bg-[#700104] text-white scale-110' : 'bg-black/50 text-white hover:bg-black/70'
                      }`}
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                    </button>
                    <span className="text-[11px] font-semibold text-white mt-1 drop-shadow-md">
                      {(likeCount / 1000).toFixed(1)}k
                    </span>
                  </div>

                  {/* Comment Button */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <span className="text-[11px] font-semibold text-white mt-1 drop-shadow-md">2.1k</span>
                  </div>

                  {/* Share Button */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white">
                      <svg className="w-5 h-5 -rotate-12 translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </div>
                    <span className="text-[11px] font-semibold text-white mt-1 drop-shadow-md">Share</span>
                  </div>
                </div>

                {/* Bottom Instagram Captions Overlay */}
                <div className="absolute left-3 right-16 bottom-5 z-30 text-left space-y-1.5">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full overflow-hidden bg-white flex items-center justify-center p-0.5 border border-[#E2BA65]">
                      <img src="assets/logo.png" alt="logo" className="w-full h-full object-contain" />
                    </div>
                    <span className="text-xs font-bold text-white drop-shadow-md">vmccc.films_</span>
                    <span className="px-1.5 py-0.2 rounded text-[9px] bg-[#700104] text-[#F3E5C8] font-medium border border-[#E2BA65]/30">Verified</span>
                  </div>

                  <p className="text-[11px] text-neutral-200 font-light leading-snug line-clamp-2 drop-shadow-md">
                    "Telling your love story through stunning visuals, heartfelt narratives & fun BTS ✨"
                  </p>

                  <div className="flex items-center gap-1.5 text-[10px] text-[#E2BA65] font-medium">
                    <span>♫</span>
                    <span className="truncate">vmccc.films_ • Romantic Vows Original Audio</span>
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none z-10"></div>
              </div>
            </div>

            {/* Floating Hotline Badge next to phone */}
            <div className="hidden sm:flex absolute -bottom-6 -left-8 glass-panel px-4 py-3 rounded-2xl border border-[#E2BA65]/30 shadow-2xl items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#700104] border border-[#E2BA65]/40 flex items-center justify-center text-white font-bold text-base">
                📞
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-white">Call 8341667106</span>
                <span className="text-[10px] text-[#E2BA65]">Instant Slot Reservation</span>
              </div>
            </div>

          </div>

        </div>

        {/* Global Statistics Counter Bar */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {window.VMCCC_DATA.stats.map((stat, idx) => (
            <div key={idx} className="text-center lg:text-left glass-card p-5 rounded-2xl border border-[#E2BA65]/15">
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F3E5C8] to-[#E2BA65]">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-neutral-200 mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-neutral-400 mt-0.5 font-light">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
window.Hero = Hero;
