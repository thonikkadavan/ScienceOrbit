import type { SupabaseClient, User } from "@supabase/supabase-js";
import type { Database } from "../types/database";

export async function getProfile(supabase: SupabaseClient<Database>) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  const { data } = await supabase
    .from("profiles")
    .select("*, campuses(name), mentors(name)")
    .eq("id", user.id)
    .single();

  return data;
}

export async function getProfileById(supabase: SupabaseClient<Database>, userId: string) {
  const { data } = await supabase
    .from("profiles")
    .select("*, campuses(name), mentors(name)")
    .eq("id", userId)
    .single();

  return data;
}

export async function getSessionUser(supabase: SupabaseClient<Database>) {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}
