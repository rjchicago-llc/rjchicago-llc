# ---------- Base ----------
FROM node:20-slim AS base
WORKDIR /app

# Install OS deps only once
RUN apt-get update && apt-get install -y \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# ---------- Install dependencies (cached layer) ----------
FROM base AS deps
COPY package*.json ./
RUN npm ci

# ---------- Build ----------
FROM base AS builder
WORKDIR /app

# Copy node_modules from deps
COPY --from=deps /app/node_modules ./node_modules

# Copy all project files
COPY . .

# Build Next.js (standalone mode)
RUN npm run build

# ---------- Development (hot reload) ----------
FROM base AS development
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
CMD ["npm", "run", "dev"]

# ---------- Production runtime ----------
FROM node:20-slim AS production
WORKDIR /app
ENV NODE_ENV=production

# Create non-root user
RUN useradd -m nextjs

# Copy standalone output and static files
COPY --from=builder --chown=nextjs:nextjs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nextjs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nextjs /app/public ./public

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

CMD ["node", "server.js"]
