"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Globe, Download, Menu, X, Sparkles } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const translations = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      education: "Formation",
      projects: "Projets",
      skills: "Compétences",
      contact: "Contact",
      downloadCV: "Télécharger CV",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      education: "Education",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      downloadCV: "Download CV",
    },
  },
}

export function Navigation() {
  const [language, setLanguage] = useState<"fr" | "en">("fr")
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
    // Check localStorage first, then browser language
    const savedLanguage = localStorage.getItem("portfolio-language") as "fr" | "en" | null
    if (savedLanguage) {
      setLanguage(savedLanguage)
    } else {
      const browserLang = navigator.language.toLowerCase()
      const newLanguage = browserLang.startsWith("en") ? "en" : "fr"
      setLanguage(newLanguage)
      localStorage.setItem("portfolio-language", newLanguage)
    }
  }, [])

  const toggleLanguage = () => {
    const newLanguage = language === "fr" ? "en" : "fr"
    setLanguage(newLanguage)
    localStorage.setItem("portfolio-language", newLanguage)
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent("languageChange", { detail: newLanguage }))
  }

  if (!mounted) {
    return null
  }

  const t = translations[language]

  const navItems = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/education", label: t.nav.education },
    { href: "/projects", label: t.nav.projects },
    { href: "/skills", label: t.nav.skills },
    { href: "/contact", label: t.nav.contact },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent hover:from-purple-300 hover:to-blue-300 transition-all duration-300"
            >
              Corentin Bedo
            </Link>
            <div className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-all duration-300 hover:text-purple-300 hover:scale-105 ${
                    pathname === item.href ? "text-purple-300 font-semibold" : "text-purple-200"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-purple-200 hover:text-purple-100 hover:bg-purple-600/30 border border-purple-500/50 hover:border-purple-400/70 transition-all duration-300 bg-slate-800/60 backdrop-blur-sm"
            >
              <Globe className="w-4 h-4 mr-2" />
              {language === "fr" ? "EN" : "FR"}
            </Button>

            {/* Special Spatial CV Download Button */}
            <Button
              size="sm"
              className="hidden sm:flex relative overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 hover:from-purple-500 hover:via-blue-500 hover:to-cyan-500 text-white border-2 border-purple-400/50 hover:border-cyan-400/70 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 group"
            >
              {/* Animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              {/* Sparkle effects */}
              <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full animate-ping"></div>
              <div className="absolute bottom-1 right-2 w-1 h-1 bg-cyan-300 rounded-full animate-pulse"></div>

              <Sparkles className="w-4 h-4 mr-2 animate-spin" style={{ animationDuration: "3s" }} />
              <span className="relative z-10 font-semibold">{t.nav.downloadCV}</span>
              <Download className="w-4 h-4 ml-2 group-hover:animate-bounce" />
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-purple-200 hover:text-purple-100 hover:bg-purple-800/30"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-purple-500/20">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-md transition-all duration-300 ${
                    pathname === item.href
                      ? "text-purple-300 bg-purple-800/30 font-semibold"
                      : "text-purple-200 hover:text-purple-100 hover:bg-purple-800/20"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile CV Button */}
              <Button
                size="sm"
                className="mx-3 mt-4 relative overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 hover:from-purple-500 hover:via-blue-500 hover:to-cyan-500 text-white border-2 border-purple-400/50 hover:border-cyan-400/70 shadow-lg group"
              >
                <Sparkles className="w-4 h-4 mr-2 animate-spin" style={{ animationDuration: "3s" }} />
                <span className="relative z-10 font-semibold">{t.nav.downloadCV}</span>
                <Download className="w-4 h-4 ml-2 group-hover:animate-bounce" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
