// =========================================================
// FAQ Component — VMCCC.FILMS (White & Maroon Luxury Theme)
// Instagram ID: @vmccc.films | Hotline: 8341667106
// =========================================================

function FAQ() {
  const faqs = window.VMCCC_DATA.faqs;
  const [openIndex, setOpenIndex] = React.useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 relative border-t border-[#700104]/10 bg-[#FAF8F6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#700104] mb-3">
            Got Questions?
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-neutral-600 font-normal leading-relaxed">
            Everything you need to know about our filmmakers, gear, on-site 10-minute delivery, and booking terms.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#700104]/15 overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-[#FAF8F6] transition-colors"
                >
                  <span className={`text-base sm:text-lg font-bold pr-4 transition-colors ${
                    isOpen ? 'text-[#700104]' : 'text-neutral-900'
                  }`}>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen ? 'rotate-180 bg-[#700104] text-white shadow-sm' : 'text-neutral-500 bg-[#FAF8F6] border border-neutral-200'
                  }`}>
                    ↓
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm text-neutral-600 font-normal leading-relaxed border-t border-neutral-100 pt-4 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
window.FAQ = FAQ;
