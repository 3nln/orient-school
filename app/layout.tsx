import type React from "react"
import type { Metadata } from "next"

import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"

import "./globals.css"

export const metadata: Metadata = {
  title: "Orient School",
  description: "Orient School - Zamonaviy ta'lim maskani",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uz">
      <body>
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}



import './globals.css'