import React, { useState } from "react";
import s from "./Counter.module.css";


const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className={s.counter}>
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
