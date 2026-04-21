"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  Check,
  ChevronRight,
  MessageCircle,
  Minus,
  Phone,
  Plus,
  ShieldCheck,
  Store,
  Truck,
} from "lucide-react"
import { useState } from "react"
import {
  type Product,
  categoryLabel,
  discountPercent,
  formatInr,
  relatedProducts,
} from "@/lib/products"
import { useCart } from "@/components/cart/cart-context"
import { ProductCard } from "@/components/product-card"
import { OrnamentDivider } from "@/components/ornaments"
import { useReveal } from "@/hooks/use-reveal"
import { cn } from "@/lib/utils"

const STORE_WHATSAPP = "919043029496"

function buildSingleItemMessage(p: Product, qty: number) {
  const msg = `Hello NMR Traders! I'm interested in this item:\n\n${p.name}\nPrice: ${formatInr(
    p.price,
  )} × ${qty} = ${formatInr(p.price * qty)}\n\nProduct ID: ${p.id}\nLink: https://nmr-trader.vercel.app/shop/${p.id}\n\nPlease confirm availability and share pickup/delivery details. Thank you!`
  return encodeURIComponent(msg)
}

export function ProductDetail({ product }: { product: Product }) {
  useReveal()
  const { add, open } = useCart()
  const [qty, setQty] = useState(1)
  const [justAdded, setJustAdded] = useState(false)
  const related = relatedProducts(product, 4)
  const discount = discountPercent(product)

  const handleAdd = () => {
    add(product.id, qty)
    setJustAdded(true)
    setTimeout(() => setJustAdded(false), 1600)
  }

  const waUrl = `https://wa.me/${STORE_WHATSAPP}?text=${buildSingleItemMessage(product, qty)}`

  return (
    <>
      <article className="paper-grain relative isolate overflow-hidden bg-background pb-24 pt-10 md:pt-14">
        <div className="vignette pointer-events-none absolute inset-0 -z-10" aria-hidden />

        <div className="mx-auto max-w-7xl px-4 md:px-6">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground"
          >
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/shop" className="hover:text-primary">
              Shop
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link
              href={`/shop?c=${product.category}`}
              className="hover:text-primary"
            >
              {categoryLabel(product.category)}
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="font-semibold text-foreground">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            {/* Image column */}
            <div className="lg:col-span-7">
              <div
                data-reveal
                className="reveal-scale relative aspect-square overflow-hidden rounded-[2rem] border border-primary/15 bg-secondary/30 shadow-xl"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(min-width: 1024px) 55vw, 100vw"
                />
                {discount && (
                  <div className="absolute left-5 top-5 rounded-full bg-copper px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-lg">
                    -{discount}% OFF
                  </div>
                )}
                <div className="absolute right-5 top-5 rounded-full bg-background/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground backdrop-blur">
                  <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-jewel pulse-dot" />
                  In stock
                </div>
              </div>

              {/* Thumbnail row (reusing the main image for now) */}
              <div className="mt-4 grid grid-cols-4 gap-3">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={cn(
                      "relative aspect-square overflow-hidden rounded-xl border bg-secondary/30",
                      i === 0 ? "border-primary shadow-sm" : "border-border",
                    )}
                  >
                    <Image
                      src={product.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="20vw"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Info column */}
            <div className="flex flex-col gap-5 lg:col-span-5">
              <div data-reveal className="reveal flex items-center gap-3">
                <span className="h-px w-10 bg-primary/40" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/80">
                  {categoryLabel(product.category)}
                </span>
              </div>

              <h1
                data-reveal
                className="reveal font-serif font-serif-tight text-3xl font-semibold leading-[1.05] text-foreground md:text-4xl lg:text-[2.75rem]"
                style={{ transitionDelay: "80ms" }}
              >
                {product.name}
              </h1>

              {/* Price row */}
              <div
                data-reveal
                className="reveal flex flex-wrap items-baseline gap-3 border-y border-border/70 py-4"
                style={{ transitionDelay: "140ms" }}
              >
                <span className="font-serif font-serif-tight text-4xl font-semibold text-primary">
                  {formatInr(product.price)}
                </span>
                {product.mrp && product.mrp > product.price && (
                  <>
                    <span className="text-base text-muted-foreground line-through">
                      {formatInr(product.mrp)}
                    </span>
                    <span className="rounded-full bg-copper/15 px-2 py-0.5 text-xs font-bold text-copper">
                      {discount}% off
                    </span>
                  </>
                )}
                <span className="ml-auto text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  Incl. all taxes
                </span>
              </div>

              {/* Description */}
              <p
                data-reveal
                className="reveal text-base leading-relaxed text-muted-foreground"
                style={{ transitionDelay: "200ms" }}
              >
                {product.description}
              </p>

              {/* Details list */}
              {product.details && product.details.length > 0 && (
                <ul
                  data-reveal
                  className="reveal space-y-2 rounded-2xl border border-border/70 bg-card p-5 text-sm text-foreground"
                  style={{ transitionDelay: "260ms" }}
                >
                  {product.details.map((d, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Qty + CTAs */}
              <div
                data-reveal
                className="reveal mt-2 flex flex-col gap-3"
                style={{ transitionDelay: "320ms" }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    Qty
                  </span>
                  <div className="flex items-center rounded-full border border-border bg-background">
                    <button
                      onClick={() => setQty((q) => Math.max(1, q - 1))}
                      aria-label="Decrease quantity"
                      className="flex h-10 w-10 items-center justify-center text-foreground/70 hover:text-primary"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="min-w-8 text-center font-semibold text-foreground">
                      {qty}
                    </span>
                    <button
                      onClick={() => setQty((q) => q + 1)}
                      aria-label="Increase quantity"
                      className="flex h-10 w-10 items-center justify-center text-foreground/70 hover:text-primary"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <button
                    onClick={handleAdd}
                    className={cn(
                      "group inline-flex items-center justify-center gap-2 rounded-full border border-primary bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-12px_oklch(0.36_0.125_20/0.5)] transition-all hover:bg-primary/90",
                      justAdded && "bg-jewel border-jewel",
                    )}
                  >
                    {justAdded ? (
                      <>
                        <Check className="h-4 w-4" />
                        Added to list
                      </>
                    ) : (
                      <>
                        <Plus className="h-4 w-4 transition-transform group-hover:rotate-90" />
                        Add to Enquiry
                      </>
                    )}
                  </button>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                  >
                    <MessageCircle className="h-4 w-4 text-primary transition-transform group-hover:-rotate-12" />
                    Buy on WhatsApp
                  </a>
                </div>

                <button
                  onClick={open}
                  className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
                >
                  View enquiry list
                </button>
              </div>

              {/* Trust strip */}
              <ul
                data-reveal
                className="reveal mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3"
                style={{ transitionDelay: "400ms" }}
              >
                <li className="flex items-start gap-3 rounded-xl border border-border/70 bg-card p-3 text-xs">
                  <Store className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">Store pickup</p>
                    <p className="text-muted-foreground">Arcot, Ranipet</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 rounded-xl border border-border/70 bg-card p-3 text-xs">
                  <Truck className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">Delivery</p>
                    <p className="text-muted-foreground">Across Ranipet Dist.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 rounded-xl border border-border/70 bg-card p-3 text-xs">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">Genuine</p>
                    <p className="text-muted-foreground">Quality assured</p>
                  </div>
                </li>
              </ul>

              {/* Quick help */}
              <div
                data-reveal
                className="reveal mt-2 flex flex-wrap items-center gap-4 rounded-2xl border border-dashed border-border bg-secondary/40 p-4 text-sm"
                style={{ transitionDelay: "460ms" }}
              >
                <span className="font-serif italic text-foreground">
                  Need help?
                </span>
                <a
                  href={`tel:+${STORE_WHATSAPP}`}
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <Phone className="h-4 w-4" />
                  +91 90430 29496
                </a>
                <Link
                  href="/#visit"
                  className="inline-flex items-center gap-2 text-foreground hover:text-primary"
                >
                  Visit the store →
                </Link>
              </div>
            </div>
          </div>

          {/* Back link */}
          <div className="mt-16">
            <Link
              href="/shop"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to shop
            </Link>
          </div>
        </div>
      </article>

      {/* Related products */}
      {related.length > 0 && (
        <section className="bg-secondary/40 py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="mb-10 flex flex-col items-center text-center">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-primary/40" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/80">
                  You may also like
                </span>
                <span className="h-px w-10 bg-primary/40" />
              </div>
              <h2 className="mt-4 font-serif font-serif-tight text-3xl font-semibold text-foreground md:text-4xl">
                More from {categoryLabel(product.category)}
              </h2>
              <OrnamentDivider className="mt-4 h-3 w-40 opacity-70" />
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
