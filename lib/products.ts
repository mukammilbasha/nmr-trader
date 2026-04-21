export type Product = {
  id: string
  name: string
  category: string
  price: number // in INR; indicative "starting at" price
  description: string
  image: string
  tags?: string[]
  featured?: boolean
  inStock?: boolean
}

export const CATEGORIES = [
  { slug: "all", label: "All Items" },
  { slug: "imitation-jewelry", label: "Imitation Jewelry" },
  { slug: "bangles", label: "Bangles & Bracelets" },
  { slug: "cosmetics", label: "Cosmetics & Beauty" },
  { slug: "leather-products", label: "Leather Products" },
  { slug: "leather-accessories", label: "Leather Accessories" },
  { slug: "dust-bags", label: "Dust Bags" },
  { slug: "return-gifts", label: "Return Gifts" },
  { slug: "hair-accessories", label: "Hair Accessories" },
  { slug: "toys-stationery", label: "Toys & Stationery" },
] as const

export type CategorySlug = (typeof CATEGORIES)[number]["slug"]

export const PRODUCTS: Product[] = [
  // Imitation Jewelry
  {
    id: "ij-001",
    name: "Antique Jhumka Earrings",
    category: "imitation-jewelry",
    price: 349,
    description:
      "Traditional temple-style jhumkas with antique gold finish and pearl drops.",
    image: "/images/cat-jewelry.jpg",
    tags: ["bestseller", "bridal"],
    featured: true,
  },
  {
    id: "ij-002",
    name: "Bridal Necklace Set",
    category: "imitation-jewelry",
    price: 2499,
    description:
      "Complete bridal set with long haram, choker, earrings and maang tikka.",
    image: "/images/cat-jewelry.jpg",
    tags: ["bridal", "new"],
    featured: true,
  },
  {
    id: "ij-003",
    name: "Kundan Statement Chain",
    category: "imitation-jewelry",
    price: 899,
    description: "Kundan and pearl-studded statement chain for festive wear.",
    image: "/images/cat-jewelry.jpg",
    tags: ["festive"],
  },
  {
    id: "ij-004",
    name: "Oxidised Silver Pendant",
    category: "imitation-jewelry",
    price: 249,
    description: "Lightweight oxidised pendant with traditional motif.",
    image: "/images/cat-jewelry.jpg",
  },
  {
    id: "ij-005",
    name: "Ruby Drop Earrings",
    category: "imitation-jewelry",
    price: 449,
    description: "Ruby-coloured stone danglers with gold-plated wire hooks.",
    image: "/images/cat-jewelry.jpg",
    featured: true,
  },
  {
    id: "ij-006",
    name: "Nose Pin Collection",
    category: "imitation-jewelry",
    price: 149,
    description: "Assorted pack of 6 nose pins — studs and hoops.",
    image: "/images/cat-jewelry.jpg",
  },

  // Bangles
  {
    id: "bg-001",
    name: "Glass Bangles Set — Ruby",
    category: "bangles",
    price: 199,
    description: "Set of 12 glass bangles in ruby red with gold rim detailing.",
    image: "/images/cat-bangles.jpg",
    featured: true,
  },
  {
    id: "bg-002",
    name: "Bridal Kangan — Gold Polish",
    category: "bangles",
    price: 899,
    description: "Pair of wide kangan with intricate gold-polish engraving.",
    image: "/images/cat-bangles.jpg",
    tags: ["bridal"],
  },
  {
    id: "bg-003",
    name: "Stone Bangles — Emerald",
    category: "bangles",
    price: 349,
    description: "Metal bangles studded with emerald-green cut stones.",
    image: "/images/cat-bangles.jpg",
  },
  {
    id: "bg-004",
    name: "Daily-wear Metal Bangles",
    category: "bangles",
    price: 249,
    description: "Pack of 4 slim metal bangles in gold tone for daily wear.",
    image: "/images/cat-bangles.jpg",
  },
  {
    id: "bg-005",
    name: "Lac Bangles — Festive Pack",
    category: "bangles",
    price: 499,
    description: "Hand-painted lac bangles, pack of 8, in festive colours.",
    image: "/images/cat-bangles.jpg",
    tags: ["festive"],
  },

  // Cosmetics
  {
    id: "cm-001",
    name: "Kumkum Jar — Temple Grade",
    category: "cosmetics",
    price: 79,
    description: "100g temple-grade turmeric kumkum in a reusable glass jar.",
    image: "/images/cat-cosmetics.jpg",
  },
  {
    id: "cm-002",
    name: "Velvet Bindi Assortment",
    category: "cosmetics",
    price: 129,
    description: "Box of 24 velvet bindis — round, tear-drop and fancy shapes.",
    image: "/images/cat-cosmetics.jpg",
    featured: true,
  },
  {
    id: "cm-003",
    name: "Sandalwood Kajal Stick",
    category: "cosmetics",
    price: 149,
    description: "Long-lasting sandalwood-infused kajal stick.",
    image: "/images/cat-cosmetics.jpg",
  },
  {
    id: "cm-004",
    name: "Matte Lipstick — Festival Reds",
    category: "cosmetics",
    price: 199,
    description: "Single-stick matte lipstick; choose from 5 festival reds.",
    image: "/images/cat-cosmetics.jpg",
  },

  // Leather Products
  {
    id: "lp-001",
    name: "Classic Leather Wallet",
    category: "leather-products",
    price: 899,
    description:
      "Bifold wallet in genuine tan leather with multiple card slots.",
    image: "/images/cat-leather.jpg",
    tags: ["bestseller"],
    featured: true,
  },
  {
    id: "lp-002",
    name: "Ladies Sling Handbag",
    category: "leather-products",
    price: 1499,
    description: "Compact sling handbag with adjustable strap.",
    image: "/images/cat-leather.jpg",
    featured: true,
  },
  {
    id: "lp-003",
    name: "Formal Leather Belt",
    category: "leather-products",
    price: 599,
    description: "Black formal belt with polished buckle. Sizes 32–42.",
    image: "/images/cat-leather.jpg",
  },
  {
    id: "lp-004",
    name: "Laptop Sleeve — 14\"",
    category: "leather-products",
    price: 1299,
    description: "Padded leather sleeve for 13–14 inch laptops.",
    image: "/images/cat-leather.jpg",
  },

  // Leather Accessories
  {
    id: "la-001",
    name: "Slim Card Holder",
    category: "leather-accessories",
    price: 349,
    description: "Minimal card holder with 6 card slots and central pocket.",
    image: "/images/cat-leather-accessories.jpg",
    featured: true,
  },
  {
    id: "la-002",
    name: "Leather Keychain",
    category: "leather-accessories",
    price: 149,
    description: "Handcrafted keychain with antique brass ring.",
    image: "/images/cat-leather-accessories.jpg",
  },
  {
    id: "la-003",
    name: "Leather Watch Strap",
    category: "leather-accessories",
    price: 499,
    description: "Replacement strap in 18–22mm sizes. Multiple colours.",
    image: "/images/cat-leather-accessories.jpg",
  },
  {
    id: "la-004",
    name: "Passport Holder",
    category: "leather-accessories",
    price: 599,
    description: "Travel-ready passport holder with card pockets.",
    image: "/images/cat-leather-accessories.jpg",
  },

  // Dust Bags
  {
    id: "db-001",
    name: "Cotton Dust Bag — Small",
    category: "dust-bags",
    price: 49,
    description: "9\"×6\" cotton drawstring bag for jewelry and small items.",
    image: "/images/cat-dustbags.jpg",
  },
  {
    id: "db-002",
    name: "Cotton Dust Bag — Medium",
    category: "dust-bags",
    price: 79,
    description: "12\"×14\" dust bag suitable for handbags and wallets.",
    image: "/images/cat-dustbags.jpg",
    featured: true,
  },
  {
    id: "db-003",
    name: "Cotton Dust Bag — Large",
    category: "dust-bags",
    price: 129,
    description: "18\"×20\" large dust bag for shoes and large accessories.",
    image: "/images/cat-dustbags.jpg",
  },
  {
    id: "db-004",
    name: "Jewelry Pouch — Velvet",
    category: "dust-bags",
    price: 89,
    description: "4\"×4\" velvet pouch for storing delicate jewelry.",
    image: "/images/cat-dustbags.jpg",
  },

  // Return Gifts
  {
    id: "rg-001",
    name: "Mini Brass Idol Set",
    category: "return-gifts",
    price: 129,
    description: "Pack of 2 small brass idols — perfect as wedding return gifts.",
    image: "/images/cat-gifts.jpg",
    tags: ["wedding"],
    featured: true,
  },
  {
    id: "rg-002",
    name: "Kumkum Bharani Pack",
    category: "return-gifts",
    price: 59,
    description: "Decorated kumkum holder — ideal for baby shower returns.",
    image: "/images/cat-gifts.jpg",
    tags: ["baby-shower"],
  },
  {
    id: "rg-003",
    name: "Pooja Thali — Small",
    category: "return-gifts",
    price: 249,
    description: "Decorative small pooja thali with kalash and diya.",
    image: "/images/cat-gifts.jpg",
  },

  // Hair Accessories
  {
    id: "ha-001",
    name: "Jadai Billai Set",
    category: "hair-accessories",
    price: 1199,
    description: "Traditional bridal hair accessory set — full jadai design.",
    image: "/images/cat-hair.jpg",
    tags: ["bridal"],
    featured: true,
  },
  {
    id: "ha-002",
    name: "Fancy Hair Clips Pack",
    category: "hair-accessories",
    price: 99,
    description: "Pack of 10 assorted hair clips in popular designs.",
    image: "/images/cat-hair.jpg",
  },
  {
    id: "ha-003",
    name: "Stone Hair Bands",
    category: "hair-accessories",
    price: 179,
    description: "Decorative stone-studded hair bands. Set of 2.",
    image: "/images/cat-hair.jpg",
  },

  // Toys & Stationery
  {
    id: "ts-001",
    name: "Soft Toy — Medium Teddy",
    category: "toys-stationery",
    price: 349,
    description: "Plush teddy bear, approx. 14 inches tall.",
    image: "/images/cat-toys.jpg",
  },
  {
    id: "ts-002",
    name: "School Supply Combo",
    category: "toys-stationery",
    price: 299,
    description: "Back-to-school combo: 6 notebooks, pens, geometry box.",
    image: "/images/cat-toys.jpg",
    featured: true,
  },
  {
    id: "ts-003",
    name: "Birthday Gift Pack",
    category: "toys-stationery",
    price: 199,
    description: "Ready-made birthday gift with stationery and small toys.",
    image: "/images/cat-toys.jpg",
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
