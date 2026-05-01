# Changelog

All notable changes to this project will be documented in this file.

## [0.0.1.0] - 2026-04-30

### Added
- Dockerfile multi-stage (Node 22 Alpine) avec sortie `standalone` Next.js pour des images Docker optimisées (~150-200 MB)
- `.dockerignore` excluant les fichiers non nécessaires au build
- Pipeline GitHub Actions (`.github/workflows/docker.yml`) : build + push automatique vers GHCR à chaque merge sur `main`, avec cache GHA et tags `sha-<short>` + `latest`
- `output: 'standalone'` dans `next.config.ts` requis pour le mode Docker

