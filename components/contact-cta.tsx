"use client"

import Link from "next/link"
import { MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useReveal } from "@/hooks/use-reveal"
import { NmrFullLogo, OrnamentDivider } from "@/components/ornaments"

export function ContactCta() {
  useReveal()
  return (
    <section id="contact" className="relative bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div
          data-reveal
          className="reveal-scale relative isolate overflow-hidden rounded-[2.25rem] border border-primary/40 bg-primary px-6 py-16 text-primary-foreground md:px-14 md:py-20"
        >
          {/* Soft orbs */}
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/30 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-accent/15 blur-3xl"
            aria-hidden
          />

          {/* Engraved ruled lines */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-12 top-4 flex justify-between text-[10px] uppercase tracking-[0.3em] text-primary-foreground/40"
          >
            <span>— Est. 1998</span>
            <span className="hidden md:inline">Arcot · Ranipet District</span>
            <span>Tamil Nadu</span>
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-12 bottom-4 flex justify-between text-[10px] uppercase tracking-[0.3em] text-primary-foreground/40"
          >
            <span>NMR Traders</span>
            <span className="hidden md:inline">GSTIN · 33CNIPM5527P1ZG</span>
            <span>Since 1998</span>
          </div>

          {/* Full branded logo plate */}
          <div className="absolute right-4 top-6 hidden opacity-95 lg:block">
            <NmrFullLogo width={220} theme="dark" showTagline={false} />
          </div>

          <div className="relative flex flex-col items-start gap-6 md:max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-accent">
                Something special?
              </span>
            </div>

            <h2 className="font-serif font-serif-tight text-4xl font-semibold leading-[1.05] text-balance md:text-5xl lg:text-[3.75rem]">
              Bulk orders, bridal <em className="not-italic text-accent">trousseaus</em>, and custom gifts — talk to us.
            </h2>

            <p className="max-w-xl text-base leading-relaxed text-primary-foreground/85 md:text-lg">
              Whether it&apos;s a hundred return gifts or a full bridal
              collection, our team will help you plan and pick the perfect items
              at the best price. Walk in, call, or WhatsApp — we&apos;ll take
              care of the rest.
            </p>

            <OrnamentDivider className="h-3 w-40 text-accent/80" />

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="group rounded-full bg-accent px-6 text-accent-foreground hover:bg-accent/90"
              >
                <Link href="tel:+918056418040">
                  <Phone className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
                  Call +91 80564 18040
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group rounded-full border-primary-foreground/30 bg-transparent px-6 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link href="https://wa.me/918056418040" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4 transition-transform group-hover:-rotate-12" />
                  WhatsApp Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
