import { e as createComponent, k as renderComponent, g as addAttribute, l as renderScript, r as renderTemplate, h as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_DmbnTnSo.mjs';
import 'piccolore';
import { r as requireAdmin, $ as $$AdminLayout } from '../../chunks/admin-auth_CIQ3z8O4.mjs';
import { c as createClient } from '../../chunks/supabase_6R9BuJF1.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Students = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Students;
  const supabase = createClient({ request: Astro2.request, cookies: Astro2.cookies });
  const admin = await requireAdmin(supabase);
  if (!admin) return Astro2.redirect("/login");
  const campuses = (await supabase.from("campuses").select("*").order("name")).data;
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Student Directory", "activeTab": "students" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full" style="max-width:1200px;margin:0 auto"> <h1>Student Directory</h1> <p class="subtitle">Manage all registered students across planetary campuses.</p> <div id="students-container"> <p class="loading">Loading...</p> </div> </div> ` })} <div id="campuses-data"${addAttribute(JSON.stringify(campuses ?? []), "data-campuses")} style="display:none"></div> ${renderScript($$result, "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/pages/admin/students.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/pages/admin/students.astro", void 0);

const $$file = "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/pages/admin/students.astro";
const $$url = "/admin/students";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Students,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
