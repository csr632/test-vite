import React from "react";
import util from "./util";

class App extends React.Component {
  test = () => {};
  render() {
    this.test();
    util();
    return <div>Success!</div>;
  }
}

export default App;
