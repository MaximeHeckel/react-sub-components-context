FROM node:9.2.0-alpine

WORKDIR /usr/app

COPY . .

RUN yarn --frozen-lockfile && \
  yarn --link-duplicates && \
  yarn cache clean

EXPOSE 3000

CMD ["yarn", "start"]