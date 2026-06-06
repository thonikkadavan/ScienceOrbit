import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, h as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_DmbnTnSo.mjs';
import 'piccolore';
import { r as requireAdmin, $ as $$AdminLayout } from '../../chunks/admin-auth_CIQ3z8O4.mjs';
import { c as createClient } from '../../chunks/supabase_6R9BuJF1.mjs';
/* empty css                                                */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$EventsDispatcher = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$EventsDispatcher;
  const supabase = createClient({ request: Astro2.request, cookies: Astro2.cookies });
  const admin = await requireAdmin(supabase);
  if (!admin) return Astro2.redirect("/login");
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Events Dispatcher", "activeTab": "events-dispatcher" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Events &amp; Calendar Dispatcher</h1> <p class="subtitle">Schedule events, toggle live banners, and manage the event timeline</p> <div class="gov-tabs"> <button class="gov-tab active" data-tab="scheduler">Chronological Scheduler</button> <button class="gov-tab" data-tab="live">Live Banner Toggle</button> <button class="gov-tab" data-tab="timeline">Up Next Timeline</button> </div>  <div class="gov-panel active" id="panel-scheduler"> <div class="neu-card" style="margin-bottom:1rem"> <form id="add-event-form" style="display:grid;grid-template-columns:1fr 1fr;gap:0.5rem"> <div class="neu-input-wrap" style="grid-column:1/-1"> <input type="text" id="event-title" required placeholder="Event title..."> </div> <div class="neu-input-wrap"> <input type="text" id="event-desc" placeholder="Short description..."> </div> <div class="neu-input-wrap"> <input type="datetime-local" id="event-date" required> </div> <div class="neu-input-wrap"> <select id="event-type"> <option value="webinar">Webinar</option> <option value="workshop">Workshop</option> <option value="conference">Conference</option> <option value="hackathon">Hackathon</option> <option value="meetup">Meetup</option> <option value="other">Other</option> </select> </div> <div class="neu-input-wrap"> <select id="event-category"> <option value="">Select category…</option> <option value="BIOLOGY">Biology</option> <option value="ASTROPHYSICS">Astrophysics</option> <option value="COGNITIVE_SCI">Cognitive Science</option> <option value="CHEMISTRY">Chemistry</option> <option value="COMPUTER_SCI">Computer Science</option> <option value="MATHEMATICS">Mathematics</option> <option value="PHYSICS">Physics</option> <option value="ENGINEERING">Engineering</option> <option value="ENVIRONMENTAL">Environmental Science</option> <option value="MEDICINE">Medicine</option> <option value="NEUROSCIENCE">Neuroscience</option> <option value="DATA_SCI">Data Science</option> <option value="OTHER">Other</option> </select> </div> <div class="neu-input-wrap"> <input type="text" id="event-icon" placeholder="Icon name (e.g. science)"> </div> <div class="neu-input-wrap"> <input type="text" id="event-location" placeholder="Location or link"> </div> <div class="neu-input-wrap"> <input type="url" id="event-reg-url" placeholder="Registration URL"> </div> <div style="display:flex;align-items:center;gap:0.75rem;grid-column:1/-1;flex-wrap:wrap"> <div style="display:flex;align-items:center;gap:0.5rem"> <span style="font-size:13px;font-weight:600;color:var(--color-on-surface-variant);letter-spacing:0.02em">LIVE PRIORITY</span> <label class="st-toggle"> <input type="checkbox" id="event-live"> <span class="st-toggle-slider"></span> </label> </div> <button type="submit" class="btn-neu" style="margin-left:auto"><span class="material-symbols-outlined" style="font-size:16px">add</span> Create Event</button> </div> </form> <p id="event-error" class="error-msg"></p> </div> <div id="events-container"><p class="loading">Loading events...</p></div> </div>  <div class="gov-panel" id="panel-live"> <p class="subtitle">Toggle live status for events. Live events appear as banners on the events page.</p> <div id="live-container"><p class="loading">Loading...</p></div> </div>  <div class="gov-panel" id="panel-timeline"> <p class="subtitle">Upcoming events in chronological order</p> <div id="timeline-container"><p class="loading">Loading timeline...</p></div> </div> ` })}  ${renderScript($$result, "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/pages/admin/events-dispatcher.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/pages/admin/events-dispatcher.astro", void 0);

const $$file = "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/pages/admin/events-dispatcher.astro";
const $$url = "/admin/events-dispatcher";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$EventsDispatcher,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
