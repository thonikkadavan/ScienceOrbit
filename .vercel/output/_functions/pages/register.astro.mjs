import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DmbnTnSo.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_B87L1oKU.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Register" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="auth-page"> <div class="auth-card"> <div class="auth-card-inner"> <h1>Create Account</h1> <p class="auth-subtitle">Join Science Orbit</p> <form id="register-form" class="auth-form"> <div class="form-group"> <label for="username">Username</label> <input type="text" id="username" required placeholder="your-username" pattern="[a-zA-Z0-9_-]+" title="Letters, numbers, hyphens, and underscores only"> </div> <div class="form-group"> <label for="email">Email</label> <input type="email" id="email" required placeholder="you@example.com"> </div> <div class="form-group"> <label for="password">Password</label> <input type="password" id="password" required minlength="6" placeholder="At least 6 characters"> </div> <p id="error-msg" class="error-msg"></p> <button type="submit" class="btn-primary" id="submit-btn">
Create Account
</button> </form> <p class="auth-footer">
Already have an account? <a href="/login">Sign in</a> </p> </div> </div> </div> ` })} ${renderScript($$result, "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/pages/register.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/pages/register.astro", void 0);

const $$file = "C:/Users/midla/OneDrive/Documents/ClientPro/ScienceOrbit/src/pages/register.astro";
const $$url = "/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Register,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
