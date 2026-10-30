// --- File: js/data.js ---
// =========================================================
// vmccc.films — Centralized Data & Content Store (Updated)
// =========================================================

window.VMCCC_DATA = {
  brand: {
    name: "vmccc.films",
    handle: "@vmccc.films",
    instagramUrl: "https://www.instagram.com/vmccc.films/",
    title: "VMCCC.FILMS | MAKE YOUR MOMENTS LOOK LIKE A MOVIE",
    tagline: "MAKE YOUR MOMENTS LOOK LIKE A MOVIE",
    submotto: "SHOOT • EDIT • DELIVER",
    subheading: "We capture and share the unique stories and moments of couples on their special day. We make your moments look like a movie through stunning visuals, heartfelt narratives and fun BTS.",
    
    // Official Slot Booking Details
    phone: "8341667106",
    phoneDisplay: "+91 8341667106",
    callUrl: "tel:8341667106",
    whatsappUrl: "https://wa.me/918341667106?text=Hi%20vmccc.films!%20I%20would%20like%20to%20book%20a%20slot%20for%20our%20cinematic%20reel%20shoot.",
    email: "vmccc.films@gmail.com",

    // Official Image Assets
    logo: "assets/logo.png",
    logoTransparent: "assets/logo_transparent.png",
    logoGold: "assets/logo_gold.png",
    logoWhite: "assets/logo_white.png",
    instagramQr: "assets/instagram_qr.png",
    aboutCard: "assets/about_card.jpg",
    movieCard: "assets/movie_card.jpg",
    featuredVideo: "assets/vamcyyy.mp4",

    // About Us official manifesto
    aboutText: {
      title: "ABOUT US",
      handle: "vmccc.films",
      p1: "We capture and share the unique stories and moments of couples on their special day.",
      p2: "We understand the significance of the little moments and strive to make your moments look like a movie through stunning visuals, heartfelt narratives and fun BTS.",
      p3: "Let us turn your celebration into a cherished keepsake."
    },

    rating: "4.9",
    totalReels: "1,50,000+",
    citiesCount: "Pan-India Coverage",
    activeCities: [
      "Hyderabad", "Mumbai", "Delhi NCR", "Bengaluru", 
      "Goa", "Pune", "Jaipur", "Chennai", "Kolkata"
    ]
  },

  stats: [
    { value: "10 Mins", label: "On-Site Reel Delivery", sub: "Cut, graded & dropped live" },
    { value: "4K 60FPS", label: "Cinema Quality Standard", sub: "Shot on iPhone 16 Pro Max ProRes" },
    { value: "1,50,000+", label: "Reels & BTS Delivered", sub: "Cherished cinematic keepsakes" },
    { value: "100%", label: "Heartfelt Narratives", sub: "SHOOT • EDIT • DELIVER" }
  ],

  howItWorks: [
    {
      step: "01",
      title: "Reserve Your Slot",
      desc: "Call or WhatsApp 8341667106 or pick your package online. We confirm creator dispatch for your wedding or event date.",
      badge: "Instant Slot Booking",
      icon: "calendar"
    },
    {
      step: "02",
      title: "Content Creator Deployed",
      desc: "Our verified filmmaker arrives with the mobile cinema rig — iPhone 16 Pro Max, gimbal, wireless mics, and lighting.",
      badge: "Arrives On Time",
      icon: "camera"
    },
    {
      step: "03",
      title: "Heartfelt Moments & BTS",
      desc: "We capture candid laughter, couple chemistry, family blessings, and trending hooks without intrusive heavy equipment.",
      badge: "Fun BTS & Vows",
      icon: "clapperboard"
    },
    {
      step: "04",
      title: "Delivered in 10 Minutes",
      desc: "Color-graded with our signature cinematic LUTs and synced to trending romantic audio. AirDropped directly to you on-site.",
      badge: "Post Live While It's Fresh",
      icon: "zap"
    }
  ],

  // Provided real Instagram Reels
  reels: [
    {
      id: "reel-1",
      reelId: "DebwAFPo-nj",
      url: "https://www.instagram.com/reel/DebwAFPo-nj/?utm_source=ig_web_copy_link&dlrf=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
      embedUrl: "https://www.instagram.com/reel/DebwAFPo-nj/embed/",
      title: "Love Story & Vows Keepsake",
      category: "Weddings & Luxury",
      categoryKey: "wedding",
      views: "1.4M",
      likes: "128K",
      duration: "0:30",
      audio: "vmccc.films • Romantic Original Audio",
      poster: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
      client: "Aanya & Kabir • Wedding Story",
      turnaround: "Delivered in 12 mins on-site"
    },
    {
      id: "reel-2",
      reelId: "DaS3OWtJPfX",
      url: "https://www.instagram.com/reel/DaS3OWtJPfX/?utm_source=ig_web_copy_link&obrf=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
      embedUrl: "https://www.instagram.com/reel/DaS3OWtJPfX/embed/",
      title: "Golden Hour Couple Portrait",
      category: "Weddings & Luxury",
      categoryKey: "wedding",
      views: "2.8M",
      likes: "245K",
      duration: "0:25",
      audio: "vmccc.films • Acoustic Strings",
      poster: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80",
      client: "Rhea & Dev • Palace Wedding",
      turnaround: "Delivered during Reception"
    },
    {
      id: "reel-3",
      reelId: "Dc_hhQ6p9zH",
      url: "https://www.instagram.com/reel/Dc_hhQ6p9zH/?utm_source=ig_web_copy_link&srtk=MzRlODBiNWFlZA==",
      embedUrl: "https://www.instagram.com/reel/Dc_hhQ6p9zH/embed/",
      title: "High-Energy Sangeet Celebration",
      category: "Celebrations & Parties",
      categoryKey: "party",
      views: "1.9M",
      likes: "162K",
      duration: "0:28",
      audio: "vmccc.films • Sangeet Beat Drop",
      poster: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
      client: "Sangeet Dance Night",
      turnaround: "Delivered before dinner service"
    },
    {
      id: "reel-4",
      reelId: "Dc3JHldJvD9",
      url: "https://www.instagram.com/reel/Dc3JHldJvD9/?utm_source=ig_web_copy_link&vrfl=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
      embedUrl: "https://www.instagram.com/reel/Dc3JHldJvD9/embed/",
      title: "Fun Candid BTS & Special Moments",
      category: "BTS & Candid",
      categoryKey: "bts",
      views: "3.1M",
      likes: "290K",
      duration: "0:22",
      audio: "vmccc.films • Playful Acoustic BTS",
      poster: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      client: "Bridal Suite & Groom BTS",
      turnaround: "Delivered in 10 mins"
    },
    {
      id: "reel-5",
      reelId: "DeedyMhoFaY",
      url: "https://www.instagram.com/reel/DeedyMhoFaY/?utm_source=ig_web_copy_link&obrf=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
      embedUrl: "https://www.instagram.com/reel/DeedyMhoFaY/embed/",
      title: "Royal Grand Entry & Varmala",
      category: "Weddings & Luxury",
      categoryKey: "wedding",
      views: "2.4M",
      likes: "210K",
      duration: "0:30",
      audio: "vmccc.films • Grand Royalty Strings",
      poster: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      client: "Taj Falaknuma Varmala",
      turnaround: "Delivered right after Varmala"
    }
  ],

  packages: {
    hourly: [
      {
        id: "quick-shoot",
        name: "Quick Shoot",
        tagline: "For a single viral reel",
        price: "1,999",
        unit: "+ GST · per shoot",
        badge: "Fastest Turnaround",
        highlighted: false,
        formValue: "Hourly - Quick Shoot (₹1,999)",
        description: "1 hour of dedicated on-site shooting and editing for one hyper-polished Instagram reel.",
        deliverables: [
          "Up to 1 hour of professional coverage",
          "1 fully edited cinematic reel delivered",
          "10-minute on-site turnaround guarantee",
          "Shot on iPhone 16 Pro Max (4K 60fps ProRes)",
          "Wireless 32-bit float audio mic recording",
          "Trending audio sync & custom LUT grading",
          "Direct AirDrop / Google Drive transfer"
        ]
      },
      {
        id: "half-day",
        name: "Half Day Sprint",
        tagline: "For creators, cafes & social events",
        price: "4,999",
        unit: "+ GST · per shoot",
        badge: "Most Popular",
        highlighted: true,
        formValue: "Half Day - Creator Sprint (₹4,999)",
        description: "Up to 3 hours of dynamic multi-angle coverage designed to build your social presence.",
        deliverables: [
          "Up to 3 hours of on-location coverage",
          "3 fully edited viral reels",
          "First 2 reels delivered on-site in 15 mins",
          "Full raw B-roll footage dump included",
          "Director posing, choreography & hook advice",
          "Bi-color lighting setup & stabilization gimbal",
          "Full commercial & personal usage rights"
        ]
      },
      {
        id: "full-day",
        name: "Full Day Content Sprint",
        tagline: "Total content sprint for brands & influencers",
        price: "9,999",
        unit: "+ GST · per shoot",
        badge: "Best Value",
        highlighted: false,
        formValue: "Full Day - Content Sprint (₹9,999)",
        description: "Up to 6 hours of full production coverage with high-output turnaround.",
        deliverables: [
          "Up to 6 hours of on-site director coverage",
          "6 high-converting edited reels",
          "15+ styled vertical story clips & BTS",
          "3 reels delivered live on-site, remainder in 24h",
          "Multi-location support within city",
          "Dual wireless mic setup for podcast/interviews",
          "Unlimited cut revisions within 48 hours"
        ]
      }
    ],
    wedding: [
      {
        id: "wedding-basic",
        name: "Wedding Moments Basic",
        tagline: "Haldi, Mehendi or Engagement",
        price: "14,999",
        unit: "+ GST · single event",
        badge: "Essential",
        highlighted: false,
        formValue: "Wedding - Moments Basic (₹14,999)",
        description: "Capture the raw emotion, laughter, and fun BTS of your special celebration.",
        deliverables: [
          "Up to 5 hours of dedicated celebration coverage",
          "3 high-energy romantic & trendy reels",
          "Same-day reel export to post on Instagram stories",
          "Couple portrait & aesthetic slow-mo shots (120fps)",
          "Entire raw iPhone 16 Pro reel archive via AirDrop",
          "Formal attire professional cinema filmmaker"
        ]
      },
      {
        id: "wedding-silver",
        name: "Royal Celebration Silver",
        tagline: "The complete two-day wedding coverage",
        price: "39,999",
        unit: "+ GST · 2 days",
        badge: "Bride Favorite",
        highlighted: true,
        formValue: "Wedding - Royal Celebration (₹39,999)",
        description: "Two creators capturing both bride and groom perspectives seamlessly.",
        deliverables: [
          "2 Days of extensive wedding coverage (12 hrs total)",
          "2 Dedicated Creators (Bride & Groom perspectives)",
          "8 Cinematic Reels tailored to wedding aesthetics",
          "Next-morning Sangeet & Varmala fast teasers",
          "Drone 4K aerial venue & entry master shots",
          "Heartfelt vows & parents blessing audio overlay",
          "Hard drive backup of 4K ProRes master files"
        ]
      },
      {
        id: "wedding-luxe",
        name: "Imperial Luxury Keepsake",
        tagline: "For grand destination weddings",
        price: "79,999",
        unit: "+ GST · 3 days",
        badge: "Ultra Luxury",
        highlighted: false,
        formValue: "Wedding - Imperial Luxe (₹79,999)",
        description: "Full mobile cinema unit with same-night banquet screening.",
        deliverables: [
          "3 Days unlimited destination wedding coverage",
          "2 Senior Directors + 1 Dedicated Rapid Editor on-site",
          "14 Signature Reels + 1 Cinematic Teaser Film (2 mins)",
          "Same-night reel screening at Reception party",
          "Cinematic color grading matching Bollywood film LUTs",
          "Drone FPV dynamic tracking & crane angles",
          "VIP 24/7 coordinator & bespoke music clearance"
        ]
      }
    ],
    business: [
      {
        id: "brand-starter",
        name: "Brand Spotlight",
        tagline: "For cafes, fashion labels & restaurants",
        price: "12,499",
        unit: "+ GST · one-time shoot",
        badge: "Commercial",
        highlighted: false,
        formValue: "Business - Brand Spotlight (₹12,499)",
        description: "Showcase your menu, ambiance, products, and customer experience with high CTR.",
        deliverables: [
          "4 hours of specialized commercial shooting",
          "4 high-converting commercial reels (food/fashion/interiors)",
          "Macro food/product lenses + RGB ambient lighting",
          "Direct conversion hooks & trending audio curation",
          "High-CTR cover photo / thumbnail design",
          "Full commercial advertisement broadcast rights"
        ]
      },
      {
        id: "brand-monthly",
        name: "Monthly Growth Retainer",
        tagline: "Hands-free viral growth engine",
        price: "34,999",
        unit: "+ GST · per month",
        badge: "Best ROI",
        highlighted: true,
        formValue: "Business - Monthly Retainer (₹34,999/mo)",
        description: "Never worry about content again. We shoot, cut, and deliver 12 reels every month.",
        deliverables: [
          "4 Dedicated shoot sessions per month (1 every week)",
          "12 Custom edited cinematic reels per month",
          "Weekly delivery schedule optimized for algorithm peaks",
          "Content strategist consultation & monthly script bank",
          "Dedicated senior filmmaker assigned to your brand",
          "Monthly engagement & reach performance review"
        ]
      }
    ]
  },

  comparison: [
    {
      feature: "Reel Delivery Speed",
      vmccc: "10 to 15 Minutes On-Site",
      traditional: "3 to 6 Weeks Post-Shoot",
      winner: "vmccc"
    },
    {
      feature: "Starting Price",
      vmccc: "Transparent from ₹1,999",
      traditional: "₹25,000+ with hidden add-ons",
      winner: "vmccc"
    },
    {
      feature: "Slot Booking Hotline",
      vmccc: "Instant WhatsApp & Call (8341667106)",
      traditional: "Back-and-forth email quotes",
      winner: "vmccc"
    },
    {
      feature: "Native Aspect Ratio",
      vmccc: "Built for 9:16 Vertical Virality & Reels",
      traditional: "Cropped 16:9 Landscape Video",
      winner: "vmccc"
    },
    {
      feature: "Heartfelt BTS & Candid Content",
      vmccc: "Specialized in raw emotion & fun BTS",
      traditional: "Posed, rigid and staged only",
      winner: "vmccc"
    },
    {
      feature: "Trending Audio & Color Grading",
      vmccc: "Same-Day Licensed Audio & Apple Log LUTs",
      traditional: "Generic elevator music weeks later",
      winner: "vmccc"
    }
  ],

  testimonials: [
    {
      name: "Aanya & Kabir",
      role: "Bride & Groom • Royal Lake Palace",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      content: "VMCCC.FILMS made our wedding day unforgettable! While traditional videographers make you wait months, vmccc AirDropped 3 beautiful 4K reels while our reception party was still alive. Our family and friends watched it right there!",
      rating: 5,
      type: "Wedding Couple"
    },
    {
      name: "Rohit & Meera",
      role: "Bride & Groom • Goa Destination Wedding",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      content: "The little moments and candid BTS they captured were so heartfelt. They knew exactly how to make us laugh and feel comfortable in front of the lens. True keepsake artists!",
      rating: 5,
      type: "Destination Wedding"
    },
    {
      name: "Siddharth Verma",
      role: "Founder, D2C Fashion Label",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      content: "We book vmccc.films weekly for our brand drops. 10-minute on-site delivery is revolutionary for our social media marketing. Fast, reliable, and cinematic quality.",
      rating: 5,
      type: "Brand Partner"
    }
  ],

  gearList: [
    {
      name: "Apple iPhone 16 Pro Max",
      specs: "4K 120fps ProRes Apple Log, 5x Telephoto Prism, Ultra-wide cinematic macro.",
      badge: "Flagship Core"
    },
    {
      name: "DJI Osmo Mobile 6 Gimbal",
      specs: "ActiveTrack 6.0, buttery-smooth cinematic pan tilts, low-angle underslung mode.",
      badge: "Stabilization"
    },
    {
      name: "Rode Wireless PRO (32-bit Float)",
      specs: "Dual-channel studio audio, zero audio clipping, invisible lavalier integration.",
      badge: "Audio Precision"
    },
    {
      name: "Moment Anamorphic 1.33x Glass",
      specs: "Hollywood horizontal flare streaks, genuine anamorphic bokeh & cinema depth.",
      badge: "Optics"
    },
    {
      name: "Aputure Amaran MC Bi-Color Pocket Lights",
      specs: "96+ CRI studio color reproduction, magnetic mounting, seamless mood lighting.",
      badge: "Illumination"
    }
  ],

  faqs: [
    {
      q: "How do I book a slot with vmccc.films?",
      a: "You can book directly by calling or sending a WhatsApp message to our official slot booking number: 8341667106, or by selecting your package on this website. Our team will immediately confirm creator availability for your date."
    },
    {
      q: "How does vmccc.films deliver wedding reels in just 10 minutes?",
      a: "Our creators are trained speed-editors equipped with high-performance mobile editing setups (iPad Pro M4 and iPhone 16 Pro Max). Using custom pre-calibrated cinematic LUTs, instant clip trimming, and trending audio, we grade and export your reels right beside you before your celebration wraps."
    },
    {
      q: "What makes VMCCC.FILMS different from traditional videography?",
      a: "Traditional videographers shoot heavy landscape footage for 2-hour long documentary videos delivered months later. VMCCC.FILMS focuses on capturing the little moments, heartfelt vows, and fun BTS in vertical 9:16 format — color-graded and delivered on-site in 10 minutes so you can share your joy on Instagram while it's still happening!"
    },
    {
      q: "What equipment do vmccc.films creators use?",
      a: "Every verified vmccc creator shoots exclusively with the iPhone 16 Pro Max shooting in 4K ProRes Apple Log, combined with DJI gimbals, Rode Wireless 32-bit float microphones, Moment cinema lenses, and professional portable lighting."
    },
    {
      q: "Can I choose my favorite trending audio and songs?",
      a: "Yes! You can share your favorite Instagram sounds, romantic acoustic songs, or specific reels you love. Our directors will tailor the cuts to match the rhythm and beat drops of your selected music."
    },
    {
      q: "What is your cancellation and rescheduling policy?",
      a: "You can reschedule your shoot at zero penalty up to 24 hours before the booked time. In case of unexpected weather or date changes, we offer seamless rescheduling to any available date."
    }
  ]
};


// --- File: js/components/Navbar.js ---
// =========================================================
// Navbar Component — VMCCC.FILMS (White & Maroon Luxury Theme)
// Instagram ID: @vmccc.films | Hotline: 8341667106
// =========================================================

function Navbar({ onBookClick, onOpenQrModal }) {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const brand = window.VMCCC_DATA.brand;

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "About Us", href: "#about" },
    { name: "Reels Showcase", href: "#showcase" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Packages", href: "#packages" },
    { name: "Cost Estimator", href: "#calculator" },
    { name: "Why Us", href: "#comparison" },
    { name: "FAQ", href: "#faq" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* Top Slot Booking Notification Bar in Deep Maroon */}
      <div className="bg-[#700104] text-xs text-white border-b border-[#520002] py-2 px-4 text-center flex flex-wrap items-center justify-center gap-3 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-white text-[#700104] animate-pulse">
            SLOT BOOKING
          </span>
          <span className="font-medium text-white/90">Direct Hotline:</span>
          <a 
            href="tel:8341667106" 
            className="font-bold text-white hover:text-[#F3E5C8] transition-colors underline decoration-white/60 flex items-center gap-1"
          >
            📞 8341667106
          </a>
        </div>
        <span className="text-white/40 hidden sm:inline">•</span>
        <span className="hidden md:inline text-white/95 font-medium">
          ⚡ 10-Min On-Site Delivery • SHOOT • EDIT • DELIVER
        </span>
        <a 
          href={brand.whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white transition-colors ml-1 flex items-center gap-1 shadow-sm"
        >
          <span>Chat on WhatsApp</span>
        </a>
      </div>

      {/* Main Navigation Bar — Clean White Glass Canvas */}
      <nav className={`px-4 sm:px-8 py-2.5 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-[#700104]/15 shadow-md' 
          : 'bg-white/90 backdrop-blur-md border-b border-neutral-200/80 shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand Logo with Image — Perfectly integrates with White background */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="h-11 flex items-center justify-center group-hover:scale-105 transition-transform">
              <img 
                src="assets/logo.png" 
                alt="VMCCC.FILMS logo" 
                className="h-10 w-auto object-contain"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-heading font-extrabold text-lg tracking-tight text-[#700104] group-hover:text-[#94101E] transition-colors">
                VMCCC<span className="text-neutral-900">.FILMS</span>
              </span>
              <span className="text-[8px] font-bold tracking-[0.2em] text-[#700104] uppercase -mt-0.5">
                MAKE YOUR MOMENTS LOOK LIKE A MOVIE
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-7 text-xs font-semibold text-neutral-700">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="hover:text-[#700104] transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#700104] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Instagram ID Button */}
            <button
              onClick={onOpenQrModal}
              className="text-xs font-semibold px-3 py-2 rounded-full border border-[#700104]/25 text-[#700104] bg-[#700104]/5 hover:bg-[#700104] hover:text-white transition-all flex items-center gap-1.5 shadow-sm"
              title="Instagram @vmccc.films"
            >
              <span>📱</span>
              <span className="font-mono font-bold">@vmccc.films</span>
            </button>

            {/* Direct Call Button */}
            <a
              href="tel:8341667106"
              className="text-xs font-bold px-3.5 py-2 rounded-full border border-[#700104]/30 text-[#700104] bg-white hover:bg-[#700104] hover:text-white transition-all flex items-center gap-1.5 shadow-sm"
            >
              <span>📞</span>
              <span>8341667106</span>
            </a>

            {/* Primary Book Slot Button */}
            <button
              onClick={onBookClick}
              className="btn-primary text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full flex items-center gap-2 shadow-md"
            >
              <span>Book Slot</span>
              <span>→</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:8341667106"
              className="btn-primary text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 sm:hidden shadow"
            >
              <span>📞 Call</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-800 hover:text-[#700104] hover:bg-neutral-100 transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu — Clean White */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-neutral-200 bg-white rounded-2xl p-4 shadow-2xl animate-fadeIn">
            <div className="flex flex-col gap-2.5 text-sm font-medium text-neutral-800">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-[#700104]/5 hover:text-[#700104] transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-[#700104]">→</span>
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-neutral-200 flex flex-col gap-2">
                <a
                  href="tel:8341667106"
                  className="w-full text-center text-xs font-bold py-2.5 rounded-xl border border-[#700104]/30 bg-[#700104]/5 text-[#700104] flex items-center justify-center gap-2"
                >
                  <span>📞 Call Slot Booking: 8341667106</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQrModal();
                  }}
                  className="w-full text-center text-xs font-semibold py-2.5 rounded-xl border border-neutral-300 text-neutral-800 hover:border-[#700104]"
                >
                  Instagram: @vmccc.films
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookClick();
                  }}
                  className="w-full btn-primary text-xs font-bold uppercase tracking-wider py-3 rounded-xl flex items-center justify-center gap-2 shadow"
                >
                  <span>Book a Slot Now</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
window.Navbar = Navbar;


// --- File: js/components/Hero.js ---
// =========================================================
// Hero Component — VMCCC.FILMS (White & Maroon Luxury Theme)
// Tagline: MAKE YOUR MOMENTS LOOK LIKE A MOVIE
// Sub-motto: SHOOT • EDIT • DELIVER
// Instagram ID: @vmccc.films | Hotline: 8341667106
// =========================================================

function Hero({ onBookClick, onWatchShowreel, onOpenQrModal }) {
  const [selectedCity, setSelectedCity] = React.useState("Hyderabad");
  const [shootDate, setShootDate] = React.useState("");
  const [checkResult, setCheckResult] = React.useState(null);
  const brand = window.VMCCC_DATA.brand;

  const handleCheckAvailability = (e) => {
    e.preventDefault();
    setCheckResult({
      status: "available",
      message: `Slots available in ${selectedCity}! Call 8341667106 for priority confirmation.`
    });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white">
      {/* Ambient background glows in soft maroon blush */}
      <div className="ambient-glow-top"></div>
      <div className="ambient-glow-center top-1/4 left-1/4"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#700104]/[0.035] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Value Proposition, Action */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Eyebrow Pill with Official Brand & Sub-motto */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#700104]/20 bg-[#700104]/5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#700104] animate-ping"></span>
              <span className="w-2 h-2 rounded-full bg-[#700104] -ml-4"></span>
              <span className="text-xs font-bold tracking-wider uppercase text-[#700104]">
                VMCCC.FILMS • SHOOT • EDIT • DELIVER
              </span>
            </div>

            {/* Main Title featuring user's exact tagline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold text-neutral-900 leading-[1.08] tracking-tight">
              <span className="block text-2xl sm:text-3xl md:text-4xl font-heading tracking-widest text-neutral-800 uppercase mb-2">
                VMCCC.FILMS
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#700104] via-[#94101E] to-[#B51B2B] font-serif-luxury italic block">
                MAKE YOUR MOMENTS LOOK LIKE A MOVIE.
              </span>
              <span className="text-xs sm:text-sm font-bold tracking-[0.3em] text-[#C29B38] uppercase block mt-3 font-mono">
                SHOOT • EDIT • DELIVER
              </span>
            </h1>

            {/* Official Manifesto */}
            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              We capture and share the unique stories of couples and special celebrations on their day. We tell your story through stunning visuals, heartfelt narratives and fun BTS — color-graded and delivered on-site in 10 minutes.
            </p>

            {/* Slot Booking Hotline Bar */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#FAF2F3] via-white to-[#FAF2F3] border border-[#700104]/20 shadow-md flex flex-wrap items-center justify-between gap-3 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5 text-left">
                <span className="w-9 h-9 rounded-xl bg-[#700104] flex items-center justify-center text-sm text-white shadow">
                  📞
                </span>
                <div>
                  <span className="text-[10px] text-[#700104] font-bold uppercase tracking-wider block">Slot Booking Mobile</span>
                  <a href="tel:8341667106" className="text-base font-extrabold text-[#700104] hover:text-[#94101E] transition-colors">
                    +91 8341667106
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={brand.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow flex items-center gap-1.5"
                >
                  <span>WhatsApp</span>
                  <span>↗</span>
                </a>
                <button
                  onClick={onOpenQrModal}
                  className="px-3 py-1.5 rounded-xl bg-white hover:bg-neutral-50 text-[#700104] text-xs font-bold border border-[#700104]/25 shadow-sm"
                >
                  @vmccc.films
                </button>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onBookClick}
                className="btn-primary w-full sm:w-auto px-8 py-4 rounded-full font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 group shadow-lg"
              >
                <span>Book Shoot Slot · From ₹1,999</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>

              <button
                onClick={onWatchShowreel}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full border-2 border-[#700104]/30 hover:border-[#700104] text-[#700104] font-semibold text-xs flex items-center justify-center gap-2.5 transition-all bg-white hover:bg-[#700104]/5 shadow-sm"
              >
                <div className="w-6 h-6 rounded-full bg-[#700104] flex items-center justify-center text-white text-xs">
                  ▶
                </div>
                <span>Watch Cinematic Reels</span>
              </button>
            </div>

            {/* City & Date Checker Widget */}
            <div className="bg-white p-4 rounded-2xl max-w-xl mx-auto lg:mx-0 shadow-lg border border-[#700104]/15 mt-4">
              <form onSubmit={handleCheckAvailability} className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1">
                    Event City
                  </label>
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full bg-[#FAF8F6] border border-neutral-300 rounded-xl px-3 py-2 text-sm text-neutral-900 focus:outline-none focus:border-[#700104]"
                  >
                    {brand.activeCities.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div className="flex-1">
                  <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1">
                    Event Date
                  </label>
                  <input
                    type="date"
                    value={shootDate}
                    onChange={(e) => setShootDate(e.target.value)}
                    className="w-full bg-[#FAF8F6] border border-neutral-300 rounded-xl px-3 py-2 text-sm text-neutral-900 focus:outline-none focus:border-[#700104]"
                  />
                </div>

                <div className="sm:self-end">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#700104] hover:bg-[#94101E] text-white text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap shadow"
                  >
                    Check Slot
                  </button>
                </div>
              </form>

              {checkResult && (
                <div className="mt-3 text-xs text-[#700104] font-semibold flex items-center gap-2 bg-[#FDF2F3] border border-[#700104]/25 px-3 py-2 rounded-lg">
                  <span>✓</span>
                  <span>{checkResult.message}</span>
                </div>
              )}
            </div>

            {/* Trust Metric Micro-Bar */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-neutral-600">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="text-neutral-900 font-bold">⚡ 10-Min Live Delivery Guarantee</span>
              </div>
              <span className="text-neutral-300">•</span>
              <div className="flex items-center gap-1.5">
                <span className="text-[#700104] font-bold">SHOOT • EDIT • DELIVER</span>
              </div>
              <span className="text-neutral-300 hidden sm:inline">•</span>
              <div className="text-neutral-700 font-medium hidden sm:block">
                Shot on iPhone 16 Pro Max ProRes
              </div>
            </div>

          </div>

          {/* Right Column: Aesthetic Brand Movie Card Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* Ambient behind card */}
            <div className="absolute inset-0 bg-[#700104]/10 rounded-3xl blur-[60px] -z-10"></div>

            {/* Cinema Identity Card Container */}
            <div className="w-full max-w-md bg-white p-3.5 sm:p-4 rounded-3xl border border-[#700104]/20 shadow-[0_20px_50px_rgba(112,1,4,0.12)] relative group hover:border-[#700104]/40 transition-all duration-500">
              
              {/* Corner Accents */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#700104]"></div>
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#700104]"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#700104]"></div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#700104]"></div>

              {/* Exact Tagline Card Image */}
              <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-lg relative bg-black">
                <img
                  src="assets/movie_card.jpg"
                  alt="VMCCC.FILMS - MAKE YOUR MOMENTS LOOK LIKE A MOVIE - SHOOT EDIT DELIVER"
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              {/* Interactive Booking & Action Bar Under Card */}
              <div className="mt-4 p-3 rounded-2xl bg-[#FAF8F6] border border-neutral-200/80 space-y-3">
                <div className="flex items-center justify-between text-xs px-1">
                  <div className="flex items-center gap-1.5 text-neutral-800 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>Ready for Booking</span>
                  </div>
                  <span className="text-[#700104] font-bold text-[11px] uppercase tracking-wider">
                    Pan-India Service
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="tel:8341667106"
                    className="py-2.5 px-3 rounded-xl bg-[#700104] hover:bg-[#94101E] text-white text-xs font-bold transition-all shadow text-center flex items-center justify-center gap-1.5"
                  >
                    <span>📞 8341667106</span>
                  </a>

                  <a
                    href={brand.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow text-center flex items-center justify-center gap-1.5"
                  >
                    <span>💬 WhatsApp</span>
                  </a>
                </div>

                <button
                  onClick={onBookClick}
                  className="w-full btn-primary py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow flex items-center justify-center gap-1.5"
                >
                  <span>Reserve Date Online</span>
                  <span>→</span>
                </button>
              </div>

              {/* Floating Badges */}
              <div className="absolute -bottom-4 -left-3 bg-white px-3.5 py-2 rounded-xl border border-[#700104]/25 shadow-lg hidden sm:flex items-center gap-2">
                <span className="text-base">⚡</span>
                <span className="text-[11px] font-bold text-[#700104]">10-Min Delivery</span>
              </div>

              <div className="absolute -top-3 -right-3 bg-white px-3 py-1.5 rounded-xl border border-[#700104]/25 shadow-lg hidden sm:flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#700104] animate-pulse"></span>
                <span className="text-[10px] font-bold text-[#700104] uppercase tracking-wider">4K ProRes</span>
              </div>

            </div>

          </div>

        </div>

        {/* Global Statistics Counter Bar */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-neutral-200 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {window.VMCCC_DATA.stats.map((stat, idx) => (
            <div key={idx} className="text-center lg:text-left bg-white p-5 rounded-2xl border border-[#700104]/15 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#700104] font-heading">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-neutral-800 mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-neutral-500 mt-0.5 font-normal">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
window.Hero = Hero;


// --- File: js/components/AboutUs.js ---
// =========================================================
// About Us Component — VMCCC.FILMS (White & Maroon Luxury Theme)
// Instagram ID: @vmccc.films | Hotline: 8341667106
// =========================================================

function AboutUs({ onBookClick }) {
  const brand = window.VMCCC_DATA.brand;

  return (
    <section id="about" className="py-20 md:py-28 relative border-t border-[#700104]/10 bg-[#FAF8F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#700104]/20 bg-[#700104]/5 backdrop-blur-md mb-4">
            <span className="w-2 h-2 rounded-full bg-[#700104]"></span>
            <span className="text-xs font-bold tracking-widest uppercase text-[#700104]">
              SHOOT • EDIT • DELIVER
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
            About <span className="font-serif-luxury italic text-[#700104]">VMCCC.FILMS</span>
          </h2>
          <p className="mt-4 text-base text-neutral-600 font-normal leading-relaxed">
            MAKE YOUR MOMENTS LOOK LIKE A MOVIE — turning celebrations into cherished keepsakes through stunning visuals, heartfelt narratives and fun BTS.
          </p>
        </div>

        {/* Content Layout: Left About Card / Story + Right QR Code & Booking Hotline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Official About Us Card Image & Styled Manifesto */}
          <div className="lg:col-span-7 flex flex-col md:flex-row gap-6 items-center bg-white p-6 sm:p-8 rounded-3xl border border-[#700104]/15 shadow-lg relative overflow-hidden">
            
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#700104]/[0.03] rounded-full blur-3xl pointer-events-none"></div>

            {/* Official Image Preview with frame */}
            <div className="w-full md:w-56 shrink-0 rounded-2xl overflow-hidden border-2 border-[#700104]/20 shadow-md group">
              <img
                src="assets/about_card.jpg"
                alt="About VMCCC.FILMS"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Typography Story */}
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#700104]">
                <span>Our Philosophy</span>
                <span>•</span>
                <span className="text-neutral-500">MAKE YOUR MOMENTS LOOK LIKE A MOVIE</span>
              </div>

              <h3 className="text-2xl font-bold text-neutral-900 leading-tight font-serif-luxury italic">
                "We capture the unique stories of couples and celebrations."
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                <p>
                  We understand the profound significance of the little moments. From spontaneous bridal suite giggles to intimate vows and electric celebration dance floors.
                </p>
                <p>
                  We strive to make your moments look like a movie through <strong className="text-neutral-900 font-semibold">stunning visuals</strong>, <strong className="text-neutral-900 font-semibold">heartfelt narratives</strong>, and <strong className="text-neutral-900 font-semibold">fun BTS</strong> — delivered on-site within 10 to 15 minutes.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href="tel:8341667106"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#700104] hover:text-[#94101E] transition-colors"
                >
                  <span>📞 Call Slot Booking: 8341667106</span>
                  <span>→</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Official Instagram QR Card & Connect */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-[#700104]/15 shadow-lg flex flex-col items-center text-center space-y-5">
            
            <div className="w-12 h-12 rounded-2xl bg-[#700104] flex items-center justify-center text-xl shadow-md text-white">
              📸
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#700104]">
                Official Instagram
              </span>
              <h3 className="text-xl font-bold text-neutral-900 mt-1">
                Scan to Follow <span className="text-[#700104]">@vmccc.films</span>
              </h3>
              <p className="text-xs text-neutral-500 mt-1 font-normal">
                Explore our daily wedding reels, real client BTS, and ceremony stories.
              </p>
            </div>

            {/* Official QR Code Image */}
            <div className="p-3 bg-white rounded-2xl shadow-md border-2 border-[#700104]/20 max-w-[200px] group cursor-pointer hover:scale-105 transition-transform">
              <img
                src="assets/instagram_qr.png"
                alt="Instagram QR Code for VMCCC.FILMS"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Action buttons */}
            <div className="w-full flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 rounded-xl text-xs font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-90 text-white transition-all shadow flex items-center justify-center gap-1.5"
              >
                <span>Open Instagram</span>
                <span>↗</span>
              </a>

              <a
                href={brand.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow flex items-center justify-center gap-1.5"
              >
                <span>WhatsApp Booking</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
window.AboutUs = AboutUs;


// --- File: js/components/ReelShowcase.js ---
// =========================================================
// Reel Showcase Component — VMCCC.FILMS (White & Maroon Luxury Theme)
// Instagram ID: @vmccc.films | Hotline: 8341667106
// =========================================================

function ReelShowcase({ onSelectReelForModal, onBookStyle }) {
  const [activeFilter, setActiveFilter] = React.useState("all");
  const reels = window.VMCCC_DATA.reels;

  const categories = [
    { label: "All Reels", key: "all" },
    { label: "Weddings & Luxury", key: "wedding" },
    { label: "Celebrations & Parties", key: "party" },
    { label: "Fun BTS & Candid", key: "bts" }
  ];

  const filteredReels = activeFilter === "all" 
    ? reels 
    : reels.filter(r => r.categoryKey === activeFilter);

  return (
    <section id="showcase" className="py-20 md:py-28 relative bg-white border-t border-[#700104]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#700104]/20 bg-[#700104]/5 text-[#700104] text-xs font-bold uppercase tracking-wider mb-3">
              Official Instagram Work • @vmccc.films
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
              Featured Reels & <br />
              <span className="text-[#700104] font-serif-luxury italic">
                Cinematic Keepsakes
              </span>
            </h2>
            <p className="mt-3 text-neutral-600 font-normal text-sm sm:text-base">
              Explore authentic wedding reels created by VMCCC.FILMS. Every reel shot on iPhone 16 Pro Max ProRes Log, color-graded on-site, and delivered in minutes.
            </p>
          </div>

          {/* Slot Hotline Box */}
          <div className="bg-white px-5 py-3 rounded-2xl flex items-center gap-3 border border-[#700104]/20 shadow-md self-start md:self-auto">
            <div className="w-10 h-10 rounded-xl bg-[#700104] text-white flex items-center justify-center font-bold text-lg shadow-sm">
              📞
            </div>
            <div>
              <div className="text-xs text-neutral-500 uppercase tracking-wider font-bold">Book This Style</div>
              <a href="tel:8341667106" className="text-sm font-extrabold text-[#700104] hover:text-[#94101E] transition-colors">
                Call 8341667106
              </a>
            </div>
          </div>
        </div>

        {/* Category Filters Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveFilter(cat.key)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                activeFilter === cat.key
                  ? 'bg-[#700104] text-white shadow-md'
                  : 'bg-[#FAF8F6] text-neutral-700 hover:bg-neutral-200 border border-neutral-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 9:16 Vertical Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredReels.map((reel) => {
            return (
              <div
                key={reel.id}
                onClick={() => onSelectReelForModal(reel)}
                className="group relative rounded-3xl overflow-hidden bg-white cursor-pointer border border-[#700104]/15 hover:border-[#700104] transition-all duration-300 shadow-md hover:shadow-2xl hover:-translate-y-1"
              >
                {/* 9:16 Aspect Container */}
                <div className="relative aspect-[9/16] w-full bg-black overflow-hidden">
                  
                  {/* Poster Image */}
                  <img
                    src={reel.poster}
                    alt={reel.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/75 backdrop-blur-md text-white border border-white/20">
                      {reel.category}
                    </span>

                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#700104] text-white flex items-center gap-1 shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                      {reel.turnaround}
                    </span>
                  </div>

                  {/* Center Play Icon with Instagram badge */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none gap-2">
                    <div className="w-14 h-14 rounded-full bg-[#700104]/90 backdrop-blur-md text-white flex items-center justify-center group-hover:scale-110 group-hover:bg-[#700104] transition-all shadow-xl">
                      <svg className="w-6 h-6 translate-x-0.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                    <span className="text-[11px] font-bold text-white bg-black/70 px-2.5 py-0.5 rounded-full border border-white/20 shadow">
                      Watch Reel Preview
                    </span>
                  </div>

                  {/* Bottom Vignette & Information */}
                  <div className="absolute inset-x-0 bottom-0 p-5 pt-14 bg-gradient-to-t from-black via-black/85 to-transparent z-10 flex flex-col justify-end text-left space-y-2">
                    
                    {/* Metrics Bar */}
                    <div className="flex items-center gap-4 text-xs font-semibold text-neutral-200">
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        {reel.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 text-red-400 fill-red-400" viewBox="0 0 24 24">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                        {reel.likes}
                      </span>
                      <span className="text-[#F3E5C8] ml-auto font-bold font-mono">@vmccc.films</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white group-hover:text-[#F3E5C8] transition-colors line-clamp-1">
                      {reel.title}
                    </h3>

                    <div className="text-xs text-neutral-300 flex items-center justify-between">
                      <span className="truncate">{reel.client}</span>
                    </div>

                    {/* Quick Actions: Direct Instagram link & Book */}
                    <div className="pt-2 flex items-center justify-between gap-2">
                      <a
                        href={reel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-[11px] font-bold text-white/90 hover:text-white flex items-center gap-1 underline underline-offset-4"
                      >
                        <span>Instagram Link</span>
                        <span>↗</span>
                      </a>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onBookStyle(reel);
                        }}
                        className="text-[11px] font-bold px-3 py-1.5 rounded-full bg-[#700104] hover:bg-[#94101E] text-white transition-all shadow"
                      >
                        Book Style →
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
window.ReelShowcase = ReelShowcase;


// --- File: js/components/HowItWorks.js ---
// =========================================================
// How It Works Component — VMCCC.FILMS (White & Maroon Luxury Theme)
// Instagram ID: @vmccc.films | Hotline: 8341667106
// =========================================================

function HowItWorks({ onBookClick }) {
  const steps = window.VMCCC_DATA.howItWorks;

  return (
    <section id="how-it-works" className="py-20 md:py-28 relative border-t border-[#700104]/10 bg-[#FAF8F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#700104]/20 bg-[#700104]/5 text-[#700104] text-xs font-bold uppercase tracking-wider mb-3">
            From Shoot to Instagram Feed
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
            How <span className="text-[#700104]">VMCCC.FILMS</span> Works
          </h2>
          <p className="mt-4 text-base text-neutral-600 font-normal leading-relaxed">
            No waiting 6 weeks for slow videos. Experience on-site, same-day cinematic reel delivery in 4 effortless steps.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative group border border-[#700104]/15 shadow-sm hover:shadow-xl hover:border-[#700104] transition-all duration-300"
            >
              {/* Step Number Watermark */}
              <div className="absolute top-4 right-6 text-5xl font-black text-neutral-100 group-hover:text-[#700104]/10 transition-colors font-heading select-none">
                {item.step}
              </div>

              <div>
                {/* Step Pill */}
                <div className="w-12 h-12 rounded-2xl bg-[#700104]/10 border border-[#700104]/20 flex items-center justify-center text-[#700104] mb-6 group-hover:scale-110 group-hover:bg-[#700104] group-hover:text-white transition-all shadow-sm">
                  <span className="font-bold text-sm">#{item.step}</span>
                </div>

                <div className="inline-block px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#FAF2F3] border border-[#700104]/15 text-[#700104] mb-3">
                  {item.badge}
                </div>

                <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-[#700104] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-neutral-600 font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Step indicator arrow */}
              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-neutral-400 group-hover:text-[#700104] transition-colors">
                <span>Phase {item.step}</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Slot Booking Banner in Deep Maroon */}
        <div className="mt-12 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#700104] text-white shadow-xl border border-[#520002]">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-xl font-extrabold text-white">Ready to make your moments look like a movie?</h4>
            <p className="text-sm text-white/85 font-normal">
              Cinematic filmmakers and speed-editors on standby across Hyderabad, Mumbai, Delhi, Bengaluru & Goa.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:8341667106"
              className="text-xs font-bold px-5 py-3 rounded-full bg-white text-[#700104] hover:bg-neutral-100 transition-all whitespace-nowrap shadow-md"
            >
              📞 Call: 8341667106
            </a>
            <button
              onClick={onBookClick}
              className="text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full bg-[#94101E] hover:bg-[#A31526] text-white border border-white/20 whitespace-nowrap shadow-md transition-all"
            >
              Book Slot Online
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
window.HowItWorks = HowItWorks;


// --- File: js/components/Packages.js ---
// =========================================================
// Packages Component — VMCCC.FILMS (White & Maroon Luxury Theme)
// Instagram ID: @vmccc.films | Hotline: 8341667106
// =========================================================

function Packages({ onSelectPackage }) {
  const [activeTab, setActiveTab] = React.useState("wedding");
  const packageData = window.VMCCC_DATA.packages;

  const currentList = packageData[activeTab] || [];

  return (
    <section id="packages" className="py-20 md:py-28 relative border-t border-[#700104]/10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#700104]/20 bg-[#700104]/5 text-[#700104] text-xs font-bold uppercase tracking-wider mb-3">
            Transparent Pricing • Cherished Keepsakes
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Curated Packages for Every <br />
            <span className="text-[#700104] font-serif-luxury italic">
              Celebration & Story
            </span>
          </h2>
          <p className="mt-4 text-base text-neutral-600 font-normal leading-relaxed">
            Zero hidden charges. Certified cinema filmmakers with iPhone 16 Pro Max rigs. Color-graded on-site with same-day AirDrop delivery.
          </p>

          {/* Pricing Tabs Switcher */}
          <div className="mt-8 inline-flex p-1.5 rounded-full bg-[#FAF8F6] border border-neutral-200 shadow-sm">
            <button
              onClick={() => setActiveTab("wedding")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === "wedding"
                  ? 'bg-[#700104] text-white shadow-md'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Wedding Moments & Keepsakes
            </button>
            <button
              onClick={() => setActiveTab("hourly")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === "hourly"
                  ? 'bg-[#700104] text-white shadow-md'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Hourly & Instant Content
            </button>
            <button
              onClick={() => setActiveTab("business")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === "business"
                  ? 'bg-[#700104] text-white shadow-md'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Commercial & Brands
            </button>
          </div>
        </div>

        {/* Packages Cards Grid */}
        <div className={`grid grid-cols-1 ${currentList.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' : 'md:grid-cols-3'} gap-8 items-stretch`}>
          {currentList.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 bg-white ${
                pkg.highlighted
                  ? 'border-2 border-[#700104] shadow-[0_15px_40px_rgba(112,1,4,0.15)] md:-translate-y-2'
                  : 'border border-[#700104]/15 shadow-sm hover:shadow-xl hover:border-[#700104]/40'
              }`}
            >
              {/* Badge if available */}
              {pkg.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#700104] text-white shadow-md border border-white/40">
                    {pkg.badge}
                  </span>
                </div>
              )}

              <div>
                <p className="text-xs font-bold text-[#700104] uppercase tracking-wider mb-2">
                  {pkg.tagline}
                </p>

                <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                  {pkg.name}
                </h3>

                <p className="text-xs text-neutral-600 font-normal mb-6 leading-relaxed">
                  {pkg.description}
                </p>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-neutral-100">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-lg font-bold text-[#700104]">₹</span>
                    <span className="text-4xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight font-heading">
                      {pkg.price}
                    </span>
                  </div>
                  <span className="text-xs text-neutral-500 font-medium block mt-1">
                    {pkg.unit}
                  </span>
                </div>

                {/* Deliverables Checklist */}
                <div className="space-y-3.5 mb-8">
                  <p className="text-xs font-bold text-neutral-800 uppercase tracking-wider">
                    What's Included:
                  </p>
                  {pkg.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-700 font-normal">
                      <div className="w-4 h-4 rounded-full bg-[#700104]/10 text-[#700104] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-[#700104]/20">
                        ✓
                      </div>
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={() => onSelectPackage(pkg)}
                  className={`w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    pkg.highlighted
                      ? 'btn-primary shadow-md'
                      : 'bg-[#FAF2F3] hover:bg-[#700104] text-[#700104] hover:text-white border border-[#700104]/25 shadow-sm'
                  }`}
                >
                  <span>Book This Plan</span>
                  <span>→</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Slot Hotline Note */}
        <div className="mt-16 text-center text-xs text-neutral-600 flex flex-col sm:flex-row items-center justify-center gap-3">
          <span>Need custom destination wedding coverage or recurring brand shoots?</span>
          <a
            href="tel:8341667106"
            className="text-[#700104] hover:text-[#94101E] font-bold underline underline-offset-4 flex items-center gap-1"
          >
            <span>Call Slot Hotline: 8341667106</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
window.Packages = Packages;


// --- File: js/components/Calculator.js ---
// =========================================================
// Interactive Shoot Cost Estimator — VMCCC.FILMS (White & Maroon Luxury Theme)
// Instagram ID: @vmccc.films | Hotline: 8341667106
// =========================================================

function Calculator({ onApplyCustomQuote }) {
  const [shootType, setShootType] = React.useState("fashion");
  const [hours, setHours] = React.useState(2);
  const [reelsCount, setReelsCount] = React.useState(2);
  const [includeDrone, setIncludeDrone] = React.useState(false);
  const [includeSecondShooter, setIncludeSecondShooter] = React.useState(false);
  const [includeProResSSD, setIncludeProResSSD] = React.useState(false);

  // Dynamic price calculation
  const baseRatePerHour = 1500;
  const baseRatePerReel = 800;

  let total = (hours * baseRatePerHour) + (reelsCount * baseRatePerReel);
  
  if (shootType === "wedding") total += 2000;
  if (shootType === "corporate") total += 1500;
  
  if (includeDrone) total += 3500;
  if (includeSecondShooter) total += 2500;
  if (includeProResSSD) total += 1500;

  const estimatedMinutes = Math.min(10 + (reelsCount * 2), 25);

  const handleBookEstimate = () => {
    const customConfig = {
      name: `Custom ${shootType.toUpperCase()} Sprint`,
      price: total.toLocaleString('en-IN'),
      formValue: `Custom Quote: ${shootType} (${hours} hrs, ${reelsCount} reels, Total ₹${total.toLocaleString('en-IN')})`,
      deliverables: [
        `${hours} Hours of Coverage`,
        `${reelsCount} Custom Edited 4K Reels`,
        includeDrone ? "4K Drone Aerial Coverage" : "Standard Mobile Cinema Rig",
        includeSecondShooter ? "Dual Camera Directors" : "Lead Cinema Filmmaker",
        includeProResSSD ? "ProRes RAW Master SSD Dump" : "Direct AirDrop / Cloud Transfer"
      ]
    };
    onApplyCustomQuote(customConfig);
  };

  return (
    <section id="calculator" className="py-20 md:py-28 relative border-t border-[#700104]/10 bg-[#FAF8F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#700104] mb-3">
            Custom Quote Engine
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Build Your Custom Shoot
          </h2>
          <p className="mt-4 text-base text-neutral-600 font-normal leading-relaxed">
            Need something unique? Adjust hours, reel deliverables, and cinema add-ons in real time. Get an instant, binding price estimate with zero guesswork.
          </p>
        </div>

        {/* Calculator Interactive Box */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-[#700104]/15 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Shoot Type Buttons */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-3">
                  Shoot Category
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "fashion", label: "Fashion & Lifestyle" },
                    { id: "cafe", label: "Cafe & Dining" },
                    { id: "wedding", label: "Wedding Moments" },
                    { id: "auto", label: "Automobile & Tech" },
                    { id: "corporate", label: "Brand & Founder" },
                    { id: "event", label: "Celebration & Party" }
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setShootType(t.id)}
                      className={`px-3 py-2.5 rounded-xl text-xs font-bold border text-center transition-all ${
                        shootType === t.id
                          ? 'bg-[#700104] border-[#700104] text-white shadow-sm'
                          : 'bg-[#FAF8F6] border-neutral-200 text-neutral-700 hover:border-[#700104]/40'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Hours Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                    Shoot Duration
                  </label>
                  <span className="text-sm font-bold text-[#700104] bg-[#FAF2F3] px-2.5 py-0.5 rounded-md border border-[#700104]/15">
                    {hours} {hours === 1 ? 'Hour' : 'Hours'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="8"
                  step="1"
                  value={hours}
                  onChange={(e) => setHours(parseInt(e.target.value))}
                  className="w-full accent-[#700104] cursor-pointer h-2 bg-neutral-200 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-neutral-500 mt-1 font-medium">
                  <span>1 hr (Quick)</span>
                  <span>4 hrs (Half Day)</span>
                  <span>8 hrs (Full Day)</span>
                </div>
              </div>

              {/* Reels Count Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                    Finished Edited Reels
                  </label>
                  <span className="text-sm font-bold text-[#700104] bg-[#FAF2F3] px-2.5 py-0.5 rounded-md border border-[#700104]/15">
                    {reelsCount} {reelsCount === 1 ? 'Reel' : 'Reels'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="8"
                  step="1"
                  value={reelsCount}
                  onChange={(e) => setReelsCount(parseInt(e.target.value))}
                  className="w-full accent-[#700104] cursor-pointer h-2 bg-neutral-200 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-neutral-500 mt-1 font-medium">
                  <span>1 Reel</span>
                  <span>4 Reels</span>
                  <span>8 Reels</span>
                </div>
              </div>

              {/* Add-ons Toggles */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                  Cinema Add-ons
                </label>
                <div className="space-y-2">
                  
                  <label className="flex items-center justify-between p-3 rounded-xl bg-[#FAF8F6] border border-neutral-200 hover:border-[#700104]/30 cursor-pointer transition-colors">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={includeDrone}
                        onChange={(e) => setIncludeDrone(e.target.checked)}
                        className="accent-[#700104] w-4 h-4 rounded"
                      />
                      <span className="text-xs font-medium text-neutral-800">4K Drone Aerial Cinematography</span>
                    </div>
                    <span className="text-xs font-bold text-[#700104]">+₹3,500</span>
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-xl bg-[#FAF8F6] border border-neutral-200 hover:border-[#700104]/30 cursor-pointer transition-colors">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={includeSecondShooter}
                        onChange={(e) => setIncludeSecondShooter(e.target.checked)}
                        className="accent-[#700104] w-4 h-4 rounded"
                      />
                      <span className="text-xs font-medium text-neutral-800">Second Creator (Dual Camera Angles)</span>
                    </div>
                    <span className="text-xs font-bold text-[#700104]">+₹2,500</span>
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-xl bg-[#FAF8F6] border border-neutral-200 hover:border-[#700104]/30 cursor-pointer transition-colors">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={includeProResSSD}
                        onChange={(e) => setIncludeProResSSD(e.target.checked)}
                        className="accent-[#700104] w-4 h-4 rounded"
                      />
                      <span className="text-xs font-medium text-neutral-800">ProRes RAW SSD Export & Archive</span>
                    </div>
                    <span className="text-xs font-bold text-[#700104]">+₹1,500</span>
                  </label>

                </div>
              </div>

            </div>

            {/* Right Summary Card in Deep Maroon */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#700104] to-[#94101E] text-white rounded-2xl p-6 shadow-xl flex flex-col justify-between space-y-6 border border-[#520002]">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F3E5C8]">
                  Estimated Shoot Price
                </span>

                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-xl text-white/80 font-bold">₹</span>
                  <span className="text-5xl font-black text-white font-heading tracking-tight">
                    {total.toLocaleString('en-IN')}
                  </span>
                </div>
                <span className="text-xs text-white/70 block mt-1">+ 18% GST</span>

                <div className="mt-6 pt-6 border-t border-white/20 space-y-2.5 text-xs text-white/90 font-medium">
                  <div className="flex justify-between">
                    <span className="text-white/70">Delivery Speed:</span>
                    <span className="font-bold text-[#F3E5C8]">~{estimatedMinutes} Minutes On-Site</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Gear Unit:</span>
                    <span className="text-white">iPhone 16 Pro Max Rig</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Audio Setup:</span>
                    <span className="text-white">Rode Wireless Pro 32-bit</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Raw Footage:</span>
                    <span className="text-white">Full AirDrop Included</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={handleBookEstimate}
                  className="w-full bg-white hover:bg-neutral-100 text-[#700104] py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all"
                >
                  <span>Lock In Quote & Reserve</span>
                  <span>→</span>
                </button>
                <p className="text-[10px] text-center text-white/70 font-normal">
                  No payment required today. Pay after shoot completion.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
window.Calculator = Calculator;


// --- File: js/components/Comparison.js ---
// =========================================================
// Comparison Component — VMCCC.FILMS (White & Maroon Luxury Theme)
// Instagram ID: @vmccc.films | Hotline: 8341667106
// =========================================================

function Comparison({ onBookClick }) {
  const comparisonData = window.VMCCC_DATA.comparison;

  return (
    <section id="comparison" className="py-20 md:py-28 relative border-t border-[#700104]/10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#700104]/20 bg-[#700104]/5 text-[#700104] text-xs font-bold uppercase tracking-wider mb-3">
            The VMCCC Difference
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Why Modern Couples Choose <br />
            <span className="text-[#700104] font-serif-luxury italic">
              VMCCC.FILMS
            </span>
          </h2>
          <p className="mt-4 text-base text-neutral-600 font-normal leading-relaxed">
            See how VMCCC.FILMS outpaces traditional videographers in speed, cinematic quality, and 10-minute on-site delivery.
          </p>
        </div>

        {/* Matrix Table */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden border border-[#700104]/15 shadow-xl">
          <div className="grid grid-cols-12 bg-[#FAF8F6] p-4 sm:p-5 border-b border-neutral-200 text-xs font-bold uppercase tracking-wider text-neutral-600">
            <div className="col-span-5 sm:col-span-4">Experience / Deliverable</div>
            <div className="col-span-4 sm:col-span-4 text-[#700104] flex items-center gap-1.5 font-extrabold">
              <span className="w-2 h-2 rounded-full bg-[#700104]"></span>
              VMCCC.FILMS
            </div>
            <div className="col-span-3 sm:col-span-4 text-neutral-500">Traditional Studios</div>
          </div>

          <div className="divide-y divide-neutral-100">
            {comparisonData.map((row, idx) => (
              <div key={idx} className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-[#FAF8F6]/60 transition-colors text-xs sm:text-sm">
                
                <div className="col-span-5 sm:col-span-4 font-bold text-neutral-900">
                  {row.feature}
                </div>

                <div className="col-span-4 sm:col-span-4 text-[#700104] font-bold flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#700104]/10 text-[#700104] flex items-center justify-center shrink-0 text-[10px] font-extrabold border border-[#700104]/20">
                    ✓
                  </span>
                  <span>{row.vmccc}</span>
                </div>

                <div className="col-span-3 sm:col-span-4 text-neutral-500 font-normal flex items-center gap-2">
                  <span className="text-neutral-400 hidden sm:inline">✕</span>
                  <span>{row.traditional}</span>
                </div>

              </div>
            ))}
          </div>

          {/* Table Bottom Action */}
          <div className="p-6 bg-[#FAF8F6] border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-neutral-600 font-medium text-center sm:text-left">
              Direct slot booking available for upcoming wedding seasons.
            </span>
            <div className="flex items-center gap-3">
              <a
                href="tel:8341667106"
                className="text-xs font-bold text-[#700104] hover:text-[#94101E]"
              >
                📞 8341667106
              </a>
              <button
                onClick={onBookClick}
                className="btn-primary text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-full whitespace-nowrap shadow"
              >
                Book a Slot Today
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
window.Comparison = Comparison;


// --- File: js/components/GearSpotlight.js ---
// =========================================================
// Gear Spotlight Component — VMCCC.FILMS (White & Maroon Luxury Theme)
// Instagram ID: @vmccc.films | Hotline: 8341667106
// =========================================================

function GearSpotlight() {
  const gearList = window.VMCCC_DATA.gearList;

  return (
    <section id="gear" className="py-20 md:py-28 relative border-t border-[#700104]/10 bg-[#FAF8F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#700104] mb-3">
            Cinema Rig Specifications
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
            The Mobile Cinema Unit
          </h2>
          <p className="mt-4 text-base text-neutral-600 font-normal leading-relaxed">
            No bulky broadcast trucks. No heavy tripods taking up half the dance floor. Every VMCCC filmmaker operates an ultra-agile, Apple Log-certified cinema rig.
          </p>
        </div>

        {/* Gear Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gearList.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-7 rounded-3xl relative border border-[#700104]/15 shadow-sm hover:shadow-xl hover:border-[#700104] flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#FAF2F3] text-[#700104] border border-[#700104]/20">
                    {item.badge}
                  </span>
                  <span className="text-neutral-400 font-mono text-xs font-semibold">#0{idx + 1}</span>
                </div>

                <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-[#700104] transition-colors">
                  {item.name}
                </h3>

                <p className="text-xs text-neutral-600 font-normal leading-relaxed">
                  {item.specs}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-500 font-medium">
                <span>VMCCC Certified Rig Standard</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              </div>
            </div>
          ))}

          {/* Bonus 6th Box: Audition Standard in Deep Maroon */}
          <div className="bg-gradient-to-br from-[#700104] to-[#94101E] text-white p-6 sm:p-7 rounded-3xl shadow-xl flex flex-col justify-between border border-[#520002]">
            <div>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white text-[#700104] shadow-sm">
                Vetting Standard
              </span>
              <h3 className="text-lg font-bold text-white mt-4 mb-2">
                The Elite Creator Exam
              </h3>
              <p className="text-xs text-white/85 font-normal leading-relaxed">
                Only top 4% of filmmakers pass our practical tests: framing, real-time grading, audio calibration, speed turnaround, and social media instinct.
              </p>
            </div>
            <div className="mt-6 text-[11px] font-bold text-[#F3E5C8] flex items-center gap-1">
              <span>Zero amateur videographers guaranteed</span>
              <span>✓</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
window.GearSpotlight = GearSpotlight;


// --- File: js/components/BookingForm.js ---
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


// --- File: js/components/FAQ.js ---
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


// --- File: js/components/Footer.js ---
// =========================================================
// Footer Component — VMCCC.FILMS (Luxury Maroon Anchor Footer)
// Instagram ID: @vmccc.films | Hotline: 8341667106
// =========================================================

function Footer({ onBookClick, onOpenQrModal }) {
  const brand = window.VMCCC_DATA.brand;
  const [email, setEmail] = React.useState("");
  const [subscribed, setSubscribed] = React.useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="relative pt-20 pb-12 border-t border-[#520002] bg-[#3D0002] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Manifesto Column */}
          <div className="lg:col-span-5 space-y-5 text-left">
            
            {/* Logo Badge */}
            <div className="flex items-center gap-3">
              <div className="h-12 px-3 py-1.5 rounded-xl bg-white border border-[#C29B38]/40 flex items-center justify-center shadow-md">
                <img 
                  src="assets/logo.png" 
                  alt="VMCCC.FILMS logo" 
                  className="h-9 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl tracking-tight text-white">
                  VMCCC<span className="text-[#F3E5C8]">.FILMS</span>
                </span>
                <span className="text-[9px] font-bold tracking-[0.2em] text-[#F3E5C8] uppercase">
                  MAKE YOUR MOMENTS LOOK LIKE A MOVIE
                </span>
              </div>
            </div>

            <p className="text-xs text-white/80 font-normal leading-relaxed max-w-md">
              We capture and share the unique stories and moments of couples on their special day. Turning celebrations into cherished keepsakes through stunning visuals, heartfelt narratives and fun BTS.
            </p>

            {/* Slot Hotline Box */}
            <div className="p-4 rounded-2xl bg-white/10 border border-white/15 flex items-center gap-3.5 max-w-sm">
              <span className="w-10 h-10 rounded-xl bg-white text-[#700104] flex items-center justify-center text-lg font-bold shadow">
                📞
              </span>
              <div>
                <span className="text-[10px] text-[#F3E5C8] font-bold uppercase tracking-wider block">Slot Booking Mobile</span>
                <a href="tel:8341667106" className="text-base font-extrabold text-white hover:text-[#F3E5C8] transition-colors">
                  +91 8341667106
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-white text-[#700104] hover:bg-neutral-100 text-xs font-bold transition-all shadow flex items-center gap-1.5"
                title="Follow @vmccc.films on Instagram"
              >
                <span>📸 @vmccc.films</span>
              </a>
              <button
                onClick={onOpenQrModal}
                className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-medium border border-white/20"
              >
                Instagram QR Code
              </button>
              <a
                href={brand.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center transition-all shadow"
                title="Chat on WhatsApp"
              >
                💬
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F3E5C8]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#showcase" className="hover:text-white transition-colors">Reels Showcase</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#packages" className="hover:text-white transition-colors">Wedding Packages</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">Cost Estimator</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Help & FAQ</a></li>
            </ul>
          </div>

          {/* Featured Wedding Reels Links */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F3E5C8]">
              Featured Reels
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li><a href="https://www.instagram.com/reel/DebwAFPo-nj/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Love Story Keepsake ↗</a></li>
              <li><a href="https://www.instagram.com/reel/DeedyMhoFaY/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Royal Wedding Teaser ↗</a></li>
              <li><a href="https://www.instagram.com/reel/DaS3OWtJPfX/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Golden Hour Portrait ↗</a></li>
              <li><a href="https://www.instagram.com/reel/Dc_hhQ6p9zH/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Sangeet Celebration ↗</a></li>
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F3E5C8]">
              Slot Hotline
            </h4>
            <p className="text-xs text-white/75 font-normal leading-relaxed">
              Have questions about wedding dates or destination events? Contact our director directly:
            </p>

            <div className="text-xs space-y-1.5 text-white/90">
              <div>📞 <strong className="text-white">Call:</strong> 8341667106</div>
              <div>💬 <strong className="text-white">WhatsApp:</strong> +91 8341667106</div>
              <div>📸 <strong className="text-white">Instagram:</strong> @vmccc.films</div>
            </div>

            <form onSubmit={handleSubscribe} className="flex gap-2 pt-2">
              <input
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-xs text-white placeholder-white/50 focus:outline-none focus:border-white"
              />
              <button
                type="submit"
                className="bg-white hover:bg-neutral-100 text-[#700104] font-bold px-3.5 py-2 rounded-xl text-xs uppercase tracking-wider shadow"
              >
                Join
              </button>
            </form>

            {subscribed && (
              <p className="text-xs text-emerald-400 font-bold">
                ✓ Thank you! We have added you to our priority list.
              </p>
            )}
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            © 2026 <strong className="text-white">VMCCC.FILMS</strong>. MAKE YOUR MOMENTS LOOK LIKE A MOVIE • SHOOT • EDIT • DELIVER.
          </div>
          <div className="flex items-center gap-6 text-white/70">
            <a href="tel:8341667106" className="text-[#F3E5C8] font-bold hover:underline">Slot Booking: 8341667106</a>
            <a href="https://www.instagram.com/vmccc.films/" target="_blank" rel="noopener noreferrer" className="hover:text-white">@vmccc.films</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
window.Footer = Footer;


// --- File: js/components/ReelModal.js ---
// =========================================================
// Reel Fullscreen Modal Component — VMCCC.FILMS (White & Maroon)
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      
      {/* Close button outside */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white text-neutral-800 hover:bg-neutral-200 flex items-center justify-center transition-all z-50 text-xl font-bold shadow-lg"
      >
        ✕
      </button>

      {/* Modal Container */}
      <div 
        className="relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-3xl bg-white border border-[#700104]/20 shadow-2xl flex flex-col justify-between p-6 space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Header */}
        <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#700104] text-white">
              {reel.category}
            </span>
            <span className="text-xs text-neutral-500 font-medium">
              {reel.turnaround}
            </span>
          </div>

          <a
            href="tel:8341667106"
            className="text-xs font-bold text-[#700104] hover:text-[#94101E] flex items-center gap-1"
          >
            <span>📞 8341667106</span>
          </a>
        </div>

        {/* Instagram Reel Container */}
        <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-black border border-neutral-200 shadow-inner">
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
            <div className="text-xs text-[#700104] font-bold">{reel.client}</div>
            <h3 className="text-xl font-bold text-neutral-900 mt-0.5 leading-tight">{reel.title}</h3>
            <p className="text-xs text-neutral-600 mt-1 font-normal leading-relaxed">
              Shot by verified VMCCC.FILMS filmmakers on iPhone 16 Pro Max. Color-graded with custom LUTs.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href={reel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-xl text-xs font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-90 text-white flex items-center justify-center gap-1.5 shadow"
            >
              <span>Watch on Instagram</span>
              <span>↗</span>
            </a>

            <button
              onClick={() => onBookReelStyle(reel)}
              className="flex-1 btn-primary py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow"
            >
              <span>Book This Style</span>
              <span>→</span>
            </button>
          </div>

          <div className="text-center pt-2">
            <a
              href="https://wa.me/918341667106?text=Hi%20VMCCC.FILMS!%20I%20loved%20this%20reel%20and%20want%20to%20book%20a%20similar%20cinematic%20slot."
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-emerald-700 hover:text-emerald-800 font-bold flex items-center justify-center gap-1.5"
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


// --- File: js/components/QrModal.js ---
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


// --- File: js/components/ConfirmationModal.js ---
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


// --- File: js/app.js ---
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
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col relative selection:bg-[#700104] selection:text-white">
      
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
