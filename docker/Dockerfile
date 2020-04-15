# Step 1: Build the site

FROM node:12-alpine AS build

RUN apk add --no-cache --virtual .gyp python make g++

WORKDIR /app

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV


COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build



# Step 2: Serve the site

FROM nginx:alpine

COPY ./docker/nginx /etc/nginx/
COPY --from=build --chown=nginx:nginx /app/public /usr/share/nginx/html
RUN touch /var/run/nginx.pid && chown nginx:nginx /var/run/nginx.pid

RUN chown nginx:nginx /var/cache/nginx

USER nginx

EXPOSE 80
