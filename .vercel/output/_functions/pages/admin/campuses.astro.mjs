import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, h as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_DmbnTnSo.mjs';
import 'piccolore';
import { r as requireAdmin, $ as $$AdminLayout } from '../../chunks/admin-auth_CIQ3z8O4.mjs';
import { c as createClient } from '../../chunks/supabase_6R9BuJF1.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Campuses = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Campuses;
  const supabase = createClient({ request: Astro2.request, cookies: Astro2.cookies });
  const admin = await requireAdmin(supabase);
  if (!admin) return Astro2.redirect("/login");
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Campus Management", "activeTab": "campuses" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Campus Management</h1> <p class="subtitle">Add and manage campuses</p> <div class="neu-card" style="margin-bottom:1.5rem"> <form id="add-campus-form" style="display:flex;gap:0.5rem;align-items:center"> <div class="neu-input-wrap" style="flex:1"> <input type="text" id="campus-name" required placeholder="New campus name..."> </div> <button type="submit" class="btn-neu">Add Campus</button> </form> <p id="campus-error" class="error-msg"></p> </div> <div id="campuses-container"> <p class="loading">Loading...</p> </div> ` })} ${renderScript($$result, "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/pages/admin/campuses.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/pages/admin/campuses.astro", void 0);

const $$file = "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/pages/admin/campuses.astro";
const $$url = "/admin/campuses";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Campuses,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
