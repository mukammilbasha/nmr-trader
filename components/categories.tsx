"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"
import { OrnamentDivider } from "@/components/ornaments"

type Cat = {
  title: string
  description: string
  image: string
  tagline: string
  count: string
  span?: string // grid span for bento layout
}

const categories: Cat[] = [
  {
    title: "Imitation Jewelry",
    description: "Jhumkas, chains, pendants and complete bridal sets.",
    image: "/images/cat-jewelry.jpg",
    tagline: "Bridal-ready",
    count: "200+ designs",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Bangles & Bracelets",
    description: "Glass, metal and stone bangles in every shade of every occasion.",
    image: "/images/cat-bangles.jpg",
    tagline: "Glass · Metal · Stone",
    count: "Full colour wheel",
  },
  {
    title: "Cosmetics & Beauty",
    description: "Bindi, kumkum, kajal, lipsticks and every daily essential.",
    image: "/images/cat-cosmetics.jpg",
    tagline: "Daily essentials",
    count: "Trusted brands",
  },
  {
    title: "Return Gifts",
    description: "Curated sets for weddings, baby showers and festivals.",
    image: "/images/cat-gifts.jpg",
    tagline: "Bulk orders welcome",
    count: "10 – 500 sets",
    span: "md:col-span-2",
  },
  {
    title: "Hair Accessories",
    description: "Clips, bands, pins and decorative jadai accents.",
    image: "/images/cat-hair.jpg",
    tagline: "Everyday to bridal",
    count: "New arrivals weekly",
  },
  {
    title: "Toys & Stationery",
    description: "Kids toys, school supplies, and small gifts.",
    image: "/images/cat-toys.jpg",
    tagline: "For the little ones",
    count: "Back-to-school ready",
  },
]

export function Categories() {
  useReveal()

  return (
    <section id="categories" className="relative overflow-hidden bg-background py-20 md:py-28">
      {/* Background rule */}
      <div className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Editorial heading row */}
        <div className="mb-14 grid grid-cols-1 items-end gap-8 md:mb-20 md:grid-cols-12">
          <div className="md:col-span-7">
            <div
              data-reveal
              className="reveal flex items-center gap-3"
            >
              <span className="h-px w-10 bg-primary/40" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/80">
                The Collection
              </span>
            </div>
            <h2
              data-reveal
              className="reveal mt-4 font-serif font-serif-tight text-4xl font-semibold leading-[1.02] text-foreground md:text-5xl lg:text-[3.5rem]"
              style={{ transitionDelay: "100ms" }}
            >
              Thousands of small wonders,{" "}
              <em className="not-italic text-primary">lined shelf by shelf</em>.
            </h2>
          </div>
          <div
            data-reveal
            className="reveal md:col-span-5"
            style={{ transitionDelay: "220ms" }}
          >
            <p className="max-w-md text-base leading-relaxed text-muted-foreground md:ml-auto md:text-right">
              Walk through any of our twelve categories. Each one is hand-picked
              for quality, sourced for value, and restocked with the latest
              designs every season.
            </p>
            <div className="mt-4 flex md:justify-end">
              <OrnamentDivider className="h-3 w-40 opacity-70" />
            </div>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-5 md:auto-rows-[18rem] md:grid-cols-4">
          {categories.map((category, i) => (
            <article
              key={category.title}
              data-reveal
              className={`reveal-scale card-lift group relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm ${
                category.span ?? ""
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Image */}
              <Image
                src={category.image || "/placeholder.svg"}
                alt={`${category.title} at NMR Traders Arcot`}
                fill
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.06]"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              />

              {/* Gradient scrim */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent transition-opacity duration-500 group-hover:opacity-90"
                aria-hidden
              />
              <div
                className="absolute inset-0 bg-gradient-to-br from-black/0 via-black/0 to-black/20"
                aria-hidden
              />

              {/* Top tag */}
              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-background/90 px-3 py-1.5 backdrop-blur">
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
                  {category.tagline}
                </span>
              </div>

              {/* Corner icon */}
              <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-background text-primary opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:rotate-45">
                <ArrowUpRight className="h-5 w-5" />
              </div>

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6 text-primary-foreground md:p-7">
                <h3 className="font-serif font-serif-tight text-2xl font-semibold leading-tight md:text-3xl">
                  {category.title}
                </h3>
                <p className="max-w-md text-sm leading-relaxed text-primary-foreground/85">
                  {category.description}
                </p>
                <div className="mt-2 flex items-center justify-between border-t border-primary-foreground/20 pt-3">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-primary-foreground/80">
                    {category.count}
                  </span>
                  <span className="text-[10px] font-serif italic text-accent">
                    {String(i + 1).padStart(2, "0")} / {String(categories.length).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer strip */}
        <div
          data-reveal
          className="reveal mt-14 flex flex-col items-center justify-center gap-4 text-center md:flex-row md:gap-6"
        >
          <p className="text-sm text-muted-foreground md:text-base">
            …and many more finds awaiting discovery in-store.
          </p>
          <Link
            href="#visit"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            <span className="link-underline">Plan your visit</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
