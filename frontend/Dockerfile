FROM node:10.22-alpine AS build
WORKDIR /app/frontend
COPY . /app/frontend
RUN npm install
RUN npm run build
CMD [ "npm", "start" ]