FROM node:22-bullseye

WORKDIR /app

# Copier package.json + package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers
COPY . .

EXPOSE 3000

CMD ["node", "server.js"]
