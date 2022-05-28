import { useState } from "react";
import { Button } from "../button";
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
      <Button onClick={decrement} text="<" />

      <Number>{counter}</Number>
      
      <Button onClick={increment} text=">" />
    </Container>
  );
};
