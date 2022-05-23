# Stage 0, "build-stage", based on Node.js, to build and compile
FROM node:16-alpine as builder
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY . /app/

RUN npm install
WORKDIR /app/
RUN npm run build

#web-server
FROM nginx:1.21.1-alpine as prod
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
COPY nginx-cert.crt /etc/nginx/nginx-certificate.crt
COPY nginx-key.key /etc/nginx/nginx-key.key
EXPOSE 80 443
CMD ["nginx", "-c", "/etc/nginx/nginx.conf", "-g", "daemon off;"]