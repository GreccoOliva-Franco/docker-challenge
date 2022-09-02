FROM node:16-slim as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:16-slim as runner
WORKDIR /app
COPY --from=builder /app/package*.json .
COPY --from=builder /app/dist/ ./dist/
RUN npm install --omit=dev
# Hardcoded port. Find a solution to make it dynamic
EXPOSE 3000
CMD npm run start