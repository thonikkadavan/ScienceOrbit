import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DmbnTnSo.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_B87L1oKU.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Science Orbit | Precision Research Ecosystem" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="lp-wrap"> <!-- TopAppBar --> <header class="lp-header"> <div class="lp-header-inner"> <div class="lp-header-left"> <button class="lp-menu-btn" aria-label="Menu"> <span class="material-symbols-outlined">menu</span> </button> <h1 class="lp-brand">Science Orbit</h1> </div> <a href="/login" class="lp-account-btn" aria-label="Sign In"> <span class="material-symbols-outlined lp-account-icon">account_circle</span> </a> </div> </header> <main class="lp-main"> <!-- Hero Section --> <section class="lp-hero"> <div class="lp-hero-text"> <h2 class="lp-hero-title">Science Orbit</h2> <p class="lp-hero-sub">Showcase your academic journey through precision data and verified networking.</p> </div> <div class="lp-hero-actions"> <a href="/register" class="lp-btn lp-btn-primary neumorphic-convex neumorphic-interaction">Get Started</a> <a href="/login" class="lp-btn lp-btn-secondary neumorphic-convex neumorphic-interaction">Sign In</a> </div> </section> <!-- Feature Stack --> <section class="lp-features"> <div class="lp-feature-card neumorphic-convex"> <div class="lp-feature-icon-wrap neumorphic-concave"> <span class="material-symbols-outlined lp-feature-icon">verified</span> </div> <div class="lp-feature-body"> <h3 class="lp-feature-title">Verified Credentials</h3> <p class="lp-feature-desc">Immutable academic records powered by distributed ledger protocols.</p> </div> </div> <div class="lp-feature-card neumorphic-convex"> <div class="lp-feature-icon-wrap neumorphic-concave"> <span class="material-symbols-outlined lp-feature-icon">hub</span> </div> <div class="lp-feature-body"> <h3 class="lp-feature-title">Precision Network</h3> <p class="lp-feature-desc">Connect with specialized research peers in a noiseless, high-signal ecosystem.</p> </div> </div> <div class="lp-feature-card neumorphic-convex"> <div class="lp-feature-icon-wrap neumorphic-concave"> <span class="material-symbols-outlined lp-feature-icon">bar_chart</span> </div> <div class="lp-feature-body"> <h3 class="lp-feature-title">Deep Analytics</h3> <p class="lp-feature-desc">Track citation velocity and cross-disciplinary impact with granular precision.</p> </div> </div> </section> </main> <!-- Footer --> <footer class="lp-footer"> <h2 class="lp-footer-brand">Science Orbit</h2> <div class="lp-footer-links"> <a href="#">Terms of Service</a> <span class="lp-footer-divider">|</span> <a href="#">Privacy Protocol</a> <span class="lp-footer-divider">|</span> <a href="#">Institutional Access</a> </div> <p class="lp-footer-copy">&copy; 2024 Science Orbit. Precision Research Ecosystem.</p> <div class="lp-footer-social"> <div class="lp-social-icon neumorphic-convex"><span class="material-symbols-outlined">science</span></div> <div class="lp-social-icon neumorphic-convex"><span class="material-symbols-outlined">database</span></div> <div class="lp-social-icon neumorphic-convex"><span class="material-symbols-outlined">share</span></div> </div> </footer> </div> ` })} ${renderScript($$result, "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/pages/index.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/pages/index.astro", void 0);

const $$file = "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
