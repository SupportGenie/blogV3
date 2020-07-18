FROM node:10.21-alpine3.9

EXPOSE 9000

WORKDIR /usr/src/blog

RUN apk add --update \
    bash && \
    npm i -g gatsby-cli

COPY package.json .

RUN ["/bin/bash","-c","npm i"]

COPY . .

RUN npm run build
CMD ["/bin/bash", "-c", "npm run serve"]

#RUN gatsby build; exit 0

#CMD ["/bin/bash", "-c", "gatsby serve --host 0.0.0.0 --port 9005"]
