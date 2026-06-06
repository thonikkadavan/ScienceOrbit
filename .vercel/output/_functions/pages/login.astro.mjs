import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead, g as addAttribute } from '../chunks/astro/server_DmbnTnSo.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_B87L1oKU.mjs';
import { c as createClient } from '../chunks/supabase_6R9BuJF1.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  const loginPrefill = Astro2.url.searchParams.get("login") ?? Astro2.url.searchParams.get("email");
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const login = formData.get("login")?.toString() ?? "";
    const password = formData.get("password")?.toString() ?? "";
    const supabase = createClient({ request: Astro2.request, cookies: Astro2.cookies });
    let email = login;
    if (!login.includes("@")) {
      const { data: emailResult } = await supabase.rpc("lookup_username_email", { p_username: login });
      if (!emailResult) {
        return Astro2.redirect(`/login?error=${encodeURIComponent("Invalid username or password")}&login=${encodeURIComponent(login)}`);
      }
      email = emailResult;
    }
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      return Astro2.redirect(`/login?error=${encodeURIComponent(error.message)}&login=${encodeURIComponent(login)}`);
    }
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const { data: profile } = await supabase.from("profiles").select("is_admin").eq("id", user.id).single();
      if (profile?.is_admin) {
        return Astro2.redirect("/admin");
      }
    }
    return Astro2.redirect("/dashboard/feed");
  }
  const errorParam = Astro2.url.searchParams.get("error");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Login" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="auth-page"> <div class="auth-card"> <div class="auth-card-inner"> <h1>Welcome Back</h1> <p class="auth-subtitle">Sign in to Science Orbit</p> <form method="POST" class="auth-form"> <div class="form-group"> <label for="login">Email or Username</label> <input type="text" id="login" name="login" required placeholder="you@example.com or username"${addAttribute(loginPrefill ?? "", "value")}> </div> <div class="form-group"> <label for="password">Password</label> <input type="password" id="password" name="password" required placeholder="Your password"> </div> ${errorParam && renderTemplate`<p class="error-msg">${errorParam}</p>`} <button type="submit" class="btn-primary">Sign In</button> </form> <p class="auth-footer">
Don't have an account? <a href="/register">Register here</a> </p> </div> </div> </div> ` })} `;
}, "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/pages/login.astro", void 0);

const $$file = "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
