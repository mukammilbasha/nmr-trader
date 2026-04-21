import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ProductDetail } from "@/components/product-detail"
import { PRODUCTS, findProduct } from "@/lib/products"

type Params = { id: string }

export async function generateStaticParams(): Promise<Params[]> {
  return PRODUCTS.map((p) => ({ id: p.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { id } = await params
  const product = findProduct(id)
  if (!product) return { title: "Product — NMR Traders" }
  return {
    title: `${product.name} — NMR Traders`,
    description: product.description,
    openGraph: {
      images: [{ url: product.image }],
    },
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { id } = await params
  const product = findProduct(id)
  if (!product) notFound()

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <ProductDetail product={product} />
      <SiteFooter />
    </main>
  )
}
