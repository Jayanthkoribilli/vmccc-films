// =========================================================
// Booking Form Component — VMCCC.FILMS (White & Maroon Luxury Theme)
// Instagram ID: @vmccc.films | Hotline: 8341667106
// =========================================================

function BookingForm({ selectedPackage, onBookingComplete }) {
  const brand = window.VMCCC_DATA.brand;

  const [formData, setFormData] = React.useState({
    fullName: "",
    phone: "",
    email: "",
    city: "Hyderabad",
    date: "",
    timeSlot: "Evening Golden Hour (4:00 PM - 7:00 PM)",
    packageChoice: selectedPackage ? selectedPackage.formValue : "Wedding - Moments Basic (₹14,999)",
    instagram: "",
    notes: ""
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  React.useEffect(() => {
    if (selectedPackage) {
      setFormData(prev => ({
        ...prev,
        packageChoice: selectedPackage.formValue || selectedPackage.name
      }));
    }
  }, [selectedPackage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppBooking = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert("Please enter your name and phone number to continue.");
      return;
    }

    const message = `Hello VMCCC.FILMS! 🎥%0A%0AI would like to book a slot for a cinematic reel shoot:%0A• Client Name: ${encodeURIComponent(formData.fullName)}%0A• Mobile: ${encodeURIComponent(formData.phone)}%0A• City: ${encodeURIComponent(formData.city)}%0A• Event Date: ${encodeURIComponent(formData.date || "Next available")}%0A• Preferred Slot: ${encodeURIComponent(formData.timeSlot)}%0A• Package: ${encodeURIComponent(formData.packageChoice)}%0A• Instagram: ${encodeURIComponent(formData.instagram || "N/A")}%0A• Notes: ${encodeURIComponent(formData.notes || "None")}%0A%0APlease confirm slot availability!`;

    const whatsappUrl = `https://wa.me/918341667106?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleDirectReserve = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert("Please enter your name and phone number to continue.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onBookingComplete(formData);
    }, 1000);
  };

  return (
    <section id="booking-section" className="py-20 md:py-28 relative border-t border-[#700104]/10 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#700104]/20 bg-[#700104]/5 text-[#700104] text-xs font-bold uppercase tracking-wider mb-3">
            Priority Slot Booking Hotline
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Reserve Your Shoot Slot
          </h2>
          <p className="mt-4 text-base text-neutral-600 font-normal leading-relaxed">
            Directly connect with our creative director. Call <a href="tel:8341667106" className="text-[#700104] font-bold underline">8341667106</a> or submit your details below for instant slot confirmation.
          </p>

          {/* Large Hotline Banner in Deep Maroon */}
          <div className="mt-6 p-4 rounded-2xl bg-[#700104] text-white border border-[#520002] flex flex-wrap items-center justify-between gap-4 max-w-xl mx-auto shadow-xl">
            <div className="flex items-center gap-3 text-left">
              <span className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-xl">
                📞
              </span>
              <div>
                <span className="text-[10px] text-[#F3E5C8] font-bold uppercase tracking-wider">Slot Booking Mobile</span>
                <a href="tel:8341667106" className="text-xl font-extrabold text-white hover:text-[#F3E5C8] transition-colors block">
                  8341667106
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="tel:8341667106"
                className="px-4 py-2 rounded-xl bg-white text-[#700104] text-xs font-extrabold uppercase tracking-wider hover:bg-neutral-100 transition-colors shadow"
              >
                Call Now
              </a>
              <a
                href="https://wa.me/918341667106?text=Hi%20VMCCC.FILMS!%20I%20would%20like%20to%20book%20a%20slot%20for%20a%20cinematic%20reel%20shoot."
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold uppercase tracking-wider transition-colors shadow"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Selected Package Banner if active */}
        {selectedPackage && (
          <div className="mb-8 p-4 rounded-2xl bg-[#FAF2F3] border border-[#700104]/30 flex items-center justify-between gap-4 animate-fadeIn">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-[#700104] text-white flex items-center justify-center font-bold text-sm">
                ✓
              </span>
              <div>
                <span className="text-xs text-[#700104] uppercase tracking-wider font-bold">Selected Plan:</span>
                <h4 className="text-sm font-bold text-neutral-900">{selectedPackage.name} {selectedPackage.price ? `(₹${selectedPackage.price})` : ''}</h4>
              </div>
            </div>
            <a href="#packages" className="text-xs text-[#700104] font-semibold hover:underline">Change Plan</a>
          </div>
        )}

        {/* Form Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#700104]/15 shadow-xl">
          <form className="space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="e.g. Aryan & Sneha"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-[#FAF8F6] border border-neutral-300 rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#700104] focus:bg-white transition-colors"
                />
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2">
                  WhatsApp Mobile Number *
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-neutral-500 font-bold">
                    +91
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="83416 67106"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[#FAF8F6] border border-neutral-300 rounded-xl pl-14 pr-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#700104] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* City Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2">
                  Event City / Venue *
                </label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full bg-[#FAF8F6] border border-neutral-300 rounded-xl px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-[#700104] focus:bg-white transition-colors"
                >
                  {brand.activeCities.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* Shoot Date */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2">
                  Event Date *
                </label>
                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-[#FAF8F6] border border-neutral-300 rounded-xl px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-[#700104] focus:bg-white transition-colors"
                />
              </div>

              {/* Time Slot */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2">
                  Preferred Time Slot
                </label>
                <select
                  name="timeSlot"
                  value={formData.timeSlot}
                  onChange={handleChange}
                  className="w-full bg-[#FAF8F6] border border-neutral-300 rounded-xl px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-[#700104] focus:bg-white transition-colors"
                >
                  <option value="Morning Ceremony (6:30 AM - 11:30 AM)">Morning Ceremony (6:30 AM - 11:30 AM)</option>
                  <option value="Afternoon Haldi / Mehendi (1:00 PM - 5:00 PM)">Afternoon Haldi / Mehendi (1:00 PM - 5:00 PM)</option>
                  <option value="Evening Golden Hour & Varmala (4:30 PM - 8:30 PM)">Evening Golden Hour & Varmala (4:30 PM - 8:30 PM)</option>
                  <option value="Sangeet & Reception Night (7:00 PM - 12:00 AM)">Sangeet & Reception Night (7:00 PM - 12:00 AM)</option>
                  <option value="Full Day Wedding Access">Full Day Wedding Access</option>
                </select>
              </div>

              {/* Package Choice */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2">
                  Package
                </label>
                <select
                  name="packageChoice"
                  value={formData.packageChoice}
                  onChange={handleChange}
                  className="w-full bg-[#FAF8F6] border border-neutral-300 rounded-xl px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-[#700104] focus:bg-white transition-colors"
                >
                  <option value="Wedding - Moments Basic (₹14,999)">Wedding - Moments Basic (₹14,999)</option>
                  <option value="Wedding - Royal Celebration (₹39,999)">Wedding - Royal Celebration (₹39,999)</option>
                  <option value="Wedding - Imperial Luxe (₹79,999)">Wedding - Imperial Luxe (₹79,999)</option>
                  <option value="Hourly - Quick Shoot (₹1,999)">Hourly - Quick Shoot (₹1,999)</option>
                  <option value="Half Day - Creator Sprint (₹4,999)">Half Day - Creator Sprint (₹4,999)</option>
                  <option value="Full Day - Content Sprint (₹9,999)">Full Day - Content Sprint (₹9,999)</option>
                  <option value="Business - Brand Spotlight (₹12,499)">Business - Brand Spotlight (₹12,499)</option>
                  <option value="Business - Monthly Retainer (₹34,999/mo)">Business - Monthly Retainer (₹34,999/mo)</option>
                </select>
              </div>

            </div>

            {/* Instagram Handle & Notes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2">
                  Your Instagram Handle (Optional)
                </label>
                <input
                  type="text"
                  name="instagram"
                  placeholder="@yourhandle"
                  value={formData.instagram}
                  onChange={handleChange}
                  className="w-full bg-[#FAF8F6] border border-neutral-300 rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#700104] focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2">
                  Special Story / Songs / Notes
                </label>
                <input
                  type="text"
                  name="notes"
                  placeholder="Specific romantic songs, entry moments or vibes"
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full bg-[#FAF8F6] border border-neutral-300 rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#700104] focus:bg-white transition-colors"
                />
              </div>
            </div>

            {/* Dual CTAs: WhatsApp Direct & Online Reserve */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              
              <button
                type="button"
                onClick={handleWhatsAppBooking}
                className="flex-1 py-4 px-6 rounded-xl font-bold text-xs uppercase tracking-wider bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2.5 transition-all shadow-md"
              >
                <span>Book Slot on WhatsApp (8341667106)</span>
                <span>↗</span>
              </button>

              <button
                type="submit"
                onClick={handleDirectReserve}
                disabled={isSubmitting}
                className="flex-1 btn-primary py-4 px-6 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
              >
                {isSubmitting ? (
                  <span>Securing Slot...</span>
                ) : (
                  <>
                    <span>Confirm Shoot Online</span>
                    <span>→</span>
                  </>
                )}
              </button>

            </div>

            <p className="text-[11px] text-center text-neutral-500 font-medium pt-2">
              🔒 10-minute on-site reel delivery guarantee • AirDrop directly to couple on ceremony day.
            </p>

          </form>
        </div>

      </div>
    </section>
  );
}
window.BookingForm = BookingForm;
