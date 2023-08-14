import {
  pgTable,
  pgEnum,
  pgSchema,
  AnyPgColumn,
  serial,
  text,
  varchar,
} from "drizzle-orm/pg-core";

export const keyStatus = pgEnum("key_status", [
  "default",
  "valid",
  "invalid",
  "expired",
]);
export const keyType = pgEnum("key_type", [
  "aead-ietf",
  "aead-det",
  "hmacsha512",
  "hmacsha256",
  "auth",
  "shorthash",
  "generichash",
  "kdf",
  "secretbox",
  "secretstream",
  "stream_xchacha20",
]);
export const aalLevel = pgEnum("aal_level", ["aal1", "aal2", "aal3"]);
export const codeChallengeMethod = pgEnum("code_challenge_method", [
  "s256",
  "plain",
]);
export const factorStatus = pgEnum("factor_status", ["unverified", "verified"]);
export const factorType = pgEnum("factor_type", ["totp", "webauthn"]);

import { sql } from "drizzle-orm";

export const users = pgTable("users", {
  id: serial("id").primaryKey().notNull(),
  fullName: text("full_name"),
  phone: varchar("phone", { length: 256 }).default("null"),
});
