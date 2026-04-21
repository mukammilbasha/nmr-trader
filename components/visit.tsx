"use client"

import { Clock, Landmark, MapPin, MessageCircle, Phone, Route } from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"
import { useStoreStatus } from "@/hooks/use-store-status"
import { OrnamentDivider } from "@/components/ornaments"
import { cn } from "@/lib/utils"

const schedule = [
  { day: "Mon – Sat", hours: "9:30 AM – 9:00 PM" },
  { day: "Sunday", hours: "10:00 AM – 8:00 PM" },
  { day: "Festivals", hours: "Extended hours" },
]

const ADDRESS = "1/B2, Ground Floor, Noormubarak Manzil, Nawab Devadi St, Arcot 632503"
const MAPS_QUERY = encodeURIComponent(
  "NMR Traders, Noormubarak Manzil, Nawab Devadi St, Arcot 632503, Tamil Nadu",
)

export function Visit() {
  useReveal()
  const status = useStoreStatus()

  return (
    <section id="visit" className="relative overflow-hidden bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto mb-14 grid max-w-6xl grid-cols-1 items-end gap-6 md:mb-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <div data-reveal className="reveal flex items-center gap-3">
              <span className="h-px w-10 bg-primary/40" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/80">
                Visit the Store
              </span>
            </div>
            <h2
              data-reveal
              className="reveal mt-4 font-serif font-serif-tight text-4xl font-semibold leading-[1.05] text-foreground md:text-5xl lg:text-[3.5rem]"
              style={{ transitionDelay: "100ms" }}
            >
              Come say hello on{" "}
              <em className="not-italic text-primary">Nawab Devadi Street</em>.
            </h2>
          </div>
          <div data-reveal className="reveal md:col-span-5" style={{ transitionDelay: "200ms" }}>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground md:ml-auto md:text-right">
              Walk in any day of the week and browse the full collection. Our
              team is ready to help you find exactly what you&apos;re looking
              for.
            </p>
            <div className="mt-4 flex md:justify-end">
              <OrnamentDivider className="h-3 w-40 opacity-70" />
            </div>
          </div>
        </div>

        {/* Live status strip */}
        <div
          data-reveal
          className="reveal mb-8 flex flex-col items-start justify-between gap-3 rounded-2xl border border-border/70 bg-card px-5 py-4 shadow-sm md:flex-row md:items-center"
        >
          <div className="flex items-center gap-4">
            <span
              className={cn(
                "relative flex h-3 w-3 items-center justify-center rounded-full",
                status.isOpen ? "bg-jewel pulse-dot" : "bg-copper",
              )}
            >
              <span
                className={cn(
                  "absolute inline-flex h-full w-full rounded-full opacity-75",
                  status.isOpen ? "bg-jewel animate-ping" : "bg-copper",
                )}
              />
            </span>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-semibold text-foreground">
                {status.label}
              </span>
              <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {status.sublabel}
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${MAPS_QUERY}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
            >
              <Route className="h-4 w-4" />
              Get Directions
            </a>
            <a
              href="https://wa.me/919043029496"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <div
            data-reveal
            className="reveal group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            style={{ transitionDelay: "60ms" }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-serif font-serif-tight text-2xl font-semibold text-foreground">
              Our Address
            </h3>
            <address className="mt-3 text-sm not-italic leading-relaxed text-muted-foreground">
              <p className="font-semibold text-foreground">NMR Traders — Fancy Store</p>
              <p>1/B2, Ground Floor</p>
              <p>Noormubarak Manzil</p>
              <p>Nawab Devadi Street</p>
              <p>Near Govt Boys Higher Secondary School</p>
              <p>Arcot — 632503</p>
              <p>Ranipet District, Tamil Nadu</p>
            </address>
            <div className="mt-5 flex items-center gap-2 border-t border-border/70 pt-4 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              <Landmark className="h-3.5 w-3.5 text-primary/70" />
              <span>GSTIN · 33CNIPM5527P1ZG</span>
            </div>
          </div>

          <div
            data-reveal
            className="reveal group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            style={{ transitionDelay: "160ms" }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-serif font-serif-tight text-2xl font-semibold text-foreground">
              Store Hours
            </h3>
            <dl className="mt-3 space-y-2 text-sm">
              {schedule.map((s) => (
                <div
                  key={s.day}
                  className="flex items-baseline justify-between border-b border-dashed border-border/60 pb-2 last:border-0"
                >
                  <dt className="text-muted-foreground">{s.day}</dt>
                  <dd className="font-serif font-medium text-foreground">{s.hours}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-5 flex items-center gap-2 border-t border-border/70 pt-4 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-jewel pulse-dot" />
              <span>All times in IST</span>
            </div>
          </div>

          <div
            data-reveal
            className="reveal group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            style={{ transitionDelay: "260ms" }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-serif font-serif-tight text-2xl font-semibold text-foreground">
              Get in Touch
            </h3>
            <ul className="mt-3 space-y-4 text-sm">
              <li>
                <a
                  href="tel:+919043029496"
                  className="group/link block rounded-xl border border-border/70 p-3 transition-colors hover:border-primary/50 hover:bg-primary/5"
                >
                  <span className="block text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    Call us
                  </span>
                  <span className="mt-1 flex items-center justify-between font-serif text-lg font-semibold text-foreground">
                    +91 90430 29496
                    <Phone className="h-4 w-4 text-primary opacity-0 transition-opacity group-hover/link:opacity-100" />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919043029496"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link block rounded-xl border border-border/70 p-3 transition-colors hover:border-primary/50 hover:bg-primary/5"
                >
                  <span className="block text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    WhatsApp
                  </span>
                  <span className="mt-1 flex items-center justify-between font-serif text-lg font-semibold text-foreground">
                    +91 90430 29496
                    <MessageCircle className="h-4 w-4 text-primary opacity-0 transition-opacity group-hover/link:opacity-100" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Map */}
        <div
          data-reveal
          className="reveal mt-10 overflow-hidden rounded-3xl border border-border shadow-sm"
        >
          <div className="relative">
            <iframe
              title="NMR Traders Arcot location map"
              src={`https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`}
              width="100%"
              height="460"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="block"
            />
            <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 rounded-full bg-background/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground shadow">
              <MapPin className="h-3 w-3 text-primary" />
              {ADDRESS}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
