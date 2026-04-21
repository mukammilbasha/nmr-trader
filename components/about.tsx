"use client"

import Image from "next/image"
import { Award, Heart, ShieldCheck, Smile } from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"
import { useCounter } from "@/hooks/use-counter"
import { OrnamentDivider } from "@/components/ornaments"

const features = [
  {
    icon: Award,
    title: "27 Years of Trust",
    description: "Serving Arcot and Ranipet families with quality since 1998.",
  },
  {
    icon: ShieldCheck,
    title: "Genuine Quality",
    description: "Carefully sourced products that last — no compromises.",
  },
  {
    icon: Heart,
    title: "Honest Prices",
    description: "Wholesale rates and daily affordable pricing for everyone.",
  },
  {
    icon: Smile,
    title: "Warm Service",
    description: "A team that treats every customer like family.",
  },
]

function Stat({
  target,
  suffix = "",
  label,
  delay = 0,
}: {
  target: number
  suffix?: string
  label: string
  delay?: number
}) {
  const { value, ref } = useCounter(target)
  return (
    <div
      data-reveal
      className="reveal flex flex-col"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span
        ref={ref}
        className="font-serif font-serif-tight text-5xl font-semibold leading-none text-primary md:text-6xl"
      >
        {value}
        {suffix}
      </span>
      <span className="mt-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </span>
    </div>
  )
}

export function About() {
  useReveal()

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-secondary/50 py-20 md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Image column */}
          <div className="relative order-2 lg:order-1 lg:col-span-6">
            <div
              data-reveal
              className="reveal-x relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-primary/15 shadow-xl"
            >
              <Image
                src="/images/storefront.jpg"
                alt="Inside view of NMR Traders fancy store in Arcot, Ranipet"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 44vw, 100vw"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"
                aria-hidden
              />
              {/* Magazine caption */}
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                <div className="rounded-xl bg-background/90 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-foreground/80 backdrop-blur">
                  Our Arcot storefront
                </div>
                <div className="hidden rounded-xl bg-background/90 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-foreground/80 backdrop-blur md:block">
                  Frame 01 / 02
                </div>
              </figcaption>
            </div>

            {/* Floating quote card */}
            <div
              data-reveal
              className="reveal absolute -right-4 bottom-12 hidden max-w-[18rem] rounded-2xl border border-border/80 bg-card p-5 shadow-xl md:block"
              style={{ transitionDelay: "200ms" }}
            >
              <p className="font-serif font-serif-soft text-base italic leading-snug text-foreground">
                “The whole neighbourhood knows NMR — three generations of my
                family have shopped here.”
              </p>
              <p className="mt-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                <span className="h-px w-4 bg-primary/40" />
                A regular, Ranipet
              </p>
            </div>
          </div>

          {/* Text column */}
          <div className="order-1 flex flex-col gap-6 lg:order-2 lg:col-span-6">
            <div
              data-reveal
              className="reveal flex items-center gap-3"
              style={{ transitionDelay: "80ms" }}
            >
              <span className="h-px w-10 bg-primary/40" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/80">
                Our Story
              </span>
            </div>

            <h2
              data-reveal
              className="reveal font-serif font-serif-tight text-4xl font-semibold leading-[1.05] text-foreground md:text-5xl lg:text-[3.75rem]"
              style={{ transitionDelay: "140ms" }}
            >
              A neighbourhood atelier in the{" "}
              <em className="not-italic text-primary">heart of Arcot</em>.
            </h2>

            <p
              data-reveal
              className="reveal text-base leading-relaxed text-muted-foreground md:text-lg"
              style={{ transitionDelay: "220ms" }}
            >
              NMR Traders began in 1998 as a small family-run fancy store on
              Nawab Devadi Street, built on one belief: every customer deserves
              quality products and a warm welcome. Nearly three decades later,
              we&apos;re proud to be the go-to for festive shopping, wedding
              preparations, school needs, and everyday essentials across
              Ranipet district.
            </p>

            <p
              data-reveal
              className="reveal text-base leading-relaxed text-muted-foreground md:text-lg"
              style={{ transitionDelay: "300ms" }}
            >
              From sparkling bangles and imitation jewelry to cosmetics, leather
              products, dust bags, return gifts and bridal accessories — our
              shelves carry the latest trends alongside timeless classics.
            </p>

            <div
              data-reveal
              className="reveal mt-2"
              style={{ transitionDelay: "360ms" }}
            >
              <OrnamentDivider className="h-3 w-40 opacity-70" />
            </div>

            {/* Animated stats row */}
            <dl className="mt-2 grid grid-cols-3 gap-6 border-y border-border/70 py-8 md:gap-10">
              <Stat target={27} suffix="+" label="Years serving" delay={60} />
              <Stat target={15} suffix="+" label="Product categories" delay={160} />
              <Stat target={10} suffix="k+" label="Happy customers" delay={260} />
            </dl>

            <ul className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map((feature, i) => (
                <li
                  key={feature.title}
                  data-reveal
                  className="reveal group flex items-start gap-3 rounded-xl border border-transparent bg-card p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md"
                  style={{ transitionDelay: `${400 + i * 80}ms` }}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
