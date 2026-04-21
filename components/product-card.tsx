"use client"

import Image from "next/image"
import { Plus, Check } from "lucide-react"
import { useEffect, useState } from "react"
import { type Product, formatInr, CATEGORIES } from "@/lib/products"
import { useCart } from "@/components/cart/cart-context"
import { cn } from "@/lib/utils"

const CATEGORY_LABELS: Record<string, string> = Object.fromEntries(
  CATEGORIES.map((c) => [c.slug, c.label]),
)

export function ProductCard({
  product,
  className,
}: {
  product: Product
  className?: string
}) {
  const { add } = useCart()
  const [justAdded, setJustAdded] = useState(false)

  useEffect(() => {
    if (!justAdded) return
    const id = setTimeout(() => setJustAdded(false), 1500)
    return () => clearTimeout(id)
  }, [justAdded])

  const handleAdd = () => {
    add(product.id, 1)
    setJustAdded(true)
  }

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl",
        className,
      )}
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-secondary/40">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          sizes="(min-width:1024px) 25vw, (min-width:640px) 33vw, 50vw"
        />

        {/* Tags */}
        {product.tags && product.tags.length > 0 && (
          <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
            {product.tags.slice(0, 2).map((t) => (
              <span
                key={t}
                className="rounded-full bg-background/95 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-primary backdrop-blur"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Quick-add button (appears on hover on desktop, always on mobile) */}
        <button
          type="button"
          onClick={handleAdd}
          aria-label={`Add ${product.name} to enquiry list`}
          className={cn(
            "absolute bottom-3 right-3 flex h-11 w-11 items-center justify-center rounded-full text-primary-foreground shadow-lg transition-all duration-500",
            justAdded
              ? "bg-jewel scale-110"
              : "bg-primary hover:scale-110 hover:bg-primary/90 md:opacity-0 md:translate-y-1 md:group-hover:opacity-100 md:group-hover:translate-y-0",
          )}
        >
          {justAdded ? <Check className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
        </button>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-serif font-serif-tight text-lg font-semibold leading-tight text-foreground">
            {product.name}
          </h3>
        </div>
        <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          {CATEGORY_LABELS[product.category] ?? product.category}
        </p>
        <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>
        <div className="mt-auto flex items-baseline justify-between border-t border-border/70 pt-3">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Starting at
            </p>
            <p className="font-serif font-serif-tight text-xl font-semibold text-primary">
              {formatInr(product.price)}
            </p>
          </div>
          <button
            onClick={handleAdd}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-primary transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground",
              justAdded && "border-jewel bg-jewel text-jewel-foreground",
            )}
          >
            {justAdded ? (
              <>
                <Check className="h-3 w-3" />
                Added
              </>
            ) : (
              <>
                <Plus className="h-3 w-3" />
                Enquire
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  )
}
