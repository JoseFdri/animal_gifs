FROM node:10-alpine

WORKDIR /home/node/app

COPY ./package.json /home/node/app

RUN npm install