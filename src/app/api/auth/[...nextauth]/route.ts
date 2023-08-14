import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "./schema";

export default NextAuth({
  // @ts-ignore
  adapter: DrizzleAdapter(db),
  providers: [
    GoogleProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
});
