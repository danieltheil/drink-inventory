FROM node:latest
#get chromium dependencies
#install node app
RUN mkdir -p /opt/app/assets/
ADD /assets/ /opt/app/assets/
WORKDIR /opt/app/

COPY package.json /opt/app
COPY package-lock.json /opt/app
RUN npm install -g npm@latest
RUN npm install

COPY ./src .

EXPOSE 8080
CMD [ "node", "." ]