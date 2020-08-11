import type { UserConfig } from "vite";
import * as vpr from "vite-plugin-react";

module.exports = {
  jsx: "react",
  plugins: [vpr],
  optimizeDeps: {
    include: ["antd"],
    // exclude: ["react", "@pika/react"],
  },
} as UserConfig;
