FROM node:0.12-onbuild

RUN npm install -g gulp yo
RUN npm install -g generator-express
RUN npm install -g nodemon

EXPOSE 3000

CMD ["npm", "start"]
