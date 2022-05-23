FROM node:16
#get chromium dependencies
RUN apt-get update && apt-get install curl gnupg -y \
  && curl --location --silent https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
  && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
  && apt-get update \
  && apt-get install google-chrome-stable -y --no-install-recommends \
  && rm -rf /var/lib/apt/lists/*

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

#install node app
RUN mkdir -p /opt/app/assets/
ADD /assets/ /opt/app/assets/
WORKDIR /opt/app/

COPY package.json /opt/app
COPY package-lock.json /opt/app
RUN npm install

COPY ./src .


EXPOSE 8080
CMD [ "node", "." ]