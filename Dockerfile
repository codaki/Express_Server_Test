FROM node:alpine
WORKDIR /server
COPY package.json ./
COPY package-lock.json ./
COPY . .
EXPOSE 8800
RUN npm install
CMD ["node", "index.js"]