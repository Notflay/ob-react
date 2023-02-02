import React from "react";
import useCounter from "../../hooks/useCounter";

export default function Counter() {
  const number = useCounter();

  return (
    <div>
      <h1 style={{ padding: "80px" }}>{number.number}</h1>
      <button onClick={number.increment} type="button">
        Increment
      </button>
      <button onClick={number.decrement} type="button">
        Decrement
      </button>
      <button type="button" onClick={number.resetNumber}>
        Reset
      </button>
    </div>
  );
}
