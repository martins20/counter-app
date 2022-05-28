import { ButtonHTMLAttributes } from "react";
import { Container, Text } from "./styles";

type ButtonProps = {
  text: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({ text, ...rest }) => {
  return (
    <Container {...rest}>
      <Text>{text}</Text>
    </Container>
  );
};
