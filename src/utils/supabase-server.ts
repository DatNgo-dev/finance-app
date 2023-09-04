import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import "server-only";

import type { Database } from "@/lib/database.types";

export const createClient = () => {
  return createServerComponentClient<Database>({
    cookies,
  });
};
