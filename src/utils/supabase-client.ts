// This file is only for client components
// because the component doesn't know if the user is authenticated or not

import { Database } from "@/lib/database.types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export const createClient = () => createClientComponentClient<Database>();
