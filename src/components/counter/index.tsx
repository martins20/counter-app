import { KeyboardEventHandler, useEffect, useState } from "react";
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

  const incrementOrDecrementByKeyPress = ({ key }: KeyboardEvent) => {
    const isLeftKey = key === "ArrowLeft";
    const isRightKey = key === "ArrowRight";

    if (isRightKey) increment();
    if (isLeftKey) decrement();
  };

  useEffect(() => {
    document.addEventListener("keydown", incrementOrDecrementByKeyPress);

    return document.removeEventListener("keydown", () =>
      console.log("Removing the keyboard listener ...")
    );
  }, []);

  const incrementWithArrowKey = (
    event: KeyboardEventHandler<HTMLButtonElement>
  ) => {
    console.log({ event });
  };

  return (
    <Container>
      <Button
        onClick={decrement}
        text="<"
        onKeyDown={(event) => console.log(event)}
      />

      <Number>{counter}</Number>

      <Button onClick={increment} text=">" />
    </Container>
  );
};
