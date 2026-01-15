FROM node:22.17.1-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:22.17.1-alpine AS deploy

WORKDIR /app
RUN npm install -g serve

COPY --from=build /app/dist ./dist

EXPOSE 4000
CMD ["serve", "-s", "dist", "-l", "4000"]
