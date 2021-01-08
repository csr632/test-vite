import React from "react";
import ReactDOM from "react-dom";

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
