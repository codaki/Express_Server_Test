FROM node:alpine
WORKDIR /server
COPY package.json ./
COPY package-lock.json ./
COPY . .
RUN npm install
CMD ["node", "index.js"]