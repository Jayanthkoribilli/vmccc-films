// =========================================================
// Creator Apply Modal Component — vmccc.films
// =========================================================

function CreatorApplyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [submitted, setSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    city: "Hyderabad",
    phoneModel: "iPhone 16 Pro Max",
    instagramUrl: "",
    experience: "1-3 Years"
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-3xl p-6 sm:p-8 glass-panel border border-white/20 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-neutral-400 hover:text-white text-lg font-bold"
        >
          ✕
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-600/20 text-red-400 border border-red-500/30">
                Creator Collective Recruitment
              </span>
              <h3 className="text-2xl font-bold text-white mt-3">
                Shoot with vmccc.films
              </h3>
              <p className="text-xs text-neutral-400 font-light mt-1">
                Earn ₹40,000 - ₹1,20,000/month as a verified mobile cinema director in your city.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#121217] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-red-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#121217] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                    City
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-[#121217] border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-red-500"
                  >
                    {window.VMCCC_DATA.brand.activeCities.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                    Primary Camera Device
                  </label>
                  <select
                    value={formData.phoneModel}
                    onChange={(e) => setFormData({ ...formData, phoneModel: e.target.value })}
                    className="w-full bg-[#121217] border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-red-500"
                  >
                    <option value="iPhone 16 Pro Max">iPhone 16 Pro Max</option>
                    <option value="iPhone 16 Pro">iPhone 16 Pro</option>
                    <option value="iPhone 15 Pro Max">iPhone 15 Pro Max</option>
                    <option value="iPhone 15 Pro">iPhone 15 Pro</option>
                    <option value="Sony FX3 / FX30">Sony FX3 / Cinema Camera</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                    Reel Experience
                  </label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full bg-[#121217] border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-red-500"
                  >
                    <option value="Under 1 Year">Under 1 Year</option>
                    <option value="1-3 Years">1-3 Years</option>
                    <option value="3+ Years">3+ Years Professional</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                  Instagram Profile / Portfolio Link
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://instagram.com/yourhandle"
                  value={formData.instagramUrl}
                  onChange={(e) => setFormData({ ...formData, instagramUrl: e.target.value })}
                  className="w-full bg-[#121217] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-red-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full btn-primary py-3 rounded-xl font-bold text-xs uppercase tracking-wider"
                >
                  Submit Creator Application
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-3xl mx-auto border border-emerald-500/30">
              ✓
            </div>
            <h3 className="text-2xl font-bold text-white">Application Received!</h3>
            <p className="text-xs text-neutral-300 max-w-sm mx-auto font-light leading-relaxed">
              Our creative director will review your Instagram portfolio and contact you on WhatsApp within 24 hours for the 6-Tier audition shoot.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold"
            >
              Done
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
window.CreatorApplyModal = CreatorApplyModal;
