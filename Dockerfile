# syntax=docker/dockerfile:1

# ============================================================================
# Base stage - common setup for all stages
# ============================================================================
FROM node:20-alpine AS base

# Install pnpm
RUN corepack enable && corepack prepare pnpm@9.15.1 --activate

WORKDIR /app

# ============================================================================
# Dependencies stage - install all dependencies
# ============================================================================
FROM base AS deps

# Copy package manifests
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/web/package.json ./apps/web/
COPY apps/blog/package.json ./apps/blog/
COPY packages/shared/package.json ./packages/shared/

# Install dependencies
RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile

# ============================================================================
# Build stage - build all applications
# ============================================================================
FROM base AS builder

COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/apps/web/node_modules ./apps/web/node_modules
COPY --from=deps /app/apps/blog/node_modules ./apps/blog/node_modules
COPY --from=deps /app/packages/shared/node_modules ./packages/shared/node_modules

# Copy source code
COPY . .

# Build all apps with turbo
RUN pnpm build

# ============================================================================
# Web production stage - serve the main website
# ============================================================================
FROM nginx:alpine AS web

# Copy nginx configuration
COPY docker/nginx/web.conf /etc/nginx/conf.d/default.conf

# Copy built web app
COPY --from=builder /app/apps/web/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# ============================================================================
# Blog production stage - serve the blog
# ============================================================================
FROM nginx:alpine AS blog

# Copy nginx configuration  
COPY docker/nginx/blog.conf /etc/nginx/conf.d/default.conf

# Copy built blog
COPY --from=builder /app/apps/blog/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# ============================================================================
# Development stage - for local development with hot reload
# ============================================================================
FROM base AS development

# Install additional tools for development
RUN apk add --no-cache git

COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/apps/web/node_modules ./apps/web/node_modules
COPY --from=deps /app/apps/blog/node_modules ./apps/blog/node_modules
COPY --from=deps /app/packages/shared/node_modules ./packages/shared/node_modules

# Source will be mounted as volume
WORKDIR /app

# Default command runs turbo dev
CMD ["pnpm", "dev"]
