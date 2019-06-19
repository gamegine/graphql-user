From node:12
WORKDIR /home/node/app
COPY . /home/node/app
EXPOSE 4000
CMD npm start
