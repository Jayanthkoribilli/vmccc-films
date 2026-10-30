// =========================================================
// Booking Form Component — VMCCC.FILMS
// Dynamic State -> District -> City/Town Selector for All India
// Default Example: State: Andhra Pradesh, District: NTR District, City: Vijayawada
// Hotline: 8341667106
// =========================================================

function BookingForm({ selectedPackage, onBookingComplete }) {
  const brand = window.VMCCC_DATA.brand;
  const locations = window.INDIAN_LOCATIONS || {};

  // Default values matching user's exact example: Andhra Pradesh -> NTR District -> Vijayawada
  const [formData, setFormData] = React.useState({
    fullName: "",
    phone: "",
    email: "",
    state: "Andhra Pradesh",
    district: "NTR District",
    city: "Vijayawada",
    customCity: "",
    date: "",
    timeSlot: "Evening Golden Hour & Varmala (4:30 PM - 8:30 PM)",
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

  // Derived options based on current selections
  const availableStates = Object.keys(locations);
  const availableDistricts = formData.state && locations[formData.state] ? Object.keys(locations[formData.state]) : [];
  const availableCities = formData.state && formData.district && locations[formData.state] && locations[formData.state][formData.district]
    ? locations[formData.state][formData.district]
    : [];

  const handleStateChange = (e) => {
    const newState = e.target.value;
    const districtsForState = locations[newState] ? Object.keys(locations[newState]) : [];
    const defaultDistrict = districtsForState[0] || "";
    const citiesForDistrict = defaultDistrict && locations[newState] && locations[newState][defaultDistrict] 
      ? locations[newState][defaultDistrict] 
      : [];
    const defaultCity = citiesForDistrict[0] || "";

    setFormData(prev => ({
      ...prev,
      state: newState,
      district: defaultDistrict,
      city: defaultCity,
      customCity: ""
    }));
  };

  const handleDistrictChange = (e) => {
    const newDistrict = e.target.value;
    const citiesForDistrict = formData.state && locations[formData.state] && locations[formData.state][newDistrict]
      ? locations[formData.state][newDistrict]
      : [];
    const defaultCity = citiesForDistrict[0] || "";

    setFormData(prev => ({
      ...prev,
      district: newDistrict,
      city: defaultCity,
      customCity: ""
    }));
  };

  const handleCityChange = (e) => {
    const newCity = e.target.value;
    setFormData(prev => ({
      ...prev,
      city: newCity,
      customCity: newCity.includes("Other") ? prev.customCity : ""
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const getLocationDisplay = () => {
    const town = (formData.city.includes("Other") && formData.customCity) 
      ? formData.customCity 
      : formData.city;
    return `${town}, ${formData.district}, ${formData.state}`;
  };

  const handleWhatsAppBooking = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert("Please enter your name and phone number to continue.");
      return;
    }

    const locationText = getLocationDisplay();

    const message = `Hello vmccc.films! 🎥%0A%0AI would like to book a slot for a wedding / cinematic shoot:%0A• Client Name: ${encodeURIComponent(formData.fullName)}%0A• Mobile: ${encodeURIComponent(formData.phone)}%0A• State: ${encodeURIComponent(formData.state)}%0A• District: ${encodeURIComponent(formData.district)}%0A• City / Town: ${encodeURIComponent(formData.customCity || formData.city)}%0A• Event Date: ${encodeURIComponent(formData.date || "Next available")}%0A• Preferred Slot: ${encodeURIComponent(formData.timeSlot)}%0A• Package: ${encodeURIComponent(formData.packageChoice)}%0A• Instagram: ${encodeURIComponent(formData.instagram || "N/A")}%0A• Notes: ${encodeURIComponent(formData.notes || "None")}%0A%0APlease confirm slot availability!`;

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
      onBookingComplete({
        ...formData,
        displayLocation: getLocationDisplay()
      });
    }, 1000);
  };

  const isOtherCitySelected = formData.city && formData.city.includes("Other");

  return (
    <section id="booking-section" className="py-20 md:py-28 relative border-t border-[#E2BA65]/15 bg-gradient-to-b from-[#0B0708] via-[#160A0D] to-[#0B0708]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E2BA65]/35 bg-[#700104]/30 text-[#F3E5C8] text-xs font-semibold uppercase tracking-wider mb-3">
            Priority Slot Booking Hotline
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Reserve Your Wedding Slot
          </h2>
          <p className="mt-4 text-base text-neutral-400 font-light leading-relaxed">
            Directly connect with our creative director. Call <a href="tel:8341667106" className="text-[#E2BA65] font-bold underline">8341667106</a> or submit your details below for instant slot confirmation.
          </p>

          {/* Large Hotline Banner */}
          <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-[#700104] via-[#94101E] to-[#700104] border border-[#E2BA65]/40 flex flex-wrap items-center justify-between gap-4 max-w-xl mx-auto shadow-xl">
            <div className="flex items-center gap-3 text-left">
              <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-xl">
                📞
              </span>
              <div>
                <span className="text-[10px] text-[#F3E5C8] font-bold uppercase tracking-wider">Slot Booking Mobile</span>
                <a href="tel:8341667106" className="text-xl font-extrabold text-white hover:text-[#E2BA65] transition-colors block">
                  8341667106
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="tel:8341667106"
                className="px-4 py-2 rounded-xl bg-white text-[#700104] text-xs font-extrabold uppercase tracking-wider hover:bg-[#F3E5C8] transition-colors shadow"
              >
                Call Now
              </a>
              <a
                href="https://wa.me/918341667106?text=Hi%20vmccc.films!%20I%20would%20like%20to%20book%20a%20slot%20for%20a%20wedding%20reel%20shoot."
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
          <div className="mb-8 p-4 rounded-2xl bg-[#700104]/30 border border-[#E2BA65]/40 flex items-center justify-between gap-4 animate-fadeIn">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-[#700104] text-[#E2BA65] flex items-center justify-center font-bold text-sm border border-[#E2BA65]/40">
                ✓
              </span>
              <div>
                <span className="text-xs text-[#E2BA65] uppercase tracking-wider font-semibold">Selected Plan:</span>
                <h4 className="text-sm font-bold text-white">{selectedPackage.name} {selectedPackage.price ? `(₹${selectedPackage.price})` : ''}</h4>
              </div>
            </div>
            <a href="#packages" className="text-xs text-neutral-400 hover:text-white underline">Change Plan</a>
          </div>
        )}

        {/* Form Container */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-[#E2BA65]/20 shadow-2xl">
          <form className="space-y-6">
            
            {/* Row 1: Full Name & Mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="e.g. Aryan & Sneha"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-[#160B0E] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#E2BA65] transition-colors"
                />
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  WhatsApp Mobile Number *
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-neutral-400 font-medium">
                    +91
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="83416 67106"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[#160B0E] border border-white/10 rounded-xl pl-14 pr-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#E2BA65] transition-colors"
                  />
                </div>
              </div>

            </div>

            {/* =========================================================
                Row 2: Dynamic Location Selectors (State -> District -> City)
                Preserves seamless booking with full Indian coverage
               ========================================================= */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#14080B] border border-[#E2BA65]/25 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="text-sm">📍</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E2BA65]">
                    Event Location Details
                  </span>
                </div>
                <span className="text-[11px] text-neutral-400">
                  Select State, District &amp; City/Town
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                {/* 1. State Dropdown */}
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    State *
                  </label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleStateChange}
                    className="w-full bg-[#1A0C10] border border-white/15 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#E2BA65] transition-colors"
                  >
                    {availableStates.map(stateName => (
                      <option key={stateName} value={stateName}>
                        {stateName}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 2. District Dropdown (Dynamically filtered by State) */}
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    District *
                  </label>
                  <select
                    name="district"
                    value={formData.district}
                    onChange={handleDistrictChange}
                    className="w-full bg-[#1A0C10] border border-white/15 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#E2BA65] transition-colors"
                  >
                    {availableDistricts.map(districtName => (
                      <option key={districtName} value={districtName}>
                        {districtName}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 3. City / Town Dropdown (Dynamically filtered by District) */}
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    City / Town *
                  </label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleCityChange}
                    className="w-full bg-[#1A0C10] border border-white/15 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#E2BA65] transition-colors"
                  >
                    {availableCities.map(cityName => (
                      <option key={cityName} value={cityName}>
                        {cityName}
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Supplementary Custom City/Town Input if Other is chosen */}
              {isOtherCitySelected && (
                <div className="pt-2 animate-fadeIn">
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#E2BA65] mb-1">
                    Specific Town / Mandal / Venue Name *
                  </label>
                  <input
                    type="text"
                    name="customCity"
                    required
                    placeholder="Enter your specific town, village, or wedding hall name"
                    value={formData.customCity}
                    onChange={handleChange}
                    className="w-full bg-[#1A0C10] border border-[#E2BA65]/40 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#E2BA65]"
                  />
                </div>
              )}

              {/* Selected Location Confirmation Pill */}
              <div className="flex items-center gap-2 text-[11px] text-[#F3E5C8] bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/5">
                <span className="text-[#E2BA65] font-bold">Selected Venue:</span>
                <span>{getLocationDisplay()}</span>
              </div>
            </div>

            {/* Row 3: Date, Time Slot & Package Choice */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

              {/* Shoot Date */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  Event Date *
                </label>
                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-[#160B0E] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E2BA65] transition-colors"
                />
              </div>

              {/* Time Slot */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  Preferred Time Slot
                </label>
                <select
                  name="timeSlot"
                  value={formData.timeSlot}
                  onChange={handleChange}
                  className="w-full bg-[#160B0E] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E2BA65] transition-colors"
                >
                  <option value="Morning Ceremony (6:30 AM - 11:30 AM)">Morning Ceremony (6:30 AM - 11:30 AM)</option>
                  <option value="Afternoon Haldi / Mehendi (1:00 PM - 5:00 PM)">Afternoon Haldi / Mehendi (1:00 PM - 5:00 PM)</option>
                  <option value="Evening Golden Hour & Varmala (4:30 PM - 8:30 PM)">Evening Golden Hour & Varmala (4:30 PM - 8:30 PM)</option>
                  <option value="Sangeet & Reception Night (7:00 PM - 12:00 AM)">Sangeet & Reception Night (7:00 PM - 12:00 AM)</option>
                  <option value="Full Day Wedding Access">Full Day Wedding Access</option>
                </select>
              </div>

              {/* Package Choice (Updated with Starting Price ₹1,500) */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  Package
                </label>
                <select
                  name="packageChoice"
                  value={formData.packageChoice}
                  onChange={handleChange}
                  className="w-full bg-[#160B0E] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E2BA65] transition-colors"
                >
                  <option value="Hourly - Quick Shoot (₹1,500)">Hourly - Quick Shoot (₹1,500)</option>
                  <option value="Wedding - Moments Basic (₹14,999)">Wedding - Moments Basic (₹14,999)</option>
                  <option value="Wedding - Royal Celebration (₹39,999)">Wedding - Royal Celebration (₹39,999)</option>
                  <option value="Wedding - Imperial Luxe (₹79,999)">Wedding - Imperial Luxe (₹79,999)</option>
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
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  Instagram Handle (Optional)
                </label>
                <input
                  type="text"
                  name="instagram"
                  placeholder="@brideorcouple"
                  value={formData.instagram}
                  onChange={handleChange}
                  className="w-full bg-[#160B0E] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#E2BA65] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  Ceremony Notes &amp; Special Requests
                </label>
                <input
                  type="text"
                  name="notes"
                  placeholder="e.g. Groom entry smoke fireworks, Bride solo bridal walk"
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full bg-[#160B0E] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#E2BA65] transition-colors"
                />
              </div>
            </div>

            {/* Submit Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-white/10">
              
              <div className="text-xs text-neutral-400 text-center sm:text-left">
                <span className="text-emerald-400 font-semibold">⚡ Instant Slot Lock</span> &bull; 100% on-site delivery guarantee &bull; Hotline: 8341667106
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Chat &amp; Reserve via WhatsApp</span>
                  <span>↗</span>
                </button>

                <button
                  type="button"
                  onClick={handleDirectReserve}
                  disabled={isSubmitting}
                  className="btn-primary px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Confirming Slot...</span>
                  ) : (
                    <>
                      <span>Reserve Shoot Slot</span>
                      <span>→</span>
                    </>
                  )}
                </button>
              </div>

            </div>

          </form>
        </div>

      </div>
    </section>
  );
}

window.BookingForm = BookingForm;
