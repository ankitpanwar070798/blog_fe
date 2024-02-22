# Dockerfile
FROM node:18.17.0
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
CMD [ "yarn", "dev" ]
EXPOSE 3000