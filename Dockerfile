FROM golang:1.22 AS builder

WORKDIR /build
COPY . .
RUN go mod download
RUN go build -o ./hello-world

#RUN CGO_ENABLED=0 GOOS=linux go build -o /hello-world

FROM gcr.io/distroless/base-debian12 AS build-release-stage

WORKDIR /app

COPY --from=builder /build/hello-world ./hello-world

ENTRYPOINT ["/app/hello-world"]