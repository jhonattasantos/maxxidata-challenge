FROM node:14

WORKDIR /app

COPY package.json /app/package.json

RUN npm install

ADD . /app

EXPOSE 3000

RUN chown -R www-data:www-data /app/*

CMD ["yarn", "start"]
