FROM node:18 as production

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm i && npm i serve

COPY . .

RUN npm run build

ENV NODE_ENV production

EXPOSE 3000

CMD [ "npx", "serve", "build" ]