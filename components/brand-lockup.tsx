"use client"

import { NmrFullLogo, OrnamentDivider } from "@/components/ornaments"
import { useReveal } from "@/hooks/use-reveal"

/**
 * A dedicated branded section showcasing the full NMR Traders logo lockup
 * on a dark navy plate — gives the mark its hero moment just after the hero.
 */
export function BrandLockup() {
  useReveal()
  return (
    <section className="relative overflow-hidden bg-background py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div
          data-reveal
          className="reveal-scale relative isolate mx-auto overflow-hidden rounded-[2.25rem] bg-navy-depth px-6 py-12 text-center shadow-[0_40px_80px_-40px_oklch(0.2_0.1_258/0.5)] md:px-16 md:py-16"
        >
          {/* Soft vignette highlights */}
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-accent/25 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-accent/15 blur-3xl"
          />

          {/* Corner ruled marginalia */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-10 top-4 flex justify-between text-[10px] uppercase tracking-[0.3em] text-accent/60"
          >
            <span>— Est. 1998</span>
            <span className="hidden md:inline">Arcot · Ranipet District</span>
            <span>Tamil Nadu</span>
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-10 bottom-4 flex justify-between text-[10px] uppercase tracking-[0.3em] text-accent/60"
          >
            <span>Wholesale</span>
            <span className="hidden md:inline">GSTIN · 33CNIPM5527P1ZG</span>
            <span>Retail</span>
          </div>

          {/* The logo */}
          <div className="relative flex flex-col items-center gap-6">
            <NmrFullLogo width={360} theme="dark" showTagline />

            <OrnamentDivider className="h-3 w-40 text-accent/80" />

            <p className="max-w-2xl font-serif font-serif-soft text-lg italic leading-relaxed text-primary-foreground/90 md:text-xl">
              A family-run fancy store on Nawab Devadi Street in Arcot —
              leather goods, bangles, jewelry, cosmetics and gifts, carefully
              chosen since 1998.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
