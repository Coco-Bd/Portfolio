"use client";

import { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Github, ExternalLink, Code, Filter, Search } from "lucide-react";
import Image from "next/image";

const translations = {
  fr: {
    title: "Mes Projets",
    subtitle:
      "Une sélection de mes projets scolaires et personnels les plus intéressants.",
    all: "Tous",
    school: "Projets scolaires",
    personal: "Projets personnels",
    schoolBadge: "Scolaire",
    personalBadge: "Personnel",
    code: "Code",
    demo: "Démo",
    moreComing: "Plus de projets à venir...",
    searchPlaceholder: "Rechercher un projet...",
    noResults: "Aucun projet trouvé",
    noResultsDesc: "Essayez de modifier vos filtres ou votre recherche",
    resetFilters: "Réinitialiser les filtres",
  },
  en: {
    title: "My Projects",
    subtitle:
      "A selection of my most interesting school and personal projects.",
    all: "All",
    school: "School Projects",
    personal: "Personal Projects",
    schoolBadge: "School",
    personalBadge: "Personal",
    code: "Code",
    demo: "Demo",
    moreComing: "More projects coming...",
    searchPlaceholder: "Search projects...",
    noResults: "No projects found",
    noResultsDesc: "Try adjusting your filters or search terms",
    resetFilters: "Reset filters",
  },
};

// Mock project data
const projects = [
  {
    id: 1,
    title: "Infrastructure Cloud AWS",
    description:
      "Déploiement d'une infrastructure complète sur AWS avec Terraform",
    titleEn: "AWS Cloud Infrastructure",
    descriptionEn: "Complete infrastructure deployment on AWS with Terraform",
    type: "school",
    technologies: ["AWS", "Terraform", "Docker", "Kubernetes"],
    image: "/placeholder.svg?height=200&width=400",
    github: "https://github.com/Coco-Bd",
    demo: "#",
  },
  {
    id: 2,
    title: "Réseau d'Entreprise Simulé",
    description:
      "Configuration complète d'un réseau d'entreprise avec VLANs et sécurité",
    titleEn: "Simulated Enterprise Network",
    descriptionEn:
      "Complete enterprise network configuration with VLANs and security",
    type: "school",
    technologies: ["Cisco", "VLAN", "Routing", "Firewall"],
    image: "/placeholder.svg?height=200&width=400",
    github: "https://github.com/Coco-Bd",
    demo: "#",
  },
  {
    id: 3,
    title: "Monitoring Infrastructure",
    description: "Système de monitoring complet avec Prometheus et Grafana",
    titleEn: "Infrastructure Monitoring",
    descriptionEn: "Complete monitoring system with Prometheus and Grafana",
    type: "personal",
    technologies: ["Prometheus", "Grafana", "Docker", "Linux"],
    image: "/placeholder.svg?height=200&width=400",
    github: "https://github.com/Coco-Bd",
    demo: "#",
  },
  {
    id: 4,
    title: "Serveur Web Haute Disponibilité",
    description:
      "Architecture haute disponibilité avec load balancer et clustering",
    titleEn: "High Availability Web Server",
    descriptionEn:
      "High availability architecture with load balancer and clustering",
    type: "school",
    technologies: ["Nginx", "HAProxy", "Linux", "Clustering"],
    image: "/placeholder.svg?height=200&width=400",
    github: "https://github.com/Coco-Bd",
    demo: "#",
  },
  {
    id: 5,
    title: "Pipeline CI/CD",
    description: "Pipeline automatisé de déploiement avec GitLab CI",
    titleEn: "CI/CD Pipeline",
    descriptionEn: "Automated deployment pipeline with GitLab CI",
    type: "personal",
    technologies: ["GitLab CI", "Docker", "Ansible", "Bash"],
    image: "/placeholder.svg?height=200&width=400",
    github: "https://github.com/Coco-Bd",
    demo: "#",
  },
  {
    id: 6,
    title: "Virtualisation VMware",
    description: "Infrastructure virtualisée complète avec VMware vSphere",
    titleEn: "VMware Virtualization",
    descriptionEn: "Complete virtualized infrastructure with VMware vSphere",
    type: "school",
    technologies: ["VMware", "vSphere", "ESXi", "vCenter"],
    image: "/placeholder.svg?height=200&width=400",
    github: "https://github.com/Coco-Bd",
    demo: "#",
  },
];

export default function Projects() {
  const [language, setLanguage] = useState<"fr" | "en">("fr");
  const [mounted, setMounted] = useState(false);
  const [activeFilter, setActiveFilter] = useState<
    "all" | "school" | "personal"
  >("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setMounted(true);
    // Get language from localStorage
    const savedLanguage = localStorage.getItem("portfolio-language") as
      | "fr"
      | "en"
      | null;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }

    // Listen for language changes
    const handleLanguageChange = (event: CustomEvent) => {
      setLanguage(event.detail);
    };

    window.addEventListener(
      "languageChange",
      handleLanguageChange as EventListener
    );
    return () =>
      window.removeEventListener(
        "languageChange",
        handleLanguageChange as EventListener
      );
  }, []);

  if (!mounted) {
    return null;
  }

  const t = translations[language];

  // Filter projects based on active filter and search term
  const filteredProjects = projects.filter((project) => {
    const matchesFilter =
      activeFilter === "all" || project.type === activeFilter;
    const title = language === "en" ? project.titleEn : project.title;
    const description =
      language === "en" ? project.descriptionEn : project.description;
    const matchesSearch =
      title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.title}
          </h1>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5" />
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-2 p-1 bg-slate-800/50 rounded-lg border border-purple-500/20">
            <Button
              variant={activeFilter === "all" ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveFilter("all")}
              className={`transition-all duration-300 ${
                activeFilter === "all"
                  ? "bg-purple-600 hover:bg-purple-700 text-white"
                  : "text-purple-200 hover:text-white hover:bg-purple-600/30 bg-slate-800/30"
              }`}
            >
              <Filter className="w-4 h-4 mr-2" />
              {t.all}
            </Button>
            <Button
              variant={activeFilter === "school" ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveFilter("school")}
              className={`transition-all duration-300 ${
                activeFilter === "school"
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "text-purple-200 hover:text-white hover:bg-blue-600/30 bg-slate-800/30"
              }`}
            >
              {t.school}
            </Button>
            <Button
              variant={activeFilter === "personal" ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveFilter("personal")}
              className={`transition-all duration-300 ${
                activeFilter === "personal"
                  ? "bg-cyan-600 hover:bg-cyan-700 text-white"
                  : "text-purple-200 hover:text-white hover:bg-cyan-600/30 bg-slate-800/30"
              }`}
            >
              {t.personal}
            </Button>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="shadow-2xl border border-purple-500/20 bg-slate-800/50 backdrop-blur-sm group hover:shadow-purple-500/20 hover:scale-105 transition-all duration-500"
                style={{
                  animationName: "fadeInUp",
                  animationDuration: "0.6s",
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: "forwards",
                  animationTimingFunction: "ease-out",
                }}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={language === "en" ? project.titleEn : project.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="secondary"
                      className={
                        project.type === "school"
                          ? "bg-blue-600/80 text-blue-100 border-blue-500/50 backdrop-blur-sm"
                          : "bg-cyan-600/80 text-cyan-100 border-cyan-500/50 backdrop-blur-sm"
                      }
                    >
                      {project.type === "school"
                        ? t.schoolBadge
                        : t.personalBadge}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white group-hover:text-purple-300 transition-colors duration-300">
                    {language === "en" ? project.titleEn : project.title}
                  </CardTitle>
                  <CardDescription className="text-purple-200">
                    {language === "en"
                      ? project.descriptionEn
                      : project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="border-purple-500/30 text-purple-200 hover:bg-purple-500/20 transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-purple-500/50 text-purple-200 hover:bg-purple-600/30 hover:border-purple-400/70 hover:text-purple-100 transition-all duration-300 bg-slate-800/30"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        {t.code}
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                      asChild
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {t.demo}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Code className="w-16 h-16 text-purple-400 mx-auto mb-6 opacity-50" />
            <h3 className="text-2xl font-semibold text-white mb-4">
              {t.noResults}
            </h3>
            <p className="text-purple-200 mb-8">{t.noResultsDesc}</p>
            <Button
              onClick={() => {
                setActiveFilter("all");
                setSearchTerm("");
              }}
              className="bg-purple-600 hover:bg-purple-700"
            >
              {t.resetFilters}
            </Button>
          </div>
        )}

        {/* Add project placeholder */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-8 py-4 border-2 border-dashed border-purple-500/30 rounded-lg text-purple-200 bg-slate-800/20 backdrop-blur-sm hover:border-purple-400/50 hover:bg-slate-800/30 transition-all duration-300">
            <Code className="w-6 h-6" />
            <span className="text-lg">{t.moreComing}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
