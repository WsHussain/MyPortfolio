// Données des projets. Les textes (contexte, difficultés, apprentissages) sont un
// premier jet : à relire et personnaliser — c'est cette analyse qui est évaluée.
// TODO: remplacer les liens `github` par l'URL exacte de chaque dépôt.

export const projects = [
    {
        slug: "keshi",
        title: "KESHI",
        category: "Web Design",
        year: "2024",
        description: "Site vitrine immersif pour l'artiste Keshi.",
        image: "/projets/keshi-website.png",
        images: [
            { src: "/projets/maquette-site.png", caption: "Maquette réalisée en amont sur Figma" },
            { src: "/projets/keshi-website.png", caption: "Intégration finale du site" },
        ],
        stack: ["Figma", "HTML5", "CSS3", "JavaScript"],
        contexte:
            "Projet d'intégration front-end : concevoir et intégrer un site vitrine immersif autour de l'univers musical de l'artiste Keshi. Le travail a commencé par une maquette Figma, validée avant de passer à l'intégration, pour respecter un vrai workflow de production.",
        objectifs: [
            "Maquetter l'interface sur Figma avant toute ligne de code",
            "Intégrer une interface fidèle à la maquette, en HTML/CSS sémantique",
            "Soigner l'ambiance visuelle (typographie, imagerie, animations douces)",
        ],
        difficultes: [
            {
                probleme: "Rester fidèle à la maquette sur toutes les tailles d'écran",
                solution:
                    "Approche mobile-first avec flexbox et grid, et vérification systématique aux points de rupture définis dans la maquette.",
            },
            {
                probleme: "Créer une ambiance immersive sans sacrifier la lisibilité",
                solution:
                    "Hiérarchie typographique stricte et animations CSS limitées aux éléments d'accroche.",
            },
        ],
        apprentissages:
            "Ce projet m'a appris l'importance de la phase de maquettage : partir d'une maquette validée m'a fait gagner un temps considérable à l'intégration. C'est aussi le projet qui a consolidé mes bases HTML/CSS.",
        competences: ["c2", "c3"],
        github: "https://github.com/WsHussain",
        demo: null,
    },
    {
        slug: "my-cinema",
        title: "MY CINEMA",
        category: "App Web",
        year: "2024",
        description: "Gestionnaire de films avec base de données complexe.",
        image: "/projets/my-cinema.png",
        images: [{ src: "/projets/my-cinema.png", caption: "Interface de gestion des films" }],
        stack: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
        contexte:
            "Application web complète de gestion de films : catalogue, fiches détaillées, ajout et modification de contenus. Le cœur du projet est la conception de la base de données relationnelle (films, genres, réalisateurs, acteurs) et son exploitation côté serveur en PHP.",
        objectifs: [
            "Concevoir un schéma relationnel normalisé (MCD/MLD)",
            "Développer un CRUD complet en PHP avec requêtes préparées",
            "Construire une interface de consultation claire côté client",
        ],
        difficultes: [
            {
                probleme: "Modéliser les relations many-to-many (films ↔ acteurs, films ↔ genres)",
                solution:
                    "Tables de liaison avec clés étrangères et contraintes d'intégrité, validées par des jeux de données de test.",
            },
            {
                probleme: "Sécuriser les entrées utilisateur",
                solution:
                    "Requêtes préparées PDO systématiques et validation/échappement des données côté serveur.",
            },
        ],
        apprentissages:
            "Mon premier vrai projet back-end : j'ai compris comment une base bien conçue simplifie tout le reste de l'application, et pris de bons réflexes de sécurité (requêtes préparées, validation serveur).",
        competences: ["c5", "c6", "c7"],
        github: "https://github.com/WsHussain",
        demo: null,
    },
    {
        slug: "puissance-4",
        title: "PUISSANCE 4",
        category: "Game Dev",
        year: "2024",
        description: "Algorithme de jeu classique en JavaScript.",
        image: "/projets/puissance-4.png",
        images: [{ src: "/projets/puissance-4.png", caption: "Plateau de jeu en cours de partie" }],
        stack: ["JavaScript", "HTML5", "CSS3"],
        contexte:
            "Implémentation du jeu Puissance 4 en JavaScript vanilla : génération dynamique de la grille, tour par tour, et surtout l'algorithme de détection de victoire (alignements horizontaux, verticaux et diagonaux).",
        objectifs: [
            "Écrire un algorithme de détection de victoire fiable",
            "Manipuler le DOM sans framework",
            "Gérer l'état du jeu proprement (tour, grille, fin de partie)",
        ],
        difficultes: [
            {
                probleme: "Détecter les alignements diagonaux dans la grille",
                solution:
                    "Parcours de la matrice avec des vecteurs de direction, ce qui unifie les quatre cas (horizontal, vertical, deux diagonales) en une seule fonction.",
            },
        ],
        apprentissages:
            "Le projet qui m'a fait progresser en algorithmie pure : décomposer un problème, raisonner sur une structure de données (matrice) et tester chaque cas limite. Une base précieuse avant de passer à React.",
        competences: ["c4"],
        github: "https://github.com/WsHussain",
        demo: null,
    },
    {
        slug: "sql-admin",
        title: "SQL ADMIN",
        category: "Database",
        year: "2024",
        description: "Interface d'administration de données brute.",
        image: "/projets/interface-sql.png",
        images: [{ src: "/projets/interface-sql.png", caption: "Interface d'administration des tables" }],
        stack: ["PHP", "MySQL", "SQL"],
        contexte:
            "Interface d'administration permettant de consulter et manipuler directement les tables d'une base MySQL : lecture, insertion, mise à jour et suppression de lignes, dans l'esprit d'un phpMyAdmin simplifié.",
        objectifs: [
            "Explorer dynamiquement la structure d'une base (tables, colonnes)",
            "Générer des requêtes CRUD sûres à partir de l'interface",
            "Comprendre en profondeur le langage SQL au-delà de l'ORM",
        ],
        difficultes: [
            {
                probleme: "Construire des requêtes dynamiques sans ouvrir de faille d'injection",
                solution:
                    "Liste blanche des noms de tables/colonnes issus du schéma, et requêtes préparées pour toutes les valeurs.",
            },
        ],
        apprentissages:
            "En construisant l'outil moi-même, j'ai réellement compris ce que fait un client SQL : métadonnées du schéma, typage des colonnes, et pourquoi la protection contre l'injection doit être structurelle et non ponctuelle.",
        competences: ["c5", "c6"],
        github: "https://github.com/WsHussain",
        demo: null,
    },
    {
        slug: "todo-list",
        title: "TODO LIST",
        category: "Productivity",
        year: "2025",
        description: "Application React de gestion de tâches.",
        image: "/projets/todolist-2.png",
        images: [
            { src: "/projets/todolist-1.png", caption: "Première version — fonctionnelle mais brute" },
            { src: "/projets/todolist-2.png", caption: "Version finale — interface repensée" },
        ],
        stack: ["React", "JavaScript", "CSS3"],
        contexte:
            "Application de gestion de tâches développée avec React : ajout, complétion, suppression et filtrage des tâches. Deux versions se sont succédé — la comparaison des deux captures montre concrètement ma progression entre le premier jet et le produit final.",
        objectifs: [
            "Prendre en main React : composants, props, état",
            "Gérer un état applicatif qui survit au rechargement (localStorage)",
            "Itérer sur l'UI à partir de la première version",
        ],
        difficultes: [
            {
                probleme: "Penser en « état » plutôt qu'en manipulation directe du DOM",
                solution:
                    "Refactorisation complète de la v1 : une seule source de vérité dans le state, l'interface devient une fonction de cet état.",
            },
        ],
        apprentissages:
            "Le passage du JavaScript vanilla à React : j'ai gardé les deux versions volontairement, car l'écart entre la v1 et la v2 illustre exactement ce que la formation m'a apporté en structuration du code et en design d'interface.",
        competences: ["c1", "c4"],
        github: "https://github.com/WsHussain",
        demo: null,
    },
    {
        slug: "twitter",
        title: "TWITTER",
        category: "Clone",
        year: "2025",
        description: "Reproduction fonctionnelle du réseau social.",
        image: "/projets/twitter.png",
        images: [{ src: "/projets/twitter.png", caption: "Fil d'actualité du clone" }],
        stack: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
        contexte:
            "Clone fonctionnel de Twitter couvrant tout le spectre full stack : inscription et authentification, publication de tweets, fil d'actualité, likes et abonnements. Le projet le plus complet de mon cursus, du schéma de base de données à l'interface.",
        objectifs: [
            "Mettre en place une authentification sécurisée (sessions, hachage des mots de passe)",
            "Modéliser les relations sociales (abonnements, likes) en base",
            "Reproduire une interface connue avec fidélité et responsive",
        ],
        difficultes: [
            {
                probleme: "Construire le fil d'actualité (tweets des comptes suivis, ordonnés)",
                solution:
                    "Requête SQL avec jointures sur la table d'abonnements, pagination, et index sur les colonnes de tri.",
            },
            {
                probleme: "Gérer la sécurité de bout en bout",
                solution:
                    "password_hash/password_verify, requêtes préparées partout, échappement des sorties contre le XSS.",
            },
        ],
        apprentissages:
            "Le projet où tout s'assemble : front, back et base de données dans une même application. J'y ai le plus appris sur la sécurité (authentification, XSS, injection) et sur l'organisation d'un code qui grossit.",
        competences: ["c3", "c4", "c6", "c7"],
        github: "https://github.com/WsHussain",
        demo: null,
    },
    {
        slug: "portfolio",
        title: "PORTFOLIO",
        category: "Site Vitrine",
        year: "2026",
        description: "Ce site : React, Vite, Tailwind, déployé sur Vercel.",
        image: "/projets/portfolio.jpg",
        images: [{ src: "/projets/portfolio.jpg", caption: "Page d'accueil du portfolio" }],
        stack: ["React", "Vite", "Tailwind CSS", "React Router", "Vercel"],
        contexte:
            "Le site que vous consultez. D'abord prototypé en une seule page HTML avec React et Tailwind chargés par CDN, il a ensuite été migré vers un vrai build de production : Vite, Tailwind CSS v4 (post-processing), React Router pour les pages projets et compétences, et déploiement continu sur Vercel.",
        objectifs: [
            "Concevoir un portfolio flat design, responsive et personnalisé",
            "Mettre en place un pipeline de build moderne (Vite + Tailwind v4)",
            "Documenter et automatiser le déploiement (GitHub → Vercel)",
            "Optimiser SEO et performances (Lighthouse)",
        ],
        difficultes: [
            {
                probleme: "Le prototype CDN (Babel dans le navigateur) plombait SEO et performances",
                solution:
                    "Migration complète vers Vite : transpilation au build, code découpé en composants, meta tags par page, score Lighthouse nettement amélioré.",
            },
        ],
        apprentissages:
            "Ce projet documente mon apprentissage du déploiement : différence entre code de développement et build de production, intégration continue avec Vercel, et bonnes pratiques SEO. Il évoluera à chaque nouveau projet significatif.",
        competences: ["c1", "c3", "c4", "c8"],
        github: "https://github.com/WsHussain/MyPortfolio",
        demo: null,
    },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
