# Glow 99.1 FM • MERN Social Hub (Core 77%)

TypeScript monorepo implementing the core platform features: deep links, social wall, reactions,
polls, quests, leaderboards, UGC intake, notifications, analytics, and workers for ranking.

## Quickstart
1) `pnpm i`
2) Copy envs from `infra/*.env.example` and fill secrets.
3) `pnpm -w run dev` (web: http://localhost:3000, api: http://localhost:4000)
4) `pnpm -w run seed` to insert sample data.

See `/apps/api/README.md` and `/apps/web/README.md` for details.
