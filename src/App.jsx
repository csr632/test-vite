import React from "react";
import "./App.css";
import Counter from "./Counter";

import styled from "styled-components";

const Box = styled.div`
  border: 1px solid red;
`;

function App() {
  return (
    <Box className="App">
      <p>Box2</p>
      <Counter />
    </Box>
  );
}

export default App;
