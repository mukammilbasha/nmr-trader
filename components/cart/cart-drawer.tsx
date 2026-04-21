"use client"

import Image from "next/image"
import { useEffect } from "react"
import { Minus, Plus, ShoppingBag, Trash2, X, MessageCircle, Phone } from "lucide-react"
import { useCart } from "@/components/cart/cart-context"
import { formatInr } from "@/lib/products"
import { cn } from "@/lib/utils"

const STORE_WHATSAPP = "919043029496"

function buildWhatsAppMessage(
  resolved: ReturnType<typeof useCart>["resolved"],
  totalInr: number,
): string {
  const header = "Hello NMR Traders! I'd like to enquire about these items:\n"
  const lines = resolved.map(
    (i, idx) =>
      `${idx + 1}. ${i.product.name} — ${formatInr(i.product.price)} × ${i.qty} = ${formatInr(
        i.product.price * i.qty,
      )}`,
  )
  const total = `\nTotal: ${formatInr(totalInr)}`
  const footer = "\n\nPlease confirm availability and share pickup/delivery details. Thank you!"
  return encodeURIComponent(`${header}\n${lines.join("\n")}${total}${footer}`)
}

export function CartDrawer() {
  const { isOpen, close, resolved, itemCount, totalInr, setQty, remove, clear } = useCart()

  // Lock body scroll when open
  useEffect(() => {
    if (typeof document === "undefined") return
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isOpen, close])

  const waMessage = buildWhatsAppMessage(resolved, totalInr)
  const waUrl = `https://wa.me/${STORE_WHATSAPP}?text=${waMessage}`

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[90] bg-foreground/40 backdrop-blur-sm transition-opacity duration-400",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={close}
        aria-hidden={!isOpen}
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping enquiry list"
        className={cn(
          "fixed right-0 top-0 z-[100] flex h-dvh w-full max-w-md flex-col border-l border-border bg-background shadow-2xl transition-transform duration-500 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Header */}
        <header className="flex items-center justify-between border-b border-border bg-secondary/60 px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <ShoppingBag className="h-4 w-4" />
            </div>
            <div>
              <h2 className="font-serif font-serif-tight text-lg font-semibold text-foreground">
                Your Enquiry List
              </h2>
              <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                {itemCount} {itemCount === 1 ? "item" : "items"}
              </p>
            </div>
          </div>
          <button
            onClick={close}
            aria-label="Close cart"
            className="flex h-9 w-9 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-background hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </header>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {resolved.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/5 text-primary/70">
                <ShoppingBag className="h-7 w-7" />
              </div>
              <div>
                <p className="font-serif text-lg font-semibold text-foreground">
                  Your list is empty
                </p>
                <p className="mt-1 max-w-[18rem] text-sm text-muted-foreground">
                  Browse the shop and add anything that catches your eye. Send
                  the list to us on WhatsApp and we&apos;ll confirm availability.
                </p>
              </div>
            </div>
          ) : (
            <ul className="divide-y divide-border">
              {resolved.map((i) => (
                <li key={i.id} className="flex gap-4 py-4">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-border bg-muted">
                    <Image
                      src={i.product.image}
                      alt={i.product.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col justify-between">
                    <div>
                      <p className="truncate font-serif text-base font-semibold text-foreground">
                        {i.product.name}
                      </p>
                      <p className="mt-0.5 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                        {i.product.category.replace(/-/g, " ")}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-primary">
                        {formatInr(i.product.price)}
                      </p>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-border">
                        <button
                          aria-label="Decrease quantity"
                          className="flex h-7 w-7 items-center justify-center text-foreground/70 transition-colors hover:bg-primary/5 hover:text-primary"
                          onClick={() => setQty(i.id, i.qty - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="min-w-6 text-center text-xs font-semibold">
                          {i.qty}
                        </span>
                        <button
                          aria-label="Increase quantity"
                          className="flex h-7 w-7 items-center justify-center text-foreground/70 transition-colors hover:bg-primary/5 hover:text-primary"
                          onClick={() => setQty(i.id, i.qty + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <button
                        aria-label={`Remove ${i.product.name}`}
                        onClick={() => remove(i.id)}
                        className="flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {resolved.length > 0 && (
          <footer className="border-t border-border bg-secondary/50 px-5 py-4">
            <div className="flex items-baseline justify-between border-b border-border/70 pb-3">
              <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Indicative total
              </span>
              <span className="font-serif font-serif-tight text-2xl font-semibold text-primary">
                {formatInr(totalInr)}
              </span>
            </div>
            <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground">
              Prices are indicative. Final total is confirmed by our team on
              enquiry — visit us, call, or send the list via WhatsApp.
            </p>
            <div className="mt-3 flex flex-col gap-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
              >
                <MessageCircle className="h-4 w-4 transition-transform group-hover:-rotate-12" />
                Send Enquiry on WhatsApp
              </a>
              <a
                href={`tel:+${STORE_WHATSAPP}`}
                className="flex items-center justify-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                <Phone className="h-4 w-4 text-primary" />
                Call the Store
              </a>
              <button
                onClick={clear}
                className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-destructive"
              >
                Clear list
              </button>
            </div>
          </footer>
        )}
      </aside>
    </>
  )
}
