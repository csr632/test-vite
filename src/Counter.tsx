import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log("Counter render");
  return (
    <p>
      Counter:
      <button
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        {count}
      </button>
    </p>
  );
};

export default Counter;
