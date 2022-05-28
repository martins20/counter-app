import { useState } from "react";
import { Container, Number } from "./styles";

export const Counter = () => {
  let [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((state) => state + 1);
  };
  const decrement = () => {
    setCounter((state) => (state - 1 < 0 ? state : state - 1));
  };

  return (
    <Container>
      <button onClick={decrement}>
        <b>{"<"}</b>
      </button>
      <Number>{counter}</Number>
      <button onClick={increment}>
        <b>{">"}</b>
      </button>
    </Container>
  );
};
