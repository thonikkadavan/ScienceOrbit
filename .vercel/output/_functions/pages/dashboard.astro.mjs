import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, h as createAstro, m as maybeRenderHead, g as addAttribute, o as Fragment } from '../chunks/astro/server_DmbnTnSo.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_B87L1oKU.mjs';
import { $ as $$DashboardSidebar } from '../chunks/DashboardSidebar_Ryq23qPd.mjs';
import { c as createClient } from '../chunks/supabase_6R9BuJF1.mjs';
import { a as getSessionUser, b as getProfileById, g as getProfile } from '../chunks/auth_B1VYFRhe.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const supabase = createClient({ request: Astro2.request, cookies: Astro2.cookies });
  const sessionUser = await getSessionUser(supabase);
  const targetUserId = Astro2.url.searchParams.get("user");
  let profile;
  if (targetUserId) {
    profile = await getProfileById(supabase, targetUserId);
    if (!profile) return Astro2.redirect("/dashboard");
  } else {
    profile = await getProfile(supabase);
    if (!profile) return Astro2.redirect("/login");
  }
  const isOwner = sessionUser?.id === profile.id;
  const avatarUrl = profile.avatar_url ? supabase.storage.from("avatars").getPublicUrl(profile.avatar_url).data.publicUrl : null;
  const campusName = profile.campuses?.name ?? "";
  const mentorName = profile.mentors?.name || profile.mentor_name;
  const portfolioUrl = `${Astro2.url.origin}/dashboard?user=${profile.id}`;
  const projectTitle = profile.project_title || "";
  const projectDescription = profile.project_description || "";
  const projectProgress = profile.project_progress || 0;
  profile.github_handle || "";
  profile.linkedin_url || "";
  const techStack = profile.tech_stack || [];
  const repoUrl = profile.repo_url || "";
  const deployUrl = profile.deploy_url || "";
  let milestones = [];
  try {
    milestones = typeof profile.milestones === "string" ? JSON.parse(profile.milestones) : profile.milestones || [];
  } catch {
    milestones = [];
  }
  let socialLinks = [];
  try {
    socialLinks = typeof profile.social_links === "string" ? JSON.parse(profile.social_links) : profile.social_links || [];
  } catch {
  }
  const platformConfig = {
    GitHub: { icon: "github", urlPrefix: "https://github.com/" },
    LinkedIn: { icon: "linkedin", urlPrefix: "" },
    "X / Twitter": { icon: "x", urlPrefix: "https://x.com/" },
    Instagram: { icon: "instagram", urlPrefix: "https://instagram.com/" },
    YouTube: { icon: "youtube", urlPrefix: "https://youtube.com/@" },
    Discord: { icon: "discord", urlPrefix: "" },
    TikTok: { icon: "tiktok", urlPrefix: "https://tiktok.com/@" },
    Snapchat: { icon: "snapchat", urlPrefix: "https://snapchat.com/add/" },
    Facebook: { icon: "facebook", urlPrefix: "https://facebook.com/" },
    Reddit: { icon: "reddit", urlPrefix: "https://reddit.com/u/" },
    Threads: { icon: "threads", urlPrefix: "https://threads.net/@" },
    Bluesky: { icon: "bluesky", urlPrefix: "https://bsky.app/profile/" },
    Medium: { icon: "medium", urlPrefix: "https://medium.com/@" },
    "Stack Overflow": { icon: "stackoverflow", urlPrefix: "https://stackoverflow.com/users/" },
    ResearchGate: { icon: "researchgate", urlPrefix: "https://researchgate.net/profile/" },
    "Google Scholar": { icon: "googlescholar", urlPrefix: "https://scholar.google.com/citations?user=" },
    ORCID: { icon: "orcid", urlPrefix: "https://orcid.org/" }
  };
  function getSocialUrl(platform, value) {
    const cfg = platformConfig[platform];
    if (!cfg) return value;
    if (value.startsWith("http://") || value.startsWith("https://")) return value;
    return cfg.urlPrefix + value;
  }
  const legacyAchievements = profile.achievements ? profile.achievements.split("\n").filter(Boolean) : [];
  const { count: orbitingCount } = await supabase.from("orbits").select("*", { count: "exact", head: true }).eq("orbiter_id", profile.id);
  let isOrbiting = false;
  if (sessionUser && !isOwner) {
    const { data: orbitRow } = await supabase.from("orbits").select("id").eq("orbiter_id", sessionUser.id).eq("orbiting_id", profile.id).maybeSingle();
    isOrbiting = !!orbitRow;
  }
  const { data: userPosts } = await supabase.from("posts").select("id, content, created_at, image_url, file_url, file_name").eq("user_id", profile.id).order("created_at", { ascending: false }).limit(20);
  const userPostIds = (userPosts || []).map((p) => p.id);
  const { data: upLikes } = userPostIds.length ? await supabase.from("post_likes").select("post_id").in("post_id", userPostIds) : { data: [] };
  const portfolioLikeMap = /* @__PURE__ */ new Map();
  (upLikes || []).forEach((l) => {
    portfolioLikeMap.set(l.post_id, (portfolioLikeMap.get(l.post_id) || 0) + 1);
  });
  let portfolioLikedPosts = /* @__PURE__ */ new Set();
  if (sessionUser && userPostIds.length) {
    const { data: myUpLikes } = await supabase.from("post_likes").select("post_id").in("post_id", userPostIds).eq("user_id", sessionUser.id);
    portfolioLikedPosts = new Set((myUpLikes || []).map((l) => l.post_id));
  }
  function getTimeAgo(dateStr) {
    const now = /* @__PURE__ */ new Date();
    const d = new Date(dateStr);
    const diff = Math.floor((now.getTime() - d.getTime()) / 1e3);
    if (diff < 60) return "just now";
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    if (diff < 2592e3) return `${Math.floor(diff / 86400)}d ago`;
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": profile.display_name || profile.username }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "DashboardSidebar", $$DashboardSidebar, { "current": "portfolio" })} ${maybeRenderHead()}<div class="pp-root"> <main class="pp-main"> <div class="pp-container"> <!-- Left Column --> <div class="pp-left"> <!-- Profile Hero Card --> <div class="pp-card pp-hero-card"> <div class="pp-hero-inner"> ${avatarUrl ? renderTemplate`<img${addAttribute(avatarUrl, "src")}${addAttribute(profile.display_name, "alt")} class="pp-avatar">` : renderTemplate`<div class="pp-avatar pp-avatar-placeholder"> <span class="material-symbols-outlined">person</span> </div>`} <div class="pp-hero-body"> <h1 class="pp-name">${profile.display_name || profile.username}</h1> <p class="pp-role">${profile.mentor_name || "Scholar"}</p> <div class="pp-meta"> <span class="pp-meta-item"> <span class="material-symbols-outlined pp-meta-icon">location_on</span> ${campusName || "Not affiliated"} </span> ${mentorName && renderTemplate`<span class="pp-meta-item"> <span class="material-symbols-outlined pp-meta-icon">school</span>
Assigned Mentor: ${mentorName} </span>`} </div> <div class="pp-orbit-stats"> <div class="pp-orbit-stat"> <span class="pp-orbit-num" id="orbiting-count">${orbitingCount ?? 0}</span> <span class="pp-orbit-label">Orbiting</span> </div> </div> ${!isOwner && renderTemplate`<button class="pp-follow-btn" id="orbit-btn"${addAttribute(profile.id, "data-user-id")}${addAttribute(isOrbiting, "data-orbiting")}> ${isOrbiting ? "Following" : "Follow"} </button>`} ${profile.subjects && profile.subjects.length > 0 && renderTemplate`<div class="pp-chips-wrap"> ${profile.subjects.map((s) => renderTemplate`<span class="pp-chip">${s}</span>`)} </div>`} ${techStack.length > 0 && renderTemplate`<div class="pp-chips-wrap pp-tech-wrap"> ${techStack.map((t) => renderTemplate`<span class="pp-chip pp-tech-chip">${t}</span>`)} </div>`} </div> </div> </div> <!-- Mobile Sub Nav --> <nav class="pp-mobile-tabs" id="mobile-tabs"> <button class="pp-mtab active" data-tab="posts">Posts</button> <button class="pp-mtab" data-tab="achievements">Achievements</button> ${(socialLinks.length > 0 || isOwner) && renderTemplate`<button class="pp-mtab" data-tab="connect">Connect</button>`} ${projectTitle && renderTemplate`<button class="pp-mtab" data-tab="project">Project</button>`} </nav> <!-- Tab Panels --> <div class="pp-tab-panel pp-tab-panel--active" data-tab="posts"> <!-- Posts --> ${userPosts && userPosts.length > 0 && renderTemplate`<div class="pp-card pp-posts-card"> <h2 class="pp-section-title"> <span class="material-symbols-outlined pp-section-icon">dynamic_feed</span>
Posts
</h2> <div class="pp-posts-list"> ${userPosts.map((p) => renderTemplate`<div class="pp-post-item"> <div class="pp-post-content"> ${p.content ? renderTemplate`<p class="pp-post-text">${p.content}</p>` : null} ${p.image_url ? renderTemplate`<img${addAttribute(p.image_url, "src")} class="pp-post-image" alt="" loading="lazy">` : null} ${p.file_url ? renderTemplate`<a${addAttribute(p.file_url, "href")} target="_blank" class="pp-post-attach"><span class="material-symbols-outlined">description</span> ${p.file_name || "Attachment"}</a>` : null} </div> <div class="pp-post-meta-row"> <span class="pp-post-time">${getTimeAgo(p.created_at)}</span> <button class="pp-like-btn"${addAttribute(p.id, "data-post-id")}${addAttribute(portfolioLikedPosts.has(p.id) ? "true" : "false", "data-liked")}> <span class="material-symbols-outlined pp-like-icon">${portfolioLikedPosts.has(p.id) ? "favorite" : "favorite_border"}</span> <span class="pp-like-count">${portfolioLikeMap.get(p.id) || 0}</span> </button> </div> </div>`)} </div> </div>`} ${(!userPosts || userPosts.length === 0) && renderTemplate`<div class="pp-card"> <p class="pp-empty">No posts yet.</p> </div>`} </div> <div class="pp-tab-panel" data-tab="achievements"> <!-- Verifiable Achievements --> ${(milestones.length > 0 || legacyAchievements.length > 0 || isOwner) && renderTemplate`<div class="pp-card"> <h2 class="pp-section-title"> <span class="material-symbols-outlined pp-section-icon">emoji_events</span>
Verifiable Achievements
</h2> <div class="pp-milestones-list"> ${milestones.length > 0 ? milestones.map((m) => renderTemplate`<div class="pp-milestone-row"> <div class="pp-milestone-left"> <span class="material-symbols-outlined pp-milestone-badge">verified</span> <div> <h4 class="pp-milestone-title">${m.title}</h4> ${m.issuer && renderTemplate`<p class="pp-milestone-issuer">${m.issuer}</p>`} </div> </div> ${m.url && renderTemplate`<a${addAttribute(m.url, "href")} target="_blank" class="pp-milestone-link" title="Verify"> <span class="material-symbols-outlined">open_in_new</span> </a>`} </div>`) : legacyAchievements.map((ach) => renderTemplate`<div class="pp-milestone-row"> <div class="pp-milestone-left"> <span class="material-symbols-outlined pp-milestone-badge">verified</span> <div> <h4 class="pp-milestone-title">${ach}</h4> </div> </div> </div>`)} ${milestones.length === 0 && legacyAchievements.length === 0 && renderTemplate`<p class="pp-empty">No achievements added yet.</p>`} </div> </div>`} </div> <div class="pp-tab-panel" data-tab="connect"> <div class="pp-card pp-connect-card"> <h3 class="pp-connect-title">Connect</h3> <div class="pp-social-row"> ${socialLinks.map((sl) => {
    const href = getSocialUrl(sl.platform, sl.value);
    const label = sl.platform;
    return renderTemplate`<a${addAttribute(href, "href")} target="_blank" class="pp-social-btn"${addAttribute(label, "title")}> <span class="pp-social-text">${sl.platform === "GitHub" ? "GH" : sl.platform === "LinkedIn" ? "LI" : sl.platform === "X / Twitter" ? "X" : sl.platform.slice(0, 2).toUpperCase()}</span> </a>`;
  })} </div> ${isOwner && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <a href="/dashboard/edit" class="pp-action-btn">Edit Portfolio</a> <button class="pp-action-btn pp-action-secondary" id="copy-portfolio-link"${addAttribute(portfolioUrl, "data-url")}> <span class="material-symbols-outlined" style="font-size:16px">link</span>
Copy Portfolio Link
</button> ` })}`} </div> </div> <div class="pp-tab-panel" data-tab="project"> ${projectTitle ? renderTemplate`<div class="pp-card"> <span class="pp-project-badge">Current Project</span> <div class="pp-project-head"> <h4 class="pp-project-name">${projectTitle}</h4> <div class="pp-project-links"> ${repoUrl && renderTemplate`<a${addAttribute(repoUrl, "href")} target="_blank" class="pp-project-link" title="Repository"> <svg class="pp-social-icon" viewBox="0 0 24 24" fill="currentColor"> <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path> </svg> </a>`} ${deployUrl && renderTemplate`<a${addAttribute(deployUrl, "href")} target="_blank" class="pp-project-link" title="Live Site"> <span class="material-symbols-outlined" style="font-size:16px">open_in_new</span> </a>`} </div> </div> ${projectDescription && renderTemplate`<p class="pp-project-desc">${projectDescription}</p>`} <div class="pp-progress-section"> <div class="pp-progress-labels"> <span>Analysis Phase</span> <span>${projectProgress}%</span> </div> <div class="pp-progress-track"> <div class="pp-progress-fill"${addAttribute(`width:${projectProgress}%`, "style")}></div> </div> </div> </div>` : renderTemplate`<div class="pp-card"><p class="pp-empty">No current project.</p></div>`} </div> </div> <!-- Right Column (desktop only) --> <div class="pp-right pp-desktop-only"> <div class="pp-card pp-connect-card"> <h3 class="pp-connect-title">Connect</h3> <div class="pp-social-row"> ${socialLinks.map((sl) => {
    const href = getSocialUrl(sl.platform, sl.value);
    const label = sl.platform;
    return renderTemplate`<a${addAttribute(href, "href")} target="_blank" class="pp-social-btn"${addAttribute(label, "title")}> <span class="pp-social-text">${sl.platform === "GitHub" ? "GH" : sl.platform === "LinkedIn" ? "LI" : sl.platform === "X / Twitter" ? "X" : sl.platform.slice(0, 2).toUpperCase()}</span> </a>`;
  })} </div> ${isOwner && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <a href="/dashboard/edit" class="pp-action-btn">Edit Portfolio</a> <button class="pp-action-btn pp-action-secondary" id="copy-portfolio-link"${addAttribute(portfolioUrl, "data-url")}> <span class="material-symbols-outlined" style="font-size:16px">link</span>
Copy Portfolio Link
</button> ` })}`} </div> ${projectTitle && renderTemplate`<div class="pp-card"> <span class="pp-project-badge">Current Project</span> <div class="pp-project-head"> <h4 class="pp-project-name">${projectTitle}</h4> <div class="pp-project-links"> ${repoUrl && renderTemplate`<a${addAttribute(repoUrl, "href")} target="_blank" class="pp-project-link" title="Repository"> <svg class="pp-social-icon" viewBox="0 0 24 24" fill="currentColor"> <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path> </svg> </a>`} ${deployUrl && renderTemplate`<a${addAttribute(deployUrl, "href")} target="_blank" class="pp-project-link" title="Live Site"> <span class="material-symbols-outlined" style="font-size:16px">open_in_new</span> </a>`} </div> </div> ${projectDescription && renderTemplate`<p class="pp-project-desc">${projectDescription}</p>`} <div class="pp-progress-section"> <div class="pp-progress-labels"> <span>Analysis Phase</span> <span>${projectProgress}%</span> </div> <div class="pp-progress-track"> <div class="pp-progress-fill"${addAttribute(`width:${projectProgress}%`, "style")}></div> </div> </div> </div>`} </div> </div> </main> </div> <nav class="pp-bottom-nav"> <a href="/dashboard/feed" class="pp-bnav-item"> <span class="material-symbols-outlined">dynamic_feed</span> <span>Feed</span> </a> <a href="/dashboard" class="pp-bnav-item active"> <span class="material-symbols-outlined">account_circle</span> <span>Portfolio</span> </a> <a href="/dashboard/events" class="pp-bnav-item"> <span class="material-symbols-outlined">event</span> <span>Events</span> </a> <a href="/dashboard/settings" class="pp-bnav-item"> <span class="material-symbols-outlined">settings</span> <span>Settings</span> </a> </nav> ` })} ${renderScript($$result, "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/pages/dashboard/index.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/pages/dashboard/index.astro", void 0);

const $$file = "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/pages/dashboard/index.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
