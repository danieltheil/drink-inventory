# Stage 0, "build-stage", based on Node.js, to build and compile
FROM node:16-alpine as builder
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY . /app/

RUN npm install
WORKDIR /app/
RUN npm run build

#frontend
FROM nginx:1.21.1-alpine as prod
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]