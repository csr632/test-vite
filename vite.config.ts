import type { UserConfig } from "vite";
import mdx from "vite-plugin-mdx";
import reactRefresh from "@vitejs/plugin-react-refresh";

export default {
  jsx: "react",
  plugins: [reactRefresh(), mdx()],
} as UserConfig;
