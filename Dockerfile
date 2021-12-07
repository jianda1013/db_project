FROM node:16-alpine
WORKDIR /usr/src/app

RUN apk update
RUN npm install -g nodemon

COPY ./package* ./

RUN npm install -i

CMD ["npm", "start"]
