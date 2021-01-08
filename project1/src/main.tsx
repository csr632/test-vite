import React from "react";
import ReactDOM from "react-dom";

// import { util } from "../../project2/util";
import { util } from "/home/csr/test-vite/project2/util";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

function App() {
  return <div>util: {util}</div>;
}
