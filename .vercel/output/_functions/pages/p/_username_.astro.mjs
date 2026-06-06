import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead, g as addAttribute } from '../../chunks/astro/server_DmbnTnSo.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_B87L1oKU.mjs';
import { c as createClient } from '../../chunks/supabase_6R9BuJF1.mjs';
/* empty css                                         */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$username = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$username;
  const { username } = Astro2.params;
  const supabase = createClient({ request: Astro2.request, cookies: Astro2.cookies });
  const { data: profile } = await supabase.from("profiles").select("*, campuses(name)").eq("username", username).single();
  if (!profile || !profile.is_approved) {
    return Astro2.redirect("/404", 404);
  }
  const avatarUrl = profile.avatar_url ? supabase.storage.from("avatars").getPublicUrl(profile.avatar_url).data.publicUrl : null;
  const campusName = profile.campuses?.name ?? "";
  const achievementsList = profile.achievements ? profile.achievements.split("\n").filter(Boolean) : [];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": profile.display_name || profile.username }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="public-portfolio-root"> <header class="pp-topnav"> <div class="pp-topnav-inner"> <div class="pp-brand">Science Orbit</div> <nav class="pp-nav"> <a href="#" class="pp-nav-link">Home</a> <a href="#" class="pp-nav-link active">Portfolio</a> <a href="#" class="pp-nav-link">About</a> <a href="#" class="pp-nav-link">Contact</a> </nav> <button class="pp-connect-btn">Connect</button> </div> </header> <main class="pp-main"> <div class="pp-hero"> <div class="pp-avatar-wrap"> ${avatarUrl ? renderTemplate`<img${addAttribute(avatarUrl, "src")}${addAttribute(profile.display_name, "alt")} class="pp-avatar">` : renderTemplate`<div class="pp-avatar-placeholder"> <span class="material-symbols-outlined">person</span> </div>`} </div> <h1 class="pp-name">${profile.display_name || profile.username}</h1> <p class="pp-affiliation"> ${campusName} ${campusName && profile.mentor_name ? " | " : ""} ${profile.mentor_name || ""} ${!campusName && profile.mentor_name ? "" : ""} ${profile.subjects?.length ? ` | ${profile.subjects.slice(0, 3).join(", ")}${profile.subjects.length > 3 ? "..." : ""}` : ""} </p> ${profile.subjects && profile.subjects.length > 0 && renderTemplate`<div class="pp-subjects"> ${profile.subjects.map((s) => renderTemplate`<span class="pp-subject-chip">${s}</span>`)} </div>`} <button class="pp-resume-btn"> <span class="material-symbols-outlined">download</span>
Download Resume
</button> </div> ${achievementsList.length > 0 && renderTemplate`<section class="pp-milestones"> <h2 class="pp-section-title">Academic Milestones</h2> <div class="pp-milestones-grid"> ${achievementsList.map((ach, i) => {
    const isAward = ach.toLowerCase().includes("award") || ach.toLowerCase().includes("grant") || ach.toLowerCase().includes("fellowship") || ach.toLowerCase().includes("scholarship");
    return renderTemplate`<div class="pp-milestone-card"> <div class="pp-milestone-badge"> <span class="material-symbols-outlined">${isAward ? "workspace_premium" : "auto_stories"}</span> </div> <div class="pp-milestone-body"> <h3 class="pp-milestone-title">${isAward ? "Achievement" : "Milestone"}</h3> <p class="pp-milestone-desc">${ach}</p> </div> </div>`;
  })} </div> </section>`} <div class="pp-footer-badge"> <span class="material-symbols-outlined">rocket_launch</span>
Science Orbit Portfolio
</div> </main> </div> ` })} `;
}, "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/pages/p/[username].astro", void 0);

const $$file = "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/pages/p/[username].astro";
const $$url = "/p/[username]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$username,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
