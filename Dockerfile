FROM node:22-alpine AS base
RUN corepack enable

# --- deps: install production + dev deps ---
FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# --- builder: compile Next.js ---
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

# ARG (pas ENV) : disponibles pendant le build uniquement, absents de l'image finale.
# Les vraies valeurs sont injectées au runtime par FluxCD/Kubernetes.
ARG POSTGRES_URL=postgresql://placeholder:placeholder@localhost:5432/placeholder
ARG AUTH_SECRET=placeholder
ARG BASE_URL=http://localhost:3000
ARG STRIPE_SECRET_KEY=sk_test_placeholder
ARG STRIPE_WEBHOOK_SECRET=whsec_placeholder

RUN POSTGRES_URL=$POSTGRES_URL \
    AUTH_SECRET=$AUTH_SECRET \
    BASE_URL=$BASE_URL \
    STRIPE_SECRET_KEY=$STRIPE_SECRET_KEY \
    STRIPE_WEBHOOK_SECRET=$STRIPE_WEBHOOK_SECRET \
    pnpm build

# --- runner: production image ---
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs \
 && adduser --system --uid 1001 nextjs

# Standalone Next.js server
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Full node_modules so the initContainer can run `drizzle-kit migrate`
COPY --from=deps --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/drizzle.config.ts ./
COPY --from=builder --chown=nextjs:nodejs /app/lib/db ./lib/db

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

CMD ["node", "server.js"]
