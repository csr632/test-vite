import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Counter</p>
      <button
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        {count}
      </button>
    </div>
  );
};

export default Counter;
