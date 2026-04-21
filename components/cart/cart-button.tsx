"use client"

import { ShoppingBag } from "lucide-react"
import { useCart } from "@/components/cart/cart-context"
import { cn } from "@/lib/utils"

export function CartButton({ className }: { className?: string }) {
  const { itemCount, toggle } = useCart()
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Open enquiry list${itemCount ? ` (${itemCount} items)` : ""}`}
      className={cn(
        "relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground/80 transition-all hover:border-primary/40 hover:bg-primary/5 hover:text-primary",
        className,
      )}
    >
      <ShoppingBag className="h-4 w-4" />
      {itemCount > 0 && (
        <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-semibold leading-none text-primary-foreground ring-2 ring-background">
          {itemCount > 99 ? "99+" : itemCount}
        </span>
      )}
    </button>
  )
}
