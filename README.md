# What is this?

My personal site and blog source code, built as a pnpm monorepo with Turbo, Tanstack, and Astro.

## Architecture

```
ryanpalermo-dot-dev/
├── apps/
│   ├── web/          # Main website (React + Vite)
│   └── blog/         # Blog (Astro)
├── packages/
│   └── shared/       # Shared TypeScript utilities
└── docker/
    └── nginx/        # Production nginx configs
```

### Apps

| App | Tech Stack | Port | Description |
|-----|------------|------|-------------|
| `web` | React 18, Vite 5, React Router | 5173 | Main portfolio website |
| `blog` | Astro 4, MDX | 4321 | Blog with RSS and sitemap |

### Packages

| Package | Description |
|---------|-------------|
| `shared` | Common TypeScript types and utilities |

## Prerequisites

- Node.js >= 20
- pnpm 9.x (`corepack enable && corepack prepare pnpm@9.15.1 --activate`)
- Docker & Docker Compose (for containerized development)

## Development

### Local Development (without Docker)

```bash
# Install dependencies
pnpm install

# Run all apps in development mode
pnpm dev

# Run specific app
pnpm --filter @ryanpalermo/web dev
pnpm --filter @ryanpalermo/blog dev
```

### Docker Development

```bash
# Start development environment with hot reload
docker compose up

# Or run in background
docker compose up -d

# View logs
docker compose logs -f

# Stop
docker compose down
```

Access points:

- Web: <http://localhost:5173>
- Blog: <http://localhost:4321>

### Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start all apps in development mode |
| `pnpm build` | Build all apps for production |
| `pnpm typecheck` | Run TypeScript type checking |
| `pnpm lint` | Run linting across all packages |
| `pnpm clean` | Clean build artifacts |

## Production

### Building Production Images

```bash
# Build web app image
docker build --target web-prod -t ryanpalermo-web .

# Build blog image
docker build --target blog-prod -t ryanpalermo-blog .

# Run production containers
docker run -p 80:80 ryanpalermo-web
docker run -p 80:80 ryanpalermo-blog
```

### Production Docker Compose

```bash
# Build and run production stack
docker compose --profile production up --build
```

## Project Structure

```
├── apps/
│   ├── web/
│   │   ├── src/
│   │   │   ├── components/    # React components
│   │   │   ├── hooks/         # Custom hooks
│   │   │   ├── routes/        # Route components
│   │   │   └── styles/        # CSS styles
│   │   └── index.html
│   └── blog/
│       └── src/
│           ├── content/       # MDX blog posts
│           └── pages/         # Astro pages
├── packages/
│   └── shared/
│       └── src/
│           ├── index.ts       # Main exports
│           ├── content.ts     # Content utilities
│           └── types.ts       # Shared types
├── docker/
│   └── nginx/
│       ├── web.conf           # Web app nginx config
│       └── blog.conf          # Blog nginx config
├── Dockerfile                 # Multi-stage build
├── docker-compose.yml         # Development orchestration
├── turbo.json                 # Turbo pipeline config
└── pnpm-workspace.yaml        # Workspace definition
```

## Adding Dependencies

```bash
# Add to specific app
pnpm --filter @ryanpalermo/web add <package>
pnpm --filter @ryanpalermo/blog add <package>

# Add to shared package
pnpm --filter @ryanpalermo/shared add <package>

# Add dev dependency to root
pnpm add -D -w <package>
```

## Troubleshooting

### Port Conflicts

If ports 5173 or 4321 are in use:

```bash
# Check what's using the port
lsof -i :5173

# Or modify docker-compose.yml port mappings
```

### Clean Rebuild

```bash
# Clean all build artifacts and node_modules
pnpm clean
rm -rf node_modules apps/*/node_modules packages/*/node_modules
pnpm install
```

### Docker Issues

```bash
# Rebuild without cache
docker compose build --no-cache

# Remove all containers and volumes
docker compose down -v
```
