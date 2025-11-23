# Base image
FROM node:22-alpine

# Create app directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --production

# Copy app files
COPY . .

# Expose port
EXPOSE 3000

# Run server
CMD ["node", "server.js"]
