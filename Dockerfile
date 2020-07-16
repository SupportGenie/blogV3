FROM node:14.5-alpine3.10

EXPOSE 9005

WORKDIR /usr/src/blog

RUN apk add --update \
    bash && \
    npm i -g gatsby-cli

COPY package.json .

RUN ["/bin/bash","-c","npm i"]

COPY . .

RUN gatsby build; exit 0

CMD ["/bin/bash", "-c", "gatsby develop --host 0.0.0.0 --port 9005"]
