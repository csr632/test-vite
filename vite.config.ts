import * as mdx from "@mdx-js/mdx";
import type { UserConfig } from "vite";
import { ensureEsbuildService } from "vite";
import { transformReactCode } from "vite-plugin-react/dist/transform";

const DEFAULT_RENDERER = `
import React from 'react'
import { mdx } from '@mdx-js/react'
`;

module.exports = {
  jsx: "react",
  plugins: [require("vite-plugin-react")],
  transforms: [
    {
      test(path, query) {
        if (/\.mdx?$/.test(path)) {
          return true;
        }
        return false;
      },
      async transform(code, isImport, isBuild, path) {
        const jsx = await mdx(code);
        const esBuild = await ensureEsbuildService();
        const { js } = await esBuild.transform(jsx, {
          loader: "jsx",
          target: "es2019",
          jsxFactory: "mdx",
        });
        const result = transformReactCode(`${DEFAULT_RENDERER}\n${js}`, path);
        return result;
      },
    },
  ],
} as UserConfig;
