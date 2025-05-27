"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, Star, Sparkles, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const translations = {
  fr: {
    hero: {
      greeting: "Salut, je suis",
      description:
        "Étudiant passionné en infrastructure et cloud à Ynov Campus Toulouse (B2), explorant l'univers des réseaux, de l'infrastructure et des technologies cloud.",
      contact: "Me contacter",
      viewProjects: "Voir mes projets",
    },
    quickIntro: {
      title: "Bienvenue dans mon univers",
      subtitle: "Un aperçu rapide de qui je suis et de ce que je fais",
      student: "Étudiant B2",
      studentDesc: "Infrastructure & Cloud - Ynov Toulouse",
      sysadmin: "SysAdmin",
      sysadminDesc: "Passionné par l'infrastructure",
      explorer: "Cloud Explorer",
      explorerDesc: "Toujours curieux d'apprendre",
    },
    cta: {
      title: "Prêt à explorer ?",
      subtitle: "Découvrez mon parcours, mes projets infrastructure et mes compétences cloud",
      aboutMe: "En savoir plus sur moi",
      myProjects: "Mes projets",
      mySkills: "Mes compétences",
    },
  },
  en: {
    hero: {
      greeting: "Hi, I'm",
      description:
        "Passionate infrastructure and cloud student at Ynov Campus Toulouse (B2), exploring the universe of networking, infrastructure, and cloud technologies.",
      contact: "Get in Touch",
      viewProjects: "View Projects",
    },
    quickIntro: {
      title: "Welcome to my universe",
      subtitle: "A quick glimpse of who I am and what I do",
      student: "B2 Student",
      studentDesc: "Infrastructure & Cloud - Ynov Toulouse",
      sysadmin: "SysAdmin",
      sysadminDesc: "Passionate about infrastructure",
      explorer: "Cloud Explorer",
      explorerDesc: "Always curious to learn",
    },
    cta: {
      title: "Ready to explore?",
      subtitle: "Discover my journey, infrastructure projects, and cloud skills",
      aboutMe: "Learn more about me",
      myProjects: "My projects",
      mySkills: "My skills",
    },
  },
}

export default function Home() {
  const [language, setLanguage] = useState<"fr" | "en">("fr")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Get language from localStorage
    const savedLanguage = localStorage.getItem("portfolio-language") as "fr" | "en" | null
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }

    // Listen for language changes
    const handleLanguageChange = (event: CustomEvent) => {
      setLanguage(event.detail)
    }

    window.addEventListener("languageChange", handleLanguageChange as EventListener)
    return () => window.removeEventListener("languageChange", handleLanguageChange as EventListener)
  }, [])

  if (!mounted) {
    return null
  }

  const t = translations[language]

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  {t.hero.greeting}{" "}
                  <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                    Corentin Bedo
                  </span>
                </h1>
                <p className="text-xl text-purple-200 leading-relaxed">{t.hero.description}</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                  >
                    <Rocket className="w-4 h-4 mr-2" />
                    {t.hero.contact}
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                  >
                    <Star className="w-4 h-4 mr-2" />
                    {t.hero.viewProjects}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute inset-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur-2xl opacity-20 animate-ping"></div>
                <div className="absolute inset-8 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full blur-xl opacity-15 animate-bounce"></div>
                <Image
                  src="/placeholder.svg?height=320&width=320"
                  alt="Photo de profil de Corentin Bedo"
                  width={320}
                  height={320}
                  className="relative z-10 rounded-full object-cover border-4 border-purple-400/50 shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Intro Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{t.quickIntro.title}</h2>
            <p className="text-lg text-purple-200 max-w-2xl mx-auto">{t.quickIntro.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-2xl border border-purple-500/20 bg-slate-800/50 backdrop-blur-sm transform hover:scale-105 hover:rotate-1 transition-all duration-500 group">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-4 group-hover:animate-spin transition-all duration-500">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white">{t.quickIntro.student}</CardTitle>
                <CardDescription className="text-purple-200">{t.quickIntro.studentDesc}</CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-2xl border border-blue-500/20 bg-slate-800/50 backdrop-blur-sm transform hover:scale-105 hover:-rotate-1 transition-all duration-500 group">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-4 group-hover:animate-pulse transition-all duration-500">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white">{t.quickIntro.sysadmin}</CardTitle>
                <CardDescription className="text-blue-200">{t.quickIntro.sysadminDesc}</CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-2xl border border-cyan-500/20 bg-slate-800/50 backdrop-blur-sm transform hover:scale-105 hover:rotate-1 transition-all duration-500 group">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-4 group-hover:animate-bounce transition-all duration-500">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white">{t.quickIntro.explorer}</CardTitle>
                <CardDescription className="text-cyan-200">{t.quickIntro.explorerDesc}</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-blue-900/30 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{t.cta.title}</h2>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto mb-12">{t.cta.subtitle}</p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/about">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                {t.cta.aboutMe}
              </Button>
            </Link>

            <Link href="/projects">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                <Rocket className="w-4 h-4 mr-2" />
                {t.cta.myProjects}
              </Button>
            </Link>

            <Link href="/skills">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
              >
                <Zap className="w-4 h-4 mr-2" />
                {t.cta.mySkills}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
