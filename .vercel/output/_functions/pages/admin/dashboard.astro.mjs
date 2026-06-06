import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_DmbnTnSo.mjs';
import 'piccolore';
import { r as requireAdmin, $ as $$AdminLayout } from '../../chunks/admin-auth_CIQ3z8O4.mjs';
import { c as createClient } from '../../chunks/supabase_6R9BuJF1.mjs';
/* empty css                                        */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  const supabase = createClient({ request: Astro2.request, cookies: Astro2.cookies });
  const admin = await requireAdmin(supabase);
  if (!admin) return Astro2.redirect("/login");
  const [{ count: pendingCount }, { count: studentCount }, { count: campusCount }] = await Promise.all([
    supabase.from("profiles").select("*", { count: "exact", head: true }).eq("is_approved", false).eq("is_admin", false),
    supabase.from("profiles").select("*", { count: "exact", head: true }).eq("is_admin", false),
    supabase.from("campuses").select("*", { count: "exact", head: true })
  ]);
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Dashboard", "activeTab": "dashboard" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div style="max-width:1200px;margin:0 auto"> <div class="kpi-grid"> <a href="/admin" class="kpi-card"> <div> <p class="kpi-header">Pending Approvals</p> <p class="kpi-value">${pendingCount ?? 0}</p> </div> <div class="kpi-icon"><span class="material-symbols-outlined">person_add</span></div> </a> <a href="/admin/students" class="kpi-card"> <div> <p class="kpi-header">Total Students</p> <p class="kpi-value">${studentCount ?? 0}</p> </div> <div class="kpi-icon tertiary"><span class="material-symbols-outlined">group</span></div> </a> <a href="/admin/campuses" class="kpi-card"> <div> <p class="kpi-header">Active Campuses</p> <p class="kpi-value">${campusCount ?? 0}</p> </div> <div class="kpi-icon primary-container"><span class="material-symbols-outlined">location_city</span></div> </a> </div> <div class="quick-links" style="margin-top:2rem"> <h3 style="font-family:var(--font-label);font-size:15px;font-weight:600;color:var(--color-on-surface);margin-bottom:0.75rem">Quick Actions</h3> <div class="links-grid"> <a href="/admin" class="action-card"> <span class="material-symbols-outlined">checklist</span> <span>Approval Queue</span> <span class="material-symbols-outlined arrow" style="color:var(--color-outline)">arrow_forward</span> </a> <a href="/admin/students" class="action-card"> <span class="material-symbols-outlined">group</span> <span>Student Directory</span> <span class="material-symbols-outlined arrow" style="color:var(--color-outline)">arrow_forward</span> </a> <a href="/admin/campuses" class="action-card"> <span class="material-symbols-outlined">location_city</span> <span>Campus Management</span> <span class="material-symbols-outlined arrow" style="color:var(--color-outline)">arrow_forward</span> </a> <a href="/admin/subjects" class="action-card"> <span class="material-symbols-outlined">biotech</span> <span>Subject Management</span> <span class="material-symbols-outlined arrow" style="color:var(--color-outline)">arrow_forward</span> </a> <a href="/dashboard" class="action-card"> <span class="material-symbols-outlined">person</span> <span>My Student Profile</span> <span class="material-symbols-outlined arrow" style="color:var(--color-outline)">arrow_forward</span> </a> </div> </div> </div> ` })} `;
}, "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/pages/admin/dashboard.astro", void 0);

const $$file = "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/pages/admin/dashboard.astro";
const $$url = "/admin/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
