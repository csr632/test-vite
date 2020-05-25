import * as vpr from "vite-plugin-react";
import * as mdx from "@mdx-js/mdx";
import type { UserConfig } from "vite";

const DEFAULT_RENDERER = `
import React from 'react'
import { mdx } from '@mdx-js/react'
`;

module.exports = {
  jsx: "react",
  plugins: [vpr],
  transforms: [
    {
      test(path, query) {
        if (/\.mdx?$/.test(path)) {
          return true;
        }
        return false;
      },
      async transform(code, isImport, isBuild, path, query, getEsBuild) {
        const jsx = await mdx(code);
        const esBuild = await getEsBuild();
        const { js } = await esBuild.transform(jsx, {
          loader: "jsx",
          target: "es2019",
          jsxFactory: "mdx",
        });
        const result = `${DEFAULT_RENDERER}\n${js}`;
        return result;
      },
    },
  ],
} as UserConfig;
