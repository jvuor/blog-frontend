FROM node:12 as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
ENV NODE_ENV development

COPY . ./

# lts version of npm
RUN npm i -g npm@7.7.5

RUN npm install

CMD ["npm", "run", "build"]
