async function getProfile(supabase) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;
  const { data } = await supabase.from("profiles").select("*, campuses(name), mentors(name)").eq("id", user.id).single();
  return data;
}
async function getProfileById(supabase, userId) {
  const { data } = await supabase.from("profiles").select("*, campuses(name), mentors(name)").eq("id", userId).single();
  return data;
}
async function getSessionUser(supabase) {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

export { getSessionUser as a, getProfileById as b, getProfile as g };
