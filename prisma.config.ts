// prisma.config.ts
import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // Use POSTGRES_URL_NON_POOLING for migrations (Supabase), fallback to DATABASE_URL (local Docker)
    url: process.env["POSTGRES_URL_NON_POOLING"] || process.env["DATABASE_URL"],
  },
  seed: {
    command: "npx tsx prisma/seed.ts",
  },
});