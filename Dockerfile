FROM node:carbon

MAINTAINER soier11 jae1zzang@gmail.com

RUN mkdir -p /app

WORKDIR /app

ADD ./ /app

CMD cd /app/server && npm run start