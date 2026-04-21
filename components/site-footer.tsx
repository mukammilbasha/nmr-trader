import Link from "next/link"
import { Facebook, Instagram, MapPin, Phone, MessageCircle, Mail } from "lucide-react"
import { NmrMark, OrnamentDivider } from "@/components/ornaments"

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border/60 bg-primary text-primary-foreground">
      {/* Warm accent bar */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-accent to-transparent" />

      {/* Top: giant wordmark */}
      <div className="mx-auto max-w-7xl px-4 pt-16 md:px-6 md:pt-20">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] uppercase tracking-[0.26em] text-primary-foreground/60">
              Family-run since 1998
            </p>
            <h3 className="mt-3 font-serif font-serif-tight text-5xl font-semibold leading-[0.95] md:text-7xl lg:text-[6.5rem]">
              NMR Traders.
            </h3>
            <p className="mt-3 text-sm italic text-accent md:text-base">
              A fancy store in Arcot, for everyone.
            </p>
          </div>
          <OrnamentDivider className="h-3 w-56 text-accent/80" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-primary-foreground/10 p-1.5">
                <NmrMark size={40} />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-serif text-lg font-bold">NMR Traders</span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-primary-foreground/60">
                  Estd 1998 · Arcot · Ranipet
                </span>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-primary-foreground/75">
              Your trusted neighbourhood fancy store for bangles, imitation
              jewelry, leather products, dust bags, cosmetics, gifts, and
              everyday essentials. Three decades, one counter, countless happy
              customers.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Link
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground/80 transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground/80 transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground/80 transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
              >
                <MessageCircle className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              Explore
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#categories", label: "Categories" },
                { href: "#visit", label: "Visit Us" },
                { href: "#contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="link-underline text-primary-foreground/75 hover:text-accent"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-5">
            <h4 className="font-serif text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              Find Us
            </h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <address className="not-italic leading-relaxed">
                  1/B2, Ground Floor, Noormubarak Manzil,<br />
                  Nawab Devadi Street, Near Govt Boys HSS,<br />
                  Arcot — 632503, Ranipet Dist, Tamil Nadu
                </address>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" />
                <a
                  href="tel:+919876543210"
                  className="text-primary-foreground/80 hover:text-accent"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent" />
                <a
                  href="mailto:hello@nmrtraders.in"
                  className="text-primary-foreground/80 hover:text-accent"
                >
                  hello@nmrtraders.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60 md:flex-row md:items-center">
          <p>
            &copy; {new Date().getFullYear()} NMR Traders, Arcot. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rotate-45 bg-accent" aria-hidden />
            GSTIN · <span className="font-mono tracking-wider">33CNIPM5527P1ZG</span>
          </p>
          <p className="italic text-primary-foreground/50">Made with care in Tamil Nadu.</p>
        </div>
      </div>
    </footer>
  )
}
