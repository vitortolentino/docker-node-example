FROM node:12

WORKDIR /app

COPY package.json .

RUN npm install

CMD [ "npm", "start" ]

COPY . .

