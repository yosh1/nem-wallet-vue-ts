FROM node:10.11.0-alpine

ENV NODE_ENV=development \
    PATH=$HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH \
    CHOKIDAR_USEPOLLING=true

ARG project_dir=/app/
COPY . ${project_dir}
WORKDIR ${project_dir}

RUN set -x && \
    apk upgrade --no-cache && \
    apk add --update --no-cache vim curl && \
    curl -o- -L https://yarnpkg.com/install.sh | sh && \
    yarn install && \
    yarn global add @vue/cli

EXPOSE 8080

CMD ["yarn","serve"]
