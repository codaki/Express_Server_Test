FROM node:alpine
WORKDIR /front
COPY package.json ./
COPY package-lock.json ./
COPY . .
EXPOSE 5173
RUN npm install
CMD ["npm", "run","dev"]