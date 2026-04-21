"use client"

import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Search, SlidersHorizontal, X } from "lucide-react"
import { ProductCard } from "@/components/product-card"
import { OrnamentDivider } from "@/components/ornaments"
import { CATEGORIES, PRODUCTS, type CategorySlug } from "@/lib/products"
import { useReveal } from "@/hooks/use-reveal"
import { cn } from "@/lib/utils"

type SortKey = "featured" | "price-asc" | "price-desc" | "name"

const SORT_OPTIONS: { key: SortKey; label: string }[] = [
  { key: "featured", label: "Featured" },
  { key: "price-asc", label: "Price · Low to High" },
  { key: "price-desc", label: "Price · High to Low" },
  { key: "name", label: "Name · A–Z" },
]

const VALID_SLUGS = new Set(CATEGORIES.map((c) => c.slug))

export function ShopBrowser() {
  useReveal()
  const search = useSearchParams()
  const [cat, setCat] = useState<CategorySlug>("all")
  const [query, setQuery] = useState("")
  const [sort, setSort] = useState<SortKey>("featured")
  const [filtersOpen, setFiltersOpen] = useState(false)

  // Sync from URL ?c=slug on mount / when search params change
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
          p.tags?.some((t) => t.toLowerCase().includes(q)),
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
      case "featured":
      default:
        result.sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)))
    }
    return result
  }, [cat, query, sort])

  return (
    <section className="paper-grain relative isolate overflow-hidden bg-background pt-10 md:pt-14">
      <div className="vignette pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-5xl text-center md:mb-14">
          <div
            data-reveal
            className="reveal inline-flex items-center gap-3"
          >
            <span className="h-px w-10 bg-primary/40" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/80">
              The Shop
            </span>
            <span className="h-px w-10 bg-primary/40" />
          </div>
          <h1
            data-reveal
            className="reveal mt-5 font-serif font-serif-tight text-4xl font-semibold leading-[1.02] text-foreground md:text-5xl lg:text-[4.25rem]"
            style={{ transitionDelay: "100ms" }}
          >
            Explore the <em className="not-italic text-primary">full collection</em>.
          </h1>
          <p
            data-reveal
            className="reveal mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
            style={{ transitionDelay: "200ms" }}
          >
            Browse what&apos;s on our shelves. Add items to your enquiry list
            and send it across on WhatsApp — we&apos;ll confirm availability
            and arrange pickup or delivery within Ranipet.
          </p>
          <div
            data-reveal
            className="reveal mt-6 flex justify-center"
            style={{ transitionDelay: "280ms" }}
          >
            <OrnamentDivider className="h-3 w-48 opacity-70" />
          </div>
        </div>

        {/* Controls */}
        <div className="sticky top-16 z-30 -mx-4 border-y border-border bg-background/85 px-4 py-4 backdrop-blur md:top-20 md:mx-0 md:rounded-2xl md:border md:px-5 md:shadow-sm">
          <div className="flex flex-wrap items-center gap-3">
            {/* Search */}
            <div className="relative flex-1 min-w-[10rem]">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search bangles, leather wallets, jhumkas…"
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
            {/* Sort */}
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
            {/* Mobile filter toggle */}
            <button
              onClick={() => setFiltersOpen((v) => !v)}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary md:hidden"
              aria-expanded={filtersOpen}
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>
          </div>

          {/* Category chips */}
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
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-2 gap-4 pb-20 sm:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((p, idx) => (
              <div
                key={p.id}
                data-reveal
                className="reveal h-full"
                style={{ transitionDelay: `${Math.min(idx * 40, 400)}ms` }}
              >
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
