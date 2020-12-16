import React, { useState, useEffect } from "react";

import s from "./App.module.css";

import util1 from "./util1";
import util2 from "./util2";

function App() {
  return (
    <div className={s.box}>
      <p>Box2</p>
      <p>util1: {util1}</p>
      <p>util2: {util2}</p>
    </div>
  );
}

export default App;

if (import.meta.hot) {
  import.meta.hot!.acceptDeps("./util1", (newMod) => {
    console.log("acceptDeps util1:", newMod);
  });

  import.meta.hot!.acceptDeps("./util2", (newMod) => {
    console.log("acceptDeps util2:", newMod);
  });
}
