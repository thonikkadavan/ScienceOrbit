import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, h as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_DmbnTnSo.mjs';
import 'piccolore';
import { r as requireAdmin, $ as $$AdminLayout } from '../../chunks/admin-auth_CIQ3z8O4.mjs';
import { c as createClient } from '../../chunks/supabase_6R9BuJF1.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Subjects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Subjects;
  const supabase = createClient({ request: Astro2.request, cookies: Astro2.cookies });
  const admin = await requireAdmin(supabase);
  if (!admin) return Astro2.redirect("/login");
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Subject Management", "activeTab": "subjects" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Subject Management</h1> <p class="subtitle">Add and manage subjects</p> <div class="neu-card" style="margin-bottom:1.5rem"> <form id="add-subject-form" style="display:flex;gap:0.5rem;align-items:center"> <div class="neu-input-wrap" style="flex:1"> <input type="text" id="subject-name" required placeholder="New subject name..."> </div> <button type="submit" class="btn-neu">Add Subject</button> </form> <p id="subject-error" class="error-msg"></p> </div> <div id="subjects-container"> <p class="loading">Loading...</p> </div> ` })} ${renderScript($$result, "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/pages/admin/subjects.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/pages/admin/subjects.astro", void 0);

const $$file = "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/pages/admin/subjects.astro";
const $$url = "/admin/subjects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Subjects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
