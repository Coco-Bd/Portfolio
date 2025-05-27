import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { SpaceBackground } from "@/components/space-background"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Corentin Bedo - Portfolio",
  description: "Portfolio de Corentin Bedo, étudiant en infrastructure et cloud à Ynov Campus Toulouse",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
          <SpaceBackground />
          <Navigation />
          <main className="relative z-10">{children}</main>
        </div>
      </body>
    </html>
  )
}
