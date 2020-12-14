FROM node:10.22-alpine AS build
WORKDIR /app
COPY . /app
RUN npm install
CMD [ "npm", "start" ]