// =========================================================
// Instagram QR Modal Component — vmccc.films
// =========================================================

function QrModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-sm rounded-3xl p-6 sm:p-8 glass-panel border border-[#E2BA65]/40 shadow-[0_0_60px_rgba(112,1,4,0.4)] text-center space-y-4">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-white text-lg font-bold"
        >
          ✕
        </button>

        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#E2BA65]">
          Official Instagram Profile
        </span>

        <h3 className="text-xl font-bold text-white font-serif-luxury italic">
          @vmccc.films_
        </h3>

        <p className="text-xs text-neutral-300 font-light">
          Scan this QR code with your phone camera to follow our latest wedding reels, BTS, and stories.
        </p>

        {/* QR Code Container */}
        <div className="p-3 bg-white rounded-2xl shadow-xl max-w-[220px] mx-auto border-2 border-[#E2BA65]/50">
          <img
            src="assets/instagram_qr.png"
            alt="Instagram QR VMCCC.FILMS"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Direct Link */}
        <div className="pt-2">
          <a
            href="https://www.instagram.com/vmccc.films_/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-xl text-xs font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-90 text-white flex items-center justify-center gap-2 shadow-md"
          >
            <span>Open @vmccc.films_ on Instagram</span>
            <span>↗</span>
          </a>
        </div>

        <p className="text-[11px] text-neutral-400">
          Slot booking hotline: <a href="tel:8341667106" className="text-[#E2BA65] font-bold">8341667106</a>
        </p>

      </div>
    </div>
  );
}
window.QrModal = QrModal;
