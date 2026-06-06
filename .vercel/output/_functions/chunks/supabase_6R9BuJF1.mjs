import { createServerClient, parseCookieHeader } from '@supabase/ssr';

const supabaseUrl = "https://pujvlziaqfsyjwtkbgxt.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1anZsemlhcWZzeWp3dGtiZ3h0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc0OTIwNzUsImV4cCI6MjA5MzA2ODA3NX0.OfOjbMAG6PUP6pG2Gyb25M1wAMlGAKde_IyWVmfMtUU";
function createClient({
  request,
  cookies
}) {
  return createServerClient(
    supabaseUrl,
    supabaseAnonKey,
    {
      cookies: {
        getAll() {
          return parseCookieHeader(request.headers.get("Cookie") ?? "");
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(
            ({ name, value, options }) => cookies.set(name, value, options)
          );
        }
      }
    }
  );
}

export { createClient as c };
