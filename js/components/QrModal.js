// =========================================================
// Instagram QR Modal Component — VMCCC.FILMS (White & Maroon)
// =========================================================

function QrModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-sm rounded-3xl p-6 sm:p-8 bg-white border border-[#700104]/20 shadow-2xl text-center space-y-4">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-neutral-800 text-lg font-bold"
        >
          ✕
        </button>

        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#700104]">
          Official Instagram Profile
        </span>

        <h3 className="text-2xl font-bold text-neutral-900 font-serif-luxury italic">
          @vmccc.films
        </h3>

        <p className="text-xs text-neutral-600 font-normal">
          Scan this QR code with your phone camera to follow our latest reels, BTS, and stories.
        </p>

        {/* QR Code Container */}
        <div className="p-3 bg-white rounded-2xl shadow-md max-w-[220px] mx-auto border-2 border-[#700104]/20">
          <img
            src="assets/instagram_qr.png"
            alt="Instagram QR VMCCC.FILMS"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Direct Link */}
        <div className="pt-2">
          <a
            href="https://www.instagram.com/vmccc.films/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-xl text-xs font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-90 text-white flex items-center justify-center gap-2 shadow"
          >
            <span>Open @vmccc.films on Instagram</span>
            <span>↗</span>
          </a>
        </div>

        <p className="text-[11px] text-neutral-500">
          Slot booking hotline: <a href="tel:8341667106" className="text-[#700104] font-bold">8341667106</a>
        </p>

      </div>
    </div>
  );
}
window.QrModal = QrModal;
