import type { UserConfig } from "vite";
import * as vpr from "vite-plugin-react";

module.exports = {
  jsx: "react",
  plugins: [vpr],
  rollupInputOptions: {
    plugins: [
      {
        name: "test",
        async resolveId(importee, importer) {
          if (importee.endsWith("Counter")) {
            const resolveRes = await this.resolve(importee, importer, {
              skipSelf: true,
            })!;
            this.emitFile({
              type: "chunk",
              id: resolveRes?.id!,
            });
            return resolveRes;
          }
        },
      },
    ],
  },
} as UserConfig;
