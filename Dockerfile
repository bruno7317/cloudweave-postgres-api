FROM node:latest
WORKDIR /app
EXPOSE 6000
COPY . .
RUN npm install
ENTRYPOINT node app.js