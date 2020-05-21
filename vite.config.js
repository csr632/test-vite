import replace from "@rollup/plugin-replace";
import vpr from "vite-plugin-react";

const replacedEnv = JSON.stringify(process.env.NODE_ENV || "development");

module.exports = {
  alias: {
    "styled-components":
      "styled-components/dist/styled-components.browser.esm.js",
  },
  jsx: "react",
  plugins: [vpr],
  rollupInputOptions: {
    plugins: [
      replace({
        "window.process.env.NODE_ENV": replacedEnv,
        "process.env.NODE_ENV": replacedEnv,
        include: ["**/@alifd/next/es/util/env.js"],
      }),
    ],
  },
  rollupPluginCommonJSNamedExports: {
    "react-sizeme": ["SizeMe"],
  },
  optimizeDeps: {
    commonJSWhitelist: ["moment"],
  },
};
