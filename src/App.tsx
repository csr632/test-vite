import React, { useState, useEffect } from "react";
// axios is a commonjs package
import axios from "axios";

import "./App.scss";
import Counter from "./Counter";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json")
      .then((value) => {
        setData(value.data[0].children[0]);
      });
  }, []);

  return (
    <div className="box">
      <p>Box2</p>
      <Counter />
      <hr />
      <p>Load data using axios:</p>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default App;
