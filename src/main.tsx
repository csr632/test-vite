import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <Link to="/some-path.tsx">link</Link>
      </div>
      <Route path="/some-path.tsx">
        <App />
      </Route>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
