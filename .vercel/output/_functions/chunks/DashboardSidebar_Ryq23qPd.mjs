import { e as createComponent, m as maybeRenderHead, l as renderScript, r as renderTemplate, h as createAstro } from './astro/server_DmbnTnSo.mjs';
import 'piccolore';
import 'clsx';
import { c as createClient } from './supabase_6R9BuJF1.mjs';
/* empty css                        */

const $$Astro = createAstro();
const $$DashboardSidebar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DashboardSidebar;
  const { current } = Astro2.props;
  const supabase = createClient({ request: Astro2.request, cookies: Astro2.cookies });
  const { data: { user } } = await supabase.auth.getUser();
  user?.user_metadata?.avatar_url ? supabase.storage.from("avatars").getPublicUrl(user.user_metadata.avatar_url).data.publicUrl : null;
  return renderTemplate`${maybeRenderHead()}<aside class="ds-sidebar"> <div class="ds-brand"> <a href="/dashboard/feed"><img src="/logo.png" alt="Science Orbit" class="ds-brand-img"></a> <div class="ds-brand-text"> <span class="ds-brand-title">Science Orbit</span> <span class="ds-brand-sub">Digital Laboratory</span> </div> </div> <nav class="ds-nav"> <a href="/dashboard/feed" class="ds-nav-item {current === 'feed' ? 'active' : ''}"> <span class="material-symbols-outlined ds-nav-icon">dynamic_feed</span> <span class="ds-nav-label">Feed</span> </a> <a href="/dashboard" class="ds-nav-item {current === 'portfolio' ? 'active' : ''}"> <span class="material-symbols-outlined ds-nav-icon">account_circle</span> <span class="ds-nav-label">Portfolio</span> </a> <a href="/dashboard/events" class="ds-nav-item {current === 'events' ? 'active' : ''}"> <span class="material-symbols-outlined ds-nav-icon">calendar_today</span> <span class="ds-nav-label">Events</span> </a> </nav> <div class="ds-spacer"></div> <nav class="ds-nav"> <a href="/dashboard/settings" class="ds-nav-item {current === 'settings' ? 'active' : ''}"> <span class="material-symbols-outlined ds-nav-icon">settings</span> <span class="ds-nav-label">Settings</span> </a> <a href="#" class="ds-nav-item"> <span class="material-symbols-outlined ds-nav-icon">help_outline</span> <span class="ds-nav-label">Help</span> </a> <button id="logout-btn" class="ds-nav-item ds-logout-btn"> <span class="material-symbols-outlined ds-nav-icon">logout</span> <span class="ds-nav-label">Logout</span> </button> </nav> </aside> ${renderScript($$result, "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/components/DashboardSidebar.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/components/DashboardSidebar.astro", void 0);

export { $$DashboardSidebar as $ };
