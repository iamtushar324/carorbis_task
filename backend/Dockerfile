FROM node:alpine

WORKDIR /backend

COPY package.json ./

RUN yarn install

COPY . .

EXPOSE 4563

CMD ["npm" , "start"]