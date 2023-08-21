import { timestamp, pgTable, text, primaryKey } from "drizzle-orm/pg-core";
import type { AdapterAccount } from "@auth/core/adapters";

export const verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey(vt.identifier, vt.token),
  })
);
