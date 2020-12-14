FROM node:10.22-alpine AS build
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build
CMD ["npm", "start"]