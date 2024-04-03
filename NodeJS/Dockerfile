FROM node:10 as build

WORKDIR /app
COPY index.js .
COPY package*.json .

RUN npm i
RUN npm i pkg -g
RUN pkg -t node10-alpine-x64 index.js

FROM alpine

RUN apk add --no-cache libstdc++ libgcc

WORKDIR /app

COPY --from=build /app/ .

CMD ["./index"]