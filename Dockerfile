FROM node:18.17.1

WORKDIR /starter/frontend_starter

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "npx","vite","dev","--host"]