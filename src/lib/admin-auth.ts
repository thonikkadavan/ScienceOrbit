import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "../types/database";
import { getProfile } from "./auth";

export async function requireAdmin(supabase: SupabaseClient<Database>) {
  const profile = await getProfile(supabase);
  if (!profile || !profile.is_admin) {
    return null;
  }
  return profile;
}
