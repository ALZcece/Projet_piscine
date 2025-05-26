# 🌐 Projet Web Dynamique 2025 – ECE In

## 📘 Présentation

**ECE In** est une plateforme web de type réseau social professionnel destinée à la communauté ECE Paris : étudiants, enseignants, personnels, etc. Le site permet de publier des statuts, événements, photos, vidéos et CV, et d'interagir avec son réseau professionnel.

Inspiré de LinkedIn, ce projet vise à développer une application web **client-serveur** complète avec gestion des utilisateurs, interactions sociales, et moteur de recherche d’emplois.

---

## 🗂️ Arborescence du projet

```
piscine/
│
├── backend/
│   ├── config/
│   │   └── database.php
│   ├── controllers/
│   │   ├── AuthController.php
│   │   ├── UserController.php
│   │   ├── PostController.php
│   │   └── JobController.php
│   ├── models/
│   │   ├── User.php
│   │   ├── Post.php
│   │   └── Job.php
│   ├── routes/
│   │   └── index.php
│   ├── uploads/
│   └── index.php
│
├── frontend/
│   ├── assets/
│   │   ├── css/
│   │   ├── js/
│   │   └── images/
│   ├── pages/
│   │   ├── accueil.html
│   │   ├── reseau.html
│   │   ├── profil.html
│   │   ├── messagerie.html
│   │   ├── notifications.html
│   │   └── emplois.html
│   └── index.html
│
├── database/
│   ├── schema.sql
│   └── seed.sql
│
├── docs/
│   ├── wireframes/
│   ├── storyboard.pdf
│   ├── specifications.pdf
│   ├── architecture.pdf
│   ├── modele-EA.pdf
│   └── IA-journal.pdf
│
├── .gitignore
├── README.md
└── PJ_WEB_2025_<noms>.zip
```

---

## 🚀 Étapes de développement

### 🔧 Phase 1 : Conception
- [x] Définir les rôles et tâches des membres de l’équipe
- [x] Rédiger les spécifications fonctionnelles
- [x] Créer un storyboard de navigation
- [x] Réaliser les wireframes
- [x] Modéliser la base de données
- [x] Définir l’architecture du système

### 🖥️ Phase 2 : Développement
- [ ] Mise en place du serveur PHP et BDD
- [ ] Développement frontend
- [ ] Création des interactions JS/AJAX
- [ ] Authentification et sessions
- [ ] Fonctionnalités principales (posts, réseau, notifications, messagerie, emplois)
- [ ] Tests et validation

### 📦 Phase 3 : Finalisation
- [ ] Documentation dans /docs/
- [ ] Journal d’assistance IA
- [ ] Archive finale du projet
- [ ] Préparation de la soutenance

---

## 🧰 Technologies utilisées

- **Frontend** : HTML5, CSS, Bootstrap, JavaScript, jQuery
- **Backend** : PHP
- **Base de données** : MySQL
- **Outils** : GitHub, Wamp

---

## 🧠 Journal d’Assistance IA

Un fichier `IA-journal.pdf` présent dans `/docs/` détaille :
- Les requêtes faites à ChatGPT
- Les idées ou fragments de code influencés
- Le pourcentage d’utilisation de l’IA (≤ 40 %)
- Exemple : génération de wireframes ou scripts AJAX

---


## 📅 Dates importantes

- **Jeudi 29 mai 2025** à 23h55 : Livrable de conception
- **Dimanche 1er juin 2025** à 23h55 : Projet final
- **Soutenance** : Semaine du 2 juin 2025

---


## 📚 Références

• Les meilleures pratiques pour la conception de sites web (en anglais)
• Wireframe: (https://webdesign.tutsplus.com/articles/a-beginners-guide-to-wireframing--
webdesign-7399)
• Storyboard: (https://www.fastcodesign.com/1672917/the-8-steps-to-creating-a-greatstoryboard)
• Les bases de données relationnelles : (http://cerig.pagora.grenoble-inp.fr/tutoriel/basesde-donnees/chap06.htm)
• MySQL : (https://openclassrooms.com/courses/concevez-votre-site-web-avec-php-etmysql/lire-des-donnees-2)
• Tutorial sur plusieurs sujets dont HTML, CSS, PHP, etc. : https://www.w3schools.com/
