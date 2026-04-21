"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { PRODUCTS } from "@/lib/products"
import { ProductCard } from "@/components/product-card"
import { OrnamentDivider } from "@/components/ornaments"
import { useReveal } from "@/hooks/use-reveal"

export function FeaturedProducts() {
  useReveal()
  const featured = PRODUCTS.filter((p) => p.featured).slice(0, 8)

  return (
    <section
      id="featured"
      className="relative overflow-hidden bg-background py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Heading row */}
        <div className="mb-12 grid grid-cols-1 items-end gap-8 md:mb-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <div data-reveal className="reveal flex items-center gap-3">
              <span className="h-px w-10 bg-primary/40" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/80">
                Shop the Store
              </span>
            </div>
            <h2
              data-reveal
              className="reveal mt-4 font-serif font-serif-tight text-4xl font-semibold leading-[1.02] text-foreground md:text-5xl lg:text-[3.5rem]"
              style={{ transitionDelay: "100ms" }}
            >
              Customer{" "}
              <em className="not-italic text-primary">favourites</em>, fresh on our shelves.
            </h2>
          </div>
          <div
            data-reveal
            className="reveal md:col-span-5"
            style={{ transitionDelay: "200ms" }}
          >
            <p className="max-w-md text-base leading-relaxed text-muted-foreground md:ml-auto md:text-right">
              Our most-loved picks across bangles, jewelry, leather goods and
              more. Add anything to your enquiry list — we&apos;ll confirm
              availability over WhatsApp.
            </p>
            <div className="mt-4 flex md:justify-end">
              <OrnamentDivider className="h-3 w-40 opacity-70" />
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-4">
          {featured.map((p, i) => (
            <div
              key={p.id}
              data-reveal
              className="reveal h-full"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <ProductCard product={p} />
            </div>
          ))}
        </div>

        {/* View all CTA */}
        <div
          data-reveal
          className="reveal mt-12 flex flex-col items-center justify-center gap-3 text-center"
        >
          <Link
            href="/shop"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-12px_oklch(0.36_0.125_20/0.5)] transition-all hover:bg-primary/90 hover:shadow-[0_20px_40px_-14px_oklch(0.36_0.125_20/0.6)]"
          >
            Explore the full collection
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {PRODUCTS.length}+ items across 9 categories
          </p>
        </div>
      </div>
    </section>
  )
}
