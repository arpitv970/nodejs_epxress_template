# Base image with Node.js 20
FROM node:20-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app files
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["node", "server.js"]
