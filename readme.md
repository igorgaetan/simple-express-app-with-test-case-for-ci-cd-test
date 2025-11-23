# Projet Express — API + Vue minimaliste + Sqlite + Tests + Docker

## 📌 Description du projet
Ce projet est une **API REST Express** avec :
- Backend **Node.js / Express (ESM)**
- Base de données **sqlite**
- **Tests automatisés** (Jest + Supertest)
- Génération automatique d’un **rapport de tests en PDF**
- **Dockerfile** complet pour exécuter l’application
- Mini interface web (**Vue**) servie depuis Express (`/public`)

Il sert de **template simple** pour démarrer une API propre avec tests, CI/CD et containerisation.

---

## 📁 Structure du projet
```
my-express-app/
├── src/
│   ├── app.js
│   ├── server.js
│   ├── database.js
│   ├── models/
│   │   └── user.js
│   ├── routes/
│   │   └── userRoutes.js
│   └── controllers/
│       └── userController.js
├── public/
│   └── index.html
├── tests/
│   └── user.test.js
├── generate-report.js
├── Dockerfile
├── package.json
└── README.md
```

---

## 🚀 Installation

### 1. Cloner le projet
```bash
git clone https://github.com/igorgaetan/simple-express-app-with-test-case-for-ci-cd-test.git
cd my-express-app
```

### 2. Installer les dépendances
```bash
npm install
```


### 3. Lancer le serveur

  ```bash
  npm start
  ```

---

## 🧪 Exécuter les tests
```bash
npm test
```
Les tests utilisent :
- **Jest**
- **Supertest**

---

## 📝 Générer un rapport de test PDF
```bash
npm run test:report
```
Le PDF sera créé dans :
```
/reports/test-report.pdf
```
Ce rapport est utile pour des pipelines **GitHub Actions** ou **GitLab CI/CD**.

---

## 🐳 Docker

### Construire l’image :
```bash
docker build -t my-express-app .
```

### Lancer un conteneur :
```bash
docker run -p 3000:3000 my-express-app
```

---

## 🌐 Mini interface Vue (optionnel)
Une petite page **Vue** est disponible à l’adresse :
```
http://localhost:3000/
```
Elle permet de tester rapidement l’API.

---

## 📡 API Endpoints

| Méthode | Endpoint         | Description                     |
|---------|------------------|---------------------------------|
| GET     | `/api/users`     | Liste des utilisateurs         |
| POST    | `/api/users`     | Créer un utilisateur           |
| GET     | `/api/users/:id` | Voir un utilisateur             |
| PUT     | `/api/users/:id` | Modifier un utilisateur        |
| DELETE  | `/api/users/:id` | Supprimer un utilisateur       |

---

## ⚙️ Technologies utilisées
- **Node.js + Express**
- **sqlite**
- **Jest + Supertest**
- **Docker**
- **pdfkit** (rapport PDF)
- **ESM** (`type: module`)

---

## 🤝 Contribution
Les contributions sont les bienvenues ! **Forkez**, créez une branche et ouvrez une **pull request**.


