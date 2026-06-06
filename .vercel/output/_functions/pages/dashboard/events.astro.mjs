import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, h as createAstro, m as maybeRenderHead, g as addAttribute } from '../../chunks/astro/server_DmbnTnSo.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_B87L1oKU.mjs';
import { $ as $$DashboardSidebar } from '../../chunks/DashboardSidebar_Ryq23qPd.mjs';
import { c as createClient } from '../../chunks/supabase_6R9BuJF1.mjs';
import { g as getProfile } from '../../chunks/auth_B1VYFRhe.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Events = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Events;
  const supabase = createClient({ request: Astro2.request, cookies: Astro2.cookies });
  const profile = await getProfile(supabase);
  if (!profile) {
    return Astro2.redirect("/login");
  }
  profile.avatar_url ? supabase.storage.from("avatars").getPublicUrl(profile.avatar_url).data.publicUrl : null;
  const { data: events } = await supabase.from("events").select("*").order("event_date", { ascending: true });
  const { data: registrations } = await supabase.from("event_registrations").select("event_id").eq("user_id", profile.id);
  const registeredIds = new Set((registrations || []).map((r) => r.event_id));
  const now = (/* @__PURE__ */ new Date()).toISOString();
  const allEvents = events || [];
  const upcomingEvents = allEvents.filter((e) => e.event_date >= now);
  const pastEvents = allEvents.filter((e) => e.event_date < now);
  const liveEvent = upcomingEvents.find((e) => e.is_live);
  const featuredEvent = liveEvent || upcomingEvents[0] || null;
  const upNextEvents = upcomingEvents.slice(1, 4);
  const gridEvents = upcomingEvents.filter((e) => !featuredEvent || e.id !== featuredEvent.id);
  const myCalendarEvents = allEvents.filter((e) => registeredIds.has(e.id) && e.event_date >= now);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Events Dashboard" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "DashboardSidebar", $$DashboardSidebar, { "current": "events" })} ${maybeRenderHead()}<div class="ev-root"> <main class="ev-main" id="ev-main"> <div class="ev-content"> <div class="ev-header"> <h1 class="ev-title">Events & Webinars</h1> <p class="ev-subtitle">Discover academic conferences, symposiums, and digital lectures.</p> </div> <div class="ev-tabs"> <button class="ev-tab active" data-tab="all">All Events</button> <button class="ev-tab" data-tab="calendar">My Calendar</button> <button class="ev-tab" data-tab="past">Past Webinars</button> </div> <div id="ev-view-all"> ${featuredEvent && renderTemplate`<div class="ev-featured-section"> <div class="ev-featured-card"> ${featuredEvent.is_live && renderTemplate`<div class="ev-featured-badge">Live Now</div>`} <div class="ev-featured-top"> <button class="ev-bookmark-btn"${addAttribute(featuredEvent.id, "data-event-id")} aria-label="Bookmark"> <span class="material-symbols-outlined">${registeredIds.has(featuredEvent.id) ? "bookmark" : "bookmark_border"}</span> </button> </div> <div class="ev-featured-date"> <span class="material-symbols-outlined ev-date-icon">event</span> ${new Date(featuredEvent.event_date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} <span class="material-symbols-outlined ev-date-icon">schedule</span> ${new Date(featuredEvent.event_date).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })} UTC
</div> <h2 class="ev-featured-title">${featuredEvent.title}</h2> <p class="ev-featured-desc">${featuredEvent.description}</p> <button class="ev-join-btn ev-reg-btn"${addAttribute(featuredEvent.id, "data-event-id")}> ${registeredIds.has(featuredEvent.id) ? "Registered" : "Register"} <span class="material-symbols-outlined">arrow_forward</span> </button> </div> ${upNextEvents.length > 0 && renderTemplate`<aside class="ev-upnext"> <div class="ev-upnext-header"> <span>Up Next</span> </div> <div class="ev-upnext-list"> ${upNextEvents.map((e) => renderTemplate`<div class="ev-upnext-item"> <div class="ev-upnext-time"> ${new Date(e.event_date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}, ${new Date(e.event_date).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })} </div> <div class="ev-upnext-row"> <span class="material-symbols-outlined ev-upnext-icon">${e.icon || "event"}</span> <div> <div class="ev-upnext-name">${e.title}</div> <div class="ev-upnext-desc">${e.category}</div> </div> </div> </div>`)} </div> </aside>`} </div>`} <div class="ev-grid" id="ev-grid"> ${gridEvents.length === 0 && upcomingEvents.length === 0 && renderTemplate`<p class="ev-empty">No upcoming events at this time.</p>`} ${gridEvents.map((e) => renderTemplate`<article class="ev-card"${addAttribute(e.id, "data-event-id")}> <div${addAttribute(`ev-card-icon ev-card-icon-${e.category?.toLowerCase().slice(0, 5) || "general"}`, "class")}> <span class="material-symbols-outlined">${e.icon || "event"}</span> </div> <div class="ev-card-category">${e.category}</div> <div class="ev-card-date">${new Date(e.event_date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</div> <h3 class="ev-card-title">${e.title}</h3> <p class="ev-card-desc">${e.description}</p> <button class="ev-register-btn ev-reg-btn"${addAttribute(e.id, "data-event-id")}> ${registeredIds.has(e.id) ? "Unregister" : "Register"} </button> </article>`)} </div> </div> <div id="ev-view-calendar" style="display:none"> ${myCalendarEvents.length === 0 ? renderTemplate`<p class="ev-empty">You haven''t registered for any upcoming events yet. Browse the "All Events" tab to find events to join.</p>` : renderTemplate`<div class="ev-grid"> ${myCalendarEvents.map((e) => renderTemplate`<article class="ev-card"${addAttribute(e.id, "data-event-id")}> <div${addAttribute(`ev-card-icon ev-card-icon-${e.category?.toLowerCase().slice(0, 5) || "general"}`, "class")}> <span class="material-symbols-outlined">${e.icon || "event"}</span> </div> <div class="ev-card-category">${e.category}</div> <div class="ev-card-date">${new Date(e.event_date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</div> <h3 class="ev-card-title">${e.title}</h3> <p class="ev-card-desc">${e.description}</p> <button class="ev-register-btn ev-reg-btn"${addAttribute(e.id, "data-event-id")}>Unregister</button> </article>`)} </div>`} </div> <div id="ev-view-past" style="display:none"> ${pastEvents.length === 0 ? renderTemplate`<p class="ev-empty">No past events yet.</p>` : renderTemplate`<div class="ev-grid"> ${pastEvents.map((e) => renderTemplate`<article class="ev-card ev-card-past"${addAttribute(e.id, "data-event-id")}> <div${addAttribute(`ev-card-icon ev-card-icon-${e.category?.toLowerCase().slice(0, 5) || "general"}`, "class")}> <span class="material-symbols-outlined">${e.icon || "event"}</span> </div> <div class="ev-card-category">${e.category}</div> <div class="ev-card-date">${new Date(e.event_date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</div> <h3 class="ev-card-title">${e.title}</h3> <p class="ev-card-desc">${e.description}</p> <div class="ev-past-badge">Completed</div> </article>`)} </div>`} </div> </div> </main> </div> <nav class="ev-bottom-nav"> <a href="/dashboard/feed" class="ev-bnav-item"> <span class="material-symbols-outlined">dynamic_feed</span> <span>Feed</span> </a> <a href="/dashboard" class="ev-bnav-item"> <span class="material-symbols-outlined">account_circle</span> <span>Portfolio</span> </a> <a href="/dashboard/events" class="ev-bnav-item active"> <span class="material-symbols-outlined">calendar_today</span> <span>Events</span> </a> <a href="/dashboard/settings" class="ev-bnav-item"> <span class="material-symbols-outlined">settings</span> <span>Settings</span> </a> </nav> ` })} ${renderScript($$result, "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/pages/dashboard/events.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/pages/dashboard/events.astro", void 0);

const $$file = "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/pages/dashboard/events.astro";
const $$url = "/dashboard/events";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Events,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
