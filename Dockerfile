FROM node:18.17.1

WORKDIR /starter

COPY . .

RUN npm install

EXPOSE 3000