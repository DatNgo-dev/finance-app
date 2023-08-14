import type { Config } from "drizzle-kit";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

export default {
  schema: "./src/app/lib/db/schema.ts",
  out: "./src/app/lib/db/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.CONNECTION_STRING,
  },
} satisfies Config;
