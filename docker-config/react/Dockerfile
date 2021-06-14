FROM node:12-alpine as build

ARG REACT_APP_API
ARG REACT_APP_URL
ARG REACT_APP_STORAGE_LINK

ENV REACT_APP_API=$REACT_APP_API
ENV REACT_APP_URL=$REACT_APP_URL
ENV REACT_APP_STORAGE_LINK=$REACT_APP_STORAGE_LINK

WORKDIR /var/www/client
# COPY ./client/npm-shrinkwrap.json /var/www/client/
COPY ./client/package*.json /var/www/client/

RUN npm ci 

COPY ./client /var/www/client

RUN npm run build 

FROM nginx:alpine

WORKDIR /var/www

COPY --from=build /var/www/client/build /var/www

COPY ./docker-config/nginx/react/default.conf /etc/nginx/conf.d/