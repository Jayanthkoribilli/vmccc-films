// =========================================================
// Confirmation Modal Component — vmccc.films (Updated 8341667106)
// =========================================================

function ConfirmationModal({ bookingData, onClose }) {
  if (!bookingData) return null;

  const bookingRef = `VMCCC-${Math.floor(1000 + Math.random() * 9000)}`;

  const whatsappConfirmationUrl = `https://wa.me/918341667106?text=Hi%20vmccc.films!%20I%20just%20reserved%20a%20slot%20online%20(Ref%3A%20${bookingRef})%20for%20${encodeURIComponent(bookingData.fullName)}.%20Please%20confirm!`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-md rounded-3xl p-6 sm:p-8 glass-panel border border-[#E2BA65]/40 shadow-[0_0_60px_rgba(112,1,4,0.4)] text-center">
        
        {/* Animated Celebration Icon */}
        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#700104] to-[#B51B2B] text-white flex items-center justify-center text-3xl mx-auto shadow-lg mb-5 border border-[#E2BA65]/40">
          ✨
        </div>

        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E2BA65]">
          Slot Reserved
        </span>

        <h3 className="text-2xl font-bold text-white mt-1 mb-2 font-serif-luxury italic">
          Your Wedding Shoot is Locked!
        </h3>

        <p className="text-xs text-neutral-300 font-light mb-6">
          Reference Code: <span className="font-mono font-bold text-white bg-white/10 px-2 py-0.5 rounded border border-[#E2BA65]/30">{bookingRef}</span>
        </p>

        {/* Shoot Summary Ticket */}
        <div className="bg-[#160B0E] rounded-2xl p-4 border border-white/10 text-left space-y-2.5 text-xs mb-6">
          <div className="flex justify-between">
            <span className="text-neutral-400">Client:</span>
            <span className="font-semibold text-white">{bookingData.fullName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-400">WhatsApp:</span>
            <span className="font-semibold text-white">{bookingData.phone}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-400">Location:</span>
            <span className="font-semibold text-white">{bookingData.displayLocation || bookingData.city}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-400">Event Date:</span>
            <span className="font-semibold text-white">{bookingData.date || "Next Available"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-400">Package:</span>
            <span className="font-semibold text-[#E2BA65]">{bookingData.packageChoice}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-400">Slot Hotline:</span>
            <span className="font-semibold text-white">8341667106</span>
          </div>
        </div>

        {/* Direct WhatsApp Confirmation CTA */}
        <div className="space-y-3">
          <a
            href={whatsappConfirmationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 shadow"
          >
            <span>Confirm Instant on WhatsApp (8341667106)</span>
            <span>↗</span>
          </a>

          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl font-semibold text-xs text-neutral-400 hover:text-white"
          >
            Close Receipt
          </button>
        </div>

      </div>
    </div>
  );
}
window.ConfirmationModal = ConfirmationModal;
