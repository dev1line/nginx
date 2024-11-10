FROM node:alpine
# Create app directory
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app
COPY package.json .
RUN yarn
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]