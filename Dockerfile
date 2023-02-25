FROM node:16.16.0-alpine3.16

COPY package.json package-lock.json /app/
WORKDIR /app
RUN ["npm", "install"]
COPY . /app/
RUN ["npm", "run", "build"]
CMD ["npm", "run", "start:prod"]