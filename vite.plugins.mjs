export function fixCookieImport() {
  return {
    name: "fix-cookie-import",
    transform(code, id) {
      if (id.includes("@supabase/ssr") && (id.includes("cookies.js") || id.includes("cookies.mjs"))) {
        return code.replace(
          `import { parse, serialize } from "cookie"`,
          `import cookie from "cookie"; const { parse, serialize } = cookie;`
        );
      }
    },
  };
}
