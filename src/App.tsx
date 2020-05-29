import React, { lazy, Suspense, useState } from "react";
import "./App.css";
import styled from "styled-components";
import { useLazyData } from "./useLazyData";
const Counter = lazy(() => import("./Counter"));

const Box = styled.div`
  border: 1px solid red;
`;

function App() {
  console.log("App render");
  const [count, setCount] = useState(0);

  const data = useLazyData();

  return (
    <Box className="App">
      <p>
        App count: <button onClick={() => setCount(count + 1)}>{count}</button>
      </p>
      <p>Lazy data: {data}</p>
      <Suspense fallback={<p>Loading..</p>}>
        <Counter />
      </Suspense>
    </Box>
  );
}

export default App;
