import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, h as createAstro, m as maybeRenderHead, g as addAttribute } from '../../chunks/astro/server_DmbnTnSo.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_B87L1oKU.mjs';
import { $ as $$DashboardSidebar } from '../../chunks/DashboardSidebar_Ryq23qPd.mjs';
import { c as createClient } from '../../chunks/supabase_6R9BuJF1.mjs';
import { g as getProfile } from '../../chunks/auth_B1VYFRhe.mjs';
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Settings = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Settings;
  const supabase = createClient({ request: Astro2.request, cookies: Astro2.cookies });
  const profile = await getProfile(supabase);
  if (!profile) {
    return Astro2.redirect("/login");
  }
  const avatarUrl = profile.avatar_url ? supabase.storage.from("avatars").getPublicUrl(profile.avatar_url).data.publicUrl : null;
  const campusName = profile.campuses?.name ?? "";
  const achievementsList = profile.achievements ? profile.achievements.split("\n").filter(Boolean) : [];
  const archiveEntries = [
    ...achievementsList.map((a) => ({ type: "achievement", label: "Milestone Added", detail: a })),
    ...(profile.subjects ?? []).map((s) => ({ type: "subject", label: "Research Subject", detail: s }))
  ];
  if (profile.display_name) {
    archiveEntries.unshift({ type: "profile", label: "Display Name Set", detail: profile.display_name });
  }
  if (profile.mentor_name) {
    archiveEntries.push({ type: "profile", label: "Focus Area", detail: profile.mentor_name });
  }
  if (profile.legal_name) {
    archiveEntries.push({ type: "profile", label: "Legal Name Registered", detail: profile.legal_name });
  }
  archiveEntries.push({ type: "campus", label: "Campus Affiliation", detail: campusName || "Not set" });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Settings" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "DashboardSidebar", $$DashboardSidebar, { "current": "settings" })} ${maybeRenderHead()}<div class="st-root"> <main class="st-main"> <div class="st-content"> <!-- Header --> <div class="st-header"> <div class="st-header-left"> <h1 class="st-title">Account Governance</h1> <p class="st-subtitle">Manage your institutional access, security protocols, and platform preferences through our unified laboratory dashboard.</p> </div> <div class="st-user-card"> <div class="st-user-avatar"> ${avatarUrl ? renderTemplate`<img${addAttribute(avatarUrl, "src")}${addAttribute(profile.display_name, "alt")} class="st-avatar-img">` : renderTemplate`<span class="material-symbols-outlined st-avatar-placeholder">person</span>`} </div> <div class="st-user-info"> <span class="st-user-name">${profile.display_name || profile.username}</span> <span class="st-user-title">${profile.mentor_name || "Student"}</span> </div> <span class="st-user-badge">PRO ACCOUNT</span> </div> </div> <!-- Tabs --> <div class="st-tabs"> <button class="st-tab active" data-tab="profile"> <span class="material-symbols-outlined">badge</span>
Profile
</button> <button class="st-tab" data-tab="security"> <span class="material-symbols-outlined">shield</span>
Security
</button> </div> <!-- Tab: Profile --> <div class="st-panel active" id="tab-profile"> <!-- Authentication --> <section class="st-section"> <div class="st-section-header"> <span class="material-symbols-outlined st-section-icon">verified_user</span> <h2 class="st-section-title">Authentication</h2> </div> <div class="st-card-list"> <div class="st-card"> <div class="st-card-icon"> <span class="material-symbols-outlined">lock</span> </div> <div class="st-card-body"> <h3 class="st-card-title">Change Password</h3> <p class="st-card-desc">Update your account password. You'll need your current password.</p> </div> <button id="change-password-btn" class="st-btn st-btn-outline">Change</button> </div> <div class="st-card"> <div class="st-card-icon"> <span class="material-symbols-outlined">key</span> </div> <div class="st-card-body"> <h3 class="st-card-title">Two-Factor Auth</h3> <p class="st-card-desc">Secure your account via SMS or authenticator app.</p> </div> <label class="st-toggle"> <input type="checkbox" id="tfa-toggle"> <span class="st-toggle-slider"></span> </label> </div> </div> </section> <!-- Alert Preferences --> <section class="st-section"> <div class="st-section-header"> <span class="material-symbols-outlined st-section-icon">campaign</span> <h2 class="st-section-title">Alert Preferences</h2> </div> <div class="st-card-list"> <div class="st-card"> <div class="st-card-body"> <div class="st-card-row"> <div> <h3 class="st-card-title">Research Mentions</h3> <p class="st-card-desc">Frequency of citations and paper mention alerts.</p> </div> <span class="st-slider-value" id="mentions-value">85%</span> </div> <input type="range" class="st-range" min="0" max="100" value="85" id="mentions-slider"> </div> </div> <div class="st-card"> <div class="st-card-body"> <div class="st-card-row"> <div> <h3 class="st-card-title">Data Updates</h3> <p class="st-card-desc">Real-time alerts for dataset modifications.</p> </div> <span class="st-slider-value" id="data-value">30%</span> </div> <input type="range" class="st-range" min="0" max="100" value="30" id="data-slider"> </div> </div> <div class="st-card"> <div class="st-card-icon"> <span class="material-symbols-outlined">mail</span> </div> <div class="st-card-body"> <h3 class="st-card-title">Email Digests</h3> <p class="st-card-desc">Receive weekly summary emails of platform activity.</p> </div> <label class="st-toggle"> <input type="checkbox" id="email-digest-toggle" checked> <span class="st-toggle-slider"></span> </label> </div> <div class="st-card"> <div class="st-card-icon"> <span class="material-symbols-outlined">desktop_windows</span> </div> <div class="st-card-body"> <h3 class="st-card-title">Desktop Popups</h3> <p class="st-card-desc">Allow browser notifications for urgent alerts.</p> </div> <label class="st-toggle"> <input type="checkbox" id="popup-toggle"> <span class="st-toggle-slider"></span> </label> </div> </div> </section> <!-- Deactivate --> <section class="st-section st-section-danger"> <div class="st-section-header"> <span class="material-symbols-outlined st-section-icon" style="color:var(--color-error)">delete_forever</span> <h2 class="st-section-title">Deactivate Account</h2> </div> <p class="st-danger-desc">Temporarily disable your researcher profile and archive all active session logs.</p> <button id="deactivate-btn" class="st-btn st-btn-danger">DEACTIVATE</button> </section> <section class="st-section st-section-danger"> <div class="st-section-header"> <span class="material-symbols-outlined st-section-icon" style="color:var(--color-error)">logout</span> <h2 class="st-section-title">Sign Out</h2> </div> <p class="st-danger-desc">End your current session and return to the login screen.</p> <button id="settings-logout-btn" class="st-btn st-btn-danger">SIGN OUT</button> </section> </div> <!-- Tab: Security --> <div class="st-panel" id="tab-security"> <section class="st-section"> <div class="st-section-header"> <span class="material-symbols-outlined st-section-icon">inventory_2</span> <h2 class="st-section-title">Activity Archive</h2> </div> <p class="st-section-desc">A log of your recent profile updates, research subjects, and milestones.</p> <div class="st-archive-list"> ${archiveEntries.length > 0 ? archiveEntries.map((entry) => renderTemplate`<div class="st-archive-item"> <div class="st-archive-dot {entry.type}"></div> <div class="st-archive-body"> <span class="st-archive-label">${entry.label}</span> <span class="st-archive-detail">${entry.detail}</span> </div> </div>`) : renderTemplate`<div class="st-card"> <div class="st-card-body"> <p class="st-card-desc">No activity recorded yet. Start by editing your profile.</p> </div> </div>`} </div> </section> <section class="st-section"> <div class="st-section-header"> <span class="material-symbols-outlined st-section-icon">history</span> <h2 class="st-section-title">Login History</h2> </div> <div class="st-card-list"> <div class="st-card"> <div class="st-card-icon"> <span class="material-symbols-outlined">history</span> </div> <div class="st-card-body"> <h3 class="st-card-title">Recent Sessions</h3> <p class="st-card-desc">View your recent login activity and active sessions.</p> </div> <button class="st-btn st-btn-outline">View</button> </div> </div> </section> </div> </div> </main> </div>  <nav class="st-bottom-nav"> <a href="/dashboard/feed" class="st-bnav-item"> <span class="material-symbols-outlined">dynamic_feed</span> <span>Feed</span> </a> <a href="/dashboard" class="st-bnav-item"> <span class="material-symbols-outlined">account_circle</span> <span>Portfolio</span> </a> <a href="/dashboard/events" class="st-bnav-item"> <span class="material-symbols-outlined">calendar_today</span> <span>Events</span> </a> <a href="/dashboard/settings" class="st-bnav-item active"> <span class="material-symbols-outlined">settings</span> <span>Settings</span> </a> </nav> ` })} ${renderScript($$result, "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/pages/dashboard/settings.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/pages/dashboard/settings.astro", void 0);

const $$file = "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/pages/dashboard/settings.astro";
const $$url = "/dashboard/settings";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Settings,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
