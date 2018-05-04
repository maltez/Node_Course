FROM mhart/alpine-node:latest

COPY . /var/www

WORKDIR /var/www

VOLUME [ "/var/www", "/var/www/node_modules" ]

RUN npm install

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]