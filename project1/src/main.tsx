import React from "react";
import ReactDOM from "react-dom";

// import { util } from "/absolute/path/to/project2/util";
// import { util } from "/home/csr/test-vite/project2/util";

// @ts-ignore
import { util } from "@my-virtual-file";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

function App() {
  return <div>util: {util}</div>;
}
