import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { SupabaseAdapter } from "@next-auth/supabase-adapter"; // On the website: @auth/supabase-adapter so this will change in a future PR

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID ?? "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? "",
    }),
  ],
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY ?? "",
  }),
});

export { handler as GET, handler as POST };
