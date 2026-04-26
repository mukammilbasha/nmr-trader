import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  Award,
  BadgeCheck,
  BarChart3,
  Building2,
  CheckCircle2,
  Globe,
  Layers,
  Package,
  ShieldCheck,
  Star,
  Store,
  Truck,
  ArrowRight,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { OrnamentDivider } from "@/components/ornaments"
import { CATEGORIES, PRODUCTS } from "@/lib/products"

export const metadata: Metadata = {
  title: "Company Profile — NMR Traders | Wholesale & Retail, Arcot",
  description:
    "NMR Traders company profile — store capacity, product categories, quality standards and certifications. Serving Arcot and Ranipet District since 1998.",
}

const storeStats = [
  { icon: Store, value: "27+", label: "Years in business", sub: "Est. 1998" },
  { icon: Package, value: "1000+", label: "Products stocked", sub: "Across 16 categories" },
  { icon: Globe, value: "₹10L+", label: "Annual retail value", sub: "Wholesale & Retail" },
  { icon: Star, value: "4.8 / 5", label: "Customer rating", sub: "500+ reviews" },
]

const capacities = [
  { category: "Imitation Jewelry", monthly: "500+ designs", note: "Bridal, daily & festive" },
  { category: "Bangles & Bracelets", monthly: "2,000+ sets", note: "Glass, metal & stone" },
  { category: "Leather Products", monthly: "300+ items", note: "Wallets, bags & belts" },
  { category: "Personalised Pens", monthly: "1,000+ units", note: "Themed & metal pens" },
  { category: "Return Gifts", monthly: "5,000+ sets", note: "Bulk wedding & festival" },
  { category: "Kids School Bags", monthly: "200+ bags", note: "Licensed & themed" },
  { category: "Drinkware & Tumblers", monthly: "500+ units", note: "Stanley & thermal" },
  { category: "Travel Accessories", monthly: "400+ pieces", note: "Passport, luggage, combo" },
]

const strengths = [
  {
    icon: Layers,
    title: "One-Stop Fancy Store",
    desc: "Sixteen product categories under one roof — bangles, jewelry, leather goods, cosmetics, gifts, kids items and more. Customers never need to go anywhere else.",
  },
  {
    icon: BadgeCheck,
    title: "Wholesale & Retail",
    desc: "We serve both walk-in retail customers and bulk wholesale buyers — event planners, wedding caterers, corporate gift departments and local shop owners.",
  },
  {
    icon: Package,
    title: "Low Minimum Order",
    desc: "Bulk orders start from as few as 10 units. Ideal for weddings, baby showers and festival return gifts — with competitive wholesale pricing.",
  },
  {
    icon: Truck,
    title: "Delivery Across Ranipet",
    desc: "We arrange delivery to homes and businesses across Ranipet District. WhatsApp us your list and we will handle the rest.",
  },
  {
    icon: Globe,
    title: "Curated Sourcing",
    desc: "Products sourced from trusted manufacturers across Tamil Nadu, Karnataka and beyond — selected for quality, durability and value.",
  },
  {
    icon: BarChart3,
    title: "Seasonal Stock Updates",
    desc: "Shelves refreshed every season with the latest designs in jewelry, leather and fancy goods — keeping Arcot in step with current trends.",
  },
]

const certifications = [
  {
    icon: ShieldCheck,
    title: "GSTIN Registered",
    body: "33CNIPM5527P1ZG",
    desc: "Fully GST-compliant wholesale and retail business operating under Tamil Nadu jurisdiction.",
  },
  {
    icon: Award,
    title: "27 Years of Trust",
    body: "Est. 1998",
    desc: "Nearly three decades of uninterrupted operation — testament to consistent quality and customer satisfaction.",
  },
  {
    icon: CheckCircle2,
    title: "Quality Assured",
    body: "Hand-selected stock",
    desc: "Every item on our shelves is personally inspected by our family before stocking — no compromise on quality.",
  },
  {
    icon: Building2,
    title: "Registered Premises",
    body: "Arcot — 632503",
    desc: "Permanent licensed shop at 1/B2, Noormubarak Manzil, Nawab Devadi Street, Arcot, Ranipet District.",
  },
]

const productCategories = CATEGORIES.filter((c) => c.slug !== "all").map((c) => ({
  label: c.label,
  count: PRODUCTS.filter((p) => p.category === c.slug).length,
}))

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      {/* ── Hero ── */}
      <section className="paper-grain relative isolate overflow-hidden bg-background pt-12 pb-20 md:pt-16 md:pb-28">
        <div className="vignette pointer-events-none absolute inset-0 -z-10" aria-hidden />
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-primary/40" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/80">
                  Company Profile
                </span>
              </div>
              <h1 className="mt-5 font-serif font-serif-tight text-4xl font-semibold leading-[1.02] text-foreground md:text-5xl">
                Your trusted partner in{" "}
                <em className="not-italic text-primary">fancy goods & leather</em>.
              </h1>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                NMR Traders is Arcot&apos;s premier wholesale and retail fancy
                store — serving families, businesses and event planners across
                Ranipet District since 1998. With over 1,000 products across
                16 categories, we are the one-stop destination for bangles,
                imitation jewelry, leather goods, personalised gifts and
                everyday essentials.
              </p>
              <div className="mt-6">
                <OrnamentDivider className="h-3 w-40 opacity-70" />
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/shop"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
                >
                  Browse Products <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  About Us →
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-primary/15 shadow-xl">
                <Image
                  src="/images/nmr-logo.png"
                  alt="NMR Traders brand"
                  width={560}
                  height={560}
                  className="w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Store stats ── */}
      <section className="bg-primary py-16 text-primary-foreground md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {storeStats.map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-accent">
                  <s.icon className="h-6 w-6" />
                </div>
                <dd className="font-serif font-serif-tight text-4xl font-bold text-accent md:text-5xl">
                  {s.value}
                </dd>
                <dt className="mt-2 text-sm font-semibold text-primary-foreground">{s.label}</dt>
                <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-primary-foreground/60">
                  {s.sub}
                </p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Stock capacity ── */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-primary/40" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/80">
                Stock Capacity
              </span>
              <span className="h-px w-10 bg-primary/40" />
            </div>
            <h2 className="mt-4 font-serif font-serif-tight text-3xl font-semibold text-foreground md:text-4xl">
              Ready stock — always.
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              We maintain deep stock across all categories so walk-in customers
              and bulk buyers alike never face an out-of-stock situation.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-secondary/60">
                  <th className="px-6 py-4 text-left font-serif text-base font-semibold text-foreground">
                    Category
                  </th>
                  <th className="px-6 py-4 text-center font-serif text-base font-semibold text-foreground">
                    Stock Volume
                  </th>
                  <th className="hidden px-6 py-4 text-right font-serif text-base font-semibold text-foreground md:table-cell">
                    Highlights
                  </th>
                </tr>
              </thead>
              <tbody>
                {capacities.map((row, i) => (
                  <tr
                    key={row.category}
                    className={`border-b border-border/60 transition-colors hover:bg-secondary/30 ${
                      i % 2 === 0 ? "bg-card" : "bg-background"
                    }`}
                  >
                    <td className="px-6 py-4 font-medium text-foreground">{row.category}</td>
                    <td className="px-6 py-4 text-center font-serif font-semibold text-primary">
                      {row.monthly}
                    </td>
                    <td className="hidden px-6 py-4 text-right text-muted-foreground md:table-cell">
                      {row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Core strengths ── */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-primary/40" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/80">
                Core Strengths
              </span>
              <span className="h-px w-10 bg-primary/40" />
            </div>
            <h2 className="mt-4 font-serif font-serif-tight text-3xl font-semibold text-foreground md:text-4xl">
              Why leading buyers choose NMR.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {strengths.map((s) => (
              <div
                key={s.title}
                className="group flex flex-col gap-4 rounded-3xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product category index ── */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-primary/40" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/80">
                Product Range
              </span>
              <span className="h-px w-10 bg-primary/40" />
            </div>
            <h2 className="mt-4 font-serif font-serif-tight text-3xl font-semibold text-foreground md:text-4xl">
              16 categories. 1,000+ products.
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {productCategories.map((cat) => (
              <Link
                key={cat.label}
                href={`/shop?c=${CATEGORIES.find((c) => c.label === cat.label)?.slug ?? "all"}`}
                className="group flex flex-col gap-2 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
              >
                <span className="font-serif text-base font-semibold text-foreground group-hover:text-primary">
                  {cat.label}
                </span>
                <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {cat.count} items
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/shop"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
            >
              Browse Full Collection
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Certifications & Compliance ── */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-primary/40" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/80">
                Compliance & Trust
              </span>
              <span className="h-px w-10 bg-primary/40" />
            </div>
            <h2 className="mt-4 font-serif font-serif-tight text-3xl font-semibold text-foreground md:text-4xl">
              Certified. Compliant. Trusted.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((c) => (
              <div
                key={c.title}
                className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-7 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <c.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">{c.title}</h3>
                  <p className="mt-1 font-mono text-sm font-semibold text-primary">{c.body}</p>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quality statement ── */}
      <section className="bg-primary py-16 text-primary-foreground md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <OrnamentDivider className="mx-auto mb-8 h-3 w-40 text-accent/80" />
          <h2 className="font-serif font-serif-tight text-3xl font-semibold md:text-4xl">
            &ldquo;Quality is Our Identity.&rdquo;
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/85 md:text-lg">
            From the moment a product arrives at our store to the moment it
            reaches your hands, every item undergoes a personal quality check
            by our family. We do not stock anything we would not use ourselves.
            This has been our standard since 1998 — and it always will be.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="tel:+918056418040"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground transition-all hover:bg-accent/90"
            >
              Call +91 80564 18040
            </Link>
            <Link
              href="https://wa.me/918056418040"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-transparent px-7 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              WhatsApp Enquiry
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
