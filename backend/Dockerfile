FROM node:10.22-alpine AS build
WORKDIR /app/backend
COPY . /app/backend
RUN npm install
CMD [ "npm", "start" ]