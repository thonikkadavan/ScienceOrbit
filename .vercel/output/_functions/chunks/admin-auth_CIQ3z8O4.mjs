import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, h as createAstro, m as maybeRenderHead, g as addAttribute, n as renderSlot } from './astro/server_DmbnTnSo.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from './BaseLayout_B87L1oKU.mjs';
/* empty css                            */
import { g as getProfile } from './auth_B1VYFRhe.mjs';

const $$Astro = createAstro();
const $$AdminLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AdminLayout;
  const { title, activeTab } = Astro2.props;
  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: "dashboard", href: "/admin/dashboard" },
    { id: "queue", label: "Approvals", icon: "person_add", href: "/admin" },
    { id: "students", label: "Student Directory", icon: "group", href: "/admin/students" },
    { id: "campuses", label: "Campus Management", icon: "location_city", href: "/admin/campuses" },
    { id: "subjects", label: "Subjects", icon: "biotech", href: "/admin/subjects" },
    { id: "feed-governance", label: "Feed Governance", icon: "dynamic_feed", href: "/admin/feed-governance" },
    { id: "identity-manager", label: "Identity Manager", icon: "badge", href: "/admin/identity-manager" },
    { id: "events-dispatcher", label: "Events Dispatcher", icon: "calendar_month", href: "/admin/events-dispatcher" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="admin-root"> <!-- Sidebar --> <aside class="sidebar"> <div class="sidebar-inner"> <div class="sidebar-brand"> <div class="sidebar-brand-row"> <a href="/admin/dashboard"><img src="/logo.png" alt="Science Orbit" class="sidebar-brand-img"></a> <div> <h1 class="brand-title">Science Orbit</h1> <p class="brand-sub">Admin Portal</p> </div> </div> </div> <nav class="sidebar-nav"> ${tabs.map((tab) => renderTemplate`<a${addAttribute(tab.href, "href")}${addAttribute({ "sidebar-item": true, active: activeTab === tab.id }, "class:list")}> <span class="material-symbols-outlined sidebar-icon">${tab.icon}</span> <span class="sidebar-label">${tab.label}</span> </a>`)} </nav> <div class="sidebar-footer"> <div class="sidebar-profile neu-concave-sm"> <div class="profile-avatar"> <span class="material-symbols-outlined">account_circle</span> </div> <div class="profile-info"> <p class="profile-name">Admin</p> <p class="profile-role">System Administrator</p> </div> </div> </div> </div> </aside> <!-- Main Area --> <div class="main-area"> <!-- Top Bar --> <header class="topbar"> <div class="topbar-inner"> <div class="search-wrap"> <span class="material-symbols-outlined search-icon">search</span> <input class="search-input" type="text" placeholder="Search orbit identification or name..."> </div> <div class="topbar-actions"> <button class="topbar-icon-btn" title="Notifications"> <span class="material-symbols-outlined">notifications</span> </button> <button class="topbar-icon-btn" title="Help"> <span class="material-symbols-outlined">help</span> </button> <div class="topbar-divider"></div> <a href="/admin/queue" class="btn-register"> <span class="material-symbols-outlined" style="font-size:18px">person_add</span>
Approve Students
</a> <button id="logout-btn" class="topbar-icon-btn" title="Sign Out"> <span class="material-symbols-outlined">logout</span> </button> </div> </div> </header> <!-- Content --> <section class="content-area"> ${renderSlot($$result2, $$slots["default"])} </section> </div> </div>  <div class="bg-aura"> <div class="aura-blob aura-blob-1"></div> <div class="aura-blob aura-blob-2"></div> </div> ` })} ${renderScript($$result, "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/layouts/AdminLayout.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/layouts/AdminLayout.astro", void 0);

async function requireAdmin(supabase) {
  const profile = await getProfile(supabase);
  if (!profile || !profile.is_admin) {
    return null;
  }
  return profile;
}

export { $$AdminLayout as $, requireAdmin as r };
