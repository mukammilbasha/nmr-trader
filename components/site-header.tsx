"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useScrolled } from "@/hooks/use-scrolled"
import { NmrMark } from "@/components/ornaments"

const navItems = [
  { href: "#home", label: "Home", index: "01" },
  { href: "#about", label: "About", index: "02" },
  { href: "#categories", label: "Categories", index: "03" },
  { href: "#visit", label: "Visit", index: "04" },
  { href: "#contact", label: "Contact", index: "05" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled(12)
  const [active, setActive] = useState<string>("#home")

  // Scroll-spy: highlight active section
  useEffect(() => {
    if (typeof window === "undefined") return
    const ids = navItems.map((n) => n.href.replace("#", ""))
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-[padding,background,box-shadow] duration-500 ease-out",
        scrolled
          ? "bg-background/85 backdrop-blur-md shadow-[0_1px_0_0_oklch(0.87_0.02_70/0.6)]"
          : "bg-background/0",
      )}
    >
      {/* Top ribbon */}
      <div
        className={cn(
          "w-full overflow-hidden bg-primary text-primary-foreground transition-[max-height,opacity] duration-500",
          scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-[11px] uppercase tracking-[0.18em] md:px-6">
          <span className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent pulse-dot" />
            Family-run since 1998 · Arcot, Ranipet
          </span>
          <span className="hidden md:inline text-primary-foreground/70">
            GSTIN · 33CNIPM5527P1ZG
          </span>
        </div>
      </div>

      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-4 transition-[padding] duration-500 md:px-6",
          scrolled ? "py-2.5" : "py-4",
        )}
      >
        <Link href="#home" className="group flex items-center gap-3">
          <div
            className={cn(
              "transition-transform duration-500 group-hover:rotate-[-6deg]",
              scrolled ? "scale-[0.88]" : "scale-100",
            )}
          >
            <NmrMark size={44} />
          </div>
          <div className="flex flex-col leading-none">
            <span
              className={cn(
                "font-serif font-serif-tight font-bold text-primary transition-all duration-500",
                scrolled ? "text-base md:text-lg" : "text-lg md:text-xl",
              )}
            >
              NMR Traders
            </span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              Estd 1998 · Arcot
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive = active === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative flex items-baseline gap-1.5 text-sm font-medium transition-colors",
                  isActive ? "text-primary" : "text-foreground/70 hover:text-primary",
                )}
              >
                <span className="text-[10px] font-serif italic text-accent/80">
                  {item.index}
                </span>
                <span className="link-underline">{item.label}</span>
                {isActive && (
                  <span
                    aria-hidden
                    className="absolute -bottom-1.5 left-0 h-[2px] w-full origin-left bg-primary transition-transform"
                  />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="hidden md:block">
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-5 shadow-sm"
          >
            <Link href="tel:+919876543210">
              <Phone className="mr-2 h-3.5 w-3.5" />
              Call Store
            </Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border/60 bg-background md:hidden",
          open ? "max-h-[22rem]" : "max-h-0",
          "transition-[max-height] duration-500 ease-in-out",
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-3" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-primary"
            >
              <span className="text-[10px] font-serif italic text-accent/80">{item.index}</span>
              {item.label}
            </Link>
          ))}
          <Button asChild className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="tel:+919876543210">
              <Phone className="mr-2 h-4 w-4" />
              Call Store
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
