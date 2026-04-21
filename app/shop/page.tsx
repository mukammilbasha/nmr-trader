import type { Metadata } from "next"
import { Suspense } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactCta } from "@/components/contact-cta"
import { ShopBrowser } from "@/components/shop-browser"

export const metadata: Metadata = {
  title: "Shop — NMR Traders | Browse Bangles, Jewelry, Leather & More",
  description:
    "Explore NMR Traders' full collection — bangles, imitation jewelry, cosmetics, leather products, dust bags, return gifts and more. Add to enquiry and order via WhatsApp.",
}

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Suspense fallback={<div className="min-h-[40vh]" />}>
        <ShopBrowser />
      </Suspense>
      <ContactCta />
      <SiteFooter />
    </main>
  )
}
