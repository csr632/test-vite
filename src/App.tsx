import React, { lazy, Suspense, useState } from "react";
import "./App.css";
import styled from "styled-components";
import { useLazyData } from "./useLazyData";
import { useHook } from "./useHook";
const Counter = lazy(() => import("./Counter"));

const Box = styled.div`
  border: 1px solid red;
`;

function App() {
  console.log("App render");

  const [count, setCount] = useState(0);

  const data = useLazyData();

  const data2 = useHook();

  return (
    <Box className="App">
      <p>
        App count: <button onClick={() => setCount(count + 1)}>{count}</button>
      </p>
      <p>Lazy data: {data}</p>
      <p>data2: {data2}</p>
      <Suspense fallback={<p>Loading..</p>}>
        <Counter />
      </Suspense>
    </Box>
  );
}

export default App;
