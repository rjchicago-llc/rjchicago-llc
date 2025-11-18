FROM node:20-alpine AS base
WORKDIR /api
COPY package*.json ./

FROM base AS development
RUN npm install
COPY . .
EXPOSE 4000
CMD ["npm", "run", "dev"]

FROM base AS production
ENV NODE_ENV=production
RUN npm install --omit=dev
COPY . .
EXPOSE 4000
CMD ["npm", "run", "start"]
