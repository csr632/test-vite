import type { UserConfig } from "vite";
import * as vpr from "vite-plugin-react";

module.exports = {
  jsx: "react",
  plugins: [vpr],
} as UserConfig;
