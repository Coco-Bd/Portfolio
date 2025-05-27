"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPinIcon, GraduationCap, Github, Linkedin, Rocket, Send, Building2 } from "lucide-react"
import Link from "next/link"

const translations = {
  fr: {
    title: "Collaborons ensemble",
    subtitle:
      "Vous êtes une entreprise à la recherche d'un stagiaire en infrastructure, réseau ou cloud ? N'hésitez pas à me contacter pour discuter d'opportunités de stage ou de projets.",
    email: "Email",
    location: "Localisation",
    status: "Statut",
    statusValue: "Étudiant en infrastructure & cloud - Recherche de stage",
    sendMessage: "Proposer une opportunité",
    responseTime: "Je vous répondrai rapidement pour discuter de votre proposition.",
    firstName: "Prénom",
    lastName: "Nom",
    company: "Entreprise",
    position: "Poste",
    message: "Votre proposition",
    messagePlaceholder:
      "Décrivez votre entreprise, le poste proposé (infrastructure, réseau, cloud), les missions, la durée du stage...",
    send: "Envoyer la proposition",
    socialLinks: "Mes profils",
    availability: "Disponibilité",
    availabilityValue: "Disponible pour un stage dès maintenant",
    contactInfo: "Informations de contact",
    getInTouch: "Restons en contact",
  },
  en: {
    title: "Let's work together",
    subtitle:
      "Are you a company looking for a motivated intern in infrastructure, networking, or cloud? Feel free to contact me to discuss internship opportunities or projects.",
    email: "Email",
    location: "Location",
    status: "Status",
    statusValue: "Infrastructure & Cloud Student - Looking for internship",
    sendMessage: "Propose an opportunity",
    responseTime: "I'll respond quickly to discuss your proposal.",
    firstName: "First Name",
    lastName: "Last Name",
    company: "Company",
    position: "Position",
    message: "Your proposal",
    messagePlaceholder:
      "Describe your company, the proposed position (infrastructure, networking, cloud), missions, internship duration...",
    send: "Send proposal",
    socialLinks: "My profiles",
    availability: "Availability",
    availabilityValue: "Available for internship immediately",
    contactInfo: "Contact Information",
    getInTouch: "Get in Touch",
  },
}

export default function Contact() {
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
    <div className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">{t.title}</h1>
          <p className="text-lg text-purple-200 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Column - Contact Info & Social */}
          <div className="lg:col-span-4 flex flex-col h-full">
            {/* Contact Information */}
            <Card className="shadow-2xl border border-purple-500/20 bg-slate-800/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-xl">{t.getInTouch}</CardTitle>
                <CardDescription className="text-purple-200">
                  {language === "fr"
                    ? "N'hésitez pas à me contacter pour toute opportunité de stage ou collaboration."
                    : "Feel free to reach out for any internship opportunity or collaboration."}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4 text-white group hover:scale-105 transition-transform duration-300">
                  <div className="p-3 bg-purple-600/20 rounded-lg group-hover:bg-purple-600/30 transition-colors duration-300 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-white mb-1">{t.email}</h3>
                    <p className="text-purple-200 text-sm break-all">corentin.bedo05@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-white group hover:scale-105 transition-transform duration-300">
                  <div className="p-3 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/30 transition-colors duration-300 flex-shrink-0">
                    <MapPinIcon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-white mb-1">{t.location}</h3>
                    <p className="text-blue-200 text-sm">Toulouse, France</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-white group hover:scale-105 transition-transform duration-300">
                  <div className="p-3 bg-cyan-600/20 rounded-lg group-hover:bg-cyan-600/30 transition-colors duration-300 flex-shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-white mb-1">{t.status}</h3>
                    <p className="text-cyan-200 text-sm">{t.statusValue}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-white group hover:scale-105 transition-transform duration-300">
                  <div className="p-3 bg-green-600/20 rounded-lg group-hover:bg-green-600/30 transition-colors duration-300 flex-shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-white mb-1">{t.availability}</h3>
                    <p className="text-green-200 text-sm">{t.availabilityValue}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Spacer to push social links to bottom */}
            <div className="flex-1"></div>

            {/* Social Links */}
            <Card className="shadow-2xl border border-purple-500/20 bg-slate-800/50 backdrop-blur-sm mt-8">
              <CardHeader>
                <CardTitle className="text-white text-xl">{t.socialLinks}</CardTitle>
                <CardDescription className="text-purple-200">
                  {language === "fr"
                    ? "Retrouvez-moi sur mes différentes plateformes."
                    : "Find me on my different platforms."}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-purple-500/50 text-purple-200 hover:bg-purple-600/30 hover:border-purple-400/70 hover:text-purple-100 transition-all duration-300 bg-slate-800/60 backdrop-blur-sm"
                    asChild
                  >
                    <Link href="https://github.com/Coco-Bd" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5 mr-3" />
                      GitHub
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-blue-500/50 text-blue-200 hover:bg-blue-600/30 hover:border-blue-400/70 hover:text-blue-100 transition-all duration-300 bg-slate-800/60 backdrop-blur-sm"
                    asChild
                  >
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5 mr-3" />
                      LinkedIn
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-8">
            <Card className="shadow-2xl border border-purple-500/20 bg-slate-800/80 backdrop-blur-sm h-full">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3 text-2xl">
                  <Send className="w-6 h-6 text-purple-400" />
                  {t.sendMessage}
                </CardTitle>
                <CardDescription className="text-purple-200 text-base">{t.responseTime}</CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-purple-200 mb-3">
                        {t.firstName}
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-3 border border-purple-500/30 rounded-lg bg-slate-700/50 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-purple-200 mb-3">
                        {t.lastName}
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-3 border border-purple-500/30 rounded-lg bg-slate-700/50 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-purple-200 mb-3">
                        {t.company}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 border border-purple-500/30 rounded-lg bg-slate-700/50 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="position" className="block text-sm font-medium text-purple-200 mb-3">
                        {t.position}
                      </label>
                      <input
                        type="text"
                        id="position"
                        name="position"
                        className="w-full px-4 py-3 border border-purple-500/30 rounded-lg bg-slate-700/50 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-purple-200 mb-3">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-purple-500/30 rounded-lg bg-slate-700/50 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-purple-200 mb-3">
                      {t.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder={t.messagePlaceholder}
                      className="w-full px-4 py-3 border border-purple-500/30 rounded-lg bg-slate-700/50 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                      required
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                    size="lg"
                  >
                    <Rocket className="w-5 h-5 mr-2" />
                    {t.send}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
