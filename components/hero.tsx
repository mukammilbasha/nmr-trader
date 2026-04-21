"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { ArrowRight, MapPin, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SinceSeal, OrnamentDivider } from "@/components/ornaments"
import { useReveal } from "@/hooks/use-reveal"

export function Hero() {
  useReveal()
  const imgRef = useRef<HTMLDivElement | null>(null)
  const [parallax, setParallax] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      if (!imgRef.current) return
      const rect = imgRef.current.getBoundingClientRect()
      const viewport = window.innerHeight
      const progress = (viewport - rect.top) / (viewport + rect.height)
      setParallax(Math.max(-30, Math.min(30, (progress - 0.5) * 60)))
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <section
      id="home"
      className="paper-grain relative isolate overflow-hidden bg-background pt-6 md:pt-10"
    >
      <div className="vignette pointer-events-none absolute inset-0 -z-10" aria-hidden />

      {/* Ambient shapes */}
      <div
        className="pointer-events-none absolute -left-40 top-40 -z-10 h-[28rem] w-[28rem] rounded-full bg-accent/25 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 top-80 -z-10 h-[22rem] w-[22rem] rounded-full bg-primary/15 blur-3xl"
        aria-hidden
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-16 pt-8 md:px-6 md:pb-24 md:pt-12 lg:grid-cols-12 lg:gap-16 lg:pb-28">
        {/* LEFT — editorial column */}
        <div className="relative flex flex-col gap-6 lg:col-span-7">
          <div
            data-reveal
            className="reveal flex items-center gap-4"
            style={{ transitionDelay: "60ms" }}
          >
            <span className="h-px w-10 bg-primary/40" aria-hidden />
            <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/80">
              Fancy Store · Arcot · Ranipet
            </span>
          </div>

          <h1 className="font-serif font-serif-tight text-[2.75rem] font-semibold leading-[0.98] text-foreground md:text-6xl lg:text-[5.5rem]">
            <span
              data-reveal
              className="clip-reveal block"
              style={{ transitionDelay: "120ms" }}
            >
              Everyday <em className="not-italic text-primary">finery</em>,
            </span>
            <span
              data-reveal
              className="clip-reveal block"
              style={{ transitionDelay: "320ms" }}
            >
              hand-picked for
            </span>
            <span
              data-reveal
              className="clip-reveal block"
              style={{ transitionDelay: "520ms" }}
            >
              <span className="draw-underline text-primary">
                every occasion.
              </span>
            </span>
          </h1>

          <p
            data-reveal
            className="reveal max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
            style={{ transitionDelay: "760ms" }}
          >
            Five generations of a family-run fancy store in the heart of Arcot.
            Bangles, imitation jewelry, cosmetics, hair accessories, return
            gifts and everyday essentials — curated with care since{" "}
            <span className="font-semibold text-foreground">1998</span>.
          </p>

          <div
            data-reveal
            className="reveal flex flex-col items-start gap-4 sm:flex-row sm:items-center"
            style={{ transitionDelay: "900ms" }}
          >
            <Button
              asChild
              size="lg"
              className="group rounded-full bg-primary px-6 text-primary-foreground shadow-[0_10px_30px_-12px_oklch(0.36_0.125_20/0.5)] transition-all hover:bg-primary/90 hover:shadow-[0_20px_40px_-14px_oklch(0.36_0.125_20/0.6)]"
            >
              <Link href="#categories">
                Explore Categories
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="group rounded-full text-primary hover:bg-primary/5"
            >
              <Link href="#visit" className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span className="link-underline">Visit our store</span>
              </Link>
            </Button>
          </div>

          <div data-reveal className="reveal mt-6" style={{ transitionDelay: "1050ms" }}>
            <OrnamentDivider className="h-3 w-40 opacity-70" />
          </div>

          {/* Trust strip */}
          <dl className="mt-2 grid grid-cols-3 gap-6 md:gap-10">
            {[
              { dt: "Established", dd: "1998" },
              { dt: "Categories", dd: "12+" },
              { dt: "Rating", dd: "4.8 ★" },
            ].map((s, i) => (
              <div
                key={s.dt}
                data-reveal
                className="reveal"
                style={{ transitionDelay: `${1150 + i * 100}ms` }}
              >
                <dt className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  {s.dt}
                </dt>
                <dd className="mt-1 font-serif font-serif-tight text-3xl font-semibold text-primary md:text-4xl">
                  {s.dd}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* RIGHT — image composition */}
        <div className="relative lg:col-span-5">
          <div
            ref={imgRef}
            className="relative"
            style={{ transform: `translateY(${parallax * 0.25}px)` }}
          >
            <div
              data-reveal
              className="reveal-scale relative overflow-hidden rounded-[2rem] border border-primary/15 shadow-[0_40px_80px_-40px_oklch(0.3_0.08_25/0.45)]"
            >
              <Image
                src="/images/hero-fancy-store.jpg"
                alt="Display of fancy store items including bangles, jewelry and cosmetics at NMR Traders, Arcot"
                width={900}
                height={1100}
                className="h-full w-full object-cover"
                priority
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"
                aria-hidden
              />
              {/* Magazine-style overline on image */}
              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-background/90 px-3 py-1.5 backdrop-blur">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-copper pulse-dot" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground">
                  In store today
                </span>
              </div>
            </div>

            {/* Rotating seal overlapping the image */}
            <div
              data-reveal
              className="reveal-scale absolute -left-6 -top-6 hidden rounded-full bg-background p-3 shadow-xl md:block"
              style={{ transitionDelay: "600ms" }}
            >
              <SinceSeal size={120} />
            </div>

            {/* Rating card */}
            <div
              data-reveal
              className="reveal absolute -bottom-8 left-4 right-4 flex items-center justify-between gap-4 rounded-2xl border border-border/80 bg-card/95 px-5 py-4 shadow-xl backdrop-blur md:-bottom-10 md:left-auto md:-right-6 md:max-w-[19rem]"
              style={{ transitionDelay: "760ms" }}
            >
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  Rated by locals
                </p>
                <p className="mt-0.5 font-serif font-serif-tight text-2xl font-bold text-primary">
                  4.8 / 5 ★
                </p>
                <p className="text-[11px] text-muted-foreground">500+ reviews</p>
              </div>
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold-sheen text-[10px] font-bold uppercase tracking-widest text-primary">
                <span className="text-center leading-tight">
                  27<br />
                  <span className="text-[8px]">years</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category whisper marquee */}
      <div className="border-y border-primary/10 bg-primary/[0.03]">
        <div className="mx-auto flex max-w-[100vw] overflow-hidden">
          <div className="flex min-w-max animate-marquee-slow items-center gap-12 py-5 font-serif text-2xl italic text-primary/70 md:text-3xl">
            {[
              "Bangles",
              "Imitation Jewelry",
              "Cosmetics",
              "Return Gifts",
              "Leather Products",
              "Bridal Sets",
              "Hair Accessories",
              "Dust Bags",
              "Leather Accessories",
              "Toys & Stationery",
              "Kumkum · Bindi",
              "Pooja Essentials",
              "Bangles",
              "Imitation Jewelry",
              "Cosmetics",
              "Return Gifts",
              "Leather Products",
              "Bridal Sets",
              "Hair Accessories",
              "Dust Bags",
              "Leather Accessories",
              "Toys & Stationery",
              "Kumkum · Bindi",
              "Pooja Essentials",
            ].map((label, i) => (
              <span key={i} className="flex items-center gap-12 whitespace-nowrap">
                {label}
                <span
                  aria-hidden
                  className="inline-block h-1.5 w-1.5 rotate-45 bg-accent"
                />
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-24 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground lg:flex">
        <span className="scroll-cue inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/80 text-primary">
          <ArrowDown className="h-4 w-4" />
        </span>
        <span className="text-[10px] uppercase tracking-[0.24em]">Scroll</span>
      </div>
    </section>
  )
}
