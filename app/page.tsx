import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { BrandLockup } from "@/components/brand-lockup"
import { About } from "@/components/about"
import { Categories } from "@/components/categories"
import { FeaturedProducts } from "@/components/featured-products"
import { Visit } from "@/components/visit"
import { ContactCta } from "@/components/contact-cta"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <BrandLockup />
      <About />
      <Categories />
      <FeaturedProducts />
      <Visit />
      <ContactCta />
      <SiteFooter />
    </main>
  )
}
