# 🚀 Portfolio de Corentin Bedo

Un portfolio moderne et interactif développé avec Next.js, présentant mes compétences en infrastructure, réseau et technologies cloud.

## ✨ Fonctionnalités

- 🌐 **Multilingue** : Support français/anglais avec changement instantané
- 🎨 **Design spatial** : Thème futuriste avec animations et effets visuels
- 📱 **Responsive** : Adaptation parfaite sur tous les appareils
- ⚡ **Performance** : Optimisé avec Next.js 15 et React 18
- 🎯 **Sections complètes** :
  - Page d'accueil avec présentation
  - À propos avec parcours détaillé
  - Formation et certifications
  - Projets avec filtres et recherche
  - Compétences avec système d'étoiles
  - Contact avec formulaire professionnel

## 🛠️ Technologies Utilisées

- **Framework** : Next.js 15 (App Router)
- **Language** : TypeScript
- **Styling** : Tailwind CSS
- **UI Components** : shadcn/ui
- **Icons** : Lucide React
- **Animations** : CSS Animations & Transitions

## 📁 Structure du Projet

\`\`\`
portfolio-website/  
├── app/ # Pages Next.js (App Router)  
│ ├── about/ # Page À propos  
│ ├── contact/ # Page Contact  
│ ├── education/ # Page Formation  
│ ├── projects/ # Page Projets  
│ ├── skills/ # Page Compétences  
│ ├── globals.css # Styles globaux  
│ ├── layout.tsx # Layout principal  
│ └── page.tsx # Page d'accueil  
├── components/ # Composants réutilisables  
│ ├── ui/ # Composants shadcn/ui  
│ ├── navigation.tsx # Navigation principale  
│ └── space-background.tsx # Arrière-plan spatial  
├── lib/ # Utilitaires  
│ └── utils.ts # Fonctions utilitaires  
├── public/ # Assets statiques  
├── .gitignore # Fichiers à ignorer par Git  
├── README.md # Documentation  
├── next.config.mjs # Configuration Next.js  
├── package.json # Dépendances et scripts  
├── tailwind.config.ts # Configuration Tailwind  
└── tsconfig.json # Configuration TypeScript  
\`\`\`

### Changer les couleurs

Les couleurs principales sont définies dans \`tailwind.config.ts\` :

\`\`\`typescript
// Couleurs principales utilisées

- purple-400/500/600 : Couleur principale
- blue-400/500/600 : Couleur secondaire
- cyan-400/500/600 : Couleur d'accent
- slate-800/900 : Arrière-plans
  \`\`\`

## 📦 Scripts Disponibles grace a npm (pour moi lors du dev)

\`\`\`bash
npm run dev # Lancement en mode développement
npm run build # Construction pour la production
npm run start # Lancement en mode production
npm run lint # Vérification du code avec ESLint
\`\`\`

## 🚀 Déploiement

### GitLab Pages

Ce projet est configuré pour un déploiement automatique sur GitLab Pages.

#### Configuration automatique :

1. **Créer un repository GitLab** :
   \`\`\`bash
   git remote add origin https://gitlab.com/votre-username/portfolio-corentin-bedo.git
   git push -u origin main
   \`\`\`

2. **Déploiement automatique** :
   - Le pipeline GitLab CI/CD se lance automatiquement
   - Le site sera disponible sur : `https://votre-username.gitlab.io/portfolio-corentin-bedo`

#### Configuration manuelle :

1. **Activer GitLab Pages** :

   - Allez dans votre projet GitLab
   - Settings → Pages
   - Le déploiement se fait automatiquement via `.gitlab-ci.yml`

2. **Branches de déploiement** :
   - `main` : Production → `https://votre-username.gitlab.io/portfolio-corentin-bedo`
   - `develop` : Staging → Lien disponible dans les artifacts du job

#### Vérifier le déploiement :

1. **Pipeline** : Allez dans CI/CD → Pipelines
2. **Pages** : Settings → Pages pour voir l'URL
3. **Logs** : Vérifiez les logs en cas d'erreur

### Variables d'environnement (optionnel)

Si vous avez besoin de variables d'environnement :

1. **GitLab** : Settings → CI/CD → Variables
2. **Ajouter** :
   - `NEXT_PUBLIC_SITE_URL` : URL de votre site
   - `NEXT_PUBLIC_GA_ID` : Google Analytics (si utilisé)

### Domaine personnalisé

1. **GitLab Pages** : Settings → Pages
2. **New Domain** : Ajouter votre domaine
3. **DNS** : Configurer les enregistrements CNAME/A

### SSL/HTTPS

GitLab Pages fournit automatiquement un certificat SSL Let's Encrypt.

## 📞 Contact

- **Email** : corentin.bedo05@gmail.com
- **GitHub** : [Coco-Bd](https://github.com/Coco-Bd)
- **LinkedIn** : [Profil LinkedIn](#)

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier \`LICENSE\` pour plus de détails.

---

**Développé avec ❤️ par Corentin Bedo**
