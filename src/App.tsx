import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const Page1 = React.lazy(() => import("./Page1"));
const Page2 = React.lazy(() => import("./Page2"));

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/page1">page1</Link>
        </li>
        <li>
          <Link to="/page2">page2</Link>
        </li>
      </ul>
      <Suspense fallback="Loading...">
        <Switch>
          <Route path="/page1" component={Page1}></Route>
          <Route path="/page2" component={Page2}></Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
