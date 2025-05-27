"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const translations = {
  fr: {
    title: "Ma Formation",
    subtitle:
      "Mon parcours éducatif en infrastructure, réseau et technologies cloud.",
    current: "Actuel",
    duration: "Durée",
    location: "Lieu",
    keySubjects: "Matières principales",
    achievements: "Réalisations",
    projects: "Projets notables",
    currentEducation: "Formation actuelle",
    previousEducation: "Formation précédente",
    certifications: "Certifications",
    inProgress: "En cours",
    obtained: "Obtenu",
  },
  en: {
    title: "My Education",
    subtitle:
      "My educational journey in infrastructure, networking, and cloud technologies.",
    current: "Current",
    duration: "Duration",
    location: "Location",
    keySubjects: "Key Subjects",
    achievements: "Achievements",
    projects: "Notable Projects",
    currentEducation: "Current Education",
    previousEducation: "Previous Education",
    certifications: "Certifications",
    inProgress: "In Progress",
    obtained: "Obtained",
  },
};

const educationData = {
  fr: {
    current: {
      degree: "Bachelor Informatique - Infrastructure & Cloud",
      school: "Ynov Campus Toulouse",
      period: "2023 - 2025",
      status: "B2 - En cours",
      subjects: [
        "Administration Système Linux",
        "Virtualisation VMware",
        "Cloud Computing AWS",
        "Réseaux Cisco",
        "Sécurité Informatique",
        "DevOps & Automation",
        "Monitoring & Supervision",
        "Architecture Cloud",
      ],
      projects: [
        "Infrastructure AWS avec Terraform",
        "Réseau d'entreprise avec VLANs",
        "Pipeline CI/CD GitLab",
        "Monitoring Prometheus/Grafana",
      ],
      achievements: [
        "Projet infrastructure noté 18/20",
        "Participation aux concours de cybersécurité",
        "Certification AWS en préparation",
      ],
    },
    previous: {
      degree: "Baccalauréat Scientifique",
      school: "Lycée Pierre-Paul Riquet",
      period: "2020 - 2023",
      status: "Obtenu avec mention",
      subjects: [
        "Mathématiques",
        "Physique-Chimie",
        "Sciences de l'Ingénieur",
        "Informatique",
      ],
      achievements: [
        "Mention Bien",
        "Spécialité Sciences de l'Ingénieur",
        "Projet technique récompensé",
      ],
    },
  },
  en: {
    current: {
      degree: "Bachelor Computer Science - Infrastructure & Cloud",
      school: "Ynov Campus Toulouse",
      period: "2023 - 2025",
      status: "B2 - In Progress",
      subjects: [
        "Linux System Administration",
        "VMware Virtualization",
        "AWS Cloud Computing",
        "Cisco Networking",
        "IT Security",
        "DevOps & Automation",
        "Monitoring & Supervision",
        "Cloud Architecture",
      ],
      projects: [
        "AWS Infrastructure with Terraform",
        "Enterprise Network with VLANs",
        "GitLab CI/CD Pipeline",
        "Prometheus/Grafana Monitoring",
      ],
      achievements: [
        "Infrastructure project graded 18/20",
        "Participation in cybersecurity competitions",
        "AWS certification in preparation",
      ],
    },
    previous: {
      degree: "Scientific Baccalaureate",
      school: "Pierre-Paul Riquet High School",
      period: "2020 - 2023",
      status: "Obtained with honors",
      subjects: [
        "Mathematics",
        "Physics-Chemistry",
        "Engineering Sciences",
        "Computer Science",
      ],
      achievements: [
        "Good Honors",
        "Engineering Sciences Specialty",
        "Awarded technical project",
      ],
    },
  },
};

const certifications = {
  fr: [
    { name: "AWS Cloud Practitioner", status: "En préparation", date: "2024" },
    { name: "Cisco CCNA", status: "En préparation", date: "2024" },
    { name: "CompTIA Network+", status: "Prévu", date: "2025" },
  ],
  en: [
    { name: "AWS Cloud Practitioner", status: "In Progress", date: "2024" },
    { name: "Cisco CCNA", status: "In Progress", date: "2024" },
    { name: "CompTIA Network+", status: "Planned", date: "2025" },
  ],
};

export default function Education() {
  const [language, setLanguage] = useState<"fr" | "en">("fr");
  const [mounted, setMounted] = useState(false);

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
  const education = educationData[language];
  const certs = certifications[language];

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

        <div className="space-y-8">
          {/* Current Education */}
          <Card className="shadow-2xl border border-purple-500/20 bg-slate-800/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <GraduationCap className="w-6 h-6 text-purple-400" />
                {t.currentEducation}
                <Badge className="ml-2 bg-green-600/20 text-green-200 border-green-500/30">
                  {t.current}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {education.current.degree}
                  </h3>
                  <div className="space-y-2 text-purple-200">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-400" />
                      <span>{education.current.school}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      <span>{education.current.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-green-400" />
                      <span>{education.current.status}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-3">
                    {t.keySubjects}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {education.current.subjects.map((subject, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-purple-600/20 text-purple-200 border-purple-500/30"
                      >
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-white mb-3">
                    {t.projects}
                  </h4>
                  <ul className="space-y-2 text-purple-200">
                    {education.current.projects.map((project, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        {project}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-3">
                    {t.achievements}
                  </h4>
                  <ul className="space-y-2 text-purple-200">
                    {education.current.achievements.map(
                      (achievement, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          {achievement}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Previous Education */}
          <Card className="shadow-2xl border border-blue-500/20 bg-slate-800/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <GraduationCap className="w-6 h-6 text-blue-400" />
                {t.previousEducation}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {education.previous.degree}
                  </h3>
                  <div className="space-y-2 text-blue-200">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-400" />
                      <span>{education.previous.school}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      <span>{education.previous.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-green-400" />
                      <span>{education.previous.status}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-3">
                    {t.keySubjects}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {education.previous.subjects.map((subject, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-blue-600/20 text-blue-200 border-blue-500/30"
                      >
                        {subject}
                      </Badge>
                    ))}
                  </div>
                  <h4 className="font-semibold text-white mb-3 mt-4">
                    {t.achievements}
                  </h4>
                  <ul className="space-y-2 text-blue-200">
                    {education.previous.achievements.map(
                      (achievement, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          {achievement}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="shadow-2xl border border-cyan-500/20 bg-slate-800/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Award className="w-6 h-6 text-cyan-400" />
                {t.certifications}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {certs.map((cert, index) => (
                  <div
                    key={index}
                    className="p-4 border border-cyan-500/20 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors duration-300"
                  >
                    <h4 className="font-semibold text-white mb-2">
                      {cert.name}
                    </h4>
                    <div className="flex items-center justify-between">
                      <Badge
                        variant="secondary"
                        className={
                          cert.status === "En préparation" ||
                          cert.status === "In Progress"
                            ? "bg-yellow-600/20 text-yellow-200 border-yellow-500/30"
                            : cert.status === "Obtenu" ||
                              cert.status === "Obtained"
                            ? "bg-green-600/20 text-green-200 border-green-500/30"
                            : "bg-blue-600/20 text-blue-200 border-blue-500/30"
                        }
                      >
                        {cert.status}
                      </Badge>
                      <span className="text-cyan-200 text-sm">{cert.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
