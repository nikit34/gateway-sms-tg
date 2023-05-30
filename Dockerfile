FROM node:latest

COPY . /app
WORKDIR /app

EXPOSE 80/tcp
EXPOSE 22

ENTRYPOINT ["node", "gateway.js"]
