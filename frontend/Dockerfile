FROM node:20-alpine3.18


RUN addgroup -S app && adduser -S -G app app


WORKDIR /app

COPY package*.json ./
RUN chown -R app:app .

USER app

RUN npm install

COPY . .

EXPOSE 8000

CMD npm start
