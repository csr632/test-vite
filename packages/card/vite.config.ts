import type { UserConfig } from "vite";
import * as vpr from "vite-plugin-react";
import pages from "vite-plugin-react-pages";
import mdx from "vite-plugin-mdx";
import * as path from "path";

module.exports = {
  jsx: "react",
  plugins: [vpr, mdx(), pages(path.join(__dirname, "demos"))],
  alias: {
    "my-card": "/src",
  },
  optimizeDeps: {
    include: ["react-router-dom"],
  },
  minify: false,
  outDir: "docs-dist",
} as UserConfig;
