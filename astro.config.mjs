import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

export default defineConfig({
  output: "server",
  adapter: vercel(),
  vite: {
    optimizeDeps: {
      include: ["cookie", "@supabase/ssr"],
    },
  },
});
