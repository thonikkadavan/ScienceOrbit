import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, h as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_DmbnTnSo.mjs';
import 'piccolore';
import { r as requireAdmin, $ as $$AdminLayout } from '../../chunks/admin-auth_CIQ3z8O4.mjs';
import { c as createClient } from '../../chunks/supabase_6R9BuJF1.mjs';
/* empty css                                               */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$IdentityManager = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$IdentityManager;
  const supabase = createClient({ request: Astro2.request, cookies: Astro2.cookies });
  const admin = await requireAdmin(supabase);
  if (!admin) return Astro2.redirect("/login");
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Identity Manager", "activeTab": "identity-manager" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Global Identity &amp; Account Manager</h1> <p class="subtitle">Manage mentors, validate achievements, and oversee identity records</p> <div class="gov-tabs"> <button class="gov-tab active" data-tab="mentors">Mentor Directory</button> <button class="gov-tab" data-tab="achievements">Achievement Validator</button> </div>  <div class="gov-panel active" id="panel-mentors"> <div class="neu-card" style="margin-bottom:1rem"> <form id="add-mentor-form" style="display:flex;gap:0.5rem;align-items:center"> <div class="neu-input-wrap" style="flex:1"> <input type="text" id="mentor-name" required placeholder="Mentor full name..."> </div> <button type="submit" class="btn-neu"><span class="material-symbols-outlined" style="font-size:16px">add</span> Add Mentor</button> </form> <p id="mentor-error" class="error-msg"></p> </div> <div id="mentors-container"><p class="loading">Loading mentors...</p></div> </div>  <div class="gov-panel" id="panel-achievements"> <div class="gov-toolbar"> <div class="neu-input-wrap" style="flex:1;max-width:320px"> <input type="text" id="achievement-search" placeholder="Search by name or username..."> </div> <button class="btn-neu btn-neu-sm" id="refresh-achievements"><span class="material-symbols-outlined" style="font-size:16px">refresh</span> Refresh</button> </div> <div style="display:flex;gap:0.5rem;margin-bottom:1rem"> <button class="gov-tab-slim active" data-ach-view="pending">Pending Submissions</button> <button class="gov-tab-slim" data-ach-view="all">All Milestones</button> </div> <div id="achievements-container"><p class="loading">Loading profiles...</p></div> </div> ` })}  ${renderScript($$result, "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/pages/admin/identity-manager.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/pages/admin/identity-manager.astro", void 0);

const $$file = "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/pages/admin/identity-manager.astro";
const $$url = "/admin/identity-manager";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$IdentityManager,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
