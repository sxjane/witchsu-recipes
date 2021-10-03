FROM node:16.10.0-bullseye

WORKDIR /app
ADD . /app/
RUN npm i