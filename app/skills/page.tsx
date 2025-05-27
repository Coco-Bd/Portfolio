"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Server, Cloud, Network, Shield, Code, Database, Star } from "lucide-react"

const translations = {
  fr: {
    title: "Mes Compétences",
    subtitle: "Un aperçu de mes compétences techniques en infrastructure, réseau et cloud.",
    infrastructure: "Infrastructure",
    cloud: "Cloud Computing",
    networking: "Réseaux",
    security: "Sécurité",
    programming: "Programmation",
    databases: "Bases de données",
    beginner: "Débutant",
    intermediate: "Intermédiaire",
    advanced: "Avancé",
    expert: "Expert",
  },
  en: {
    title: "My Skills",
    subtitle: "An overview of my technical skills in infrastructure, networking, and cloud.",
    infrastructure: "Infrastructure",
    cloud: "Cloud Computing",
    networking: "Networking",
    security: "Security",
    programming: "Programming",
    databases: "Databases",
    beginner: "Beginner",
    intermediate: "Intermediate",
    advanced: "Advanced",
    expert: "Expert",
  },
}

const skillsData = {
  infrastructure: [
    { name: "Linux", level: "expert" },
    { name: "VMware vSphere", level: "advanced" },
    { name: "Docker", level: "advanced" },
    { name: "Kubernetes", level: "intermediate" },
    { name: "Ansible", level: "advanced" },
    { name: "Terraform", level: "intermediate" },
  ],
  cloud: [
    { name: "AWS", level: "advanced" },
    { name: "Azure", level: "intermediate" },
    { name: "Google Cloud", level: "beginner" },
    { name: "CloudFormation", level: "intermediate" },
    { name: "Serverless", level: "beginner" },
  ],
  networking: [
    { name: "Cisco IOS", level: "advanced" },
    { name: "VLAN", level: "expert" },
    { name: "Routing & Switching", level: "expert" },
    { name: "VPN", level: "advanced" },
    { name: "Load Balancing", level: "intermediate" },
    { name: "DNS/DHCP", level: "expert" },
  ],
  security: [
    { name: "Firewall", level: "advanced" },
    { name: "SSL/TLS", level: "advanced" },
    { name: "Network Security", level: "advanced" },
    { name: "Monitoring", level: "expert" },
  ],
  programming: [
    { name: "Bash/Shell", level: "expert" },
    { name: "Python", level: "advanced" },
    { name: "PowerShell", level: "intermediate" },
    { name: "YAML", level: "expert" },
    { name: "JSON", level: "expert" },
  ],
  databases: [
    { name: "MySQL", level: "advanced" },
    { name: "PostgreSQL", level: "intermediate" },
    { name: "MongoDB", level: "intermediate" },
    { name: "Redis", level: "intermediate" },
  ],
}

export default function Skills() {
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

  const getSkillStars = (level: string) => {
    const starCount =
      {
        beginner: 1,
        intermediate: 2,
        advanced: 3,
        expert: 4,
      }[level] || 1

    return Array.from({ length: 4 }, (_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < starCount ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`} />
    ))
  }

  const getSkillColor = (level: string) => {
    const colors = {
      beginner: "text-red-400 bg-red-600/20 border-red-500/30",
      intermediate: "text-yellow-400 bg-yellow-600/20 border-yellow-500/30",
      advanced: "text-blue-400 bg-blue-600/20 border-blue-500/30",
      expert: "text-green-400 bg-green-600/20 border-green-500/30",
    }
    return colors[level as keyof typeof colors] || colors.beginner
  }

  const skillCategories = [
    {
      title: t.infrastructure,
      icon: Server,
      skills: skillsData.infrastructure,
      color: "purple",
    },
    {
      title: t.cloud,
      icon: Cloud,
      skills: skillsData.cloud,
      color: "blue",
    },
    {
      title: t.networking,
      icon: Network,
      skills: skillsData.networking,
      color: "cyan",
    },
    {
      title: t.security,
      icon: Shield,
      skills: skillsData.security,
      color: "green",
    },
    {
      title: t.programming,
      icon: Code,
      skills: skillsData.programming,
      color: "orange",
    },
    {
      title: t.databases,
      icon: Database,
      skills: skillsData.databases,
      color: "pink",
    },
  ]

  return (
    <div className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">{t.title}</h1>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="shadow-2xl border border-purple-500/20 bg-slate-800/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-500"
              style={{
                animationName: "fadeInUp",
                animationDuration: "0.6s",
                animationDelay: `${index * 100}ms`,
                animationFillMode: "forwards",
                animationTimingFunction: "ease-out",
              }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <category.icon className={`w-5 h-5 text-${category.color}-400`} />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-purple-200 font-medium">{skill.name}</span>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">{getSkillStars(skill.level)}</div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Badge variant="outline" className={`text-xs ${getSkillColor(skill.level)}`}>
                        {t[skill.level as keyof typeof t]}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Legend */}
        <div className="mt-16 text-center">
          <Card className="shadow-2xl border border-purple-500/20 bg-slate-800/50 backdrop-blur-sm inline-block">
            <CardHeader>
              <CardTitle className="text-white text-lg">
                {language === "fr" ? "Légende des niveaux" : "Skill Levels"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <Star className="w-4 h-4 text-gray-600" />
                    <Star className="w-4 h-4 text-gray-600" />
                    <Star className="w-4 h-4 text-gray-600" />
                  </div>
                  <span className="text-red-400 text-sm">{t.beginner}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <Star className="w-4 h-4 text-gray-600" />
                    <Star className="w-4 h-4 text-gray-600" />
                  </div>
                  <span className="text-yellow-400 text-sm">{t.intermediate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <Star className="w-4 h-4 text-gray-600" />
                  </div>
                  <span className="text-blue-400 text-sm">{t.advanced}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  </div>
                  <span className="text-green-400 text-sm">{t.expert}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
