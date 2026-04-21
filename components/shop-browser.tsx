"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Search, SlidersHorizontal, X } from "lucide-react"
import { ProductCard } from "@/components/product-card"
import { OrnamentDivider } from "@/components/ornaments"
import {
  CATEGORIES,
  PRODUCTS,
  categoryLabel,
  type CategorySlug,
} from "@/lib/products"
import { useReveal } from "@/hooks/use-reveal"
import { cn } from "@/lib/utils"

type SortKey = "featured" | "price-asc" | "price-desc" | "name" | "discount"

const SORT_OPTIONS: { key: SortKey; label: string }[] = [
  { key: "featured", label: "Featured" },
  { key: "discount", label: "Biggest discount" },
  { key: "price-asc", label: "Price · Low to High" },
  { key: "price-desc", label: "Price · High to Low" },
  { key: "name", label: "Name · A–Z" },
]

const VALID_SLUGS = new Set(CATEGORIES.map((c) => c.slug))

// Picks a representative image per category from the first product
const CATEGORY_IMAGE: Partial<Record<CategorySlug, string>> = (() => {
  const out: Partial<Record<CategorySlug, string>> = {}
  for (const c of CATEGORIES) {
    if (c.slug === "all") continue
    const first = PRODUCTS.find((p) => p.category === c.slug)
    if (first) out[c.slug] = first.image
  }
  return out
})()

export function ShopBrowser() {
  useReveal()
  const search = useSearchParams()
  const [cat, setCat] = useState<CategorySlug>("all")
  const [query, setQuery] = useState("")
  const [sort, setSort] = useState<SortKey>("featured")
  const [filtersOpen, setFiltersOpen] = useState(false)

  useEffect(() => {
    const c = search?.get("c")
    if (c && VALID_SLUGS.has(c as CategorySlug)) {
      setCat(c as CategorySlug)
    }
  }, [search])

  const filtered = useMemo(() => {
    let result = PRODUCTS.slice()
    if (cat !== "all") result = result.filter((p) => p.category === cat)
    if (query.trim()) {
      const q = query.toLowerCase()
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags?.some((t) => t.toLowerCase().includes(q)) ||
          categoryLabel(p.category).toLowerCase().includes(q),
      )
    }
    switch (sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        result.sort((a, b) => b.price - a.price)
        break
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      case "discount":
        result.sort((a, b) => {
          const da = a.mrp ? (a.mrp - a.price) / a.mrp : 0
          const db = b.mrp ? (b.mrp - b.price) / b.mrp : 0
          return db - da
        })
        break
      case "featured":
      default:
        result.sort(
          (a, b) =>
            Number(Boolean(b.featured)) - Number(Boolean(a.featured)),
        )
    }
    return result
  }, [cat, query, sort])

  return (
    <>
      {/* Hero */}
      <section className="paper-grain relative isolate overflow-hidden bg-background pt-10 md:pt-14">
        <div className="vignette pointer-events-none absolute inset-0 -z-10" aria-hidden />
        <div
          className="pointer-events-none absolute -right-32 top-32 -z-10 h-[22rem] w-[22rem] rounded-full bg-accent/20 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-32 top-60 -z-10 h-[22rem] w-[22rem] rounded-full bg-primary/10 blur-3xl"
          aria-hidden
        />

        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-5xl text-center">
            <div data-reveal className="reveal inline-flex items-center gap-3">
              <span className="h-px w-10 bg-primary/40" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/80">
                The NMR Shop
              </span>
              <span className="h-px w-10 bg-primary/40" />
            </div>
            <h1
              data-reveal
              className="reveal mt-5 font-serif font-serif-tight text-4xl font-semibold leading-[1.02] text-foreground md:text-5xl lg:text-[4.25rem]"
              style={{ transitionDelay: "80ms" }}
            >
              Personalised finds.{" "}
              <em className="not-italic text-primary">Honest prices.</em>
            </h1>
            <p
              data-reveal
              className="reveal mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
              style={{ transitionDelay: "160ms" }}
            >
              {PRODUCTS.length}+ items across {CATEGORIES.length - 1} categories —
              personalised pens, leather wallets, kids&apos; school bags,
              drinkware, bridal jewelry, and more. Add what you like, send the
              enquiry on WhatsApp, and collect from our Arcot store or arrange
              delivery across Ranipet.
            </p>
            <div
              data-reveal
              className="reveal mt-6 flex justify-center"
              style={{ transitionDelay: "240ms" }}
            >
              <OrnamentDivider className="h-3 w-48 opacity-70" />
            </div>
          </div>

          {/* Category rail */}
          <div
            data-reveal
            className="reveal mt-12"
            style={{ transitionDelay: "300ms" }}
          >
            <div className="flex items-end justify-between">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/80">
                Browse by category
              </h2>
              <button
                onClick={() => setCat("all")}
                className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary hover:text-primary/80"
              >
                View all
              </button>
            </div>
            <div className="mt-4 -mx-4 overflow-x-auto px-4 pb-2 [scrollbar-width:thin]">
              <ul className="flex w-max gap-3 md:gap-4">
                {CATEGORIES.filter((c) => c.slug !== "all").map((c) => {
                  const img = CATEGORY_IMAGE[c.slug as CategorySlug]
                  const active = cat === c.slug
                  return (
                    <li key={c.slug}>
                      <button
                        onClick={() => setCat(c.slug)}
                        className={cn(
                          "group relative flex h-28 w-36 shrink-0 flex-col justify-end overflow-hidden rounded-2xl border text-left transition-all md:h-32 md:w-44",
                          active
                            ? "border-primary shadow-md"
                            : "border-border hover:border-primary/40 hover:shadow-sm",
                        )}
                      >
                        {img && (
                          <Image
                            src={img}
                            alt=""
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="180px"
                          />
                        )}
                        <div
                          className={cn(
                            "absolute inset-0 transition-colors",
                            active
                              ? "bg-linear-to-t from-primary/90 via-primary/40 to-transparent"
                              : "bg-linear-to-t from-foreground/80 via-foreground/30 to-transparent",
                          )}
                        />
                        <span className="relative z-10 px-3 pb-3 font-serif text-sm font-semibold leading-tight text-primary-foreground">
                          {c.label}
                        </span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Main listing */}
      <section className="bg-background pb-24 pt-10 md:pt-14">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          {/* Controls */}
          <div className="sticky top-16 z-30 -mx-4 border-y border-border bg-background/88 px-4 py-4 backdrop-blur md:top-20 md:mx-0 md:rounded-2xl md:border md:px-5 md:shadow-sm">
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative min-w-40 flex-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search leather wallet, Stanley tumbler, jhumka…"
                  className="w-full rounded-full border border-border bg-background py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    aria-label="Clear search"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                aria-label="Sort products"
                className="rounded-full border border-border bg-background py-2.5 pl-4 pr-8 text-sm text-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                {SORT_OPTIONS.map((o) => (
                  <option key={o.key} value={o.key}>
                    {o.label}
                  </option>
                ))}
              </select>
              <button
                onClick={() => setFiltersOpen((v) => !v)}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary md:hidden"
                aria-expanded={filtersOpen}
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </button>
            </div>

            <div
              className={cn(
                "mt-3 flex flex-wrap gap-2",
                !filtersOpen && "hidden md:flex",
              )}
            >
              {CATEGORIES.map((c) => {
                const active = cat === c.slug
                return (
                  <button
                    key={c.slug}
                    onClick={() => setCat(c.slug)}
                    className={cn(
                      "rounded-full border px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.14em] transition-all",
                      active
                        ? "border-primary bg-primary text-primary-foreground shadow-sm"
                        : "border-border bg-background text-foreground/70 hover:border-primary/40 hover:text-primary",
                    )}
                  >
                    {c.label}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Results count */}
          <div className="mt-6 flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Showing{" "}
              <span className="font-semibold text-foreground">
                {filtered.length}
              </span>{" "}
              of {PRODUCTS.length} items
              {cat !== "all" && (
                <>
                  {" "}in{" "}
                  <span className="font-semibold text-foreground">
                    {categoryLabel(cat)}
                  </span>
                </>
              )}
            </p>
            {(query || cat !== "all") && (
              <button
                onClick={() => {
                  setQuery("")
                  setCat("all")
                }}
                className="text-xs font-semibold uppercase tracking-[0.14em] text-primary hover:text-primary/80"
              >
                Clear filters
              </button>
            )}
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="mt-16 flex flex-col items-center justify-center gap-3 rounded-3xl border border-dashed border-border bg-card p-12 text-center">
              <Search className="h-8 w-8 text-muted-foreground/60" />
              <p className="font-serif text-xl font-semibold text-foreground">
                No items match that search
              </p>
              <p className="max-w-sm text-sm text-muted-foreground">
                Try a different keyword, or reset the filters to see the full
                collection.
              </p>
              <Link
                href="/shop"
                onClick={() => {
                  setQuery("")
                  setCat("all")
                }}
                className="mt-2 inline-flex rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground"
              >
                Reset
              </Link>
            </div>
          ) : (
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((p, idx) => (
                <div
                  key={p.id}
                  data-reveal
                  className="reveal h-full"
                  style={{ transitionDelay: `${Math.min(idx * 30, 400)}ms` }}
                >
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
