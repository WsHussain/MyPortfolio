# 🚀 Portfolio Personnel — Waqas Hussain

## 📝 Description

Portfolio hybride (apprentissage + présentation) réalisé dans le cadre du Titre Professionnel
**Développeur Web et Web Mobile** (RNCP niveau 5). Il présente mes projets avec pour chacun une
analyse détaillée (contexte, difficultés, apprentissages) et relie chaque réalisation aux
compétences du référentiel RNCP.

## 🌟 Fonctionnalités

- **Accueil** : accroche, marquee de compétences, liste des projets avec aperçu au survol
- **Pages projet** (`/projet/:slug`) : contexte, objectifs, captures, difficultés & solutions, apprentissages, compétences démontrées
- **Compétences RNCP** (`/competences`) : auto-évaluation des 8 compétences du titre, matrice projets × compétences, analyse de progression
- **À propos** : présentation, photo, téléchargement du CV (PDF)
- **Contact** : formulaire EmailJS + coordonnées directes
- **Flat design & responsive** : menu burger mobile, images adaptatives
- **SEO** : meta description et titre par page, robots.txt, favicon

## 🛠 Stack technique

- [React 18](https://react.dev/) + [React Router](https://reactrouter.com/)
- [Vite](https://vite.dev/) (build & dev server)
- [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite` (post-processing CSS)
- [EmailJS](https://www.emailjs.com/) pour le formulaire de contact

## 🧑‍💻 Développement

```bash
npm install       # installer les dépendances
npm run dev       # serveur de développement (http://localhost:5173)
npm run build     # build de production dans dist/
npm run preview   # prévisualiser le build de production
```

## 🚀 Déploiement

Déploiement continu sur **Vercel** : chaque push sur `main` déclenche un build (`vite build`)
et une mise en production. Le fichier [vercel.json](vercel.json) réécrit toutes les routes vers
`index.html` pour que le routage côté client (React Router) fonctionne en accès direct
(ex. `/projet/keshi`).

## 📂 Structure

```
public/            assets statiques (photo, CV, captures de projets, favicon)
src/
  components/      composants UI (Navbar, Hero, ProjectList, Contact, ...)
  pages/           pages routées (Home, ProjectDetail, Competences)
  data/            contenu : projets et compétences RNCP
  hooks/           usePageMeta (titre + meta description par page)
```

## 🔗 Liens

- **GitHub** : [WsHussain](https://github.com/WsHussain)
- **LinkedIn** : [Waqas Hussain](https://www.linkedin.com/in/waqas-hu/)
- **Instagram** : [@waqas.hu](https://www.instagram.com/waqas.hu/)
