// =========================================================
// Confirmation Modal Component — VMCCC.FILMS (White & Maroon)
// =========================================================

function ConfirmationModal({ bookingData, onClose }) {
  if (!bookingData) return null;

  const bookingRef = `VMCCC-${Math.floor(1000 + Math.random() * 9000)}`;

  const whatsappConfirmationUrl = `https://wa.me/918341667106?text=Hi%20VMCCC.FILMS!%20I%20just%20reserved%20a%20slot%20online%20(Ref%3A%20${bookingRef})%20for%20${encodeURIComponent(bookingData.fullName)}.%20Please%20confirm!`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md rounded-3xl p-6 sm:p-8 bg-white border border-[#700104]/20 shadow-2xl text-center">
        
        {/* Celebration Icon in Maroon */}
        <div className="w-16 h-16 rounded-full bg-[#700104] text-white flex items-center justify-center text-3xl mx-auto shadow-lg mb-5">
          ✨
        </div>

        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#700104]">
          Slot Reserved
        </span>

        <h3 className="text-2xl font-bold text-neutral-900 mt-1 mb-2 font-serif-luxury italic">
          Your Shoot is Locked!
        </h3>

        <p className="text-xs text-neutral-600 font-normal mb-6">
          Reference Code: <span className="font-mono font-bold text-[#700104] bg-[#FAF2F3] px-2 py-0.5 rounded border border-[#700104]/20">{bookingRef}</span>
        </p>

        {/* Shoot Summary Ticket */}
        <div className="bg-[#FAF8F6] rounded-2xl p-4 border border-neutral-200 text-left space-y-2.5 text-xs mb-6">
          <div className="flex justify-between">
            <span className="text-neutral-500">Client:</span>
            <span className="font-bold text-neutral-900">{bookingData.fullName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-500">WhatsApp:</span>
            <span className="font-bold text-neutral-900">{bookingData.phone}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-500">City / Venue:</span>
            <span className="font-bold text-neutral-900">{bookingData.city}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-500">Event Date:</span>
            <span className="font-bold text-neutral-900">{bookingData.date || "Next Available"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-500">Package:</span>
            <span className="font-bold text-[#700104]">{bookingData.packageChoice}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-500">Slot Hotline:</span>
            <span className="font-bold text-neutral-900">8341667106</span>
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
            className="w-full py-2.5 rounded-xl font-semibold text-xs text-neutral-500 hover:text-neutral-900"
          >
            Close Receipt
          </button>
        </div>

      </div>
    </div>
  );
}
window.ConfirmationModal = ConfirmationModal;
