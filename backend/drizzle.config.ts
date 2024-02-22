import type { Config } from "drizzle-kit";

export default {
  schema: "./db/tables/index.ts",
  out: "./drizzle",
} satisfies Config;
