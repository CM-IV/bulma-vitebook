import preact from "@preact/preset-vite";
import { clientPlugin, defineConfig } from "@vitebook/client/node";
import { preactMarkdownPlugin } from "@vitebook/markdown-preact/node";
import { shikiMarkdownPlugin } from "@vitebook/markdown-shiki/node";
import { preactPlugin } from "@vitebook/preact/node";
import {
  defaultThemePlugin,
  DefaultThemeConfig,
} from "@vitebook/theme-default/node";

export default defineConfig<DefaultThemeConfig>({
  include: ["src/**/*.md", "src/**/*.story.{jsx,tsx}"],
  plugins: [
    preactMarkdownPlugin(),
    shikiMarkdownPlugin(),
    preactPlugin({ appFile: "App.tsx" }),
    clientPlugin(),
    defaultThemePlugin(),
    preact({ include: /\.([j|t]sx?|md)$/ }),
  ],
  site: {
    title: "Bulma Ui",
    description: "A UI Library for Bulma CSS",
    theme: {
      remoteGitRepo: {
        url: "vitebook/vitebook",
      },
    },
  },
});
