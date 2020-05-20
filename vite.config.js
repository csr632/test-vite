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
  },
  rollupCommonjsPluginNamedExports: {
    "react-sizeme": ["SizeMe"]
  }
};
