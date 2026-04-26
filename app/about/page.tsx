import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  Award,
  Heart,
  MapPin,
  ShieldCheck,
  Smile,
  Star,
  Users,
  ArrowRight,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { OrnamentDivider } from "@/components/ornaments"

export const metadata: Metadata = {
  title: "About Us — NMR Traders | Family-run Fancy Store Since 1998",
  description:
    "Learn the story of NMR Traders — a family-run fancy and leather goods store in Arcot, Ranipet since 1998. Quality is Our Identity.",
}

const timeline = [
  {
    year: "1998",
    title: "The Beginning",
    desc: "Founded on Nawab Devadi Street, Arcot by our family with a single belief — quality products at honest prices for every customer.",
  },
  {
    year: "2005",
    title: "Expanding the Range",
    desc: "Grew beyond bangles and cosmetics to include imitation jewelry, hair accessories, return gifts and toys — becoming Arcot's one-stop fancy store.",
  },
  {
    year: "2012",
    title: "Wholesale Trade",
    desc: "Opened wholesale supply to local retailers and event planners across Ranipet District, meeting bulk orders for weddings and festivals.",
  },
  {
    year: "2018",
    title: "Leather & Accessories",
    desc: "Added premium leather products — wallets, handbags, dust bags and personalised accessories — to serve the growing demand in Arcot.",
  },
  {
    year: "2024",
    title: "Digital Store",
    desc: "Launched our online shop at nmr-trader.vercel.app, bringing Arcot's finest fancy goods to customers across Tamil Nadu and beyond.",
  },
]

const values = [
  {
    icon: Award,
    title: "Quality is Our Identity",
    desc: "Every item on our shelves is hand-selected. We stock only what we would use ourselves — no shortcuts, no compromises.",
  },
  {
    icon: ShieldCheck,
    title: "Honest Pricing",
    desc: "Wholesale rates for bulk, fair retail prices for walk-in customers. The same family, the same trust, since 1998.",
  },
  {
    icon: Heart,
    title: "Community First",
    desc: "We serve the families of Arcot and Ranipet — from school supplies to bridal trousseau. This neighbourhood is our home.",
  },
  {
    icon: Smile,
    title: "Warm Service",
    desc: "Every customer is treated like family. Walk in with a question; walk out with a solution and a smile.",
  },
  {
    icon: Users,
    title: "Family Heritage",
    desc: "Three generations of the same family behind the counter — bringing continuity, care and deep product knowledge.",
  },
  {
    icon: Star,
    title: "Trusted for 27 Years",
    desc: "Rated 4.8 / 5 by over 500 local reviews. Arcot knows NMR — and NMR knows Arcot.",
  },
]

const team = [
  {
    name: "Founder & Managing Director",
    role: "Head of Operations",
    tenure: "Estd. 1998",
    desc: "The visionary behind NMR Traders. Built the store from a single counter on Nawab Devadi Street into Arcot's most trusted fancy and leather goods destination.",
    image: "/images/storefront.jpg",
  },
  {
    name: "Senior Director",
    role: "Wholesale & Procurement",
    tenure: "25+ years",
    desc: "Manages vendor relationships and bulk procurement across Ranipet District, ensuring competitive pricing and consistent stock availability.",
    image: "/images/storefront.jpg",
  },
  {
    name: "Director — Retail",
    role: "Customer Experience",
    tenure: "18+ years",
    desc: "Oversees the in-store experience, product display and customer service — making every walk-in feel genuinely welcomed.",
    image: "/images/storefront.jpg",
  },
]

const stats = [
  { value: "27+", label: "Years of service" },
  { value: "1000+", label: "Products stocked" },
  { value: "16", label: "Product categories" },
  { value: "10k+", label: "Happy customers" },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      {/* ── Hero ── */}
      <section className="paper-grain relative isolate overflow-hidden bg-background pt-12 pb-20 md:pt-16 md:pb-28">
        <div className="vignette pointer-events-none absolute inset-0 -z-10" aria-hidden />
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-primary/40" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/80">
                Our Story
              </span>
              <span className="h-px w-10 bg-primary/40" />
            </div>
            <h1 className="mt-5 font-serif font-serif-tight text-4xl font-semibold leading-[1.02] text-foreground md:text-5xl lg:text-[4rem]">
              A family-run store at the{" "}
              <em className="not-italic text-primary">heart of Arcot</em>.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              NMR Traders was founded in 1998 on Nawab Devadi Street, Arcot,
              with one simple belief — every customer deserves quality products
              and a warm welcome. Twenty-seven years later, we remain true to
              that belief, serving families across Ranipet District with the
              finest fancy goods, leather accessories and personalised items.
            </p>
            <div className="mt-8 flex justify-center">
              <OrnamentDivider className="h-3 w-48 opacity-70" />
            </div>
          </div>

          {/* Stats strip */}
          <dl className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-6 md:grid-cols-4 md:gap-10">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center">
                <dt className="order-2 mt-2 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  {s.label}
                </dt>
                <dd className="order-1 font-serif font-serif-tight text-5xl font-semibold text-primary">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Story image + copy ── */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-primary/15 shadow-xl">
              <Image
                src="/images/storefront.jpg"
                alt="NMR Traders store interior — Arcot"
                fill
                className="object-cover"
                sizes="(min-width:1024px) 48vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-background/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary backdrop-blur">
                  <MapPin className="h-3.5 w-3.5" />
                  Nawab Devadi Street, Arcot
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-primary/40" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/80">
                  Who We Are
                </span>
              </div>
              <h2 className="font-serif font-serif-tight text-3xl font-semibold leading-tight text-foreground md:text-4xl">
                Three generations, one counter, one promise.
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                NMR Traders began as a small counter stocked with bangles,
                kumkum and bindi — the everyday essentials of Arcot&apos;s
                families. Over nearly three decades, we have grown into a full
                fancy and leather goods destination, offering over 1,000
                products across 16 categories without ever losing the
                neighbourhood warmth that made us.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Today we serve both retail customers who walk into our
                Noormubarak Manzil store and wholesale buyers across Ranipet
                District — from bridal trousseau planners and event managers
                to school-supply buyers and corporate gift departments.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Our motto has never changed:{" "}
                <span className="font-semibold text-foreground italic">
                  &ldquo;Quality is Our Identity.&rdquo;
                </span>{" "}
                Every product is hand-picked by our family before it reaches
                our shelves.
              </p>
              <OrnamentDivider className="h-3 w-40 opacity-70" />
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/shop"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
                >
                  Shop the Collection
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/profile"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  Company Profile →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-primary/40" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/80">
                Our Journey
              </span>
              <span className="h-px w-10 bg-primary/40" />
            </div>
            <h2 className="mt-4 font-serif font-serif-tight text-3xl font-semibold text-foreground md:text-4xl">
              27 years in the making.
            </h2>
          </div>

          <div className="relative mx-auto max-w-3xl">
            {/* Vertical rule */}
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border md:left-1/2" />

            <div className="flex flex-col gap-12">
              {timeline.map((t, i) => (
                <div
                  key={t.year}
                  className={`relative flex gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-1.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background text-[10px] font-bold text-primary md:left-1/2 md:-translate-x-1/2">
                    <span className="sr-only">{t.year}</span>
                  </div>

                  {/* Card */}
                  <div
                    className={`ml-16 w-full rounded-2xl border border-border bg-card p-6 shadow-sm md:ml-0 md:w-[calc(50%-2rem)] ${
                      i % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <p className="font-serif font-serif-tight text-2xl font-bold text-primary">
                      {t.year}
                    </p>
                    <h3 className="mt-1 font-serif text-lg font-semibold text-foreground">
                      {t.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {t.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-primary/40" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/80">
                Our Values
              </span>
              <span className="h-px w-10 bg-primary/40" />
            </div>
            <h2 className="mt-4 font-serif font-serif-tight text-3xl font-semibold text-foreground md:text-4xl">
              What we stand for.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="group flex flex-col gap-4 rounded-3xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">{v.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leadership team ── */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-primary/40" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/80">
                Our Family
              </span>
              <span className="h-px w-10 bg-primary/40" />
            </div>
            <h2 className="mt-4 font-serif font-serif-tight text-3xl font-semibold text-foreground md:text-4xl">
              The team behind the counter.
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Three generations of combined experience — over 60 years of
              expertise in fancy goods, leather and wholesale retail.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-56 overflow-hidden bg-secondary/40">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(min-width:768px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="rounded-full bg-accent/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-accent-foreground">
                      {member.tenure}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-foreground">{member.name}</h3>
                  <p className="mt-0.5 text-[11px] uppercase tracking-[0.2em] text-primary/80">{member.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-secondary/40 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <OrnamentDivider className="mx-auto mb-8 h-3 w-40 opacity-70" />
          <h2 className="font-serif font-serif-tight text-3xl font-semibold text-foreground md:text-4xl">
            Come visit us in Arcot.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            1/B2, Ground Floor, Noormubarak Manzil, Nawab Devadi Street,
            Near Govt Boys HSS, Arcot — 632503, Ranipet Dist, Tamil Nadu
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/#visit"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
            >
              <MapPin className="h-4 w-4" />
              Get Directions
            </Link>
            <Link
              href="/profile"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              View Company Profile →
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
