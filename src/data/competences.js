// Référentiel Titre Professionnel "Développeur Web et Web Mobile" — niveau 5 (RNCP37674).
// ⚠️ Vérifier les intitulés exacts avec la liste fournie par l'équipe pédagogique.
// Les niveaux et analyses sont une auto-évaluation : à relire et personnaliser.

export const blocs = [
    {
        id: 1,
        titre: "Développer la partie front-end d'une application web ou web mobile sécurisée",
    },
    {
        id: 2,
        titre: "Développer la partie back-end d'une application web ou web mobile sécurisée",
    },
];

export const competences = [
    {
        id: "c1",
        bloc: 1,
        titre: "Installer et configurer son environnement de travail",
        niveau: 3,
        analyse:
            "De simples fichiers ouverts dans VS Code à un vrai workflow : Git/GitHub sur chaque projet, Node.js et npm, puis un build Vite avec Tailwind pour ce portfolio. Je sais aujourd'hui initialiser un projet propre, gérer mes dépendances et versionner mon travail.",
        projets: ["todo-list", "portfolio", "twitter"],
    },
    {
        id: "c2",
        bloc: 1,
        titre: "Maquetter des interfaces utilisateur",
        niveau: 2,
        analyse:
            "J'ai appris à passer par une maquette Figma avant d'écrire la moindre ligne de code, notamment pour le site Keshi. Prochaine étape : systématiser les parcours utilisateur et les maquettes responsive (mobile first) avant chaque projet.",
        projets: ["keshi"],
    },
    {
        id: "c3",
        bloc: 1,
        titre: "Réaliser des interfaces utilisateur statiques",
        niveau: 3,
        analyse:
            "HTML sémantique, CSS moderne (flexbox, grid, animations) et intégration fidèle à la maquette : le site Keshi et la structure du clone Twitter m'ont permis de consolider ces bases, avec une attention portée au responsive.",
        projets: ["keshi", "twitter", "portfolio"],
    },
    {
        id: "c4",
        bloc: 1,
        titre: "Développer la partie dynamique des interfaces utilisateur",
        niveau: 3,
        analyse:
            "Du JavaScript vanilla (algorithme du Puissance 4, manipulation du DOM) jusqu'à React (Todo List, ce portfolio) : gestion d'état, composants réutilisables, événements. C'est le domaine où j'ai le plus progressé au cours de la formation.",
        projets: ["puissance-4", "todo-list", "twitter", "portfolio"],
    },
    {
        id: "c5",
        bloc: 2,
        titre: "Mettre en place une base de données relationnelle",
        niveau: 2,
        analyse:
            "Conception de schémas relationnels (MCD/MLD), création de tables, clés étrangères et contraintes d'intégrité avec MySQL pour My Cinema et l'interface d'administration SQL. Je souhaite approfondir l'optimisation (index, normalisation avancée).",
        projets: ["my-cinema", "sql-admin"],
    },
    {
        id: "c6",
        bloc: 2,
        titre: "Développer des composants d'accès aux données SQL et NoSQL",
        niveau: 2,
        analyse:
            "Requêtes SQL préparées (protection contre l'injection), CRUD complet côté PHP pour My Cinema et SQL Admin, et accès aux données du clone Twitter. À venir : pratiquer une base NoSQL (MongoDB) sur un projet concret.",
        projets: ["my-cinema", "sql-admin", "twitter"],
    },
    {
        id: "c7",
        bloc: 2,
        titre: "Développer des composants métier côté serveur",
        niveau: 2,
        analyse:
            "Logique métier en PHP : authentification, sessions, validation des données côté serveur pour My Cinema et le clone Twitter. Je progresse sur l'architecture (séparation des responsabilités, MVC).",
        projets: ["my-cinema", "twitter"],
    },
    {
        id: "c8",
        bloc: 2,
        titre: "Documenter le déploiement d'une application dynamique",
        niveau: 2,
        analyse:
            "Ce portfolio est mon cas pratique : build de production avec Vite, déploiement continu sur Vercel relié au dépôt GitHub, documentation dans le README. Objectif suivant : déployer une application avec back-end sur un VPS (OVH).",
        projets: ["portfolio"],
    },
];

export const niveauLabels = {
    1: "Notions",
    2: "En consolidation",
    3: "Acquis",
    4: "Maîtrisé",
};

export const getCompetence = (id) => competences.find((c) => c.id === id);
