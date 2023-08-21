import { timestamp, pgTable, text } from "drizzle-orm/pg-core";
import type { AdapterAccount } from "@auth/core/adapters";
import { users } from "./user";

export const sessions = pgTable("session", {
  sessionToken: text("sessionToken").notNull().primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});
