FROM node:latest AS build-ui-stage
ADD . .
RUN npm install
RUN npm run build

FROM node:latest AS build-ui-image-stage
MAINTAINER "Ilkan Engin"
LABEL version="1.0"
LABEL description="Boring Game UI"
RUN npm install -g serve
COPY --from=build-ui-stage build/ build/
CMD ["serve -l 4200 -s build"]
EXPOSE 4200
