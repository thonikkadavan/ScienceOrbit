import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, h as createAstro, m as maybeRenderHead, g as addAttribute } from '../../chunks/astro/server_DmbnTnSo.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_B87L1oKU.mjs';
import { $ as $$DashboardSidebar } from '../../chunks/DashboardSidebar_Ryq23qPd.mjs';
import { c as createClient } from '../../chunks/supabase_6R9BuJF1.mjs';
import { a as getSessionUser, g as getProfile } from '../../chunks/auth_B1VYFRhe.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Feed = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Feed;
  const supabase = createClient({ request: Astro2.request, cookies: Astro2.cookies });
  const sessionUser = await getSessionUser(supabase);
  const profile = await getProfile(supabase);
  if (!profile) {
    return Astro2.redirect("/login");
  }
  const avatarUrl = profile.avatar_url ? supabase.storage.from("avatars").getPublicUrl(profile.avatar_url).data.publicUrl : null;
  const { data: newUsers } = await supabase.from("profiles").select("id, username, display_name, avatar_url, legal_name").order("created_at", { ascending: false }).limit(5);
  const { data: posts } = await supabase.from("posts").select("id, user_id, content, created_at, image_url, file_url, file_name").order("created_at", { ascending: false }).limit(50);
  const authorIds = [...new Set((posts || []).map((p) => p.user_id))];
  const { data: authors } = authorIds.length ? await supabase.from("profiles").select("id, username, display_name, avatar_url").in("id", authorIds) : { data: [] };
  const authorMap = new Map((authors || []).map((a) => [a.id, a]));
  const postsWithAuthors = (posts || []).map((p) => ({ ...p, author: authorMap.get(p.user_id) || null }));
  const postIds = (posts || []).map((p) => p.id);
  const { data: likeCounts } = postIds.length ? await supabase.from("post_likes").select("post_id").in("post_id", postIds) : { data: [] };
  const likeCountMap = /* @__PURE__ */ new Map();
  (likeCounts || []).forEach((l) => {
    likeCountMap.set(l.post_id, (likeCountMap.get(l.post_id) || 0) + 1);
  });
  let likedPosts = /* @__PURE__ */ new Set();
  if (sessionUser && postIds.length) {
    const { data: myLikes } = await supabase.from("post_likes").select("post_id").in("post_id", postIds).eq("user_id", sessionUser.id);
    likedPosts = new Set((myLikes || []).map((l) => l.post_id));
  }
  function getTimeAgo(dateStr) {
    if (!dateStr) return "";
    const now = /* @__PURE__ */ new Date();
    const d = new Date(dateStr);
    const diff = Math.floor((now.getTime() - d.getTime()) / 1e3);
    if (diff < 60) return "just now";
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    if (diff < 2592e3) return `${Math.floor(diff / 86400)}d ago`;
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Academic Feed" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "DashboardSidebar", $$DashboardSidebar, { "current": "feed" })} ${maybeRenderHead()}<div class="feed-root"> <main class="feed-main"> <div class="feed-content"> <div class="top-search-wrap"> <span class="material-symbols-outlined top-search-icon">search</span> <input class="top-search-input" type="text" id="top-search" placeholder="Search scholars and posts..." autocomplete="off"> <button class="top-search-clear" id="top-search-clear" aria-label="Clear"> <span class="material-symbols-outlined">close</span> </button> <div class="top-search-dropdown" id="top-search-dropdown"></div> </div> <div class="feed-newusers"> <div class="feed-newusers-label">New Members</div> <div class="feed-newusers-list"> ${(newUsers || []).map((u) => {
    const uAvatar = u.avatar_url ? supabase.storage.from("avatars").getPublicUrl(u.avatar_url).data.publicUrl : null;
    return renderTemplate`<a${addAttribute(`/dashboard?user=${u.id}`, "href")} class="feed-newuser-item"${addAttribute(u.display_name || u.username, "title")}> ${uAvatar ? renderTemplate`<img${addAttribute(uAvatar, "src")} alt="" class="feed-newuser-avatar">` : renderTemplate`<div class="feed-newuser-avatar feed-newuser-placeholder"> <span class="material-symbols-outlined">person</span> </div>`} <span class="feed-newuser-name">${u.display_name || u.username}</span> </a>`;
  })} </div> </div> <div class="feed-composer-overlay" id="composer-overlay"> <div class="feed-composer-modal"> <div class="composer-modal-header"> <h3>Create Post</h3> <button class="composer-close-btn" id="composer-close" aria-label="Close"> <span class="material-symbols-outlined">close</span> </button> </div> <div class="post-composer"> <div class="composer-avatar"> ${avatarUrl ? renderTemplate`<img${addAttribute(avatarUrl, "src")} alt="" class="composer-avatar-img">` : renderTemplate`<div class="composer-avatar-placeholder"> <span class="material-symbols-outlined">person</span> </div>`} </div> <div class="composer-input-area"> <textarea class="composer-input composer-textarea" placeholder="Share your latest findings..." rows="4"></textarea> <div class="composer-preview" id="composer-preview" style="display:none"></div> </div> <div class="composer-actions"> <button class="composer-action-btn" id="composer-image-btn" aria-label="Add image"> <span class="material-symbols-outlined">image</span> </button> <input type="file" id="composer-image-input" accept="image/*" style="display:none"> <button class="composer-action-btn" id="composer-attach-btn" aria-label="Attach file"> <span class="material-symbols-outlined">attach_file</span> </button> <input type="file" id="composer-file-input" style="display:none"> <button class="composer-post-btn">Post</button> </div> </div> </div> </div> <div class="profile-overlay" id="profile-overlay"> <div class="profile-modal"> <div class="profile-modal-header"> <h3>Scholar Profile</h3> <button class="profile-close-btn" id="profile-close" aria-label="Close"> <span class="material-symbols-outlined">close</span> </button> </div> <div class="profile-modal-body" id="profile-modal-body"></div> </div> </div> <button class="feed-fab" id="fab-add" aria-label="Create post"> <span class="material-symbols-outlined">add</span> </button> <div class="feed-posts" id="feed-posts"> ${postsWithAuthors.length === 0 && renderTemplate`<p class="feed-empty">No posts yet. Be the first to share your findings!</p>`} ${postsWithAuthors.map((post) => {
    const author = post.author;
    const authorAvatar = author?.avatar_url ? supabase.storage.from("avatars").getPublicUrl(author.avatar_url).data.publicUrl : null;
    const timeAgo = getTimeAgo(post.created_at);
    return renderTemplate`<article class="feed-post"${addAttribute(post.id, "data-post-id")}> <div class="post-header"> <div class="post-author"> <div class="post-avatar"> ${authorAvatar ? renderTemplate`<img${addAttribute(authorAvatar, "src")} alt="" class="post-avatar-img">` : renderTemplate`<span class="material-symbols-outlined">account_circle</span>`} </div> <div class="post-author-info"> <strong class="post-author-name">${author?.display_name || author?.username || "Unknown"}</strong> <span class="post-author-meta">${timeAgo}</span> </div> </div> ${post.user_id === profile.id && renderTemplate`<button class="post-menu-btn post-delete-btn"${addAttribute(post.id, "data-post-id")} aria-label="Delete post"> <span class="material-symbols-outlined">delete</span> </button>`} </div> <div class="post-body"> ${post.content ? renderTemplate`<p class="post-text">${post.content}</p>` : null} ${post.image_url ? renderTemplate`<img${addAttribute(post.image_url, "src")} class="post-image" alt="" loading="lazy">` : null} ${post.file_url ? renderTemplate`<a${addAttribute(post.file_url, "href")} target="_blank" class="post-attach-link"><span class="material-symbols-outlined">description</span> ${post.file_name || "Attachment"}</a>` : null} </div> <div class="post-actions"> <button class="post-action-btn post-like-btn"${addAttribute(post.id, "data-post-id")}${addAttribute(likedPosts.has(post.id) ? "true" : "false", "data-liked")}> <span class="material-symbols-outlined post-like-icon">${likedPosts.has(post.id) ? "favorite" : "favorite_border"}</span> <span class="post-like-count">${likeCountMap.get(post.id) || 0}</span> </button> </div> </article>`;
  })} </div> </div> <aside class="feed-right"> <div class="right-card trending-card"> <h3 class="right-card-title">Trending Topics</h3> <div class="trending-list"> <div class="trending-item"> <span class="trending-hashtag">#QuantumComputing</span> <span class="trending-count">1.2k papers this week</span> </div> <div class="trending-item"> <span class="trending-hashtag">#CRISPR</span> <span class="trending-count">845 papers this week</span> </div> <div class="trending-item"> <span class="trending-hashtag">#RenewableEnergy</span> <span class="trending-count">620 papers this week</span> </div> </div> </div> <div class="right-card events-card"> <h3 class="right-card-title">Upcoming Events</h3> <div class="events-list"> <div class="event-card"> <div class="event-date"> <span class="event-date-day">12</span> <span class="event-date-month">Oct</span> </div> <div class="event-info"> <strong class="event-title">Annual Science Symposium</strong> <span class="event-meta">Main Auditorium &bull; 09:00 AM</span> </div> </div> <div class="event-card"> <div class="event-date"> <span class="event-date-day">15</span> <span class="event-date-month">Oct</span> </div> <div class="event-info"> <strong class="event-title">Guest Lecture: Astrophysics</strong> <span class="event-meta">Room 4B &bull; 14:00 PM</span> </div> </div> </div> </div> </aside> </main> </div> <nav class="feed-bottom-nav"> <a href="/dashboard/feed" class="bottom-nav-item active"> <span class="material-symbols-outlined">dynamic_feed</span> <span>Feed</span> </a> <a href="/dashboard" class="bottom-nav-item"> <span class="material-symbols-outlined">account_circle</span> <span>Portfolio</span> </a> <a href="/dashboard/events" class="bottom-nav-item"> <span class="material-symbols-outlined">event</span> <span>Events</span> </a> <a href="/dashboard/settings" class="bottom-nav-item"> <span class="material-symbols-outlined">settings</span> <span>Settings</span> </a> </nav> ` })} ${renderScript($$result, "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/pages/dashboard/feed.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/pages/dashboard/feed.astro", void 0);

const $$file = "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/pages/dashboard/feed.astro";
const $$url = "/dashboard/feed";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Feed,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
