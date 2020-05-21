import replace from "@rollup/plugin-replace";

const replacedEnv = JSON.stringify(process.env.NODE_ENV || "development");

module.exports = {
  alias: {
    react: "@pika/react",
    "react-dom": "@pika/react-dom",
    "styled-components":
      "styled-components/dist/styled-components.browser.esm.js",
  },
  jsx: "react",
  rollupInputOptions: {
    // next目前用rollup的tree-shaking无法正确构建
    // https://github.com/alibaba-fusion/next/issues/1862
    treeshake: false,
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
