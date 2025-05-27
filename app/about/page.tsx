"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, Heart, Target, Coffee, MapPin, Calendar, GraduationCap } from "lucide-react"
import Image from "next/image"

const translations = {
  fr: {
    title: "À propos de moi",
    subtitle:
      "Découvrez mon parcours, mes passions et ce qui me motive dans l'univers de l'infrastructure et du cloud.",
    intro: "Salut ! Je suis Corentin",
    description1:
      "Étudiant en B2 à Ynov Campus Toulouse, je suis passionné par l'infrastructure, les réseaux et les technologies cloud. Mon voyage dans l'univers informatique a commencé par une curiosité naturelle pour comprendre le fonctionnement des systèmes et créer des architectures robustes.",
    description2:
      "Basé à Toulouse, je m'efforce de combiner théorie académique et pratique à travers des projets concrets d'infrastructure et des stages enrichissants. Je crois fermement au pouvoir des technologies cloud pour transformer les entreprises et optimiser leurs performances.",
    description3:
      "Quand je ne configure pas de serveurs ou n'étudie pas les architectures cloud, j'aime explorer de nouvelles technologies d'infrastructure, contribuer à des projets open source et partager mes connaissances avec d'autres étudiants.",
    quickFacts: "En bref",
    age: "Âge",
    location: "Localisation",
    education: "Formation",
    year: "Année",
    languages: "Langues",
    passions: "Mes passions",
    values: "Mes valeurs",
    hobbies: "Loisirs",
    years: "ans",
    french: "Français",
    english: "Anglais",
    currentStatus: "Statut actuel",
    lookingFor: "Recherche de stage en infrastructure/cloud",
  },
  en: {
    title: "About Me",
    subtitle: "Discover my journey, passions, and what drives me in the universe of infrastructure and cloud.",
    intro: "Hi! I'm Corentin",
    description1:
      "B2 student at Ynov Campus Toulouse, I'm passionate about infrastructure, networking, and cloud technologies. My journey in the IT universe began with a natural curiosity to understand how systems work and create robust architectures.",
    description2:
      "Based in Toulouse, I strive to combine academic theory with practice through concrete infrastructure projects and enriching internships. I firmly believe in the power of cloud technologies to transform businesses and optimize their performance.",
    description3:
      "When I'm not configuring servers or studying cloud architectures, I enjoy exploring new infrastructure technologies, contributing to open source projects, and sharing knowledge with fellow students.",
    quickFacts: "Quick Facts",
    age: "Age",
    location: "Location",
    education: "Education",
    year: "Year",
    languages: "Languages",
    passions: "My passions",
    values: "My values",
    hobbies: "Hobbies",
    years: "years old",
    french: "French",
    english: "English",
    currentStatus: "Current Status",
    lookingFor: "Looking for infrastructure/cloud internship",
  },
}

export default function About() {
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

  // Calculate age
  const birthDate = new Date(2005, 10, 3)
  const today = new Date()
  const age =
    today.getFullYear() -
    birthDate.getFullYear() -
    (today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
      ? 1
      : 0)

  return (
    <div className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">{t.title}</h1>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        {/* Hero Section with Photo */}
        <Card className="shadow-2xl border border-purple-500/20 bg-slate-800/50 backdrop-blur-sm mb-8 transform hover:scale-105 transition-all duration-300">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative">
                <div className="w-48 h-48 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                  <Image
                    src="/placeholder.svg?height=192&width=192"
                    alt="Photo de profil de Corentin Bedo"
                    width={192}
                    height={192}
                    className="relative z-10 rounded-full object-cover border-4 border-purple-400/50 shadow-2xl"
                  />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold text-white mb-4">{t.intro}</h2>
                <div className="space-y-3 text-purple-200">
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    <span>Toulouse, France</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <GraduationCap className="w-4 h-4 text-purple-400" />
                    <span>B2 Infrastructure & Cloud - Ynov Campus</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span>
                      {age} {t.years}
                    </span>
                  </div>
                </div>
                <Badge className="mt-4 bg-green-600/20 text-green-200 border-green-500/30">{t.lookingFor}</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Story */}
        <Card className="shadow-2xl border border-purple-500/20 bg-slate-800/50 backdrop-blur-sm mb-8 transform hover:scale-105 transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <User className="w-5 h-5 text-purple-400" />
              {language === "fr" ? "Mon histoire" : "My Story"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-purple-200 leading-relaxed">
            <p>{t.description1}</p>
            <p>{t.description2}</p>
            <p>{t.description3}</p>
          </CardContent>
        </Card>

        {/* Three Column Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Passions */}
          <Card className="shadow-2xl border border-purple-500/20 bg-slate-800/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Heart className="w-5 h-5 text-red-400" />
                {t.passions}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge
                  variant="secondary"
                  className="w-full justify-center bg-purple-600/20 text-purple-200 border-purple-500/30"
                >
                  Infrastructure
                </Badge>
                <Badge
                  variant="secondary"
                  className="w-full justify-center bg-blue-600/20 text-blue-200 border-blue-500/30"
                >
                  Cloud Computing
                </Badge>
                <Badge
                  variant="secondary"
                  className="w-full justify-center bg-cyan-600/20 text-cyan-200 border-cyan-500/30"
                >
                  {language === "fr" ? "Réseaux" : "Networking"}
                </Badge>
                <Badge
                  variant="secondary"
                  className="w-full justify-center bg-purple-600/20 text-purple-200 border-purple-500/30"
                >
                  DevOps
                </Badge>
                <Badge
                  variant="secondary"
                  className="w-full justify-center bg-blue-600/20 text-blue-200 border-blue-500/30"
                >
                  {language === "fr" ? "Virtualisation" : "Virtualization"}
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Values */}
          <Card className="shadow-2xl border border-blue-500/20 bg-slate-800/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Target className="w-5 h-5 text-blue-400" />
                {t.values}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge
                  variant="secondary"
                  className="w-full justify-center bg-green-600/20 text-green-200 border-green-500/30"
                >
                  {language === "fr" ? "Accessibilité" : "Accessibility"}
                </Badge>
                <Badge
                  variant="secondary"
                  className="w-full justify-center bg-blue-600/20 text-blue-200 border-blue-500/30"
                >
                  {language === "fr" ? "Collaboration" : "Collaboration"}
                </Badge>
                <Badge
                  variant="secondary"
                  className="w-full justify-center bg-purple-600/20 text-purple-200 border-purple-500/30"
                >
                  {language === "fr" ? "Apprentissage" : "Learning"}
                </Badge>
                <Badge
                  variant="secondary"
                  className="w-full justify-center bg-cyan-600/20 text-cyan-200 border-cyan-500/30"
                >
                  {language === "fr" ? "Innovation" : "Innovation"}
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Hobbies */}
          <Card className="shadow-2xl border border-cyan-500/20 bg-slate-800/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Coffee className="w-5 h-5 text-cyan-400" />
                {t.hobbies}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge
                  variant="secondary"
                  className="w-full justify-center bg-orange-600/20 text-orange-200 border-orange-500/30"
                >
                  Gaming
                </Badge>
                <Badge
                  variant="secondary"
                  className="w-full justify-center bg-green-600/20 text-green-200 border-green-500/30"
                >
                  {language === "fr" ? "Lecture Tech" : "Tech Reading"}
                </Badge>
                <Badge
                  variant="secondary"
                  className="w-full justify-center bg-blue-600/20 text-blue-200 border-blue-500/30"
                >
                  {language === "fr" ? "Musique" : "Music"}
                </Badge>
                <Badge
                  variant="secondary"
                  className="w-full justify-center bg-purple-600/20 text-purple-200 border-purple-500/30"
                >
                  Sci-Fi
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
