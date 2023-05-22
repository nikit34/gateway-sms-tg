FROM node:latest

COPY . /app
WORKDIR /app

EXPOSE 80/tcp

CMD ["node", "gateway.js"]
