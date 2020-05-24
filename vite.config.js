import replace from "@rollup/plugin-replace";

const replacedEnv = JSON.stringify(process.env.NODE_ENV || "development");

module.exports = {
  jsx: "react",
  rollupInputOptions: {
    plugins: [
      replace({
        "window.process.env.NODE_ENV": replacedEnv,
        include: ["**/@alifd/next/es/util/env.js"],
      }),
      replace({
        "process.env.NODE_ENV": replacedEnv,
      }),
    ],
  },
  optimizeDeps: {
    commonJSWhitelist: ["react", "react-dom", "moment"],
  },
};
