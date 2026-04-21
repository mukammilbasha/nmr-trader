import type { Metadata } from "next"
import { Fraunces, Instrument_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { CartProvider } from "@/components/cart/cart-context"
import { CartDrawer } from "@/components/cart/cart-drawer"

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  axes: ["opsz", "SOFT"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://nmr-trader.vercel.app"),
  title: "NMR Traders — Fancy Store in Arcot, Ranipet | Since 1998",
  description:
    "NMR Traders in Arcot, Ranipet — Tamil Nadu's trusted fancy store since 1998. Bangles, imitation jewelry, cosmetics, leather products, dust bags, return gifts and more.",
  generator: "nmrtraders.in",
  keywords: [
    "NMR Traders",
    "Fancy Store Arcot",
    "Fancy Store Ranipet",
    "Ranipet bangles",
    "imitation jewelry Ranipet",
    "leather products Arcot",
    "dust bags Ranipet",
    "return gifts Ranipet",
  ],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${fraunces.variable} bg-background`}>
      <body className="font-sans antialiased selection:bg-primary/90 selection:text-primary-foreground">
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
