# ----- Web builder
FROM node:17 AS web

WORKDIR /app
COPY . .
RUN yarn
RUN yarn build

# ----- Delivery
FROM caddy

WORKDIR /usr/share/caddy
COPY --from=web /app/dist .
