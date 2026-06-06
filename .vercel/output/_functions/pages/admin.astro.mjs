import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, h as createAstro, m as maybeRenderHead } from '../chunks/astro/server_DmbnTnSo.mjs';
import 'piccolore';
import { r as requireAdmin, $ as $$AdminLayout } from '../chunks/admin-auth_CIQ3z8O4.mjs';
import { c as createClient } from '../chunks/supabase_6R9BuJF1.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const supabase = createClient({ request: Astro2.request, cookies: Astro2.cookies });
  const admin = await requireAdmin(supabase);
  if (!admin) return Astro2.redirect("/login");
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Approval Queue", "activeTab": "queue" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Approval Queue</h1> <p class="subtitle">Pending student registrations awaiting approval</p> <div id="queue-container"> <p class="loading">Loading...</p> </div> ` })} ${renderScript($$result, "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/pages/admin/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/pages/admin/index.astro", void 0);

const $$file = "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/pages/admin/index.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
