FROM node:12.18.3 AS build-ui-stage
ADD . .
RUN npm install
RUN npm run build

FROM node:12.18.3 AS build-ui-image-stage
MAINTAINER "Ilkan Engin"
LABEL version="1.0"
LABEL description="Boring Game UI"
COPY --from=build-ui-stage node_modules/ node_modules/
COPY --from=build-ui-stage build/ build/
COPY --from=build-ui-stage public/ public/
COPY --from=build-ui-stage app.js app.js
CMD ["node", "app.js"]
EXPOSE 3000
