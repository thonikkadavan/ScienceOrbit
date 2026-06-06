import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DoNjEDSB.mjs';
import { manifest } from './manifest_D-1C2oKF.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/admin/campuses.astro.mjs');
const _page3 = () => import('./pages/admin/dashboard.astro.mjs');
const _page4 = () => import('./pages/admin/events-dispatcher.astro.mjs');
const _page5 = () => import('./pages/admin/feed-governance.astro.mjs');
const _page6 = () => import('./pages/admin/identity-manager.astro.mjs');
const _page7 = () => import('./pages/admin/students.astro.mjs');
const _page8 = () => import('./pages/admin/subjects.astro.mjs');
const _page9 = () => import('./pages/admin.astro.mjs');
const _page10 = () => import('./pages/dashboard/edit.astro.mjs');
const _page11 = () => import('./pages/dashboard/events.astro.mjs');
const _page12 = () => import('./pages/dashboard/feed.astro.mjs');
const _page13 = () => import('./pages/dashboard/settings.astro.mjs');
const _page14 = () => import('./pages/dashboard.astro.mjs');
const _page15 = () => import('./pages/login.astro.mjs');
const _page16 = () => import('./pages/p/_username_.astro.mjs');
const _page17 = () => import('./pages/register.astro.mjs');
const _page18 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/admin/campuses.astro", _page2],
    ["src/pages/admin/dashboard.astro", _page3],
    ["src/pages/admin/events-dispatcher.astro", _page4],
    ["src/pages/admin/feed-governance.astro", _page5],
    ["src/pages/admin/identity-manager.astro", _page6],
    ["src/pages/admin/students.astro", _page7],
    ["src/pages/admin/subjects.astro", _page8],
    ["src/pages/admin/index.astro", _page9],
    ["src/pages/dashboard/edit.astro", _page10],
    ["src/pages/dashboard/events.astro", _page11],
    ["src/pages/dashboard/feed.astro", _page12],
    ["src/pages/dashboard/settings.astro", _page13],
    ["src/pages/dashboard/index.astro", _page14],
    ["src/pages/login.astro", _page15],
    ["src/pages/p/[username].astro", _page16],
    ["src/pages/register.astro", _page17],
    ["src/pages/index.astro", _page18]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "721c20d9-24fb-48fe-a3e7-14acf115c675",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
