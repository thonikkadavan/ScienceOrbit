import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DmbnTnSo.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_B87L1oKU.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Not Found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="not-found"> <div class="not-found-card"> <h1>404</h1> <p>The page you're looking for doesn't exist.</p> <a href="/" class="btn">Go Home</a> </div> </div> ` })} `;
}, "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/pages/404.astro", void 0);

const $$file = "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
