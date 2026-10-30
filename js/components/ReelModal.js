// =========================================================
// Reel Fullscreen Modal Component — vmccc.films (With Real Instagram Link)
// =========================================================

function ReelModal({ reel, onClose, onBookReelStyle }) {
  if (!reel) return null;

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl animate-fadeIn">
      
      {/* Close button outside */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all z-50 text-xl font-bold"
      >
        ✕
      </button>

      {/* Modal Container */}
      <div 
        className="relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-3xl bg-[#12090B] border border-[#E2BA65]/35 shadow-[0_0_60px_rgba(112,1,4,0.4)] flex flex-col justify-between p-6 space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#700104] text-[#F3E5C8] border border-[#E2BA65]/30">
              {reel.category}
            </span>
            <span className="text-xs text-neutral-300 font-medium">
              {reel.turnaround}
            </span>
          </div>

          <a
            href="tel:8341667106"
            className="text-xs font-bold text-[#E2BA65] hover:text-white flex items-center gap-1"
          >
            <span>📞 8341667106</span>
          </a>
        </div>

        {/* Instagram Reel Container */}
        <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-black border border-white/10 shadow-inner">
          <iframe
            src={reel.embedUrl || `https://www.instagram.com/reel/${reel.reelId}/embed/`}
            className="w-full h-full"
            frameBorder="0"
            scrolling="no"
            allowTransparency="true"
            allow="encrypted-media"
            title={reel.title}
          />
        </div>

        {/* Bottom Details & Actions */}
        <div className="space-y-3 pt-2 text-left">
          
          <div>
            <div className="text-xs text-[#E2BA65] font-semibold">{reel.client}</div>
            <h3 className="text-xl font-bold text-white mt-0.5 leading-tight">{reel.title}</h3>
            <p className="text-xs text-neutral-300 mt-1 font-light leading-relaxed">
              Shot by verified VMCCC.FILMS filmmakers on iPhone 16 Pro Max. Color-graded with custom LUTs.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href={reel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-xl text-xs font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-90 text-white flex items-center justify-center gap-1.5 shadow-md"
            >
              <span>Watch on Instagram</span>
              <span>↗</span>
            </a>

            <button
              onClick={() => onBookReelStyle(reel)}
              className="flex-1 btn-primary py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5"
            >
              <span>Book This Style</span>
              <span>→</span>
            </button>
          </div>

          <div className="text-center pt-2">
            <a
              href="https://wa.me/918341667106?text=Hi%20vmccc.films!%20I%20loved%20this%20reel%20and%20want%20to%20book%20a%20similar%20wedding%20slot."
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold flex items-center justify-center gap-1.5"
            >
              <span>💬 Direct WhatsApp Slot Confirmation (8341667106)</span>
            </a>
          </div>

        </div>

      </div>

    </div>
  );
}
window.ReelModal = ReelModal;
