import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

import { ScrollToTop } from "@/components/scroll-to-top"
import Script from "next/script"

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Najbolji Online Casini u Hrvatskoj 2025 | najboljikasinohr.com",
  description:
    "najboljikasinohr.com - Pronađite najbolje online casine u Hrvatskoj. Objektivne recenzije, ekskluzivni bonusi i pouzdane preporuke za hrvatske igrače.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hr" className="scroll-smooth">
      <head>
        <Script src="/link-handler.js" strategy="beforeInteractive" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}
