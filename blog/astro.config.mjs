import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
// import node from "@astrojs/node";

export default defineConfig({
  site: "https://chipsxp.com",
  integrations: [mdx(), sitemap(), tailwind()],
  output: "static", // This ensures a fully static build
  // adapter: node({
  //   mode: "standalone",
  // }),
});
