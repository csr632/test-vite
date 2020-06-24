import React, { useState, useEffect } from "react";
import styled from "styled-components";
// axios is a commonjs package
import axios from "axios";

import "./App.css";
import Counter from "./Counter";

const Box = styled.div`
  border: 1px solid red;
`;

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
    <Box className="App">
      <p>Box2</p>
      <Counter />
      <hr />
      <p>Load data using axios:</p>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )}
    </Box>
  );
}

export default App;
