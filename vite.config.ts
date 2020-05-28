import type { UserConfig } from "vite";
import * as vpr from "vite-plugin-react";

module.exports = {
  jsx: "react",
  plugins: [vpr],
  rollupInputOptions: {
    plugins: [
      {
        name: "resolve-styled",
        resolveId(id) {
          if (id === "styled-components") {
            return this.resolve(
              "styled-components/dist/styled-components.browser.esm.js"
            );
          }
        },
      },
    ],
  },
} as UserConfig;
