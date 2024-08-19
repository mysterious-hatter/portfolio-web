FROM golang:1.22 AS builder

WORKDIR /build
COPY . .
RUN go mod download
RUN CGO_ENABLED=0 GOOS=linux go build -o ./homepage

FROM scratch

WORKDIR /app
COPY --from=builder /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/
COPY --from=builder /build/homepage ./homepage
COPY --from=builder /build/static ./static
COPY --from=builder /build/public ./public

ENTRYPOINT ["/app/homepage"]