import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, h as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_DmbnTnSo.mjs';
import 'piccolore';
import { r as requireAdmin, $ as $$AdminLayout } from '../../chunks/admin-auth_CIQ3z8O4.mjs';
import { c as createClient } from '../../chunks/supabase_6R9BuJF1.mjs';
/* empty css                                              */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$FeedGovernance = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FeedGovernance;
  const supabase = createClient({ request: Astro2.request, cookies: Astro2.cookies });
  const admin = await requireAdmin(supabase);
  if (!admin) return Astro2.redirect("/login");
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Feed Governance", "activeTab": "feed-governance" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Feed &amp; Post Governance</h1> <p class="subtitle">Moderate posts, manage trending topics, and curate featured members</p>  <div class="gov-tabs"> <button class="gov-tab active" data-tab="posts">Post Moderator</button> <button class="gov-tab" data-tab="trending">Trending Topics</button> <button class="gov-tab" data-tab="featured">Featured Members</button> </div>  <div class="gov-panel active" id="panel-posts"> <div class="gov-toolbar"> <div class="neu-input-wrap" style="flex:1;max-width:320px"> <input type="text" id="post-search" placeholder="Search posts..."> </div> <button class="btn-neu btn-neu-sm" id="refresh-posts"><span class="material-symbols-outlined" style="font-size:16px">refresh</span> Refresh</button> </div> <div id="posts-container"><p class="loading">Loading posts...</p></div> </div>  <div class="gov-panel" id="panel-trending"> <div class="neu-card" style="margin-bottom:1rem"> <form id="add-topic-form" style="display:flex;gap:0.5rem;align-items:center;flex-wrap:wrap"> <div class="neu-input-wrap" style="flex:1;min-width:140px"> <input type="text" id="topic-hashtag" required placeholder="#hashtag"> </div> <div class="neu-input-wrap" style="flex:1;min-width:120px"> <input type="text" id="topic-count" placeholder="Display count (e.g. 1.2k)"> </div> <button type="submit" class="btn-neu"><span class="material-symbols-outlined" style="font-size:16px">add</span> Add Topic</button> </form> <p id="topic-error" class="error-msg"></p> </div> <div id="topics-container"><p class="loading">Loading topics...</p></div> </div>  <div class="gov-panel" id="panel-featured"> <div class="neu-card" style="margin-bottom:1rem"> <form id="add-featured-form" style="display:flex;gap:0.5rem;align-items:center;flex-wrap:wrap"> <div class="neu-input-wrap" style="flex:1;min-width:200px"> <input type="text" id="featured-user-id" required placeholder="User UUID"> </div> <button type="submit" class="btn-neu"><span class="material-symbols-outlined" style="font-size:16px">add</span> Add Member</button> </form> <p id="featured-error" class="error-msg"></p> </div> <div id="featured-container"><p class="loading">Loading featured members...</p></div> </div> ` })}  ${renderScript($$result, "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/pages/admin/feed-governance.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/pages/admin/feed-governance.astro", void 0);

const $$file = "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/pages/admin/feed-governance.astro";
const $$url = "/admin/feed-governance";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$FeedGovernance,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
