// =========================================================
// Main App Component — vmccc.films (Updated)
// =========================================================

function App() {
  const [selectedPackage, setSelectedPackage] = React.useState(null);
  const [modalReel, setModalReel] = React.useState(null);
  const [isCreatorModalOpen, setIsCreatorModalOpen] = React.useState(false);
  const [isQrModalOpen, setIsQrModalOpen] = React.useState(false);
  const [confirmedBooking, setConfirmedBooking] = React.useState(null);

  // Smooth scroll to booking section
  const scrollToBooking = (pkg = null) => {
    if (pkg) {
      setSelectedPackage(pkg);
    }
    const element = document.getElementById("booking-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectPackage = (pkg) => {
    setSelectedPackage(pkg);
    scrollToBooking(pkg);
  };

  const handleApplyCustomQuote = (customConfig) => {
    setSelectedPackage(customConfig);
    scrollToBooking(customConfig);
  };

  const handleBookStyle = (reel) => {
    const stylePackage = {
      name: `${reel.category} Wedding Shoot`,
      price: "14,999",
      formValue: `Style Booking: ${reel.title} (${reel.category})`,
      deliverables: [
        `Curated in the visual style of "${reel.title}"`,
        "Shot on iPhone 16 Pro Max ProRes Log",
        "Color-graded with signature romantic LUTs",
        "AirDropped directly on-site"
      ]
    };
    setSelectedPackage(stylePackage);
    scrollToBooking(stylePackage);
  };

  const handleWatchShowreel = () => {
    if (window.VMCCC_DATA && window.VMCCC_DATA.reels && window.VMCCC_DATA.reels.length > 0) {
      setModalReel(window.VMCCC_DATA.reels[0]);
    }
  };

  const handleBookingComplete = (bookingData) => {
    setConfirmedBooking(bookingData);
  };

  return (
    <div className="min-h-screen bg-[#0B0708] text-white flex flex-col relative selection:bg-[#700104] selection:text-[#F3E5C8]">
      
      {/* Navigation Header */}
      <window.Navbar 
        onBookClick={() => scrollToBooking()}
        onOpenQrModal={() => setIsQrModalOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        
        {/* Hero Section */}
        <window.Hero 
          onBookClick={() => scrollToBooking()}
          onWatchShowreel={handleWatchShowreel}
          onOpenQrModal={() => setIsQrModalOpen(true)}
        />

        {/* Official About Us Section (from uploaded card) */}
        <window.AboutUs 
          onBookClick={() => scrollToBooking()}
        />

        {/* Interactive Reels Showcase (with user's real reels) */}
        <window.ReelShowcase 
          onSelectReelForModal={(reel) => setModalReel(reel)}
          onBookStyle={handleBookStyle}
        />

        {/* The 4-Step Shoot-to-Share Flow */}
        <window.HowItWorks 
          onBookClick={() => scrollToBooking()}
        />

        {/* Pricing Packages Matrix */}
        <window.Packages 
          onSelectPackage={handleSelectPackage}
        />

        {/* Custom Shoot Cost & Budget Estimator */}
        <window.Calculator 
          onApplyCustomQuote={handleApplyCustomQuote}
        />

        {/* Why Us Comparison Table */}
        <window.Comparison 
          onBookClick={() => scrollToBooking()}
        />

        {/* Cinema Gear Spotlight */}
        <window.GearSpotlight />

        {/* Testimonials & Verified Stories */}
        <window.Testimonials />

        {/* Slot Booking Form with Hotline 8341667106 */}
        <window.BookingForm 
          selectedPackage={selectedPackage}
          onBookingComplete={handleBookingComplete}
        />

        {/* FAQ Accordion */}
        <window.FAQ />
      </main>

      {/* Footer */}
      <window.Footer 
        onBookClick={() => scrollToBooking()}
        onOpenQrModal={() => setIsQrModalOpen(true)}
      />

      {/* Fullscreen Reel Player Modal */}
      {modalReel && (
        <window.ReelModal 
          reel={modalReel}
          onClose={() => setModalReel(null)}
          onBookReelStyle={(reel) => {
            setModalReel(null);
            handleBookStyle(reel);
          }}
        />
      )}

      {/* Instagram QR Code Modal */}
      <window.QrModal 
        isOpen={isQrModalOpen}
        onClose={() => setIsQrModalOpen(false)}
      />

      {/* Instant Booking Confirmation Modal */}
      {confirmedBooking && (
        <window.ConfirmationModal 
          bookingData={confirmedBooking}
          onClose={() => setConfirmedBooking(null)}
        />
      )}

    </div>
  );
}

// Mount React Root
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
