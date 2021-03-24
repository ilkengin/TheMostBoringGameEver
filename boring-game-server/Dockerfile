FROM openjdk:14-alpine AS build-service-stage
ADD . .
RUN chmod +x gradlew
RUN ./gradlew clean build

FROM openjdk:14-alpine AS build-image-stage
MAINTAINER "Ilkan Engin"
LABEL version="1.0"
LABEL description="Boring Game Server"
COPY --from=build-service-stage build/libs/BoringGameServer-*.jar app.jar
COPY run.sh run.sh
RUN dos2unix run.sh
RUN chmod +x run.sh
CMD ["./run.sh"]
EXPOSE 5050
