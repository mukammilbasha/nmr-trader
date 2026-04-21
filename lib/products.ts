export type Product = {
  id: string
  name: string
  category: string
  price: number // current price in INR
  mrp?: number // original / MRP for showing discount
  description: string
  details?: string[] // longer feature bullets for PDP
  image: string
  gallery?: string[] // additional product images
  tags?: string[]
  featured?: boolean
  inStock?: boolean
}

export const CATEGORIES = [
  { slug: "all", label: "All Items" },
  { slug: "personalised-pens", label: "Personalised Pens" },
  { slug: "mens-wallets", label: "Men's Wallets" },
  { slug: "womens-wallets", label: "Women's Wallets" },
  { slug: "leather-accessories", label: "Leather Accessories" },
  { slug: "kids-bags", label: "Kids School Bags" },
  { slug: "drinkware", label: "Drinkware & Tumblers" },
  { slug: "travel-accessories", label: "Travel Accessories" },
  { slug: "watch-organisers", label: "Watch Organisers" },
  { slug: "corporate-gifts", label: "Corporate Gifts" },
  { slug: "imitation-jewelry", label: "Imitation Jewelry" },
  { slug: "bangles", label: "Bangles" },
  { slug: "cosmetics", label: "Cosmetics" },
  { slug: "dust-bags", label: "Dust Bags" },
  { slug: "return-gifts", label: "Return Gifts" },
  { slug: "hair-accessories", label: "Hair Accessories" },
  { slug: "toys-stationery", label: "Toys & Stationery" },
] as const

export type CategorySlug = (typeof CATEGORIES)[number]["slug"]

const IMG = {
  jewelry: "/images/cat-jewelry.jpg",
  bangles: "/images/cat-bangles.jpg",
  cosmetics: "/images/cat-cosmetics.jpg",
  leather: "/images/cat-leather.jpg",
  leatherAcc: "/images/cat-leather-accessories.jpg",
  dust: "/images/cat-dustbags.jpg",
  gifts: "/images/cat-gifts.jpg",
  hair: "/images/cat-hair.jpg",
  toys: "/images/cat-toys.jpg",
  pens: "/images/cat-pens.jpg",
  tumblers: "/images/cat-tumblers.jpg",
  kidsBags: "/images/cat-kids-bags.jpg",
  travel: "/images/cat-travel.jpg",
  watches: "/images/cat-watches.jpg",
  corporate: "/images/cat-corporate.jpg",
}

export const PRODUCTS: Product[] = [
  // ─────────────────────────────────────────────────
  // Personalised Pens — 10 items
  // ─────────────────────────────────────────────────
  {
    id: "pen-001",
    name: "Satyamev Jayate Personalised Pen",
    category: "personalised-pens",
    price: 549,
    mrp: 999,
    description: "Black magnetic pen with Satyamev Jayate & India Map etching.",
    details: [
      "Black metallic body with gold-tone engraving",
      "Magnetic cap, smooth-flowing roller refill",
      "Personalised with your name (up to 20 characters)",
      "Comes in a black gift box, ready to gift",
    ],
    image: IMG.pens,
    tags: ["bestseller", "personalised"],
    featured: true,
  },
  {
    id: "pen-002",
    name: "Lord Shiva Etched Roller Pen",
    category: "personalised-pens",
    price: 549,
    mrp: 999,
    description: "Premium roller pen etched with Lord Shiva motif.",
    details: [
      "Laser-etched motif — permanent, fade-free",
      "Schmidt roller refill for smooth writing",
      "Gift-ready presentation box",
    ],
    image: IMG.pens,
    tags: ["festive"],
  },
  {
    id: "pen-003",
    name: "Parliament & Ashok Sthambha Pen",
    category: "personalised-pens",
    price: 549,
    mrp: 999,
    description: "Formal black pen etched with Parliament silhouette and Ashok Sthambha.",
    image: IMG.pens,
    tags: ["formal"],
  },
  {
    id: "pen-004",
    name: "Lord Ganesha Etched Pen",
    category: "personalised-pens",
    price: 549,
    mrp: 999,
    description: "Personalised pen with Lord Ganesha motif — ideal festive gift.",
    image: IMG.pens,
    tags: ["festive"],
  },
  {
    id: "pen-005",
    name: "Lord Shree Ram Ayodhya Pen",
    category: "personalised-pens",
    price: 549,
    mrp: 999,
    description: "Commemorative pen etched with Lord Shree Ram Ayodhya design.",
    image: IMG.pens,
    featured: true,
  },
  {
    id: "pen-006",
    name: "Indian Flag Patriotic Pen",
    category: "personalised-pens",
    price: 499,
    mrp: 899,
    description: "Black pen with tricolour Indian flag detail and personalised name.",
    image: IMG.pens,
    tags: ["patriotic"],
  },
  {
    id: "pen-007",
    name: "Premium Gold Crystal Pen",
    category: "personalised-pens",
    price: 299,
    mrp: 599,
    description: "Elegant gold-tone metal pen with crystal cap finial.",
    image: IMG.pens,
  },
  {
    id: "pen-008",
    name: "Rich Wood Magnetic Roller Pen",
    category: "personalised-pens",
    price: 599,
    mrp: 1299,
    description: "Warm wood-grain roller pen with magnetic cap.",
    image: IMG.pens,
    tags: ["premium"],
  },
  {
    id: "pen-009",
    name: "Personalised Pen with Magnetic Stand",
    category: "personalised-pens",
    price: 590,
    mrp: 1199,
    description: "Architect-style roller pen that magnetises to a stand / mobile stand.",
    image: IMG.pens,
    featured: true,
  },
  {
    id: "pen-010",
    name: "Schmidt Roller Pen Refill",
    category: "personalised-pens",
    price: 60,
    description: "Replacement Schmidt roller refill for all our personalised pens.",
    image: IMG.pens,
  },

  // ─────────────────────────────────────────────────
  // Men's Wallets
  // ─────────────────────────────────────────────────
  {
    id: "mw-001",
    name: "Classic Bifold Leather Wallet",
    category: "mens-wallets",
    price: 899,
    mrp: 1499,
    description: "Tan bifold wallet with 6 card slots and hidden cash compartment.",
    details: [
      "Genuine leather with hand-stitched edges",
      "6 card slots + 1 ID window + 2 note pockets",
      "Compact 4.3\" × 3.5\" profile",
      "Comes in an NMR Traders cotton dust bag",
    ],
    image: IMG.leather,
    tags: ["bestseller"],
    featured: true,
  },
  {
    id: "mw-002",
    name: "Indian Leather Slim Wallet",
    category: "mens-wallets",
    price: 1199,
    mrp: 1999,
    description: "Premium slim wallet in blue-hued Indian cowhide.",
    image: IMG.leather,
  },
  {
    id: "mw-003",
    name: "Trifold Travel Wallet",
    category: "mens-wallets",
    price: 1299,
    mrp: 2199,
    description: "Trifold wallet with passport pocket and boarding-pass sleeve.",
    image: IMG.leather,
  },
  {
    id: "mw-004",
    name: "Money Clip Minimal Wallet",
    category: "mens-wallets",
    price: 799,
    mrp: 1299,
    description: "Compact card holder with integrated money clip.",
    image: IMG.leatherAcc,
  },

  // ─────────────────────────────────────────────────
  // Women's Wallets
  // ─────────────────────────────────────────────────
  {
    id: "ww-001",
    name: "Imported Leather Tote Bag",
    category: "womens-wallets",
    price: 2499,
    mrp: 4999,
    description: "Spacious tote bag in soft imported leather with interior zip pocket.",
    details: [
      "14\" × 12\" × 4\" — fits a 13\" laptop",
      "Interior zip + 2 slip pockets",
      "Magnetic top closure",
      "Shoulder straps with 10\" drop",
    ],
    image: IMG.leather,
    tags: ["bestseller"],
    featured: true,
  },
  {
    id: "ww-002",
    name: "Round Chain Sling Bag",
    category: "womens-wallets",
    price: 1899,
    mrp: 3499,
    description: "Stylish round sling with gold chain strap.",
    image: IMG.leather,
    featured: true,
  },
  {
    id: "ww-003",
    name: "Premium Minimal Clutch",
    category: "womens-wallets",
    price: 1499,
    mrp: 2999,
    description: "Slim evening clutch in embossed leather.",
    image: IMG.leather,
  },
  {
    id: "ww-004",
    name: "Women's Mini Wallet",
    category: "womens-wallets",
    price: 699,
    mrp: 1299,
    description: "Compact wallet with 4 card slots and coin pocket.",
    image: IMG.leather,
  },
  {
    id: "ww-005",
    name: "Sunglasses Holder — Leather",
    category: "womens-wallets",
    price: 599,
    mrp: 999,
    description: "Slim leather pouch for sunglasses or reading glasses.",
    image: IMG.leatherAcc,
  },
  {
    id: "ww-006",
    name: "Make-up Kit Pouch",
    category: "womens-wallets",
    price: 699,
    mrp: 1499,
    description: "Zippered make-up pouch in soft vegan leather.",
    image: IMG.leatherAcc,
  },

  // ─────────────────────────────────────────────────
  // Leather Accessories
  // ─────────────────────────────────────────────────
  {
    id: "la-001",
    name: "Slim Card Holder",
    category: "leather-accessories",
    price: 349,
    mrp: 699,
    description: "Minimal card holder with 6 card slots and central pocket.",
    image: IMG.leatherAcc,
    featured: true,
  },
  {
    id: "la-002",
    name: "Leather Keychain",
    category: "leather-accessories",
    price: 149,
    description: "Handcrafted keychain with antique brass ring.",
    image: IMG.leatherAcc,
  },
  {
    id: "la-003",
    name: "Leather Watch Strap",
    category: "leather-accessories",
    price: 499,
    description: "Replacement strap in 18–22mm sizes. Multiple colours.",
    image: IMG.leatherAcc,
  },
  {
    id: "la-004",
    name: "Passport Holder",
    category: "leather-accessories",
    price: 599,
    mrp: 999,
    description: "Travel-ready passport holder with card pockets.",
    image: IMG.travel,
  },
  {
    id: "la-005",
    name: "Leather Belt — Formal",
    category: "leather-accessories",
    price: 699,
    mrp: 1299,
    description: "Black formal belt with polished buckle. Sizes 32–42.",
    image: IMG.leather,
  },
  {
    id: "la-006",
    name: "Laptop Sleeve 14\"",
    category: "leather-accessories",
    price: 1299,
    mrp: 2499,
    description: "Padded leather sleeve for 13–14 inch laptops.",
    image: IMG.leather,
  },

  // ─────────────────────────────────────────────────
  // Kids School Bags — themed
  // ─────────────────────────────────────────────────
  {
    id: "kb-001",
    name: "Navy Blue Dinosaur 3D School Bag",
    category: "kids-bags",
    price: 1799,
    mrp: 3499,
    description: "16\" 3D-embossed dinosaur school bag — padded straps, 3 compartments.",
    details: [
      "16\" size, fits ages 5–9",
      "Padded shoulder straps and back panel",
      "3 main compartments + side bottle pocket",
      "Water-resistant polyester exterior",
    ],
    image: IMG.kidsBags,
    tags: ["bestseller", "kids"],
    featured: true,
  },
  {
    id: "kb-002",
    name: "Harry Potter Hogwarts Hard-Shell Bag",
    category: "kids-bags",
    price: 1799,
    mrp: 5999,
    description: "17\" licensed Hogwarts hard-shell school bag.",
    image: IMG.kidsBags,
    tags: ["licensed"],
    featured: true,
  },
  {
    id: "kb-003",
    name: "Captain America Avengers Bag",
    category: "kids-bags",
    price: 1999,
    mrp: 4999,
    description: "18\" Captain America shield-themed school bag.",
    image: IMG.kidsBags,
  },
  {
    id: "kb-004",
    name: "Spider-Man Avengers Bag",
    category: "kids-bags",
    price: 1999,
    mrp: 4999,
    description: "18\" Spider-Man themed school bag with web-shooter print.",
    image: IMG.kidsBags,
  },
  {
    id: "kb-005",
    name: "Pink Unicorn Patch School Bag",
    category: "kids-bags",
    price: 1799,
    mrp: 4999,
    description: "18\" unicorn-themed school bag with glitter patches.",
    image: IMG.kidsBags,
  },
  {
    id: "kb-006",
    name: "Small Kids Bag — Spider Theme",
    category: "kids-bags",
    price: 999,
    mrp: 1999,
    description: "14\" personalised bag with Spider-Man theme for younger kids.",
    image: IMG.kidsBags,
  },
  {
    id: "kb-007",
    name: "Small Kids Bag — Unicorn Theme",
    category: "kids-bags",
    price: 999,
    mrp: 1999,
    description: "14\" personalised bag with Unicorn theme for younger kids.",
    image: IMG.kidsBags,
  },

  // ─────────────────────────────────────────────────
  // Drinkware
  // ─────────────────────────────────────────────────
  {
    id: "dr-001",
    name: "Personalised Stanley Tumbler 600ml",
    category: "drinkware",
    price: 790,
    mrp: 1990,
    description: "Stainless-steel vacuum tumbler — personalised with your name.",
    details: [
      "600ml capacity (20 oz)",
      "Double-wall vacuum insulation — keeps cold 12h / hot 6h",
      "Laser-engraved personalisation (permanent)",
      "Fits all standard car cup holders",
    ],
    image: IMG.tumblers,
    tags: ["bestseller", "personalised"],
    featured: true,
  },
  {
    id: "dr-002",
    name: "IceFlow Stanley Tumbler 900ml",
    category: "drinkware",
    price: 890,
    mrp: 2990,
    description: "30oz IceFlow tumbler with flip-straw lid.",
    image: IMG.tumblers,
    featured: true,
  },
  {
    id: "dr-003",
    name: "40oz Vacuum Car Tumbler",
    category: "drinkware",
    price: 990,
    mrp: 2990,
    description: "Extra-large 40oz tumbler with handle and straw lid.",
    image: IMG.tumblers,
  },
  {
    id: "dr-004",
    name: "Stanley Tumbler 900ml — Signature",
    category: "drinkware",
    price: 990,
    mrp: 2490,
    description: "Signature 30oz Stanley tumbler in matte finish.",
    image: IMG.tumblers,
  },
  {
    id: "dr-005",
    name: "Thermal Steel Bottle 750ml",
    category: "drinkware",
    price: 690,
    mrp: 1490,
    description: "Classic insulated bottle — keeps drinks hot 12h / cold 24h.",
    image: IMG.tumblers,
  },

  // ─────────────────────────────────────────────────
  // Travel Accessories
  // ─────────────────────────────────────────────────
  {
    id: "tr-001",
    name: "Personalised Kids Travel Combo",
    category: "travel-accessories",
    price: 1499,
    mrp: 2999,
    description: "Travel pillow, eye mask and 2 luggage tags — all personalised.",
    details: [
      "Memory-foam neck pillow",
      "Soft-touch sleep mask",
      "Set of 2 luggage tags with ID card",
      "Matched colour set, ready to gift",
    ],
    image: IMG.travel,
    tags: ["combo"],
    featured: true,
  },
  {
    id: "tr-002",
    name: "Leather Luggage Tag — Set of 2",
    category: "travel-accessories",
    price: 499,
    mrp: 999,
    description: "Pair of genuine leather luggage tags with ID card.",
    image: IMG.travel,
  },
  {
    id: "tr-003",
    name: "Premium Passport Cover",
    category: "travel-accessories",
    price: 599,
    mrp: 999,
    description: "Soft leather passport cover with card slots.",
    image: IMG.travel,
    featured: true,
  },
  {
    id: "tr-004",
    name: "Travel Document Organiser",
    category: "travel-accessories",
    price: 899,
    mrp: 1799,
    description: "RFID-blocking organiser for passport, boarding pass, and cards.",
    image: IMG.travel,
  },
  {
    id: "tr-005",
    name: "Travel Cable & Charger Pouch",
    category: "travel-accessories",
    price: 399,
    mrp: 799,
    description: "Compact pouch with elastic loops for cables and adapters.",
    image: IMG.travel,
  },

  // ─────────────────────────────────────────────────
  // Watch Organisers
  // ─────────────────────────────────────────────────
  {
    id: "wo-001",
    name: "Personalised Watch Organiser — 6 Slots",
    category: "watch-organisers",
    price: 790,
    mrp: 2980,
    description: "Premium 6-slot watch organiser with personalised name plate.",
    details: [
      "Holds 6 watches securely in velvet cushions",
      "Personalised name-plate on the lid",
      "Faux leather exterior with glass window",
      "Dimensions: 12\" × 4\" × 3\"",
    ],
    image: IMG.watches,
    tags: ["bestseller", "personalised"],
    featured: true,
  },
  {
    id: "wo-002",
    name: "Premium XL Accessory Organiser",
    category: "watch-organisers",
    price: 2999,
    mrp: 5999,
    description: "Multi-tier organiser for watches, cufflinks, chains and rings.",
    image: IMG.watches,
    featured: true,
  },
  {
    id: "wo-003",
    name: "Watch Organiser — 4 Slots",
    category: "watch-organisers",
    price: 690,
    mrp: 1990,
    description: "4-slot watch display case with glass lid.",
    image: IMG.watches,
  },
  {
    id: "wo-004",
    name: "Watch Organiser — 8 Slots",
    category: "watch-organisers",
    price: 990,
    mrp: 3490,
    description: "Premium 8-slot collector's case.",
    image: IMG.watches,
  },

  // ─────────────────────────────────────────────────
  // Corporate Gifts
  // ─────────────────────────────────────────────────
  {
    id: "cg-001",
    name: "Executive Gift Hamper — Pen + Wallet + Card Holder",
    category: "corporate-gifts",
    price: 2499,
    mrp: 4999,
    description: "Three-piece executive set in a custom gift box.",
    details: [
      "Personalised metal roller pen",
      "Bifold leather wallet",
      "Slim card holder",
      "Presented in a rigid gift box with ribbon",
    ],
    image: IMG.corporate,
    tags: ["bestseller", "gift"],
    featured: true,
  },
  {
    id: "cg-002",
    name: "Diwali Corporate Gift Box",
    category: "corporate-gifts",
    price: 1999,
    mrp: 3999,
    description: "Diwali combo — diya, dry fruits, pen and card holder.",
    image: IMG.corporate,
    tags: ["festive"],
    featured: true,
  },
  {
    id: "cg-003",
    name: "Employee Joining Kit",
    category: "corporate-gifts",
    price: 1499,
    mrp: 2999,
    description: "Onboarding kit — diary, pen, card holder, tumbler.",
    image: IMG.corporate,
  },
  {
    id: "cg-004",
    name: "Thank You Gift Set",
    category: "corporate-gifts",
    price: 999,
    mrp: 1999,
    description: "Elegant thank-you set — pen and personalised card.",
    image: IMG.corporate,
  },

  // ─────────────────────────────────────────────────
  // Imitation Jewelry — existing
  // ─────────────────────────────────────────────────
  {
    id: "ij-001",
    name: "Antique Jhumka Earrings",
    category: "imitation-jewelry",
    price: 349,
    mrp: 699,
    description: "Temple-style jhumkas with antique gold finish and pearl drops.",
    image: IMG.jewelry,
    tags: ["bestseller", "bridal"],
    featured: true,
  },
  {
    id: "ij-002",
    name: "Bridal Necklace Set",
    category: "imitation-jewelry",
    price: 2499,
    mrp: 4999,
    description: "Full bridal set — haram, choker, earrings, maang tikka.",
    image: IMG.jewelry,
    featured: true,
  },
  {
    id: "ij-003",
    name: "Kundan Statement Chain",
    category: "imitation-jewelry",
    price: 899,
    mrp: 1499,
    description: "Kundan & pearl statement chain for festive wear.",
    image: IMG.jewelry,
  },
  {
    id: "ij-004",
    name: "Oxidised Silver Pendant",
    category: "imitation-jewelry",
    price: 249,
    description: "Lightweight oxidised pendant with traditional motif.",
    image: IMG.jewelry,
  },
  {
    id: "ij-005",
    name: "Ruby Drop Earrings",
    category: "imitation-jewelry",
    price: 449,
    mrp: 899,
    description: "Ruby-coloured stone danglers with gold-plated hooks.",
    image: IMG.jewelry,
  },

  // ─────────────────────────────────────────────────
  // Bangles
  // ─────────────────────────────────────────────────
  {
    id: "bg-001",
    name: "Glass Bangles Set — Ruby",
    category: "bangles",
    price: 199,
    description: "12 glass bangles in ruby red with gold rim detailing.",
    image: IMG.bangles,
    featured: true,
  },
  {
    id: "bg-002",
    name: "Bridal Kangan — Gold Polish",
    category: "bangles",
    price: 899,
    mrp: 1499,
    description: "Wide kangan with gold-polish engraving (pair).",
    image: IMG.bangles,
  },
  {
    id: "bg-003",
    name: "Stone Bangles — Emerald",
    category: "bangles",
    price: 349,
    description: "Metal bangles studded with emerald-green cut stones.",
    image: IMG.bangles,
  },
  {
    id: "bg-004",
    name: "Lac Bangles — Festive Pack",
    category: "bangles",
    price: 499,
    description: "8 hand-painted lac bangles in festive colours.",
    image: IMG.bangles,
  },

  // ─────────────────────────────────────────────────
  // Cosmetics
  // ─────────────────────────────────────────────────
  {
    id: "cm-001",
    name: "Kumkum Jar — Temple Grade",
    category: "cosmetics",
    price: 79,
    description: "100g temple-grade turmeric kumkum in a reusable glass jar.",
    image: IMG.cosmetics,
  },
  {
    id: "cm-002",
    name: "Velvet Bindi Box (24 pc)",
    category: "cosmetics",
    price: 129,
    description: "Assorted velvet bindis — round, tear-drop and fancy.",
    image: IMG.cosmetics,
    featured: true,
  },
  {
    id: "cm-003",
    name: "Sandalwood Kajal Stick",
    category: "cosmetics",
    price: 149,
    description: "Long-lasting sandalwood-infused kajal.",
    image: IMG.cosmetics,
  },

  // ─────────────────────────────────────────────────
  // Dust Bags
  // ─────────────────────────────────────────────────
  {
    id: "db-001",
    name: "Cotton Dust Bag — Small",
    category: "dust-bags",
    price: 49,
    description: "9\"×6\" cotton drawstring bag for jewelry and small items.",
    image: IMG.dust,
  },
  {
    id: "db-002",
    name: "Cotton Dust Bag — Medium",
    category: "dust-bags",
    price: 79,
    description: "12\"×14\" dust bag suitable for handbags and wallets.",
    image: IMG.dust,
    featured: true,
  },
  {
    id: "db-003",
    name: "Cotton Dust Bag — Large",
    category: "dust-bags",
    price: 129,
    description: "18\"×20\" large dust bag for shoes and large accessories.",
    image: IMG.dust,
  },
  {
    id: "db-004",
    name: "Jewelry Pouch — Velvet",
    category: "dust-bags",
    price: 89,
    description: "4\"×4\" velvet pouch for storing delicate jewelry.",
    image: IMG.dust,
  },

  // ─────────────────────────────────────────────────
  // Return Gifts
  // ─────────────────────────────────────────────────
  {
    id: "rg-001",
    name: "Mini Brass Idol Set",
    category: "return-gifts",
    price: 129,
    description: "Pair of small brass idols — perfect wedding return gift.",
    image: IMG.gifts,
    featured: true,
  },
  {
    id: "rg-002",
    name: "Kumkum Bharani Pack",
    category: "return-gifts",
    price: 59,
    description: "Decorated kumkum holder for baby-shower returns.",
    image: IMG.gifts,
  },
  {
    id: "rg-003",
    name: "Pooja Thali — Small",
    category: "return-gifts",
    price: 249,
    description: "Decorative small pooja thali with kalash and diya.",
    image: IMG.gifts,
  },

  // ─────────────────────────────────────────────────
  // Hair Accessories
  // ─────────────────────────────────────────────────
  {
    id: "ha-001",
    name: "Jadai Billai Set",
    category: "hair-accessories",
    price: 1199,
    mrp: 1999,
    description: "Traditional bridal jadai set — full hair accessory design.",
    image: IMG.hair,
    featured: true,
  },
  {
    id: "ha-002",
    name: "Fancy Hair Clips (Pack of 10)",
    category: "hair-accessories",
    price: 99,
    description: "10 assorted hair clips in popular designs.",
    image: IMG.hair,
  },
  {
    id: "ha-003",
    name: "Stone Hair Bands (Set of 2)",
    category: "hair-accessories",
    price: 179,
    description: "Decorative stone-studded hair bands.",
    image: IMG.hair,
  },

  // ─────────────────────────────────────────────────
  // Toys & Stationery
  // ─────────────────────────────────────────────────
  {
    id: "ts-001",
    name: "Soft Toy — Medium Teddy",
    category: "toys-stationery",
    price: 349,
    description: "Plush teddy bear, ~14 inches tall.",
    image: IMG.toys,
  },
  {
    id: "ts-002",
    name: "School Supply Combo",
    category: "toys-stationery",
    price: 299,
    description: "Back-to-school combo — notebooks, pens, geometry box.",
    image: IMG.toys,
    featured: true,
  },
  {
    id: "ts-003",
    name: "Birthday Gift Pack",
    category: "toys-stationery",
    price: 199,
    description: "Ready-made birthday gift with stationery and small toys.",
    image: IMG.toys,
  },
]

export function formatInr(n: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n)
}

export function findProduct(id: string) {
  return PRODUCTS.find((p) => p.id === id)
}

export function productsByCategory(slug: CategorySlug) {
  if (slug === "all") return PRODUCTS
  return PRODUCTS.filter((p) => p.category === slug)
}

export function relatedProducts(product: Product, count = 4) {
  return PRODUCTS.filter(
    (p) => p.id !== product.id && p.category === product.category,
  ).slice(0, count)
}

export function categoryLabel(slug: string): string {
  return CATEGORIES.find((c) => c.slug === slug)?.label ?? slug
}

export function discountPercent(product: Product): number | null {
  if (!product.mrp || product.mrp <= product.price) return null
  return Math.round(((product.mrp - product.price) / product.mrp) * 100)
}
